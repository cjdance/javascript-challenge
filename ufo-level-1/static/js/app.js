// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

d3.selectAll(".form-group").on("change", searchDate);

function searchDate()