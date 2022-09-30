let intervals = [[1,5]] , newInterval = [2,3]

function InsertInterval(intervals,newInterval){
    let stack = [];
    if(intervals.length === 0) stack.push(newInterval)
    if(intervals.length === 1){
        stack.push(intervals[0])
        if(stack[stack.length-1][1]>=newInterval[0] && newInterval[1]>stack[stack.length-1][1] ) stack[stack.length-1][1] = newInterval[1];
        else if(stack[stack.length-1][1] < newInterval[0])  
            stack.push(newInterval)
        return stack;
    } 
    for(let i of intervals){
        if(stack.length===0){
            stack.push(i);
            if(stack[stack.length-1][1]>=newInterval[0] && newInterval[1]>stack[stack.length-1][1] ) stack[stack.length-1][1] = newInterval[1];
        } 
        else{
            if(stack[stack.length-1][1]>=i[0] && i[1]>stack[stack.length-1][1])stack[stack.length-1][1] = i[1];
            else if(stack[stack.length-1][1]>=newInterval[0] && newInterval[1]>stack[stack.length-1][1] ) stack[stack.length-1][1] = newInterval[1];
            else stack.push(i);
        }
    }
    console.log(stack);
}

InsertInterval(intervals,newInterval);