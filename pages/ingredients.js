class Ingredient {
    constructor(img_name, category, price) {
        this.name = img_name;
        this.category = category;
        this.price_of_one = price;
        this.src = "./imgs/" + this.category + "/" + this.name + ".png";
    }
    price(num=1) {
        return this.price_of_one * num;
    }
}


// MEAT
const egg = new Ingredient("egg", "meat", 75);
const beef = new Ingredient("beef", "meat", 250);
const chicken = new Ingredient("chicken", "meat", 250);
const duck = new Ingredient("duck", "meat", 250);
const foiegias = new Ingredient("foie-gias", "meat", 400);
const mutton = new Ingredient("mutton", "meat", 250);
const pork = new Ingredient("pork", "meat", 250);


// VEGETABLE
const chili = new Ingredient("chili", "veggies", 75);
const honey = new Ingredient("honey", "veggies", 75);
const pumpkin = new Ingredient("pumpkin", "veggies", 75);
const seaweed = new Ingredient("seaweed", "veggies", 75);
const tofu = new Ingredient("tofu", "veggies", 75);
const veggie = new Ingredient("veggie", "veggies", 75);

// CEREAL
const flour = new Ingredient("flour", "cereal", 50);
const rice = new Ingredient("rice", "cereal", 50);


// SEAFOOD
const abalon = new Ingredient("abalon", "seafood", 400);
const eel = new Ingredient("eel", "seafood", 250);
const octupus = new Ingredient("octopus", "seafood", 250);
const perch = new Ingredient("perch", "seafood", 250);
const salmon = new Ingredient("salmon", "seafood", 250);
const shrimp = new Ingredient("shrimp", "seafood", 250);
const turtle = new Ingredient("turtle", "seafood", 250);
const squid = new Ingredient("squid", "seafood", 250);
const wild_fish = new Ingredient("wild-fish", "seafood", 250);

// FRUITS
const banana = new Ingredient("banana", "fruits", 100);
const lemon = new Ingredient("lemon", "fruits", 100);
const mango = new Ingredient("mango", "fruits", 100);
const orange = new Ingredient("orange", "fruits", 100);
const pineapple = new Ingredient("pineapple", "fruits", 100);
const water_chestnut = new Ingredient("water-chestnut", "fruits", 100);

// DRINKS
const basic_drink = new Ingredient("basic-drink", "drink", 200);
const coconut_milk = new Ingredient("coconut-milk", "drink", 200);
const grape_juice = new Ingredient("grape-juice", "drink", 200);
const guava_juice = new Ingredient("guava-juice", "drink", 200);
const milk = new Ingredient("milk", "drink", 75);
const rice_wine = new Ingredient("sticky-rice-wine", "drink", 200);


// SIDE INGREDIENT
const butter = new Ingredient("butter", "side-ing", 100);
const cheese = new Ingredient("cheese", "side-ing", 100);
const cream = new Ingredient("cream", "side-ing", 100);
const curry = new Ingredient("curry", "side-ing", 100);
const tea_leaves = new Ingredient("tea-leaves", "side-ing", 100);

// FOOD COMPANION
const chili_oil = new Ingredient("chili-oil", "food-companion", 50);
const haw_flakes = new Ingredient("haw-flakes", "food-companion", 50);
const luck_clover = new Ingredient("luck-clover", "food-companion", 50);
const mint_leaves = new Ingredient("mint-leaves", "food-companion", 50);
const mutant_fish = new Ingredient("mutant-fish", "food-companion", 50);

// SEASONING
const bbq_sauce = new Ingredient("bbq-sauce", "seasoning", 50);
const chicken_essence = new Ingredient("chicken-essence", "seasoning", 50);
const cumin_powder = new Ingredient("cumin-powder", "seasoning", 50);
const ice_cube = new Ingredient("ice-cube", "seasoning", 50);
const pepper = new Ingredient("pepper", "seasoning", 50);
const salt = new Ingredient("salt", "seasoning", 50);
const seasoning = new Ingredient("seasoning", "seasoning", 50);
const soy_sauce = new Ingredient("soy-sauce", "seasoning", 50);
const sugar = new Ingredient("sugar", "seasoning", 50);
const tomato_sauce = new Ingredient("tomato-sauce", "seasoning", 50);
const vinegar = new Ingredient("vinegar", "seasoning", 50);

// const name = new Ingredient("name", "cat", price);