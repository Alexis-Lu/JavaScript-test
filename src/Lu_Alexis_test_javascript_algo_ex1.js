var newTable = [];

function F11(table_digits) {
  for (let i = 0; i < table_digits.length; i++) {
    newTable.push(table_digits[i].split(" "));
  }
  return newTable
}

function F12(table) {
  var body = document.getElementsByTagName('body')[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement('table');
  var tblBody = document.createElement('tbody');

  // creating all cells
  for (var i = 0; i < table.length; i++) {
    // creates a table row
    var row = document.createElement('tr');

    for (var j = 0; j < table.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement('td');
      var cellText = document.createTextNode(
        table[i][j]
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute('border', '2');
}

F12(F11(array_number));