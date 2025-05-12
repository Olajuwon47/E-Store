'use client';
import { useState, useEffect } from 'react';
import { Dialog, RadioGroup } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCart } from './Cart/cartcontext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Store() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  const [loading, setLoading] =useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        // Check for cached data
        const cachedData = localStorage.getItem('/data/products.json');
        if (cachedData) {
          const data = JSON.parse(cachedData);
          if (Array.isArray(data)) {
            setProducts(data);
            setSelectedProduct(data[0]);
            setSelectedColor(data[0]?.colors?.[0] || null);
            setSelectedSize(data[0]?.sizes?.[0] || null);
          } else {
            console.error("Cached data is not an array.");
          }
          setLoading(false);
          return;
        }

        // Fetch data from API
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          localStorage.setItem('/data/products.json', JSON.stringify(data));
          setProducts(data);
          setSelectedProduct(data[0]);
          setSelectedColor(data[0]?.colors?.[0] || null);
          setSelectedSize(data[0]?.sizes?.[0] || null);
        } else {
          console.error("Fetched data is not an array.");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

       /* setLoading(true)
        const cachedData = localStorage.getItem('/data/products.json');
        if (cachedData) {
          const data = JSON.parse(cachedData);
          setProducts(data);
          setLoading(false)
          setSelectedProduct(data[0]);
          setSelectedColor(data[0]?.colors?.[0] || null);
          setSelectedSize(data[0]?.sizes?.[0] || null);
          return;
        }*/
       /* setLoading(true); // Start loading
        const response = await fetch('http://localhost:3001/api/products', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        localStorage.setItem('/data/products.json', JSON.stringify(data));
        setProducts(data);
        setSelectedProduct(data[0]);
        setSelectedColor(data[0]?.colors?.[0] || null);
        setSelectedSize(data[0]?.sizes?.[0] || null);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false)
      }
    }
    fetchProducts();
  }, []);*/

  const notifyAddedToCart = (item) =>
    toast.success(`${item} added to cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#fff',
        color: '#000',
      },
    });

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 9);
  };

  if (loading  ) {
    return <div>Loading......</div>;
  }
  if (loading || !products || products.length === 0) {
    return <div>Loading......</div>;
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <ToastContainer />

      {/* Product List */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 bg-lime-100">
        {products.slice(0, visibleProducts).map((product) => (
          <article
            key={product.id}
            className="border p-4 rounded-lg hover:shadow-md"
            onClick={() => {
              setSelectedProduct(product);
              setSelectedColor(product.colors?.[0] || null);
              setSelectedSize(product.sizes?.[0] || null);
              setOpen(true);
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">${(product.priceCents / 100).toFixed(2)}</p>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < products.length && (
        <button
          onClick={loadMoreProducts}
          className="mt-4 px-4 py-2 bg-lime-200 rounded-lg hover:bg-lime-300"
        >
          Load More
        </button>
      )}

      {/* Product Detail Dialog */}
      {selectedProduct && (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
          <div className="fixed inset-0 bg-lime-50 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-gray-500 text-left shadow-xl transition-all sm:my-8">
                <button
                  type="button"
                  className="absolute right-4 top-4 text-gray-400 hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-12">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={500}
                    height={500}
                    className="col-span-4 rounded-lg object-cover"
                  />

                  <div className="col-span-8">
                    <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                    <p className="mt-2 text-xl">
                      ${selectedProduct.priceCents ? (selectedProduct.priceCents / 100).toFixed(2) : 'N/A'}
                    </p>

                    <div className="mt-4 flex items-center">
                      <div className="flex">
                        {[0, 1, 2, 3, 4].map((index) => (
                          <StarIcon
                            key={index}
                            className={classNames(
                              selectedProduct?.rating?.stars > index ? 'text-black' : 'text-gray-200',
                              'h-5 w-5'
                            )}
                          />
                        ))}
                      </div>
                      <p className="ml-2 text-sm">{selectedProduct?.rating?.count || 0} reviews</p>
                    </div>

                    {selectedProduct?.colors?.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium">Color</h3>
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-2 flex space-x-4"
                        >
                          {selectedProduct.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ checked }) =>
                                classNames(
                                  checked ? color.selectedclass : '',
                                  'relative cursor-pointer rounded-full p-2 focus:outline-none'
                                )
                              }
                            >
                              <span
                                className={classNames(
                                  color.class,
                                  'block h-8 w-8 rounded-full border border-black/10'
                                )}
                              />
                            </RadioGroup.Option>
                          ))}
                        </RadioGroup>
                      </div>
                    )}

                    {selectedProduct?.sizes?.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium">Size</h3>
                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="mt-2 grid grid-cols-4 gap-4"
                        >
                          {selectedProduct.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={({ checked }) =>
                                classNames(
                                  checked ? 'ring-indigo-500' : '',
                                  size.inStock
                                    ? 'bg-white text-gray-900'
                                    : 'bg-gray-50 text-gray-200',
                                  'group relative flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium uppercase'
                                )
                              }
                            >
                              <span>{size.name}</span>
                            </RadioGroup.Option>
                          ))}
                        </RadioGroup>
                      </div>
                    )}

                    <button
                      type="button"
                    onClick={() => {
                        addToCart(selectedProduct);
                        notifyAddedToCart(selectedProduct.name);
                      }}
                      className="mt-6 w-full rounded-md bg-lime-50 px-4 py-2 text-black hover:bg-lime-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
