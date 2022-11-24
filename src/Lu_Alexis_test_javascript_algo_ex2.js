function F21(table) {
  var newTable = [...table];
  newTable.sort((a, b) => a - b);
  for (let i = 0; i < newTable.length; i++) {
    if (newTable[i] > 0 < 10) {
      if (newTable[i] === newTable[i + 1]) {
        return false;
      } else {
      }
    } else {
      console.log("Number needs to be between 1 and 9");
      return false;
    }
  }
  return true;
}

function saveCol(table) {
  const colTable = [];
  for (let i = 0; i < table.length; i++) {
    const newCol = [];
    for (let j = 0; j < table.length; j++) {
      newCol.push(table[j][i]);
    }
    colTable.push(newCol);
  }
  return colTable;
}
