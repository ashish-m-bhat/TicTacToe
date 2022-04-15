import botMove from './botMove.js';
import checkIfWon from './checkIfWon.js'
import setPoints from './Points/setPoints.js';

const playerXValues=[];

const playerXMove = (selectedBox, allTilesClicked, totalPlays) =>{
  playerXValues.push(selectedBox.id);
  allTilesClicked.push(selectedBox.id);
    selectedBox.textContent="X";

    if(totalPlays >=5){                         // Minimum moves needed to win is 5
      if(checkIfWon(playerXValues)){

        // Add a setTimout else, alert will be called before the final tile is marked.
          setTimeout(() => {
              setPoints('playerX');
              alert("Player X wins");
              location.reload();
          }, 0);
          return;
        }
    }
    // If the opponent is Bot, call botMove()
    // In this case, the totalPlays would be incremented by the parent function, tileClicked()
    if(localStorage.getItem('isOpponentBot') === 'true'){

        botMove(allTilesClicked, totalPlays);

    }
}
export default playerXMove;