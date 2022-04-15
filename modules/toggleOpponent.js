
// Change the isOpponentBot in localStorage & delete the rest of the items
// On reload, points for X, O & tie will be added back as 0 and the isOpponentBot already exists
const toggleOpponent = () =>{
    localStorage.setItem('isOpponentBot', localStorage.getItem('isOpponentBot')==='false'?true:false);

    const itemsToBeRemoved = ['playerX', 'playerO', 'tie'];
    itemsToBeRemoved.forEach(e=> localStorage.removeItem(e));
    location.reload();
}

export default toggleOpponent;