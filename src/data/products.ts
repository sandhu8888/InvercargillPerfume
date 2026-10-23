import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'ep-001',
    name: 'Rouge Saffron Extrait',
    subtitle: 'Pure Concentrated Perfume Oil',
    inspiredBy: 'Inspired by Baccarat Rouge 540 Extrait',
    category: 'fragrances',
    type: 'oil',
    price: 39.00,
    originalPrice: 55.00,
    rating: 5.0,
    reviewCount: 142,
    inStock: true,
    stockCount: 24,
    isPopular: true,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    description: 'An ethereal and luminous fragrance concentrated into a 100% pure perfume oil. Opens with crystalline Grandiflorum jasmine and bitter almond, deepening into radiant ambergris and warm cedarwood. Gentle on sensitive skin with zero evaporating alcohol, staying radiant on pulse points for over 18 hours.',
    specifications: {
      formulation: '100% Pure Perfume Oil (Alcohol-Free)',
      concentration: 'Extrait de Parfum Strength (38% Oil Concentration)',
      volumeOptions: ['10ml Roll-on ($39.00)', '30ml Luxury Dropper ($69.00)', '50ml Flacon ($99.00)'],
      longevity: '18 - 24 Hours on skin, days on fabric',
      topNotes: ['Bitter Almond from Morocco', 'Saffron'],
      heartNotes: ['Egyptian Grandiflorum Jasmine', 'Cedarwood'],
      baseNotes: ['Warm Ambergris Accord', 'Woody Musk'],
      scentFamily: 'Amber Floral Woody',
      origin: 'Hand-blended in Invercargill, New Zealand',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-1',
        author: 'Jessica R.',
        rating: 5,
        date: '3 days ago',
        comment: 'This is my third repurchase. Everyone at work asks what I am wearing. The projection is smooth and never suffocating like alcohol sprays.',
        city: 'Auckland',
        verified: true,
        source: 'google'
      },
      {
        id: 'rev-2',
        author: 'Marcus P.',
        rating: 5,
        date: '1 week ago',
        comment: 'Unbelievable clone. Smells richer and deeper than the $600 retail bottle because the oil absorbs into your skin rather than vanishing in the air.',
        city: 'Invercargill',
        verified: true,
        source: 'direct'
      }
    ]
  },
  {
    id: 'ep-002',
    name: 'Imperial Birch & Pineapple',
    subtitle: 'Signature Alcohol-Free Extrait',
    inspiredBy: 'Inspired by Creed Aventus',
    category: 'men',
    type: 'oil',
    price: 39.00,
    originalPrice: 55.00,
    rating: 4.9,
    reviewCount: 118,
    inStock: true,
    stockCount: 18,
    isPopular: true,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    description: 'The definitive masculine icon, masterfully recreated using non-alcoholic pure oil essence. Vibrant smoky birch, tart blackcurrant, and crisp bergamot fuse with intoxicating pineapple and rich oakmoss. Perfect for professional leadership, evening events, and all seasons.',
    specifications: {
      formulation: 'Non-Alcoholic Perfume Oil Concentré',
      concentration: 'Extrait de Parfum (35% Fragrance Oil)',
      volumeOptions: ['10ml Roll-on ($39.00)', '30ml Spray ($69.00)', '50ml Flacon ($99.00)'],
      longevity: '14 - 18 Hours',
      topNotes: ['Smoky Birch', 'Blackcurrant', 'Italian Bergamot', 'French Apple'],
      heartNotes: ['Smoky Birch Heart', 'Moroccan Jasmine', 'Patchouli'],
      baseNotes: ['Oakmoss', 'Ambergris', 'Vanilla Bean'],
      scentFamily: 'Chypre Fruity Woody',
      origin: 'Boutique formulation, Invercargill Showroom',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-3',
        author: 'Blake T.',
        rating: 5,
        date: '5 days ago',
        comment: 'Pure elegance. The smoky birch note is so refined. 10ml roll on fits right in my pocket and lasts forever.',
        city: 'Christchurch',
        verified: true,
        source: 'google'
      }
    ]
  },
  {
    id: 'ep-003',
    name: 'Santale Mystique 33',
    subtitle: 'Unisex Woody Botanical Oil',
    inspiredBy: 'Inspired by Le Labo Santal 33',
    category: 'fragrances',
    type: 'oil',
    price: 39.00,
    originalPrice: 50.00,
    rating: 4.9,
    reviewCount: 96,
    inStock: true,
    stockCount: 15,
    isPopular: true,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    description: 'An intoxicating homage to the American West. Australian sandalwood, cedarwood, cardamom, and violet petals marry with dry papyrus and subtle leather. Non-alcoholic formulation ensures the creamy sandalwood blooms softly with body heat without any alcohol sharpness.',
    specifications: {
      formulation: '100% Alcohol-Free Pure Botanical Perfume Oil',
      concentration: 'Extrait de Parfum (35% Pure Essence)',
      volumeOptions: ['10ml Roll-on ($39.00)', '30ml Dropper ($69.00)', '50ml Flacon ($99.00)'],
      longevity: '16+ Hours',
      topNotes: ['Violet Accord', 'Cardamom', 'Papyrus'],
      heartNotes: ['Iris', 'Ambrox', 'Cedarwood'],
      baseNotes: ['Australian Sandalwood', 'Smoky Leather Accord'],
      scentFamily: 'Woody Aromatic Leather',
      origin: 'Invercargill Studio, New Zealand',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-4',
        author: 'Chloe Evans',
        rating: 5,
        date: '2 weeks ago',
        comment: 'If you love Santal 33, buy this immediately. My partner and I both share it. Lasts on coats and scarves for days.',
        city: 'Dunedin',
        verified: true,
        source: 'google'
      }
    ]
  },
  {
    id: 'ep-004',
    name: 'Midnight Vanilla & Tobacco',
    subtitle: 'Rich Gourmand Amber Perfume Oil',
    inspiredBy: 'Inspired by Tom Ford Tobacco Vanille',
    category: 'men',
    type: 'oil',
    price: 42.00,
    originalPrice: 60.00,
    rating: 5.0,
    reviewCount: 88,
    inStock: true,
    stockCount: 12,
    isPopular: true,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80',
    description: 'Sumptuous, opulent, and warm. Rare aromatic tobacco leaf enveloped in creamy Madagascar vanilla, rich cocoa, ginger spice, and tonka bean. An alcohol-free artisanal oil blend that evokes historic gentlemen clubs and cosy winter fires in Southland.',
    specifications: {
      formulation: 'Pure Concentrated Perfume Oil',
      concentration: 'Extrait de Parfum (36% Pure Oil)',
      volumeOptions: ['10ml Roll-on ($42.00)', '30ml Dropper ($74.00)', '50ml Flacon ($105.00)'],
      longevity: '20+ Hours',
      topNotes: ['Tobacco Leaf', 'Warm Spicy Notes', 'Ginger'],
      heartNotes: ['Tonka Bean', 'Tobacco Blossom', 'Madagascar Vanilla', 'Cacao'],
      baseNotes: ['Dried Fruit Accord', 'Wood Sap', 'Amber'],
      scentFamily: 'Warm & Spicy Gourmand',
      origin: 'Hand-poured in Invercargill, NZ',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-5',
        author: 'Nathan Ross',
        rating: 5,
        date: '1 week ago',
        comment: 'Warm, inviting, and comforting. The vanilla is rich and not synthetic. Excellent roll-on applicator with metal roller ball.',
        city: 'Invercargill',
        verified: true,
        source: 'direct'
      }
    ]
  },
  {
    id: 'ep-005',
    name: 'Dark Coffee & White Floral',
    subtitle: 'Sensual Alcohol-Free Seduction',
    inspiredBy: 'Inspired by YSL Black Opium',
    category: 'women',
    type: 'non-alcoholic',
    price: 39.00,
    originalPrice: 55.00,
    rating: 4.9,
    reviewCount: 104,
    inStock: true,
    stockCount: 20,
    isPopular: true,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    description: 'An electrifying contrast of bitter black coffee bean, sweet orange blossom, and seductive white jasmine, anchored by soft vanilla and patchouli. Crafted in our gentle non-alcoholic oil base to preserve the delicate floral notes from alcohol evaporation.',
    specifications: {
      formulation: '100% Non-Alcoholic Perfume Oil Spray & Roll-on',
      concentration: 'Extrait Concentration (32%)',
      volumeOptions: ['10ml Roll-on ($39.00)', '30ml Mist ($69.00)', '50ml Flacon ($99.00)'],
      longevity: '14 - 18 Hours',
      topNotes: ['Roasted Black Coffee Accord', 'Pear', 'Pink Pepper'],
      heartNotes: ['Orange Blossom', 'Night-Blooming Jasmine'],
      baseNotes: ['Bourbon Vanilla', 'Patchouli', 'Cedarwood'],
      scentFamily: 'Warm Sweet Floral',
      origin: 'ePerfumeStore Invercargill NZ',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-6',
        author: 'Sophie M.',
        rating: 5,
        date: '4 days ago',
        comment: 'The coffee and vanilla combo is perfection. I wear this on every night out and receive compliments without fail.',
        city: 'Queenstown',
        verified: true,
        source: 'google'
      }
    ]
  },
  {
    id: 'ep-006',
    name: 'Savage Spice & Ambrolux',
    subtitle: 'Magnetic Spiced Woody Perfume Oil',
    inspiredBy: 'Inspired by Dior Sauvage Elixir',
    category: 'men',
    type: 'oil',
    price: 42.00,
    originalPrice: 62.00,
    rating: 5.0,
    reviewCount: 79,
    inStock: true,
    stockCount: 16,
    isPopular: true,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-concentrated nighttime elixir. Rich nutmeg, cinnamon, and cardamom spices ignite a core of bespoke lavender and licorice, resting upon rich Haitian vetiver and intoxicating amber. Deep, magnetic, and commanding.',
    specifications: {
      formulation: 'Pure Concentrated Perfume Oil',
      concentration: 'Extrait de Parfum (38% High Density Oil)',
      volumeOptions: ['10ml Roll-on ($42.00)', '30ml Dropper ($74.00)', '50ml Flacon ($105.00)'],
      longevity: '24+ Hours Longevity',
      topNotes: ['Cinnamon', 'Cardamom', 'Nutmeg', 'Grapefruit'],
      heartNotes: ['Nyons Lavender Essential Oil', 'Licorice Root'],
      baseNotes: ['Haitian Vetiver', 'Patchouli', 'Precious Woods', 'Amber'],
      scentFamily: 'Spicy Woody Amber',
      origin: 'Shop 3/24 Leven St, Invercargill',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-7',
        author: 'Dane Wilson',
        rating: 5,
        date: '1 week ago',
        comment: 'Extremely potent. One tiny swipe of the roller on each side of the neck is enough for the entire day and night. Best Sauvage clone in NZ.',
        city: 'Gore',
        verified: true,
        source: 'google'
      }
    ]
  },
  {
    id: 'ep-007',
    name: 'Velvet Rose & Smoked Oud',
    subtitle: 'Niche Artisanal Non-Alcoholic Fragrance',
    inspiredBy: 'Inspired by Jo Malone Velvet Rose & Oud',
    category: 'women',
    type: 'oil',
    price: 45.00,
    originalPrice: 65.00,
    rating: 4.8,
    reviewCount: 62,
    inStock: true,
    stockCount: 14,
    isPopular: false,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    description: 'Damask rose steeped in smoky dark agarwood (oud), laced with clove spice and decadent praline. Deeply romantic and mysterious. Being oil-based, the Damascus rose retains its fresh dewiness rather than turning acidic or sharp.',
    specifications: {
      formulation: 'Pure Perfume Oil (100% Alcohol-Free)',
      concentration: 'Extrait de Parfum (35%)',
      volumeOptions: ['10ml Roll-on ($45.00)', '30ml Luxury Dropper ($79.00)', '50ml Flacon ($110.00)'],
      longevity: '16 - 20 Hours',
      topNotes: ['Clove Spice', 'Bergamot'],
      heartNotes: ['Damask Rose', 'Gourmand Praline'],
      baseNotes: ['Smoky Oud Wood', 'Dry Amber', 'Cedarwood'],
      scentFamily: 'Floral Woody Oriental',
      origin: 'Invercargill Studio, New Zealand',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-8',
        author: 'Katherine L.',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The praline and dark rose combination is royal. I get headaches from alcohol perfumes, so this oil formula is an absolute godsend.',
        city: 'Wellington',
        verified: true,
        source: 'google'
      }
    ]
  },
  {
    id: 'ep-008',
    name: 'Blanche Clean Cotton & White Musk',
    subtitle: 'Minimalist Pure Fresh Perfume Oil',
    inspiredBy: 'Inspired by Byredo Blanche',
    category: 'fragrances',
    type: 'non-alcoholic',
    price: 39.00,
    originalPrice: 52.00,
    rating: 4.9,
    reviewCount: 84,
    inStock: true,
    stockCount: 22,
    isPopular: true,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80',
    description: 'The epitome of crisp, clean white cotton sheets drying in morning sunlight. Aldehydic white rose, neroli, peony, and sheer blonde woods over comforting skin musk. Pure, innocent, and undeniably sophisticated.',
    specifications: {
      formulation: 'Clean Alcohol-Free Concentrated Perfume',
      concentration: 'Extrait de Parfum (30%)',
      volumeOptions: ['10ml Roll-on ($39.00)', '30ml Spray ($69.00)', '50ml Flacon ($99.00)'],
      longevity: '12 - 16 Hours',
      topNotes: ['White Rose', 'Pink Pepper', 'Aldehydes'],
      heartNotes: ['Violet', 'Neroli Blossom', 'Peony'],
      baseNotes: ['Blonde Woods', 'Clean Musk', 'Sandalwood'],
      scentFamily: 'Clean Fresh Floral',
      origin: 'Hand-blended in Invercargill, NZ',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-9',
        author: 'Mia Patel',
        rating: 5,
        date: '1 week ago',
        comment: 'The cleanest scent I have ever experienced. Smells like the most expensive hotel room on earth. 10/10.',
        city: 'Hamilton',
        verified: true,
        source: 'direct'
      }
    ]
  },
  {
    id: 'ep-009',
    name: 'Invercargill Sanctuary Home Diffuser Oil',
    subtitle: 'Pure Concentrated Room & Reed Oil',
    category: 'home',
    type: 'home',
    price: 35.00,
    originalPrice: 48.00,
    rating: 5.0,
    reviewCount: 53,
    inStock: true,
    stockCount: 19,
    isPopular: false,
    isBestSeller: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    description: 'Transform your home into a serene luxury haven. Infused with pure white tea, cedar, Italian bergamot, and soothing cashmere amber. Formulated with 100% alcohol-free carrier oil for 3x slower evaporation than standard supermarket diffusers.',
    specifications: {
      formulation: '100% Pure Concentrated Diffuser & Ultrasonic Oil',
      concentration: 'High Strength Room Concentré',
      volumeOptions: ['100ml Reed Bottle ($35.00)', '200ml Refill Flacon ($59.00)'],
      longevity: 'Diffuses continuously for 4 - 6 months',
      topNotes: ['Bergamot Zest', 'White Tea Leaf'],
      heartNotes: ['Jasmine Tea', 'Thyme', 'Cashmere Accord'],
      baseNotes: ['White Cedar', 'Clean Musk'],
      scentFamily: 'Home Ambience & Serenity',
      origin: 'Shop 3/24 Leven St, Invercargill',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-10',
        author: 'Gillian Scott',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Bought this at the Leven Street boutique. It has been 3 months and the bottle is still half full, keeping our hallway smelling divine.',
        city: 'Invercargill',
        verified: true,
        source: 'google'
      }
    ]
  },
  {
    id: 'ep-010',
    name: 'Amber Cashmere & Fireside Wood',
    subtitle: 'Luxury Ambience Home & Linen Mist',
    category: 'home',
    type: 'home',
    price: 32.00,
    originalPrice: 45.00,
    rating: 4.8,
    reviewCount: 39,
    inStock: true,
    stockCount: 15,
    isPopular: false,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80',
    description: 'A rich, cozy blend designed for winter evenings in the South Island. Smoked cedar, amber resin, vanilla pod, and warm cashmeran. Water and oil based, safe for upholstery, curtains, pillows, and room misting.',
    specifications: {
      formulation: 'Alcohol-Free Linen & Home Fragrance Mist',
      concentration: 'Triple Strength Room Blend',
      volumeOptions: ['150ml Amber Glass Spray ($32.00)', '300ml Refill ($54.00)'],
      longevity: 'Lingers on fabrics for days',
      topNotes: ['Spiced Mandarin', 'Smoked Birch'],
      heartNotes: ['Cashmere Wool', 'Warm Clove'],
      baseNotes: ['Amber Resin', 'Guaiacwood', 'Bourbon Vanilla'],
      scentFamily: 'Warm Woody Home',
      origin: 'Invercargill, New Zealand',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-11',
        author: 'Terry Hughes',
        rating: 5,
        date: '1 month ago',
        comment: 'Spray it on bed linens 10 minutes before sleeping. Pure tranquility.',
        city: 'Te Anau',
        verified: true,
        source: 'direct'
      }
    ]
  },
  {
    id: 'ep-011',
    name: 'Neroli Portofino Sun',
    subtitle: 'Crisp Mediterranean Citrus Perfume Oil',
    inspiredBy: 'Inspired by Tom Ford Neroli Portofino',
    category: 'fragrances',
    type: 'oil',
    price: 39.00,
    originalPrice: 52.00,
    rating: 4.8,
    reviewCount: 47,
    inStock: true,
    stockCount: 17,
    isPopular: false,
    isBestSeller: false,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    description: 'Sparkling Italian coastal breeze. Tunisian neroli, Sicilian lemon, Italian bergamot, winter yellow mandarin, and lavender, anchored by a warm amber undertone. Alcohol perfumes lose citrus top notes in 20 minutes; our concentrated oil holds the citrus vibrancy for over 8 hours.',
    specifications: {
      formulation: 'Pure Concentrated Citrus Oil (Alcohol-Free)',
      concentration: 'Extrait de Parfum (32%)',
      volumeOptions: ['10ml Roll-on ($39.00)', '30ml Dropper ($69.00)', '50ml Flacon ($99.00)'],
      longevity: '10 - 14 Hours',
      topNotes: ['Bergamot', 'Mandarin Orange', 'Lemon', 'Bitter Orange'],
      heartNotes: ['African Orange Flower', 'Neroli', 'Jasmine', 'Lavender'],
      baseNotes: ['Amber', 'Angelica', 'Ambrette Seed'],
      scentFamily: 'Citrus Aromatic',
      origin: 'ePerfumeStore Invercargill',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-12',
        author: 'Lucas V.',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Finally a fresh citrus fragrance that actually lasts through the entire workday. Pure quality.',
        city: 'Nelson',
        verified: true,
        source: 'google'
      }
    ]
  },
  {
    id: 'ep-012',
    name: 'Soleil Blanc Coco & Ylang',
    subtitle: 'Solar Island Seduction Oil',
    inspiredBy: 'Inspired by Tom Ford Soleil Blanc',
    category: 'women',
    type: 'oil',
    price: 42.00,
    originalPrice: 58.00,
    rating: 4.9,
    reviewCount: 71,
    inStock: true,
    stockCount: 21,
    isPopular: true,
    isBestSeller: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    description: 'An endless summer bottled into pure perfume oil. Warm pistachio, cardamom, creamy coconut de mer, ylang-ylang, and golden amber. Melts into warm skin like liquid sunshine.',
    specifications: {
      formulation: '100% Pure Perfume Oil (Alcohol-Free)',
      concentration: 'Extrait de Parfum (34%)',
      volumeOptions: ['10ml Roll-on ($42.00)', '30ml Dropper ($74.00)', '50ml Flacon ($105.00)'],
      longevity: '14 - 18 Hours',
      topNotes: ['Pistachio', 'Bergamot', 'Cardamom', 'Pink Pepper'],
      heartNotes: ['Tuberose', 'Ylang-Ylang', 'Jasmine'],
      baseNotes: ['Coconut', 'Amber', 'Tonka Bean', 'Benzoin'],
      scentFamily: 'Solar Amber Floral',
      origin: 'Invercargill, New Zealand',
      alcoholFree: true
    },
    reviews: [
      {
        id: 'rev-13',
        author: 'Brianna Cole',
        rating: 5,
        date: '1 week ago',
        comment: 'Warm, tropical, and so luxurious. Zero irritation on my neck and chest. Free shipping to Tauranga was lightning quick.',
        city: 'Tauranga',
        verified: true,
        source: 'google'
      }
    ]
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'All Products', count: PRODUCTS.length },
  { id: 'men', label: 'For Men', count: PRODUCTS.filter(p => p.category === 'men').length },
  { id: 'women', label: 'For Women', count: PRODUCTS.filter(p => p.category === 'women').length },
  { id: 'home', label: 'For Home', count: PRODUCTS.filter(p => p.category === 'home').length },
  { id: 'fragrances', label: 'Fragrances', count: PRODUCTS.filter(p => p.category === 'fragrances').length }
];
