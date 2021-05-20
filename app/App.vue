<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>
    <router-view></router-view>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { Component } from "vue-property-decorator";

@Component()
export default class App extends Vue {
  
}

</script>

<style lang="scss">
@import "@/app.scss";

ActionBar {
  background-color: $complementary;
}
</style>