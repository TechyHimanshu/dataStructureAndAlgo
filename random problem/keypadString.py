def printKeyboardPress(s):
  keyDict = {
    '1': [""],
    '2':["a","b","c"],
    '3':["d","e","f"],
    '4':["g","h","i"],
    '5':["j","k","l"],
    '6':["m","n","o"],
    '7':["p","q","r","s"],
    '8':["t","u","v"],
    '9':["w","x","y","z"],
    '0':[" "]
  }

  count = 1
  op = ""
  arr = list(s)
  print(arr)
  for i in range(len(arr)):
    if(i+1<len(arr) and arr[i] == arr[i+1]):
      count+=1
      continue
    elif(arr[i] in keyDict):
      temp = keyDict[arr[i]]
      if(count<len(temp)):
        op = op+ temp[count-1]
      else:
        while(count>0):
          if(count>len(temp)):
            op = op+temp[len(temp)-1]
          else:
            op=op+temp[count-1]
          count = count-len(temp)
    count=1
  print(op);

printKeyboardPress("4433555555666")