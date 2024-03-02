import { POST_API_STARTED, POST_DATA_SUCCESS, POST_DATA_FAILURE } from "./actionTypes";
import axios from "axios";


export const postApiStarted = () => {
    return{
        type: POST_API_STARTED
    }
}

export const postDataSuccess = (data) => {
    return{
        type: POST_DATA_SUCCESS,
        payload: data
    }
}

export const postDataFailure = (error) => {
    return{
        type: POST_DATA_FAILURE,
        payload: error
    }
}


// action creater 

export function postRequest(){
    return(dispatch)=>{
        dispatch(postApiStarted());
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(response => dispatch(postDataSuccess(response.data)))
        .catch(error => dispatch(postDataFailure(error.message)))
    }
}
