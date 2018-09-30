import React, { Component } from 'react';

const UserContext = React.createContext();

export class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
     isAuth:false
    };
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    // setting timeout to mimic an async login
    setTimeout(() => this.setState({ isAuth: true }), 1000)
  }
  
  logout() {
    this.setState({ isAuth: false })
  }

  render() {
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
            isAuth: this.state.isAuth,
            login: this.login,
            logout: this.logout
        }}
      >
      
        {children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;