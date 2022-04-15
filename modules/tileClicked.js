import playerXMove from "./Moves/playerXMove.js";
import setPoints from "./Points/setPoints.js";
import playerOMove from "./Moves/playerOMove.js";

let playerXTurn = true;
const allTilesClicked=[];
let totalPlays =0;

export default function tileClicked(event){
    const selectedBox = event.target;

    // If tile is already clicked, ignore the event
    if(selectedBox.textContent !== '')
        return;
    totalPlays++;
    if(playerXTurn){
        playerXMove(selectedBox, allTilesClicked, totalPlays);
    }
    else{
        playerOMove(selectedBox, allTilesClicked, totalPlays);
    }
    // If opponent is Bot, increment totalPlays
    // The botMove() would be called by playerXMove since the tileClicked wouldn't be really called due to a click event.
    if(localStorage.getItem('isOpponentBot') === 'true')
        totalPlays++;
    else
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