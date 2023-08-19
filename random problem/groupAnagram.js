var groupAnagrams = function(strs) {
    console.log("a".charCodeAt())
    let obj = {}
    let ans = []
    for(let i of strs){
        const newArray = Array(26).fill(0);
        for(let s of i){
            newArray[s.charCodeAt()-"a".charCodeAt()] += 1
        }
        if(!obj[newArray.toString()]){
            obj[newArray.toString()] = [i]
        }else{
             obj[newArray.toString()].push(i)
        }
    }
    for(let i of Object.keys(obj)){
        ans.push(obj[i])
    }
    console.log(obj)
}
strs= ["eat","tea","tan","ate","nat","bat"]
groupAnagrams(strs)
