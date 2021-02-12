import "./style.css";
import { useHistory } from "react-router-dom";
{
  /*Upper Navigation Bar*/
}
function Navbar() {
  const to_profile = (e) => {
    history.push("/myprofile");
  };
  const to_family = (e) => {
    history.push("/myfamily");
  };
  const to_home = (e) => {
    history.push("/welcome");
  };

  const signout = (e) => {
    history.push("/");
  };
  const to_location = (e) => {
    history.push("/location");
  };
  const history = useHistory();
  return (
    <div classNane="Navbar">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">Family_App</a>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <button onClick={to_home}>Home</button>
            </li>
            <li>
              <button onClick={to_profile}>My Profile</button>
            </li>
            <li>
              <button onClick={to_family}>My Family</button>
            </li>
            <li>
              <button onClick={to_location}>Location</button>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button onClick={signout}>Sign Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
