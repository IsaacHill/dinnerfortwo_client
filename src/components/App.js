import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import LinkList from './LinkList'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {UserConsumer} from './UserContext'
import RecipeList from './Recipe/RecipeList'
import Recipe from './Recipe/Recipe'
import { userInfo } from 'os';
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
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <PrivateRoute path="/users" component={LinkList} />
          <Route exact path="/recipes" component={RecipeList} />
          <Route path='/login' component={connectedLogin} />
          <Route path="/recipes/:id" component={Recipe}/>
        </div>
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <UserConsumer>
      {user => (
        <Route {...rest} render={props =>
          user.isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
        )} />
      )}
    </UserConsumer>
    )


const Login = (props) => {
    let button = props.isAuth ? props.logout : props.login
    let message = props.isAuth ? "log out you idiot" : 'log in my dude'
    return (<div>
      <p>You gotta do something dawg.</p>
      <button onClick={() => button()}>{message}</button>
    </div>)
}

const connectedLogin = () => (
    <UserConsumer>
      {user => (
        <Login {...user}/>)}
    </UserConsumer>
)

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
