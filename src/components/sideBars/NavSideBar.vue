<template>
  <v-navigation-drawer v-model="showSideBar" app temporary>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item class="active">
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavSideBar",
  props: {
    show: {
      type: Boolean,
    }
  },
  data() {
    return {
      group: null,
      showSideBar: null,
    };
  },
  watch: {
    // Watching Prop and Assign its value to variable not to mutate the prop itself when sidebar disappears
    show :{
      handler(val){
        this.showSideBar = val;
      },
      immediate: true
    },
    // Emit an Event to change the incoming prop
    showSideBar(val){
      if(val === false && this.show === true){
        this.$emit('navSideClosed')
      }
    }
  }
};
</script>

<style>
.v-list-item.active {
  background-color: orangered !important;
  color: white !important;
}
</style>
