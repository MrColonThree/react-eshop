import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = ({ handleClickAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [isDescending, setIsDescending] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const sortProducts = () => {
    const sortedProducts = [...products];

    if (isDescending) {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
    setIsDescending(!isDescending);
  };


  return (
    <div className="w-full md:w-3/4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 md:mb-auto">
      <h1 className="text-2xl my-5 font-semibold">Number of products: {products.length}</h1>
      <div>
      <button onClick={()=>sortProducts(products)} className="bg-blue-500 text-xl font-semibold px-3 py-2 rounded-lg text-white">Sort by price</button>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClickAddToCart={handleClickAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
