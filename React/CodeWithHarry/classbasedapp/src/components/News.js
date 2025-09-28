import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pagesize:20
        }
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f72d2b3a1e4442593eecc151b5d77b8&page=${this.state.page + 1}&pagesize=${this.state.pagesize})`;
        let data = await fetch(url);
        let parsedata = await data.json();
        if (this.state.pagesize < parsedata.totalResults) {
            console.log(parsedata);
            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles,
                pagesize: parsedata.totalResults
            })
        }
    }

    handlePreviousClick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f72d2b3a1e4442593eecc151b5d77b8&page=${this.state.page - 1}&pagesize=${this.state.pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            page:this.state.page - 1,
            articles: parsedata.articles,
            pagesize: parsedata.totalResults
        })
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f72d2b3a1e4442593eecc151b5d77b8`;
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({ articles: parsedata.articles })
    }

    render() {
        return (
            <div className="row" >
                <h2> This is a news component</h2>
                {this.state.articles.map((element) => {
                    return (<div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} urlToImage={!element.urlToImage ? "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg" : element.urlToImage} url={element.url} />
                    </div>
                    )
                })
                }
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>	 Next  &rarr;</button>
                    

                </div>
            </div >
        )
    }

}
