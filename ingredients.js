class Ingredient {
    constructor(img_name, category, price) {
        this.name = img_name;
        this.category = category;
        this.price = price;
        this.src = "./imgs/" + this.category + "/" + this.name + ".png";
    }
}

const egg = new Ingredient("egg", "meat", 75);