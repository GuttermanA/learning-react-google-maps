import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GoogleMaps = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

class ReactGoogleMaps extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <GoogleMaps
        {...this.props}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default ReactGoogleMaps;
