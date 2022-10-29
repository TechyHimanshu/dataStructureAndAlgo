// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// P   A   H   N
// A P L S I I G
// Y   I   R




var convert = function(s, numRows) {  
    let ipArr = s.split("");
    let strArr = [];
    let index = 0;
    let n = ipArr.length;

    for(let j =0 ; j<numRows;j++){
        strArr[j] = "";
    }
    while(index<n){
        for(let j =0 ; j<numRows&& index<n;j++){
            strArr[j] += ipArr[index++]
        }
        for(let i = numRows-2 ; i > 0 && index<n ;i--){
            strArr[i] += ipArr[index++]
        }
    }
    console.log(strArr.join(""));
};

convert(s,numRows);