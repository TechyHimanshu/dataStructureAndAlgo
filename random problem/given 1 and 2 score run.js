const arr = [1,2];  // with no consecutive 2's
const score = 5; 

// so in this score can be achived by either scoring 1 or 2 so when started i can score 1 or 2 and if 1 is scored 
// remaining is score-1 for the next ball lly if 2 is scored in the first ball then in second ball only 1 can be scored 
// i.e (score-2)-1 = (score-3)


const wayToReachScore = score =>{
    if(score === 0 ) return 1;
    if(score ===1 ) return 1;
    if(score === 2 ) return 2;

    return wayToReachScore(score-1) + wayToReachScore(score-3)
}

console.log(wayToReachScore(score));