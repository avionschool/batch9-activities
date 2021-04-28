import generatePawn from "./constants/generatePawn.js";

const letters = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h"
};

const rank2 = document.querySelector(".rank_2").children;
const rank7 = document.querySelector(".rank_7").children;

for (let i = 0; i <= rank2.length - 1; i++) {
  rank2[i].innerHTML = generatePawn("white");
  rank2[i].querySelector("svg").id = `${letters[i]}2`;
}

for (let i = 0; i <= rank7.length - 1; i++) {
  rank7[i].innerHTML = generatePawn("black");
  rank7[i].querySelector("svg").id = `${letters[i]}7`;
}

// console.log(rank2);
// pieces.forEach(piece => {
//   piece.setAttribute("viewBox", "-2 -2 50 50");
// });
