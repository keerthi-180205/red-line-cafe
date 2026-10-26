export interface BusinessContact {
  phone: string | null;
  phoneDisplay: string;
  isPhoneVerified: boolean;
  whatsapp: string | null;
  isWhatsappVerified: boolean;
  email: string | null;
}

export interface BusinessHours {
  days: string;
  hours: string;
  statusText: string;
  isOpen: boolean;
}

export interface BusinessAddress {
  line1: string;
  landmark: string;
  area: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  fullAddressString: string;
  googleMapsUrl: string;
  isMapLocationVerified: boolean;
}

export interface OrderingLinks {
  swiggy: {
    url: string | null;
    isVerified: boolean;
    unavailableMessage: string;
  };
  zomato: {
    url: string | null;
    isVerified: boolean;
    unavailableMessage: string;
  };
}

export interface SocialLinks {
  instagram: string | null;
  facebook: string | null;
  twitter: string | null;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  shortDescription: string;
  fullDescription: string;
  address: BusinessAddress;
  contact: BusinessContact;
  hours: BusinessHours;
  ordering: OrderingLinks;
  social: SocialLinks;
  metrics: {
    rating: string;
    ratingLabel: string;
    quality: string;
    qualityLabel: string;
    startingPrice: string;
    startingPriceLabel: string;
  };
  images: {
    hero: string;
    heroAlt: string;
    signatureDish: string;
    ambience: string;
    mapPreview: string;
  };
  palette: {
    primaryRed: string;
    nearBlack: string;
    secondaryDark: string;
    warmCream: string;
    white: string;
    accentYellow: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: "RED LINE CAFE",
  tagline: "GOOD FOOD. BIG CRAVINGS. RED LINE.",
  heroHeadline: "GOOD FOOD.\nBIG CRAVINGS.\nRED LINE.",
  heroSubheadline: "Your spot for burgers, loaded fries, Maggi, and more in Basaveshwaranagar, Bengaluru. Freshly grilled, deeply satisfying, made for real food lovers.",
  shortDescription: "Your spot for burgers, loaded fries, Maggi, and more in Basaveshwaranagar, Bengaluru.",
  fullDescription: "A welcoming spot for good food, satisfying snacks, and memorable moments right in the heart of Basaveshwaranagar. Whether it's a late-evening Maggi craving, a loaded burger with friends, or a refreshing Oreo shake, Red Line Cafe brings energy and flavor to every plate.",
  address: {
    line1: "Shop No. [Pending verification], 1st Main Rd",
    landmark: "Basaveshwaranagar Landmark",
    area: "Basaveshwaranagar",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560079",
    country: "India",
    fullAddressString: "1st Main Rd, Basaveshwaranagar, Bengaluru, Karnataka 560079",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Basaveshwaranagar+Bengaluru",
    isMapLocationVerified: false
  },
  contact: {
    phone: null,
    phoneDisplay: "+91 98XXX XXXXX (Pending verification)",
    isPhoneVerified: false,
    whatsapp: null,
    isWhatsappVerified: false,
    email: null
  },
  hours: {
    days: "Monday – Sunday",
    hours: "11:00 AM – 11:00 PM",
    statusText: "Open Now for Dine-in & Takeaway",
    isOpen: true
  },
  ordering: {
    swiggy: {
      url: null,
      isVerified: false,
      unavailableMessage: "Cafe Swiggy store listing link is being configured with the cafe owner."
    },
    zomato: {
      url: null,
      isVerified: false,
      unavailableMessage: "Cafe Zomato store listing link is being configured with the cafe owner."
    }
  },
  social: {
    instagram: null,
    facebook: null,
    twitter: null
  },
  metrics: {
    rating: "4.8★",
    ratingLabel: "Customer Love",
    quality: "100%",
    qualityLabel: "Fresh Cut Meat",
    startingPrice: "₹60+",
    startingPriceLabel: "Pocket Friendly"
  },
  images: {
    hero: "/images/hero-burger.jpg",
    heroAlt: "Loaded Crunch Chicken Burger with golden cheddar, crisp lettuce and house red sauce",
    signatureDish: "/images/chicken-burger.jpg",
    ambience: "/images/about-ambience.jpg",
    mapPreview: "/images/map-preview.jpg"
  },
  palette: {
    primaryRed: "#D71920",
    nearBlack: "#171717",
    secondaryDark: "#242424",
    warmCream: "#FFF8E8",
    white: "#FFFFFF",
    accentYellow: "#FFC857"
  }
};
