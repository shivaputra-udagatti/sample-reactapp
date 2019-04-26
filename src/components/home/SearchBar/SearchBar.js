import './searchbar.css'
import React, {Component} from 'react';
import api from '../../../interfaces/api/news';
import config from '../../../Config/env'
import NewsCards from "../NewsCards/Cards";
import news from '../../../constants/seeder';
import { WrapItem } from '../../layouts/WrapLayouts/WrapLayout'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            input:'',
            data:news
        };
        this.onchangehandle=this.onchangehandler.bind(this);
        this.search=this.search.bind(this);
    }

    componentDidMount() {
        var params = new URLSearchParams();
        params.append('apiKey', config.apikey);
        params.append('country', 'in');

        api.get(config.api.top,{params:params}).then((res)=>{
            console.log(res.data);
            this.setState({data:res.data.articles})

        }).catch((err)=>{
            console.log(err)
        });
    }


    search(){
        this.setState({input:''})
        var params =new URLSearchParams();
        params.append('q',this.state.input);
        params.append('apiKey',config.apikey)
        api.get(config.api.search,{params:params}).then((res)=>{
            console.log(res.data.articles);
            this.setState({data:res.data.articles})

        }).catch((err)=>{
            console.log(err)
        });
    }
    onchangehandler =(e) => {
        this.setState({input: e.target.value})

    }


    render(){
        return(
            <div className='searchbarwrapper'>
                <div className='searchbar'>

                        <input type="text" placeholder="Enter keywords to search" id="input" value={this.state.input} onChange={this.onchangehandler} />
                        <button onClick={this.search}><img alt="searchIcon" src="https://png.icons8.com/search/2266EE"/></button>
                </div>
                {
                    this.state.data.map((n,index) =>(
                        <WrapItem key={index}>
                        <NewsCards news={n}/>
                        </WrapItem>
                    ))
                }
            </div>
        )
    };

}

export default SearchBar;
