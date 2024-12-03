import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide bg-green-200"
      data-bs-ride="carousel"
      style={{ maxWidth: "600px", margin: "0 auto" }} // Center and limit the width
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg"
            className="d-block w-100"
            alt="Slide 1"
            style={{ height: "300px", objectFit: "cover" }} // Control height and fit
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg"
            className="d-block w-100"
            alt="Slide 2"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
            className="d-block w-100"
            alt="Slide 3"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg"
            className="d-block w-100"
            alt="Slide 4"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
            className="d-block w-100"
            alt="Slide 5"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg"
            className="d-block w-100"
            alt="Slide 6"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg"
            className="d-block w-100"
            alt="Slide 7"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
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
