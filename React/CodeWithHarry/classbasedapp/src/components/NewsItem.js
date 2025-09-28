import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, url, urlToImage } = this.props;
        return (
            <div className="container my-2">
                <h2> NewsMonkey - Top Headlines</h2>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={urlToImage} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} target="_blank" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
