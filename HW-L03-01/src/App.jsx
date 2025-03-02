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
  return (
    <div className="min-h-screen flex flex-col item-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        product List
      </h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
