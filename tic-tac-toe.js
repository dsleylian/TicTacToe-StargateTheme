//select html elements 
let choosePlayer = document.querySelector("#choose");
let xButton = document.querySelector(".playerx");
let oButton = document.querySelector(".playero");
let insideDivs = document.querySelectorAll("#container div");
let container = document.querySelector("#container");

let currentPlayer = "x";

//add events to user selection buttons to start game set up
xButton.addEventListener("click", setUpX);
oButton.addEventListener("click", setUpO);

//create torches for each player
let torchOnX = document.createElement("img");
torchOnX.src = "images/flameon.gif";
torchOnX.setAttribute("id", "righttorch");

let torchOnO = document.createElement("img");
torchOnO.src = "images/flameon.gif";
torchOnO.setAttribute("id", "lefttorch");

//not sure if will use torch off
//let torchOff = document.createElement("img");
//torchOff.src = "images/flameoff.gif";


//create left & right side displays for players turn plus torch
let playerDisplayX = document.createElement("p");
playerDisplayX.setAttribute("class", "right");
let textDisplayX = document.createTextNode(`Player X's turn`);
playerDisplayX.appendChild(textDisplayX);
document.body.insertBefore(playerDisplayX, container);
playerDisplayX.style.visibility = "hidden";
let holdTheTorchX = document.createElement("div");
playerDisplayX.appendChild(holdTheTorchX);
holdTheTorchX.appendChild(torchOnX);

let playerDisplayO = document.createElement("p");
playerDisplayO.setAttribute("class", "left");
let textDisplayO = document.createTextNode(`Player O's turn`);
playerDisplayO.appendChild(textDisplayO);
document.body.insertBefore(playerDisplayO, container);
playerDisplayO.style.visibility = "hidden";
let holdTheTorchO = document.createElement("div");
playerDisplayO.appendChild(holdTheTorchO);
holdTheTorchO.appendChild(torchOnO);


//set up reset button and call the resetGame function when clicked
let resetButton = document.querySelector("#startover");
resetButton.addEventListener("click", resetGame);

// create winner/no winner banners 
let xWinner = document.createElement("div");
let xWinnerPara = document.createElement("p");
let xWinnerText = document.createTextNode("Player X Won!!!");
xWinner.setAttribute("id", "winnerIsX");
xWinner.appendChild(xWinnerPara);
xWinnerPara.appendChild(xWinnerText);
document.body.insertBefore(xWinner, resetButton);
xWinner.style.visibility = "hidden";

let oWinner = document.createElement("div");
let oWinnerPara = document.createElement("p");
let oWinnerText = document.createTextNode("Player O Won!!!");
oWinner.setAttribute("id", "winnerIsO");
oWinner.appendChild(oWinnerPara);
oWinnerPara.appendChild(oWinnerText);
document.body.insertBefore(oWinner, resetButton);
oWinner.style.visibility = "hidden";

let noWinner = document.createElement("div");
let noWinnerPara = document.createElement("p");
let noWinnerText = document.createTextNode("No winners :(");
noWinner.setAttribute("id", "winnerIsO");
noWinner.appendChild(noWinnerPara);
noWinnerPara.appendChild(noWinnerText);
document.body.insertBefore(noWinner, resetButton);
noWinner.style.visibility = "hidden";

//2 set up functions depensing on who starts

function setUpX () {

choosePlayer.style.visibility = "hidden";
playerDisplayX.style.visibility = "visible";
currentPlayer = "x";
startGame();
}

function setUpO () {

    choosePlayer.style.visibility = "hidden";
    playerDisplayO.style.visibility = "visible";
    currentPlayer = "o";
    startGame();

}

function startGame () {
    insideDivs.forEach(div => {
        div.addEventListener("click", markTheSquare);
    })
}

//marking the square when it's clicked

