import "./style.css";
import Navbar from "./Navbar";
/*
Welcome Page or Feed

*/
var images = [
  {
    src_link:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Snowboarder_in_flight_%28Tannheim%2C_Austria%29.jpg",
    caption: "Hello",
  },
  {
    src_link:
      "https://www.interactivesearchmarketing.com/wp-content/uploads/2014/06/png-vs-jpeg.jpg",
    caption: "Hello2",
  },
];
function Welcome() {
  return (
    <div class="Welcome">
      <Navbar/> {/*Upper Navbar common to all Pages*/ }
      
      {/*Image Corousal Option*/}
      <div className="img_corousal">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          {/**/}
          <div class="carousel-inner">
            <div class="item active">
              <img
                src="http://www.personal.psu.edu/jll5677/Pictures/003.3.jpg"
                alt="Chania"
              />
              <div class="carousel-caption">
                <h3>Los Angeles</h3>
                <p>LA is always so much fun!</p>
              </div>
            </div>
            {/*Iterate through Images*/}
            {images.map((image) => (
              <div class="item">
                <img src={image.src_link} alt="Chicago" />
                <div class="carousel-caption">
                  <h3>Chicago</h3>
                  <p>{image.caption}</p>
                </div>
              </div>
            ))}
            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      {/*Photo Sharing UI*/}

      <div className="share_photo">
        <label class="form-label" for="customFile">
          <h1>Share Photo</h1>
        </label>
        <input type="file" class="form-control" id="customFile" />
        {/*Select people to share photo*/}
        <form>
          <label class="checkbox-inline">
            <input type="checkbox" value="" />
            Option 1
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" value="" />
            Option 2
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" value="" />
            Option 3
          </label>
        </form>
        <button type="submit" class="btn btn-default">
          Share
        </button>
      </div>
    </div>
  );
}

export default Welcome;
