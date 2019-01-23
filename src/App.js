import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ReactGoogleMaps from './components/react-google-maps/ReactGoogleMaps.js';
import GoogleMapsReact from './components/google-maps-react/GoogleMapsReact.js';
import MapForm from './components/MapForm.js';
import { Button } from 'semantic-ui-react';

const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=initMap`

console.log("API", googleMapsAPIKey)

// const maps = ["google", "react"]

// console.log(maps)

class App extends Component {

  state = {
    name:'',
    email:'',
    submittedName:'',
    submittedEmail:'',
    activeMap: "google",
  }

  // componentDidMount() {
  //   this.setState({activeMap:0})
  // }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {

    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email }, ()=>{console.log(this.state)})
  }

  handleClick = () => {
    console.log("pizza")
    if(this.state.activeMap === "google") {
      this.setState({activeMap: "react"})
    } else {
      this.setState({activeMap:"google"})
    }
  }

  render() {
    // console.log(this.state.activeMap, maps, maps[this.state.activeMap])
    return (
      <div className="App">
        <MapForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          name = {this.state.name}
          email = {this.state.email}
        />

      <Button onClick={this.handleClick}>Toggle</Button>

        { this.state.activeMap === "react" &&
            <ReactGoogleMaps
              isMarkerShown
              googleMapURL={googleMapUrl}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
        }


      { this.state.activeMap === "google" && <GoogleMapsReact/> }

      </div>
    );
  }
}

export default App;



// { this.state.activeMapReact === "google" &&
//     <GoogleMapsReact/>
// }
