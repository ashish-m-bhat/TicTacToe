

const  checkIfWon = (playerValues) =>{
  const possibleWinCombinations=["123","456","789","147","258","369","159","357"];
  const currentPossibleCombinations=[];

  for(let i=0;i<playerValues.length-2;i++)
  {
    let string='';
    for(let j=i+1;j<playerValues.length-1;j++)
    {
      for(let k=j+1;k<playerValues.length;k++)
      {
        string = playerValues[i]+playerValues[j]+playerValues[k];
        currentPossibleCombinations.push(string.split('').sort().join(''));
      }
    }
  }

  let didIWin = false;
  currentPossibleCombinations.forEach(eachCurrentPossibleCombination => {
    if(possibleWinCombinations.indexOf(eachCurrentPossibleCombination) !== -1)
        didIWin = true;
  });
  return didIWin;
}

export default checkIfWon;