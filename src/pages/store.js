'use client';
import { useState, useEffect } from 'react';
import { Dialog, RadioGroup } from '@headlessui/react';
import { XMarkIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
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
  const { addToCart, cartItems } = useCart();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    async function fetchAllProducts() {
      const urls = ["/data/products.json"];
      try {
        setLoading(true);
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((res) => res.json()));
        const allArticles = data
          .flatMap((d) => d.articles || d)
          .filter((a) => a && (a.title || a.name));
        setProducts(allArticles);
      } catch (error) {
        console.error("Failed to fetch multiple sources:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAllProducts();
  }, []);

  const filteredProducts = products
    .filter(product => 
      (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterCategory === 'all' || product.category?.toLowerCase() === filterCategory.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return (a.name || a.title).localeCompare(b.name || b.title);
      if (sortBy === 'price-low') return (a.priceCents || 0) - (b.priceCents || 0);
      if (sortBy === 'price-high') return (b.priceCents || 0) - (a.priceCents || 0);
      return 0;
    });

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

  const handleAddToCart = () => {
    if (selectedProduct) {
      const productToAdd = {
        ...selectedProduct,
        selectedColor: selectedColor?.name || null,
        selectedSize: selectedSize?.name || null,
      };
      addToCart(productToAdd);
      notifyAddedToCart(selectedProduct.name || selectedProduct.title);
      setOpen(false);
    }
  };

  const getUniqueCategories = () => {
    const categories = products.map(product => product.category).filter(Boolean);
    return ['all', ...new Set(categories)];
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilterCategory('all');
    setSortBy('name');
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 9);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-lime-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-lime-50 min-h-screen">
      <ToastContainer />

      {/* Header */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-lime-700 hover:text-lime-900 hover:bg-lime-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search and Cart */}
            <div className="flex items-center">
              {/* Search button - mobile */}
              <button
                type="button"
                className="lg:hidden p-2 text-lime-700 hover:text-lime-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>

            
            </div>
              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <a href="/cart" onClick={() => setCartOpen(true)} className="p-2 text-lime-700 hover:text-lime-900 relative">
                  <span className="sr-only">Cart</span>
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-3 py-1 text-xs font-bold leading-none text-lime-50 transform translate-x-1/2 -translate-y-1/2 bg-lime-700 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </a>
              </div>
            
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Search Input - mobile */}
              <div className="relative max-w-xs mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-lime-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-lime-300 rounded-md leading-5 bg-lime-50 placeholder-lime-400 focus:outline-none focus:placeholder-lime-300 focus:ring-1 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                />
              </div>

              {/* Category Filters - mobile */}
              <div className="px-2">
                <label htmlFor="category-mobile" className="block text-sm font-medium text-lime-700">Category</label>
                <select
                  id="category-mobile"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-lime-300 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm rounded-md"
                >
                  {getUniqueCategories().map(category => (
                    <option key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="hidden lg:flex items-center justify-between mb-8">
          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-lime-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-lime-300 rounded-md leading-5 bg-lime-50 placeholder-lime-400 focus:outline-none focus:placeholder-lime-300 focus:ring-1 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="ml-4">
            <label htmlFor="category" className="sr-only">Category</label>
            <select
              id="category"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="rounded-md border-lime-300 shadow-sm focus:border-lime-300 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
            >
              {getUniqueCategories().map(category => (
                <option key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="ml-4">
            <label htmlFor="sort" className="sr-only">Sort by</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-lime-300 shadow-sm focus:border-lime-300 focus:ring focus:ring-lime-200 focus:ring-opacity-50"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
            </select>
          </div>

          {/* Clear Filters */}
          {(searchQuery || filterCategory !== 'all' || sortBy !== 'name') && (
            <button
              onClick={clearFilters}
              className="ml-4 px-3 py-1 border border-lime-300 shadow-sm text-sm rounded-md text-lime-700 bg-white hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-lime-900">No products found</h3>
            <p className="mt-1 text-sm text-lime-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        ) : (
          <div className="mx-auto">
            {/* Product List - responsive grid */}
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {filteredProducts.slice(0, visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  onClick={() => {
                    setSelectedProduct(product);
                    setSelectedColor(product.colors?.[0] || null);
                    setSelectedSize(product.sizes?.[0] || null);
                    setOpen(true);
                  }}
                >
                  <div className="w-full min-h-60 bg-lime-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-90 lg:h-60">
                    <img
                      src={product.image}
                      alt={product.name || product.title}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-lime-900 font-medium">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name || product.title}
                      </h3>
                      <p className="mt-1 text-sm text-lime-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-lime-900">
                      ${product.priceCents ? (product.priceCents / 100).toFixed(2) : 'N/A'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleProducts < filteredProducts.length && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={loadMoreProducts}
                  className="px-9 py-3 border border-transparent text-base font-medium rounded-md text-lime-700 bg-lime-100 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        )}

        {/* Product Detail Dialog */}
        {selectedProduct && (
          <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 max-sm:p-2">
                <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-lime-600 hover:text-lime-900 max-sm:right-2 max-sm:top-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                  <div className="bg-white">
                    <div className="grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8 p-6 max-sm:p-4">
                      {/* Product Image */}
                      <div className="sm:col-span-4 lg:col-span-5">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-lime-50 overflow-hidden">
                          <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name || selectedProduct.title}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-lime-900 sm:pr-12">
                          {selectedProduct.name || selectedProduct.title}
                        </h2>

                        <section aria-labelledby="information-heading" className="mt-2">
                          <h3 id="information-heading" className="sr-only">Product information</h3>

                          <p className="text-xl text-lime-900">
                            ${selectedProduct.priceCents ? (selectedProduct.priceCents / 100).toFixed(2) : 'N/A'}
                          </p>

                          {/* Reviews */}
                          <div className="mt-4">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      (selectedProduct.rating?.stars || 0) > rating ? 'text-lime-500' : 'text-lime-200',
                                      'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {(selectedProduct.rating?.stars || 0)} out of 5 stars
                              </p>
                              <a href="#" className="ml-3 text-sm font-medium text-lime-600 hover:text-lime-500">
                                {selectedProduct.rating?.count || 0} reviews
                              </a>
                            </div>
                          </div>

                          <div className="mt-4 space-y-6">
                            <p className="text-base text-lime-600">
                              {selectedProduct.description || 'No description available.'}
                            </p>
                          </div>
                        </section>

                        <section aria-labelledby="options-heading" className="mt-8">
                          <h3 id="options-heading" className="sr-only">Product options</h3>

                          {/* Colors */}
                          {selectedProduct.colors?.length > 0 && (
                            <div>
                              <h4 className="text-sm text-lime-900 font-medium">Color</h4>
                              <RadioGroup
                                value={selectedColor}
                                onChange={setSelectedColor}
                                className="mt-2"
                              >
                                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                <div className="flex items-center space-x-3">
                                  {selectedProduct.colors.map((color) => (
                                    <RadioGroup.Option
                                      key={color.name}
                                      value={color}
                                      className={({ active, checked }) =>
                                        classNames(
                                          color.selectedClass,
                                          active && checked ? 'ring ring-offset-1' : '',
                                          !active && checked ? 'ring-2' : '',
                                          '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                        )
                                      }
                                    >
                                      <RadioGroup.Label as="span" className="sr-only">
                                        {color.name}
                                      </RadioGroup.Label>
                                      <span
                                        aria-hidden="true"
                                        className={classNames(
                                          color.class,
                                          'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                        )}
                                      />
                                    </RadioGroup.Option>
                                  ))}
                                </div>
                              </RadioGroup>
                            </div>
                          )}

                          {/* Sizes */}
                          {selectedProduct.sizes?.length > 0 && (
                            <div className="mt-8">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm text-lime-900 font-medium">Size</h4>
                                <a href="#" className="text-sm font-medium text-lime-600 hover:text-lime-500">
                                  Size guide
                                </a>
                              </div>

                              <RadioGroup
                                value={selectedSize}
                                onChange={setSelectedSize}
                                className="mt-2"
                              >
                                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                <div className="grid grid-cols-4 gap-2">
                                  {selectedProduct.sizes.map((size) => (
                                    <RadioGroup.Option
                                      key={size.name}
                                      value={size}
                                      disabled={!size.inStock}
                                      className={({ active }) =>
                                        classNames(
                                          size.inStock
                                            ? 'bg-white shadow-sm text-lime-900 cursor-pointer'
                                            : 'bg-lime-50 text-lime-200 cursor-not-allowed',
                                          active ? 'ring-2 ring-lime-500' : '',
                                          'group relative border rounded-md py-1 px-2 flex items-center justify-center text-sm font-medium uppercase hover:bg-lime-50 focus:outline-none sm:flex-1'
                                        )
                                      }
                                    >
                                      {({ active, checked }) => (
                                        <>
                                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                          {size.inStock ? (
                                            <span
                                              className={classNames(
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-lime-500' : 'border-transparent',
                                                'absolute -inset-px rounded-md pointer-events-none'
                                              )}
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <span
                                              aria-hidden="true"
                                              className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                            >
                                              <svg
                                                className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="none"
                                                stroke="currentColor"
                                              >
                                                <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                              </svg>
                                            </span>
                                          )}
                                        </>
                                      )}
                                    </RadioGroup.Option>
                                  ))}
                                </div>
                              </RadioGroup>
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={handleAddToCart}
                            className="mt-8 w-full bg-lime-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                          >
                            Add to bag
                          </button>
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </main>
    </div>
  );
}
