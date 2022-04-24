export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale
      || item.leftArm.onSale
      || item.rightArm.onSale
      || item.torso.onSale
      || item.base.onSale);
    },
  },
};
