'use client'
import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
//import Orders from './pages/orders.js';
//import Track from './pages/track.js';
import Collection from './components/collection.js';
import Team from './components/team.js';
//import Contract from './components/contract.js';
import Newletter from './components/newletter.js';
//import '../App.css';
//import { Link } from 'react-router-dom';
const navigation = {

  pages: [
    { name: 'Stores', href: '/store' },
    { name: 'Order', href: '/order' },
    { name: 'Track', href: '/track' },
    { name: 'Contract Us', href: '/contract' },
  ],
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-emerald-500">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-slate-300 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* as */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-black">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="/Login" className="-m-2 block p-2 font-medium text-black">
                  Sign in
                </a>
              </div>
            </div>

            <div className="border-t btorder-gray-200 px-4 py-6">
              <a href="/Currency" className="-m-2 flex items-center p-2">
                <span className="sr-only">currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-green-500">
        <p className="flex h-10 items-center beatFade justify-center bg-lime-400 px-4 text-sm font-medium text-black sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-black lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/nav">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="../images/jaywon 1.jpg"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a 
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-black hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/Login" className="text-sm font-medium text-black hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="/Currency" className="flex items-center text-gray-700 hover:text-gray-800">
                    <span className="sr-only">currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="/SearchBox" className="p-2 text-black hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>
                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-6">
                  <a href="/cart" className="group -m-2 flex items-center p-2">
                  <img
                    alt=""
                    src="../images/icons/cart-icon.png"
                    className="h-8 w-auto"
                  />
                    <span className="ml-2 text-sm font-medium text-black group-hover:text-gray-800">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Collection/>
      <Team/>
     <Newletter/>
       {/*<Contract/>*/}
    </div>
  )
}
