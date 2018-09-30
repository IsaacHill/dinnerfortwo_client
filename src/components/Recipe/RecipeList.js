import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from "react-router-dom";


const FEED_QUERY = gql`
{allRecipes{
    edges{
      node{
        name
        recipeId
        time
        createdOn
      }
    }
  }}
`
class RecipeList extends Component {
   

render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const linksToRender = data.allRecipes.edges
          return (
            <div>
              {linksToRender.map(link => <RecipeLink key={link.node.recipeId} link={link.node} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

const RecipeLink = ({link}) =>  {
    return (<div><Link to={`/recipes/${link.recipeId}`} ><h2>{link.name}</h2></Link> <p>takes about:{link.time}, added at {link.createdOn}</p></div>)
}

export default RecipeList