const board=document.querySelector(".board");
const boardletters=document.querySelector(".letters");
const boardnumbers=document.querySelector(".numbers");
let letters=["a","b","c","d","e","f","g","h"]
let index = 0;
let black = false;
let num = 1;


for (let i=0;i<8; i++){
    let letter=document.createElement("li");
    letter.textContent = letters[i];
    boardletters.appendChild(letter);
}