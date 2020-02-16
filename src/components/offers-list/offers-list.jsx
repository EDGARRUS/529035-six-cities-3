import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferCard} from "../offer-card/offer-card.jsx";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOfferCard: ``
    };
    this.setActiveOfferCard = this.setActiveOfferCard.bind(this);
  }

  render() {
    const offers = this.props.offersData;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => <OfferCard key={i} offerData={offer} mouseOverCardHandler={this.setActiveOfferCard}/>)}
      </div>);
  }
  setActiveOfferCard(offer) {
    this.setState({activeOfferCard: offer});
  }
}

OffersList.propTypes = {offersData: PropTypes.array.isRequired};
