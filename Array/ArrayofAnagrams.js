const input = ["eat", "tea", "tan", "ate", "nat", "bat"]
let obj= {};
for(let i =0 ; i<input.length; i++){
    let s1 = input[i].split('').sort().join("");
    if(obj[s1]===undefined) obj[s1] =[input[i]]
    else continue;
  for(let j = i+1; j<input.length; j++){
    let temp = input[j];
    let s2 = input[j].split('').sort().join("");
    if(s1===s2){
      obj[s1].push(temp);
    }
  }
}
console.log(Object.values(obj));