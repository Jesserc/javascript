//find the cube root of 4*7-3
const cubeRoot = (a, b, c) => {
  console.log(Math.cbrt(a * b - c));
}
cubeRoot(4, 7, 3);

//find the answer for 3*47 divided  by 4*70
const calcDiv = (a, b, c, d) => {
  let ans = (a * b) / (c * d);
  console.log(ans);
}
calcDiv(3, 47, 4, 70);


//find 300% of 120
const perc = (a, b) => {
  let percentage = a / b * 100;
  console.log(percentage + '%');
}
perc(300, 120);