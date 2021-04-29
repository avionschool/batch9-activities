import blackKing from "./constants/blackKing.js";
import blackQueen from "./constants/blackQueen.js";
import generateBishop from "./constants/generateBishop.js";
import generateKnight from "./constants/generateKnight.js";
import generatePawn from "./constants/generatePawn.js";
import generateRook from "./constants/generateRook.js";
import whiteKing from "./constants/whiteKing.js";
import whiteQueen from "./constants/whiteQueen.js";

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

const rSquares = ["a8", "a1", "h8", "h1"];
const nSquares = ["b8", "b1", "g8", "g1"];
const bSquares = ["c8", "c1", "f8", "f1"];

document.querySelector(".cell_d8").innerHTML = blackKing;
document.querySelector(".cell_d1").innerHTML = whiteKing;
document.querySelector(".cell_e8").innerHTML = blackQueen;
document.querySelector(".cell_e1").innerHTML = whiteQueen;

rSquares.forEach(rSquare => {
  document.querySelector(`.cell_${rSquare}`).innerHTML = generateRook(
    `${Number(rSquare[1]) % 2 == 0 ? "black" : "white"}`
  );
});

nSquares.forEach(nSquare => {
  document.querySelector(`.cell_${nSquare}`).innerHTML = generateKnight(
    `${Number(nSquare[1]) % 2 == 0 ? "black" : "white"}`
  );
});

bSquares.forEach(bSquare => {
  document.querySelector(`.cell_${bSquare}`).innerHTML = generateBishop(
    `${Number(bSquare[1]) % 2 == 0 ? "black" : "white"}`
  );
});

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
