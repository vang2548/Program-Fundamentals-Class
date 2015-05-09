/*
CREATED BY PHENG VANG

speedError.js calculates speed differences
between two different sized tires.

Program Fundamentals Final Project
 */

// function finds speed error
function speedError(currentDiameter, comparedDiameter) {
  // Variables
  var speedDifferences;
  var speedPercentage;


  // Calculations
  speedPercentage = Math.round((comparedDiameter / currentDiameter) * 100) - 100;
  speedDifferences = Math.round((comparedDiameter / currentDiameter) * 65);

  // output
  return "Current tires at 65 MPH <br>" +
    "Compared Tire would be going " + speedDifferences + " MPH" +
    "<br> Difference of " + speedPercentage + "%";

}