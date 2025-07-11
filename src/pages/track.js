import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams and Link

const TrackOrder = () => {
  const { orderId } = useParams(); // Get orderId from URL parameters
  const [orderDetails, setOrderDetails] = useState(null); // Renamed for clarity
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setOrderDetails(null);

    if (!orderId) {
      setError('Order ID not provided in URL.');
      return;
    }

    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const foundOrder = storedOrders.find(order => order.id === orderId);

    if (foundOrder) {
      setOrderDetails(foundOrder);
    } else {
      setError('Order not found. Please check the Order ID.');
    }
  }, [orderId]); // Re-run effect if orderId from URL changes

  const orderTrackingSteps = [
    { status: 'Processing', description: 'Your order is being prepared for shipment.' },
    { status: 'Shipped', description: 'Your order has been shipped and is on its way.' },
    { status: 'Out for Delivery', description: 'Your order is out for delivery today.' },
    { status: 'Delivered', description: 'Your order has been successfully delivered.' },
  ];

  const getActiveStepIndex = (currentStatus) => {
    const index = orderTrackingSteps.findIndex(step => step.status === currentStatus);
    return index !== -1 ? index : 0; // Default to first step if status not found
  };

  if (error) {
    return (
      <div className="bg-lime-50 min-h-screen py-8 flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-lime-900 mb-8">Track Your Order</h1>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="mt-2 text-lg text-red-600">{error}</p>
            <Link to="/orders" className="mt-6 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700">
              Back to Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="bg-lime-50 min-h-screen py-8 flex flex-col items-center justify-center">
         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-lime-500"></div>
         <p className="mt-4 text-lime-700">Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="bg-lime-50 min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-lime-900 mb-8 text-center">Track Your Order</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="border-t border-lime-200 pt-6"> {/* Removed mt-8 to avoid double margin if error was previously shown */}
              <h2 className="text-2xl font-bold text-lime-900 mb-4">Order Details</h2>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Order ID:</span> {orderDetails.id}
              </p>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Current Status:</span>{' '}
                <span className="font-bold text-lime-800">{orderDetails.status}</span>
              </p>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Order Date:</span> {new Date(orderDetails.date).toLocaleDateString()}
              </p>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Total:</span> ${(orderDetails.total / 100).toFixed(2)}
              </p>

              <div className="mt-6">
                 <h3 className="text-md font-medium text-lime-800 mb-2">Items:</h3>
                 <ul className="list-disc list-inside text-sm text-lime-600">
                   {orderDetails.items.map((item, index) => (
                     <li key={index}>
                       {item.name || item.title} (x{item.quantity}) - ${((item.priceCents / 100) * item.quantity).toFixed(2)}
                       {item.selectedColor && `, Color: ${item.selectedColor}`}
                       {item.selectedSize && `, Size: ${item.selectedSize}`}
                     </li>
                   ))}
                 </ul>
               </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-lime-900 mb-3">Tracking Progress</h3>
                <ol className="relative border-l border-lime-200">
                  {orderTrackingSteps.map((step, index) => (
                    <li key={step.status} className="mb-10 ml-4">
                      <div className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border ${getActiveStepIndex(orderDetails.status) >= index ? 'border-lime-600 bg-lime-600' : 'border-lime-300 bg-lime-300'}`}></div>
                      <time className="mb-1 text-sm font-normal leading-none text-lime-400">
                        {step.status}
                      </time>
                      <h3 className="text-lg font-semibold text-lime-900">
                        {step.status}
                      </h3>
                      <p className="mb-4 text-base font-normal text-lime-500">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 text-center">
                <Link to="/orders" className="text-sm font-medium text-lime-600 hover:text-lime-500">
                  View All Orders
                </Link>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
