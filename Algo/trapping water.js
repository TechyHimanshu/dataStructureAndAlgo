const trap = function (heights) {
	let total = 0

	let left = 0
	let right = heights.length - 1

	let leftHeigth = heights[left]
	let rightHeight = heights[right]
	while (left < right) {

		//if left side is the limiting factor
		if (leftHeigth < rightHeight) {
			//move the left pointer inwards 
			left++
			//if the containter side is taller than the current height
			if (leftHeigth > heights[left]) {
				//add the area filled to by water blocks to the total
				total += leftHeigth - heights[left]
			}
			//otherwise, set the container side to the current height
			else {
				leftHeigth = heights[left]
			}
		}
		//if the right side or both sides are the limiting factor
		else {
			//move the right pointer inwards 
			right--
			//if the containter side is taller than the current height
			if (rightHeight > heights[right]) {
				//add the area filled to by water blocks to the total
				total += rightHeight - heights[right]
			}
			//otherwise, set the container side to the current height
			else {
				rightHeight = heights[right]
			}
		}
	}
	return total
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
trap(height)