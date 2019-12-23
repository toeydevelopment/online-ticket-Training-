<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="box">
          <h1 class="title">ControlData Online ticket</h1>
          <movies @chosenMovie="handleChosenMovie" />
          <seats
            :selectedMovieId="selectedMovie"
            @chosenSeat="handleChosenSeat"
            :selectedSeats="selectedSeats"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Movies from "./components/movies.component.vue";
import Seats from "./components/seats.components.vue";

export default Vue.extend({
  data: () => ({
    selectedMovie: "",
    selectedSeats: [] as Array<any>
  }),
  components: {
    movies: Movies,
    seats: Seats
  },
  methods: {
    handleChosenMovie(movieId: string) {
      this.selectedMovie = movieId;
    },
    handleChosenSeat(seat: any) {
      const ids = this.selectedSeats.map(
        (selectedSeat: { id: string; price: number; seated: boolean }) => {
          return selectedSeat.id;
        }
      );
      const idx = ids.indexOf(seat.id);
      if (idx == -1) {
        this.selectedSeats.push(seat);
      } else {
        this.selectedSeats.splice(idx, 1);
      }
    }
  }
});
</script>

<style lang="scss"></style>
