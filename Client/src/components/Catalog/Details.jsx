import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewsForm from "../Reviews/ReviewsForm";
import { useGetOneItem } from "../../hooks/useItems";
import { useGetAllComments } from "../../hooks/useComments";
import itemApi from "../../api/catalog-api";

export default function Details() {
  const { itemId } = useParams();
  const [items] = useGetOneItem(itemId);
  const [review,dispatch] = useGetAllComments(itemId);
  const navigate=useNavigate()
  const itemDeleteHandler = async () => {
    try {
      await itemApi.remove(itemId);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {" "}
      <section id="product-info" className="bg-background-color text-green-tx">
        <div className="container mx-auto">
          <div className="py-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="grid gap-4">
                  {/* Big Image */}
                  <div id="main-image-container">
                    <img
                      id="main-image"
                      className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                      src={items.imageUrl}
                      alt="Main Product Image"
                    />
                  </div>
                </div>
              </div>
              {/* Product Details Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div className="pb-8 border-b border-gray-line">
                  <h1 className="text-3xl font-bold mb-4">{items.title}</h1>
                  <div className="mb-4 pb-4 border-b border-gray-line">
                    <p className="mb-2">
                      Brand:
                      <strong>
                        <a href="#" className="hover:text-primary">
                          {" "}
                          {items.brand}
                        </a>
                      </strong>
                    </p>
                    <p className="mb-2">
                      Availability:<strong> {items.numberItems}</strong>
                    </p>
                  </div>
                  <div className="text-2xl font-semibold mb-8">
                    {items.price} лв
                  </div>
                  <Link to="/">
                    {" "}
                    <button className="border border-transparent hover:bg-transparent hover:bg-green-tx text-green-tx hover:text-navi font-semibold py-2 px-4 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mg">
                      Edit
                    </button>
                  </Link>
                  <Link to="/">
                    {" "}
                    <button onClick={itemDeleteHandler} className="border border-transparent hover:bg-transparent hover:bg-green-tx text-green-tx hover:text-navi font-semibold py-2 px-4 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mg">
                      Delete
                    </button>
                  </Link>
                </div>
                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Product Description
                  </h3>
                  <p>{items.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navi text-green-tx">
        <div className="container mx-auto">
          <div className="py-12">
            <div className="mt-10">
              <div className="mt-8">
                <div
                  id="description-content"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                  className="tab-content"
                >
                  <div className="flex flex-col lg:flex-row lg:space-x-8 justify-between">
                    <div className="w-full lg:w-1/4 ">
                      <h3 className="text-xl font-semibold mb-5 border-b-2 border-green-tx">
                        Reviews
                      </h3>
                      {review.map((rev) => (
                        <p
                          key={rev._id}
                          className="border-b-2  border-green-tx mb-4"
                        >
                          <span className="justify-cente p-2 font-bold">
                            {rev.author.email}{" "}
                          </span>
                          <span className="pl-2 ">Says: {rev.text.review}</span>
                        </p>
                      ))}
                      {review.length === 0 && (
                        <p className="font-bold text-green-tx">No Comments</p>
                      )}
                    </div>
                    <div className="w-full lg:w-1/4">
                      <ReviewsForm key={itemId} itemId={itemId} dispatch={dispatch} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
