/**
 * @param {string} 
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let op = 0
    let obj ={}
    let i = 0
    let j = 0
   if(s.length === 0 ) return 0;
   if(s.length === 1 ) return 1;  
    while(i<s.length){
        if(!obj[s[i]]) obj[s[i]] =1
        else obj[s[i]]++
        if(Object.keys(obj).length === i-j+1){
            op = Math.max(Object.keys(obj).length,op)
        }
        else if(Object.keys(obj).length < i-j+1){
            while(Object.keys(obj).length < i-j+1){
                obj[s[j]]--
                if(obj[s[j]]=== 0 ) delete obj[s[j]]
                j++
            }
        }
        i++
    }
    return op
};

console.log(lengthOfLongestSubstring("abcabcbb"))