import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel.js';
import ChooseUs from './chooseus.js';
import Subscribe from './Subscribe.js';
import Team from './Team.js';
import Testimonal from './Testimonal.js';

export default function Collection() {
  return (
    <>
      <div className="relative overflow-hidden bg-lime-50">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 max-sm:pt-12 max-md:pt-20 max-sm:pb-24 max-md:pb-36">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 max-sm:px-3 max-md:px-5">
            <div className="sm:max-w-lg max-sm:max-w-full">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl max-sm:text-2xl max-md:text-3xl">
                Fresh Arrivals for a Stylish Season
              </h1>
              <p className="mt-4 text-xl text-black max-sm:text-base max-md:text-lg">
                Embrace the warmth of the season with our newest collection — carefully curated to bring comfort, confidence, and style to your everyday look.
              </p>
            </div>
            <div>
              <div className="mt-10 max-sm:mt-6 max-md:mt-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8 max-sm:hidden max-md:hidden">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/store"
                  className="inline-block rounded-md border border-transparent bg-lime-50 px-8 py-3 text-center 
                  font-medium text-black hover:bg-lime-100 max-sm:px-6 max-sm:py-2 max-md:px-7 max-md:py-2.5"
                >
                  Shop the Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
       <ChooseUs />
       <Testimonal />
      <Subscribe />
      <Team/>
    </>
  );
}
