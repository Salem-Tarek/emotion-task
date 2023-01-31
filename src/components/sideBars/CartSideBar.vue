<template>
  <v-navigation-drawer class="cart" right v-model="showSideBar" app temporary>
    <v-list nav dense class="pa-0 mb-0">
      <v-list-item-group>
        <v-list-item
          :ripple="false"
          class="grey lighten-2 justify-center rounded-0 mb-0 py-2"
        >
          <h2 class="text-uppercase">Cart List</h2>
        </v-list-item>
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
                  $ {{ parseFloat(cartProduct.price).toFixed(2) }} <span v-if="cartProduct.weight">/ {{ cartProduct.weight }}</span>
                </p>
                <div class="quantity d-flex align-center justify-space-between rounded-pill px-3">
                  <v-btn x-small :class="['mb-0', cartProduct.quantity === 1 ? 'disabled' : '']" @click="decreaseQuantityAction(cartProduct)">-</v-btn>
                  <v-text-field
                    hide-spin-buttons
                    hide-details
                    outlined
                    dense
                    v-model="cartProduct.quantity"
                    type="number"
                    class="text-center rounded-0"
                  ></v-text-field>
                  <v-btn x-small :class="['mb-0', cartProduct.quantity === 1 ? 'disabled' : '']" @click="increaseQuantityAction(cartProduct)">+</v-btn>
                </div>
              </div>
            </div>
            <v-list-item-content class="align-self-end">
              <div class="d-flex">
                <v-spacer></v-spacer>
                <div class="actions d-flex">
                  <p class="red--text caption mb-0 mr-2" @click="removeProductFromCartAction(cartProduct)">Remove</p>
                  <p v-if="favListGetter.map(prod => prod.id).indexOf(cartProduct.id) < 0" class="caption mb-0" @click="addToWishList(cartProduct.id)">Move To wishlist</p>
                </div>
              </div>
            </v-list-item-content>
          </v-list-item>
          <hr :key="(cartProduct.key || cartProduct.id) + index">
        </template>
      </v-list-item-group>
    </v-list>
    <div class="totalPrice2" v-if="cartList.length">
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
.quantity {
  border: 1px solid #52964d;
  max-height: 25px;
  overflow: hidden;
  h4.disabled {
    user-select: none;
  }
}
.cart {
  // width: clamp(300px, 600px, 50%) !important;
  min-width: 500px;
  max-width: 75% !important;
}
.cart .quantity .v-input {
  max-width: 50px !important;
  border-top: none;
  border-bottom: none;
  input {
    text-align:center;
    font-weight: bold;
    font-size: 13px
  }
}

.cart .actions {
  p:last-of-type {
    color: #277a6e;
  }
}

.totalPrice {
  position: fixed;
  bottom: 0;
  right:0;
  left: 0;
  .allTotal p{
    font-size: 20px;
  }

  .total::before, .total::after {
    display: none !important;
  }
}

</style>
