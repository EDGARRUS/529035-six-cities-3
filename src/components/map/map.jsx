import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

export class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }
  render() {
    return <section id="map" ref={this.map} className="cities__map map"></section>;
  }
  componentDidMount() {
    if (this.map.current) {
      const offersData = this.props.offersData;
      const city = [52.38333, 4.9];
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      const zoom = 12;
      const map = leaflet.map(`map`, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });
      map.setView(city, zoom);
      offersData.map((offer) => leaflet.marker(offer.coordinates, {icon}).addTo(map));
      leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}).addTo(map);
    }
  }
}

Map.propTypes = {
  offersData: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rate: PropTypes.number,
    isPremium: PropTypes.bool.isRequired,
    description: PropTypes.string,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    devices: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    })
  })).isRequired,
};
