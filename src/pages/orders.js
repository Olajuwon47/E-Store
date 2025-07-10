import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="bg-lime-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-lime-900 mb-8 text-center">Your Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-lime-700">You haven't placed any orders yet.</p>
            <Link to="/store" className="mt-4 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ul role="list" className="divide-y divide-lime-200">
              {orders.map((order) => (
                <li key={order.id} className="py-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold text-lime-900">Order ID: {order.id}</h2>
                      <p className="text-sm text-lime-500">Date: {order.date}</p>
                      <p className="text-sm text-lime-500">Status: <span className="font-medium text-lime-700">{order.status}</span></p>
                    </div>
                    <div className="text-lg font-medium text-lime-900">
                      Total: ${order.total}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-md font-medium text-lime-800 mb-2">Items:</h3>
                    <ul className="list-disc list-inside text-sm text-lime-600">
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.name || item.title} (x{item.quantity}) - ${((item.priceCents / 100) * item.quantity).toFixed(2)}
                          {item.selectedColor && `, Color: ${item.selectedColor}`}
                          {item.selectedSize && `, Size: ${item.selectedSize}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link to={`/track/${order.id}`} className="text-sm font-medium text-lime-600 hover:text-lime-500">
                      Track Order <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
