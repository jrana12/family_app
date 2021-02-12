import "./style.css";
import db, { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useHistory } from 'react-router-dom';
function Home() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    var user_email = "";
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
      history.push('/welcome');
  };

  //const signIn = (e) =>{
  //alert("hello");
  //}
  return (
    <div class="Home">
      <div className="login_container">
        <img src="https://assets.awwwards.com/awards/images/2012/12/best-logo-2013-3.jpg" />
        <br></br>
        <button onClick={signIn}>Login with Google</button>
      </div>
    </div>
  );
}

export default Home;
