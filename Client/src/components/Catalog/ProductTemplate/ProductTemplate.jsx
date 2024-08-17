import { Link } from "react-router-dom";

export default function ProductTemplate({
  _id,
  title,
  price,
  imageUrl,
  description,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-green-tx">
      <img
        src={imageUrl}
        alt="Product 1"
        className="w-full object-cover mb-4 rounded-lg"
      />
      <p className="text-lg font-semibold mb-2">{title}</p>
      <p className=" my-2 font-bold">Description:</p>
      <span className="text-xs">{description}</span>

      <div className="flex items-center mb-4 mt-2">
        <span className="text-lg font-bold text-primary">{price} лв</span>
      </div>
      <Link to={`/catalog/${_id}/item`}>
        <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
          Details
        </button>
      </Link>
    </div>
  );
}
