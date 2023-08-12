const sumLargestNumbers = function(data){
  let num1 = data[0];
  let num2 = data[1];

  if (num1 > num2){
    num1 = data[0];
    num2 = data[1];
  } else{
    num2 = data[0];
    num1 = data[1];
  }

  for (let i = 2; i < data.length; i++){
    if (data[i] > num1){
      num2 = num1;
      num1 = data[i];
    }
  }
  return num1 + num2
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));