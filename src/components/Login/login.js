import React, {Component} from 'react';
import './login.css';
import  {  BrowserRouter as Router,Route } from "react-router-dom";
import api from '../../interfaces/api/news'
import config from "../../Config/env";
import SearchBar from "../home/SearchBar/SearchBar";
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:''
        };
        this.onchangeusername=this.onchangeusername.bind(this);
        this.onchangepassword=this.onchangepassword.bind(this);
        this.onsubmithandler=this.onsubmithandler.bind(this);

    }
    onchangeusername(e){
        this.setState({username:e.target.value});
    }
    onchangepassword(e){
        this.setState({password:e.target.value})
    }

    onsubmithandler(){
        console.log('calling')
    api.post('https://website.api.niki.ai/admin/authenticate',{'username':this.state.username,'password':this.state.password})
        .then((res) =>{
            console.log(res.data.data)
            if (res.data.data){
                <Router> <Route path="/" component={SearchBar}/> </Router>
            }
        }).catch((err) =>{
            console.log(err);
    });
    }
    render(){
        return(
            <div>
                    <div className="login_form">
                        <strong>Login</strong>
                        <input type="text" placeholder="Username" value={this.state.username} onChange={this.onchangeusername}/>
                        <input type="password" value={this.state.password} onChange={this.onchangepassword} placeholder="Password"/>
                        <input type="submit" onClick={this.onsubmithandler} value="Login" id="submit"/>
                    </div>
            </div>
        )
    }
}
export default LoginForm;
