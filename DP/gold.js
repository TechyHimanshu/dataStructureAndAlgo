/**
 * @param {number[][]} grid
 * @return {number}
 */
 var getMaximumGold = function(grid) {
    let dp = Array(grid.length).fill().map(()=>Array(grid[0].length).fill(0))
    for(let j = grid[0].length-1;j>=0;j--){
        for(let i = grid.length-1;i>=0;i--){
            if(j=== grid[0].length-1){
                dp[i][j]=grid[i][j]
            }
            else if(i === 0){
                dp[i][j]=grid[i][j] + Math.max(dp[i][j+1],dp[i+1][j+1])
            }
            else if( i === grid.length-1){
                dp[i][j]=grid[i][j] + Math.max(dp[i][j+1],dp[i-1][j+1])
            }
            else{
                dp[i][j]=grid[i][j] + Math.max(dp[i][j+1],dp[i-1][j+1],dp[i+1][j+1])
            }
        }
    }
        console.log(dp)
        let max = Number.MIN_VALUE
        for(let i = 0;i<grid.length;i++ ){
            max = Math.max(max,dp[i][0])    
        }

        return max;
    }
const grid = [[0,6,0],[5,8,7],[0,9,0]]
getMaximumGold(grid)