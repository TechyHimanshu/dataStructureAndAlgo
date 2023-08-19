function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  function findAllPalindromicSubsequences(str, current = "", index = 0, results = new Set()) {
    if (index === str.length) {
      if (current !== "" && isPalindrome(current)) {
        results.add(current);
      }
      return;
    }
  
    // Include the current character in the subsequence
    findAllPalindromicSubsequences(str, current + str[index], index + 1, results);
  
    // Exclude the current character from the subsequence
    findAllPalindromicSubsequences(str, current, index + 1, results);
  
    return Array.from(results);
  }
  
  const inputString = "program";
  const palindromicSubsequences = findAllPalindromicSubsequences(inputString);
  console.log(palindromicSubsequences);
  