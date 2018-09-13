import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import LinkList from './LinkList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//  return <LinkList />
class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/users" component={LinkList} />
      <Route path="/recipes" component={Recipes} />
    </div>
    </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Recipes = () => (
  <div>
    <h2>thats a spicey meatball </h2>
  </div>
)

export default App;
