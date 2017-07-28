import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {recipeFormAddIngredient} from '../../actions/ingredients'

export class AddIngredient extends Component {
  
  handleOnClick = () => {
    this.props.recipeFormAddIngredient(this.props.id)
  }

  render(){
    const {name, id, calories} = this.props;
    return(
      <div>
        <button onClick={this.handleOnClick}>{name}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {recipeForm: state.recipeForm}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    recipeFormAddIngredient: recipeFormAddIngredient
  }, dispatch)
}
export const ConnectedAddIngredient = connect(mapStateToProps, mapDispatchToProps)(AddIngredient);