//question 1 
const findSum = function(array) { 
  array = [10, 234, 356, 5, 3, 1, 3, 4];
  let total = 0;
  for (let i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
}

//question 2
const findFrequency = function(array) {
  array = ['a', 'a', 'b', 'b', 'c', 'd', 'd', 'd'];
  let result = {
      most: '',
      least: ''
  };
  let bestCount = 0, leastCount = array.length;
  for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (let j = 0; j < array.length; j++) {
          if (array[i] === array[j])
              ++count;
      }
      if (count > bestCount) {
          bestCount = count;
          result.most = array[i];
      }
      if (count < leastCount) {
          leastCount = count;
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
  array= [1,3,5,8];
  var max=-Infinity;  
  for (var i=0;i<array.length-1;i++){
      max = array[i]*array[i+1]>max ?array[i]*array[i+1]:max;  
  }
  return max;
}

// question 5
const removeParenth = function(str){
  str=  ('codingis(not)fun') 
  str = str.replace('(not)','');
  
  return str
}

// // question 6
const scoreScrabble = function(str){
  let sum=0 
  str = ('quintessential');
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
 for(let i in str){  
   for(let j in list){ 
     if(list[j][1].includes(str[i])){  
       sum+=Number(list[j][0])  
     }
   }
 }
  return sum  
}


