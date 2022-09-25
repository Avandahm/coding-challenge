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
  var data = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'];
  let result = {
      most: '',
      least: ''
  };
  let bestCount = 0, leastCount = data.length;
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
var frequency = findFrequency ();
console.log(frequency);

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
  var arr= [9, 5, 10, 2, 24, -1, -48];
  var max=-Infinity;  
  for (var i=0;i<arr.length-1;i++){
      max = arr[i]*arr[i+1]>max ?arr[i]*arr[i+1]:max;  
  }
  return max;
}
var pair = largestPair();
console.log(pair);

// question 5
const removeParenth = function(str)  {
  var phrase = ('Im (not) havingfun '); 
  var result = "" 
  for(var i = 0; i < phrase.length;i++){
    if(! ( phrase[i] === '(' || phrase[i] ===')')) 
   result += phrase [i] 
  }
  return result 
} 
var sentence = removeParenth();
console.log(sentence);

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

