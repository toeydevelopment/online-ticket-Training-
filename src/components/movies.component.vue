<template>
  <div class="box">
    <h2 class="title">{{ selectedMovieId.toUpperCase() }}</h2>
    <div class="columns">
      <div
        class="column"
        v-for="movie in movies"
        :key="movie.id"
        @click="chooseMovie(movie)"
      >
        <img :src="movie.where" :alt="movie.id" :class="className(movie.id)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { movies as movieData } from "../assets/movies";

export default Vue.extend({
  data: () => ({
    selectedMovieId: ""
  }),
  methods: {
    chooseMovie(movie: any) {
      this.selectedMovieId = movie.id;
      this.$emit("chosenMovie", movie.id);
    },
    className(movieId: string) {
      return [
        "poster",
        {
          "poster--selected": this.selectedMovieId == movieId
        }
      ];
    }
  },
  mounted() {
    this.chooseMovie(this.movies[0]);
  },
  computed: {
    movies() {
      return movieData.movies;
    }
  }
});
</script>

<style lang="scss">
.poster {
  background-size: cover;
  width: 100%;
  height: 20rem;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transform: translateY(-2rem) scale(1.03);
  }

  &--selected {
    transform: translateY(-1rem) scale(1.03);
  }
}
</style>
