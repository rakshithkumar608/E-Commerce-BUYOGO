const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const menProducts = [
  {
    name: "Classic Black Leather Jacket",
    description: "Premium leather jacket with a slim-fit design, perfect for a rugged yet stylish look.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    category: "men",
    brand: "UrbanEdge",
    stock: 25,
    averageRating: 4.5,
  },
  {
    name: "Slim Fit Denim Jeans",
    description: "Comfortable stretch denim with a modern slim fit, available in dark wash.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    category: "men",
    brand: "DenimCo",
    stock: 50,
    averageRating: 4.2,
  },
  {
    name: "Casual Cotton Crew Neck T-Shirt",
    description: "Soft 100% cotton crew neck tee, everyday essential in multiple colors.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    category: "men",
    brand: "BasicWear",
    stock: 100,
    averageRating: 4.0,
  },
  {
    name: "Formal Navy Blue Blazer",
    description: "Tailored fit blazer in navy blue, ideal for business meetings and formal events.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    category: "men",
    brand: "EliteStyle",
    stock: 15,
    averageRating: 4.7,
  },
  {
    name: "Athletic Running Sneakers",
    description: "Lightweight mesh sneakers with cushioned sole for running and daily wear.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    category: "men",
    brand: "SprintX",
    stock: 40,
    averageRating: 4.4,
  },
  {
    name: "Hooded Zip-Up Sweatshirt",
    description: "Warm fleece-lined hoodie with front zip, perfect for casual outings.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    category: "men",
    brand: "ComfortZone",
    stock: 35,
    averageRating: 4.3,
  },
  {
    name: "Checkered Flannel Shirt",
    description: "Classic plaid flannel shirt, soft brushed cotton for a cozy, laid-back vibe.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
    category: "men",
    brand: "TimberStyle",
    stock: 30,
    averageRating: 4.1,
  },
  {
    name: "Chino Pants - Khaki",
    description: "Versatile khaki chinos with a straight fit, great for work and weekends.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600",
    category: "men",
    brand: "UrbanEdge",
    stock: 45,
    averageRating: 4.0,
  },
  {
    name: "Wool Overcoat - Charcoal",
    description: "Elegant charcoal wool overcoat, double-breasted with a modern cut.",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600",
    category: "men",
    brand: "EliteStyle",
    stock: 10,
    averageRating: 4.8,
  },
  {
    name: "Graphic Print Streetwear Tee",
    description: "Bold graphic print on premium cotton, oversized relaxed fit.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
    category: "men",
    brand: "StreetKing",
    stock: 60,
    averageRating: 4.2,
  },
  {
    name: "Aviator Sunglasses - Gold",
    description: "Classic aviator sunglasses with gold metal frame and UV400 protection.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
    category: "men",
    brand: "ShadeCraft",
    stock: 70,
    averageRating: 4.3,
  },
  {
    name: "Premium Leather Belt",
    description: "Genuine leather belt with a brushed steel buckle, 35mm width.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    category: "men",
    brand: "LeatherLux",
    stock: 55,
    averageRating: 4.1,
  },
];


