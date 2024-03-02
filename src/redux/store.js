import { createStore, applyMiddleware } from "redux";
import postReducer from "./reducers/postReducer";
import { thunk } from "redux-thunk";

const store = createStore(postReducer,applyMiddleware(thunk));

export default store;

// dispatch({});

// ()=>{}

// dispatch();

// (dispatch)=>{ // dispatch is guven by thunk
//     dispatch(postApiStarted());
//     axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//     .then(response => dispatch(postDataSuccess(response.data)))
//     .catch(err => dispatch(postDataFailure(err.message)))
// }


// function thunk(p1){
//    p1(dispatch)
// }