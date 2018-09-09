import React, { Component } from 'react'
import Link from './Link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const FEED_QUERY = gql`
{allUsers{
    edges{
      node{
        name
        id
        admin
        email
      }
    }
  }}
`
class LinkList extends Component {
   

render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          console.log(data)
          const linksToRender = data.allUsers.edges
        console.log(linksToRender)
          return (
            <div>
              {linksToRender.map(link => <Link key={link.node.id} link={link.node} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList