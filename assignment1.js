function generateTable() {
    var tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
  
    var rowsInput = document.getElementById("rows");
    var columnsInput = document.getElementById("columns");
    var rows = parseInt(rowsInput.value);
    var columns = parseInt(columnsInput.value);
  
    // Validate input
    if (rows > 10 || columns > 10) {
      tableContainer.innerHTML = "Invalid input. Please enter values up to 10.";
      return;
    }
  
    var table = document.createElement("table");
  
    for (var i = 1; i <= rows; i++) {
      var row = document.createElement("tr");
  
      for (var j = 1; j <= columns; j++) {
        var cell = document.createElement("td");
        cell.textContent = i * j;
        row.appendChild(cell);
      }
  
      table.appendChild(row);
    }
  
    tableContainer.appendChild(table);
  }
  
