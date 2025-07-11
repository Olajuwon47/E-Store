import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
    title: "Chic Fashion Picks",
    description: "Step into elegance with our curated fashion wear for the modern you.",
  },
  {
    src: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
    title: "Fragrances that Speak",
    description: "Awaken your senses with timeless scents from luxury brands.",
  },
  {
    src: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    title: "Dream in Comfort",
    description: "Experience serenity with our premium bedroom collection.",
  },
  {
    src: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    title: "Bold, Beautiful, You",
    description: "Reveal your inner artist with high-pigment palettes that shine.",
  },
  {
    src: "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
    title: "Artisan Accessories",
    description: "Handcrafted details to complete every look.",
  },
  {
    src: "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
    title: "Elegance in Every Corner",
    description: "Bathroom essentials that blend style with utility.",
  },
  {
    src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
    title: "Modern Lifestyle Pieces",
    description: "Minimal designs. Maximum impact.",
  },
  {
    src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
    title: "Relaxed Wear",
    description: "Easy comfort. Everyday elegance.",
  },
  {
    src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    title: "Smart Living Gadgets",
    description: "Tech that keeps your day smooth, connected, and simple.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((image, i) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, i]));
            resolve(i);
          };
          img.onerror = reject;
          img.src = image.src;
        });
      });
      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (e) {
        console.error("Image load error", e);
        setIsLoading(false);
      }
    };
    preloadImages();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goToNext();
    else if (distance < -minSwipeDistance) goToPrevious();
  };

  if (isLoading) {
    return (
      <div className="carousel-container bg-lime-50 mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg max-md:max-w-2xl max-sm:max-w-full max-sm:mx-2 max-sm:rounded-md">
        <div className="flex items-center justify-center h-80 max-md:h-64 max-sm:h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-600 max-sm:h-8 max-sm:w-8"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="carousel-container mt-9 bg-lime-50 mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg relative group max-md:max-w-2xl max-sm:max-w-full max-sm:mx-2 max-sm:rounded-md"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Slides */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.title}
              loading={index === 0 ? "eager" : "lazy"}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400/e5e7eb/6b7280?text=Image+Not+Found";
              }}
              className="w-full h-80 object-cover max-md:h-64 max-sm:h-48"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex flex-col justify-end max-md:p-4 max-sm:p-3">
              <h2 className="text-white text-2xl font-semibold max-md:text-xl max-sm:text-lg">{image.title}</h2>
              <p className="text-white text-sm mt-1 max-sm:text-xs">{image.description}</p>
              <a
                href="/shop"
                className="mt-3 inline-block text-sm bg-lime-500 text-white px-3 py-1 rounded hover:bg-lime-600 transition-all max-sm:text-xs max-sm:px-2 max-sm:py-0.5"
              >
                Shop Now
              </a>
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium max-sm:top-2 max-sm:right-2 max-sm:px-2 max-sm:py-0.5 max-sm:text-xs">
              {index + 1} / {images.length}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100 max-md:left-2 max-md:p-2 max-sm:opacity-100 max-sm:p-1.5">
        &#10094;
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100 max-md:right-2 max-md:p-2 max-sm:opacity-100 max-sm:p-1.5">
        &#10095;
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-md:bottom-3 max-sm:bottom-2 max-sm:space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 max-sm:w-2 max-sm:h-2 ${
              index === currentIndex ? "bg-white shadow-lg scale-110" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 max-sm:h-0.5">
        <div
          className="h-full bg-lime-400 transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;
