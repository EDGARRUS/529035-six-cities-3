import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card.jsx";
import {ViewType} from "../../const";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const offers = this.props.offersData;
    if (this.props.viewType === ViewType.MAIN) {
      return (
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer, i) => <OfferCard viewType={this.props.viewType} key={i} offerData={offer} titleClickHandler={this.props.openOfferDetail}/>)}
        </div>);
    } else if (this.props.viewType === ViewType.DETAIL) {
      return (
        <div className="near-places__list places__list">
          {offers.map((offer, i) => <OfferCard viewType={this.props.viewType} key={i} offerData={offer} titleClickHandler={this.props.openOfferDetail}/>)}
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
