import './cards.css'
import React, {Component} from 'react';

class NewsCards extends Component {

    render(){
        return(
            <div className="card_wrapper">
            <div className="title">
                {this.props.news.title}
            </div>
            <div className="card_body">
                <img alt="news" src={this.props.news.urlToImage}/>
                <p>
                    {this.props.news.description}

                </p>
                <a href={this.props.news.url} > Read More</a>
            </div>
        </div>

        )}

}
export default NewsCards;
