const numberOfVowels = function(data) {
  let vowels = ["a","e","i","o","u"];
  let length = data.length;
  let amountOfVowels = 0;
  for (let i = 0; i < length; i++){
    if (vowels.includes(data[i])){
      amountOfVowels += 1;
    }
  }
  return amountOfVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));