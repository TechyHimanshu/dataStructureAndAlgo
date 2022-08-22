var isSubsequence = function(s, t) {

    let m = s.length;
    let n = t.length;
    let i=0,j=0
    
    while(i<m && j<n){
        if(s[i] === t[j]){
            i++
        }
        j++
    }
    return i==m;
    
};

let t = "abc", s = "ahbgdc"

console.log(isSubsequence(s,t));    