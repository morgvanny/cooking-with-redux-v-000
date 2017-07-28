import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addIngredient} from '../../actions/ingredients';

export class Ingredients extends Component {
  render(){
    const {ingredients} = this.props;
    return(
        <div>
          <ul>
            {ingredients.map((ingredient, i) => {
              return <li key={i}>{ingredient.name}</li>
            })}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {ingredients: state.ingredients}
}

export const ConnectedIngredients = connect(mapStateToProps)(Ingredients);
