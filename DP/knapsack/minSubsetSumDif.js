// find the subset with minimum difference

const arr =[1,6,16,5];
const arrTotal = arr.reduce((sum,i)=> sum+i);

// create all the subset for the range of 0 to arrTotal

let t =[];
for (let index = 0; index <= arr.length; index++) {
    t[index]=[]
}

for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arrTotal; j++) {
        if(i===0) t[i][j] = false;
        if(j===0) t[i][j] = true;
    }
}

for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= arrTotal; j++) {
       if(arr[i-1]<=j){
        t[i][j] = t[i-1][j-arr[i-1]] || t[i-1][j]
       }
       else 
        t[i][j] = t[i-1][j];
    }
}
const temp = t[arr.length];
let min = Number.MAX_VALUE
for(let i=0 ; i<=Math.floor(arrTotal/2);i++){
    if(temp[i]===true){
       min =  Math.min(min,arrTotal - 2*i);
    }
}
console.log(min);