// import PropTypes from 'prop-types';
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 
      
    
    constructor(){
        super();
        console.log("hello iam construcor from news component");
        this.state={
            articles:[],
            loading:true
        }
    }
    async componentDidMount()
    {
      console.log("cdm");
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=630e5818d23a47829b60e8993959ffe9"
      let data =await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData)
      this.setState({articles:parsedData.articles})
    }
  render() {
    console.log("i am render merhid")

    return (
      <div className="container my-1">
        <h2>News-Top headline</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          {/* console.log(element.description) */}

         return <div className="col-md-4" key={element.url} > 
            <NewsItem  title={element.title?element.title.slice(0,30):" "} des={element.description?element.description.slice(0,80):" "} urlImage={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
         
          
        </div>

      </div>
    );
  }
}

export default News;
