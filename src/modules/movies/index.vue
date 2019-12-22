<template>
  <div class="box">
    <h3 class="title">{{ movieId.toUpperCase() }}</h3>
    <div class="columns">
      <div
        class="column"
        v-for="(movie, index) in movies.movies"
        :key="index"
        @click="chooseMovie(movie.id)"
      >
        <img :class="className(movie.id)" :src="movie.where" :alt="movie.id" />
      </div>
    </div>
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
    }
  },
  data: () => ({
    movies
  }),
  mounted() {
    this.chooseMovie(movies.movies[0].id);
  },
  methods: {
    chooseMovie(id: string) {
      this.$emit("chooseMovie", id);
    },
    className(movieId: string) {
      return [
        "movie__img",
        {
          chosen: this.movieId == movieId
        }
      ];
    }
  }
});
</script>

<style lang="scss">
.movie__img {
  padding: 30px 0;
  background-size: cover;
  height: 20rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-20px) scale(1.03);
  }
}
.chosen {
  transform: translateY(-20px) scale(1.03);
}
</style>
