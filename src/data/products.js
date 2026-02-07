import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";

/* NEW IMAGES – add files later */
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";

import p15 from "../assets/p15.jpg";
import p16 from "../assets/p16.jpg";
import p17 from "../assets/p17.jpg";
import p18 from "../assets/p18.jpg";
import p19 from "../assets/p19.jpg";
import p20 from "../assets/p20.jpg";

import p21 from "../assets/p21.jpg";
import p22 from "../assets/p22.jpg";
import p23 from "../assets/p23.jpg";
import p24 from "../assets/p24.jpg";
import p25 from "../assets/p25.jpg";
import p26 from "../assets/p26.jpg";


const products = [
  // ================= EXISTING (p1–p8) =================

  {
    id: 1,
    name: "Canon EOS DSLR Camera",
    brand: "Canon",
    price: 45999,
    oldPrice: 48999,
    image: p1,
    images: [p1],
    category: "electronics",
    color: "Black",
    sizes: [],
    fabric: "NA",
    fit: "NA",
    description: "High performance DSLR camera for professional photography.",
  },

  {
    id: 2,
    name: "Men Blue Cotton Sweatshirt",
    brand: "AIDA",
    price: 1999,
    oldPrice: 2499,
    image: p2,
    images: [p2],
    category: "men",
    color: "Blue",
    sizes: ["S", "M", "L", "XL"],
    fabric: "Cotton",
    fit: "Regular Fit",
    description: "Men blue cotton sweatshirt with comfortable regular fit.",
  },

  {
    id: 3,
    name: "Classic Wooden Table Lamp",
    brand: "AIDA Home",
    price: 3499,
    oldPrice: 3999,
    image: p3,
    images: [p3],
    category: "home",
    color: "Brown",
    sizes: [],
    fabric: "Wood",
    fit: "NA",
    description: "Elegant wooden table lamp for modern interiors.",
  },

  {
    id: 4,
    name: "Nike Running Sports Shoes",
    brand: "Nike",
    price: 5299,
    oldPrice: 5999,
    image: p4,
    images: [p4],
    category: "men",
    color: "Black",
    sizes: ["7", "8", "9", "10"],
    fabric: "Mesh",
    fit: "Regular",
    description: "Lightweight running shoes for maximum comfort.",
  },

  {
    id: 5,
    name: "Apple Series Smart Watch",
    brand: "Apple",
    price: 21999,
    oldPrice: 24999,
    image: p5,
    images: [p5],
    category: "electronics",
    color: "Black",
    sizes: [],
    fabric: "Silicone",
    fit: "Adjustable",
    description: "Smart watch with health and fitness tracking.",
  },

  {
    id: 6,
    name: "Women Black Party Dress",
    brand: "AIDA",
    price: 2999,
    oldPrice: 3499,
    image: p6,
    images: [p6],
    category: "women",
    color: "Black",
    sizes: ["S", "M", "L"],
    fabric: "Polyester",
    fit: "Slim Fit",
    description: "Stylish black party dress for special occasions.",
  },

  {
    id: 7,
    name: "Luxury Skincare Combo Kit",
    brand: "GlowCare",
    price: 1799,
    oldPrice: 2199,
    image: p7,
    images: [p7],
    category: "beauty",
    color: "NA",
    sizes: [],
    fabric: "NA",
    fit: "NA",
    description: "Complete skincare combo for glowing skin.",
  },

  {
    id: 8,
    name: "Leather Handbag for Women",
    brand: "AIDA",
    price: 2499,
    oldPrice: 2999,
    image: p8,
    images: [p8],
    category: "women",
    color: "Brown",
    sizes: [],
    fabric: "Leather",
    fit: "NA",
    description: "Premium leather handbag with elegant design.",
  },

  // ================= MEN (6 MORE) =================

  {
    id: 9,
    name: "Men Slim Fit Shirt",
    brand: "AIDA",
    price: 1799,
    oldPrice: 2199,
    image: p9,
    images: [p9],
    category: "men",
    color: "White",
    sizes: ["S", "M", "L", "XL"],
    fabric: "Cotton",
    fit: "Slim Fit",
    description: "Stylish slim fit shirt for men.",
  },

  {
    id: 10,
    name: "Men Casual Jeans",
    brand: "AIDA",
    price: 2599,
    oldPrice: 2999,
    image: p10,
    images: [p10],
    category: "men",
    color: "Blue",
    sizes: ["30", "32", "34", "36"],
    fabric: "Denim",
    fit: "Regular",
    description: "Comfortable casual jeans for daily wear.",
  },

  {
    id: 11,
    name: "Men Hoodie Jacket",
    brand: "AIDA",
    price: 2899,
    oldPrice: 3299,
    image: p11,
    images: [p11],
    category: "men",
    color: "Grey",
    sizes: ["M", "L", "XL"],
    fabric: "Cotton Blend",
    fit: "Regular",
    description: "Warm hoodie jacket for casual outings.",
  },

  {
    id: 12,
    name: "Men Sports T-Shirt",
    brand: "AIDA",
    price: 1299,
    oldPrice: 1599,
    image: p12,
    images: [p12],
    category: "men",
    color: "Black",
    sizes: ["M", "L", "XL"],
    fabric: "Polyester",
    fit: "Athletic",
    description: "Breathable sports t-shirt for workouts.",
  },

  {
    id: 13,
    name: "Men Cotton Shorts",
    brand: "AIDA",
    price: 999,
    oldPrice: 1299,
    image: p13,
    images: [p13],
    category: "men",
    color: "Khaki",
    sizes: ["M", "L", "XL"],
    fabric: "Cotton",
    fit: "Regular",
    description: "Comfortable cotton shorts for summer wear.",
  },

  {
    id: 14,
    name: "Men Leather Belt",
    brand: "AIDA",
    price: 799,
    oldPrice: 999,
    image: p14,
    images: [p14],
    category: "men",
    color: "Brown",
    sizes: [],
    fabric: "Leather",
    fit: "NA",
    description: "Genuine leather belt for formal and casual wear.",
  },

  // ================= WOMEN (6) =================

  {
    id: 15,
    name: "Women Floral Kurti",
    brand: "AIDA",
    price: 1999,
    oldPrice: 2399,
    image: p15,
    images: [p15],
    category: "women",
    color: "Pink",
    sizes: ["S", "M", "L"],
    fabric: "Rayon",
    fit: "Regular",
    description: "Elegant floral kurti for everyday wear.",
  },

  {
    id: 16,
    name: "Women Casual Top",
    brand: "AIDA",
    price: 1499,
    oldPrice: 1799,
    image: p16,
    images: [p16],
    category: "women",
    color: "White",
    sizes: ["S", "M", "L"],
    fabric: "Cotton",
    fit: "Regular",
    description: "Comfortable casual top for women.",
  },

  {
    id: 17,
    name: "Women Denim Jeans",
    brand: "AIDA",
    price: 2699,
    oldPrice: 3199,
    image: p17,
    images: [p17],
    category: "women",
    color: "Blue",
    sizes: ["28", "30", "32"],
    fabric: "Denim",
    fit: "Slim",
    description: "Stylish slim fit denim jeans for women.",
  },

  {
    id: 18,
    name: "Women Party Gown",
    brand: "AIDA",
    price: 3999,
    oldPrice: 4599,
    image: p18,
    images: [p18],
    category: "women",
    color: "Red",
    sizes: ["S", "M", "L"],
    fabric: "Polyester",
    fit: "Slim",
    description: "Elegant party gown for special occasions.",
  },

  {
    id: 19,
    name: "Women Sandals",
    brand: "AIDA",
    price: 1799,
    oldPrice: 2199,
    image: p19,
    images: [p19],
    category: "women",
    color: "Beige",
    sizes: ["6", "7", "8"],
    fabric: "Synthetic",
    fit: "Regular",
    description: "Comfortable sandals for daily wear.",
  },

  {
    id: 20,
    name: "Women Classic Handbag",
    brand: "AIDA",
    price: 2899,
    oldPrice: 3299,
    image: p20,
    images: [p20],
    category: "women",
    color: "Brown",
    sizes: [],
    fabric: "Leather",
    fit: "NA",
    description: "Classic handbag with premium finish.",
  },

  // ================= KIDS (6) =================

  {
    id: 21,
    name: "Kids Cartoon T-Shirt",
    brand: "AIDA Kids",
    price: 899,
    oldPrice: 1099,
    image: p21,
    images: [p21],
    category: "kids",
    color: "Yellow",
    sizes: ["XS", "S", "M"],
    fabric: "Cotton",
    fit: "Regular",
    description: "Fun cartoon printed t-shirt for kids.",
  },

  {
    id: 22,
    name: "Kids Denim Shorts",
    brand: "AIDA Kids",
    price: 999,
    oldPrice: 1299,
    image: p22,
    images: [p22],
    category: "kids",
    color: "Blue",
    sizes: ["XS", "S", "M"],
    fabric: "Denim",
    fit: "Regular",
    description: "Comfortable denim shorts for kids.",
  },

  {
    id: 23,
    name: "Kids Hoodie Jacket",
    brand: "AIDA Kids",
    price: 1799,
    oldPrice: 2199,
    image: p23,
    images: [p23],
    category: "kids",
    color: "Grey",
    sizes: ["S", "M"],
    fabric: "Cotton Blend",
    fit: "Regular",
    description: "Warm hoodie jacket for kids.",
  },

  {
    id: 24,
    name: "Kids Party Dress",
    brand: "AIDA Kids",
    price: 1899,
    oldPrice: 2299,
    image: p24,
    images: [p24],
    category: "kids",
    color: "Red",
    sizes: ["XS", "S", "M"],
    fabric: "Polyester",
    fit: "Slim",
    description: "Stylish party dress for kids.",
  },

  {
    id: 25,
    name: "Kids Sneakers",
    brand: "AIDA Kids",
    price: 2299,
    oldPrice: 2699,
    image: p25,
    images: [p25],
    category: "kids",
    color: "White",
    sizes: ["1", "2", "3"],
    fabric: "Mesh",
    fit: "Regular",
    description: "Comfortable sneakers for kids.",
  },

  {
    id: 26,
    name: "Kids School Backpack",
    brand: "AIDA Kids",
    price: 1599,
    oldPrice: 1999,
    image: p26,
    images: [p26],
    category: "kids",
    color: "Blue",
    sizes: [],
    fabric: "Polyester",
    fit: "NA",
    description: "Durable school backpack for kids.",
  },
];

export default products;
