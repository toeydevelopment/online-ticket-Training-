<template>
  <div class="section">
    {{ status }}
    <movies @chooseMovie="handleChooseMovie" :movieId="movieId" />
    <seats
      :movieId="movieId"
      @chooseSeat="handleChooseSeat"
      :selectedSeats="selectedSeats"
      :firebaseSeats="firebaseSeats"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Movies from "../../modules/movies/index.vue";
import Seats from "../../modules/seats/index.vue";
import firebase from "firebase";

const config = {
  //   apiKey: "AIzaSyBYjoNS6bi6_TbnIk4_C36KXW2VI8MbGws",
  //   authDomain: "mnd-controldata.firebaseapp.com",
  databaseURL: "https://mnd-controldata.firebaseio.com",
  projectId: "mnd-controldata"
  //   storageBucket: "mnd-controldata.appspot.com",
  //   messagingSenderId: "534651233605",
  //   appId: "1:534651233605:web:cf4dbac7892289fbd00a2c",
  //   measurementId: "G-TSVMSCM6B0"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default Vue.extend({
  data: () => ({
    movieId: "",
    selectedSeats: [] as any,
    firebaseSeats: [] as any,
    status: {
      count: 0,
      price: 0
    }
  }),
  components: {
    movies: Movies,
    seats: Seats
  },
  methods: {
    handleChooseMovie(id: string) {
      if (this.status.count != 0) {
        if (confirm("Data will be lost ?")) {
          this.selectedSeats = [];
          this.status = {
            count: 0,
            price: 0
          };
        } else {
          return;
        }
      }
      db.doc("online-ticket/" + id).onSnapshot({
        next: snapShot => {
          this.firebaseSeats = (snapShot.data() as any).selectedSeats as any;
        },
        error: err => {
          //   console.log(err);
        },
        complete: () => {
          //   console.log("DONE");
        }
      });
      this.movieId = id;
    },
    handleChooseSeat(seat: any) {
      const ids = this.selectedSeats.map((s: any) => s.id);
      const idx = ids.indexOf(seat.id);

      if (idx === -1) {
        this.selectedSeats.push(seat);
      } else {
        this.selectedSeats.splice(idx, 1);
      }
      const cl = db.doc("online-ticket/" + this.movieId).set({
        selectedSeats: this.selectedSeats
      });

      this.status = this.selectedSeats.reduce(
        (summary: any, s: any) => {
          summary.count++;
          summary.price += s.price;
          return summary;
        },
        {
          count: 0,
          price: 0
        }
      );
    }
  }
});
</script>
