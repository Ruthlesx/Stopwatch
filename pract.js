/*function getAverage(a, b) {

  getAverage.forEach(element => {

    let average = a + b / element.length 
    
  }); 
}


console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
*/
/*
function sum(a, b) {
  return  b / 5

} 


console.log(sum(5,5))


function getAverage(a, b, c) {
  return (a + b + c) / getAverage.length

}

//console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
//console.log(getAverage(4,5,6))
console.log(getAverage.length )

//console.log(res)


function getAverage(nums) {
  const sum = nums.reduce((a, b) => { return  a + b}, 0) 
  return sum / nums.length
}

//console.log(sum([3,5,6]))
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
*/

function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}


function studentMsg(totalScores, studentScore) {
  const classAverage  = getAverage(totalScores).toFixed(1)

  const studentGrade = getGrade(studentScore)

  const passed = hasPassingGrade(studentScore)

 if (passed) {
  return `Class average: ${classAverage}. Your Grade: ${studentGrade}. You passed the course`
} else {
  return `Class average: ${classAverage}. Your Grade: ${studentGrade}. You failed the course`
}
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));