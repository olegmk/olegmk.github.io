// index.js
function generatePad(root) {
    var i, j;

    // generate Pad
    var div_table = document.createElement("div");
    div_table.style.display = "table";

    for (i = 1; i <= 9;i++) {
        var div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        for (j = 1; j <= 9;j++) {
            var div_cell = document.createElement("div");
            div_cell.setAttribute("class", "cell");
            div_cell.innerHTML = i * j;
            /*if ((i * j) % 2 == 0) {
                div_cell.setAttribute("class", "cell cell_even");
            }*/

            if (i == j) {
               div_cell.setAttribute("class", "cell cell_main");
            }

            if (i < j) {
                div_cell.setAttribute("class", "cell cell_omain");
            }

            if (i > j) {
                div_cell.setAttribute("class", "cell cell_umain");
            }



            div_row.appendChild(div_cell);

        } // j
        div_table.appendChild(div_row);
    } // i
    root.appendChild(div_table);
} // end of function
