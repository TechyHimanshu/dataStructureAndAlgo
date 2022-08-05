

/**
 * @param {number[]} pre
 * @param {number} size
 * @returns {Node}
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Solution
{
    //Function that constructs BST from its preorder traversal.
    post_order(pre, size)
    {
        //first element of preorder traversal is always root of BST.
        let root = new Node(pre[0]);
    
        //creating a stack of capacity equal to size of array.
        let s = [];
        //pushing root into the stack.
        s.push(root);
        let start = 0;
    
        let i = 1;
        //iterating over rest of the array elements.
        while (i < size)
        {
            let temp = null;
            
            //we keep on popping from stack while data at top of stack is less
            //than the current array element.
            while (s.length > 0 && pre[i] > s[start].data)
            {
                temp = s[start];
                s.pop();
                start--;
            }
            
            //we make this greater value as right child and push it into stack.
            if (temp !== null)
            {
                temp.right = new Node(pre[i]);
                s.push(temp.right);
                start++;
            }
            //if current array element is less than data at top of stack, we
            //make it as left child of stack's top node and push it into stack.
            else
            {
                temp = s[start];
                temp.left = new Node(pre[i]);
                s.push(temp.left);
                start++;
            }
            i = i + 1;
        }
        return root;
    }

}

const N = 5
const arr  = [40,30,35,80,100]
let z = new Solution();
console.log(z.post_order(arr,N));