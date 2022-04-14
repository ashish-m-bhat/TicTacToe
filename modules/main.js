import firstPlayerMove from './firstPlayerMove.js';
import setPoints, {setInitialPoints} from './Points/setPoints.js';
import secondPlayerMove from './secondPlayerMove.js';

let firstPlayerTurn = true;
let totalPlays=0;
const wrapper = document.getElementById('wrapperTile');

setInitialPoints();

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
            setPoints('tie');
            alert("match Draw");
            location.reload();
        }, 0);
    }

 });