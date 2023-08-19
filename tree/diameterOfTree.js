
// JavaScript program to find the diameter of a binary tree
// A binary tree Node
class Node{

	// Constructor to create a new Node
	constructor(data){
		this.data = data
		this.left = this.right = null
	}
}

// utility class to pass height object
class Height
{
	constructor()
	{
		this.h = 0
	}
}

// Optimised recursive function to find diameter
// of binary tree
function diameterOpt(root, height){

	// to store height of left and right subtree
	let lh = new Height()
	let rh = new Height()

	// base condition- when binary tree is empty
	if(root == null)
	{
		height.h = 0
		return 0
	}

	
	// ldiameter --> diameter of left subtree
	// rdiameter --> diameter of right subtree
	
	// height of left subtree and right subtree is obtained from lh and rh
	// and returned value of function is stored in ldiameter and rdiameter
	let ldiameter = diameterOpt(root.left, lh)
	let rdiameter = diameterOpt(root.right, rh)

	// height of tree will be max of left subtree
	// height and right subtree height plus1
	height.h = Math.max(lh.h, rh.h) + 1

	// return maximum of the following
	// 1)left diameter
	// 2)right diameter
	// 3)left height + right height + 1
	return Math.max(lh.h + rh.h + 1, Math.max(ldiameter, rdiameter))
}

// function to calculate diameter of binary tree
function diameter(root){
	let height = new Height()
	return diameterOpt(root, height)
}


// Driver Code
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)


// Constructed binary tree is
//			 1
//		 / \
//		 2	 3
//	 / \
//	 4	 5


// Function Call
console.log(diameter(root))

// This code is contributed by Shinjanpatra

