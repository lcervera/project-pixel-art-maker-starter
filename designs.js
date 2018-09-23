// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(init);

function makeGrid() {

    var height = $("#inputHeight").val();
    var width = $("#inputWidth").val();
    var grid = $("#pixelCanvas");

    $("tr", grid).remove();

    for (var i = 1; i <= height; i++) {
        var myTr = $("<tr>");
        for (var j = 1; j <= width; j++) {
            var myTd = $("<td>");
            myTd.click(paint)
            myTr.append(myTd);
        }
        grid.append(myTr);
    }
}

function paint() {
    var color = $("#colorPicker").val();
    $(this).css('background-color', color);
}

function init() {
    $("#buttonMakeGrid").click(makeGrid);
}


