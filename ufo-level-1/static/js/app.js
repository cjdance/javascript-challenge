// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!

// tableData.forEach(function(ufo) {
//     // console.log(ufo);
//     var row = tbody.append("tr");

//     Object.entries(ufo).forEach(function([key, value]) {
//         // console.log(key, value);

//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
});


var form = d3.select("form");
var button = d3.select("#filter-btn");

form.on("submit", searchDate);
button.on("click", searchDate);

function searchDate() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    tbody.html("");
    filteredData.forEach(function(ufo) {
        
        console.log(ufo);
        var row = tbody.append("tr");

        Object.entries(ufo).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });

}

