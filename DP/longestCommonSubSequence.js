// Longest Common Subsequence  recursive solution  recursive solution

const str = "ABCDGH";
const str2 = "AEDFHR";

function solution (str,str2){

    let m = str.length;
    let n = str2.length;
    console.log(longestCommonSubSequence(str,str2,m,n));
    
}

function longestCommonSubSequence(str,str2,m,n){

    if( m===0 || n===0) return 0;
    if(str[m-1]=== str2[n-1])
        return longestCommonSubSequence(str,str2,m-1,n-1)+1
    else
        return Math.max(longestCommonSubSequence(str,str2,m,n-1),longestCommonSubSequence(str,str2,m-1,n))

}

// solution(str,str2);


// Longest Common Subsequence  recursive solution  recursive solution with memoization


function solution2 (str,str2){

    let m = str.length;
    let n = str2.length;
    const memTable = Array(str.length +1).fill(Array(str2.length +1).fill(-1)); 
    longestCommonSubSequence(str,str2,m,n,memTable);
    console.log(memTable[m][n]);
}

function longestCommonSubSequence(str,str2,m,n,memTable){

    if( m===0 || n===0) return 0;
    if(memTable[m][n]!== -1) return memTable[m][n];
    if(str[m-1]=== str2[n-1])
        return memTable[m][n] = longestCommonSubSequence(str,str2,m-1,n-1,memTable)+1
    else
        return memTable[m][n] = Math.max(longestCommonSubSequence(str,str2,m,n-1,memTable),longestCommonSubSequence(str,str2,m-1,n,memTable))

}

solution2 (str,str2);

// Longest Common Subsequence  recursive solution  recursive solution with top down approach

function longestCommonSubSequenceTopDownn(str,str2,m,n){
    let a = [];
for(let i = 0 ; i<m ; i++){
    a[i] = [];
}

for(let i=0 ;i<m; i++){
    for(let j=0; j<n; j++){
        if (i==0 || j==0){
            a[i][j] = 0;
        }
        else a[i][j] = 1
    }
}

for(let i=1 ;i<m; i++){
    for(let j=1; j<n; j++){
    }
}

}
