import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    products: [
      {
        id: 1,
        img: require("../assets/logo.svg"),
        price: 5.55,
        title: 'Lorem ipsum 1',
        description: "Lorem ipsum dolor sit amet, consectetur.",
        isFav: false,
        weights: [250, 500, 750, 1000],
      },
      {
        id: 2,
        img: require("../assets/logo.svg"),
        price: 5.55,
        title: 'Lorem ipsum 2',
        description: "Lorem ipsum dolor sit amet, consectetur.",
        isFav: false,
      },
      {
        id: 3,
        img: require("../assets/logo.svg"),
        price: 5.55,
        title: 'Lorem ipsum 3',
        description: "Lorem ipsum dolor sit amet, consectetur.",
        isFav: true,
        weights: [250, 500, 750, 1000],
      },
      {
        id: 4,
        img: require("../assets/logo.svg"),
        price: 5.55,
        title: 'Lorem ipsum 4',
        description: "Lorem ipsum dolor sit amet, consectetur.",
        isFav: false,
        weights: [250, 500, 750, 1000],
      },
      {
        id: 5,
        img: require("../assets/logo.svg"),
        price: 5.55,
        title: 'Lorem ipsum 5',
        description: "Lorem ipsum dolor sit amet, consectetur.",
        isFav: false,
      },
      {
        id: 6,
        img: require("../assets/logo.svg"),
        price: 5.55,
        title: 'Lorem ipsum 6',
        description: "Lorem ipsum dolor sit amet, consectetur.",
        isFav: false,
        weights: [250, 500, 750, 1000],
      },
    ],
    cartList: [],
    showNav: false,
    showFav: false,
    showCart: false,
    isCartChanges: false,
    totalCost: 0,
  },
  getters: {
    favListGetter(state){
      return state.products.filter(prod => prod.isFav);
    }
  },
  mutations: {
    toggleIsFav(state, id){
      let editedProductIndex = state.products.findIndex(product => product.id === id);
      state.products[editedProductIndex].isFav = !state.products[editedProductIndex].isFav;
    },
    updateCartList(state, prod){
      if(state.cartList.length){
        for(let product of state.cartList){
          if(parseInt(product.id) == parseInt(prod.id)){
            let prodIndex = state.cartList.findIndex(product => parseInt(product.id) === parseInt(prod.id));
            state.cartList[prodIndex].quantity += 1;
            return;
          }
        }
      }
      prod.quantity = 1;
      state.cartList.push(prod);
    },
    pushToCart(state, prod){
      state.cartList.push(prod)
    },
    removeProductFromCart(state, product){
      if(product.key){
        state.cartList = state.cartList.filter(prod => prod.key !== product.key);
        localStorage.setItem('removedFromCart', 'true')
      }else{
        state.cartList = state.cartList.filter(prod => parseInt(prod.id) !== parseInt(product.id))
      }
    },
    increaseQuantity(state, prod){
      if(prod.key){
        let prodIndex = state.cartList.findIndex(product => product.key === prod.key);
        state.cartList[prodIndex].quantity += 1;
      }else{
        let prodIndex = state.cartList.findIndex(product => parseInt(product.id) === parseInt(prod.id));
        if(prodIndex >= 0){
          state.cartList[prodIndex].quantity += 1;
        }else{
          state.cartList.push(prod);
        }
      }
    },
    decreaseQuantity(state, prod){
      if(prod.quantity > 1){
        if(prod.key){
          let prodIndex = state.cartList.findIndex(product => product.key === prod.key);
          state.cartList[prodIndex].quantity -= 1;
        }else {
          let prodIndex = state.cartList.findIndex(product => product.id === prod.id);
          if(prodIndex >= 0){
            state.cartList[prodIndex].quantity -= 1;
          }
        }
      }
    },
    toggleNavList(state){
      state.showNav = !state.showNav;
    },
    toggleFavList(state){
      state.showFav = !state.showFav;
    },
    toggleCartList(state){
      state.showCart = !state.showCart;
    },
    activeIsCartChanges(state){
      state.isCartChanges = true;
    },
    deactiveIsCartChanges(state){
      state.isCartChanges = false;
    },
    getTotalCost(state){
      let cost = 0;
      for(let prod of state.cartList){
        cost += prod.quantity * prod.price;
      }
      state.totalCost = cost.toFixed(2)
    }
  },
  actions: {
    toggleIsFavAction({ commit }, id){
      commit('toggleIsFav', id)
    },
    pushToCartAction({ commit }, prod){
      commit('pushToCart', prod);
      commit('getTotalCost')
    },
    removeProductFromCartAction({ commit }, prod){
      commit('removeProductFromCart', prod);
      commit('getTotalCost')
    },
    updateCartListAction({ commit }, prod){
      commit('updateCartList', prod);
      commit('getTotalCost')
    },
    increaseQuantityAction({ commit }, prod){
      const myPromise = new Promise((myResolve, myReject) => {
        myResolve();
        myReject();
      });
      myPromise.then(() => {
        commit('increaseQuantity', prod);
        commit('getTotalCost');
        commit('activeIsCartChanges');
      }).then(() => {
        commit('deactiveIsCartChanges');
      }).catch((err) => console.log(err))
    },
    decreaseQuantityAction({ commit }, prod){
      const myPromise = new Promise((myResolve, myReject) => {
        myResolve();
        myReject();
      });
      myPromise.then(() => {
        commit('decreaseQuantity', prod);
        commit('getTotalCost');
        commit('activeIsCartChanges');
      }).then(() => {
        commit('deactiveIsCartChanges');
      }).catch((err) => console.log(err))
    },
    toggleNavListAction({ commit }){
      commit('toggleNavList')
    },
    toggleFavListAction({ commit }){
      commit('toggleFavList')
    },
    toggleCartListAction({ commit }){
      commit('toggleCartList')
    },
    deactiveIsCartChangesAction({ commit }){
      commit('deactiveIsCartChanges')
    },
    getTotalCostAction({ commit }){
      commit('getTotalCost')
    },
  },
  modules: {},
});
