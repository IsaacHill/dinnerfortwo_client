import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './lib/registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {UserProvider} from './components/UserContext'

const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:5000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserProvider>
      <App />
    </UserProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()