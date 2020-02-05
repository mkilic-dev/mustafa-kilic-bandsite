var paragraph = document.getElementById("para");
var brainstationSpan = document.querySelector(".some-text");

var tableData = [
  { Dates: "Mon Dec 17 2018", Venue: "Ronald Lane", Location: "San Francisco, CA" },
  { Dates: "Mon Dec 17 2018", Venue: "Pier 3 East", Location: "San Francisco, CA" },
  { Dates: "Mon Dec 17 2018", Venue: "View Loungue", Location: "San Francisco, CA" },
  { Dates: "Mon Dec 17 2018", Venue: "Hyatt Agency", Location: "San Francisco, CA" },
  { Dates: "Mon Dec 17 2018", Venue: "Moscow Center", Location: "San Francisco, CA" },
  { Dates: "Mon Dec 17 2018", Venue: "Pres Club", Location: "San Francisco, CA" },
];

//axios start

axios.get('https://project-1-api.herokuapp.com/showdates?api_key=62f16841-4998-460e-839d-cfdb42c3bc7f')
  .then(function (response) {
    // handle success
    console.log(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 

  // axios-end


var table = document.querySelector(".table-body");
// console.log(table);

function createTable(table, tableData) {
  for (var show of tableData) {
    var row = table.insertRow();
    for (var key in show) {
      var cell = row.insertCell();
      var text = document.createTextNode(show[key]);
      cell.appendChild(text);
    }
    var cell = row.insertCell();
    var button = document.createElement("button");
    button.innerHTML = "BUY TICKETS";
    cell.appendChild(button);

  }
}
createTable(table, tableData);

