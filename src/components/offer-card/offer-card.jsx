import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {generateRateStyle} from "../../const";

export class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
    this.titleClickHandler = this.titleClickHandler.bind(this);
  }

  getPremiumMarkup() {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }

  titleClickHandler(offerData) {
    const {titleClickHandler} = this.props;
    titleClickHandler(offerData);
  }

  render() {
    const {title, image, price, type, rate, isPremium} = this.props.offerData;

    return (
      <article className="cities__place-card place-card">
        {isPremium && this.getPremiumMarkup()}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: generateRateStyle(rate)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#" onClick={() => {
              this.titleClickHandler(this.props.offerData);
            }}>{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>);
  }
}

OfferCard.propTypes = {
  offerData: PropTypes.exact({
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
    }),
  }).isRequired,
  titleClickHandler: PropTypes.func,
};
