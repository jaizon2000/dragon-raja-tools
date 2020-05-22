"use strict";
class Grid {
    constructor(max_row = 4, max_col = 4) {
        this.width = max_col;
        this.height = max_row;

        this.box_w = 125;
        this.box_h = 125;
    }
    make(max_row = 4, max_col = max_row) {
        this.width = max_col;
        this.height = max_row;

        console.log($(".box").attr("width"));
        // RESPONSIVE GRID SPACING
        $("#recipe-grid").css({
            "grid-template-columns": "repeat(" + max_col + ", 1fr)",
            "grid-template-rows": "repeat(" + max_row + ", 1fr)",
            "width": this.box_w * max_col + 40 + "px"
        });

        ///////////

        let html = "";
        let id = "";

        for (let row = 1; row != max_row + 1; row++) {
            for (let col = 1; col != max_col + 1; col++) {
                id = row + "-" + col;
                console.log(id);

                html += "<div id='" + id + "' class='box'>" +
                    "<img src='./imgs/meat/egg.png'>" +
                    "<br>Dish Name<p></p>"+
                    "</div>";
            }
        }
        $("#recipe-grid").html(html);
    }

    boxsize(w = this.width, h = w) {
        w = w + "px";
        h = h + "px";
        $("#recipe-grid").children().css({
            "width": w,
            "height": h
        });
    }
}

// GLOBAL VARS
let TIME = 0;
const grid = new Grid();

// ON DOCUMENT READY 
$(function () {

    // STARTERS
    grid.make();

    $("input[type=number]").attr("min", 1);
    events();

    // EVENT LISTENERS
    function events() {
        $("#time-input").change(function () {
            let time = $(this).val();

            TIME = gettime(time);
        });
        $("#set-time").children().mousedown(function () {
            TIME = gettime($("#time-input").val());
        });
    }

    function hrtomin(hr) {
        return hr * 60;
    }

    function mintohr(min) {
        return min * 60;
    }




    function gettime(time) {
        if ($("#time-txt").text() == "hr(s).") {
            TIME = hrtomin(time);
            console.log(TIME);

        } else {
            TIME = time
            console.log(TIME);
        }
    }


    function toggleTimeBtn(btn) {
        $("#set-time").children().removeClass("active-btn");
        $(btn).toggleClass("active-btn");
        $("#time-txt").text($(btn).text());
    }
})