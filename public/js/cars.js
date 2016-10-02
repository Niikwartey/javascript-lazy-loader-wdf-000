"use strict";
var pageNumber = 3;
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var carsRow = '<div class="row">'

  for (var i in carsJSON) {
    carsRow += `<div class="col-md-4 car">
      <h2>${carsJSON[i]["Make"]}</h2>
      <p><strong>Model:</strong> ${carsJSON[i]["Model"]}</p>
      <p><strong>Year:</strong> ${carsJSON[i]["Year"]}</p>
    </div>`
  }
  carsRow += "</div"
  return carsRow;
}

function addCarsToDOM(carsJSON) {
  $("div#cars").append( formatCars(carsJSON) )
}


function fetchJSON(e) {
  $.ajax({
    url: `${baseUrl}${pageNumber}/3`,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data); pageNumber++;
    }
  })
}
