// Longest Palindromic Substring

const s = "babad";

var longestPalindrome = function(s) {
    function isPal(i, j)
    {
        while(i < j){
            if(s[i] != s[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
    let n = s.length;
    for(let k = 0; k < n;k++)
    {
        let j = n - 1 - k;
        let i = 0;
        while(j < n)
        {
            if(isPal(i,j))
                return s.substring(i, j + 1);
            i++;
            j++;
        }
    }
    return s;
    
};

console.log(longestPalindrome(s));


// using manacher's algo

//in this algo put i into center and then expand left annd right counter outwards 
//simulteneously also check for palindrom amd update the max length 

function manachersAlgo(str){
    let res = ""
    let resmax = Number.MIN_VALUE;
    for(let i = 0; i<str.length; i++){
        let left=i,right=i;
        while(left>-1 && right<str.length && str[left]===str[right]){
            if(right-left+1>resmax){
                resmax=right-left+1;
                res = str.substring(left,right+1)
            }
            left--;
            right++;
        }
        left = i , right= i+1;
        while(left>-1 && right<str.length && str[left]===str[right]){
            if(right-left+1>resmax){
                resmax=right-left+1;
                res = str.substring(left,right+1)
            }
            left--;
            right++;
        }
    }
    console.log(res);
    return res;
}

manachersAlgo("babad")