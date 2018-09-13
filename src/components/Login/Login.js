import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import "./Login.css";
import logo from "../../images/logo.png";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      ok
      accessToken
      refreshToken
      error
    }
  }
`;

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <form>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </FormGroup>
          <Mutation mutation={LOGIN_MUTATION} variables={{ email, password }}>
            {postMutation => (
              <Button onClick={postMutation} disabled={!this.validateForm()}>
                Login
              </Button>
            )}
          </Mutation>
        </form>
      </div>
    );
  }
}

export default Login;
