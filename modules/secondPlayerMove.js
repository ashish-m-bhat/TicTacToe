import checkIfWon from './checkIfWon.js'
import setPoints from './Points/setPoints.js';

const secondPlayerValues=[];

const secondPlayerMove = (selectedBox, totalPlays) =>{
    //selectedBox.textContent="O";

    if(totalPlays >=5)
    if(checkIfWon(secondPlayerValues)){

      // Add a setTimout else, alert will be called before the final tile is marked.
      setTimeout(() => {
        setPoints('playerO');
          alert("Player O wins");
          location.reload();
      }, 0);
    }

}
export default secondPlayerMove;