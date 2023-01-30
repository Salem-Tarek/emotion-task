<template>
  <div class="product mt-4">
    <!-- <h1>This is Product page</h1> -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-img max-width="100%" max-height="100%" contain :src="product.img"></v-img>
        </v-col>
        <v-col cols="12" sm="6" class="content">
          <h1 class="font-weight-regular">{{ product.title }}</h1>
          <div class="price font-weight-black teal--text--darken-3 my-5">
            EGP {{ product.price }}
          </div>
          <div class="weights my-5" v-if="product.weights">
            <p class="font-weight-bold">Grocery Weights</p>
            <v-select
              @change="getProductData"
              v-model="selectedWeight"
              :items="items"
              outlined
            ></v-select>
          </div>
          <div class="quantity_addToCart d-flex my-5 align-end">
            <div class="quantity_wrapper mr-3" v-if="cartList.filter(prod => prod.id === product.id).length">
              <p>Quantity</p>
              <div class="quantity d-flex align-center justify-space-between rounded-pill px-3">
                <v-btn x-small :class="['mb-0']" @click="decreaseQuantityAction(product);toggleCartListAction()">-</v-btn>
                <v-text-field
                  hide-spin-buttons
                  hide-details
                  outlined
                  dense
                  v-model="product.quantity"
                  type="number"
                  class="text-center rounded-0"
                ></v-text-field>
                <v-btn x-small :class="['mb-0']" @click="increaseQuantityAction(product);toggleCartListAction()">+</v-btn>
              </div>
            </div>
            <div class="addToCart">
              <v-btn small class="rounded-pill" @click="addToCart(product)">Add to cart</v-btn>
              <v-badge
                v-if="isExistInCart(product.id)"
                class="font-weight-bold"
                color="yellow darken-1 teal--text"
                :content="product.quantity"
                offset-y="-5"
                offset-x="10"
              ></v-badge>
            </div>
          </div>
          <div class="delivary my-5">
            <p class="font-weight-bold d-flex align-items-center">
              <v-icon>mdi-clock-outline</v-icon>
              <span class="ml-2">Delivered Within : <span class="font-weight-thin">The Same</span> Day</span>
            </p>
          </div>
          <hr class="my-4">
          <div class="sold">
            Sold and delivared by Spinneys
          </div>
          <hr class="my-4">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return {
      items: ['250 gm', '500 gm', '750 gm', '1000 gm'],
      selectedWeight: '250 gm',
      test: 1,
      product: {},
    }
  },
  computed:{
    ...mapState(['products', 'cartList']),
  },
  methods: {
    ...mapActions(['updateCartListAction', 'increaseQuantityAction', 'decreaseQuantityAction', 'toggleCartListAction', 'pushToCartAction']),
    isExistInCart(id){
      if(this.cartList.length){
        for(let cartItem of this.cartList){
          if(cartItem.id == id){
            return cartItem.quantity;
          }
        }
      }
      return 0;
    },
    getProductData(e){
      let defaultProd = {
        ...this.product
      }
      defaultProd.quantity = 1;
      defaultProd.key = '';
      defaultProd.id = this.$route.params.id;
      this.product = this.cartList.filter(prod => prod.key.indexOf(e) >= 0 && prod.id == this.$route.params.id)[0] || defaultProd;
      console.log(this.product);
    },
    addToCart(prod) {
      console.log(this.product);
      if(prod.key && this.cartList.some(product => product.weight === this.selectedWeight) && this.cartList.some(product => product.key === prod.key)){
        let theProd = this.cartList.filter(product => product.key === prod.key)[0];
        this.increaseQuantityAction(theProd);
        this.toggleCartListAction()
        return;
      }
      let allProdData = {
        ...prod,
        key: `${prod.id}_${this.selectedWeight}`,
        weight: this.selectedWeight,
        quantity: 1,
      }
      console.log(allProdData);
      this.pushToCartAction(allProdData);
      this.toggleCartListAction()
    },
  },
  created(){
    if(this.cartList.filter(prod => prod.id == this.$route.params.id).length){
      this.product = this.cartList.filter(prod => prod.id == this.$route.params.id)[0];
    }else{
      this.product = this.products.filter(prod => prod.id == this.$route.params.id)[0];
      this.product.quantity = 1;
    }
    this.$watch(
      () => this.$route.params,
      () => {
        if(this.cartList.filter(prod => prod.id == this.$route.params.id).length){
          this.product = this.cartList.filter(prod => prod.id == this.$route.params.id)[0];
        }else{
          this.product = this.products.filter(prod => prod.id == this.$route.params.id)[0];
          this.product.quantity = 1;
        }
      }
    )
  },
}
</script>

<style lang="scss">
.product {
  .row {
    gap: 20px;
    align-items: center;
  }
  .content {
    h1 {
      color: #277a6e
    }
    .price {
      color: #277a6e
    }
    .weights {
      .v-select {
        max-width: 200px;
      }
    }
    .quantity_addToCart {
      .quantity {
        border: 1px solid #52964d;
        max-height: 25px;
        overflow: hidden;
        h4.disabled {
          user-select: none;
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
      .addToCart {
        .v-btn {
          background-image: linear-gradient(to right, #52964d, #95b441);
          color: #FFF;
          font-weight: bold;
        }
      }
    }
  }
}
</style>