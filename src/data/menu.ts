import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // ==========================================
  // KISINIA (GRAND SHARING FEAST TRAY)
  // ==========================================
  {
    id: 'cnf-kisinia-watu-6',
    name: 'Kisinia Watu 6',
    category: 'kisinia',
    price: 70000,
    isPopular: true,
    isPackage: true,
    description:
      'Kuku wa Kitunguu, Ndizi Mzuzu, Chips Plain, Chips Masala, Kuku Makange, Kuku Fries Wali, Pilau, Sausage, Salad. The ultimate grand sharing feast tray for 6 people!',
    image: '/images/kisinia-watu-6.jpg',
    portionSize: 'Feeds 6 People',
    prepTimeMinutes: 25,
    packageIncludes: [
      'Kuku wa Kitunguu (Caramelized Onion Chicken)',
      'Ndizi Mzuzu (Golden Fried Sweet Plantains)',
      'Chips Plain & Chips Masala',
      'Kuku Makange (Sizzling Spiced Chicken)',
      'Wali Mweupe (White Rice) & Spiced Pilau',
      'Grilled Beef Sausage Slices',
      'Fresh Crisp Kachumbari Salad',
      'Trio of House Dipping Sauces',
    ],
    availableOptions: [
      {
        name: 'Rice Preference',
        choices: [
          { label: 'Half Pilau / Half Wali Mweupe', extraPrice: 0 },
          { label: 'All Spiced Pilau Rice', extraPrice: 0 },
          { label: 'All Steamed White Rice', extraPrice: 0 },
        ],
      },
    ],
  },

  // ==========================================
  // CHICKEN
  // ==========================================
  {
    id: 'cnf-chicken-single',
    name: 'ChicFill Single',
    category: 'chicken',
    price: 10000,
    isPopular: true,
    description: '4 pieces of Chickens and Fries. Crispy, hot, and freshly fried to order.',
    image: '/images/chicnfill-single.jpg',
    pieceCount: 4,
    portionSize: 'Single Meal (4 Pcs + Fries)',
    prepTimeMinutes: 12,
    availableOptions: [
      {
        name: 'Flavor / Glaze',
        choices: [
          { label: 'Classic Golden Crunch', extraPrice: 0 },
          { label: 'Signature Soy Garlic Glaze', extraPrice: 500 },
          { label: 'Fiery Arusha Spice', extraPrice: 500 },
        ],
      },
      {
        name: 'Free Dipping Sauce',
        choices: [
          { label: 'Garlic Mayo Dip', extraPrice: 0 },
          { label: 'Tomato Ketchup', extraPrice: 0 },
          { label: 'Spicy Pili Pili Sauce', extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 'cnf-half-chicken',
    name: 'ChicFill Half Chicken',
    category: 'chicken',
    price: 15000,
    isPopular: true,
    description: '8 pieces of Chicken served with sauce of your choice.',
    image: '/images/chicnfill-half-chicken.jpg',
    pieceCount: 8,
    portionSize: '8 Pieces (Serves 1-2)',
    prepTimeMinutes: 15,
    availableOptions: [
      {
        name: 'Choice of Sauce',
        choices: [
          { label: 'Mustard Honey Sauce', extraPrice: 0 },
          { label: 'Garlic Mayo Aioli', extraPrice: 0 },
          { label: 'Soy Garlic Glaze', extraPrice: 0 },
          { label: 'Fiery Arusha Hot Sauce', extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 'cnf-family-chicken',
    name: 'ChicFill Family',
    category: 'chicken',
    price: 40000,
    isPopular: true,
    isPackage: true,
    description:
      'It comes with 20 pieces of Chicken, 1 Big Fries, and 1 Big Soda of your Choice. Ideal for a group of 3-5 people who wants to share their meal.',
    image: '/images/chicnfill-family.jpg',
    pieceCount: 20,
    portionSize: 'Family Pack (3–5 People)',
    prepTimeMinutes: 20,
    packageIncludes: [
      '20 pieces of Golden Crispy Chicken',
      '1 Jumbo Box of Golden Seasoned Fries',
      '1 Big 1.5L Chilled Soda of Your Choice',
      '3 Dipping Sauces Included',
    ],
    availableOptions: [
      {
        name: 'Big Soda Choice',
        choices: [
          { label: 'Coca-Cola 1.5L', extraPrice: 0 },
          { label: 'Fanta Orange 1.5L', extraPrice: 0 },
          { label: 'Sprite 1.5L', extraPrice: 0 },
          { label: 'Stoney Tangawizi 1.5L', extraPrice: 0 },
        ],
      },
      {
        name: 'Chicken Flavor',
        choices: [
          { label: 'Classic Crispy Crunch', extraPrice: 0 },
          { label: 'Soy Garlic Tossed', extraPrice: 1000 },
          { label: 'Half Classic / Half Soy Garlic', extraPrice: 1000 },
        ],
      },
    ],
  },

  // ==========================================
  // CHICKEN SANDWICHES
  // ==========================================
  {
    id: 'cnf-sandwich-regular',
    name: 'Chic Fill Sandwich',
    category: 'sandwiches',
    price: 16000,
    isPopular: true,
    description:
      'With regular fries and the choice of your favourite souce. Tender crispy chicken breast in a toasted gourmet bun with crisp pickles and lettuce.',
    image: '/images/chicnfill-sandwich.jpg',
    portionSize: 'Burger + Regular Fries',
    prepTimeMinutes: 10,
    availableOptions: [
      {
        name: 'Choice of Favourite Sauce',
        choices: [
          { label: 'Signature Garlic Mayo', extraPrice: 0 },
          { label: 'Mustard Honey Dip', extraPrice: 0 },
          { label: 'Smoky BBQ Sauce', extraPrice: 0 },
          { label: 'Fiery Pili Pili Sauce', extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 'cnf-sandwich-big',
    name: 'Chic Fill Big Sandwiches',
    category: 'sandwiches',
    price: 25000,
    isPopular: true,
    description:
      'With regular fries and drinks of 400mls. Double loaded crispy chicken fillet sandwich stacked with melted cheese, fresh salad, fries, and cold drink.',
    image: '/images/chicnfill-big-sandwich.jpg',
    portionSize: 'Big Sandwich + Fries + 400ml Drink',
    prepTimeMinutes: 14,
    packageIncludes: [
      'Big Double-Fillet Chicken Sandwich',
      'Regular Golden Seasoned Fries',
      '400ml Chilled Beverage of Choice',
    ],
    availableOptions: [
      {
        name: 'Choice of 400ml Drink',
        choices: [
          { label: 'Chilled Coca-Cola', extraPrice: 0 },
          { label: 'Fanta Orange', extraPrice: 0 },
          { label: 'Sprite Lemon-Lime', extraPrice: 0 },
          { label: 'Stoney Tangawizi', extraPrice: 0 },
        ],
      },
      {
        name: 'Sauce in Sandwich',
        choices: [
          { label: 'Creamy Garlic Mayo', extraPrice: 0 },
          { label: 'Honey Mustard Glaze', extraPrice: 0 },
          { label: 'Spicy Fire Sauce', extraPrice: 0 },
        ],
      },
    ],
  },

  // ==========================================
  // DRUMSTICKS
  // ==========================================
  {
    id: 'cnf-drumstick-10',
    name: 'Chic Fill Drumstick 10pcs',
    category: 'drumsticks',
    price: 25000,
    isPopular: true,
    description:
      '10 pieces of seasoned juicy chicken drumsticks fried to deep-golden crunch, served with dipping sauces.',
    image: '/images/chicnfill-drumsticks.jpg',
    pieceCount: 10,
    portionSize: '10 Pcs Drumsticks Box',
    prepTimeMinutes: 15,
    availableOptions: [
      {
        name: 'Glaze or Seasoning',
        choices: [
          { label: 'Original Golden Crispy', extraPrice: 0 },
          { label: 'Soy Garlic Glazed', extraPrice: 1000 },
          { label: 'Hot & Spicy Chili Dust', extraPrice: 1000 },
        ],
      },
    ],
  },
  {
    id: 'cnf-drumstick-4',
    name: 'Chic Fill Drumstick 4pcs',
    category: 'drumsticks',
    price: 13000,
    isPopular: false,
    description:
      'Every Tuesday offer 4pcs Drumstick With regular fries Pick your favourite souce.',
    image: '/images/chicnfill-drumsticks-platter.jpg',
    pieceCount: 4,
    portionSize: '4 Drumsticks + Regular Fries',
    prepTimeMinutes: 12,
    availableOptions: [
      {
        name: 'Pick Your Favourite Sauce',
        choices: [
          { label: 'Garlic Mayo Dip', extraPrice: 0 },
          { label: 'Tomato Ketchup', extraPrice: 0 },
          { label: 'Mustard Honey Dip', extraPrice: 0 },
          { label: 'Fiery Pili Pili Dip', extraPrice: 0 },
        ],
      },
    ],
  },

  // ==========================================
  // FRIES
  // ==========================================
  {
    id: 'cnf-fries-regular',
    name: 'Regular Fries',
    category: 'fries',
    price: 3000,
    isPopular: false,
    description: 'Crispy on the outside, fluffy inside, salted with our signature seasoning blend.',
    image: '/images/chicnfill-regular-fries.jpg',
    portionSize: 'Regular Box',
    prepTimeMinutes: 6,
  },
  {
    id: 'cnf-fries-boat-box',
    name: 'Boat Box Fries',
    category: 'fries',
    price: 5000,
    isPopular: true,
    description: 'With any favourite mayonnaise ketchup. Generous boat-style basket of hot crisp fries.',
    image: '/images/chicnfill-boat-fries.jpg',
    portionSize: 'Loaded Boat Box',
    prepTimeMinutes: 7,
    availableOptions: [
      {
        name: 'Sauce Topping Choice',
        choices: [
          { label: 'Classic Mayo & Ketchup Duo', extraPrice: 0 },
          { label: 'Garlic Mayo Aioli', extraPrice: 0 },
          { label: 'Spicy Pili Pili & Mayo', extraPrice: 0 },
        ],
      },
    ],
  },

  // ==========================================
  // PIZZA
  // ==========================================
  {
    id: 'cnf-mince-pizza',
    name: 'CHIC FILL MINCE PIZZA',
    category: 'pizza',
    price: 20000,
    isPopular: true,
    description:
      '12 inches pizza ideal for 2-3 people. Fresh stone-oven baked crust layered with savory seasoned ground beef mince, melted mozzarella cheese, fresh bell peppers, and herbs.',
    image: '/images/chicnfill-mince-pizza.jpg',
    portionSize: '12 Inches (Feeds 2–3 People)',
    prepTimeMinutes: 18,
    availableOptions: [
      {
        name: 'Crust Preference',
        choices: [
          { label: 'Classic Stone-Baked Hand Tossed', extraPrice: 0 },
          { label: 'Thin & Crispy Roman Style', extraPrice: 0 },
        ],
      },
      {
        name: 'Chili Level',
        choices: [
          { label: 'Mild / Regular', extraPrice: 0 },
          { label: 'Add Jalapeño & Fresh Green Chili', extraPrice: 1000 },
        ],
      },
    ],
  },

  // ==========================================
  // BIRYANI
  // ==========================================
  {
    id: 'cnf-biryani-chicken',
    name: 'Chicken Biryani',
    category: 'biryani',
    price: 10000,
    isPopular: true,
    description:
      'Aromatic spiced basmati rice infused with cardamom and cloves, served with a tender chicken piece and rich Swahili curry sauce.',
    image: '/images/chicnfill-biryani.jpg',
    portionSize: 'Standard Plate',
    prepTimeMinutes: 8,
  },
  {
    id: 'cnf-biryani-beef',
    name: 'Beef Biryani',
    category: 'biryani',
    price: 8000,
    isPopular: false,
    description:
      'Flavorful, rich spiced basmati rice served with slow-braised tender beef cubes in aromatic masala gravy.',
    image: '/images/chicnfill-biryani.jpg',
    portionSize: 'Standard Plate',
    prepTimeMinutes: 8,
  },
  {
    id: 'cnf-biryani-kuku-nusu',
    name: 'Chicken Biryani (Kuku Nusu)',
    category: 'biryani',
    price: 15000,
    isPopular: true,
    description:
      'This Biryani is ideal for someone who wants bigger piece of chicken and more Biryani rice.',
    image: '/images/chicnfill-biryani.jpg',
    portionSize: 'Large Plate (Half Chicken)',
    prepTimeMinutes: 10,
  },
  {
    id: 'cnf-biryani-whole-chicken',
    name: 'Chicken Biryani (Whole Chicken)',
    category: 'biryani',
    price: 20000,
    isPopular: true,
    description:
      'This plate is ideal for two people who wants to share a plate together (Friends or Couple). Juice not part of the Menu.',
    image: '/images/chicnfill-biryani.jpg',
    portionSize: 'Sharing Plate for 2 Diners',
    prepTimeMinutes: 15,
  },

  // ==========================================
  // DRINKS
  // ==========================================
  {
    id: 'cnf-tropical-juice',
    name: 'Tropical Juice',
    category: 'drinks',
    price: 5000,
    isPopular: true,
    description: 'Mango, Passion mixed with pineapple Juice. 100% freshly pressed, ice chilled, and refreshing.',
    image: '/images/chicnfill-tropical-juice.jpg',
    portionSize: 'Chilled Glass / Mason Jar (400ml)',
    prepTimeMinutes: 4,
  },
  {
    id: 'cnf-mineral-water',
    name: 'Still Mineral Water',
    category: 'drinks',
    price: 1500,
    description: 'Chilled Kilimanjaro purified mineral drinking water (500ml).',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80',
    portionSize: '500ml Bottle',
    prepTimeMinutes: 1,
  },
  {
    id: 'cnf-soda-cold',
    name: 'Chilled Soft Drink',
    category: 'drinks',
    price: 2000,
    description: 'Ice-cold carbonated beverage in glass bottle (350ml).',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    portionSize: '350ml Cold Bottle',
    prepTimeMinutes: 1,
    availableOptions: [
      {
        name: 'Flavor',
        choices: [
          { label: 'Coca-Cola Original', extraPrice: 0 },
          { label: 'Stoney Tangawizi (Ginger Heat)', extraPrice: 0 },
          { label: 'Fanta Orange', extraPrice: 0 },
          { label: 'Sprite (Lemon-Lime)', extraPrice: 0 },
        ],
      },
    ],
  },
];
