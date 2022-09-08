
const height = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
    let l = 0;
    let r = height.length-1;
    let maximum = 0;
    while(l<r){
        maximum = Math.max(maximum,(r-l)*Math.min(height[l],height[r]))
        if (height[l] < height[r]) l++
        else r--
    }
    return maximum;
};

console.log(maxArea(height));