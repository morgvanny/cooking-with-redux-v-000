export function addRecipe(recipe){
  return Object.assign({type: 'ADD_RECIPE', payload: recipe})
}