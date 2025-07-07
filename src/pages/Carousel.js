import React, { useState, useEffect } from "react";

const images = [
  "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
  "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
  "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
  "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
  "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
  "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
  "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
  "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, index]));
            resolve(index);
          };
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Touch/swipe functionality for mobile
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
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
      className="carousel-container mt-9 bg-lime-50 mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg relative group max-md:max-w-2xl max-sm:max-w-full max-sm:mx-2 max-sm:rounded-md max-sm:shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        
        {/* Images container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative"
            >
              <img
                src={src}
                className="w-full h-80 object-cover max-md:h-64 max-sm:h-48"
                alt={`Slide ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x400/e5e7eb/6b7280?text=Image+Not+Found";
                }}
              />
              
              {/* Image overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Slide number indicator */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium max-sm:top-2 max-sm:right-2 max-sm:px-2 max-sm:py-0.5 max-sm:text-xs">
                {index + 1} / {images.length}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 max-md:left-2 max-md:p-2 max-sm:opacity-100 max-sm:bg-black/70 max-sm:p-1.5"
          aria-label="Previous image"
        >
          <svg 
            className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 max-md:right-2 max-md:p-2 max-sm:opacity-100 max-sm:bg-black/70 max-sm:p-1.5"
          aria-label="Next image"
        >
          <svg 
            className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 max-md:top-2 max-md:left-2 max-md:p-1.5 max-sm:opacity-100 max-sm:bg-black/70"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4 max-sm:w-3 max-sm:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4 max-sm:w-3 max-sm:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-md:bottom-3 max-sm:bottom-2 max-sm:space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 max-sm:w-2 max-sm:h-2 ${
              index === currentIndex
                ? 'bg-white shadow-lg scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 max-sm:h-0.5">
        <div 
          className="h-full bg-lime-400 transition-all duration-300 ease-out"
          style={{ 
            width: `${((currentIndex + 1) / images.length) * 100}%` 
          }}
        />
      </div>

      {/* Keyboard navigation hint */}
      <div className="absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-md:hidden">
        <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
          Use ← → keys to navigate
        </div>
      </div>
    </div>
  );
};

// Add keyboard navigation
const CarouselWithKeyboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />;
};

export default Carousel;
