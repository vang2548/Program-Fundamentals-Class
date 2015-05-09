/*
CREATED BY PHENG VANG
Program Fundamentals Final Project
click events for outputs
 */
// variables
var inputs = document.getElementsByTagName("input");
var myTable = document.getElementById("myTable");

// Output tire specs with click
document.getElementById("comparison").onclick = function() {

  // Variables

  var comparedAspectRatioOutput = document.getElementById("comparedAspectRatioOutput");
  var comparedCircumferenceOutput = document.getElementById("comparedCircumferenceOutput");
  var comparedDiameter, comparedSidewall, comparedAspectRatio, comparedCircumference, comparedRadius, comparedRevPerMile;
  var comparedDiameterOutput = document.getElementById("comparedDiameterOutput");
  var comparedRadiusOutput = document.getElementById("comparedRadiusOutput");
  var comparedRevPerMileOutput = document.getElementById("comparedRevPerMileOutput");
  var comparedSidewallOutput = document.getElementById("comparedSidewallOutput");
  var comparedTireOutput = document.getElementById("comparedTireOutput");
  var compareTireDiameter;
  var compareTireDiameterField = document.getElementById("compareTireDiameterField");
  var compareTireRatio;
  var compareTireRatioField = document.getElementById("compareTireRatioField");
  var compareTireWidth;
  var compareTireWidthField = document.getElementById("compareTireWidthField");
  var currentAspectRatioOutput = document.getElementById("currentAspectRatioOutput");
  var currentCircumferenceOutput = document.getElementById("currentCircumferenceOutput");
  var currentDiameter, currentSidewall, currentAspectRatio, currentCircumference, currentRadius, currentRevPerMile;
  var currentDiameterOutput = document.getElementById("currentDiameterOutput");
  var currentRadiusOutput = document.getElementById("currentRadiusOutput");
  var currentRevPerMileOutput = document.getElementById("currentRevPerMileOutput");
  var currentSidewallOutput = document.getElementById("currentSidewallOutput");
  var currentTireOutput = document.getElementById("currentTireOutput");
  var originalTireDiameter;
  var originalTireRatio;
  var originalTireWidth;
  var tireDiameterField = document.getElementById("tireDiameterField");
  var tireRatioField = document.getElementById("tireRatioField");
  var tireWidthField = document.getElementById("tireWidthField");

  compareTireDiameter = compareTireDiameterField.value;
  compareTireRatio = compareTireRatioField.value;
  compareTireWidth = compareTireWidthField.value;
  originalTireDiameter = tireDiameterField.value;
  originalTireRatio = tireRatioField.value;
  originalTireWidth = tireWidthField.value;



  // Checks if values are filled in
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert("Please Fill in Current Tire size.");
      return false;
    }
  }

  // Calculates tire specifications of two tires.
  [comparedDiameter, comparedSidewall, comparedAspectRatio, comparedCircumference, comparedRadius, comparedRevPerMile] = tireCalculator(compareTireWidth, compareTireRatio, compareTireDiameter);
  [currentDiameter, currentSidewall, currentAspectRatio, currentCircumference, currentRadius, currentRevPerMile] = tireCalculator(originalTireWidth, originalTireRatio, originalTireDiameter);

  // outputs variables to screen
  comparedAspectRatioOutput.innerHTML = comparedAspectRatio;
  comparedCircumferenceOutput.innerHTML = comparedCircumference;
  comparedDiameterOutput.innerHTML = comparedDiameter;
  comparedRadiusOutput.innerHTML = comparedRadius;
  comparedRevPerMileOutput.innerHTML = comparedRevPerMile;
  comparedSidewallOutput.innerHTML = comparedSidewall;
  comparedTireOutput.innerHTML = compareTireWidth + "/" + compareTireRatio + "/" + compareTireDiameter;
  currentAspectRatioOutput.innerHTML = currentAspectRatio;
  currentCircumferenceOutput.innerHTML = currentCircumference;
  currentDiameterOutput.innerHTML = currentDiameter;
  currentRadiusOutput.innerHTML = currentRadius;
  currentRevPerMileOutput.innerHTML = currentRevPerMile;
  currentSidewallOutput.innerHTML = currentSidewall;
  currentTireOutput.innerHTML = originalTireWidth + "/" + originalTireRatio + "/" + originalTireDiameter;

};


// outputs compatible table to screen
document.getElementById("click").onclick = function() {
  var myTable = document.getElementById("myTable");
  // Checks if values are filled in
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert("Please Fill in Tire Sizes.");
      return false;
    }
  }
  myTable.innerHTML = 'Closest Matched tires available.  To check for speed Error.  Input tire size in above field "Tire Size to Compare" ';

  tireChart();
};




// Calls SpeedError Function
document.getElementById("speedDifference").onclick = function() {
  //variables.
  var comparedDiameterOutput = document.getElementById("comparedDiameterOutput");
  var currentDiameterOutput = document.getElementById("currentDiameterOutput");
  var speed = document.getElementById("speed");

  currentDiameterOutput = currentDiameterOutput.innerHTML;
  comparedDiameterOutput = comparedDiameterOutput.innerHTML;
  // Checks if input fields are filled in
  for (var i = 3; i < inputs.length; i++) {
    if (!inputs[i].value) {
      alert("Please Enter Current Tire Size and Tire Size to Compare.");
      return false;
    }

  }

  speed.innerHTML = speedError(currentDiameterOutput, comparedDiameterOutput);


};