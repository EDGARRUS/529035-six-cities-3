import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPremium: this.props.offerData.isPremium,
    };

    this.setActiveOfferCard = this.setActiveOfferCard.bind(this);

    // const handleOfferCardClick = this.props.onOfferCardClickHandler
  }

  premiumMarkup() {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  setActiveOfferCard() {
    const {mouseOverCardHandler} = this.props;
    mouseOverCardHandler(this);
  }
  render() {
    const {title, image, price, type, rate} = this.props.offerData;

    return (
      <article className="cities__place-card place-card" onMouseOver={this.setActiveOfferCard}>
        {this.state.isPremium ? this.premiumMarkup() : ``}
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
              <span style={{width: rate * 10}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
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
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rate: PropTypes.number,
    isPremium: PropTypes.bool.isRequired,
  }),

  mouseOverCardHandler: PropTypes.func
};
