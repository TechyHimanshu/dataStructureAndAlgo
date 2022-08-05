const arr = [7,1,5,3,6,4];

var maxProfit = function(arr) {
    let max =  0;
    minEle = arr[0]
    for (let i = 1;i < arr.length; i++){
        if(arr[i]-minEle > max)    
          max = arr[i]-minEle;
        if(arr[i]<minEle)
            minEle = arr[i]
    }

    return max > 0 ? max : 0; 
};

console.log(maxProfit(arr));


var maxProfit2 = function(prices) {
  let max =  0;
  let minEle = prices[0]
  for (let i = 1;i < prices.length; i++){
      if(prices[i]-minEle > 0){
      if( prices[i+1] && prices[i+1]>prices[i]) continue;
        max = max + prices[i]-minEle;
        minEle = prices[i+1];
        continue;
      }    
      if(prices[i]<minEle)
        minEle = prices[i]
  }

  return max > 0 ? max : 0; 
};

console.log(maxProfit2([1,2,3,4,5]));



//need to improvise not completely working

var maxProfit3 = function(prices,k) {
  let max =  0;
  let minEle = prices[0]
  for (let i = 1;i < prices.length; i++){
      if(k==0) break;
      if(prices[i]-minEle > 0){
      if( prices[i+1] && prices[i+1]>prices[i]) continue;
        max = max + prices[i]-minEle;
        minEle = prices[i+1];
        k--;
        continue;
      }    
      if(prices[i]<minEle)
        minEle = prices[i]
  }
  return max > 0 ? max : 0; 
};

console.log(maxProfit3([2,4,1]));
