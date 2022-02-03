// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

//   static propTypes = {};

  render() {
    return <div>
        this is news Component app
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>

    </div>;
  }
}

export default News;
