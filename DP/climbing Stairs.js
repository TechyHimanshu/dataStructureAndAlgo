/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
let k = 4;
let ip = [1,2]

function climb(k) {
let first=1,second=1
for(let i = 2; i<=k; i++){
    let temp = second;
    second = first+second;
    first = temp;
}
return second;
}

console.log(climb(k));

//1+1+1+1
//2+2
//1+2+1
//1+1+2
//2+1+1