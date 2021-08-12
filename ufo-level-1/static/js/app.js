// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");
})