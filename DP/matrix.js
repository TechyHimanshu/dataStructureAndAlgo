// create a matrix 3x3 with 0 values

const matrix = Array(3).fill(1,1,3).map(()=>Array(3).fill(0,0,1));

console.log(matrix);

let dp = Array(grid.length).fill().map(()=>Array(grid[0].length).fill(0))

console.log(m2);


// initialize 1st row and col with 0 

let a = [];
for(let i = 0 ; i<3 ; i++){
    a[i] = [];
}
console.log("before", a);

for(let i=0 ;i<3; i++){
    for(let j=0; j<3; j++){
        if (i==0 || j==0){
            a[i][j] = 0;
        }
        else a[i][j] = 1
    }
}

console.log(a);