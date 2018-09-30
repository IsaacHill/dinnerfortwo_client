import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from "react-router-dom";


const FEED_QUERY = gql`
query Recipe($id: Int!){
  recipe(id: $id) {
    name
    recipeId
    time
    method
    createdOn
    serves
    ingredients{
      edges {
        node {
          name
          unit
          quantity
          id
        }
      }
    }
  }
}
`


class Recipe extends Component {
   

render() {
    return (
      <Query query={FEED_QUERY}  variables={{id:this.props.match.params.id}}>
         {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const recipe = data.recipe
          return (
            <div>
              <h1>{recipe.name}</h1>
              <h2>Time: {recipe.time} and serves {recipe.serves}</h2>
              <h2>instructions</h2>
              <p>{recipe.method}</p>
              <IngredientsList ingredients={recipe.ingredients}/>
            </div>
          )
        }}
      </Query>
    )
  }


}

const IngredientsList = ({ingredients}) => {

  const ingredientsToRender = ingredients.edges

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
      {ingredientsToRender.map(ingredient => <Ingredient key={ingredient.node.id} ingredient={ingredient.node} />)}
      </ul>
    </div>
  )
}

const Ingredient = ({ingredient}) => {
  return (<li>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>)
}

export default Recipe