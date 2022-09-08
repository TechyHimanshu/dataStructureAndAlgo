const arr = [ 3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3 ];
let x = 8, y = 4;

let minDist = Number.MAX_VALUE;
for(let i=0 ; i<arr.length; i++){
    if(arr[i]==x || arr[i] ==y){
        for(let j= i+1;j<arr.length; j++){
            if(arr[j]===x || arr[j] ===y){
                if(minDist> Math.abs(i-j))
                    minDist =  Math.abs(i-j)
            }
        }
        return minDist;
    }
    continue;
}
