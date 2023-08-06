const getIsItems = (state) => state.cart.items;
const geTotalPrice = (state) => state.cart.totalPrice;

const cartSelector = {
  getIsItems,
  geTotalPrice,
};

export default cartSelector;
