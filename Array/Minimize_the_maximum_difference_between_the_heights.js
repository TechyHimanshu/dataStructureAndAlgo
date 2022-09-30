
 function getMinDiff(arr, n, k){

    arr.sort((a,b)=>a-b);
    let ans = arr[n-1]- arr[0];

    let tempmin = arr[0];
    let tempmax = arr[n - 1];

    for(let i = 1; i<n;i++){
        tempmin = Math.min(arr[0]+k,arr[i]-k)
        tempmax = Math.max(arr[i-1]+k,arr[n-1]-k);
        ans = Math.min(ans, tempmax-tempmin)
    }
    console.log(ans);
 }

let k = 6, n = 3;
let arr = [1,10,15 ];
let ans = getMinDiff(arr, n, k);


// min(7,4) => 4
// max(7,9)=> 9
// ans => min(14,5) = 5
// i=2
// min(7,9) = 4
// max(16,9) = 16
// ans = min(5,12) = 5

