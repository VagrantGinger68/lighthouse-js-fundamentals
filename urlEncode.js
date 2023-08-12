const urlEncode = function(text) {
  // Put your solution here
  let length = text.length;
  let url = "";
  if (text[0] === " "){
    url += "";
  }else{
    url += text[0];
  }

  for (i = 1; i < length - 1; i++){
    if (text[i] === " "){
      url += "%20";
    }else{
      url += text[i];
    }
  }

  if (text[length - 1] === " "){
    url += "";
  }else{
    url += text[length - 1];
  }
  return url;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));