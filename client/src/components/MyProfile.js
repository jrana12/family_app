import "./style.css";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";

{
  /* My profile Section, addable but uneditable*/
}
function MyProfile() {
  const [{ user }] = useStateValue();
  return (
    <div classNane="MyProfile">
      <Navbar />
      <div className="profile_cont">
        {user ? <img src={user.photoURL} /> : <img></img>}
        {user ? <h1>{user.displayName}</h1> : <h1>Display Name</h1>}
        {/*Dropdown to select members to be added as family*/}
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Select Relatives
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Tilakraj Rana</a>
            </li>
            <li>
              <a href="#">Kalpana Rana</a>
            </li>
            <li>
              <a href="#">U Rana</a>
            </li>
            <li>
              <a href="#">Vishal Gupta</a>
            </li>
            <li>
              <a href="#">Andy Joan</a>
            </li>
          </ul>
        </div>
        <button>Add Relative</button>
        <br></br>
        <h4>Female</h4>
        <h4>12th July</h4>
        <h4>Father: U Rana</h4>
        <h4>Mother: K Rana</h4>
        <h4>Siblings : T Rana</h4>
        {/*List of Relatives*/}
        <h3>Connected to: </h3>
        <h4>V Rana</h4>
        <h4>A Rana</h4>
      </div>
    </div>
  );
}

export default MyProfile;
