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

form.on("submit", searchData);
button.on("click", searchData);

function searchData() {

    d3.event.preventDefault();
    tbody.html("");

    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var shapeElement = d3.select("#shape");
    var countryElement = d3.select("#country");

    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var shapeValue = shapeElement.property("value");
    var countryValue = countryElement.property("value");

    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(shapeValue);
    console.log(countryValue);

    var filteredData = tableData.filter(ufo => (ufo.datetime === dateValue || dateValue === ""));
    
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    });

}

