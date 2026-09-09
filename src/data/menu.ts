import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // ==========================================
  // SIGNATURE PACKAGES & COMBOS (INSTAGRAM FAVOURITES)
  // ==========================================
  {
    id: 'pkg-chic-pizza-family',
    name: 'Chic-N-Pizza Mega Family Feast',
    category: 'packages',
    price: 58000,
    isPopular: true,
    isPackage: true,
    description:
      'The ultimate crowd-pleaser: 16 pcs of our signature Soy Garlic chicken drumettes & wings, paired with a Large Loaded Beef Pepperoni Pizza, 2 large golden fries, 3 house dipping sauces, and a 1.5L chilled beverage.',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Feeds 4–6 Diners',
    prepTimeMinutes: 22,
    packageIncludes: [
      '16 pcs Soy Garlic Chicken',
      'Large Beef Pepperoni Pizza',
      '2x Large Golden Fries',
      '3x Signature Sauces (Garlic, Mustard Honey, Chili)',
      '1.5L Chilled Soft Drink',
    ],
    availableOptions: [
      {
        name: 'Chicken Flavor Glaze',
        choices: [
          { label: 'Signature Soy Garlic (Sweet & Savory)', extraPrice: 0 },
          { label: 'Mustard Honey Crunch', extraPrice: 0 },
          { label: 'Half Soy Garlic / Half Spicy Arusha', extraPrice: 1500 },
        ],
      },
      {
        name: 'Beverage Choice',
        choices: [
          { label: 'Coca-Cola 1.5L', extraPrice: 0 },
          { label: 'Fanta Orange 1.5L', extraPrice: 0 },
          { label: 'Sprite 1.5L', extraPrice: 0 },
          { label: 'Stoney Tangawizi 1.5L', extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 'pkg-solo-crunch-slice',
    name: 'Solo Crunch & Slice Box',
    category: 'packages',
    price: 22000,
    isPopular: true,
    isPackage: true,
    description:
      'The signature Chic-N-Fill double-header: 3 pcs golden crispy chicken, 1 thick hot slice of stone-baked pepperoni pizza, crisp french fries, garlic aioli, and a chilled soda.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Single Diner Box',
    prepTimeMinutes: 14,
    packageIncludes: [
      '3 pcs Crispy Fried Chicken',
      '1 Hot Slice Pepperoni Pizza',
      'Golden Regular Fries',
      '1 Garlic Dip',
      '1 Chilled 350ml Soda',
    ],
    availableOptions: [
      {
        name: 'Chicken Glaze',
        choices: [
          { label: 'Classic Crunchy (No Glaze)', extraPrice: 0 },
          { label: 'Soy Garlic Glazed', extraPrice: 1000 },
          { label: 'Mustard Honey Glazed', extraPrice: 1000 },
        ],
      },
      {
        name: 'Soda Selection',
        choices: [
          { label: 'Coca-Cola (Cold)', extraPrice: 0 },
          { label: 'Stoney Tangawizi', extraPrice: 0 },
          { label: 'Sprite', extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 'pkg-duo-feast',
    name: 'Duo Feast Package (Chicken + Pizza)',
    category: 'packages',
    price: 39000,
    isPopular: true,
    isPackage: true,
    description:
      'Engineered for two: 8 pcs Honey Mustard or Soy Garlic chicken wings, 1 Medium BBQ Chicken Pizza, large fries, 2 dips, and 2 cold drinks.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Serves 2 Diners',
    prepTimeMinutes: 18,
    packageIncludes: [
      '8 pcs Chicken Wings & Drumettes',
      'Medium BBQ Chicken Pizza',
      '1 Large Golden Fries',
      '2 Dips',
      '2 Cold 350ml Sodas',
    ],
    availableOptions: [
      {
        name: 'Chicken Coating',
        choices: [
          { label: 'Mustard Honey Crunch', extraPrice: 0 },
          { label: 'Soy Garlic Classic', extraPrice: 0 },
          { label: 'Spicy Hot Crunch', extraPrice: 1000 },
        ],
      },
    ],
  },
  {
    id: 'pkg-wings-party-platter',
    name: 'Party Platter: 20 Pcs Wings & Large Pizza',
    category: 'packages',
    price: 64000,
    isPopular: false,
    isPackage: true,
    description:
      'Game day & celebration special: 20 pcs assorted crispy wings (10 Soy Garlic + 10 Fiery Arusha Crunch) with a Large Loaded Cheese & Pepperoni Pizza and trio sauces.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&fit=crop',
    portionSize: 'Serves 4–6 People',
    prepTimeMinutes: 25,
    packageIncludes: [
      '20 pcs Wings (Soy Garlic & Fiery Crunch)',
      'Large Loaded Pizza (Choice)',
      '3 Signature Sauces',
      'Large Crinkle Fries',
    ],
  },
  {
    id: 'pkg-arusha-lunch-express',
    name: 'Arusha Express Lunch Special',
    category: 'packages',
    price: 12000,
    isPopular: true,
    isPackage: true,
    description:
      'Quick lunch rush hero on Pangani Street: 2 pcs crispy fried chicken drumsticks, seasoned french fries, and a cold soft drink or Tangawizi.',
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Lunch Special',
    prepTimeMinutes: 10,
    packageIncludes: [
      '2 pcs Golden Fried Chicken',
      'Seasoned French Fries',
      'Chilled Soft Drink',
    ],
  },

  // ==========================================
  // FRIED CHICKEN VARIETIES (SIGNATURE ITEMS)
  // ==========================================
  {
    id: 'cnf-soy-garlic-16',
    name: 'Chic Fill Soy Garlic (16 pcs)',
    category: 'chicken',
    price: 38000,
    pieceCount: 16,
    isPopular: true,
    description:
      'Customer top pick: 16 pcs of tender chicken drumettes and wings tossed in our savory-sweet artisanal soy garlic glaze with roasted sesame seeds.',
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80',
    portionSize: '16 pcs Bucket',
    prepTimeMinutes: 15,
    availableOptions: [
      {
        name: 'Dip Option',
        choices: [
          { label: 'Garlic Aioli', extraPrice: 0 },
          { label: 'Extra Soy Garlic Glaze', extraPrice: 1500 },
          { label: 'Honey Mustard Dip', extraPrice: 1500 },
        ],
      },
    ],
  },
  {
    id: 'cnf-soy-garlic-8',
    name: 'Chic Fill Soy Garlic (8 pcs)',
    category: 'chicken',
    price: 22000,
    pieceCount: 8,
    isPopular: true,
    description:
      '8 pcs freshly fried crispy wings coated in caramelized soy garlic reduction and toasted sesame crunch.',
    image:
      'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1000&q=80',
    portionSize: '8 pcs Box',
    prepTimeMinutes: 12,
  },
  {
    id: 'cnf-mustard-honey-8',
    name: 'Chic-N-Fill Mustard Honey (8 pcs)',
    category: 'chicken',
    price: 24000,
    pieceCount: 8,
    isPopular: true,
    description:
      'Golden crunchy chicken glazed with our vibrant sweet honey and tangy mild mustard sauce. Crisp skin with juicy tender meat.',
    image:
      'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?auto=format&fit=crop&w=1000&q=80',
    portionSize: '8 pcs Box',
    prepTimeMinutes: 12,
  },
  {
    id: 'cnf-crispy-chicken-4',
    name: 'Classic Crispy Fried Chicken (4 pcs)',
    category: 'chicken',
    price: 15000,
    pieceCount: 4,
    isPopular: false,
    description:
      'Traditional Southern double-dredged golden fried chicken pieces (thighs and drumsticks) with signature herb crunch.',
    image:
      'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1000&q=80',
    portionSize: '4 pcs Plate',
    prepTimeMinutes: 12,
  },
  {
    id: 'cnf-fiery-wings-8',
    name: 'Fiery Arusha Hot Wings (8 pcs)',
    category: 'chicken',
    price: 23000,
    pieceCount: 8,
    isSpicy: true,
    description:
      'Crispy wings tossed in fiery chili oil, smoked paprika, and lime zest. For heat lovers in Arusha!',
    image:
      'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1000&q=80',
    portionSize: '8 pcs Spicy Box',
    prepTimeMinutes: 12,
  },

  // ==========================================
  // STONE-BAKED PIZZAS
  // ==========================================
  {
    id: 'pza-loaded-pepperoni',
    name: 'Loaded Beef Pepperoni Pizza',
    category: 'pizza',
    price: 28000,
    isPopular: true,
    description:
      'Stone-baked thin crust pizza with Italian tomato base, melted mozzarella cheese, and generous rounds of premium beef pepperoni.',
    image:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Large 12-inch (8 Slices)',
    prepTimeMinutes: 18,
    availableOptions: [
      {
        name: 'Size',
        choices: [
          { label: 'Large 12" (8 Slices)', extraPrice: 0 },
          { label: 'Medium 10" (6 Slices)', extraPrice: -6000 },
          { label: 'Single Mega Slice', extraPrice: -22000 },
        ],
      },
      {
        name: 'Extra Topping',
        choices: [
          { label: 'Standard Cheese', extraPrice: 0 },
          { label: 'Double Mozzarella', extraPrice: 4000 },
          { label: 'Fresh Jalapeños', extraPrice: 2000 },
        ],
      },
    ],
  },
  {
    id: 'pza-bbq-chicken',
    name: 'Chic-N-BBQ Chicken Pizza',
    category: 'pizza',
    price: 29000,
    isPopular: true,
    description:
      'Tender pulled chicken tossed in smoky BBQ sauce, sweet red onions, mozzarella, and a drizzle of garlic sauce on charred crust.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Large 12-inch (8 Slices)',
    prepTimeMinutes: 18,
  },
  {
    id: 'pza-mushroom-cheese',
    name: 'Button Mushroom & Mozzarella Pizza',
    category: 'pizza',
    price: 26000,
    isPopular: false,
    description:
      'Sautéed button mushrooms, aromatic oregano, garlic oil drizzle, rich tomato marinara, and gooey melted mozzarella.',
    image:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Large 12-inch',
    prepTimeMinutes: 16,
  },

  // ==========================================
  // FRIES & SIDES
  // ==========================================
  {
    id: 'cnf-fries-regular',
    name: 'Golden French Fries',
    category: 'fries-sides',
    price: 5000,
    isPopular: true,
    description:
      'Crispy on the outside, fluffy inside, salted with our signature seasoning blend.',
    image:
      'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Regular Box',
    prepTimeMinutes: 6,
    availableOptions: [
      {
        name: 'Size Upgrade',
        choices: [
          { label: 'Regular Portion', extraPrice: 0 },
          { label: 'Large Share Portion', extraPrice: 3000 },
        ],
      },
    ],
  },
  {
    id: 'cnf-peri-fries',
    name: 'Peri-Peri Loaded Fries',
    category: 'fries-sides',
    price: 8000,
    isSpicy: true,
    description:
      'Crispy golden fries tossed in zesty peri-peri spice dust and served with a side of house garlic mayo.',
    image:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=1000&q=80',
    portionSize: 'Loaded Box',
    prepTimeMinutes: 7,
  },
  {
    id: 'cnf-onion-rings',
    name: 'Crispy Battered Onion Rings',
    category: 'fries-sides',
    price: 6500,
    isPopular: false,
    description:
      'Thick sweet white onion rings dipped in seasoned batter and fried until golden and shatteringly crunchy.',
    image:
      'https://images.unsplash.com/photo-1639024471287-032f66e55c3c?auto=format&fit=crop&w=1000&q=80',
    portionSize: '10 pcs Ring Box',
    prepTimeMinutes: 8,
  },

  // ==========================================
  // SAUCES & DIPS
  // ==========================================
  {
    id: 'cnf-dip-soy-garlic',
    name: 'Signature Soy Garlic Glaze Tub',
    category: 'sauces-dips',
    price: 2500,
    description:
      'Our house-cooked caramelized soy reduction with roasted garlic and sesame seeds.',
    image:
      'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80',
    portionSize: '60ml Dipping Cup',
    prepTimeMinutes: 1,
  },
  {
    id: 'cnf-dip-mustard-honey',
    name: 'Chic-N-Fill Mustard Honey Dip',
    category: 'sauces-dips',
    price: 2500,
    description:
      'Smooth sweet wild honey whipped with whole grain tangy yellow mustard.',
    image:
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=600&q=80',
    portionSize: '60ml Dipping Cup',
    prepTimeMinutes: 1,
  },
  {
    id: 'cnf-dip-garlic-aioli',
    name: 'Creamy Garlic Aioli',
    category: 'sauces-dips',
    price: 2500,
    description:
      'Silky mayonnaise infused with roasted garlic, lemon juice, and black pepper.',
    image:
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80',
    portionSize: '60ml Dipping Cup',
    prepTimeMinutes: 1,
  },

  // ==========================================
  // DRINKS & JUICES
  // ==========================================
  {
    id: 'cnf-passion-juice',
    name: 'Fresh Arusha Passion Fruit Juice',
    category: 'drinks',
    price: 4000,
    isPopular: true,
    description:
      'Freshly squeezed Tanzanian passion fruit juice, lightly sweetened and served ice-cold.',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    portionSize: '400ml Chilled Bottle',
    prepTimeMinutes: 2,
  },
  {
    id: 'cnf-soda-cold',
    name: 'Chilled Soft Drink (Coke, Tangawizi, Fanta)',
    category: 'drinks',
    price: 2000,
    description:
      'Ice-cold bottled soda: Coca-Cola, Stoney Tangawizi, Fanta Passion/Orange, Sprite.',
    image:
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    portionSize: '350ml Glass Bottle',
    prepTimeMinutes: 1,
    availableOptions: [
      {
        name: 'Flavor',
        choices: [
          { label: 'Stoney Tangawizi (Ginger Heat)', extraPrice: 0 },
          { label: 'Coca-Cola Original', extraPrice: 0 },
          { label: 'Fanta Orange', extraPrice: 0 },
          { label: 'Sprite (Lemon-Lime)', extraPrice: 0 },
        ],
      },
    ],
  },
  {
    id: 'cnf-water',
    name: 'Still Mineral Water',
    category: 'drinks',
    price: 1500,
    description: 'Chilled Kilimanjaro purified mineral drinking water.',
    image:
      'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80',
    portionSize: '500ml Bottle',
    prepTimeMinutes: 1,
  },
];
