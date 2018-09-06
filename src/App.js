import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {graphql, QueryRenderer} from 'react-relay';
import environment from './relay/environment';

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {allUsers{
            edges{
              node{
                name
                id
              }
            }
          }}
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          console.log(props)
          return <div>i retruned some good good props</div>;
        }}
      />
    );
  }
}

export default App;
