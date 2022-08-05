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