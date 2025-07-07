import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation and Link from react-router-dom

const TrackOrder = () => {
  const location = useLocation(); // Hook to access URL's location object
  const queryParams = new URLSearchParams(location.search);
  const queryOrderId = queryParams.get('orderId'); // Get orderId from URL query

  const [orderId, setOrderId] = useState(queryOrderId || '');
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (queryOrderId) {
      handleTrackOrder(queryOrderId);
    }
  }, [queryOrderId]);

  const handleTrackOrder = (idToTrack = orderId) => {
    setError('');
    setOrderStatus(null);

    if (!idToTrack) {
      setError('Please enter an Order ID.');
      return;
    }

    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const foundOrder = storedOrders.find(order => order.id === idToTrack);

    if (foundOrder) {
      setOrderStatus(foundOrder);
    } else {
      setError('Order not found. Please check the Order ID.');
    }
  };

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

  return (
    <div className="bg-lime-50 min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-lime-900 mb-8 text-center">Track Your Order</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-6">
            <label htmlFor="orderId" className="block text-sm font-medium text-lime-700">
              Enter Order ID
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="orderId"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleTrackOrder();
                  }
                }}
                className="block w-full flex-1 rounded-none rounded-l-md border-lime-300 focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                placeholder="e.g., ORD-16789012345"
              />
              <button
                type="button"
                onClick={() => handleTrackOrder()}
                className="inline-flex items-center rounded-r-md border border-l-0 border-lime-300 bg-lime-50 px-4 text-sm font-medium text-lime-700 hover:bg-lime-100 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
              >
                Track
              </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          {orderStatus && (
            <div className="mt-8 border-t border-lime-200 pt-6">
              <h2 className="text-2xl font-bold text-lime-900 mb-4">Order Details</h2>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Order ID:</span> {orderStatus.id}
              </p>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Current Status:</span>{' '}
                <span className="font-bold text-lime-800">{orderStatus.status}</span>
              </p>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Order Date:</span> {orderStatus.date}
              </p>
              <p className="text-lg text-lime-700">
                <span className="font-semibold">Total:</span> ${orderStatus.total}
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-lime-900 mb-3">Tracking Progress</h3>
                <ol className="relative border-l border-lime-200">
                  {orderTrackingSteps.map((step, index) => (
                    <li key={step.status} className="mb-10 ml-4">
                      <div className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border ${getActiveStepIndex(orderStatus.status) >= index ? 'border-lime-600 bg-lime-600' : 'border-lime-300 bg-lime-300'}`}></div>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
