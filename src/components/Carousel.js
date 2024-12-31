import React from "react";

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
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide bg-lime-50 mx-auto max-w-lg"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={src}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev bg-black"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next bg-black"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
