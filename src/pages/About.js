'use client';
import React from 'react';

const links = [
  { name: 'Shop Our Collection', href: '#' },
  { name: 'Customer Stories', href: '#' },
  { name: 'Sustainability Promise', href: '#' },
  { name: 'Meet the Team', href: '#' },
];

const stats = [
  { name: 'Orders Delivered', value: '25,000+' },
  { name: 'Happy Customers', value: '18,000+' },
  { name: 'Shipping Countries', value: '15+' },
  { name: 'Support Hours', value: '24/7' },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32 max-sm:py-16 max-md:py-20">
        <img
          alt="E-commerce display"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&h=1500&q=80"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl max-sm:text-2xl sm:text-5xl font-semibold tracking-tight text-white">
              About E‑Store
            </h2>
            <p className="mt-6 text-lg max-sm:text-base text-white">
              At E‑Store, we believe shopping should feel personal, purposeful, and powerful. Our journey
              started with a dream — to create a marketplace that connects quality with care, and convenience with trust.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 max-sm:text-sm max-sm:gap-4 gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10 text-white font-semibold">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="hover:underline">
                  {link.name} <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>

            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 max-sm:mt-12">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1 text-center sm:text-left">
                  <dt className="text-base text-white">{stat.name}</dt>
                  <dd className="text-3xl max-sm:text-xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* MISSION */}
      <section className="bg-white py-24 sm:py-32 max-sm:py-16 max-md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 max-sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg max-sm:text-base text-gray-700 leading-8">
              To empower every customer with access to beautiful, high-quality products — sourced ethically,
              priced fairly, and delivered with care. We exist to make online shopping simple, trustworthy, and joyful.
            </p>
            <p className="mt-4 text-lg max-sm:text-base text-gray-700 leading-8">
              Whether you're shopping for essentials or discovering something new, our mission is to exceed
              your expectations through great design, great service, and human touch.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 text-center">
            <div className="p-6 rounded-lg bg-lime-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Curated With Love</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                Every product is handpicked for quality, beauty, and usefulness — so you shop with confidence.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-lime-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Customers First</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                We prioritize your satisfaction above all — with honest support and simple policies.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-lime-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Sustainable Growth</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                We're committed to ethical sourcing, fair pricing, and low-waste shipping practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-gray-50 py-24 sm:py-32 max-sm:py-16 max-md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 max-sm:text-3xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg max-sm:text-base text-gray-700 leading-8">
              We dream of building a platform that redefines trust in e-commerce across Africa and beyond.
              A brand that is known not just for selling things, but for standing for something.
            </p>
            <p className="mt-4 text-lg max-sm:text-base text-gray-700 leading-8">
              Our long-term vision is to democratize access to quality goods, empower local creators,
              and inspire a new era of online commerce that is ethical, effortless, and empowering.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 text-center">
            <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">Trust in Every Order</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                From checkout to delivery, we aim for a seamless experience that delights.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">Power to the Makers</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                We support local artisans, designers, and emerging brands through meaningful partnerships.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">A Legacy of Excellence</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                We’re not chasing trends — we’re building something timeless, customer-first, and proudly African.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
