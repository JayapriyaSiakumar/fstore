import React from "react";
import ProductCard from "./ProductCard";

const Modal = ({ isOpen, onClose, cart, removeFromCart }) => {
  if (!isOpen) return <></>; // Don't render if not open

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg max-w-5xl w-full max-h-full overflow-y-auto">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Cart Items
          </h3>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal">
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className=" p-4 md:p-5 space-y-4 ">
          {cart.length <= 0 ? (
            <h1 className="text-2xl text-center font-semibold">
              No Product added in Cart
            </h1>
          ) : (
            <ul className="grid gap-3 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
              {cart.map((ele) => (
                <li key={ele.id}>
                  <ProductCard product={ele} removeFromCart={removeFromCart} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            onClick={onClose}
            type="button"
            className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