function markTheSquare(e) {

        // make an a
    let divArray = Array.from(insideDivs);
    let arrayIndex = divArray.indexOf(e.target);

    if(currentPlayer === "o") {
        divArray[arrayIndex].setAttribute("class", "marko");
        currentPlayer = "x";
        playerDisplayX.style.visibility = "visible";
        playerDisplayO.style.visibility = "hidden";
    } else {
        divArray[arrayIndex].setAttribute("class", "markx");
        currentPlayer = "o";
        playerDisplayO.style.visibility = "visible";
        playerDisplayX.style.visibility = "hidden";
    }

    //remove the event listener from the square that was clicked
    divArray[arrayIndex].removeEventListener("click", markTheSquare);

    //each time a button is clicked, check for these conditions to see if a player won or if it is a tie and all squares are marked

    if (   ( (insideDivs[0].classList.value) === "markx" && (insideDivs[1].classList.value) === "markx" && (insideDivs[2].classList.value) === "markx" ) ||
    ( (insideDivs[3].classList.value) === "markx" && (insideDivs[4].classList.value) === "markx" && (insideDivs[5].classList.value) === "markx" ) ||
    ( (insideDivs[6].classList.value) === "markx" && (insideDivs[7].classList.value) === "markx" && (insideDivs[8].classList.value) === "markx" ) ||
    ( (insideDivs[0].classList.value) === "markx" && (insideDivs[3].classList.value) === "markx" && (insideDivs[6].classList.value) === "markx" ) ||
    ( (insideDivs[1].classList.value) === "markx" && (insideDivs[4].classList.value) === "markx" && (insideDivs[7].classList.value) === "markx" ) ||
    ( (insideDivs[2].classList.value) === "markx" && (insideDivs[5].classList.value) === "markx" && (insideDivs[8].classList.value) === "markx" ) ||
    ( (insideDivs[0].classList.value) === "markx" && (insideDivs[4].classList.value) === "markx" && (insideDivs[8].classList.value) === "markx" ) ||
    ( (insideDivs[2].classList.value) === "markx" && (insideDivs[4].classList.value) === "markx" && (insideDivs[6].classList.value) === "markx" ) )  {

    xWinner.style.visibility = "visible";  //if x won display x winner banner 

    }else if (   ( (insideDivs[0].classList.value) === "marko" && (insideDivs[1].classList.value) === "marko" && (insideDivs[2].classList.value) === "marko" ) ||
    ( (insideDivs[3].classList.value) === "marko" && (insideDivs[4].classList.value) === "marko" && (insideDivs[5].classList.value) === "marko" ) ||
    ( (insideDivs[6].classList.value) === "marko" && (insideDivs[7].classList.value) === "marko" && (insideDivs[8].classList.value) === "marko" ) ||
    ( (insideDivs[0].classList.value) === "marko" && (insideDivs[3].classList.value) === "marko" && (insideDivs[6].classList.value) === "marko" ) ||
    ( (insideDivs[1].classList.value) === "marko" && (insideDivs[4].classList.value) === "marko" && (insideDivs[7].classList.value) === "marko" ) ||
    ( (insideDivs[2].classList.value) === "marko" && (insideDivs[5].classList.value) === "marko" && (insideDivs[8].classList.value) === "marko" ) ||
    ( (insideDivs[0].classList.value) === "marko" && (insideDivs[4].classList.value) === "marko" && (insideDivs[8].classList.value) === "marko" ) ||
    ( (insideDivs[2].classList.value) === "marko" && (insideDivs[4].classList.value) === "marko" && (insideDivs[6].classList.value) === "marko" ) )  {

    oWinner.style.visibility = "visible"; //if O won, display O winner banner 

    } else if ( ((insideDivs[0].classList.value) !== "inside" ) && ((insideDivs[1 ].classList.value) !== "inside" ) && ((insideDivs[2].classList.value) !== "inside" ) &&
    ((insideDivs[3].classList.value) !== "inside" ) && ((insideDivs[4].classList.value) !== "inside" ) && ((insideDivs[5].classList.value) !== "inside" ) &&
    ((insideDivs[6].classList.value) !== "inside" ) && ((insideDivs[7].classList.value) !== "inside" ) && ((insideDivs[8].classList.value) !== "inside" )
    ) {
        noWinner.style.visibility = "visible";  //if all squares are clicked but no winners, display not winner banner 
    }

}

function resetGame() {

    //remove all event listeners from unclclicked squares 
        insideDivs.forEach( div => {
        if (div.classList.value === "inside"){
            div.removeEventListener("click", markTheSquare);
        }
    })

    //reset classes of all squares to "inside" to remove x/o markings
    insideDivs.forEach( div => {
        div.setAttribute("class", "inside");
    })
    //hide banners, hide current player, show the "choose player" element at top
    playerDisplayO.style.visibility = "hidden";
    playerDisplayX.style.visibility = "hidden";
    
    choosePlayer.style.visibility = "visible";

    oWinner.style.visibility = "hidden";
    xWinner.style.visibility = "hidden";
    noWinner.style.visibility = "hidden";

}

