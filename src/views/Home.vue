<template>
  <div class="home">
    <div class="products-header">
      <v-container>
        <div class="header-wrapper d-flex align-center justify-space-between mt-6">
          <div class="prodsNum">{{ products.length }} {{ products.length !== 1 ? 'Products' : 'product' }}</div>
          <div class="sort d-flex align-center">
            <div class="mr-2 d-flex">
              <p class="mx-2 mb-0">Sort By</p> 
              <span class="font-weight-bold d-flex align-center">Newest First <v-icon>mdi-chevron-down</v-icon></span>
            </div> 
          </div>
        </div>
        <div class="prods my-3">
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id">
              <Product :quantityInCart="isExistInCart(product.id)" :product="product" />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'
import { mapState } from 'vuex'
export default {
  name: "Home",
  components: {
    Product,
  },
  data(){
    return {
    }
  },
  computed: {
    ...mapState(['products', 'cartList'])
  },
  methods: {
    isExistInCart(id){
      if(this.cartList.length){
        for(let cartItem of this.cartList){
          if(cartItem.id === id){
            return cartItem.quantity;
          }
        }
      }
      return 0;
    }
  },
};
</script>

<style lang="scss">
.home {
  .products-header {
    .header-wrapper {
      .sort {
        div {
          span {
            color: #52964d !important;
            cursor: pointer;
            .v-icon {
              color: #52964d !important;
            }
          }
        }
      }
    }
  }
}
</style>
