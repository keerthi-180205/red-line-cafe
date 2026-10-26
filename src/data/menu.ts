export type DietaryType = 'veg' | 'non-veg' | 'beverage';

export interface MenuCategory {
  id: string;
  name: string;
  badgeNumber: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  imageAlt: string;
  description: string;
  dietary: DietaryType;
  badge?: string;
  portion?: string;
  isAvailable: boolean;
  isFeatured: boolean;
  isSampleData?: boolean;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "plate-items",
    name: "PLATE ITEMS",
    badgeNumber: "01",
    subtitle: "01 / SHARING & BITES",
    description: "Snacks, nuggets, wedges & loaded quick plates.",
    image: "/images/cat-plate-items.jpg",
    imageAlt: "Assortment of crispy plate snack items, nuggets, and herb crinkle fries on slate platter"
  },
  {
    id: "maggi-special",
    name: "MAGGI SPECIAL",
    badgeNumber: "02",
    subtitle: "02 / DESI NOSTALGIA",
    description: "Classic & spicy cafe Maggi noodles bowls.",
    image: "/images/cat-maggi-special.jpg",
    imageAlt: "Steaming hot desi Maggi noodles with chili spices and herbs in matte black cafe bowl"
  },
  {
    id: "burgers",
    name: "BURGERS",
    badgeNumber: "03",
    subtitle: "03 / SIGNATURE BUNS",
    description: "Crispy, juicy & grilled loaded signature burgers.",
    image: "/images/cat-burgers.jpg",
    imageAlt: "Gourmet stacked chicken burger with melted cheddar and signature sauce on toasted bun"
  },
  {
    id: "beverages",
    name: "BEVERAGES",
    badgeNumber: "04",
    subtitle: "04 / CHILL & SHAKES",
    description: "Crushes, thick shakes, coolers & cold drinks.",
    image: "/images/cat-beverages.jpg",
    imageAlt: "Chilled cafe milkshakes, cold coffee, and thick shakes with ice and froth"
  }
];

