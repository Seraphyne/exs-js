function printNames(myArray){
myArray.forEach(myArrayElement => {console.log(myArrayElement)});
}

function logTreeType(myTree){
myTree.forEach(myArrayElement => {console.log(myArrayElement.type)});  
}

function totalPoints(addUpArray){
  let total = 0;
addUpArray.forEach(myArrayElement => {
  total = myArrayElement + total;
});  
   return total; 
}

function buildSentence(addStrings){
  let sentence = '';
addStrings.forEach(myStringElement =>{
  sentence = sentence + myStringElement + " ";
});  
  return sentence;
}

function logPercentages(percentage){
percentage.forEach(myPercentage => {
  console.log(myPercentage*100+"%")
});   
}
// --------------------------------------------
function firstOdd(myArray){
let result = myArray.find(function(num){
 return num % 2 === 1;
});  
  return result;
}

function getAdministrator(myArray){
 let result =  myArray.find(function(admin){
   return admin.isAdmin == true;
 });
  return result;
}

function divisibleByTen(myArray){
let result = myArray.find(function(div){
  return div % 10 === 0;
});  
  return result;
}

function divisibleByX(myArray,divisor){
let result = myArray.find(function(div){
  return div % divisor === 0;
})
return result;
}

function startsWithLetter(myArray, letter){
  let result = myArray.find(function(string){
return string.charAt(0) === letter;    
});
  return result;
}
//-----------------------------------------------
function evenNumbers(myArray){
  let array = myArray.filter(function(num){
   return  num % 2 === 0;
  });
  return array;
}

function greaterThan100(myArray){
  let array = myArray.filter(function(num){
    return num > 100;
  });
  return array;
}

function nonAdminUsers(myArray){
  let array = myArray.filter(function(admin){
    return admin.isAdmin == false;
  });
  return array;
}

function shorterThanX(myArray,num){
  let array = myArray.filter(function(string){
    return string.length < num;
  });
  return array;
}

function onlyStrings(myArray){
  let array = myArray.filter(function(string){
    return typeof(string) == "string";
  });
  return array;
}
// ------------------------------------------------
function addThreeToAll(myArray){
  let array = myArray.map(function(add){
    return add + 3;
  });
  return array;
}

function squareAll(myArray){
  let array = myArray.map(function(squared){
    return squared ** 2;
  });
  return array;
}

function allGreetings(myArray){
  let array = myArray.map(function(strings){
    return `Hello, ${strings}, nice to meet ya!`;
  });
  return array;
}

function getUsernames(myArray){
  let array = myArray.map(function(name){
    return name.username; 
  });
  return array;
}

function pluck(myArray, key){
  let array = myArray.map(function(obj){
    return obj[key];
  });
  return array;
}

//---------------------------

function namesAndNumbers(roster) {
  let jerseys = []
  for (let i = 0; i < roster.length; i++) {
    jerseys.push(`${roster[i].name}\n${roster[i].number}`)
  }
  return jerseys
}

function countPlayersAtPosition(roster, position) {
  let count = 0
  for (let i = 0; i < roster.length; i++) {
    if (roster[i].position === position) {
      count += 1
    }
  }
  return count
}
//-----------------------------------

function namesAndNumbers(roster) {
 let jerseys = roster.map(function(arrayElement){
   return `${arrayElement.name}\n${arrayElement.number}`;
 });
  return jerseys;
}

function countPlayersAtPosition(roster, position) {
let count = roster.filter(function(array){
  return array.position === position;
});
  return count.length;
}