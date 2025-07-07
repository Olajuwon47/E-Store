import React from 'react';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32 max-sm:py-16 max-md:py-20">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&h=1500&q=80"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div aria-hidden="true" className="hidden sm:block sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:blur-3xl">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-20" />
        </div>
        <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 blur-3xl sm:top-[-28rem] sm:translate-x-0">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-20" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl max-sm:text-2xl sm:text-5xl font-semibold tracking-tight text-white">
              Work with us
            </h2>
            <p className="mt-6 text-lg max-sm:text-base text-white">
              Infused with a vibrant touch of originality, this is where human creativity shines.
              Dive into a world crafted with care, where stories connect and inspire.
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
      <section className="bg-white py-24 sm:py-32 max-sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 max-sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg max-sm:text-base text-gray-700 leading-8">
              Our mission is to harness the boundless power of human creativity, technology, and integrity
              to craft solutions that shape a better future. We strive to build not just a workplace, but
              a movement — where diverse minds meet, where stories matter, and where innovation never
              loses its soul.
            </p>
            <p className="mt-4 text-lg max-sm:text-base text-gray-700 leading-8">
              We believe in growing with empathy, working with transparency, and creating with purpose.
              Whether it's through our global outreach, our collaborative projects, or the everyday
              dedication of our team — we aim to leave every place, every person, better than we found it.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 text-center">
            <div className="p-6 rounded-lg bg-lime-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">People First</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                We nurture talent, support wellbeing, and lead with compassion — always putting people before processes.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-lime-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Purpose-Driven</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                Every product, every story, every effort is aligned with a vision larger than ourselves.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-lime-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Global Impact</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                With a presence across continents, we act local but think global — influencing change where it counts.
              </p>
            </div>
          </div>

          {/* Mission Images */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="Team brainstorming"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80"
              alt="People collaboration"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
              alt="Celebrating success"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-gray-50 py-24 sm:py-32 max-sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 max-sm:text-3xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg max-sm:text-base text-gray-700 leading-8">
              We envision a future where creativity and technology walk hand in hand — not in competition,
              but in harmony. A future where innovation doesn’t replace the human touch, but amplifies it.
              A world where people feel seen, heard, and empowered to rise.
            </p>
            <p className="mt-4 text-lg max-sm:text-base text-gray-700 leading-8">
              Our dream is to become a global catalyst — shaping industries, inspiring cultures, and creating
              ecosystems of opportunity. We are not just building a company; we are building a legacy
              rooted in purpose, elevated by people, and propelled by possibilities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 text-center">
            <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">Tech with Heart</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                Leveraging innovation to create soulful, human-centered experiences.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">Voices that Matter</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                Empowering diverse perspectives to lead the conversation and shape culture.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">Legacy over Hype</h3>
              <p className="mt-2 text-gray-600 text-sm max-sm:text-xs">
                Choosing long-term impact over short-term trends — always.
              </p>
            </div>
          </div>

          {/* Vision Images */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="Creative workspace"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80"
              alt="Innovative thinking"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
              alt="Global connection"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
          </div>
        </div>
      </section>
    </>
  );
}
