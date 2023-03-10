<template>
  <v-navigation-drawer class="cart" right v-model="showSideBar" app temporary>
    <div class="grey lighten-2 d-flex justify-space-between rounded-0 mb-0 pa-2">
      <h2 class="text-uppercase">Cart List</h2>
      <v-icon @click="showSideBar = false">mdi-close</v-icon>
    </div>
    <v-list v-if="cartList.length" nav dense class="pa-0 mb-0 cartItems">
      <v-list-item-group>
        <template v-for="(cartProduct, index) in cartList">
          <v-list-item
            :ripple="false"
            class="mb-3 d-flex justify-space-between mt-2"
            :key="`cart-item-${cartProduct.key || cartProduct.id}-${index}`"
          >
            <div class="details_img d-flex align-center">
              <v-list-item-avatar tile size="50" class="mr-3">
                <v-img
                  width="50"
                  height="50"
                  contain
                  :src="cartProduct.img"
                ></v-img>
              </v-list-item-avatar>
              <div class="details">
                <v-list-item-title class="subtitle-1 grey--text">{{
                  cartProduct.title
                }}</v-list-item-title>
                <p class="subtitle-1 font-weight-bold ml-2 mb-1">
                  $ {{ parseFloat(cartProduct.price).toFixed(2) }} <span v-if="cartProduct.weight">/ {{ `${cartProduct.weight} gm` }}</span>
                </p>
                <div class="quantity d-flex align-center justify-space-between rounded-pill px-0">
                  <v-btn color="transparent" x-small class="mb-0 elevation-0" @click="decreaseQuantityAction(cartProduct)">-</v-btn>
                  <v-text-field
                    hide-spin-buttons
                    hide-details
                    outlined
                    dense
                    v-model="cartProduct.quantity"
                    type="number"
                    class="text-center rounded-0"
                  ></v-text-field>
                  <v-btn color="transparent" x-small class="mb-0 elevation-0" @click="increaseQuantityAction(cartProduct)">+</v-btn>
                </div>
              </div>
            </div>
            <v-list-item-content class="align-self-end">
              <div class="d-flex">
                <v-spacer></v-spacer>
                <div class="actions d-flex flex-wrap justify-center">
                  <p class="red--text caption mb-0 text-center mr-2" @click="removeProductFromCartAction(cartProduct)">Remove</p>
                  <p v-if="favListGetter.map(prod => prod.id).indexOf(cartProduct.id) < 0" class="caption mb-0 text-center" @click="addToWishList(cartProduct.id)">Move To wishlist</p>
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
          <hr :key="(cartProduct.key || cartProduct.id) + index">
        </template>
      </v-list-item-group>
    </v-list>
    <div class="totalPrice" v-if="cartList.length">
      <v-list-item class="justify-space-between align-center total subTotal mt-3">
        <p>Subtotal</p>
        <p>{{ totalCost }} EGP</p>
      </v-list-item>
      <v-list-item class="justify-space-between align-center total tax">
        <p>Tax</p>
        <p>included</p>
      </v-list-item>
      <v-list-item class="justify-space-between align-center total allTotal">
        <p>Order Total</p>
        <p>{{ totalCost }} EGP</p>
      </v-list-item>
    </div>
    <div v-else class="text-center mt-4">
      <h1 class="d-flex align-center justify-center display-1"> 
        <v-icon large class="black--text" left>mdi-close-circle-outline</v-icon>
        <span>No Products</span>  
      </h1>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "CartSideBar",
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      showSideBar: null,
    };
  },
  watch: {
    // Watching Prop and Assign its value to variable not to mutate the prop itself when sidebar disappears
    show: {
      handler(val) {
        this.showSideBar = val;
      },
      immediate: true,
    },
    // Emit an Event to change the incoming prop
    showSideBar(val) {
      if (val === false && this.show === true) {
        this.$emit("cartSideClosed");
      }
    },
  },
  computed: {
    ...mapState(["cartList", "totalCost"]),
    ...mapGetters(["favListGetter"]),
  },
  methods: {
    ...mapActions(['removeProductFromCartAction', "toggleIsFavAction", "removeProductFromCartAction", 'toggleFavListAction', 'toggleCartListAction', 'decreaseQuantityAction', 'increaseQuantityAction', 'getTotalCostAction']),
    isExistInFavList(id){
      return this.favListGetter.find(prod => prod.id === id);
    },
    addToWishList(id){
      this.toggleIsFavAction(id);
      this.toggleCartListAction();
      this.toggleFavListAction()
    },
  },
  mounted(){
    this.getTotalCostAction();
  },
};
</script>

<style lang="scss">
.v-list-item.active {
  background-color: orangered !important;
  color: white !important;
}

.cart {
  width: clamp(300px, 500px, 50%) !important;
  .cartItems {
    height: calc(100vh - 160px - 55px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .quantity {
    border: 1px solid #52964d;
    max-height: 25px;
    overflow: hidden;
    h4.disabled {
      user-select: none;
    }
    .v-btn, .v-btn:focus, .v-btn:hover {
      box-shadow: none;
      background-color: transparent;
    }
    .v-input {
      max-width: 50px !important;
      border-top: none;
      border-bottom: none;
      input {
        text-align:center;
        font-weight: bold;
        font-size: 13px
      }
    }
  }
  .actions {
    p:last-of-type {
      color: #277a6e;
    }
  }
}

.totalPrice {
  position: fixed;
  bottom: 0;
  right:0;
  left: 0;
  .allTotal p{
    font-size: 22px;
  }

  .total::before, .total::after {
    display: none !important;
  }
}

</style>
