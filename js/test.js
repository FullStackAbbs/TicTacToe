// sets the gameBoard as an object
// // this object needs to have various properties and function
// // that do the following:

// // (x)  object and idenfy the squares
//



let gameBoard = {
  allSquares: document.querySelectorAll('.square'),
  changeSquare: (square, playerLetter) => {
    square.innerHTML = playerLetter
  },
  checkForWin: () =>{
    let winningPossibilities =[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
    for (let i = 0; i < winningPossibilities.length; i++){
      const indivWinningPoss = winningPossibilities[i];
      const firstSquare = document.getElementById(indivWinningPoss[0]).innerHTML;
      const secondSquare = document.getElementById(indivWinningPoss[1]).innerHTML;
      const thirdSquare = document.getElementById(indivWinningPoss[2]).innerHTML;

      if(firstSquare === "O" || firstSquare === "X"){
        if(firstSquare === secondSquare && firstSquare === thirdSquare)
        {
          return true;
        }
        alert('WINNNNEEEEERRRRRRRRRR  🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
        // winner declaration
      }
    }
    return false;
  }
}

let player = {
  playerLetter: "O",
  changePlayerLetter: () => {

    if(player.playerLetter === "O"){
      player.playerLetter = "X"
    }else if(player.playerLetter === "X"){
      player.playerLetter = "O"
    }
  },
}

gameBoard.allSquares.forEach((currentSquare) =>{

  currentSquare.addEventListener('click', (event)=>{
    gameBoard.changeSquare(event.target, player.playerLetter)
    player.changePlayerLetter()
  })

});

clear.addEventListener("click", function () {
    const tds = document.getElementsByTagName('td');
    for(let i = 0; i < tds.length; i++) {
        tds[i].innerHTML = ''
    }
});
