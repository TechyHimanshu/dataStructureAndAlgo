const arr = [4,7,3,9,1,0,5,8,3,2]
const k = 3 //window size

let sum = 0;
let i = 0 ,j = 0;
let max = Number.MIN_VALUE;
while(j < arr.length){
    sum = sum + arr[j];
    if( j-i+1 < k)
        j++;
    else if (j-i+1 === k){
        max = Math.max(max,sum);
        sum = sum - arr[i]
        i++;
        j++;
    }     
}
console.log(max);