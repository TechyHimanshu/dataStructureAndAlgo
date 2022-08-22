const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]

const Solution = (arr) => {
    const n = arr.length;
    const minJumpArr = new Array(n).fill(Number.MAX_VALUE);
    minJumpArr[0]  = 0;

    for(let i = 1; i<n; i++){
        for(let j = 0;j<i;j++){
            if(i<=j+arr[j]){
                minJumpArr[i] = Math.min(minJumpArr[i],minJumpArr[j]+1);
            }
        }
    }

console.log(minJumpArr.pop());
}

Solution(arr);