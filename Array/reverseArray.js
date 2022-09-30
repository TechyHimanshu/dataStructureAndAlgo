const arr = [1,2,3]; 
//using itteration
function reverse(arr) {
    let start = 0;
    let end = arr.length-1
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++;
        end--;
    }
    console.log(arr);
}
reverse(arr);



// using recursion

function recusioRreverse(arr,start,end) {
    if(start<end){
        return arr
    }
    [arr[start],arr[end]] = [arr[end],arr[start]]
    recusioRreverse(arr,start+1,end-1);
    }
    console.log(recusioRreverse(arr,0,arr.length-1))