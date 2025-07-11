import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [rememberMe, setRememberMe] = useState(false)
  const [isRegistering, setIsRegistering] = useState(true)
  const navigate = useNavigate()

  // Check if Supabase is properly configured
  const isSupabaseConfigured = process.env.REACT_APP_SUPABASE_URL && process.env.REACT_APP_SUPABASE_ANON_KEY

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (isRegistering) {
      if (!formData.username) newErrors.username = 'Username is required'
      if (!formData.firstname) newErrors.firstname = 'First name is required'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (isRegistering) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmitWithSupabase = async () => {
    if (isRegistering) {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
            first_name: formData.firstname,
          }
        }
      })

      if (error) {
        console.error('Supabase signup error:', error)
        toast.error(error.message || 'Registration failed')
        return false
      }

      if (data.user && !data.user.email_confirmed_at) {
        toast.success('Registration successful! Please check your email to verify your account.')
      } else {
        toast.success('Registration successful!')
      }
      
      setIsRegistering(false)
      setFormData({
        username: '', firstname: '', email: '', password: '', confirmPassword: ''
      })
      return true
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) {
        console.error('Supabase signin error:', error)
        toast.error(error.message || 'Sign in failed')
        return false
      }

      if (data.user) {
        const userSession = {
          id: data.user.id,
          email: data.user.email,
          username: data.user.user_metadata?.username || data.user.user_metadata?.first_name || 'User',
          loginTime: new Date().toISOString(),
          rememberMe
        }

        localStorage.setItem('currentUser', JSON.stringify(userSession))
        
        if (rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify({
            email: formData.email,
            rememberMe: true
          }))
        }

        toast.success(`Welcome back, ${userSession.username}!`)
        setTimeout(() => navigate('/store'), 1000)
        return true
      }
    }
    return false
  }

  const handleSubmitWithLocalStorage = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    const users = JSON.parse(localStorage.getItem('users') || '[]')

    if (isRegistering) {
      const existing = users.find(u => u.email === formData.email)
      if (existing) {
        toast.error('Email already registered')
        return false
      }
      const newUser = {
        id: Date.now(),
        ...formData
      }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      toast.success('Registration successful! Please log in.')
      setIsRegistering(false)
      setFormData({
        username: '', firstname: '', email: '', password: '', confirmPassword: ''
      })
      return true
    }

    const user = users.find(u => u.email === formData.email)
    if (!user || user.password !== formData.password) {
      toast.error('Invalid email or password')
      return false
    }

    const userSession = {
      id: user.id,
      email: user.email,
      username: user.username,
      loginTime: new Date().toISOString(),
      rememberMe
    }
    localStorage.setItem('currentUser', JSON.stringify(userSession))
    if (rememberMe) {
      localStorage.setItem('rememberedUser', JSON.stringify({
        email: formData.email,
        rememberMe: true
      }))
    }
    toast.success(`Welcome back, ${user.username}!`)
    setTimeout(() => navigate('/store'), 1000)
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error('Please fix the errors below')
      return
    }

    setIsLoading(true)

    try {
      if (isSupabaseConfigured) {
        await handleSubmitWithSupabase()
      } else {
        await handleSubmitWithLocalStorage()
      }
    } catch (error) {
      console.error('Auth error:', error)
      toast.error('Operation failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider) => {
    if (!isSupabaseConfigured) {
      // Mock social login for development
      setIsLoading(true)
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        const mockSocialUser = {
          id: Date.now(),
          email: `user@${provider.toLowerCase()}.com`,
          username: `${provider}User${Math.floor(Math.random() * 1000)}`,
          provider,
          loginTime: new Date().toISOString()
        }
        localStorage.setItem('currentUser', JSON.stringify(mockSocialUser))
        toast.success(`Successfully signed in with ${provider}!`)
        setTimeout(() => navigate('/store'), 1000)
      } catch (error) {
        toast.error(`${provider} login failed. Please try again.`)
      } finally {
        setIsLoading(false)
      }
      return
    }

    // Real Supabase OAuth
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider.toLowerCase(),
        options: {
          redirectTo: `${window.location.origin}/store`
        }
      })

      if (error) {
        console.error('OAuth error:', error)
        
        // Handle specific OAuth configuration errors
        if (error.message.includes('OAuth') || error.message.includes('provider')) {
          toast.error(`${provider} login is not configured yet. Please use email/password login.`)
        } else {
          toast.error(`${provider} login failed: ${error.message}`)
        }
        return
      }

      // OAuth redirect will handle success
    } catch (error) {
      console.error('Social login error:', error)
      toast.error(`${provider} login failed. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  // Social provider icons
  const getSocialIcon = (provider) => {
    switch (provider) {
      case 'Google':
        return (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        )
      case 'Apple':
        return (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        )
      case 'Twitter':
        return (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1DA1F2">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        )
      default:
        return null
    }
  }

  // Check for existing session on component mount
  useEffect(() => {
    const checkSession = async () => {
      if (isSupabaseConfigured) {
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          navigate('/store')
        }
      }
    }

    checkSession()

    // Load remembered user from localStorage
    const rememberedUser = localStorage.getItem('rememberedUser')
    if (rememberedUser) {
      const userData = JSON.parse(rememberedUser)
      if (userData.rememberMe) {
        setFormData(prev => ({ ...prev, email: userData.email }))
        setRememberMe(true)
      }
    }

    // Listen for auth changes only if Supabase is configured
    if (isSupabaseConfigured) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
          navigate('/store')
        }
      })

      return () => subscription.unsubscribe()
    }
  }, [navigate, isSupabaseConfigured])

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-lime-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-md:py-8 max-sm:py-4 max-sm:px-2">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-md w-full space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-sm:p-4 max-md:p-5">
          <h2 className="text-xl font-bold text-center mb-4 max-sm:text-lg">
            {isRegistering ? 'Create a new account' : 'Login to your account'}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {(isRegistering ? ['username', 'firstname', 'email', 'password', 'confirmPassword'] : ['email', 'password']).map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 max-sm:text-xs">
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} *
                </label>
                <input
                  name={field}
                  type={field.toLowerCase().includes('password') ? 'password' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 max-sm:py-1.5 max-sm:text-sm ${errors[field] ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'}`}
                  placeholder={`Enter your ${field === 'confirmPassword' ? 'password again' : field}`}
                />
                {errors[field] && <p className="text-sm text-red-600 mt-1 max-sm:text-xs">{errors[field]}</p>}
              </div>
            ))}

            {!isRegistering && (
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-lime-600 border-gray-300 rounded max-sm:h-3 max-sm:w-3"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700 max-sm:text-xs">
                  Remember me
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors max-sm:py-1.5 max-sm:text-sm"
            >
              {isLoading ? (isRegistering ? 'Creating Account...' : 'Signing in...') : (isRegistering ? 'Create Account' : 'Sign in')}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {['Google', 'Apple', 'Twitter'].map((provider) => (
                <button
                  key={provider}
                  type="button"
                  onClick={() => handleSocialLogin(provider)}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors max-sm:py-1.5 max-sm:text-sm disabled:opacity-50"
                >
                  {getSocialIcon(provider)}
                  {isRegistering ? `Sign up with ${provider}` : `Sign in with ${provider}`}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm text-center text-gray-500">
              {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-indigo-600 hover:underline font-medium"
              >
                {isRegistering ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
