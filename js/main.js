const squares = document.querySelectorAll(".square");
let playerChoice = "O";
const clear = document.getElementById("clearGame");

squares.forEach(function(sq){
  sq.addEventListener('click', (event) => {
    const element = event.target
    if(element.innerHTML === "X"|| element.innerHTML === "O"){
      return;
    }
    element.innerHTML = playerChoice;
    const isWinner = checkWin();
    if (isWinner) {
      alert('Whoever this is. You win!')
    } else {
    if(playerChoice === "O"){
      playerChoice = "X"
    }else{
      playerChoice = "O";
    }
  }
  })
})

function checkWin() {
  let win =[[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];

  for (let i = 0; i < win.length; i++){

    const currentCombo = win[i];
    console.log(currentCombo);

    const firstBox = document.getElementById(currentCombo[0]).innerHTML;
    const secondBox = document.getElementById(currentCombo[1]).innerHTML;
    const thirdBox = document.getElementById(currentCombo[2]).innerHTML;

    if(firstBox === "O" || firstBox === "X")
    {
      if(firstBox === secondBox && firstBox === thirdBox)
      {
        return true;
      }
    }
  }
  return false;
}

clear.addEventListener("click", function () {
    const tds = document.getElementsByTagName('td');
    for(let i = 0; i < tds.length; i++) {
        tds[i].innerHTML = ''
    }
});
