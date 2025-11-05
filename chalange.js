// calculate the area of a triangle 
const triArea = (p1, p2) => {
  return p1 * p2 / 2;
}

// make a function that do the same thing this function doing
function redundant(str) {
  var str1 = str;
  var str1 = function (str1) {
    return str;
  }
  return str1;
}

// boom if number 7 is founded
function sevenBoom(arr) {
  var arrs = arr.map(n => String(n));
  var i = 0;
  while (i < arrs.length) {
    for (let j = 0; j < arrs[i].length; j++) {
      if (arrs[i][j] === "7") return "Boom!"
    }
    i++;
  }
  return "there is no 7 in the array"
}

// calculate the number of secondes in a mount of hours 
const howManySeconds = (n) => {
  return n * 3600;
}

// calculate the number of secondes in a mount of minutes 
const convert = (n) => {
  return n * 60;
}

// calculate the power
const circuitPower = (param1, param2) => {
  return param1 * param2;
}

// calculate the number of days from an age
function calcAge(age) {
  return age * 365;
}

// calculate the cube of a
function cubes(a) {
  return a ** 3;
}

// calculate the sum of degrees in a polygon of n edges
function sumPolygon(n) {
  if (n > 2) return (n - 2) * 180;
  else return "impossible to make a polygon"
}

//increment a num by 1 position
function addition(num) {
  return num + 1;
}

// calculate the sum of cubes from an array
function sumOfCubes(nums) {
	var i,sum=0;
	for(i=0;i<nums.length;i++){
		sum=sum+nums[i]**3;
	}
	return sum;
}