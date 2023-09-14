import SelectedItem from "../SelectedItem/SelectedItem";

const Cart = ({ cart, remaining, totalCost, budget, handleRemove }) => {
  return (
    <div className="w-full md:w-1/4">
      <h2 className="text-2xl my-5 font-semibold">
        Products in cart: {cart.length}
      </h2>
      <div className="shadow-lg border-2 p-2 rounded-lg mb-5">
        <h2 className="text-lg font-semibold">
          Budget: <span className="text-sky-500">{budget}$</span>
        </h2>
        <h2 className="text-lg font-semibold">
          Remaining Balance: <span className="text-rose-500">{remaining}$</span>
        </h2>
        <h2 className="text-lg font-semibold">
          Total Cost: <span className="text-green-500">{totalCost}$</span>
        </h2>
      </div>
      <div className="shadow-lg rounded-lg px-2 ">
        {cart.map((product) => (
          <SelectedItem
            key={product.id}
            product={product}
            handleRemove={handleRemove}
          ></SelectedItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
