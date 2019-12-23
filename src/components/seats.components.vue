<template>
  <div class="box">
    <span v-for="seat in seats" :key="seat.id"
      ><button :class="className(seat)" @click="chooseSeat(seat)">
        {{ `${seat["id"]} | ${seat["price"]}` }}
      </button>
      <span>{{ " " }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { movies, ISeat } from "../assets/movies";

export default Vue.extend({
  props: {
    selectedMovieId: {
      type: String,
      default: () => "avenger"
    },
    selectedSeats: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  methods: {
    className(seat: any) {
      const ids = this.selectedSeats.map((selectedSeat: any) => {
        return selectedSeat.id;
      });
      const idx = ids.indexOf(seat.id);
      return [
        "button",
        {
          "is-danger": !seat.seated,
          "is-primary": idx == -1 ? false : true
        }
      ];
    },
    chooseSeat(seat: any) {
      this.$emit("chosenSeat", seat);
    }
  },
  computed: {
    seats(): Array<ISeat> {
      return movies[this.selectedMovieId] as Array<ISeat>;
    }
  }
});
</script>

<style></style>
