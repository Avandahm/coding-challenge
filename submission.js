//question 1 
const findSum = function(array) { 
  let total = 0;
  for (let i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
}

//question 2
const findFrequency = function(array) {
  let result = {
    most: '',
    least: ''
};
let best_count = 0, least_count = array.length;
for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j])
            ++count;
    }
    if (count > best_count) {
        best_count = count;
        result.most = array[i];
    }
    if (count < least_count) {
        least_count = count;
        result.least = array[i];
    }
}
return result;
}

// // question 3
const isPalindrome = function(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }


//question 4
const largestPair = function(array) {
  var max=-Infinity;  
  for (var i=0;i<array.length-1;i++){
      max = array[i]*array[i+1]>max ?array[i]*array[i+1]:max;  
  }
  return max;
}

// question 5
const removeParenth = function(str){
  var s= str 
  var result="" 
  for(var i=0;i<s.length;i++){
    if(!(s[i]==='(' || s[i]===')')) 
   result+=s[i] 
  }
  return result 
}


// // question 6
const scoreScrabble = function(str){
  let sum=0 
    temp= str 
    let s={
        1 : ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        2: ['d', 'g'],
        3 :[ 'b', 'c', 'm', 'p'],
        4 : ['f', 'h', 'v', 'w', 'y'],
        5 : ['k'],
        8 : ['j', 'x'],
        10 : ['q', 'z'],
    }
    let list=Object.entries(s)  
   for(let i in temp){  
     for(let j in list){ 
       if(list[j][1].includes(temp[i])){  
         sum+=Number(list[j][0])  
       }
     }
   }
    return sum  
}
