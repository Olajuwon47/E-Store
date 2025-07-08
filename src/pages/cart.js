'use client'
/*import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from './Cart/cartcontext.js';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Cart() {
  const [open, setOpen] = useState(true)
  const { cartItems, addToCart, removeFromCart } = useCart()
  const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  })
  //const [selectedProduct] = useState(null);
  const handleRemoveFromCart = (item) => {
    removeFromCart(item)
    notifyRemovedFromCart(item)
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceCents * item.quantity,
    0
  ) / 100;
  
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-lime-50 bg-opacity-7   5 transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition ease-in-out sm:duration-700">
              <div className="flex h-full flex-col overflow-y-scroll bg-lime-50 shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex Productss-start justify-between">
                  <ToastContainer />
                    <DialogTitle className="text-lg font-medium text-black">Shopping cart</DialogTitle>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="ml-3 h-7 flex Productss-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-8">
                  {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                          <li key={item.id || index} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="font-bold" >{item.name}</h3>
                                  <p className="ml-4">${(item.priceCents / 100).toFixed(2)} each</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                              </div>
                              <div className="flex flex-1 Productss-end justify-between text-sm">
                                <div className="flex Productss-center gap-2">
                                <button
                                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                  onClick={() => {
                                    addToCart(item)
                                  }}
                                >
                                  +
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                  onClick={() =>  
                                      item.quantity === 1
                                        ? handleRemoveFromCart(item)
                                        : removeFromCart(item)
                                    }
                                   
                                >
                                  -
                                </button>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFromCart(item)}
                                  className="font-medium text-red-600 hover:text-red-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                     )}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/store"
                      className="flex Productss-center justify-center rounded-md border border-transparent bg-lime-50 px-6 py-3 text-base font-medium text-balack shadow-sm hover:bg-lime-100"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping<span aria-hidden="true"> →</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}*/

/*'use client'
// import { useState } from 'react' // No longer needed for 'open' state here
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from './Cart/cartcontext.js';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Cart({ open, setOpen }) { // Accept open and setOpen as props
  // const [open, setOpen] = useState(true) // Removed local open state
  const { cartItems, addToCart, removeFromCart } = useCart()
  const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  })
  //const [selectedProduct] = useState(null);
  const handleRemoveFromCart = (item) => {
    removeFromCart(item)
    notifyRemovedFromCart(item)
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceCents * item.quantity,
    0
  ) / 100;

  // If open is not true (e.g. undefined when routed directly), consider a default or how to handle.
  // For now, it relies on the prop being passed correctly.
  // If setOpen is not provided (e.g. when routed directly), closing the dialog via its own X button might cause an error.
  // This could be handled by providing a default dummy function for setOpen if not passed.
  const handleClose = () => {
    if (setOpen) { // Check if setOpen is provided
      setOpen(false);
    } else {
      // Optional: Navigate away or handle differently if it's a page context
      // For now, it just won't do anything, preventing an error.
      console.warn("setOpen is not defined in Cart component. Cannot close via internal button if not used as a modal with setOpen prop.");
    }
  };
  
  return (
    <Dialog open={open || false} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-lime-50 bg-opacity-7   5 transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition ease-in-out sm:duration-700">
              <div className="flex h-full flex-col overflow-y-scroll bg-lime-50 shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex Productss-start justify-between">
                  <ToastContainer />
                    <DialogTitle className="text-lg font-medium text-black">Shopping cart</DialogTitle>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="ml-3 h-7 flex Productss-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-8">
                  {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                          <li key={item.id || index} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="font-bold" >{item.name}</h3>
                                  <p className="ml-4">${(item.priceCents / 100).toFixed(2)} each</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                              </div>
                              <div className="flex flex-1 Productss-end justify-between text-sm">
                                <div className="flex Productss-center gap-2">
                                <button
                                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                  onClick={() => {
                                    addToCart(item)
                                  }}
                                >
                                  +
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                  onClick={() =>  
                                      item.quantity === 1
                                        ? handleRemoveFromCart(item)
                                        : removeFromCart(item)
                                    }
                                   
                                >
                                  -
                                </button>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFromCart(item)}
                                  className="font-medium text-red-600 hover:text-red-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                     )}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/store"
                      className="flex Productss-center justify-center rounded-md border border-transparent bg-lime-50 px-6 py-3 text-base font-medium text-balack shadow-sm hover:bg-lime-100"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping<span aria-hidden="true"> →</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}*/

'use client'
// import { useState } from 'react' // No longer needed for 'open' state here
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from './Cart/cartcontext.js';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Cart({ open, setOpen }) { // Accept open and setOpen as props
  // const [open, setOpen] = useState(true) // Removed local open state
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useCart(); // Add clearCart and getCartTotal
  const navigate = useNavigate(); // Initialize useNavigate

  const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  })
  //const [selectedProduct] = useState(null);
  const handleRemoveFromCart = (item) => {
    removeFromCart(item)
    notifyRemovedFromCart(item)
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceCents * item.quantity,
    0
  ) / 100;

  // If open is not true (e.g. undefined when routed directly), consider a default or how to handle.
  // For now, it relies on the prop being passed correctly.
  // If setOpen is not provided (e.g. when routed directly), closing the dialog via its own X button might cause an error.
  // This could be handled by providing a default dummy function for setOpen if not passed.
  const handleClose = () => {
    if (setOpen) { // Check if setOpen is provided
      setOpen(false);
    } else {
      // Optional: Navigate away or handle differently if it's a page context
      // For now, it just won't do anything, preventing an error.
      console.warn("setOpen is not defined in Cart component. Cannot close via internal button if not used as a modal with setOpen prop.");
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const totalAmount = getCartTotal(); // Assuming getCartTotal returns amount in cents
    const newOrder = {
      id: Date.now().toString(),
      items: [...cartItems], // Create a copy of cart items for the order
      total: totalAmount,
      date: new Date().toISOString(),
      status: "Processing", // Initial status
    };

    try {
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
      existingOrders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(existingOrders));
      
      toast.success("Order placed successfully!");
      clearCart();
      if (setOpen) setOpen(false); // Close the modal if it's a modal
      navigate('/orders'); // Navigate to orders page
    } catch (error) {
      console.error("Error processing checkout:", error);
      toast.error("There was an issue placing your order.");
    }
  };
  
  return (
    <Dialog open={open || false} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-lime-50 bg-opacity-7   5 transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition ease-in-out sm:duration-700">
              <div className="flex h-full flex-col overflow-y-scroll bg-lime-50 shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex Productss-start justify-between">
                  <ToastContainer />
                    <DialogTitle className="text-lg font-medium text-black">Shopping cart</DialogTitle>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="ml-3 h-7 flex Productss-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-8">
                  {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                          <li key={item.id || index} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="font-bold" >{item.name}</h3>
                                  <p className="ml-4">${(item.priceCents / 100).toFixed(2)} each</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                              </div>
                              <div className="flex flex-1 Productss-end justify-between text-sm">
                                <div className="flex Productss-center gap-2">
                                <button
                                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                  onClick={() => {
                                    addToCart(item)
                                  }}
                                >
                                  +
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                  onClick={() =>  
                                      item.quantity === 1
                                        ? handleRemoveFromCart(item)
                                        : removeFromCart(item)
                                    }
                                   
                                >
                                  -
                                </button>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFromCart(item)}
                                  className="font-medium text-red-600 hover:text-red-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                     )}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleCheckout}
                      disabled={cartItems.length === 0}
                      className="w-full flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-lime-700 disabled:opacity-50"
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping<span aria-hidden="true"> →</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}