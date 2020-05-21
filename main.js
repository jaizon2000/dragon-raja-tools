"use strict";

class Ingredient {
    constructor(img_name, category, price) {
        this.name = img_name;
        this.category = category;
        this.price = price;
    }
    src() {
        return "./imgs/" + this.category + "/" + this.name + ".png";
    }
}

// const egg = new Ingredient("egg", "meat", 75);

function getsrc(img_name) {
    const egg = new Ingredient(img_name, "meat", 75);
    console.log(egg.src());
    $(this).html();
    $(this).attr("src", egg.src());

}