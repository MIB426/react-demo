import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink  } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { Props } from "./components/Props/Props"
class Main extends Component {
    render() {
        return (
            <Router>
                                  <div>
            <div class="sidenav">
            
            <NavLink  exact activeClassName="selected" to={'/'}> Home </NavLink>
            <NavLink  activeClassName="selected" to={'/props'}> Props </NavLink>
  
          
          </div>
          <div class="main">
           <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/Props' component={Props} />

       </Switch>
       </div>
       </div>
            </Router>
        );
    }
}

export default Main