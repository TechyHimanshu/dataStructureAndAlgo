const arr = [ 22, 14, 8, 17, 35, 3];
function maxNmin(arr) {
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for(let i of arr){
        if(i>max) max =i;
        if(i<min) min = i;
    }
    console.log(max,min);
}

maxNmin(arr) 