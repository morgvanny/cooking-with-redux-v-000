import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRecipe } from '../../actions/recipes'
import { AddIngredients } from '../ingredients/AddIngredients'

export class RecipesInput extends Component {
  constructor(){
    super()
    this.state = {name: '', calories: ''}
  }

  handleOnRecipeNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  
  handleOnCaloriesChange = (e) => {
    this.setState({calories: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients})
    this.props.addRecipe(recipe)
  }

  render(){
    return(
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <p>
          <input type="text" onChange={this.handleOnRecipeNameChange.bind(this)} placeholder="Recipe name"/>
        </p>
        <AddIngredients />
        <input type="submit" />
      </form>
    )
  }
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

function mapStateToProps(state){
  return { selectedIngredients: state.recipeForm.ingredientIds }
}