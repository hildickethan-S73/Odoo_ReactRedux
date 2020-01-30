export function selectProduct(product) {
  return {
    type: 'PRODUCT_SELECTED',
    payload: product
  };
}
export function restaurantLoad(payload) {
  return {
    type: 'RESTAURANT_LOAD',
    payload: payload
  }
}