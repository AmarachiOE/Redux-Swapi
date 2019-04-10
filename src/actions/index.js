// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getCharacters = () => dispatch => {
    // dispatch a "start" action
    dispatch({ type: FETCHING });
    // then start API call
    axios.get("https://swapi.co/api/people/")
    .then( res => {
        console.log("API request SUCCESSFUL", res.data);
        dispatch({
            type: SUCCESS,
            payload: res.data.results 
            // console logging shows that the actual data is on the "results" property/key of the res.data object, so that's what we want. Could also use action.payload.results on the reducer instead of referencing results here on the action creator
        });
    })
    .catch( err => {
        console.log("API request FAILED", err.resolve);
        dispatch({
            type: FAILURE,
            payload: err
        });
    })
};