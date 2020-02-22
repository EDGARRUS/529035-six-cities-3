import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card.jsx";
import {ViewType} from "../../const";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }
  renderOffersList() {
    const offers = this.props.offersData;
    return offers.map((offer, i) => <OfferCard viewType={this.props.viewType} key={i} offerData={offer} titleClickHandler={this.props.openOfferDetail}/>);
  }
  render() {
    if (this.props.viewType === ViewType.MAIN) {
      return (
        <div className="cities__places-list places__list tabs__content">
          {this.renderOffersList()}
        </div>);
    } else if (this.props.viewType === ViewType.DETAIL) {
      return (
        <div className="near-places__list places__list">
          {this.renderOffersList()}
        </div>);
    }
    return null;
  }
}

OffersList.propTypes = {
  offersData: PropTypes.array.isRequired,
  openOfferDetail: PropTypes.func.isRequired,
  viewType: PropTypes.string
};
