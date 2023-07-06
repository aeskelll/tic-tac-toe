//access to every cell
const cell1 = document.querySelector("#cell1");
const cell2 = document.querySelector("#cell2");
const cell3 = document.querySelector("#cell3");
const cell4 = document.querySelector("#cell4");
const cell5 = document.querySelector("#cell5");
const cell6 = document.querySelector("#cell6");
const cell7 = document.querySelector("#cell7");
const cell8 = document.querySelector("#cell8");
const cell9 = document.querySelector("#cell9");
//access to player inputs
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
//access to buttons
const startButton = document.querySelector(".startButton");
const restartButton = document.querySelector(".restartButton");
//access to container with pop up celebration
const congratsCont = document.querySelector(".congratulations");

let activePlayer = "x";
const str = document.createElement("div");


const GameController = (() => {
  //change x to o and via versa
  const changeSymbol = () => {
    if (activePlayer === "x") {
      activePlayer = "o";
    } else {
      activePlayer = "x";
    }
  };

  //manually check every possible combination of winner
  const checkTheWinner = () => {
    if (
      (cell1.textContent === "x" &&
        cell2.textContent === "x" &&
        cell3.textContent === "x") ||
      (cell4.textContent === "x" &&
        cell5.textContent === "x" &&
        cell6.textContent === "x") ||
      (cell7.textContent === "x" &&
        cell8.textContent === "x" &&
        cell9.textContent === "x") ||
      (cell1.textContent === "x" &&
        cell4.textContent === "x" &&
        cell7.textContent === "x") ||
      (cell2.textContent === "x" &&
        cell5.textContent === "x" &&
        cell8.textContent === "x") ||
      (cell3.textContent === "x" &&
        cell6.textContent === "x" &&
        cell9.textContent === "x") ||
      (cell1.textContent === "x" &&
        cell5.textContent === "x" &&
        cell9.textContent === "x") ||
      (cell3.textContent === "x" &&
        cell5.textContent === "x" &&
        cell7.textContent === "x")
    ) {
      
      str.textContent = `CONGRATULATIONS! ${player1.value} Wins!`;
      congratsCont.appendChild(str);
    } else if (
      (cell1.textContent === "o" &&
        cell2.textContent === "o" &&
        cell3.textContent === "o") ||
      (cell4.textContent === "o" &&
        cell5.textContent === "o" &&
        cell6.textContent === "o") ||
      (cell7.textContent === "o" &&
        cell8.textContent === "o" &&
        cell9.textContent === "o") ||
      (cell1.textContent === "o" &&
        cell4.textContent === "o" &&
        cell7.textContent === "o") ||
      (cell2.textContent === "o" &&
        cell5.textContent === "o" &&
        cell8.textContent === "o") ||
      (cell3.textContent === "o" &&
        cell6.textContent === "o" &&
        cell9.textContent === "o") ||
      (cell1.textContent === "o" &&
        cell5.textContent === "o" &&
        cell9.textContent === "o") ||
      (cell3.textContent === "o" &&
        cell5.textContent === "o" &&
        cell7.textContent === "o")
    ) {
      
      str.textContent = `CONGRATULATIONS! ${player2.value} Wins!`;
      congratsCont.appendChild(str);
    } else if (
      cell1.textContent != "" &&
      cell2.textContent != "" &&
      cell3.textContent != "" &&
      cell4.textContent != "" &&
      cell5.textContent != "" &&
      cell6.textContent != "" &&
      cell7.textContent != "" &&
      cell8.textContent != "" &&
      cell9.textContent != ""
    ) {
      
      str.textContent = "IT'S A TIE, TRY AGAIN";
      congratsCont.appendChild(str);
    }
  };
  //actions that will be applied after clicking cell
  const cellClick = (exactCell) => {
    exactCell.textContent = activePlayer;
    changeSymbol();
    checkTheWinner();
  };
  return { cellClick };
})();

startButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.opacity = 1;
  });
});

restartButton.addEventListener("click", ()=>{
  activePlayer = "x"
  str.textContent = "";
  cell1.textContent = "";
  cell2.textContent = "";
  cell3.textContent = "";
  cell4.textContent = "";
  cell5.textContent = "";
  cell6.textContent = "";
  cell7.textContent = "";
  cell8.textContent = "";
  cell9.textContent = "";
})

cell1.addEventListener("click", () => {
  GameController.cellClick(cell1);
});

cell2.addEventListener("click", () => {
  GameController.cellClick(cell2);
});

cell3.addEventListener("click", () => {
  GameController.cellClick(cell3);
});

cell4.addEventListener("click", () => {
  GameController.cellClick(cell4);
});

cell5.addEventListener("click", () => {
  GameController.cellClick(cell5);
});

cell6.addEventListener("click", () => {
  GameController.cellClick(cell6);
});

cell7.addEventListener("click", () => {
  GameController.cellClick(cell7);
});

cell8.addEventListener("click", () => {
  GameController.cellClick(cell8);
});

cell9.addEventListener("click", () => {
  GameController.cellClick(cell9);
});