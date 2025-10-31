import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setProducts(response.data);
      setStatus(false);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (product) => {
    const checkProduct = cart.find((ele) => ele.id === product.id);
    if (checkProduct) {
      alert("Product already in the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    const checkProduct = cart.find((ele) => ele.id === product.id);
    if (checkProduct) {
      setCart((prevItem) => prevItem.filter((ele) => ele.id !== product.id));
    }
  };

  return (
    <div>
      <Header
        cartCount={cart.length}
        cart={cart}
        removeFromCart={removeFromCart}
      />
      {status ? (
        <div className="flex h-screen items-center justify-center">loading</div>
      ) : (
        <ProductsList products={products} addToCart={addToCart} />
      )}
    </div>
  );
};

export default App;
