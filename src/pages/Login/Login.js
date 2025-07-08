import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [rememberMe, setRememberMe] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const navigate = useNavigate()

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error('Please fix the errors below')
      return
    }

    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      if (isRegistering) {
        const existing = users.find(u => u.email === formData.email)
        if (existing) {
          toast.error('Email already registered')
          setIsLoading(false)
          return
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
        return
      }

      const user = users.find(u => u.email === formData.email)
      if (!user || user.password !== formData.password) {
        toast.error('Invalid email or password')
        setIsLoading(false)
        return
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
    } catch (error) {
      toast.error('Operation failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider) => {
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
  }

  useEffect(() => {
    const rememberedUser = localStorage.getItem('rememberedUser')
    if (rememberedUser) {
      const userData = JSON.parse(rememberedUser)
      if (userData.rememberMe) {
        setFormData(prev => ({ ...prev, email: userData.email }))
        setRememberMe(true)
      }
    }
  }, [])

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

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 max-sm:py-1.5 max-sm:text-sm"
            >
              {isLoading ? (isRegistering ? 'Registering...' : 'Signing in...') : (isRegistering ? 'Register' : 'Sign in')}
            </button>

            <div className="flex flex-col gap-3 mt-4">
              {['Google', 'Apple', 'Twitter'].map((provider) => (
                <button
                  key={provider}
                  type="button"
                  onClick={() => handleSocialLogin(provider)}
                  className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition-all max-sm:py-1.5 max-sm:text-sm"
                >
                  Sign in with {provider}
                </button>
              ))}
            </div>

            <p className="mt-4 text-sm text-center text-gray-500">
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
