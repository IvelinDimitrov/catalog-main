import useForm from "../../hooks/userForms";
import { useAuthContext } from "../../AuthContext/AuthContext";
import useCreateComment, { useGetAllComments } from "../../hooks/useComments";
const initalValues = {
  review: "",
};
export default function ReviewsForm({itemId,dispatch}) {
  const { isAuthenticated, email } = useAuthContext();
  const createComment = useCreateComment();

  const { changeHandler, submitHandler, values } = useForm(
    initalValues,
    async (review) => {
      try {
        const newRev = await createComment(itemId, review);

        dispatch({
          type: "ADD_REV",
          payload: {
            ...newRev,
            author: { email },
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  );

  return (
    <>
      {isAuthenticated && (
        <div className="border border-gray-300 p-4 rounded-lg max-w-xl ">
          <h2 className="text-lg font-medium mb-2">Review</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <textarea
                rows={4}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-500 bg-[#a5e6bf] bg-opacity-45"
                name="review"
                placeholder="Enter your review"
                value={values.review}
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="border border-transparent hover:bg-transparent hover:bg-green-tx text-green-tx hover:text-navi font-semibold py-2 px-4 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mg"
                type="submit"
              >
                Post review
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
