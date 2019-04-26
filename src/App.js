import React, { Component } from 'react';
import  {  BrowserRouter as Router,Route } from "react-router-dom";
import './App.css';
import Header from './components/home/Header/Header'
import SearchBar from './components/home/SearchBar/SearchBar'
import LoginForm from "./components/Login/login";


class App extends Component {

  render(){
    return (
      <div className="App">
       <Header/>
          {
              (localStorage.getItem('token'))? <Router> <Route path="/" component={SearchBar}/> </Router>
                  :<Router><Route path="/login" component={LoginForm} /> </Router>
          }

      </div>
    );
  }
}

export default App;
