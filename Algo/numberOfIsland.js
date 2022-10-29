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


numIslands(grid);


function dfs2(i, j, grid, visited) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1 || grid[i][j] == 0 || visited[i][j])
        return;
    visited[i][j] = true
    if (i > 0 && grid[i - 1][j] && !visited[i - 1][j]) dfs(i - 1, j, grid, visited)
    if (j > 0 && grid[i][j - 1] && !visited[i][j - 1]) dfs(i, j - 1, grid, visited)
    if (i < grid.length - 1 && grid[i + 1][j] && !visited[i + 1][j]) dfs(i + 1, j, grid, visited)
    if (j < grid[i].length - 1 && grid[i][j + 1] && !visited[i][j + 1]) dfs(i, j + 1, grid, visited)
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

countIsland(grid)