const womenProducts = [
  {
    name: "Floral Maxi Dress",
    description: "Elegant floral print maxi dress with a flowy silhouette, perfect for summer outings.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600",
    category: "women",
    brand: "BloomStyle",
    stock: 30,
    averageRating: 4.6,
  },
  {
    name: "High-Waist Skinny Jeans",
    description: "Stretchy high-waist skinny jeans with a flattering fit, available in classic blue.",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    category: "women",
    brand: "DenimCo",
    stock: 45,
    averageRating: 4.3,
  },
  {
    name: "Silk Blouse - Ivory",
    description: "Luxurious silk blouse with a relaxed fit, ideal for work or evening wear.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600",
    category: "women",
    brand: "EliteStyle",
    stock: 20,
    averageRating: 4.5,
  },
  {
    name: "Pleated Midi Skirt",
    description: "Classic pleated midi skirt in soft fabric, pairs beautifully with any top.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600",
    category: "women",
    brand: "ChicWear",
    stock: 35,
    averageRating: 4.2,
  },
  {
    name: "Leather Crossbody Handbag",
    description: "Compact genuine leather crossbody bag with gold hardware, perfect for daily essentials.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
    category: "women",
    brand: "LeatherLux",
    stock: 25,
    averageRating: 4.7,
  },
  {
    name: "Knit Cardigan - Blush Pink",
    description: "Soft oversized knit cardigan in blush pink, cozy and chic for layering.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=600",
    category: "women",
    brand: "ComfortZone",
    stock: 40,
    averageRating: 4.1,
  },
  {
    name: "Strappy Block Heel Sandals",
    description: "Elegant strappy sandals with a comfortable block heel, great for parties and events.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
    category: "women",
    brand: "StepUp",
    stock: 30,
    averageRating: 4.4,
  },
  {
    name: "Tailored Blazer - Beige",
    description: "Structured tailored blazer in beige, a must-have for power dressing.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600",
    category: "women",
    brand: "EliteStyle",
    stock: 15,
    averageRating: 4.6,
  },
  {
    name: "Wrap Dress - Emerald Green",
    description: "Stunning emerald green wrap dress with a V-neckline and tie waist.",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
    category: "women",
    brand: "BloomStyle",
    stock: 20,
    averageRating: 4.8,
  },
  {
    name: "Athletic Leggings - Black",
    description: "High-performance black leggings with moisture-wicking fabric for workouts.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600",
    category: "women",
    brand: "SprintX",
    stock: 60,
    averageRating: 4.3,
  },
  {
    name: "Oversized Sunglasses - Tortoise",
    description: "Chic oversized sunglasses with tortoise frame and UV400 protection.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    category: "women",
    brand: "ShadeCraft",
    stock: 50,
    averageRating: 4.2,
  },
  {
    name: "Cashmere Scarf - Camel",
    description: "Ultra-soft cashmere scarf in camel, a timeless winter accessory.",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600",
    category: "women",
    brand: "LuxWrap",
    stock: 35,
  },
];

const streetwearProducts = [
  {
    name: "Oversized Graphic Hoodie",
    description: "Bold graphic print oversized hoodie with kangaroo pocket, heavyweight cotton blend.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    category: "streetwear",
    brand: "StreetKing",
    stock: 40,
    averageRating: 4.6,
  },
  {
    name: "Cargo Jogger Pants",
    description: "Utility cargo joggers with multiple pockets and elastic cuffs, relaxed fit.",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600",
    category: "streetwear",
    brand: "UrbanEdge",
    stock: 35,
    averageRating: 4.3,
  },
  {
    name: "Distressed Denim Jacket",
    description: "Washed-out distressed denim jacket with raw hem and patch details.",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600",
    category: "streetwear",
    brand: "DenimCo",
    stock: 20,
    averageRating: 4.5,
  },
  {
    name: "Tie-Dye Crewneck Tee",
    description: "Vibrant tie-dye pattern on 100% cotton, oversized drop-shoulder fit.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600",
    category: "streetwear",
    brand: "StreetKing",
    stock: 55,
    averageRating: 4.1,
  },
  {
    name: "High-Top Sneakers - White",
    description: "Classic high-top sneakers in crisp white leather with chunky sole.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
    category: "streetwear",
    brand: "SprintX",
    stock: 30,
    averageRating: 4.7,
  },
  {
    name: "Windbreaker Jacket - Neon",
    description: "Lightweight neon color-block windbreaker with zip front and hood.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?w=600",
    category: "streetwear",
    brand: "UrbanEdge",
    stock: 25,
    averageRating: 4.4,
  },
  {
    name: "Bucket Hat - Black",
    description: "Cotton twill bucket hat in solid black, embroidered logo detail.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600",
    category: "streetwear",
    brand: "StreetKing",
    stock: 60,
    averageRating: 4.0,
  },
  {
    name: "Baggy Skate Jeans",
    description: "Relaxed baggy fit skate jeans in medium wash with reinforced knees.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    category: "streetwear",
    brand: "DenimCo",
    stock: 40,
    averageRating: 4.2,
  },
  {
    name: "Cropped Puffer Vest",
    description: "Trendy cropped puffer vest with stand collar, warm and lightweight.",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600",
    category: "streetwear",
    brand: "ComfortZone",
    stock: 20,
    averageRating: 4.5,
  },
  {
    name: "Chain Necklace - Silver",
    description: "Chunky silver-tone chain necklace, a statement streetwear accessory.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
    category: "streetwear",
    brand: "ShadeCraft",
    stock: 50,
    averageRating: 4.1,
  },
  {
    name: "Mesh Basketball Jersey",
    description: "Breathable mesh basketball jersey with contrast piping, oversized cut.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
    category: "streetwear",
    brand: "SprintX",
    stock: 35,
    averageRating: 4.3,
  },
  {
    name: "Snapback Cap - Red",
    description: "Flat-brim snapback cap in bold red with embroidered front logo.",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600",
    category: "streetwear",
    brand: "StreetKing",
    stock: 45,
    averageRating: 4.2,
  },
];

