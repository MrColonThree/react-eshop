const SelectedItem = ({ product }) => {
  return (
    <div>
      <div className="flex justify-between text-lg font-semibold gap-1 py-2 border-b-2">
        <h2>{product.title}</h2>

        <p className="text-blue-600">{product.price}$</p>
      </div>
    </div>
  );
};

export default SelectedItem;
