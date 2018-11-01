


export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}


//Importable into all test files
//Takes in {shallow} wrapper from Enzyme
//And value for the data-test attribute
// Uses find method on the shallow wrapper
// (Find method takes a CSS style selector)
// ...to find `[data-test=${val}]`
