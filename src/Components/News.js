// import PropTypes from 'prop-types';
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    // static propTypes = {};
    constructor(){
        super();
        console.log("hello iam construcor from news component")
    }

  render() {
    return (
      <div className="container my-1">
        <h2>News-Top headline</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="my title giri" dis="hii" urlImage="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" dis="description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" dis="description" />
          </div>
        </div>

      </div>
    );
  }
}

export default News;
