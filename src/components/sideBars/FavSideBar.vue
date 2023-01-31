<template>
  <v-navigation-drawer width="350" right v-model="showSideBar" app temporary>
    <div class="grey lighten-2 d-flex justify-space-between rounded-0 mb-0 pa-2">
      <h2 class="text-uppercase">Wish List</h2>
      <v-icon @click="showSideBar = false">mdi-close</v-icon>
    </div>
    <v-list nav dense class="pa-0">
      <v-list-item-group>
        <template v-for="favouriteProduct in favListGetter">
          <v-list-item
            :ripple="false"
            class="mb-0 d-flex justify-space-between"
            :key="`fav-item-${favouriteProduct.id}`"
          >
            <div class="details_img d-flex align-center">
              <v-list-item-avatar tile size="50" class="mr-3">
                <v-img width="50" height="50" contain :src="favouriteProduct.img"></v-img>
              </v-list-item-avatar>
              <div class="details">
                <v-list-item-title class="subtitle-1 grey--text">{{favouriteProduct.title}}</v-list-item-title>
                <p class="subtitle-1 font-weight-bold mb-0 ml-2">
                  $ {{ parseFloat(favouriteProduct.price).toFixed(2) }}
                </p>
              </div>
            </div>
            <v-list-item-content>
              <div
                class="cart-item-info d-flex justify-space-between align-center"
              >
                <v-spacer></v-spacer>
                <v-icon
                  @click.prevent="toggleIsFavAction(favouriteProduct.id)"
                  >mdi-trash-can</v-icon
                >
              </div>
            </v-list-item-content>
          </v-list-item>
          <hr :key="favouriteProduct.id">
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "FavSideBar",
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
        this.$emit("favSideClosed");
      }
    },
  },
  computed: {
    ...mapGetters(['favListGetter'])
  },
  methods: {
    ...mapActions(['toggleIsFavAction']),
  }
};
</script>

<style lang="scss">
.v-icon {
  transition: 0.5s;
  &:hover {
    color: orangered;
  }
}
</style>
