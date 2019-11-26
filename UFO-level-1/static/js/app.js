// from data.js
var tableData = data;

// Select the table body 
var tbody = d3.select("tbody")

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

button.on("click", function(){
    // select the input element and get the html node
    var inputElement = d3.select(".form-control");
    // get the value property of the input element
    var inputDate = inputElement.property("value");
    //console.log(inputDate)
    // filter data for the date value to get data that is searched for
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    //console.log(filteredData);

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



