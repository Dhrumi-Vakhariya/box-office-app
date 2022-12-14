/* eslint-disable no-underscore-dangle */
import React from "react"; // useState // useReducer, // useEffect,
import { useParams } from "react-router";
import ShowMainData from "../components/show/ShowMainData";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import Cast from "../components/show/Cast";
// import { apiGet } from "../misc/config";
import { InfoBlock, ShowPageWrapper } from "../misc/styled";
import { useShow } from "../misc/custom-hooks";

// const reducer = (prevState, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS": {
//       return { isLoading: false, error: null, show: action.show };
//     }

//     case "FETCH_FAILED": {
//       return { ...prevState, isLoading: false, error: action.error };
//     }

//     default:
//       return prevState;
//   }
// };

// const initialState = {
//   show: null,
//   isLoading: true,
//   error: null,
// };

const Show = () => {
  const { id } = useParams();
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const [{ show, isLoading, error }, dispatch] = useReducer(
  //   reducer,
  //   initialState
  // );

  const { show, isLoading, error } = useShow(id);

  // useEffect(() => {
  //   let isMounted = true;
  //   apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
  //     .then(results => {
  //       if (isMounted) {
  //         // setShow(result);
  //         // setIsLoading(false);
  //         dispatch({ type: "FETCH_SUCCESS", show: results });
  //       }
  //     })
  //     .catch(err => {
  //       if (isMounted) {
  //         // setError(err.message);
  //         // setIsLoading(false);
  //         dispatch({ type: "FETCH_FAILED", error: err.message });
  //       }
  //     });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [id]);

  if (isLoading) {
    return <div>Data is being loaded!</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
