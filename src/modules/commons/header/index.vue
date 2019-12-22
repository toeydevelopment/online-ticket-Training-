<template>
  <h2 class="title">{{ title }}</h2>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "Title",
      required: true,
      validator(val) {
        if (typeof val == "string") {
          return true;
        }
        return false;
      }
    }
  }
});
</script>
