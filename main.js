"use strict";
// GLOBAL VARS
let TIME = 0;

// ON DOCUMENT READY 
$(function () {
    $("input[type=number]").attr("min", 1);
    events();
    
})

// EVENT LISTENERS
function events(){
    $("#time-input").change(function() {
        let time = $(this).val();

        TIME = gettime(time);
    });
    $("#set-time").children().mousedown(function() {
       TIME = gettime($("#time-input").val());
    });
}


function makegrid() {

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