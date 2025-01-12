import React from 'react';
import Image from 'next/image';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Modal({ isOpen, onClose, item }) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gradient-to-t from-teal-50 to-teal-100 rounded-lg shadow-lg p-6 w-4/5 max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <Image
          src={item.img}
          alt={item.name}
          width={300}
          height={200}
          className="rounded-lg shadow-md mb-4"
          objectFit="cover"
        />
        <p className="text-sm mb-4">{item.quality}</p>
        <p className="text-sm mb-4">The Best Offer!</p>

        {/* WhatsApp Button */}
        <a
  href={`https://wa.me/254710434297?text=Hi, I'm interested in ${item.name}. How much does it cost, and how can I get it? `}
  target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
               <WhatsAppIcon fontSize="small" className="mr-2" />
               Order via WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Modal;