const accessoriesProducts = [
  {
    name: "Classic Leather Watch",
    description: "Minimalist analog watch with genuine leather strap and stainless steel case.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600",
    category: "accessories",
    brand: "TimeCraft",
    stock: 30,
    averageRating: 4.7,
  },
  {
    name: "Polarized Wayfarer Sunglasses",
    description: "Retro wayfarer sunglasses with polarized lenses and matte black frame.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    category: "accessories",
    brand: "ShadeCraft",
    stock: 50,
    averageRating: 4.4,
  },
  {
    name: "Canvas Backpack - Olive",
    description: "Durable canvas backpack with padded laptop compartment and leather trim.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    category: "accessories",
    brand: "UrbanEdge",
    stock: 25,
    averageRating: 4.3,
  },
  {
    name: "Silk Pocket Square Set",
    description: "Set of 3 premium silk pocket squares in assorted patterns for formal wear.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600",
    category: "accessories",
    brand: "EliteStyle",
    stock: 40,
    averageRating: 4.1,
  },
  {
    name: "Sterling Silver Bracelet",
    description: "Elegant sterling silver chain bracelet with lobster clasp closure.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",
    category: "accessories",
    brand: "LuxWrap",
    stock: 35,
    averageRating: 4.5,
  },
  {
    name: "Leather Wallet - Brown",
    description: "Bi-fold genuine leather wallet with RFID blocking and multiple card slots.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
    category: "accessories",
    brand: "LeatherLux",
    stock: 45,
    averageRating: 4.6,
  },
  {
    name: "Wool Fedora Hat",
    description: "Classic wool fedora hat with grosgrain ribbon band, unisex style.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=600",
    category: "accessories",
    brand: "TimberStyle",
    stock: 20,
    averageRating: 4.2,
  },
  {
    name: "Crossbody Phone Bag",
    description: "Compact crossbody bag with phone pocket and adjustable strap.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
    category: "accessories",
    brand: "ComfortZone",
    stock: 55,
    averageRating: 4.0,
  },
  {
    name: "Titanium Ring - Matte Black",
    description: "Sleek matte black titanium ring, lightweight and hypoallergenic.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
    category: "accessories",
    brand: "ShadeCraft",
    stock: 60,
    averageRating: 4.3,
  },
  {
    name: "Patterned Silk Tie",
    description: "Hand-made silk tie with geometric pattern, perfect for formal occasions.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923a203?w=600",
    category: "accessories",
    brand: "EliteStyle",
    stock: 30,
    averageRating: 4.4,
  },
  {
    name: "Beanie Cap - Charcoal",
    description: "Soft knit beanie in charcoal grey, warm and comfortable for winter.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600",
    category: "accessories",
    brand: "ComfortZone",
    stock: 70,
    averageRating: 4.1,
  },
  {
    name: "Duffel Bag - Navy",
    description: "Spacious canvas duffel bag with leather handles, ideal for weekend trips.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600",
    category: "accessories",
    brand: "UrbanEdge",
    stock: 15,
    averageRating: 4.6,
  },
];

