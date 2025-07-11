import React from 'react';

const testimonials = [
  {
    name: 'Aisha Bello',
    title: 'Loyal Customer',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'Shopping at E‑Store Tawny changed how I see online shopping in Nigeria. Everything feels intentional—from product choices to packaging.',
  },
  {
    name: 'Chinedu Okafor',
    title: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'As someone who values efficiency, I was impressed by how quick their logistics are. No delays. No stress.',
  },
  {
    name: 'Fatima Yusuf',
    title: 'Fashion Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'From fashion to decor, this is my go-to place. I’ve recommended them to every friend I know.',
  },
  {
    name: 'Michael Adeyemi',
    title: 'Visual Artist',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'Their minimalist design and product quality speaks to my aesthetic. I love what this brand is doing.',
  },
  {
    name: 'Jennifer Eze',
    title: 'Mother & Entrepreneur',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'I ordered items for my kids and myself. Everything arrived well-packaged and as described. I’m impressed!',
  },
  {
    name: 'Ahmed Salisu',
    title: 'Tech Reviewer',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'E‑Store Tawny is the future of digital retail in West Africa. The site runs smoothly, and checkout is a breeze.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-16 max-sm:px-3 max-sm:py-10 max-md:py-20 sm:px-6 sm:py-24 md:py-32 lg:px-8">
      {/* Background and Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top_left,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 ring-indigo-50 shadow-indigo-600/10 max-sm:mr-8 max-md:mr-12 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 max-sm:text-2xl sm:text-4xl">
          Trusted by Thousands Across Nigeria
        </h2>
        <p className="mt-2 text-gray-600 text-base max-sm:text-sm sm:text-lg">
          Here’s what our community says about shopping with E‑Store Tawny.
        </p>
      </div>

      {/* Testimonials */}
      <div className="mt-16 grid gap-10 max-sm:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 max-sm:px-2">
        {testimonials.map((t, index) => (
          <figure
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md ring-1 ring-gray-200 hover:shadow-lg transition duration-300 ease-in-out text-center"
          >
            <blockquote className="text-gray-800 font-medium text-base leading-6 max-sm:text-sm sm:text-lg">
              <p>“{t.quote}”</p>
            </blockquote>
            <figcaption className="mt-6 flex flex-col items-center">
              <img
                alt={`Photo of ${t.name}`}
                src={t.image}
                className="rounded-full size-14 max-sm:size-12"
              />
              <div className="mt-2 text-sm sm:text-base">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-gray-600">{t.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold text-gray-900 max-sm:text-lg sm:text-2xl">
          Ready to experience the E‑Store difference?
        </h3>
        <a
          href="/store"
          className="mt-4 inline-block rounded-md bg-lime-500 px-6 py-3 text-white font-medium shadow-sm hover:bg-lime-200 transition max-sm:text-sm"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
