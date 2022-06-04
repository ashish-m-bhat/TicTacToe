

const  checkIfWon = (playerValues) =>{
  const possibleWinCombinations=["123","456","789","147","258","369","159","357"];
  let didIWin = false;

  for(let i=0;i<playerValues.length-2;i++)
  {
    let string='';
    for(let j=i+1;j<playerValues.length-1;j++)
    {
      for(let k=j+1;k<playerValues.length;k++)
      {
        string = playerValues[i]+playerValues[j]+playerValues[k];
        if(possibleWinCombinations.includes(string.split('').sort().join(''))){
          didIWin = true;
          return didIWin;
        }
      }
    }
  }
  return didIWin;
}

export default checkIfWon;