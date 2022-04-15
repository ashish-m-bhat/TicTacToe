import playerXMove from "./Moves/playerXMove.js";
import setPoints from "./Points/setPoints.js";
import playerOMove from "./Moves/playerOMove.js";

let playerXTurn = true;
const allTilesClicked=[];
let totalPlays =0;
const didSomeOneWin = {
    playerXWon:false,
    playerOWon:false
};

export default function tileClicked(event){
    const selectedBox = event.target;

    // If tile is already clicked, ignore the event
    if(selectedBox.textContent !== '')
        return;
    totalPlays++;
    if(playerXTurn){
        playerXMove(selectedBox, allTilesClicked, totalPlays, didSomeOneWin);
    }
    else{
        playerOMove(selectedBox, allTilesClicked, totalPlays, didSomeOneWin);
    }
    // If opponent is Bot, increment totalPlays
    // The botMove() would be called by playerXMove since the tileClicked wouldn't be really called due to a click event.
    if(localStorage.getItem('isOpponentBot') === 'true' && totalPlays !== 9)
        totalPlays++;
    else
        playerXTurn=!playerXTurn;

    // Match Drawn
    if(totalPlays === 9 && !didSomeOneWin.playerXWon && !didSomeOneWin.playerOWon){
        setTimeout(() => {
            setPoints('tie');
            alert("Match Drawn");
            location.reload();
        }, 0);
    }
}