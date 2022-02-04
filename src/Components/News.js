// import PropTypes from 'prop-types';
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles=[
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": "BBC Sport",
          "title": "Coach Silverwood leaves England role",
          "description": "Head coach Chris Silverwood follows director of cricket Ashley Giles in leaving the England men's team following the heavy Ashes defeat.",
          "url": "http://www.bbc.co.uk/sport/cricket/59754595",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
          "publishedAt": "2022-02-03T19:22:24.8011448Z",
          "content": "Head coach Chris Silverwood has followed director of cricket Ashley Giles in leaving the England men's team following the heavy Ashes defeat.\r\nThe 4-0 loss in Australia came part of a wider run that … [+1126 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    
    constructor(){
        super();
        console.log("hello iam construcor from news component");
        this.state={
            articles:this.articles,
            loading:false
        }
    }

  render() {
    return (
      <div className="container my-1">
        <h2>News-Top headline</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          {/* console.log(element.description) */}

         return <div className="col-md-4" key={element.url} > 
            <NewsItem  title={element.title.slice(0,30)} des={element.description.slice(0,80)} urlImage={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
         
          
        </div>

      </div>
    );
  }
}

export default News;
