import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createIngredient} from '../../actions/ingredients';

export class IngredientsInput extends Component {
  constructor(){
    super();

    this.state = {
      text: '',
      calories: ''
    }
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleCalorieChange = (e) => {
    this.setState({
      calories: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {createIngredient} = this.props;
    createIngredient({name: this.state.text, calories: this.state.calories});
    this.setState({text: '', calories: ''});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleTextChange} />
        <input type="text" value={this.state.calories} onChange={this.handleCalorieChange} />
        <input type="submit" value="Create Ingredient" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {ingredients: state.ingredients}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createIngredient: createIngredient}, dispatch)
}

export const ConnectedIngredientsInput = connect(mapStateToProps, mapDispatchToProps)(IngredientsInput);