import React from 'react'

export default function ChooseUs() {
  return (
    <div className="bg-white">
      {/* Hero Section 
      <div className="relative isolate px-6 pt-14 lg:px-8 max-sm:px-4">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-lime-400 to-lime-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 max-md:py-24 max-sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl max-md:text-3xl max-sm:text-2xl">
              Why Choose Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-md:text-base max-sm:text-sm max-sm:mt-4">
              Discover what makes us the preferred choice for thousands of customers worldwide. 
              We're committed to excellence in every aspect of our service.
            </p>
          </div>
        </div>
      </div>*/}

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-sm:gap-6">
  <div className="text-center">
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 max-sm:h-10 max-sm:w-10">
      <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l1 2h13l1-2h2M6 10V6a2 2 0 012-2h8a2 2 0 012 2v4" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 max-sm:text-base">Fast Delivery</h3>
    <p className="mt-1 text-sm text-gray-600 max-sm:text-xs">2–4 day shipping across Nigeria</p>
  </div>

  <div className="text-center">
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 max-sm:h-10 max-sm:w-10">
      <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.333-2 4-2 5 0s-1 4-2.5 5C12.5 14 12 16 12 16s-.5-2-2.5-3C8 12 6.667 10 7 8s3.667-2 5 0z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 max-sm:text-base">Quality Products</h3>
    <p className="mt-1 text-sm text-gray-600 max-sm:text-xs">Curated and guaranteed authentic</p>
  </div>

  <div className="text-center">
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 max-sm:h-10 max-sm:w-10">
      <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 22a10 10 0 100-20 10 10 0 000 20z" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 max-sm:text-base">Secure Checkout</h3>
    <p className="mt-1 text-sm text-gray-600 max-sm:text-xs">Paystack, Flutterwave, SSL protected</p>
  </div>

  <div className="text-center">
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 max-sm:h-10 max-sm:w-10">
      <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14v7m0 0l3-3m-3 3l-3-3" />
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 max-sm:text-base">Free Returns</h3>
    <p className="mt-1 text-sm text-gray-600 max-sm:text-xs">7-day hassle-free policy</p>
  </div>
</div>


      {/* Main Features Section */}
      <div className="py-24 sm:py-32 max-md:py-16 max-sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-4">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-lime-600 max-sm:text-sm">
              Our Advantages
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-md:text-2xl max-sm:text-xl">
              Everything you need for the perfect shopping experience
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-md:text-base max-sm:text-sm max-sm:mt-4">
              We've built our reputation on delivering exceptional quality, service, and value to our customers.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl max-md:mt-12 max-sm:mt-8">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 max-sm:gap-y-8">
              <div className="relative pl-16 max-sm:pl-12">
                <dt className="text-base font-semibold leading-7 text-gray-900 max-sm:text-sm">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600 max-sm:h-8 max-sm:w-8">
                    <svg className="h-6 w-6 text-white max-sm:h-4 max-sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Premium Quality Products
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 max-sm:text-sm">
                  We carefully curate our collection to ensure every item meets our strict quality standards. 
                  From materials to craftsmanship, we never compromise on excellence.
                </dd>
              </div>
              <div className="relative pl-16 max-sm:pl-12">
                <dt className="text-base font-semibold leading-7 text-gray-900 max-sm:text-sm">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600 max-sm:h-8 max-sm:w-8">
                    <svg className="h-6 w-6 text-white max-sm:h-4 max-sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Lightning Fast Delivery
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 max-sm:text-sm">
                  Get your orders delivered in record time with our expedited shipping network. 
                  Most orders are processed and shipped within 24 hours.
                </dd>
              </div>
              <div className="relative pl-16 max-sm:pl-12">
                <dt className="text-base font-semibold leading-7 text-gray-900 max-sm:text-sm">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600 max-sm:h-8 max-sm:w-8">
                    <svg className="h-6 w-6 text-white max-sm:h-4 max-sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  Easy Returns & Exchanges
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 max-sm:text-sm">
                  Not satisfied with your purchase? No problem! We offer hassle-free returns and exchanges 
                  within 30 days of purchase, no questions asked.
                </dd>
              </div>
              <div className="relative pl-16 max-sm:pl-12">
                <dt className="text-base font-semibold leading-7 text-gray-900 max-sm:text-sm">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600 max-sm:h-8 max-sm:w-8">
                    <svg className="h-6 w-6 text-white max-sm:h-4 max-sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  24/7 Customer Support
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 max-sm:text-sm">
                  Our dedicated support team is available around the clock to assist you with any questions, 
                  concerns, or issues you may have.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-lime-50 py-24 sm:py-32 max-md:py-16 max-sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-4">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-md:text-2xl max-sm:text-xl">
                Trusted by thousands of customers
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 max-md:text-base max-sm:text-sm">
                Our numbers speak for themselves
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 max-md:mt-12 max-sm:mt-8">
              <div className="flex flex-col bg-white p-8 max-md:p-6 max-sm:p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-600 max-sm:text-xs">
                  Happy Customers
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 max-md:text-2xl max-sm:text-xl">
                  50,000+
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 max-md:p-6 max-sm:p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-600 max-sm:text-xs">
                  Products Sold
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 max-md:text-2xl max-sm:text-xl">
                  200,000+
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 max-md:p-6 max-sm:p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-600 max-sm:text-xs">
                  Countries Served
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 max-md:text-2xl max-sm:text-xl">
                  25+
                </dd>
              </div>
              <div className="flex flex-col bg-white p-8 max-md:p-6 max-sm:p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-600 max-sm:text-xs">
                  Years of Excellence
                </dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 max-md:text-2xl max-sm:text-xl">
                  10+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Additional Benefits Section */}
      <div className="py-24 sm:py-32 max-md:py-16 max-sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-4">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-md:text-2xl max-sm:text-xl">
              More Reasons to Choose Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-md:text-base max-sm:text-sm max-sm:mt-4">
              We go above and beyond to ensure your complete satisfaction
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none max-md:mt-12 max-sm:mt-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 max-md:gap-y-12 max-sm:gap-y-8">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  {/* Placeholder Shield icon as original path was incomplete */}
                  <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622A11.99 11.99 0 0018.402 6a11.959 11.959 0 01-3.198-.788Z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 max-sm:text-base">Secure Payments</dt>
                <dd className="mt-2 leading-7 text-gray-600 max-sm:text-sm">
                  Shop with confidence knowing your payments are processed securely through our encrypted gateway.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662a49.444 49.444 0 000 7.324 4.006 4.006 0 003.7 3.7c1.21.092 2.43.138 3.662.138s2.453-.046 3.662-.138a4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662zM14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 max-sm:text-base">Exclusive Deals</dt>
                <dd className="mt-2 leading-7 text-gray-600 max-sm:text-sm">
                  Sign up for our newsletter to receive exclusive deals, promotions, and early access to new arrivals.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg className="h-6 w-6 text-lime-600 max-sm:h-5 max-sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-gray-900 max-sm:text-base">Mobile Friendly</dt>
                <dd className="mt-2 leading-7 text-gray-600 max-sm:text-sm">
                  Enjoy a seamless shopping experience on any device with our responsive and mobile-friendly website.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
