const menuData = [
  {
    category: "Burgers",
    items: [
      {
        id: 1,
        name: "Classic Beef Burger",
        description:
          "Juicy beef patty, lettuce, tomato, onions, pickles, cheddar cheese, and house sauce",
        price: 8.99,
        image: "/assets/images/menu/ClassicChickenBurger.png", // Direct path
        // image: burger,
      },
      {
        id: 2,
        name: "Cheeseburger Deluxe",
        description:
          "Double beef patty, melted cheddar cheese, lettuce, tomato, and special burger sauce",
        price: 10.99,
        image: "/assets/images/menu/ClassicChickenBurger.png", // Direct path
      },
      {
        id: 3,
        name: "Chicken Grilled Burger",
        description:
          "Grilled chicken breast, mayo, lettuce, tomato, and pickles",
        price: 9.49,
        image: "/assets/images/menu/ClassicChickenBurger.png", // Direct path
      },
      {
        id: 4,
        name: "Chicken Grilled Burger",
        description:
          "Grilled chicken breast, mayo, lettuce, tomato, and pickles",
        price: 9.49,
        image: "/assets/images/menu/ClassicChickenBurger.png", // Direct path
      },
      {
        id: 5,
        name: "Chicken Grilled Burger",
        description:
          "Grilled chicken breast, mayo, lettuce, tomato, and pickles",
        price: 9.49,
        image: "/assets/images/menu/ClassicChickenBurger.png", // Direct path
      },
      {
        id: 6,
        name: "Chicken Grilled Burger",
        description:
          "Grilled chicken breast, mayo, lettuce, tomato, and pickles",
        price: 9.49,
        image: "/assets/images/menu/ClassicChickenBurger.png", // Direct path
      },
      {
        id: 7,
        name: "Chicken Grilled Burger",
        description:
          "Grilled chicken breast, mayo, lettuce, tomato, and pickles",
        price: 9.49,
        image: "/assets/images/menu/ClassicChickenBurger.png", // Direct path
      },
    ],
  },
  {
    category: "Ice Cream",
    items: [
      {
        id: 8,
        name: "Vanilla Classic Scoop",
        description:
          "Smooth vanilla ice cream with optional toppings: chocolate syrup, sprinkles, nuts",
        price: 3.99,
        image: "/assets/images/menu/ICECREAM.jpeg", // Direct path
      },
      {
        id: 9,
        name: "Chocolate Fudge Brownie",
        description:
          "Rich chocolate ice cream loaded with fudge chunks and brownie pieces",
        price: 4.49,
        image: "/assets/images/menu/ICECREAM.jpeg", // Direct path
      },
      {
        id: 10,
        name: "Strawberry Delight",
        description:
          "Fresh strawberry ice cream made with real strawberry chunks",
        price: 4.29,
        image: "/assets/images/menu/ICECREAM.jpeg", // Direct path
      },
      {
        id: 26,
        name: "Strawberry Delight",
        description:
          "Fresh strawberry ice cream made with real strawberry chunks",
        price: 4.29,
        image: "/assets/images/menu/ICECREAM.jpeg", // Direct path
      },
      {
        id: 27,
        name: "Strawberry Delight",
        description:
          "Fresh strawberry ice cream made with real strawberry chunks",
        price: 4.29,
        image: "/assets/images/menu/ICECREAM.jpeg", // Direct path
      },
      {
        id: 28,
        name: "Strawberry Delight",
        description:
          "Fresh strawberry ice cream made with real strawberry chunks",
        price: 4.29,
        image: "/assets/images/menu/ICECREAM.jpeg", // Direct path
      },
    ],
  },
  {
    category: "Pizzas",
    items: [
      {
        id: 11,
        name: "Margherita Pizza",
        description:
          "Classic pizza with fresh tomatoes, mozzarella cheese, and basil",
        price: 12.99,
        image: "/assets/images/menu/pizza.jpg", // Direct path
      },
      {
        id: 12,
        name: "Pepperoni Pizza",
        description: "Loaded with pepperoni slices and mozzarella cheese",
        price: 14.99,
        image: "/assets/images/menu/pizza.jpg", // Direct path
      },
      {
        id: 13,
        name: "BBQ Chicken Pizza",
        description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
        price: 13.99,
        image: "/assets/images/menu/pizza.jpg", // Direct path
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        id: 14,
        name: "Coca-Cola",
        description: "Refreshing can of Coca-Cola",
        price: 1.99,
        image: "/assets/images/menu/colddrink.png", // Direct path
      },
      {
        id: 15,
        name: "Lemonade",
        description: "Freshly squeezed lemonade with a hint of mint",
        price: 2.99,
        image: "/assets/images/menu/LEMONADE.jpeg", // Direct path
      },
      {
        id: 16,
        name: "Iced Coffee",
        description: "Chilled coffee with milk and ice",
        price: 3.49,
        image: "/assets/images/menu/colddrink.png", // Direct path
      },
    ],
  },
  {
    category: "Pasta",
    items: [
      {
        id: 17,
        name: "Spaghetti Carbonara",
        description:
          "Creamy carbonara sauce with bacon, parmesan, and black pepper",
        price: 11.99,
        image: "/assets/images/menu/pasta.jpeg",
      },
      {
        id: 18,
        name: "Fettuccine Alfredo",
        description:
          "Classic Alfredo sauce with garlic, butter, and parmesan cheese",
        price: 12.49,
        image: "/assets/images/menu/pasta.jpeg",
      },
      {
        id: 19,
        name: "Penne Arrabiata",
        description: "Spicy tomato sauce with garlic and red chili flakes",
        price: 10.99,
        image: "/assets/images/menu/pasta.jpeg",
      },
    ],
  },
  {
    category: "Salads",
    items: [
      {
        id: 20,
        name: "Caesar Salad",
        description:
          "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing",
        price: 8.99,
        image: "/assets/images/menu/salaad.jpeg",
      },
      {
        id: 21,
        name: "Greek Salad",
        description:
          "Fresh cucumbers, tomatoes, olives, feta cheese, and olive oil",
        price: 9.49,
        image: "/assets/images/menu/salaad.jpeg",
      },
      {
        id: 22,
        name: "Caprese Salad",
        description:
          "Sliced tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze",
        price: 9.99,
        image: "/assets/images/menu/salaad.jpeg",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 23,
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a gooey molten center, served with vanilla ice cream",
        price: 6.99,
        image: "/assets/images/menu/dessert.jpeg",
      },
      {
        id: 24,
        name: "Cheesecake",
        description:
          "Creamy New York-style cheesecake with a graham cracker crust",
        price: 5.99,
        image: "/assets/images/menu/dessert.jpeg",
      },
      {
        id: 25,
        name: "Tiramisu",
        description:
          "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream",
        price: 6.49,
        image: "/assets/images/menu/dessert.jpeg",
      },
    ],
  },
];
export { menuData };
