<template>
  <GridLayout>
    <Label class="info">
      <FormattedString>
        <Span class="fas" text.decode="&#xf135; " />
        <Span :text="message" />
      </FormattedString>
    </Label>
  </GridLayout>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { Component } from "vue-property-decorator";

@Component()

export default class Home extends Vue{
  message = "Blank {N}-Vue app"
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
