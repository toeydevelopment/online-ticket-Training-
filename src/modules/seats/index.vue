<template>
  <div class="box">
    <span v-for="s in seats" :key="s.id">
      <button :class="className(s)" @click="chooseSeat(s)">
        {{ s.id }} | {{ s.price }}
      </button>
      <span>{{ " " }}</span>
    </span>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { movies } from "../../assets/movies";

export default Vue.extend({
  props: {
    movieId: {
      type: String,
      required: true
    },
    selectedSeats: {
      type: Array,
      default: () => []
    },
    firebaseSeats: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    className(seat: any) {
      const ids = this.selectedSeats.map((s: any) => s.id);
      const idx = ids.indexOf(seat.id);

      const fIds = this.firebaseSeats.map((s: any) => s.id);
      const fIdx = fIds.indexOf(seat.id);

      return [
        "button",
        {
          "is-danger": !seat.seated,
          "is-primary": idx != -1,
          "is-warning": fIdx !== -1 && idx === -1
        }
      ];
    },
    chooseSeat(seat: any) {
      this.$emit("chooseSeat", seat);
    }
  },
  computed: {
    seats(): Array<any> {
      return movies[this.movieId];
    }
  }
});
</script>
