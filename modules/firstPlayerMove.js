import checkIfWon from './checkIfWon.js'

const firstPlayerValues=[];

const firstPlayerMove = (selectedBox, totalPlays) =>{
    firstPlayerValues.push(selectedBox.id);
    selectedBox.innerHTML="X";

    if(totalPlays >=5){                         // Minimum moves needed to win is 5
      if(checkIfWon(firstPlayerValues)){
          setTimeout(() => {
              alert("Player X wins");
              location.reload();
          }, 0);
        }
    }
}
export default firstPlayerMove;