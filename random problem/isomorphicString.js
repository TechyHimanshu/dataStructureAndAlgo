var isIsomorphic = function(s, t) {
    if(s.length!== t.length) return false
    const obj2 ={};
    const obj ={};
    for(let i=0; i<s.length; i++){
        if(obj[s[i]] === undefined) obj[s[i]] = t[i];
        if(obj2[t[i]] === undefined) obj2[t[i]] = s[i];
        if( obj[s[i]] !== t[i] || obj2[t[i]] !== s[i] )
            return false;
    }
    return true;
};

s = "paper";
t = "title";

console.log(isIsomorphic(s,t));