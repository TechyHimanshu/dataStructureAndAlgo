//Find the subarray with least average


const arr = [ 3, 7, 90, 20, 10, 50, 40] 
const k = 3;

function minAvgSubarray(arr, k) {
    let lAvgSubArr = Number.MAX_VALUE;
    let i = 0;
    let j = 0;
    let sum =0;
    while (j < arr.length) {
        sum = sum + arr[j];
        if( j-i+1 < k){
            j++
        } 
        else if(j-i+1 ===k){
            let avg = sum/k;
            sum = sum -arr[i]
            if(lAvgSubArr>avg)
            lAvgSubArr= avg;
            j++;
            i++;
        }
    }
    console.log(lAvgSubArr);
}
minAvgSubarray(arr, k);