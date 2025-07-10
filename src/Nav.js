'use client';
import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import './App.css';
import Cart from './pages/cart.js';
import { useCart } from './pages/Cart/cartcontext.js'; // Import useCart

const navigation = {
  pages: [
    { name: 'Home', href: '/' }, 
    { name: 'Stores', href: '/store' },
    { name: 'About us', href: '/About' },
    { name: 'Contract', href: '/contract' },
    { name: 'Order', href: '/orders' }, 
    { name: 'Track', href: '/track' },
  ],
};

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [cartItemsCount, setCartItemsCount] = useState(0); // No longer needed, will use useCart
  const { cartItems } = useCart(); // Get cartItems from context

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a 
                    href={page.href} 
                    className="-m-2 block p-2 font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  src="https://tailwindcss.com/img/flags/flag-canada.svg"
                  alt=""
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onClose={setSearchOpen} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded bg-white p-6">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-lime-600 text-white px-4 py-2 rounded-r-md hover:bg-lime-700"
              >
                Search
              </button>
            </form>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Cart Component */}
      <Cart open={cartOpen} setOpen={setCartOpen} />

      <header className="relative bg-lime-700">
        <p className="flex h-10 items-center justify-center bg-lime-200 px-4 text-sm font-medium text-gray-900 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Mobile menu button */}
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="../images/jaywon 1.jpg"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-white hover:text-gray-100"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                {/* Desktop Search */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-white hover:text-gray-100"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div className="flex lg:hidden">
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-white hover:text-gray-100"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Currency Selector */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <a href="#" className="flex items-center text-white hover:text-gray-100">
                    <img
                      src="https://tailwindcss.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Account */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <span className="mx-4 h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                    Create account
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <button
                    type="button"
                    onClick={() => setCartOpen(true)}
                    className="group -m-2 flex items-center p-2 relative"
                  >
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-white group-hover:text-gray-100"
                    />
                    {cartItems.length > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {cartItems.length}
                      </span>
                    )}
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}