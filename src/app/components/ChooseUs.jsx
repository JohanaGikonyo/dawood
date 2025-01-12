import React from 'react';

function ChooseUs() {
  return (
    <div className="my-10 flex flex-col justify-center items-center py-10 gap-8 px-5 text-center">
      {/* Title Section */}
      <div>
        <h1 className="text-3xl font-bold text-teal-600">Why Choose Us</h1>
      </div>

      {/* Description Section */}
      <div className="text-gray-600 space-y-4 max-w-2xl">
        <p className="text-lg">
          With Damil Furnitures Design, you’ll get quality you can trust, 24/7
          support, professional design, and assured services.
        </p>
        <p className="text-lg">
          Shopping with us is easy and reliable — and we offer even more
          services to meet your needs!
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-teal-700 font-medium text-lg">
        <div className="flex flex-row items-center">
          <span className="text-4xl mb-2">🚀</span>
          <span>Fast Installations</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">✅</span>
          <span>Quality Guaranteed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🛍️</span>
          <span>Easy to Shop</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">📞</span>
          <span>24/7 Support</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">🔒</span>
          <span>Safe and Reliable</span>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
