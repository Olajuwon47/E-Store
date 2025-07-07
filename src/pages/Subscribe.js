'use client'
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribeAnother = () => {
    setIsSubscribed(false);
    setEmail('');
    setError('');
  };

  return (
    <div className="min-h-screen mb-9 bg-white flex items-center justify-center px-4 max-sm:px-2 max-md:px-3">
      <div className="max-w-4xl w-full">
        {!isSubscribed ? (
          // Subscription Form
          <div className="bg-white py-16 px-8 mt-24 rounded-lg shadow-lg sm:px-12 lg:py-20 lg:px-16 max-sm:py-12 max-sm:px-4 max-md:py-14 max-md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl max-sm:text-2xl max-md:text-3xl mb-4">
                STAY UPDATED WITH OUR NEWSLETTER
              </h1>
              <p className="pb-8 text-lg text-gray-600 max-sm:text-base max-md:text-lg max-sm:pb-6 max-md:pb-7">
                Get the latest updates, insights, and exclusive content delivered straight to your inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-sm:gap-3 max-md:gap-3">
                  <div className="w-full sm:max-w-md">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 placeholder-gray-500 focus:ring-2 focus:ring-lime-500 focus:border-lime-500 disabled:opacity-50 disabled:cursor-not-allowed max-sm:px-4 max-sm:py-2 max-md:px-4 max-md:py-2.5"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                {error && (
                  <div className="text-red-600 text-sm max-sm:text-xs">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md bg-lime-700 hover:bg-lime-200 hover:text-black text-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 max-sm:px-6 max-sm:py-2 max-sm:text-sm max-md:px-7 max-md:py-2.5"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </form>
              
              <p className="mt-6 text-sm text-gray-500 max-sm:text-xs max-md:text-sm">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        ) : (
          // Thank You Message
          <div className="bg-white py-16 px-8 mt-24 rounded-lg shadow-lg sm:px-12 lg:py-20 lg:px-16 max-sm:py-12 max-sm:px-4 max-md:py-14 max-md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <CheckCircleIcon className="h-16 w-16 text-green-500 max-sm:h-12 max-sm:w-12 max-md:h-14 max-md:w-14" />
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl max-sm:text-2xl max-md:text-3xl mb-4">
                Thank You for Subscribing!
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-sm:text-base max-md:text-lg max-sm:mb-6 max-md:mb-7">
                Welcome to our newsletter! You'll receive the latest updates and exclusive content in your inbox soon.
              </p>
              
              <div className="space-y-4 max-sm:space-y-3">
                <p className="text-base text-gray-500 max-sm:text-sm max-md:text-base">
                  🎉 You're all set! Check your email for a confirmation message.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-sm:gap-3 max-md:gap-3 max-sm:mt-6 max-md:mt-7">
                  <button
                    onClick={handleSubscribeAnother}
                    className="px-6 py-2 border border-lime-700 text-lime-700 rounded-md hover:bg-lime-50 transition-colors duration-200 max-sm:px-4 max-sm:py-1.5 max-sm:text-sm max-md:px-5 max-md:py-2"
                  >
                    Subscribe Another Email
                  </button>
                  
                  <a
                    href="/"
                    className="px-6 py-2 bg-lime-700 text-white rounded-md hover:bg-lime-200 hover:text-black transition-colors duration-200 max-sm:px-4 max-sm:py-1.5 max-sm:text-sm max-md:px-5 max-md:py-2"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg max-sm:mt-8 max-sm:p-4 max-md:mt-10 max-md:p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 max-sm:text-base max-md:text-lg">
                  What's Next?
                </h3>
                <ul className="text-sm text-gray-600 space-y-2 max-sm:text-xs max-md:text-sm">
                  <li>✅ Weekly newsletter with latest updates</li>
                  <li>✅ Exclusive content and insights</li>
                  <li>✅ Early access to new features</li>
                  <li>✅ Special offers and promotions</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
