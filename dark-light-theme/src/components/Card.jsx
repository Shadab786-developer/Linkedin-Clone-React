const Card = ({ image, name, price, review }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-200">
      {/* Banner Image */}
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
          {name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base text-wrap">
          {review}
        </p>
        <p className="text-green-600 dark:text-green-400 font-semibold text-lg">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Card;
