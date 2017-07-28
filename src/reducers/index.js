import { combineReducers } from 'redux'
import ingredients from './ingredients'
import recipes from './recipes'
import recipeForm from './recipeForm'

export default combineReducers({
  ingredients,
  recipes,
  recipeForm
})