import checkIfWon from '../checkIfWon.js'
import setPoints from '../Points/setPoints.js';

const playerOValues=[];

const playerOMove = (selectedBox, allTilesClicked, totalPlays, didSomeOneWin) =>{
  playerOValues.push(selectedBox.id);
  allTilesClicked.push(selectedBox.id);
    selectedBox.textContent="O";

    if(totalPlays >=5)
    if(checkIfWon(playerOValues)){
      didSomeOneWin.playerOWon = true;

      // Add a setTimout else, alert will be called before the final tile is marked.
      setTimeout(() => {
          setPoints('playerO');
          alert("Player O wins");
          location.reload();
      }, 0);
    }

}
export default playerOMove;