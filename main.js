"use strict";

class Ingredient {
    constructor(img_name, category) {
        this.img_src = ".imgs/" + category + "/" + img_name + ".png";
        this.category = category;
    }
}
