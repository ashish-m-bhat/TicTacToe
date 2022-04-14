import firstPlayerMove from "./firstPlayerMove.js";
import setPoints from "./Points/setPoints.js";
import secondPlayerMove from "./secondPlayerMove.js";

let firstPlayerTurn = true;
let totalPlays=0;

export default function tileClicked(event){
    const selectedBox = event.target;

    // If tile is already clicked, ignore the event
    if(selectedBox.textContent !== '')
        return;
    totalPlays++;
    if(firstPlayerTurn){
        firstPlayerMove(selectedBox, totalPlays);
    }
    else{
        secondPlayerMove(selectedBox, totalPlays);
    }
    firstPlayerTurn=!firstPlayerTurn;

    // Match Drawn
    if(totalPlays === 9){
        setTimeout(() => {
            setPoints('tie');
            alert("Match Drawn");
            location.reload();
        }, 0);
    }
}