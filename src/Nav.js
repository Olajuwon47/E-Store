//'use client';
import { useState } from 'react';
import { useCart } from './pages/Cart/cartcontext.js';
import { Dialog, DialogBackdrop, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
/*import Store from '../pages/store.js'; 
import Cart from '../pages/cart.js';
//import Orders from './pages/orders.js';
//import Track from './pages/track.js';
import Login from '../pages/Login/Login.js';
import Signup from '../pages/Login/Sign up.js';*/

const navigation = {
  pages: [
    { name: 'Stores', href: '/store' },
    { name: 'Order', href: '/order' },
    { name: 'Track', href: '/track' },
  ],
};
export default function Nav() {
  const [open, setOpen] = useState(false);
   const { qua } = useCart()
  //const [count, setCount] = useState(0);
  /*Aconst handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Increment the count
  };*/
    
  return (
    <div className="">
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
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            {/* Navigation Links */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link to={page.href} className="-m-2 block p-2 font-medium text-black">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link to="/Login" className="-m-2 block p-2 font-medium text-black">
                  Sign in
                </Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      {/* Desktop navigation */}
      <header className="relative bg-lime-100">
        <p className="flex h-10 items-center justify-center  px-4  beatFade text-sm font-medium text-black sm:px-6 lg:px-8">
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
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                  <span className="sr-only">Your Company</span>
                  <img alt="Logo" src="../images/jaywon 1.jpg" className="h-8 w-auto"/> 
              </div>
              {/* Navigation Links */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-black hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="/Login" className="text-sm font-medium text-black hover:text-gray-800">
                    Sign in
                  </Link>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="/Sign up" className="text-sm font-medium text-black hover:text-gray-800">
                    Signup
                  </Link>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                </div>
              
                {/* Search */}
                {/* <div className="flex lg:ml-6 mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                  <Link to="/SearchBox" className="p-2 text-black hover:text-gray-500">
                    <span className="sr-only">Search</span>
                      <label className="mdl-button mdl-js-button mdl-button--icon"
               for="fixed-header-drawer-exp">
          <span className="sr-only">Search</span>
        </label>
         <div class="mdl-textfield__expandable-holder">
          <input class="mdl-textfield__input" type="text" name="sample"
                 id="fixed-header-drawer-exp">
        </div>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </Link>
                </div>*/}

                {/* Search */}
                  <div className="flex lg:ml-6 items-center">
                      <span className="sr-only">Search</span>
                      <label htmlFor="search-input" className="cursor-pointer">
                        <span className="sr-only">Search</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="search"
                          id="search-input"
                          className="pl-2 pr-8 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                          placeholder="Search"
                        />
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                        />
                      </div>
                    
                  </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <img alt="Cart" src="../images/icons/cart-icon.png" className="h-8 w-auto" />
                    <span className="ml-2 text-sm font-medium text-black group-hover:text-gray-800">
                    {qua}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
   
      
    </div>
  );
}