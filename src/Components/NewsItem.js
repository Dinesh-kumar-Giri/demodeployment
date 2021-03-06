import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
      let {title,des,urlImage,newsUrl}=this.props;
    return (
      <div className="my-2">
        <div className="card" style={{width: "18rem"}}>
          <img src={urlImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="matchdescription">{des}...</p>
            
            <a href={newsUrl} target="blank" className="btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
