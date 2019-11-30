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

// create a filterData function
// fuction returns the filtered data if input values(compare) equals to the search criteria
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

// create an event for button click
button.on("click", function(){
    // select the input element for date and get the html node
    var dateElement = d3.select("#datetime");
    // get the value property of the input element
    var inputDate = dateElement.property("value");
    
    // select the input element for city and get the value info
    var cityElement = d3.select("#city");
    var inputCity = cityElement.property("value");

    // select the input element for state and get the value info
    var stateElement = d3.select("#state");
    var inputState = stateElement.property("value");

    // select the input element for country and get the value info
    var countryElement = d3.select("#country");
    var inputCountry = countryElement.property("value");

    //select the input element for shape and get the value info
    var shapeElement = d3.select("#shape");
    var inputShape = shapeElement.property("value");

    // create a variable for filtered data
    var filteredData = tableData;

    // use filterData function to filter data for the search criterias
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