const smartPhones = [
  {
    name: "iPhone 16 ProMax",
    description: "Apple’s latest flagship smartphone.",
    price: 999,
    image:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg",
    category: "phones",
    brand: "Apple",
    stock: 30,
    averageRating: 4.8,
  },

  {
    name: "Samsung Galaxy S26 Ultra",
    description: "Samsung's premium Android device.",
    price: 1999,
    image:"https://r2.racunalo.com/wp-content/uploads/2024/08/Samsung-Galaxy-S26-Ultra-mozda-promijeni-ime-u-Galaxy-S26-Note-a-S26-u-Galaxy-S26-Pro-01.jpg",
    category: "phones",
    brand: "Samsung",
    stock: 25,
    averageRating: 5,
  },

  {
    name: "Google Pixel 8 Pro",
    description: "Google's AI-powered smartphone.",
    price: 999,
    image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Google-Pixel-8-Pro-Andrew-Lanxon-CNET.jpg",
    category: "phones",
    brand: "Google",
    stock: 35,
    averageRating: 4.3,
  },

    {
    name: "OnePlus 12",
    description: "A high-performance flagship phone",
    price: 799,
    image:"https://cdn.mos.cms.futurecdn.net/uwHePWeJEWQrEnRkuKJQLe.jpg",
    category: "phones",
    brand: "OnePlus",
    stock: 40,
    averageRating: 4.5,
  },


      {
    name: "Xiaomi Pro",
    description: "A powerful smartphone featuring Leica camera.",
    price: 899,
    image:"https://static.toiimg.com/thumb/msid-114072170,width-1280,height-720,resizemode-4/114072170.jpg",
    category: "phones",
    brand: "Xiaomi",
    stock: 30,
    averageRating: 4.5,
  },

    {
    name: "Samsung Galaxy Z Foldd 5",
    description: "A futuristic foldable smartphone.",
    price: 1799,
    image:"https://i0.wp.com/androidguys.com/wp-content/uploads/2023/07/Samsung-Galaxy-Z-Fold-5-2.jpg?fit=1600%2C1067&ssl=1",
    category: "phones",
    brand: "Samsung",
    stock: 15,
    averageRating: 4.9,
  },

  {
    name: "iphone 14 Plus",
    description: "A large-screen iphone with excellent battery.",
    price: 899,
    image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-yellow-2up-230307_inline.jpg.large.jpg",
    category: "phones",
    brand: "Apple",
    stock: 35,
    averageRating: 4.2,
  },

  {
    name: "ASUS ROG Phone7",
    description: "A gaming powerhouse designed for gaming.",
    price: 999,
    image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202305/untitled_design_-_2023-05-15t133155-sixteen_nine.jpg?size=948:533",
    category: "phones",
    brand: "Asus",
    stock: 20,
    averageRating: 4.8,
  },

    {
    name: "Nothing Phone(2)",
    description: "A unique smartphone with transparent design.",
    price: 699,
    image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/06/Nothing-Phone-2-first-look.png?fit=1200%2C675&ssl=1",
    category: "phones",
    brand: "nothing",
    stock: 45,
    averageRating: 4.5,
  },
]

