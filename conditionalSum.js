const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition == "even"){
    for (i = 0; i < values.length; i++){
      if (values[i] % 2 === 0){
        sum += values[i];
      }
    }
  }else if (condition == "odd"){
    for (i = 0; i < values.length; i++){
      if(values[i] % 2 !== 0){
        sum += values[i];
      }
    }
  }else{
    sum = "Condition doesn't exist";
  }
  return sum;
};



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([13, 88, 12, 44, 99], "Hello"));
console.log(conditionalSum([], "odd"));