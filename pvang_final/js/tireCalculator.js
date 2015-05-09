/*
CREATED BY PHENG VANG

tireCalculator.js calculates measurements
on tires.

Program Fundamentals Final Project
 */

// Function to calculate tire specifications
function tireCalculator(tireWidth, tireRatio, tireDiameter) {

  //variables
  var aspectRatio;
  var circumference;
  var diameter;
  var radius;
  var revPerMile;
  var sidewall;

  tireDiameter = Number(tireDiameter);
  tireRatio = Number(tireRatio);
  tireWidth = Number(tireWidth);

  // Calculations
  sidewall = tireWidth / 25.4;
  aspectRatio = sidewall * (tireRatio / 100);
  diameter = aspectRatio * 2 + tireDiameter;
  circumference = diameter * 3.14;
  radius = diameter / 2;
  revPerMile = 63360 / circumference;

  // Output/Returns Calculations
  return [diameter.toFixed(2), sidewall.toFixed(2), aspectRatio.toFixed(2), circumference.toFixed(2), radius.toFixed(2), revPerMile.toFixed(2)];

}