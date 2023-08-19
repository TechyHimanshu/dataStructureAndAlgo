var longestCommonPrefix = function(arr) {
    let i = 1;
    let prf = arr[0];
    while(i < arr.length){
        if(!arr[i].startsWith(prf)){
            prf = prf.slice(0, -1)
        }else{
            i++
        }
    }
    console.log(prf)
    return prf
};
let strs = ["qwert","ab","a","asdf"]
let str2 = ["reflower","flow","flight"]
longestCommonPrefix(str2)