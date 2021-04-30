let container = document.getElementById("container");


for(i = 1; i < 9; i++){
    let newDiv1 = document.createElement("div",);
    if(i === 1 || i === 8){
        newDiv1.innerHTML = '♜';
/*newDiv1.style.width = "68.75px";
        newDiv1.style.height = "68.75px";*/
    }
    if(i === 2 || i === 7){
        newDiv1.innerHTML = '♞';
        /*newDiv1.style.width = "68.75px";
        newDiv1.style.height = "68.75px";*/
    }
    if(i === 3 || i === 6){
        newDiv1.innerHTML = '♝';
        /*newDiv1.style.width = "68.75px";
        newDiv1.style.height = "68.75px";*/
    }
    if(i === 4){
        newDiv1.innerHTML = '♛';
        /*newDiv1.style.width = "68.75px";
        newDiv1.style.height = "68.75px";*/
    }
    if(i === 5){
        newDiv1.innerHTML = '♚';
        /*newDiv1.style.width = "68.75px";
        newDiv1.style.height = "68.75px";*/
    }
    if(i % 2 == 0){
        newDiv1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else{
        newDiv1.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    newDiv1.setAttribute("class", "box");
    container.appendChild(newDiv1);
}

for(i = 1; i < 9; i++){
    let newDiv2 = document.createElement("div");
    if(i % 2 == 0){
        newDiv2.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    } else{
        newDiv2.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    newDiv2.innerHTML = "♟︎";
    newDiv2.setAttribute("class", "box");
    container.appendChild(newDiv2);
};
/*for( i = 9; i < 19; i++){
    let pawn = document.getElementsByClassName("box");
    if(i >= 9 || i < 19){
        pawn.querySelector(".box").innerHTML = "&#9823;"
    };
};*/

for(i = 1; i < 9; i++){
    let newDiv3 = document.createElement("div");
    if(i % 2 == 0){
        newDiv3.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else{
        newDiv3.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    newDiv3.setAttribute("class", "box");
    container.appendChild(newDiv3);
}

for(i = 1; i < 9; i++){
    let newDiv4 = document.createElement("div");
    if(i % 2 == 0){
        newDiv4.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    } else{
        newDiv4.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    newDiv4.setAttribute("class", "box");
    container.appendChild(newDiv4);
}

for(i = 1; i < 9; i++){
    let newDiv5 = document.createElement("div");
    if(i % 2 == 0){
        newDiv5.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else{
        newDiv5.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    newDiv5.setAttribute("class", "box");
    container.appendChild(newDiv5);
}

for(i = 1; i < 9; i++){
    let newDiv6 = document.createElement("div");
    if(i % 2 == 0){
        newDiv6.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    } else{
        newDiv6.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    newDiv6.setAttribute("class", "box");
    newDiv6.setAttribute("id", "row-6");
    container.appendChild(newDiv6);
}



for(i = 1; i < 9; i++){
    let newDiv7 = document.createElement("div");
    if(i % 2 == 0){
        newDiv7.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else{
        newDiv7.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    newDiv7.innerHTML = "♙";
    newDiv7.setAttribute("class", "box");
    newDiv7.setAttribute("id", "row-7");
    container.appendChild(newDiv7);
}

for(i = 1; i < 9; i++){
    let newDiv8 = document.createElement("div");
    if(i === 1 || i === 8){
        newDiv8.innerHTML = '♖';
    }
    if(i === 2 || i === 7){
        newDiv8.innerHTML = '♘';
    }
    if(i === 3 || i === 6){
        newDiv8.innerHTML = '♗';
    }
    if(i === 4){
        newDiv8.innerHTML = '♕';
    }
    if(i === 5){
        newDiv8.innerHTML = '♔';
    }
    if(i % 2 == 0){
        newDiv8.style.backgroundColor = "rgba(0, 0, 0, 0.1)";

    } else{
        newDiv8.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
    newDiv8.setAttribute("class", "box");
    newDiv8.setAttribute("id", "row-8");
    container.appendChild(newDiv8);
    /*let pawn = document.getElementsByClassName("box");
    container.querySelector(".box").innerHTML = "&#9823;";*/
}

