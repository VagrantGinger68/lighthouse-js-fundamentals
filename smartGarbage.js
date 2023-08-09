const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === "waste"){
    bins.waste++;
  } else if (trash === "recycling"){
    bins.recycling++;
  } else if (trash === "compost"){
    bins.compost++;
  }
  return bins;
}

console.log(smartGarbage("compost", {waste:1, recycling:2, compost:3}));