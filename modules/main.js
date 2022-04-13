import firstPlayerMove from './firstPlayerMove.js';
import secondPlayerMove from './secondPlayerMove.js';

let firstPlayerTurn = true;
let totalPlays=0;
const wrapper = document.getElementById('wrapperTile');

wrapper.addEventListener('click', (event)=>{
    const selectedBox = event.target;
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

    if(totalPlays === 9){
        setTimeout(() => {
            alert("match Draw");
            location.reload();
        }, 0);
    }

 });