<template>
  <v-container>
    <v-row>
      <v-col cols="8" sm="12" class="mx-auto">
        <v-card elevation="0" class="position-relative">
          <v-hover v-slot="{ hover }">
            <v-icon
              v-if="hover || product.isFav"
              color="teal darken-1"
              class="favIcon"
              @click.prevent="addToFavList(product.id)"
              >mdi-heart</v-icon
            >
            <v-icon
              v-else
              color="teal darken-1"
              class="favIcon"
              @click="addToFavList(product.id)"
              >mdi-heart-outline</v-icon
            >
          </v-hover>
          <v-img :src="product.img" class="my-3" contain height="200" />
          <p class="grey--text text--darken-2 font-weight-medium">
            {{ product.description }}
          </p>
          <p class="price font-weight-bold">EGP {{ product.price }}</p>
          <v-btn small rounded outlined class="addToCart" @click.prevent="addToCart(product)">
            <span class="font-weight-bold">Add to cart</span>
            <v-badge
              v-if="cartNum"
              color="teal darken-1"
              :content="`${cartNum}`"
              offset-y="-2"
              offset-x="-2"
            ></v-badge>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    showFav: false,
    showCart: false,
    cartNum: 0,
  }),
  methods: {
    ...mapActions(['toggleIsFavAction', 'updateCartListAction', 'toggleCartListAction', 'toggleNavListAction', 'toggleFavListAction', 'deactiveIsCartChangesAction']),
    addToFavList(id) {
      this.toggleIsFavAction(id);
      this.toggleFavListAction();
    },
    addToCart(prod) {
      if(prod.weights){
        this.$router.push(`/product/${prod.id}`);
        return;
      }
      this.updateCartListAction(prod);
      this.quantityInCart(prod.id);
      this.toggleCartListAction();
    },
    quantityInCart(id){
      let allCount = this.cartList.filter(prod => parseInt(prod.id) === parseInt(id));
      let count = 0;
      for(let cartItem of allCount){
        count += cartItem.quantity;
      }
      this.cartNum = count;
    },
  },
  computed: {
    ...mapState(['products', 'cartList', 'isCartChanges']),
    ...mapGetters(['favListGetter']),
  },
  mounted(){
    this.quantityInCart(this.product.id);
    this.deactiveIsCartChangesAction()
  },
  watch: {
    isCartChanges(val){
      if(val){
        this.quantityInCart(this.product.id);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.v-card {
  .favIcon {
    position: absolute;
    right: 10px;
    top: 0;
    z-index: 1;
  }
  .price {
    color: #277a6e;
  }
  .addToCart {
    border: 1px solid #277a6e;
  }
}
</style>
