'use client'
import { useState, useEffect } from 'react'
import { Dialog, RadioGroup } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

/*const product = {
  const [products, setproducts] = useState(product.sizes[2])
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}*/

export default function Store() {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  /*const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])*/
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json')
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

         // Validate the fetched data
         if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Products data is not an array or is empty');
        }

         // Set products and default selected product
          setProducts(data);
          setSelectedProduct(data[0]);
          setSelectedColor(data[0]?.colors?.[0] || null);
          setSelectedSize(data[0]?.sizes?.[0] || null);
        } catch (error) {
          console.error('Failed to fetch products:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
       

  
    // Render loading state
  if (loading) {
    return <h4 className='items-center justify-center' >Loading products...</h4>;
  }

  // Render fallback if no products are available
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }
  function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  return (
    <>
    {/* Button to open the dialog */}
    {/*<button
      type="button"
      onClick={() => setOpen(true)}
      className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
    >
      Quick View
    </button>*/}

       {/* Product List */}
       <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {products.map((product) => (
          <div
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
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900">{product.name}</h3>
            <p className="text-gray-700">${product.priceCents ? (product.priceCents / 100).toFixed(2) : 'N/A'}</p>
          </div>
        ))}
      </div>

       {/* Product Detail Dialog */}
       {selectedProduct && (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
            {/* Close button */}
            <button
              type="button"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-12">
              {/* Product Image */}
              <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                className="col-span-4 w-full rounded-lg object-cover"
              />

              {/* Product Details */}
              <div className="col-span-8">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <p className="mt-2 text-xl text-gray-900"> ${selectedProduct.priceCents ? (selectedProduct.priceCents / 100).toFixed(2) : 'N/A'}</p>

                {/* Reviews */}
                <div className="mt-4 flex items-center">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <StarIcon
                        key={index}
                        className={classNames(
                          selectedProduct?.rating?.stars > index ? 'text-green-600' : 'text-gray-200',
                          'h-5 w-5'                         
                        )}
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-600">
                  {selectedProduct?.rating?.count || 0}reviews</p>
                </div>

                {/* Colors */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2 flex space-x-4"
                  >
                     {selectedProduct?.colors?.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ checked }) =>
                          classNames(
                            checked ? color.selectedClass : '',
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

                {/* Sizes */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-2 grid grid-cols-4 gap-4"
                  >
                    {selectedProduct?.sizes?.map((size) => (
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

                {/* Add to bag button */}
                <button
                  type="button"
                  className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
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
  )
}
