/* Week 8 · Capstone 2: the data of the four options, exactly as in the capstone texts.
 * ONE source for every week 8 picture, so no page can disagree with another or with the text.
 * Loaded before the page script:  <script src="../options.js"></script>   then use window.CAP2.
 * Prices are text ("5.50"), in the order of the three sizes. To add them up, use CAP2.cents("5.50") and
 * CAP2.money(cents): never add them as decimals.
 * If a capstone text changes, change it HERE and nowhere else. */
window.CAP2 = {
  order: ["deli", "pizza", "taco", "custom"],

  /* the learner's option, remembered across the week 8 pages (same key as the class diagram guide) */
  KEY: "hub-cap2-diagram-guide-4-opt",
  saved: function () { try { var o = localStorage.getItem(this.KEY); return this.options[o] ? o : "deli"; } catch (e) { return "deli"; } },
  save: function (o) { try { localStorage.setItem(this.KEY, o); } catch (e) {} },

  cents: function (text) { return Math.round(parseFloat(text) * 100); },
  money: function (cents) { return (cents / 100).toFixed(2); },

  /* the same in every option */
  drink: { sizes: ["Small", "Medium", "Large"], prices: ["2.00", "2.50", "3.00"] },
  screens: {
    home: ["1) New Order", "0) Exit"],
    checkout: ["1) Confirm", "0) Cancel"]
  },

  options: {
    deli: {
      name: "The Deli", shop: "DELI-cious",
      item: "sandwich", items: "sandwiches", Item: "Sandwich",
      typeWord: "bread", typeQuestion: "Select your bread:", sizeQuestion: "Sandwich size:",
      types: ["white", "wheat", "rye", "wrap"],
      sizes: ["4\"", "8\"", "12\""], sizePrices: ["5.50", "7.00", "8.50"],
      premiumA: { label: "Meats", question: "Meat:", one: "meat", list: ["steak", "ham", "salami", "roast beef", "chicken", "bacon"], prices: ["1.00", "2.00", "3.00"], extraLabel: "Extra Meat", extra: ["0.50", "1.00", "1.50"] },
      premiumB: { label: "Cheese", question: "Cheese:", one: "cheese", list: ["american", "provolone", "cheddar", "swiss"], prices: ["0.75", "1.50", "2.25"], extraLabel: "Extra Cheese", extra: ["0.30", "0.60", "0.90"] },
      regular: ["lettuce", "peppers", "onions", "tomatoes", "jalapeños", "cucumbers", "pickles", "guacamole", "mushrooms"],
      sauces: ["mayo", "mustard", "ketchup", "italian", "thousand island", "vinaigrette", "ranch"],
      special: { question: "Would you like the sandwich toasted?", yes: "toasted" },
      flavors: ["cola", "lemonade", "iced tea", "water"],
      third: { name: "Chips", menu: "3) Add Chips", price: "1.50", typeWord: "chip type", types: ["classic", "bbq", "sour cream", "salt and vinegar"], screen: "Add Chips - select the chip type, then go back to the order screen" },
      orderMenu: ["1) Add Sandwich", "2) Add Drink", "3) Add Chips", "4) Checkout", "0) Cancel Order"],
      emptyRule: "If a customer places an order with 0 sandwiches, they must purchase chips or a drink. An empty order cannot be checked out.",
      signature: [
        { name: "BLT", size: 1, type: "white", A: ["bacon"], B: ["cheddar"], regular: ["lettuce", "tomatoes"], sauces: ["ranch"], special: true },
        { name: "Philly Cheese Steak", size: 1, type: "white", A: ["steak"], B: ["american"], regular: ["peppers"], sauces: ["mayo"], special: true }
      ]
    },
    pizza: {
      name: "The Pizza", shop: "PIZZA-licious",
      item: "pizza", items: "pizzas", Item: "Pizza",
      typeWord: "crust", typeQuestion: "Select your crust:", sizeQuestion: "Pizza size:",
      types: ["thin", "regular", "thick", "cauliflower"],
      sizes: ["8\"", "12\"", "16\""], sizeNames: ["Personal 8\"", "Medium 12\"", "Large 16\""], sizePrices: ["8.50", "12.00", "16.50"],
      premiumA: { label: "Meats", question: "Meat:", one: "meat", list: ["pepperoni", "sausage", "ham", "bacon", "chicken", "meatball"], prices: ["1.00", "2.00", "3.00"], extraLabel: "Extra Meat", extra: ["0.50", "1.00", "1.50"] },
      premiumB: { label: "Cheese", question: "Cheese:", one: "cheese", list: ["mozzarella", "parmesan", "ricotta", "goat cheese", "feta"], prices: ["0.75", "1.50", "2.25"], extraLabel: "Extra Cheese", extra: ["0.30", "0.60", "0.90"] },
      regular: ["onions", "mushrooms", "bell peppers", "olives", "tomatoes", "spinach", "basil", "pineapple", "anchovies"],
      sauces: ["marinara", "alfredo", "pesto", "bbq", "buffalo", "olive oil"],
      special: { question: "Would you like the pizza with stuffed crust?", yes: "stuffed crust" },
      flavors: ["cola", "lemonade", "iced tea", "water"],
      third: { name: "Garlic Knots", menu: "3) Add Garlic Knots", price: "1.50", typeWord: null, types: [], screen: "Add Garlic Knots - adds one order of garlic knots, then goes back to the order screen" },
      orderMenu: ["1) Add Pizza", "2) Add Drink", "3) Add Garlic Knots", "4) Checkout", "0) Cancel Order"],
      emptyRule: "If a customer places an order with 0 pizzas, they must purchase garlic knots or a drink. An empty order cannot be checked out.",
      signature: [
        { name: "Margherita", size: 1, type: "regular", A: [], B: ["mozzarella"], regular: ["tomatoes", "basil"], sauces: ["marinara", "olive oil"], special: false },
        { name: "Veggie", size: 0, type: "regular", A: [], B: ["mozzarella"], regular: ["bell peppers", "spinach", "olives", "onions"], sauces: ["marinara"], special: false }
      ]
    },
    taco: {
      name: "The Taco", shop: "TACO-licious",
      item: "taco", items: "tacos", Item: "Taco",
      typeWord: "shell", typeQuestion: "Select your shell:", sizeQuestion: "Taco size:",
      types: ["corn", "flour", "hard shell", "bowl"],
      sizes: ["Single", "3-Taco", "Burrito"], sizeNames: ["Single Taco", "3-Taco Plate", "Burrito"], sizePrices: ["3.50", "9.00", "8.50"],
      sizeNote: "A 3-Taco Plate is one item: its three tacos share the same shell and the same toppings, and it is priced once. Any shell can be chosen with any size.",
      premiumA: { label: "Meats", question: "Meat:", one: "meat", list: ["carne asada", "al pastor", "carnitas", "pollo", "chorizo", "pescado"], prices: ["1.00", "2.00", "3.00"], extraLabel: "Extra Meat", extra: ["0.50", "1.00", "1.50"] },
      premiumB: { label: "Cheese", question: "Cheese:", one: "cheese", list: ["queso fresco", "oaxaca", "cotija", "cheddar"], prices: ["0.75", "1.50", "2.25"], extraLabel: "Extra Cheese", extra: ["0.30", "0.60", "0.90"] },
      regular: ["lettuce", "cilantro", "onions", "tomatoes", "jalapeños", "radishes", "pico de gallo", "guacamole", "corn", "lime wedges"],
      sauces: ["salsa verde", "salsa roja", "chipotle", "habanero", "diablo"],
      special: { question: "Would you like the taco/burrito covered in salsa and queso?", yes: "covered in salsa and queso" },
      flavors: ["cola", "lemonade", "iced tea", "water"],
      third: { name: "Chips & Salsa", menu: "3) Add Chips & Salsa", price: "1.50", typeWord: "salsa type", types: ["mild salsa", "medium salsa", "hot salsa"], screen: "Add Chips & Salsa - select the salsa type, then go back to the order screen" },
      orderMenu: ["1) Add Taco", "2) Add Drink", "3) Add Chips & Salsa", "4) Checkout", "0) Cancel Order"],
      emptyRule: "If a customer places an order with 0 tacos, they must purchase chips & salsa or a drink. An empty order cannot be checked out.",
      signature: [
        { name: "Street Tacos", size: 1, type: "corn", A: ["carne asada"], B: [], regular: ["onions", "cilantro", "lime wedges"], sauces: ["salsa verde"], special: false },
        { name: "Super Burrito", size: 2, type: "flour", A: ["carnitas"], B: ["cheddar"], regular: ["pico de gallo", "lettuce", "tomatoes"], sauces: [], special: true }
      ]
    },
    custom: {
      name: "Custom", shop: "your own shop",
      item: "item", items: "items", Item: "Item",
      typeWord: "type", typeQuestion: "Select your type:", sizeQuestion: "Item size:",
      types: ["Type 1", "Type 2", "Type 3", "Type 4"],
      sizes: ["Size 1", "Size 2", "Size 3"], sizePrices: ["3.50", "7.50", "9.50"],
      premiumA: { label: "Premium Toppings A", question: "Premium topping A:", one: "Premium A topping", list: ["Premium A 1", "Premium A 2", "Premium A 3", "Premium A 4", "Premium A 5", "Premium A 6"], prices: ["1.00", "2.00", "3.00"], extraLabel: "Extra Premium A", extra: ["0.50", "1.00", "1.50"] },
      premiumB: { label: "Premium Toppings B", question: "Premium topping B:", one: "Premium B topping", list: ["Premium B 1", "Premium B 2", "Premium B 3", "Premium B 4"], prices: ["0.75", "1.50", "2.25"], extraLabel: "Extra Premium B", extra: ["0.30", "0.60", "0.90"] },
      regular: ["Regular 1", "Regular 2", "Regular 3", "Regular 4", "Regular 5", "Regular 6", "Regular 7", "Regular 8", "Regular 9"],
      sauces: ["Sauce 1", "Sauce 2", "Sauce 3", "Sauce 4", "Sauce 5", "Sauce 6"],
      special: { question: "Your special option, asked as a yes or no question (like: toasted?)", yes: "with the special option" },
      flavors: ["Flavor 1", "Flavor 2", "Flavor 3", "Flavor 4"],
      third: { name: "Snack", menu: "3) Add Snack", price: "1.50", typeWord: "snack type", types: ["Snack 1", "Snack 2", "Snack 3"], screen: "Add Snack - select the snack type, then go back to the order screen" },
      orderMenu: ["1) Add Item", "2) Add Drink", "3) Add Snack", "4) Checkout", "0) Cancel Order"],
      emptyRule: "If a customer places an order with 0 items, they must purchase a snack or a drink. An empty order cannot be checked out.",
      signature: []
    }
  }
};
