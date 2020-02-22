import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {generateRateStyle} from "../../const";

export class Review extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {avatar, name, userRate, dateReview, description} = this.props.reviewData;
    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: generateRateStyle(userRate)}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {description}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{dateReview}</time>
        </div>
      </li>
    );
  }
}

Review.propTypes = {
  reviewData: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userRate: PropTypes.number.isRequired,
    dateReview: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    offerId: PropTypes.number.isRequired,
  }),
};
