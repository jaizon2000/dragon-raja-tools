"use strict";
// GLOBAL VARS
let TIME = 0;
$(function () {
    $("input[type=number]").attr("min", 1);
    events();
    
})

function makegrid() {

}

function hrtomin(hr) {
    return hr * 60;
}

function mintohr(min) {
    return min * 60;
}

function events(){
    $("#time-input").change(function() {
        let time = $(this).val();

        TIME = gettime(time);
    });
    $("#set-time").children().mousedown(function() {
       TIME = gettime($("#time-input").val());
    });
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