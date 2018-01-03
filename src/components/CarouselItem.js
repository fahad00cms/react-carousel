import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Carousel.scss';

export default class CarouselItem extends Component {
  static propTypes = {
    carouselItem: PropTypes.node,
  };
  render() {
    return (
      <li className="carousel-item">
        {this.props.carouselItem}
      </li>
    );
  }
}