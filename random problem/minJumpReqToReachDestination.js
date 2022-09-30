
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
const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
Solution(arr);


function minJump2(arr) {
    let minJumpReq = Array(arr.length).fill(Number.MAX_VALUE);
    minJumpReq[0]=0
    let l = arr.length;
    for(let i =1; i<l;i++){
        for(let j=0;j<i;j++){
            if(i<=j+arr[j]){
                minJumpReq = Math.min(minJumpReq[i],minJumpReq[j]+1)
            }
        }
    } 
    
}