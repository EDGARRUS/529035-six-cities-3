import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card.jsx";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const offers = this.props.offersData;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => <OfferCard key={i} offerData={offer} titleClickHandler={this.props.openOfferDetail}/>)}
      </div>);
  }
}

OffersList.propTypes = {
  offersData: PropTypes.array.isRequired,
  openOfferDetail: PropTypes.func.isRequired,
};
