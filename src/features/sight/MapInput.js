import React, { PureComponent, PropTypes } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default class MapInput extends PureComponent {
    static propTypes = {

    };

    constructor(){
        super();
        this.state = {center: {}};
        this.logRef = ::this.logRef;
    }

    logRef() {
        this.setState({center: this.refs.map.leafletElement.getCenter()});
    }

    render() {
        return (
            <div className="sight-map-input">
                <Map center={this.props.position} zoom={13} ref='map' onMoveend={this.logRef}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={this.state.center}>
                        <Popup>
                            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                        </Popup>
                    </Marker>
                </Map>
                {JSON.stringify(this.state.center)}
            </div>
        );
    }
}
