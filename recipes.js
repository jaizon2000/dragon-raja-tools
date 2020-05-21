const recipe_names = [
    "Chawanmushi", // 0
    "Tomato & Soup", // 1
    "French Burger", // 2
    "Veggie Pizza", // 3
    "Spring Rolls", // 4
    "Pineapple Charpati", // 5
    "Conch in Coconut Milk", // 6
    "Teriyaki Chicken", // 7
    "Crab Shumai", // 8
    "Beef Thick Soup", // 9
    "Shrimp Dumpling", // 10
    "Eel & Egg Rice", // 11
    "Lonjing Prawns", // 12
    "Seafood Tempura" // 13
];
let id = 0;
class Recipe {
    constructor(name, ing_lst, time = 0, sell_price = 0, buff) {
        this.name = name;
        this.ings = ing_lst;
        this.duration = time;
        this.price = sell_price;
        this.buff = buff[0];
        this.buff_dur = buff[1];
    }
}

const chawanmushi = new Recipe(
    recipe_names[id++], {
        1: ['egg', 'mushroom', 'seaweed', 'wildfish', 'salt', 'seasoning']
    },
    tomin(30),
    0,
    ["Max HP +69600", "(2 hrs)"]);


const tomato_soup = new Recipe(
    recipe_names[id++], {
        1: ['carrot', 'chicken essence'],
        2: ['mushroom', 'tomatoes', 'salt']
    },
    0,
    0,
    ["buff", "(durr)"]);


const french_burger = new Recipe(
    recipe_names[id++], {
        1: ['egg', 'vegetable'],
        2: ['beef', 'flour', 'tomato-sauce']
    },
    0,
    0,
    ["buff", "(durr)"]);


const veggie_pizza = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const spring_rolls = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const pineapple_charpati = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const conch_coconut = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const teriyaki_chicken = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const crab_shumai = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const beef_soup = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const shrimp_dumpling = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const eel_egg_rice = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);


const longjing_prawns = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);

const seafood_tempura = new Recipe(
    recipe_names[id++], {
        1: ['']
    },
    0,
    0,
    ["buff", "(durr)"]);

// const name = new Recipe(
//     recipe_names[id++], 
//     {
//        1: ['']
//      },
//     0, 
//     0, 
//     ["buff", "(durr)"]);