'use client'
import { useState } from 'react'
import { Link } from 'react-router-dom';
//import { ChevronDownIcon } from '@heroicons/react/20/solid'
//import { Field, Label, Switch } from '@headlessui/react'

export default function Contract() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="bg-lime-50 px-6 py-24 sm:py-32 lg:px-8">
      <form action="#" method="POST" className="mx-auto max-w-xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {['First name', 'Email'].map((label, index) => (
            <div key={index} className={label === 'Email' ? 'sm:col-span-2' : ''}>
              <label htmlFor={label.toLowerCase()} className="block text-sm font-semibold text-black">
                {label}
              </label>
              <input
                id={label.toLowerCase()}
                name={label.toLowerCase()}
                type={label === 'Email' ? 'email' : 'text'}
                className="mt-2 block w-full rounded-md px-3.5 py-2 text-black shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-300"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 block w-full rounded-md px-3.5 py-2 text-black shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex items-center sm:col-span-2">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-4 w-4 rounded bg-lime-200 text-green-600 focus:ring-2 focus:ring-gray-300"
            />
            <label htmlFor="agree" className="ml-3 text-sm text-black ">
              By selecting this, you agree to our{' '}
              <Link to="/law" className="font-semibold underline text-black">
                privacy policy
              </Link>
              .
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-lie-50 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-lime-100 focus:ring-2 focus:ring-green-600"
        >
          Let's talk
        </button>
      </form>
    </div>
  )
}
