import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Map from './components/Map.js';
import MapForm from './components/MapForm.js';

class App extends Component {

  state = {name:'', email:'', submittedName:'', submittedEmail:''}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email }, ()=>{console.log(this.state)})
  }

  render() {
    return (
      <div className="App">
        <MapForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          name = {this.state.name}
          email = {this.state.email}
        />
        { null &&
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        }

      </div>
    );
  }
}

export default App;
