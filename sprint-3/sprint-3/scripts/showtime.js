var paragraph = document.getElementById("para");
var brainstationSpan = document.querySelector(".some-text");

var tableData = [];

//axios start
const url = "https://project-1-api.herokuapp.com/showdates?api_key=62f16841-4998-460e-839d-cfdb42c3bc7f";

const mapper = (x) => {
  return {
    date: x.date,
    location: x.location,
    place: x.place
  };
};

axios.get(url).then(response => {
  tableData = response.data.map(mapper);
  createTable(table, tableData);
});

var table = document.querySelector(".table-body");

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

