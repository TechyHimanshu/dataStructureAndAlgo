// no of ways we can get the sum 

const coins = [1,2,3]
// 3+2
// 1+1+1+1+1+1
// 2+2+1
// 1+1+1+2
// 1+1+3

sum = 5;
let arr = [];
for(let i =0 ; i<coins.length+1; i++){
    arr[i]=[];
    for( let j = 0 ; j<sum+1; j++){
        if(i===0)  arr[i][j]= 0;
        if(j===0) arr[i][j] = 1;
    }
}

for(let i =1; i <coins.length+1; i++){
    for(let j = 1; j<sum+1; j++){
        if(coins[i-1]<=j){
            arr[i][j] = arr[i][j-coins[i-1]] + arr[i-1][j]
        } else arr[i][j] = arr[i-1][j] 
    }
}

console.log(arr[coins.length][sum]);