const nums = [1,2,3,4]
const Output = [24,12,8,6]

function prod(nums){
    let left = 0
    let right = nums.length-1;
    let temp = [];
    let p =1
    while(left<nums.length){
       temp.push(p);
       p=p*nums[left]
       left++
    }
    //[1126]
    let p2=1;
    while(right>=0){
        temp[right] = temp[right]*p2;
        p2*= nums[right];
        right--; 
    }

    console.log(temp);
}

function prod2(nums){
    let prodFromLeft = []
    let prodFromRight = []
    let left = 0
    let right = nums.length-1
    let p = 1
    let p2 = 1
    let ans = []
    while(left < nums.length){
        if(nums[left] === 0) return 0
        p = p*nums[left]
        prodFromLeft.push(p)
        left ++
    }
    while(right >= 0){
        p2 = p2*nums[right]
        prodFromRight[right] = p2
        right --
    }
    console.log(p)
    console.log(p2)

    for(let i =0; i<nums.length; i++){
        if(i === 0 ){
            ans.push(prodFromRight[i+1])
            continue
        }else if(i == nums.length-1){
            ans.push(prodFromLeft[i-1])
            continue
        }
        ans.push(prodFromLeft[i-1] * prodFromRight[i+1])

    }
    console.log(ans)
}

prod2(nums);