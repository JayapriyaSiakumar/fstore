import React, { useState } from "react";
import Logo from "../assets/storeIcon.png";
import { FaCartArrowDown } from "react-icons/fa";
import Modal from "./Modal";

const Header = ({ cartCount, cart, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="bg-gray-200 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="FStore Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FStore
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={openModal}
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  cursor-pointer">
              <FaCartArrowDown className="text-xl " />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                {cartCount}
              </div>
            </button>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default Header;
