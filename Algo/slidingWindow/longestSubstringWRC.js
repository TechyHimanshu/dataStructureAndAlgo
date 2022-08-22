// longest substring without repeating characters

const s = "pwwkew";
let i=0;
let j=0;
let maxLength = Number.MIN_VALUE;
let obj = { };
if(s.length === 0 ) return 0;
if(s.length === 1 ) return 1; 
while(j<s.length){
    if(obj[s[j]] === undefined){
        obj[s[j]]=1
    }else  obj[s[j]]+=1
    if(Object.keys(obj).length === j-i+1){
        maxLength = Math.max(maxLength,j-i+1);
    }
    else if(Object.keys(obj).length<j-i+1){
        while(Object.keys(obj).length<j-i+1){
            obj[s[i]]--
            if(obj[s[i]]===0) delete obj[s[i]]
            i++
        }
    }
    j++
}
console.log(maxLength);