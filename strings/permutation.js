
// Javascript program to print all permutations of a
// given string.

function permute(str, l, r)
{
	if (l == r)
			console.log(str);
		else
		{
			for (let i = l; i <= r; i++)
			{
				str = swap(str, l, i);
				permute(str, l + 1, r);
				str = swap(str, l, i);
			}
		}
}

function swap(a, i, j)
{
	let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}

let str = "ABC";
let n = str.length;
// permute(str, 0, n-1);

// This code is contributed by avanitrachhadiya2155


	// JavaScript Program to implement
	// the above approach
function permute2(s , answer)
{
	if (s.length == 0)
	{
		console.log(answer + " ");
	}
	
	for(let i = 0 ;i < s.length; i++)
	{
		let ch = s[i];
		let left_substr = s.slice(0, i);
		let right_substr = s.slice(i + 1);
		let rest = left_substr + right_substr;
		permute2(rest, answer + ch);
	}
}

	// Driver Cod"e
	let s= "abc";
	let answer="";
	
	console.log("Enter the string : ");
	
	console.log("All possible string are : ");
	permute2(s, answer);

// This code is contributed by code_hunt.
