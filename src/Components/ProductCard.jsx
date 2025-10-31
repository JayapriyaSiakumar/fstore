import React from "react";

const ProductCard = (props) => {
  const product = props.product;
  let cart = "";
  let addToCart, removeFromCart;
  if ("removeFromCart" in props) {
    cart = "removeFromCart";
    removeFromCart = props.removeFromCart;
  } else {
    cart = "addToCart";
    addToCart = props.addToCart;
  }
  return (
    <div className="w-full max-w-sm h-[450px] bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-70 overflow-hidden">
      <a href="#" className="h-[200px] flex justify-center align-center">
        <img
          className="p-8 rounded-t-lg max-h-[200px] min-h-[150px] align-center"
          src={product.image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <p className="line-clamp-4 mt-2 mb-2 text-neutral-800">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white ">
            ${product.price}
          </span>
          {cart === "addToCart" ? (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
              onClick={() => addToCart(product)}>
              Add to cart
            </button>
          ) : (
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-sm px-1 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 cursor-pointer"
              onClick={() => removeFromCart(product)}>
              Remove From cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
