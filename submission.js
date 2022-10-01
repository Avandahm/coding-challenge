//question 1 
const findSum = function(array) { 
  var numbers = [10, 234, 356, 5, 3, 1, 3, 4];
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
  }
  return total;
}

//question 2
const findFrequency = function(array) {
  var data = ['a', 'a', 'b', 'b', 'c', 'd', 'd', 'd'];
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
  var arr= [1,3,5,8];
  var max=-Infinity;  
  for (var i=0;i<arr.length-1;i++){
      max = arr[i]*arr[i+1]>max ?arr[i]*arr[i+1]:max;  
  }
  return max;
}


// question 5
const removeParenth = function(str){
  var phrase=  ('codingis(not)fun') 
  phrase = phrase.replace('(not)','');
  
  return phrase 
}

// // question 6
const scoreScrabble = function(str){
  let sum=0 
  temp=String('quintessential');
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



