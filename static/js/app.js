// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `tableData`
// Use d3 to:
// 		Append table row `tr` for each object
// 		Append 1 cell per value
// 		Update each cell's text
tableData.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Filter 'tableData' by date
var button = d3.select("#filter-btn");

button.on("click", function() {

var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");

var filteredData = tableData.filter(date => date.datetime === inputValue);

filterTable(filteredData);
console.log(filteredData);
});

function filterTable(results){
    d3.select("tbody").selectAll("tr").remove().selectAll("td").remove();
	results.forEach(function(report) {
	  var row = tbody.append("tr");
	  Object.entries(report).forEach(function([key, value]) {
	    console.log(key, value);
	    // Append a cell to the row for each value
	    // in the weather report object
	    var cell = row.append("td");
	    cell.text(value);
	  });
	});
}
