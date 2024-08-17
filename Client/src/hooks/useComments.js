import { useEffect, useReducer } from "react";
import reviewApi from "../api/reviews-api";
export default function useCreateComment() {
  const createHandler = async (gameId, review) =>
    reviewApi.create(gameId, review);

  return createHandler;
}
function commentsReduser(state, action) {
  switch (action.type) {
    case "GET_ALL":
      return action.payload.slice();
    case "ADD_REV":
      return [...state, action.payload];
    default:
      return state;
  }
}
export function useGetAllComments(gameId) {
  const [review, dispatch] = useReducer(commentsReduser, []);
  useEffect(() => {
    (async () => {
      const resutlt = await reviewApi.getAll(gameId);

      dispatch({ type: "GET_ALL", payload: resutlt });
    })();
  }, [gameId]);

  return [review, dispatch];
}
