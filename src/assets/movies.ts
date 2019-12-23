interface ISeat {
  id: string;
  seated: boolean;
  price: number;
}

const movies: any = {
  movies: [
    { id: "avenger", where: require("./avengers.jpg") },
    { id: "blade", where: require("./blade.jpg") },
    { id: "shaft", where: require("./shaft.jpg") },
    { id: "terminator", where: require("./terminator.jpg") },
    { id: "maze", where: require("./maze.jpg") }
  ],
  avenger: [
    { id: "A1", seated: true, price: 120 },
    { id: "A2", seated: true, price: 120 },
    { id: "A3", seated: true, price: 120 },
    { id: "A5", seated: !false, price: 1020 },
    { id: "A4", seated: false, price: 180 },
    { id: "A6", seated: true, price: 220 },
    { id: "A7", seated: true, price: 120 }
  ],
  blade: [
    { id: "A1", seated: true, price: 120 },
    { id: "A2", seated: true, price: 120 },
    { id: "A3", seated: true, price: 120 },
    { id: "A5", seated: false, price: 120 },
    { id: "A4", seated: false, price: 1080 },
    { id: "A6", seated: false, price: 220 },
    { id: "A7", seated: true, price: 120 }
  ],
  maze: [
    { id: "A1", seated: true, price: 1200 },
    { id: "A2", seated: true, price: 1280 },
    { id: "A3", seated: true, price: 120 },
    { id: "A5", seated: true, price: 120 },
    { id: "A4", seated: false, price: 180 },
    { id: "A6", seated: true, price: 220 },
    { id: "A7", seated: true, price: 120 }
  ],
  shaft: [
    { id: "A1", seated: false, price: 1200 },
    { id: "A2", seated: true, price: 1280 },
    { id: "A3", seated: true, price: 120 },
    { id: "A5", seated: false, price: 120 },
    { id: "A4", seated: false, price: 180 },
    { id: "A6", seated: true, price: 220 },
    { id: "A7", seated: true, price: 120 }
  ],
  terminator: [
    { id: "A1", seated: true, price: 1200 },
    { id: "A2", seated: false, price: 1280 },
    { id: "A3", seated: true, price: 120 },
    { id: "A5", seated: true, price: 120 },
    { id: "A4", seated: true, price: 180 },
    { id: "A6", seated: true, price: 220 },
    { id: "A7", seated: true, price: 120 }
  ]
};

export { movies, ISeat };
