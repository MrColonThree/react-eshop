import { useState } from "react";

const Product = ({ product, handleClickAddToCart }) => {
  const { thumbnail, title, price, rating, stock, description } = product;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 50;
  const modifiedDescription =
    description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;

  const showSeeMore = description.length > maxLength;
  const handleSeeMoreClick = () => {
    setShowFullDescription(true);
  };
  return (
    <div className="p-5 rounded-lg shadow-lg border-2">
      <img className="h-48 mx-auto rounded-lg" src={thumbnail} alt="" />
      <h2 className="text-2xl font-semibold mt-5">{title}</h2>
      <div className="my-2">
        <p className="text-sm">
          {showFullDescription ? description : modifiedDescription}
          {showSeeMore && !showFullDescription && (
          <button
            className="text-blue-600 font-semibold"
            onClick={handleSeeMoreClick}
          >
            See More
          </button>
        )}
        </p>
        
      </div>
      <p className="text-xl">
        Price: <span className="text-blue-600 font-semibold">{price}$</span>
      </p>
      <p className="text-lg">
        Rating: <span className="text-orange-500 font-semibold">{rating} </span>
        Stock:
        <span className="text-green-500 font-semibold"> {stock}</span>
      </p>
      <div className="text-center">
        <button
          onClick={() => handleClickAddToCart(product)}
          className="bg-blue-500 text-xl font-semibold px-3 py-2 rounded-lg text-white mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
