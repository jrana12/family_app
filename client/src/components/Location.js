import React, { Component } from "react";
import Navbar from "./Navbar";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 22.5804288,
      longitude: 88.3785728,
    };
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (err) => console.log(err)
    );
    alert(
      "Current Location is\n" + this.state.latitude + " " + this.state.longitude
    );
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="profile_cont">
          <button onClick={this.position} className="Filter">
            What's my location?
          </button>
          <div className="distances">
            <h1>How far are my near and dear?</h1>
            <h5>U Rana: 27 hr (1,512.1 km) (New Delhi)</h5>
            <h5>K Rana: 32 hr (1,579.5 km) (Chennai)</h5>
            <h5>T Rana: 3 hr 4 min (150.9 km) (Jamshedpur)</h5>
            <h5>A Rana: 3 hr 17 min (136.0 km) (Kolkata)</h5>
            <h5>V Rana: 35 hr (1,877.4 km) (Vadodara)</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
