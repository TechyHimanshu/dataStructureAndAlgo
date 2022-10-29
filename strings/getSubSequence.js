// get the subsequence of a string n

const str = "abc"
function getSubsequence(str){
    if(str.length==0){
        return [""];
    }
    let first = str.slice(0,1)
    let tempRes = getSubsequenseHelper(str.substring(1))
    let finalRes = []
    for(let i of tempRes){
        finalRes.push(""+i);
        finalRes.push(first+i);
    }
    return finalRes; 
}

console.log(getSubsequence(str));