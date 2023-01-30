<template>
  <v-app>
    <div class="sideBars">
      <NavSideBar @navSideClosed="toggleNavListAction" :show="showNav" />
      <FavSideBar @favSideClosed="toggleFavListAction" :show="showFav" />
      <CartSideBar @cartSideClosed="toggleCartListAction" :show="showCart" />
    </div>
    <v-app-bar app class="elevation-0 py-4">
      <v-spacer></v-spacer>
      <div class="cart-nav d-flex align-center">
        <v-icon class="d-block d-sm-none" @click="toggleNavListAction">mdi-menu</v-icon>
        <v-icon @click="toggleCartListAction">mdi-cart</v-icon>
      </div>
      <div class="list d-none d-sm-flex">
        <v-btn to="/" color="grey lighten-2" tile light depressed :class="['mx-2', index === 0 ? 'active' : '', 'mb-2']" v-for="(link, index) in links" :key="link">{{ link }}</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavSideBar from '@/components/sideBars/NavSideBar.vue'
import FavSideBar from '@/components/sideBars/FavSideBar.vue'
import CartSideBar from '@/components/sideBars/CartSideBar.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: "App",
  data: () => ({
    links: ['All', 'Food', 'Non Food', 'Fashion & Linen'],
  }),
  components: {
    NavSideBar,
    FavSideBar,
    CartSideBar,
  },
  computed: {
    ...mapState(['showCart', 'showNav', 'showFav']),
  },
  methods:{
    ...mapActions(['toggleCartListAction', 'toggleNavListAction', 'toggleFavListAction']),
  }
};
</script>
<style scoped>
.v-btn.active {
  background-color: orangered !important;
  color: white !important;
}
.cart-nav {
  gap: 20px;
}
</style>
