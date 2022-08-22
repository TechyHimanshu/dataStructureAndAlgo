arr2 = [3, 7, 5, 6, 2];
arr3 = [2,3,7,8,10];
arr = [2,3,5,6,8,10]
k = 10;

const mat = [];

for(let i = 0; i<arr.length; i++){
    mat[i] = [];
}

for(let i = 0; i <arr.length; i++){
    for(let j = 0; j<k+1 ; j++){
        if(i===0)
            mat[i][j] = 0;
        if(j===0)
            mat[i][j] = 1;
    }
}

for(let i=1; i<arr.length; i++){
    for(let j = 1; j<k+1; j++){
       if(arr[i-1]<=j)
            mat[i][j] = mat[i][j-arr[i-1]] + mat[i-1][j]
        else mat[i][j] = mat[i-1][j] 
    }
}

console.log(mat);