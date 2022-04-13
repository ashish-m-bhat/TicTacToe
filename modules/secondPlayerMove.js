import checkIfWon from './checkIfWon.js'

const secondPlayerValues=[];

const secondPlayerMove = (selectedBox, totalPlays) =>{
    selectedBox.textContent="O";
    secondPlayerValues.push(selectedBox.id);

    if(totalPlays >=5)
    if(checkIfWon(secondPlayerValues)){
      setTimeout(() => {
          alert("Player O wins");
          location.reload();
      }, 0);
    }

}
export default secondPlayerMove;