// import PropTypes from 'prop-types';
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 
      
    
    constructor(){
        super();
        console.log("hello iam construcor from news component");
        this.state={
            articles:[],
            loading:true,
            page:1
        }
    }
    async componentDidMount()
    {
      console.log("cdm");
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=630e5818d23a47829b60e8993959ffe9&page=1pageSize=20";
      let data =await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData)
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
   handelPreClick=async ()=>{
      console.log("younc")
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=630e5818d23a47829b60e8993959ffe9&page=${this.state.page-1}&pageSize=20 `
      let data =await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData)
      this.setState({
        page: this.state.page-1,
      })
     
    }
    handelNexClick= async ()=>{
      console.log("next");
      if(this.state.page+1>Math.ceil(this.state.totalResults/20))
      {

      }
      else{

        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=630e5818d23a47829b60e8993959ffe9&page=${this.state.page+1}&pageSize=20`
        let data =await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({
          page: this.state.page+1,
        })
      }
    }

  render() {
    // console.log("i am render merhid")

    return (
      <div className="container my-1">
      <h1 className="text-center">News-Top headline</h1>
        
        
        <div className="row">
        {this.state.articles.map((element)=>{
          {/* console.log(element.description) */}

         return <div className="col-md-4" key={element.url} > 
            <NewsItem  title={element.title?element.title.slice(0,30):" "} des={element.description?element.description.slice(0,80):" "} urlImage={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
        
        <div className="container d-flex justify-content-between  ">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handelPreClick} >previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handelNexClick} >Next</button>
        </div>
         
          
        </div>

      </div>
    );
  }
}

export default News;