const laptop = [
  {
  name:"MackBook Pro M3",
  price: 1999,
  image: "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg",
  category: "laptops",
  stock: 20,
  averageRating: 4.8
  },

  {
  name:"Dell XPS 15",
  price: 1799,
  image: "https://i.pcmag.com/imagery/reviews/06jXYH66gbfR1chaGBUrRwI-22.fit_scale.size_400x225.v1569482561.jpg",
  category: "laptops",
  stock: 25,
  averageRating: 4.3
  },

  {
  name:"HP Spectre x360",
  price: 1499,
  image: "https://www.cnet.com/a/img/resize/eae3840288fe99145fa33596146ecb448eff6a1b/hub/2021/04/12/ec06344f-4113-4966-9b4f-8fdcd129869f/014-hp-spectre-x360-14.jpg?auto=webp&fit=crop&height=900&width=1200",
  category: "laptops",
  stock: 30,
  averageRating: 4.2
  },

   {
  name:"ASUS ROG Zephyrus G14",
  price: 1699,
  image: "https://rog.asus.com/media/1578096205427.jpg",
  category: "laptops",
  stock: 15,
  averageRating: 4.9
  },

   {
  name:"Lenova ThinkPad X1 Carbon",
  price: 1899,
  image: "https://www.notebookcheck.net/fileadmin/_processed_/e/7/csm_thinkpad_X1Carbon_G13_teaser_fbb65abcbd.jpg",
  category: "laptops",
  stock: 20,
  averageRating: 4.4
  },

   {
  name:"Acer Predator Helios 16",
  price: 1599,
  image: "https://assets.videomaker.com/2025/01/predator-helios-16-ai-emira-arx-banner_Secondary-Hero-XL.jpg",
  category: "laptops",
  stock: 25,
  averageRating: 4.2
  },


   {
  name:"Microsoft Surface Laptop 5",
  price: 1299,
  image: "https://i.ytimg.com/vi/9_FQW36r0n8/sddefault.jpg",
  category: "laptops",
  stock: 35,
  averageRating: 4.1
  },


   {
  name:"Samsung Galaxy Book 3 pro",
  price: 1399,
  image: "https://m.media-amazon.com/images/I/61CIDQ6PU8L.jpg",
  category: "laptops",
  stock: 30,
  averageRating: 4.4
  },

   {
  name:"MSI Stealth 16 Studio",
  price: 1799,
  image: "https://i.pcmag.com/imagery/articles/062v76XLoLNZ5f9YDhgZ4Mi-2..v1671643377.jpg",
  category: "laptops",
  stock: 10,
  averageRating: 5
  },
];

const headPhones = [
  {
    name: "Sony WH-1000XM5",
    price: 399,
    image: "https://darlingretail.com/cdn/shop/products/9_40f19443-acd9-4d68-b23b-400915422d05_1000x.jpg?v=1665037820",
    category: "headPhones",
    stock: 40,
    averageRating: 4.7
  },

  {
    name: "Apple AirPods Max",
    price: 549,
    image: "https://hips.hearstapps.com/hmg-prod/images/apple-airpods-max-review-64959f6226b6d.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    category: "headPhones",
    stock: 25,
    averageRating: 4.1
  },

  {
    name: "Base QuietComfort Ultra",
    price: 429,
    image: "https://cdn.mos.cms.futurecdn.net/isvq6hLzEzdGRbydwEiF7M.jpg",
    category: "headPhones",
    stock: 30,
    averageRating: 4.2
  },

  {
    name: "Sennheiser Momentum 4",
    price: 349,
    image: "https://hifigo.com/cdn/shop/products/sennheiser-momentum-4-wireless-bluetooth-headphone-for-crystal-clear-calls-hifigo-145814.jpg?v=1661442865&width=2048",
    category: "headPhones",
    stock: 35,
    averageRating: 4.3
  },

  {
    name: "JBL Tune 760NC",
    price: 149,
    image: "https://majorhifi.com/wp-content/uploads/PXL_20230527_200504348-scaled-1.png",
    category: "headPhones",
    stock: 50,
    averageRating: 4.4
  },


  {
    name: "Beats Studio Pro",
    price: 349,
    image: "https://sm.pcmag.com/pcmag_me/review/b/beats-stud/beats-studio-pro_aue9.jpg",
    category: "headPhones",
    stock: 30,
    averageRating: 4.5
  },


  {
    name: "SteelSeries Arctis Nova Pro",
    price: 349,
    image: "https://media.steelseriescdn.com/thumbs/filer_public/c5/13/c513206c-ec43-4212-8f62-e37db66a3b6f/arctis_nova_family_lp_img_mobile_arctis_nova_7_hero.jpg__540x540_q100_crop-scale_optimize_subsampling-2.jpg",
    category: "headPhones",
    stock: 20,
    averageRating: 4.6
  },

  {
    name: "Logitech G Pro X Wireless",
    price: 229,
    image: "https://www.3ona51.com/images/products/gaming-headphones/logitech-g-pro-x-2-wireless-gaming-headset-981-001263/600_2.jpg",
    category: "headPhones",
    stock: 35,
    averageRating: 4.8
  },

  {
    name: "Razer BlackShark V2 Pro",
    price: 199,
    image: "https://cdn.shopify.com/s/files/1/1398/4647/files/4_5d5a2921-8e08-44db-b9b7-4b40dcb455dc.png?v=1613660070",
    category: "headPhones",
    stock: 45,
    averageRating: 4.9
  },
];

