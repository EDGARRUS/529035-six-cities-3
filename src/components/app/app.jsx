import React, {PureComponent} from "react";
import {Main} from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {OfferDetail} from "../offer-detail/offer-detail.jsx";
import {ViewType} from "../../const.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      view: ViewType.MAIN,
      activeOfferDetail: {}
    };

    this.openOfferDetail = this.openOfferDetail.bind(this);
  }

  renderHeader() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  renderScreen() {
    switch (this.state.view) {
      case ViewType.MAIN:
        return (
          <React.Fragment>
            {this.renderHeader()}
            <Main offersData={this.props.offersData} viewType={this.state.view} openOfferDetail={this.openOfferDetail}/>
          </React.Fragment>
        );
      case ViewType.DETAIL:
        return (
          <React.Fragment>
            {this.renderHeader()}
            <OfferDetail offerData={this.state.activeOfferDetail} viewType={this.state.view} openOfferDetail={this.openOfferDetail}/>
          </React.Fragment>
        );
    }
    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderScreen()}
          </Route>
          <Route exact path="/main">
            <React.Fragment>
              {this.renderHeader()}
              <Main offersData={this.props.offersData} openOfferDetail={this.openOfferDetail}/>
            </React.Fragment>
          </Route>
          <Route exact path="/offer">
            <React.Fragment>
              {this.renderHeader()}
              <OfferDetail offerData={this.props.offersData[1]}/>
            </React.Fragment>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  openOfferDetail(offerData) {
    this.setState({
      view: ViewType.DETAIL,
      activeOfferDetail: offerData
    });
  }
}

App.propTypes = {
  offersData: PropTypes.arrayOf(PropTypes.exact({
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
    reviewsId: PropTypes.arrayOf(PropTypes.number)
  })).isRequired,
};

export default App;
