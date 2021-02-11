import "./style.css";
import Navbar from "./Navbar";

function MyFamily() {
  return (
    <div classNane="MyFamily">
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-md-4">
            <div className="profile_section">
              <img
                src="https://image.shutterstock.com/z/stock-vector-person-icon-jpg-396004804.jpg "
                height="200px"
                alt="Image of person"
              />
              <h3>Name of person</h3>
            </div>
          </div>
          <div class="col-sm-9 col-md-4">
            <div className="profile_section">
              <img
                src="https://image.shutterstock.com/z/stock-vector-person-icon-jpg-396004804.jpg "
                height="200px"
                alt="Image of person"
              />
              <h3>Name of person</h3>
            </div>
          </div>
          <div class="col-sm-9 col-md-4">
            <div className="profile_section">
              <img
                src="https://image.shutterstock.com/z/stock-vector-person-icon-jpg-396004804.jpg "
                height="200px"
                alt="Image of person"
              />
              <h3>Name of person</h3>
            </div>
          </div>
          <div class="col-sm-9 col-md-4">
            <div className="profile_section">
              <img
                src="https://image.shutterstock.com/z/stock-vector-person-icon-jpg-396004804.jpg "
                height="200px"
                alt="Image of person"
              />
              <h3>Name of person</h3>
            </div>
          </div>
          <div class="col-sm-9 col-md-4">
            <div className="profile_section">
              <img
                src="https://image.shutterstock.com/z/stock-vector-person-icon-jpg-396004804.jpg "
                height="200px"
                alt="Image of person"
              />
              <h3>Name of person</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFamily;
