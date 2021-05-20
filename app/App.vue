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

export default Vue.extend({
});
</script>