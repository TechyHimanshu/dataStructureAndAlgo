// Partition of a set into K subsets
const ip = ["a", "b", "c"]
const k = 2

function partitionHelper(i, arr, nonEmptySet, ans) {
 if(i>arr.length-1){
    if(nonEmptySet===k){
        console.log(ans);
    }
    return;
 }

 for(let j =0;j<ans.length;j++){
    if(ans[j].length>0){
        ans[j].push(arr[i])
        partitionHelper(i+1, arr, nonEmptySet, ans)
        ans[j].pop()
    }
    else{
        ans[j].push(arr[i])
        partitionHelper(i+1, arr, nonEmptySet+1, ans)
        ans[j].pop()
        break;
    }
 }  
}

function partition(arr, k) {
    let ans = [];
    for(let i =0 ; i<k; i++){
        ans.push([])    
    }
    partitionHelper(0, arr, 0, ans)
}

partition(ip, k);
