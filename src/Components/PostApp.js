import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRequest } from "../redux/actions/postActions";
import axios from "axios";

const PostApp = () => {
  const { loading, data, error } = useSelector((state) => state);
  console.log(loading, data, error);
  // loading: false, data =[] , error = ""
  // loading: true, data =[] , error = ""
  // loading: false, data =[{},{}] , error = ""
  // loading: false, data =[] , error = "some error"
  const dispatch = useDispatch();

  //   useEffect(()=>{
  //      dispatch(postApiStarted());
  //      axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
  //      .then(response => dispatch(postDataSuccess(response.data)))
  //      .catch(err => dispatch(postDataFailure(err.message)))
  //   },[])
  
  useEffect(() => {
    dispatch(postRequest());
  }, []);

  return (
    <div>
      <h1>Post App</h1>
      {data.length > 0 &&
        data.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}
export default PostApp;