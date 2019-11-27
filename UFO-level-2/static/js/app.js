// from data.js
var tableData = data;

// Select the table body 
var tbody = d3.select("tbody");

// loop through data and append rows to the table body
tableData.forEach(function(ufo){
    var row = tbody.append("tr");
    // use append method to insert table data for each row
    Object.entries(ufo).forEach(function([key,value]){
        //console.log(key, value)
        // use append to insert a cell for each value
        // use text to insert data to each cell
        var cell = row.append("td").text(value);
    });
});

// select the button and create function 
var button = d3.select("#filter-btn");

function filterData(data, field, compare) {
    if(compare !== "") {
        return data.filter(function(ufo) {
            if (ufo[field] === compare) {
                return true;
            }
        });
    }
    return data;
}

button.on("click", function(){
    // select the input element and get the html node
    var inputElement1 = d3.select("#datetime");
    // get the value property of the input element
    var inputDate = inputElement1.property("value");
    
    // select the input element for city and get the value info
    var inputElement2 = d3.select("#city");
    var inputCity = inputElement2.property("value");

    // select the input element for state and get the value info
    var inputElement3 = d3.select("#state");
    var inputState = inputElement3.property("value");

    // select the input element for country and get the value info
    var inputElement4 = d3.select("#country");
    var inputCountry = inputElement4.property("value");

    //select the input element for shape and get the value info
    var inputElement5 = d3.select("#shape");
    var inputShape = inputElement5.property("value");

    var filteredData = tableData;

    // filter data for the search criterias
    filteredData = filterData(filteredData, 'datetime', inputDate);
    filteredData = filterData(filteredData, 'city', inputCity);
    filteredData = filterData(filteredData, 'state', inputState);
    filteredData = filterData(filteredData, 'country', inputCountry);
    filteredData = filterData(filteredData, 'shape', inputShape);

    // console.log(filteredData);

    // select the table body to insert table rows and cells
    var tbody = d3.select("tbody")
    // clean the table body to insert selected date values
    tbody.html("");

    // loop through filtered data to insert rows and cells for each object
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});