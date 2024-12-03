import React, { useState } from "react";

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "NGN",
    label: "Naira",
    flag: "https://tailwindui.com/plus/img/flags/flag-nigeria.svg",
  });

  const currencies = [
    {
      code: "NGN",
      label: "Naira",
      flag: "https://tailwindui.com/plus/img/flags/flag-nigeria.svg",
    },
    {
      code: "USD",
      label: "US Dollar",
      flag: "https://tailwindui.com/plus/img/flags/flag-usa.svg",
    },
    {
      code: "GBP",
      label: "British Pound",
      flag: "https://tailwindui.com/plus/img/flags/flag-uk.svg",
    },
  ];

  return (
    <div className="border-t border-gray-200 px-4 py-6">
      <div className="relative inline-block">
        {/* Selected Currency Display */}
        <button
          className="flex items-center p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => document.getElementById("currency-menu").classList.toggle("hidden")}
        >
          <img
            alt={selectedCurrency.label}
            src={selectedCurrency.flag}
            className="block h-auto w-5 shrink-0"
          />
          <span className="ml-3 text-base font-medium text-gray-900">
            {selectedCurrency.label} ({selectedCurrency.code})
          </span>
          <svg
            className="ml-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Currency Dropdown */}
        <div
          id="currency-menu"
          className="hidden absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200"
        >
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => {
                setSelectedCurrency(currency);
                document.getElementById("currency-menu").classList.add("hidden");
              }}
              className="flex w-full items-center p-2 hover:bg-gray-100 focus:outline-none"
            >
              <img
                alt={currency.label}
                src={currency.flag}
                className="block h-auto w-5 shrink-0"
              />
              <span className="ml-3 text-base font-medium text-gray-900">
                {currency.label} ({currency.code})
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencySelector;
