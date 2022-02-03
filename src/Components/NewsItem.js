import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
      let {title,dis,urlImage,newsUrl}=this.props;
    return (
      <div className="my-2">
        <div className="card" style={{width: "18rem"}}>
          <img src={urlImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className={dis}>
              
            </p>
            <a href="/newsdetails" className="btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
