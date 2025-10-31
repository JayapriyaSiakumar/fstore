import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products, addToCart }) => {
  return (
    <div className="m-3.5 mt-25 sm:m-10 sm:mt-25 ">
      <ul className="grid  gap-3 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 ">
        {products &&
          products.map((ele) => {
            return (
              <li key={ele.id} className="">
                <ProductCard product={ele} addToCart={addToCart} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductsList;
