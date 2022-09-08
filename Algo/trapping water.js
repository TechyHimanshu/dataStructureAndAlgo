const trap = function (heights) {
	let total = 0

	let left = 0
	let right = heights.length - 1

	let leftSide = heights[left]
	let rightSide = heights[right]
	while (left < right) {

		//if left side is the limiting factor
		if (leftSide < rightSide) {
			//move the left pointer inwards 
			left++
			//if the containter side is taller than the current height
			if (leftSide > heights[left]) {
				//add the area filled to by water blocks to the total
				total += leftSide - heights[left]
			}
			//otherwise, set the container side to the current height
			else {
				leftSide = heights[left]
			}
		}
		//if the right side or both sides are the limiting factor
		else {
			//move the right pointer inwards 
			right--
			//if the containter side is taller than the current height
			if (rightSide > heights[right]) {
				//add the area filled to by water blocks to the total
				total += rightSide - heights[right]
			}
			//otherwise, set the container side to the current height
			else {
				rightSide = heights[right]
			}
		}
	}
	return total
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
trap(height)