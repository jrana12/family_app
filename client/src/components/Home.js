import "./style.css";
import db, { auth, provider } from "../firebase";
function Home() {
  const signIn = (e) => {
    var user_email = "";
    auth
      .signInWithPopup(provider)
      .then((result) => {
        user_email = result.user.email;
      })
      .catch((error) => {
        console.log(error.message);
      });
    db.collection("users")
      .where("email", "==", user_email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
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
