

// JavaScript implementation of the approach

// Function to find all unique combination of
// given elements such that their sum is K
function unique_combination(l, currentsum, K, local, A) {
	// If a unique combination is found
	if (currentsum == K) {
		console.log(local);
		return;
	}

	// For all other combinations
	for (let i = l; i < A.length; i++) {

		// Check if the sum exceeds K
		if (currentsum + A[i] > K)
			continue;

		// Check if it is repeated or not
		if (i > l && A[i] == A[i - 1])
			continue;

		// Take the element into the combination
		local.push(A[i]);

		// Recursive call
		unique_combination(i + 1, currentsum + A[i], K, local, A);

		// Remove element from the combination
		local.pop();
	}
}

// Function to find all combination
// of the given elements
function Combination(A, K) {
	// Sort the given elements
	A.sort((a, b) => a - b); 

	// To store combination
	let local = [];

	unique_combination(0, 0, K, local, A);
}

// Driver code

let A = [10, 1, 2, 7, 6, 1, 5];
//  sortedA = [1,1,2,5,6,7,10]

let K = 8;

// Function call
Combination(A, K);
