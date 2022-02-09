import React from "react";
import { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"



class MapContainer extends Component {
    render () {
        return (
            <div>
                <Map
                google = {this.props.google}
                style = {{with: "100%", height: "100%"}}
                zoom = {10} 
                initialCenter = {
                    {
                        lat: 28.704060,
                        lng: 77.102493,
                    }
                }>

                </Map>
            </div>
        )
    }
}



export default MapContainer({
    apiKey: "AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
})(MapContainer)