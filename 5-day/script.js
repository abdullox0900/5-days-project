console.clear();
let angle = 360/6;
let finalAngle = -360;

const circleContainer = document.querySelectorAll(".circle");



circleContainer.forEach(circle =>{


  finalAngle -=60;

  circle.style.transform = `rotate(${angle}deg)`;
  circle.style.setProperty("--start-angle-of-rotation", `-${angle}deg`);
  circle.style.setProperty("--end-angle-of-rotation", `${finalAngle}deg`);


  angle += 60;

});
