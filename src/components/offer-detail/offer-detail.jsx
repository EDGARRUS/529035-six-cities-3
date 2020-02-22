import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {generateRateStyle} from "../../const";
import {ReviewsList} from "../reviews-list/reviews-list.jsx";
import {Map} from "../map/map.jsx";
import {offersData} from "../../mocks/offers";
import {OffersList} from "../offers-list/offers-list.jsx";
import {ViewType} from "../../const";


export class OfferDetail extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, gallery, description, bedrooms, maxGuests, isPremium, devices, price, type, rate, host, reviewsId} = this.props.offerData;
    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {gallery.map((image, i) => <div key={i} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio"/>
              </div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (<div className="property__mark">
                <span>Premium</span>
              </div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: generateRateStyle(rate)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rate}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxGuests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {devices.map((device, i) => <li key={i} className="property__inside-item">
                    {device}
                  </li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={host.isSuper ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList reviewsId={reviewsId}/>
            </div>
          </div>
          <Map offersData={offersData} addClass={`property__map map`}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offersData={offersData} viewType={ViewType.DETAIL} openOfferDetail={this.props.openOfferDetail}/>
          </section>
        </div>
      </main>
    );
  }
}

OfferDetail.propTypes = {
  offerData: PropTypes.exact({
    id: PropTypes.number.isRequired,
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
    reviewsId: PropTypes.array.isRequired,
  }).isRequired,

  openOfferDetail: PropTypes.func.isRequired
};