export const menuItems: MenuItem[] = [
  // FEATURED ITEMS (Homepage & Full Menu)
  {
    id: "chicken-nuggets",
    name: "Chicken Nuggets",
    category: "plate-items",
    price: 120,
    image: "/images/chicken-nuggets.jpg",
    imageAlt: "Golden crunchy bite-sized chicken nuggets fried to perfection with dipping sauce",
    description: "Golden crunchy bite-sized delights fried to tender perfection, served with house special dip.",
    dietary: "non-veg",
    badge: "HOT SELLER",
    portion: "6 Pcs • Non-Veg",
    isAvailable: true,
    isFeatured: true
  },
  {
    id: "french-fries",
    name: "French Fries",
    category: "plate-items",
    price: 90,
    image: "/images/french-fries.jpg",
    imageAlt: "Crispy salted golden french fries seasoned with herb salt",
    description: "Crispy salted golden classic fries tossed in light seasoned herb salt, always sizzling hot.",
    dietary: "veg",
    badge: "CLASSIC",
    portion: "Regular • Veg",
    isAvailable: true,
    isFeatured: true
  },
  {
    id: "potato-wedges",
    name: "Potato Wedges",
    category: "plate-items",
    price: 110,
    image: "/images/potato-wedges.jpg",
    imageAlt: "Thick cut seasoned herb potato wedges with crisp crust",
    description: "Seasoned herb potato wedges with a crisp exterior and soft fluffy center.",
    dietary: "veg",
    portion: "Herbed • Veg",
    isAvailable: true,
    isFeatured: true
  },
  {
    id: "plain-maggi",
    name: "Plain Maggi",
    category: "maggi-special",
    price: 60,
    image: "/images/plain-maggi.jpg",
    imageAlt: "Comforting classic hot street-style Maggi noodles in cafe bowl",
    description: "Comforting classic hot street-style Maggi noodles spiced to nostalgic perfection.",
    dietary: "veg",
    badge: "COMFORT FOOD",
    portion: "Hot Bowl • Veg",
    isAvailable: true,
    isFeatured: true
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "burgers",
    price: 149,
    image: "/images/chicken-burger.jpg",
    imageAlt: "Juicy chicken burger with melted cheddar and fresh lettuce on brioche bun",
    description: "Signature juicy chicken patty, melted cheddar, crisp greens on a buttery toasted bun.",
    dietary: "non-veg",
    badge: "CHEF'S PICK",
    portion: "Brioche • Non-Veg",
    isAvailable: true,
    isFeatured: true
  },
  {
    id: "oreo-crush",
    name: "Oreo Crush",
    category: "beverages",
    price: 110,
    image: "/images/oreo-crush.jpg",
    imageAlt: "Thick creamy blended chocolate Oreo shake with whipped topping and biscuit crumb",
    description: "Thick creamy blended chocolate Oreo shake with velvety swirls and crunchy biscuit crumb.",
    dietary: "beverage",
    badge: "CHILLED",
    portion: "350ml • Beverage",
    isAvailable: true,
    isFeatured: true
  },

  // ADDITIONAL MENU ITEMS (Complete Menu Range)
  {
    id: "loaded-crunch-burger",
    name: "Loaded Crunch Chicken Burger",
    category: "burgers",
    price: 149,
    image: "/images/hero-burger.jpg",
    imageAlt: "Loaded crunch chicken burger stacked high with melting golden cheddar cheese and spicy red sauce",
    description: "Crispy double-crunch fillet stacked with molten cheddar cheese, house red sauce, sliced tomato, and crisp iceberg.",
    dietary: "non-veg",
    badge: "CAFE SIGNATURE",
    portion: "Large • Non-Veg",
    isAvailable: true,
    isFeatured: false,
    isSampleData: true
  },
  {
    id: "peri-peri-fries",
    name: "Peri-Peri Seasoned Fries",
    category: "plate-items",
    price: 110,
    image: "/images/french-fries.jpg",
    imageAlt: "Crisp french fries tossed generously in fiery peri peri spice mix",
    description: "Golden fries dusted in zesty, tangy African bird's eye chili seasoning with garlic aioli.",
    dietary: "veg",
    portion: "Regular • Veg",
    isAvailable: true,
    isFeatured: false,
    isSampleData: true
  },
  {
    id: "cheese-maggi",
    name: "Cheese Burst Maggi",
    category: "maggi-special",
    price: 85,
    image: "/images/cat-maggi-special.jpg",
    imageAlt: "Hot Maggi noodles layered with gooey melted processed cheddar cheese",
    description: "Nostalgic masala noodles topped with a double blanket of molten cheese and oregano flakes.",
    dietary: "veg",
    badge: "POPULAR",
    portion: "Hot Bowl • Veg",
    isAvailable: true,
    isFeatured: false,
    isSampleData: true
  },
  {
    id: "peri-peri-maggi",
    name: "Peri-Peri Spicy Maggi",
    category: "maggi-special",
    price: 80,
    image: "/images/plain-maggi.jpg",
    imageAlt: "Spicy Maggi noodles tossed with peri peri masala and herbs",
    description: "Extra spicy kick with imported peri-peri seasonings, crunchy capsicum, and fresh coriander.",
    dietary: "veg",
    portion: "Hot Bowl • Veg",
    isAvailable: true,
    isFeatured: false,
    isSampleData: true
  },
  {
    id: "crispy-veg-burger",
    name: "Crispy Herb Veg Burger",
    category: "burgers",
    price: 119,
    image: "/images/chicken-burger.jpg",
    imageAlt: "Crispy herb potato and green pea patty burger with fresh vegetables and creamy spread",
    description: "Crunchy crumbed vegetable patty, sliced tomatoes, gherkins, and house tarragon mayo in sesame bun.",
    dietary: "veg",
    portion: "Brioche • Veg",
    isAvailable: true,
    isFeatured: false,
    isSampleData: true
  },
  {
    id: "classic-cold-coffee",
    name: "Classic Cold Coffee",
    category: "beverages",
    price: 95,
    image: "/images/cat-beverages.jpg",
    imageAlt: "Rich brewed espresso blended with chilled creamy milk and chocolate drizzle",
    description: "Robust espresso blend frothed with chilled milk and a hint of dark chocolate syrup.",
    dietary: "beverage",
    portion: "350ml • Beverage",
    isAvailable: true,
    isFeatured: false,
    isSampleData: true
  }
];

export function getFeaturedMenuItems(): MenuItem[] {
  return menuItems.filter((item) => item.isFeatured);
}

export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  if (!categoryId || categoryId === "all") {
    return menuItems;
  }
  return menuItems.filter((item) => item.category === categoryId);
}
