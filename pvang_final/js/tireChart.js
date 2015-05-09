/*
CREATED BY PHENG VANG

tireChart.js takes in results from
tireSearch functions and builds a table 
with results. 

Program Fundamentals Final Project
 */

// function creates tables with results
function tireChart() {
  var body, tab, tr, td, tn, row, col;
  var chunksize = 7;
  var groups;
  var searchResults = tireSearch();

  // If searchResults Array is more than 7, splits array into 7 chunks 
  if (searchResults.length > 7) {
    item = "";
    groups = searchResults.map(function(item, index) {
      return index % chunksize === 0 ? searchResults.slice(index, index + chunksize) : null;
    })
      .filter(function(item) {
        return item;
      });

    // builds a table for results
    body = document.getElementById('myTable');
    tab = document.createElement('table');
    tab.setAttribute("id", "myTab");
    for (row = 0; row < groups.length; row++) {
      tr = document.createElement('tr');
      for (col = 0; col < groups[row].length; col++) {
        td = document.createElement('td');
        tn = document.createTextNode(groups[row][col]);
        td.appendChild(tn);
        tr.appendChild(td);
      }
      tab.appendChild(tr);
    }
    body.appendChild(tab);

  } else {
    myTable.innerHTML = "Sorry, There was no matched tires.";
  }

}