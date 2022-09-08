const board =[["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]]

const words = ["oaa"]

function dfs(board,i,j,word){
    if(word.length === 0) return true
    if(i==-1||i >= board.length||j==-1||j >= board[0].length) return false
    if(board[i][j]!== word[0]) return false;
    let temp = board[i][j];
    board[i][j] ="*"
    let res =(dfs(board,i+1,j,word.substring(1))||
            dfs(board,i-1,j,word.substring(1))||
            dfs(board,i,j+1,word.substring(1))||
            dfs(board,i,j-1,word.substring(1)))
    board[i][j] = temp;
    return res;
}


function wordSearch(board,words){
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length ; j++) {
                output = dfs(board,i,j,words)
            }    
        }
return [...output];
}

console.log(wordSearch(board,words));