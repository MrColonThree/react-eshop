import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  let budget = 2000;
  const [remaining, setRemaining] = useState([budget]);

  const handleClickAddToCart = (product) => {
    const isExist = cart.find((item) => item.id == product.id);
    let sum = product.price;
    if (!isExist) {
      const newCart = [...cart, product];

      cart.forEach((item) => {
        sum += item.price;
      });
      const temp = budget - sum;
      if (temp < 0) {
        return alert("Balance Empty!!!");
      } else {
        setTotalCost(sum);
        setRemaining(temp);
        setCart(newCart);
      }
    }
  };

  return (
    <>
      <div className="text-center">
        <button className="text-blue-600 text-5xl font-semibold text-center mb-5 rounded-2xl shadow-xl shadow-blue-100 border-2 px-5 py-3">
          E-Shop
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Products handleClickAddToCart={handleClickAddToCart}></Products>
        <Cart
          cart={cart}
          remaining={remaining}
          totalCost={totalCost}
          budget={budget}
        ></Cart>
      </div>
    </>
  );
}

export default App;
