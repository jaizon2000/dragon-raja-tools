'use strict';
// CAPSTONE & ITS TITLE
const rank = [
    "Newbie", "Agent", "Minister", "Master", "Upstart", "Genius", "Master-II",
    "Billionaire", "Hotshot", "President", "Director", "The Richest",
    "Shareholder", "School Board", "Chairman", "Tycoon", "Wall Street",
    "Gattuso Elder"
]
const capstone_lst = [
    50, 100, 500, 1500, 3000, 5000, 8000, 12000, 20000, 30000, 50000, 80000,
    120000, 200000, 300000, 500000, 800000, 1200000
]

// DEAL & ITS PRICE
const deal_lst = [60, 300, 980, 1980, 3280, 6480]
const price_lst = [1.39, 6.49, 19.99, 39.99, 66.99, 134.99]

// GLOBAL VARS


let convert = $("#gcw_valFPgMbBFCc0");

function gettitle(i = 0) {
    return rank[i];
}

function getcap(i = 0) {
    return capstone_lst[i];
}

function fillTable() {
    let cap_num = getcap(j);
    let cap_title = gettitle(j);
    let initial_amnt = $("#initial-amnt").val();
    console.log(j, );

    $("#level").text(cap_title + " (" + cap_num + ")")

    // FOR EACH DEAL
    for (let i = 0; i <= deal_lst.length - 1; i++) {
        let left = cap_num - initial_amnt;

        let deal = deal_lst[i];
        let price = price_lst[i];
        let buy_amnt = Math.ceil(left / deal);

        $("#price-" + i).text(buy_amnt + " = $" + buy_amnt * price + " CAD");
    }
}

function start() {
    fillTable();
}

$("#title").change(function() {
    
})