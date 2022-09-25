//question 1 
const findSum = function(array) {   
  var numbers = [0, 234, 356, 5, 3, 1, 3, 4];
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
  }
  return total;
}
var sum = findSum ();
console.log(sum);

//question 2
const findFrequency = function(array) {
  let result = {
      most: '',
      least: ''
  };
  let best_count = 0, least_count = data.length;
  for (let i = 0; i < data.length; i++) {
      let count = 0;
      for (let j = 0; j < data.length; j++) {
          if (data[i] === data[j])
              ++count;
      }
      if (count > bestCount) {
          bestCount = count;
          result.most = data[i];
      }
      if (count < leastCount) {
          leastCount = count;
          result.least = data[i];
      }
  }
  return result;
}
console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));

// // question 3
const isPalindrome = function (str) {  
      
  const length = string.length;  

    
  for (let i = 0; i < length / 2; i++) {  

      if (string[i] !== string[length - 1 - i]) {  
          alert( 'False');  
      }  
  }  
  alert( 'True');  
}  


const string = ('racecar');  

const value = isPalindrome(string);  

console.log(value);

 //question 4
const largestPair = function(array) {
  var max=-Infinity;  
  for (var i=0;i<arr.length-1;i++){
      max = arr[i]*arr[i+1]>max ?arr[i]*arr[i+1]:max;  
  }
  return max;
}
console.log(largestPair([5, 1, 2, 3, 1, 4]));

// question 5
const removeParenth = function(str)  {
  var phrase = (prompt('Im (not) havingfun ')) 
  var result = "" 
  for(var i = 0; i < phrase.length;i++){
    if(! ( s[i] === '(' || s[i] ===')')) 
   result += phrase [i] 
  }
  return result 
} 

// // question 6
const scoreScrabble = function(str) {
  let sum=0 
  temp=String(prompt('Quiz'))  
  let score={   
      1 : ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
      2: ['d', 'g'],
      3 :[ 'b', 'c', 'm', 'p'],
      4 : ['f', 'h', 'v', 'w', 'y'],
      5 : ['k'],
      8 : ['j', 'x'],
      10 : ['q', 'z'],
  }
  let list=Object.entries(score)  
 for(let i in temp){  
   for(let j in list){ 
     if(list[j][1].includes(temp[i])){  
     }
   }
 }
  console.log(sum);  //??????
}