const camera = [
  {
  name: "Canon EOS R50",
  price: 899,
  image: "https://cdn.mos.cms.futurecdn.net/4SWhLs7tGQP39Z8UZgAkPU.jpg",
  category: "camera",
  stock: 20,
  averageRating: 4.6
},
{
  name: "Sony Alpha a6400",
  price: 998,
  image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:474,cw:3038,ch:1709,q:80,w:2560/aeCbENBAx8tNZBWAPCtjRU.jpg",
  category: "camera",
  stock: 25,
  averageRating: 4.7
},
{
  name: "Nikon Z50",
  price: 856,
  image: "https://amateurphotographer.com/wp-content/uploads/sites/7/2019/12/143A9085-scaled.jpg",
  category: "camera",
  stock: 30,
  averageRating: 4.5
},
{
  name: "Fujifilm X-T30 II",
  price: 999,
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Fujifilm_X-T30_II.jpg",
  category: "camera",
  stock: 15,
  averageRating: 4.6
},
{
  name: "Canon PowerShot G7 X Mark III",
  price: 749,
  image: "https://images.ctfassets.net/bht415zek091/1GcJjAgMwRvASLeb0XVYL0/050fb732cd9a6c4bd3fc1e762d8d1052/Canon_G7_X_Mark_III_%C3%A2___Kit_Shot_6-web.jpg",
  category: "camera",
  stock: 35,
  averageRating: 4.4
},
{
  name: "Sony ZV-E10",
  price: 798,
  image: "https://i.rtings.com/assets/products/b4103Pbv/sony-zv-e10/design-medium.jpg?format=auto",
  category: "camera",
  stock: 20,
  averageRating: 4.6
},
{
  name: "Panasonic Lumix GH5",
  price: 1299,
  image: "https://www.panasonic.com/content/dam/pim/mi/en/DC/DC-GH5/DC-GH5/ast-1416499.jpg.pub.crop.pc.thumb.640.1200.jpg",
  category: "camera",
  stock: 10,
  averageRating: 4.7
},
{
  name: "Nikon D7500",
  price: 999,
  image: "https://images.squarespace-cdn.com/content/v1/58db872859cc68c3b09dfd44/1502374421217-WLUDOE8TB4VFM1JC8NPS/image-asset.jpeg",
  category: "camera",
  stock: 25,
  averageRating: 4.5
},
{
  name: "Canon EOS 90D",
  price: 1199,
  image: "https://cdn.mos.cms.futurecdn.net/erFM5Za7ERU3H66jCXEPsa-2560-80.jpg",
  category: "camera",
  stock: 15,
  averageRating: 4.6
}

]

