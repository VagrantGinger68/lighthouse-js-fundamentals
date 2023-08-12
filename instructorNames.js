const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let amountOfInstructors = instructors.length;
  let longestNameIndex = 0;
  let longestName = instructors[longestNameIndex].name.length;

  for (let i = 1; i < amountOfInstructors; i++){
    if (instructors[i].name.length > longestName){
      longestNameIndex = i;
      longestName = instructors[i].name.length;
    }
  }
  return instructors[longestNameIndex]
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);