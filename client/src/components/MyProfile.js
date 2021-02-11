import "./style.css";
import Navbar from "./Navbar";
{/* My profile Section, addable but uneditable*/}
function MyProfile() {
  return (
    <div classNane="MyProfile">
        <Navbar/>
      <img src=".. " alt="My photo"></img>
      <h1>Display Name</h1>
      {/*Dropdown to select members to be added as family*/}
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Dropdown Example
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
        </ul>
      </div>
      <button>Add Relative</button>
      <h4>Gender</h4>
      <h4>Age</h4>
      <h4>Father</h4>
      <h4>Mother</h4>
      <h4>Siblings</h4>
      <h4>Mother</h4>
      {/*List of Relatives*/}
      <h4>Relative 1</h4>
      <h4>Relative 2</h4>
    </div>
  );
}

export default MyProfile;
