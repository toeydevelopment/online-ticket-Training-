<template>
  <div class="container">
    <section class="section">
      <div class="box">
        <Header title="ControlData Online Ticket" />
        <router-view />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./modules/commons/header/index.vue";

export default Vue.extend({
  components: {
    Header
  }
});
</script>
