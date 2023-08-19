/**
 * @param {character[][]} grid
 * @return {number}
 */

const grid = [
    ["1", "1", "0", "0", "0"], 
    ["1", "0", "0", "0", "0"], 
    ["0", "0", "0", "0", "0"], 
    ["0", "0", "0", "1", "1"]
]

function getAdjNeighbour(grid, visited, i, j) {
    const adjNeighbour = [];
    if (i > 0 && !visited[i - 1][j]) adjNeighbour.push([i - 1, j]);
    if (i <grid.length - 1 && !visited[i + 1][j]) adjNeighbour.push([i + 1, j]);
    if (j > 0 && !visited[i][j - 1]) adjNeighbour.push([i, j - 1]);
    if (j < grid[i].length - 1 && !visited[i][j + 1]) adjNeighbour.push([i, j + 1]);

    return adjNeighbour;
}
function dfs(grid, visited, i, j) {
    const stack = [[i, j]];
    let islandSize = 0;

    while (stack.length) {
        let currentNode = stack.pop();
        let [i, j] = currentNode;

        //check if i,j is visited
        if (visited[i][j]) continue;
        visited[i][j] = true;

        if (grid[i][j] == 0) continue;
        islandSize++;

        let adjNeighbour = getAdjNeighbour(grid, visited, i, j);
        stack.push(...adjNeighbour);
    }
    return islandSize > 0 ? true : false
}



var numIslands = function (grid) {
    let islandCount = 0;
    const visited = grid.map(row => row.map(col => false))
    console.log(grid.length);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (dfs(grid, visited, i, j)) islandCount++;
        }
    }
    console.log(islandCount);
};


// numIslands(grid);


function dfs2(i, j, grid, visited) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1 || grid[i][j] == 0 || visited[i][j])
        return;
    visited[i][j] = true
    if (i > 0 && grid[i - 1][j] && !visited[i - 1][j]) dfs2(i - 1, j, grid, visited)
    if (j > 0 && grid[i][j - 1] && !visited[i][j - 1]) dfs2(i, j - 1, grid, visited)
    if (i < grid.length - 1 && grid[i + 1][j] && !visited[i + 1][j]) dfs2(i + 1, j, grid, visited)
    if (j < grid[i].length - 1 && grid[i][j + 1] && !visited[i][j + 1]) dfs2(i, j + 1, grid, visited)
}

function countIsland(grid) {
    let visited = grid.map(ele => ele.map(ele => ele = false));
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!visited[i][j] && grid[i][j] != 0) {
                count++;
                dfs2(i, j, grid, visited);
            }
        }
    }
    console.log(count);
}

// countIsland(grid)


var maxAreaOfIsland = function(grid) {

    function dfs(i,j,grid,visited,count){
        if(i<0 || j<0 || i>grid.length-1 || j>grid[i].length-1|| grid[i][j] == 0 || visited[i][j]) return 0
        visited[i][j] = true
        if(i>0 && grid[i-1][j] && !visited[i-1][j]) dfs(i-1,j,grid,visited,count+1)
        if(j>0 && grid[i][j-1] && !visited[i][j-1]) dfs(i,j-1,grid,visited,count+1)
        if(i<grid.length-1 && grid[i+1][j] && !visited[i+1][j]) dfs(i+1,j,grid,visited,count+1)
        if(j<grid[i].length-1 && grid[i][j+1] && !visited[i][j+1]) dfs(i,j+1,grid,visited,count+1)
        return count
    }
    let visited = grid.map(row => row.map(col=> false))
    let maxArea = Number.MIN_VALUE
    for(let i=0; i<grid.length; i++){
        for(let j =0 ; j<grid[i].length-1; j++){
            if(grid[i][j] && !visited[i][j]){
                 let count = 1
                 count = dfs(i,j,grid,visited,count)
                maxArea = Math.max(maxArea, count)
            }
        }
    }
    return maxArea
};

// maxAreaOfIsland(grid)

function maxGoldcollected(mat){
    function recurr(mat,i,j,visited,bag){
        if(i<0 || j < 0 || i>=mat.length ||j>=mat[0].length || visited[i][j] || mat[i][j]==0){
            return 
        }
        visited[i][j]= true
        bag.push(mat[i][j])
        recurr(mat,i-1,j,visited,bag)
        recurr(mat,i,j-1,visited,bag)
        recurr(mat,i+1,j,visited,bag)
        recurr(mat,i,j+1,visited,bag)
    }

    let visited = Array(mat.length).fill().map(()=>Array(mat[0].length).fill(false))
    let maxGold = 0
    for(let i = 0;i<mat.length;i++){
        for(let j = 0 ; j<mat[0].length; j++){
            let bag = []
            if(mat[i][j] != 0 && !visited[i][j]){
               recurr(mat,i,j,visited,bag)
               let gold = bag.reduce((a,b)=>a+b)
                maxGold = Math.max(maxGold, gold)
            }
        }
    }

    console.log(maxGold)
}

let mat = [[0,6,0],
[5,8,7],
[0,9,0]]
maxGoldcollected(mat)