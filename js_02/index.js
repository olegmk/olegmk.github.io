// index.js
function generatePad(root) {
    var i, j;
    var keys = [];
    keys.push("*", "0", "#");
    for (i = 1; i <= 9;i++) {
        keys.push(i.toString());
    }
    console.log(keys);
   
    // generate Pad
    var counter = keys.length-1;
    var div_table = document.createElement("div");
    div_table.style.display = "table";

    for (i = 0; i < 4;i++) {
        var div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        for (j = 0; j < 3;j++) {
            var div_cell = document.createElement("div");
            div_cell.setAttribute("class", "cell");
            div_cell.innerHTML = keys[counter];
            div_row.appendChild(div_cell);
            counter--;
        } // j
        div_table.appendChild(div_row);
    } // i
    root.appendChild(div_table);
} // end of function