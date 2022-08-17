import React, {
  useEffect,
  useReducer,
  // useState
} from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/config";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }

    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          // setShow(result);
          // setIsLoading(false);
          dispatch({ type: "FETCH_SUCCESS", show: results });
        }
      })
      .catch(err => {
        if (isMounted) {
          // setError(err.message);
          // setIsLoading(false);
          dispatch({ type: "FETCH_FAILED", error: err.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <div>Data is being loaded!</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }
  console.log("show", show);

  return <div>Show</div>;
};

export default Show;
