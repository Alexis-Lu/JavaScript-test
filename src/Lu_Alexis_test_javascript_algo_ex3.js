function F31(table) {
  for (let i = 0; i < table.length; i++) {
    if (F21(table[i])) {
    } else {
      var body = document.getElementsByTagName("body")[0];

      // creates a <table> element and a <tbody> element
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");

      // creates a table row
      var row = document.createElement("tr");

      var cell = document.createElement("td");
      var firstCell = document.createTextNode(`Line ${i + 1} incorrect`);
      cell.appendChild(firstCell);
      row.appendChild(cell);
      for (var j = 0; j < table[i].length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(table[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);

        // add the row to the end of the table body
        tblBody.appendChild(row);
      }

      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      body.appendChild(tbl);
      // sets the border attribute of tbl to 2;
      tbl.setAttribute("border", "2");
    }
  }
}

function F32(table) {
  for (let i = 0; i < table.length; i++) {
    if (F21(table[i])) {
    } else {
      var body = document.getElementsByTagName("body")[0];

      // creates a <table> element and a <tbody> element
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");

      // creates a table row
      var row = document.createElement("tr");

      var cell = document.createElement("td");
      var firstCell = document.createTextNode(`Column ${i + 1} incorrect`);
      cell.appendChild(firstCell);
      row.appendChild(cell);
      for (var j = 0; j < table[i].length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(table[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);

        // add the row to the end of the table body
        tblBody.appendChild(row);
      }

      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      body.appendChild(tbl);
      // sets the border attribute of tbl to 2;
      tbl.setAttribute("border", "2");
    }
  }
}

function sortRegion(table) {
  const region = [];
  let saveArray = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  saveArray = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      saveArray.push(table[i][j]);
    }
  }
  region.push(saveArray);
  return region;
}

function F33(table) {
  for (let i = 0; i < table.length; i++) {
    if (F21(table[i])) {
    } else {
      var body = document.getElementsByTagName("body")[0];

      // creates a <table> element and a <tbody> element
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");

      // creates a table row
      var row = document.createElement("tr");

      var cell = document.createElement("td");
      var firstCell = document.createTextNode(`Region ${i + 1} incorrect`);
      cell.appendChild(firstCell);
      row.appendChild(cell);
      for (var j = 0; j < table[i].length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(table[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);

        // add the row to the end of the table body
        tblBody.appendChild(row);
      }

      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      body.appendChild(tbl);
      // sets the border attribute of tbl to 2;
      tbl.setAttribute("border", "2");
    }
  }
}

function sudoku(table) {
  F31(table);
  F32(saveCol(table));
  F33(sortRegion(table));
}

sudoku(newTable);
