var countAndPrintPalindromicSubsequenceofLength3 = function (s) {
    let count = 0;
    let chars = new Set(s);
    for(const char of chars){
        let first = s.indexOf(char),last = s.lastIndexOf(char);
        let x = new Set(s.slice(first + 1, last))
        count += x.size;
        for(let i of x){
            console.log(`${char}${i}${char}`)
        }

    }
    return count;
};

countPalindromicSubsequence("aabcba")