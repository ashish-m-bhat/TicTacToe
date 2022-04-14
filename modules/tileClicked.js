import playerXMove from "./playerXMove.js";
import setPoints from "./Points/setPoints.js";
import playerOMove from "./playerOMove.js";

let playerXTurn = true;
let totalPlays=0;

export default function tileClicked(event){
    const selectedBox = event.target;

    // If tile is already clicked, ignore the event
    if(selectedBox.textContent !== '')
        return;
    totalPlays++;
    if(playerXTurn){
        playerXMove(selectedBox, totalPlays);
    }
    else{
        playerOMove(selectedBox, totalPlays);
    }
    playerXTurn=!playerXTurn;

    // Match Drawn
    if(totalPlays === 9){
        setTimeout(() => {
            setPoints('tie');
            alert("Match Drawn");
            location.reload();
        }, 0);
    }
}