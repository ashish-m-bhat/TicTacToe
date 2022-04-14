import checkIfWon from './checkIfWon.js'
import setPoints from './Points/setPoints.js';

const playerXValues=[];

const playerXMove = (selectedBox, totalPlays) =>{
  playerXValues.push(selectedBox.id);
    selectedBox.textContent="X";

    if(totalPlays >=5){                         // Minimum moves needed to win is 5
      if(checkIfWon(playerXValues)){

        // Add a setTimout else, alert will be called before the final tile is marked.
          setTimeout(() => {
              setPoints('playerX');
              alert("Player X wins");
              location.reload();
          }, 0);
        }
    }
}
export default playerXMove;