// ── Sports: Running ────────────────────────────────────────
const runningProducts = [
  { name: "Nike Air Zoom Pegasus 41", description: "Responsive cushioning for everyday running.", price: 129.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", category: "running", brand: "Nike", stock: 40, averageRating: 4.7 },
  { name: "Adidas Ultraboost Light", description: "Energy-returning boost for long-distance runs.", price: 189.99, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600", category: "running", brand: "Adidas", stock: 30, averageRating: 4.8 },
  { name: "ASICS Gel-Kayano 30", description: "Stability shoe with gel cushioning technology.", price: 159.99, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600", category: "running", brand: "ASICS", stock: 25, averageRating: 4.5 },
  { name: "Running Compression Shorts", description: "Moisture-wicking fabric with inner brief.", price: 39.99, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600", category: "running", brand: "Under Armour", stock: 60, averageRating: 4.3 },
  { name: "GPS Running Watch", description: "Track distance, pace, and heart rate.", price: 249.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", category: "running", brand: "Garmin", stock: 20, averageRating: 4.6 },
  { name: "Hydration Running Vest", description: "Lightweight vest with 2L water bladder.", price: 79.99, image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600", category: "running", brand: "Salomon", stock: 35, averageRating: 4.4 },
  { name: "Reflective Running Jacket", description: "High-visibility windbreaker for night runs.", price: 89.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600", category: "running", brand: "Nike", stock: 28, averageRating: 4.2 },
  { name: "Pro Running Socks (3-Pack)", description: "Cushioned anti-blister socks for runners.", price: 19.99, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600", category: "running", brand: "Balega", stock: 100, averageRating: 4.5 },
];

// ── Sports: Gym & Fitness ──────────────────────────────────
const gymProducts = [
  { name: "Adjustable Dumbbell Set", description: "5-52.5 lbs adjustable with quick-change dial.", price: 349.99, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600", category: "gym", brand: "Bowflex", stock: 15, averageRating: 4.7 },
  { name: "Premium Gym Gloves", description: "Full palm protection with wrist support.", price: 29.99, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600", category: "gym", brand: "RDX", stock: 50, averageRating: 4.3 },
  { name: "Resistance Bands Set", description: "5 levels of resistance for full-body workout.", price: 24.99, image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600", category: "gym", brand: "Fit Simplify", stock: 80, averageRating: 4.5 },
  { name: "Protein Shaker Bottle", description: "Leak-proof 28oz shaker with mixing ball.", price: 14.99, image: "https://images.unsplash.com/photo-1593095948071-474c5cc2c1cf?w=600", category: "gym", brand: "BlenderBottle", stock: 100, averageRating: 4.4 },
  { name: "Foam Roller Recovery", description: "High-density foam for deep tissue massage.", price: 34.99, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", category: "gym", brand: "TriggerPoint", stock: 45, averageRating: 4.6 },
  { name: "Weight Lifting Belt", description: "Genuine leather 4-inch powerlifting belt.", price: 59.99, image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600", category: "gym", brand: "Rogue", stock: 30, averageRating: 4.8 },
  { name: "Jump Rope - Speed Pro", description: "Ball-bearing handles for fast rotations.", price: 19.99, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600", category: "gym", brand: "CrossRope", stock: 55, averageRating: 4.3 },
  { name: "Gym Duffle Bag", description: "Water-resistant bag with shoe compartment.", price: 44.99, image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600", category: "gym", brand: "Under Armour", stock: 40, averageRating: 4.2 },
];

// ── Sports: Outdoor / Hiking ───────────────────────────────
const outdoorProducts = [
  { name: "Trail Hiking Boots", description: "Waterproof leather boots with Vibram sole.", price: 179.99, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600", category: "outdoor", brand: "Merrell", stock: 25, averageRating: 4.7 },
  { name: "66L Trekking Backpack", description: "Adjustable frame pack for multi-day hikes.", price: 199.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", category: "outdoor", brand: "Osprey", stock: 20, averageRating: 4.8 },
  { name: "Ultralight Tent (2P)", description: "3-season tent weighing under 3 lbs.", price: 299.99, image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600", category: "outdoor", brand: "MSR", stock: 15, averageRating: 4.6 },
  { name: "Insulated Water Bottle", description: "32oz vacuum-insulated stainless steel.", price: 34.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600", category: "outdoor", brand: "Hydro Flask", stock: 70, averageRating: 4.5 },
  { name: "Trekking Poles (Pair)", description: "Carbon fiber adjustable poles with cork grip.", price: 89.99, image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600", category: "outdoor", brand: "Black Diamond", stock: 30, averageRating: 4.4 },
  { name: "Climbing Harness", description: "Lightweight sport climbing harness.", price: 69.99, image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600", category: "outdoor", brand: "Petzl", stock: 22, averageRating: 4.5 },
  { name: "LED Headlamp 600LM", description: "Rechargeable, water-resistant headlamp.", price: 39.99, image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=600", category: "outdoor", brand: "Black Diamond", stock: 55, averageRating: 4.6 },
  { name: "Quick-Dry Cargo Pants", description: "Convertible hiking pants with UV protection.", price: 54.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600", category: "outdoor", brand: "Columbia", stock: 40, averageRating: 4.3 },
];

// ── Sports: Team Sports ────────────────────────────────────
const teamSportsProducts = [
  { name: "Official Match Football", description: "FIFA-approved thermal-bonded match ball.", price: 49.99, image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=600", category: "teamSports", brand: "Adidas", stock: 45, averageRating: 4.5 },
  { name: "Basketball - Pro Grip", description: "Indoor/outdoor composite leather ball.", price: 39.99, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600", category: "teamSports", brand: "Wilson", stock: 50, averageRating: 4.4 },
  { name: "Football Cleats Pro", description: "Firm ground cleats with ankle support.", price: 129.99, image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600", category: "teamSports", brand: "Nike", stock: 30, averageRating: 4.6 },
  { name: "Goalkeeper Gloves", description: "Latex foam grip with finger protection.", price: 34.99, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600", category: "teamSports", brand: "Adidas", stock: 35, averageRating: 4.3 },
  { name: "Shin Guards - Elite", description: "Lightweight EVA foam with hard shell.", price: 24.99, image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600", category: "teamSports", brand: "Nike", stock: 60, averageRating: 4.2 },
  { name: "Basketball Jersey", description: "Breathable mesh jersey, team colors.", price: 44.99, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600", category: "teamSports", brand: "Nike", stock: 40, averageRating: 4.4 },
  { name: "Training Cones (20pk)", description: "Durable disc cones for agility drills.", price: 12.99, image: "https://images.unsplash.com/photo-1461896836934-bd45ba48fa0f?w=600", category: "teamSports", brand: "SKLZ", stock: 80, averageRating: 4.1 },
  { name: "Sports Duffle Bag XL", description: "Extra large team bag with ventilated pockets.", price: 54.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", category: "teamSports", brand: "Under Armour", stock: 35, averageRating: 4.3 },
];

// ── Sports: Yoga & Wellness ────────────────────────────────
const yogaProducts = [
  { name: "Premium Yoga Mat 6mm", description: "Non-slip TPE mat with alignment lines.", price: 49.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600", category: "yoga", brand: "Manduka", stock: 50, averageRating: 4.7 },
  { name: "Yoga Block Set (2)", description: "High-density foam blocks for support.", price: 19.99, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600", category: "yoga", brand: "Gaiam", stock: 70, averageRating: 4.5 },
  { name: "Yoga Strap - Cotton", description: "8-foot adjustable D-ring yoga strap.", price: 12.99, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600", category: "yoga", brand: "Manduka", stock: 80, averageRating: 4.3 },
  { name: "High-Waist Yoga Leggings", description: "4-way stretch with hidden pocket.", price: 59.99, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600", category: "yoga", brand: "Lululemon", stock: 45, averageRating: 4.8 },
  { name: "Meditation Cushion", description: "Buckwheat-filled zafu meditation pillow.", price: 39.99, image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600", category: "yoga", brand: "Gaiam", stock: 30, averageRating: 4.4 },
  { name: "Yoga Wheel", description: "Dharma wheel for backbends and stretching.", price: 34.99, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600", category: "yoga", brand: "UpCircleSeven", stock: 35, averageRating: 4.3 },
  { name: "Essential Oil Diffuser", description: "Ultrasonic aromatherapy for yoga sessions.", price: 29.99, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600", category: "yoga", brand: "URPOWER", stock: 55, averageRating: 4.2 },
  { name: "Yoga Mat Bag", description: "Full-zip carry bag with adjustable strap.", price: 24.99, image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600", category: "yoga", brand: "Manduka", stock: 40, averageRating: 4.4 },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // Remove existing products to avoid duplicates
    await Product.deleteMany({});
    const created = await Product.insertMany([
      ...menProducts,
      ...womenProducts,
      ...streetwearProducts,
      ...accessoriesProducts,
      ...smartPhones,
      ...laptop,
      ...headPhones,
      ...camera,
      ...runningProducts,
      ...gymProducts,
      ...outdoorProducts,
      ...teamSportsProducts,
      ...yogaProducts,
    ]);
    console.log(`✅ Seeded ${created.length} products successfully!`);

    created.forEach((p) => {
      console.log(`  - ${p.name} ($${p.price}) [${p.category}]`);
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error.message);
    process.exit(1);
  }
};

seedProducts();

