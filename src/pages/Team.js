'use client';
import React from 'react';
const people = [
  {
    name: 'Olajuwon Adedeji',
    role: 'Founder & CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kemi Adebayo',
    role: 'Creative Director',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Samuel Udo',
    role: 'Head of Logistics & Fulfilment',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Amaka Nwosu',
    role: 'Customer Relations Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Adebayo Idris',
    role: 'Lead Frontend Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Zainab Musa',
    role: 'Social Media & Marketing',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function LeadershipTeam() {
  return (
    <div className="bg-white py-16 sm:py-24 max-sm:py-10 max-md:px-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 max-sm:px-4">
        <div className="grid gap-12 xl:grid-cols-3 max-sm:gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-sm:text-2xl max-md:text-3xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-sm:text-base max-md:text-lg">
              Our dedicated team brings experience, creativity, and energy to every part of the business—from design to delivery.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:col-span-2 max-sm:grid-cols-1 max-md:gap-y-10"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6 max-sm:gap-x-4">
                  <img
                    className="size-16 max-sm:size-12 rounded-full outline outline-1 -outline-offset-1 outline-black/5"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 max-sm:text-sm">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600 max-sm:text-xs">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
