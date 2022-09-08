var isSubsequence = function(s, t) {

    let s1 = s.length;
    let s2 = t.length;
    let i=0,j=0
    
    while(i<s1 && j<s2){
        if(s[i] === t[j]){
            j++
        }
        i++
    }
    return j==s2;
    
};

let t = "abcx", s = "ahbgdc"

console.log(isSubsequence(s,t));    