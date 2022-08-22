const ip = ["abc","jkl","bcd","klm","zab"] 
let obj = {};
const c = 97
for(let i=0 ,j=1; i<26; i++, j++){
obj[String.fromCharCode(97+i)]= [c+j]
}

let temp = {}
let tempstr1 = "";
let tempstr2 = "";
for(let iu of ip) {
    temp[iu] = [];
    for(let i = 0; i<iu.length; i++){
        let x = iu.charCodeAt(i)
        let y = x
        y = x-1
        x+=1
        if(y===96) y = 122;
        if(x === 123) x = 97 
        tempstr1 = tempstr1+String.fromCharCode(x)
        tempstr2 = tempstr2+String.fromCharCode(y)
    }
    const idx1 = ip.findIndex(ele => ele === tempstr1);
    if(idx1>=0)
        temp[iu].push(ip.splice(idx1,1).join(""))
    const idx2 = ip.findIndex(ele => ele === tempstr2);
    if(idx2>=0)
        temp[iu].push(ip.splice(idx2,1).join(""))
    tempstr1 = "";
    tempstr2 = "";
}


console.log(obj)