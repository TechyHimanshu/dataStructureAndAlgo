const input = "abc"
// for subsequence no of subsequence generated = 2^n
// for substring no of substring generated = n(n+1)/2




function generateSubseq(input){
    if(!input.length){
        return [""]
    }
    let fChar = input[0]
    let remaining = input.substring(1)
    let tSubseq = generateSubseq(remaining)
    let myRes = []
    for(let i of tSubseq){
        myRes.push(""+i)
        myRes.push(fChar+i)
    }
    return myRes
}

console.log(generateSubseq(input))