import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ConnectedAddIngredient} from './AddIngredient';
import { unselectedIngredients, findIngredientById } from '../../reducers/ingredients'

export class AddIngredients extends Component {
  
  render(){
    const {ingredients, selectedIngredients, unselectedIngredients, recipeForm} = this.props;
    const selected = selectedIngredients ? selectedIngredients.map((ing, i) => {
      return <li>{ing.name}</li>;
    }) : null;
    const unselected = unselectedIngredients ? unselectedIngredients.map((ing, i) => {
      return <ConnectedAddIngredient key={i} name={ing.name} id={ing.id} calories={ing.calories} />;
    }) : null;
    return(
      <div>
        <div>
          {unselected}
        </div>
        <div>
          {selected}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  let selectedIngredients = state.recipeForm.ingredientIds.map(function(ingredientId){
    return findIngredientById(ingredientId, state.ingredients)
  })
  return {ingredients: state.ingredients || [],
    selectedIngredients: selectedIngredients || [],
    unselectedIngredients: unselectedIngredients(state.ingredients, state.recipeForm.ingredientIds) || []}
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients);