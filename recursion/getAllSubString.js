const input = "abcd"
// for subsequence no of subsequence generated = 2^n
// for substring no of substring generated = n(n+1)/2

let fres = []
function getSubString(input){
    if(!input.length){
        return []
    }
    let ch = input[0]
    let remaining = input.substring(1)
    let tempRes = getSubString(remaining)
    let res = []
    for(let i of tempRes){
        res.push(ch+i)
    }
    res.push(ch)
    fres.push(...res)
    return res
}

console.log(getSubString(input))
console.log(fres)