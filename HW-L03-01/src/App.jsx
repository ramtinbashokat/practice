import React from "react";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      description: "High-performance laptop",
    },
    { id: 2, name: "Phone", price: 699, description: "Latest smartphone" },
    {
      id: 3,
      name: "Headphones",
      price: 199,
      description: "Noise-canceling headphones",
    },
  ];
  const handleClick = () => {
    const inputValue = document.getElementById("inputField").value;
    console.log("input value", inputValue);
  };
  return (
    <>
      <div className="min-h-screen flex flex-col item-center justify-center bg-gray-100 p-4 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center ">
          product List
        </h1>
        <ProductList products={products} />
        <div className="p-6 flex flex-col items-center justify-center space-y-4">
          <input
            className="border p-2 rounded-md w-64 bg-white border-2 border-sky-500"
            type="text"
            id="inputField"
            placeholder="enter a value"
          />
          <button
            className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 p-[10px] cursor-pointer"
            onClick={handleClick}
          >
            show in console
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
