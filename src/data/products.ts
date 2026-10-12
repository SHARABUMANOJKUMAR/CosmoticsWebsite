import type { Product } from '../types/product';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'aura-001',
    name: 'Rose Gold Radiance Serum',
    tagline: 'Infused with botanical rosehip, saffron peptides & 24k colloidal gold',
    category: 'Skincare',
    price: 2450,
    originalPrice: 2950,
    rating: 4.9,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1608248597359-5f21e51381e4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: true,
    isNewArrival: false,
    isOrganic: true,
    inStock: true,
    shortDescription: 'A silky, ultra-lightweight elixir designed to revive fatigued skin and deliver an incandescent, lit-from-within luminosity.',
    fullDescription: 'Formulated in small batches in Bengaluru, this concentrated serum harmonizes cold-pressed Kashmiri saffron extract, organic rosehip seed oil, and botanical peptides. It quickly sinks into the epidermal layers to deeply hydrate, promote elastic resilience, and neutralize daily environmental stressors.',
    keyBenefits: [
      'Visibly improves skin tone radiance and clarity within 14 days',
      'Infuses micro-droplets of moisture for continuous 24-hour hydration',
      'Fortifies the natural moisture barrier with non-comedogenic plant lipids',
      'Delivers antioxidant defense against urban pollution and blue light'
    ],
    ingredients: [
      'Rosa Canina (Rosehip) Seed Oil',
      'Crocus Sativus (Saffron) Stigma Extract',
      'Sodium Hyaluronate (Multi-molecular)',
      'Niacinamide (Vitamin B3 5%)',
      'Camellia Sinensis (Green Tea) Leaf Extract',
      'Colloidal Gold (0.01%)',
      'Tocopherol (Pure Vitamin E)'
    ],
    howToUse: [
      'Dispense 3 to 4 drops onto cleansed, slightly damp skin morning and evening.',
      'Gently press and pat into face, neck, and décolletage in upward sweeps.',
      'Allow 60 seconds to absorb before applying your daily moisturizer or sunscreen.'
    ],
    sizeVolume: '30 ml / 1.0 fl oz',
    suitability: 'Suitable for all skin types, including sensitive and combination skin.'
  },
  {
    id: 'aura-002',
    name: 'Velvet Petal Satin Matte Lipstick',
    tagline: 'Weightless comfort-matte with wild mango butter & pomegranate oil',
    category: 'Lip Care',
    price: 1350,
    originalPrice: 1600,
    rating: 4.8,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: true,
    isNewArrival: false,
    isOrganic: true,
    inStock: true,
    shortDescription: 'Couture pigment meets pillow-soft hydration. Glides effortlessly with a decadent rose-nude finish.',
    fullDescription: 'Crafted for modern elegance, Velvet Petal marries high-impact mineral pigments with conditioning Indian mango butter and cold-pressed pomegranate seed oil. It delivers up to 8 hours of feather-resistant wear without drying or clinging to texture.',
    keyBenefits: [
      'One-swipe saturated pigment with a soft-focus velvet matte finish',
      'Infused with emollient plant butters to prevent feathering and cracking',
      'Non-drying formulation that feels weightless on the lips',
      'Clean formulation free from parabens, phthalates, and synthetic heavy waxes'
    ],
    ingredients: [
      'Ricinus Communis (Castor) Seed Oil',
      'Mangifera Indica (Mango) Seed Butter',
      'Punica Granatum (Pomegranate) Sterols',
      'Euphorbia Cerifera (Candelilla) Wax',
      'Iron Oxides & Clean Mineral Pigments (CI 77491, CI 77891)',
      'Vanilla Planifolia Fruit Extract'
    ],
    howToUse: [
      'Exfoliate lips gently for a smooth canvas.',
      'Apply directly from the bullet starting at the cupid’s bow and blending outward.',
      'Blot with tissue and reapply for extended 8-hour wear.'
    ],
    sizeVolume: '3.8 g / 0.13 oz',
    suitability: 'Universal flattering warm rose-nude undertone for all complexions.'
  },
  {
    id: 'aura-003',
    name: 'Celestial Dew Cushion Foundation',
    tagline: 'Breathable medium-coverage with hyaluronic acid & white lotus extract',
    category: 'Makeup',
    price: 2150,
    originalPrice: 2450,
    rating: 4.7,
    reviewCount: 84,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: false,
    isNewArrival: true,
    isOrganic: false,
    inStock: true,
    shortDescription: 'Skin-perfecting fluid foundation in a refillable compact, providing dewy radiance with SPF 30 mineral shield.',
    fullDescription: 'Our Celestial Dew Cushion bridges makeup and active skincare. Micro-milled pigments diffuse imperfections and minimize the appearance of pores while calming sacred lotus extract and multi-molecular hyaluronic acid replenish hydration throughout the day.',
    keyBenefits: [
      'Second-skin breathable veil that evens skin tone without cakey buildup',
      'Broad-spectrum mineral SPF 30 PA+++ sun defense',
      'Enriched with cooling lotus flower hydrosol suitable for warm climates',
      'Refillable, travel-friendly luxe compact with antibacterial puff'
    ],
    ingredients: [
      'Nelumbo Nucifera (White Lotus) Floral Water',
      'Zinc Oxide (Non-nano 12%)',
      'Caprylic/Capric Triglyceride',
      'Glycerin & Sodium Hyaluronate',
      'Centella Asiatica (Gotu Kola) Extract',
      'Titanium Dioxide (CI 77891)',
      'Mica (Ethically sourced)'
    ],
    howToUse: [
      'Gently press the puff applicator into the sponge to release the fluid foundation.',
      'Tap and stipple lightly across forehead, cheeks, and chin.',
      'Build coverage as desired on areas with redness or hyperpigmentation.'
    ],
    sizeVolume: '15 g / 0.52 oz (Includes puff)',
    suitability: 'Dermatologically tested. Ideal for normal to dry and combination skin.'
  },
  {
    id: 'aura-004',
    name: 'Hibiscus Glow Night Repair Creme',
    tagline: 'Overnight regenerative barrier treatment with plant squalane & peptides',
    category: 'Face Care',
    price: 2850,
    originalPrice: 3300,
    rating: 4.9,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: true,
    isNewArrival: false,
    isOrganic: true,
    inStock: true,
    shortDescription: 'A rich, decadent velvet cream that works while you rest to smooth fine lines, restore density, and replenish dull skin.',
    fullDescription: 'Nicknamed the "botox plant" of Ayurveda, natural Hibiscus Sabdariffa is coupled with bio-fermented copper peptides and olive-derived squalane. This night creme strengthens the lipid matrix overnight so you wake up to bouncy, plump, and deeply rested skin.',
    keyBenefits: [
      'Boosts cellular vitality and overnight repair cycles',
      'Significantly reduces trans-epidermal water loss (TEWL)',
      'Diminishes the look of fine tension lines around eyes and forehead',
      'Rich buttery texture that melts effortlessly without greasiness'
    ],
    ingredients: [
      'Hibiscus Sabdariffa Flower Extract',
      'Olive Squalane',
      'Copper Tripeptide-1',
      'Butyrospermum Parkii (Shea Butter)',
      'Ceramide NP & Ceramide AP',
      'Centella Asiatica Leaf Extract',
      'Lavandula Angustifolia (Kashmir Lavender) Oil'
    ],
    howToUse: [
      'Warm a dime-sized amount between clean fingertips.',
      'Smooth over freshly toned face and neck using rhythmic lifting motions.',
      'Inhale the calming lavender aroma as part of your evening sleep ritual.'
    ],
    sizeVolume: '50 ml / 1.7 fl oz jar',
    suitability: 'Formulated for all skin types, particularly dry, mature, or stressed skin.'
  },
  {
    id: 'aura-005',
    name: 'Sandalwood & Cardamom Nourishing Body Nectar',
    tagline: 'Silken dry oil with Mysore sandalwood, sweet almond & argan oil',
    category: 'Body Care',
    price: 1950,
    originalPrice: 2250,
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1608248597359-5f21e51381e4?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: false,
    isNewArrival: true,
    isOrganic: true,
    inStock: true,
    shortDescription: 'A non-greasy, fast-absorbing botanical dry body oil that cloaks skin in silk and delicate Karnataka sandalwood aroma.',
    fullDescription: 'Paying homage to our Bengaluru heritage, this exquisite elixir harnesses sustainably harvested Karnataka sandalwood (Chandan) paired with warm cardamom notes and cold-pressed sweet almond oil. Leaves limbs luminous with a healthy satin sheen.',
    keyBenefits: [
      'Instant satin finish with zero sticky residue or clothing transfer',
      'Deeply conditions sun-exposed, dry elbows, knees, and collarbones',
      'Warm grounding fragrance created with natural steam-distilled essences',
      'Rich in Essential Fatty Acids Omega 6 and 9'
    ],
    ingredients: [
      'Prunus Amygdalus Dulcis (Sweet Almond) Oil',
      'Argania Spinosa (Argan) Kernel Oil',
      'Santalum Album (Mysore Sandalwood) Oil',
      'Elettaria Cardamomum Seed Oil',
      'Simmondsia Chinensis (Jojoba) Seed Oil',
      'Helianthus Annuus (Sunflower) Seed Oil',
      'Tocopheryl Acetate'
    ],
    howToUse: [
      'Mist or pour a small amount into hands right after a warm bath or shower.',
      'Massage in circular motions over damp skin to seal in moisture.',
      'Can also be lightly stroked onto dry hair tips to tame flyaways.'
    ],
    sizeVolume: '100 ml / 3.4 fl oz glass bottle',
    suitability: 'Universal body nourishment for daily pampering.'
  },
  {
    id: 'aura-006',
    name: 'Rosewater & Kumkumadi Hydrating Essence Mist',
    tagline: 'Micro-fine refreshing facial toner with Kannauj roses & saffron',
    category: 'Face Care',
    price: 1150,
    originalPrice: 1400,
    rating: 4.8,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: false,
    isNewArrival: false,
    isOrganic: true,
    inStock: true,
    shortDescription: 'A delicate botanical facial mist that tones, refreshes makeup, and infuses skin with pure rose hydrosol and saffron.',
    fullDescription: 'Steam-distilled from freshly handpicked Kannauj Damask rose petals and steeped with classical Kumkumadi herbs, this ultra-fine mist tightens pores, balances cutaneous pH, and imparts a refreshing dewiness on demanding workdays in urban environments.',
    keyBenefits: [
      'Restores skin pH immediately post-cleansing',
      'Sets makeup and prevents foundation from looking powdery',
      'Instant soothing relief for screen fatigue and AC-dehydrated skin',
      'Alcohol-free, gentle on even reactive complexions'
    ],
    ingredients: [
      'Pure Rosa Damascena Flower Water (92%)',
      'Kumkumadi Tailam Herbal Infusion',
      'Aloe Barbadensis Leaf Juice',
      'Vegetable Glycerin',
      'Allantoin',
      'Sodium Benzoate & Potassium Sorbate (Eco-cert food grade)'
    ],
    howToUse: [
      'Hold the bottle 8 to 10 inches from the face with eyes gently closed.',
      'Spray 3 to 4 pumps evenly across face and neck.',
      'Use after cleansing, before serums, or throughout the day as an instant glow pick-me-up.'
    ],
    sizeVolume: '120 ml / 4.0 fl oz',
    suitability: 'Safe and beneficial for all skin types and ages.'
  },
  {
    id: 'aura-007',
    name: 'Gilded Copper Peptide Eye Sculpt Elixir',
    tagline: 'Targeted cooling rollerball with caffeine, peptides & lotus extract',
    category: 'Face Care',
    price: 1850,
    originalPrice: 2100,
    rating: 4.7,
    reviewCount: 63,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: false,
    isNewArrival: true,
    isOrganic: false,
    inStock: true,
    shortDescription: 'High-performance eye contour serum equipped with an anti-microbial ceramic cooling tip to depuff and brighten dark circles.',
    fullDescription: 'Specifically formulated for delicate periorbital skin, this targeted elixir combines green coffee bean caffeine to stimulate lymphatic microcirculation with signal peptides that visibly firm under-eye hollows and soften expression creases.',
    keyBenefits: [
      'Instant cooling depuffing action via ergonomic ceramic applicator',
      'Noticeably reduces dark circles and fatigue shadows',
      'Smoothes fine crow’s feet without stinging sensitive eyes',
      'Opthalmologically safe and fragrance-free'
    ],
    ingredients: [
      'Aqua (Purified Water)',
      'Coffea Arabica (Coffee) Seed Extract (3%)',
      'Palmitoyl Tetrapeptide-7',
      'N-Hydroxysuccinimide & Chrysin',
      'Cucumis Sativus (Cucumber) Fruit Hydrosol',
      'Sodium Hyaluronate',
      'Panthenol (Pro-Vitamin B5)'
    ],
    howToUse: [
      'Click pen once to release serum onto the cooling ceramic tip.',
      'Gently glide from the inner under-eye corner outward toward temples.',
      'Lightly tap with ring finger until fully absorbed.'
    ],
    sizeVolume: '15 ml / 0.5 fl oz',
    suitability: 'Ophthalmologist tested. Safe for contact lens wearers.'
  },
  {
    id: 'aura-008',
    name: 'Champagne Shimmer Liquid Illuminator',
    tagline: 'Multi-use pearlescent highlighter with murumuru butter & mica',
    category: 'Makeup',
    price: 1550,
    originalPrice: 1850,
    rating: 4.8,
    reviewCount: 91,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: true,
    isNewArrival: false,
    isOrganic: false,
    inStock: true,
    shortDescription: 'A versatile, light-catching liquid drops formulation that gives cheekbones, brow bones, and collarbones a glass-skin sheen.',
    fullDescription: 'Customizable liquid glow crafted with warm champagne and rose gold ultra-fine pearls. Wear it alone on high points of the face, blend with foundation for an all-over luminous finish, or buff into shoulders and collarbones for festive elegance.',
    keyBenefits: [
      'Zero chunky glitter — delivers a seamless wet-look mirror finish',
      'Blends effortlessly over powder or liquid makeup without lifting foundation',
      'Infused with conditioning murumuru butter to melt into skin',
      'Flattering warm champagne hue crafted for diverse undertones'
    ],
    ingredients: [
      'Isododecane',
      'Mica (Ethically sourced mineral CI 77019)',
      'Astrocaryum Murumuru Seed Butter',
      'Dimethicone/Vinyl Dimethicone Crosspolymer',
      'Titanium Dioxide (CI 77891)',
      'Iron Oxide (CI 77491)',
      'Rose Flower Oil'
    ],
    howToUse: [
      'Dot 1-2 droplets onto cheekbones, bridge of the nose, and cupid’s bow.',
      'Blend quickly with fingertips or a damp beauty sponge.',
      'Mix 1 drop into your daily foundation or tinted moisturizer for a dewy radiance.'
    ],
    sizeVolume: '20 ml / 0.68 fl oz dropper',
    suitability: 'All skin types; non-acnegenic.'
  },
  {
    id: 'aura-009',
    name: 'Honey & Rose Petal Lip Sleeping Mask',
    tagline: 'Intensive overnight conditioning balm with wild forest honey & shea',
    category: 'Lip Care',
    price: 950,
    originalPrice: 1150,
    rating: 4.9,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: true,
    isNewArrival: false,
    isOrganic: true,
    inStock: true,
    shortDescription: 'A rich, decadent leave-on lip ointment that locks in moisture to heal cracked lips and reveal pillow-soft plumpness by dawn.',
    fullDescription: 'Formulated with raw wild honey ethically gathered from the Nilgiri hills and infused with crushed Damascus rose petal wax, this overnight treatment creates a protective moisture barrier that sloughs away dry flakes and seals in deep hydration.',
    keyBenefits: [
      'Heals severe flaking and chapped lips within one overnight application',
      'Delicate natural rose-honey flavour with zero synthetic perfumes',
      'Plumps fine lip contours with botanical hyaluronic microspheres',
      'Comes with a golden miniature applicator spatula'
    ],
    ingredients: [
      'Wild Mountain Honey (Mel)',
      'Butyrospermum Parkii (Shea) Butter',
      'Rosa Damascena Flower Wax',
      'Cera Alba (Beeswax)',
      'Simmondsia Chinensis (Jojoba) Oil',
      'Hyaluronic Acid Microspheres',
      'Vitamin E'
    ],
    howToUse: [
      'Use the spatula to scoop a generous layer before bedtime.',
      'Coat lips generously and leave on overnight.',
      'Can also be applied lightly during the day as a rich lip prep before lipstick.'
    ],
    sizeVolume: '15 g / 0.53 oz pot',
    suitability: 'Dry, peeling, or weather-sensitive lips.'
  },
  {
    id: 'aura-010',
    name: 'Clarifying Matcha & French Clay Face Polish',
    tagline: 'Gentle exfoliating mask with Uji matcha, kaolin & salicylic bark',
    category: 'Skincare',
    price: 1650,
    originalPrice: 1950,
    rating: 4.7,
    reviewCount: 54,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: false,
    isNewArrival: false,
    isOrganic: true,
    inStock: true,
    shortDescription: 'A dual-action detoxifying clay mask and micro-polish that unclogs pores, dissolves dead cells, and clarifies oily T-zones.',
    fullDescription: 'Combines antioxidant-rich ceremonial grade matcha with French white kaolin clay and natural willow bark (BHA). It purifies congestion without stripping the delicate lipid barrier, leaving skin silky, calm, and visibly refined.',
    keyBenefits: [
      'Draws out urban impurities and sebum without tight or drying discomfort',
      'Refines pores and reduces blackhead formation',
      'Soothes active breakouts with natural catechins and tea polyphenols',
      'Biodegradable micro-jojoba spheres provide ultra-gentle manual polishing'
    ],
    ingredients: [
      'Kaolin (French White Clay)',
      'Camellia Sinensis (Matcha Green Tea) Leaf Powder',
      'Salix Alba (Willow Bark) Extract',
      'Aloe Barbadensis Leaf Hydrosol',
      'Hydrogenated Jojoba Oil Beads',
      'Melaleuca Alternifolia (Tea Tree) Leaf Water',
      'Glycerin'
    ],
    howToUse: [
      'Apply an even layer to cleansed, damp face avoiding the immediate eye zone.',
      'Leave for 8 to 10 minutes until semi-dry.',
      'Rinse with warm water using gentle circular polishing strokes.'
    ],
    sizeVolume: '75 ml / 2.5 fl oz jar',
    suitability: 'Ideal for normal, combination, and acne-prone skin.'
  },
  {
    id: 'aura-011',
    name: 'Silk Peony Mineral Bronzing Veil',
    tagline: 'Sun-warmed baked terracotta powder with micronized silk mica',
    category: 'Makeup',
    price: 1750,
    originalPrice: 2050,
    rating: 4.8,
    reviewCount: 71,
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: false,
    isNewArrival: true,
    isOrganic: false,
    inStock: true,
    shortDescription: 'Baked on Italian terracotta tiles, this bronzer sweeps effortless golden hour warmth across cheekbones and temples.',
    fullDescription: 'A slow-baked mineral bronzing powder that imparts a natural, healthy sun-kissed warmth without orange undertones. Enriched with real silk amino acids and antioxidant white peony extract for seamless, poreless blending.',
    keyBenefits: [
      'Multi-dimensional baked formula that never looks flat or muddy',
      'Universal warm golden undertone flattering across light to deep Indian skin tones',
      'Long-wearing pigment that resists humidity and heat',
      'Luxe magnetic compact with custom vanity mirror'
    ],
    ingredients: [
      'Talc-Free Mica',
      'Paeonia Lactiflora (White Peony) Root Extract',
      'Silk Amino Acids',
      'Zea Mays (Corn) Starch',
      'Iron Oxides (CI 77491, CI 77492, CI 77499)',
      'Octyldodecyl Stearoyl Stearate'
    ],
    howToUse: [
      'Swirl a fluffy powder brush over the terracotta dome.',
      'Sweep across hairline, temples, cheekbones, and jawline in a "3" shape.',
      'Dust lightly across collarbones for radiant warmth.'
    ],
    sizeVolume: '9.5 g / 0.33 oz',
    suitability: 'Universal warm bronzer; suitable for all skin types.'
  },
  {
    id: 'aura-012',
    name: 'Whipped Shea & Jasmine Soufflé Body Butter',
    tagline: 'Decadent cloud cream with Madurai jasmine sambac & murumuru',
    category: 'Body Care',
    price: 1850,
    originalPrice: 2200,
    rating: 4.9,
    reviewCount: 133,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1608248597359-5f21e51381e4?auto=format&fit=crop&w=800&q=80'
    ],
    isBestseller: true,
    isNewArrival: false,
    isOrganic: true,
    inStock: true,
    shortDescription: 'Air-whipped botanical body butter that melts upon contact, cocooning the body in intense moisture and sacred jasmine aroma.',
    fullDescription: 'Crafted with ethically sourced unrefined shea butter, Brazilian murumuru butter, and hand-distilled night-blooming Madurai Mogra (Jasmine Sambac). This whipped cloud cream melts into thirsty skin to soften rough patches and impart an unforgettable floral trail.',
    keyBenefits: [
      'Deep 48-hour moisture barrier replenishment for dry elbows and legs',
      'Air-whipped texture that penetrates quickly without greasy film',
      'Exquisite, authentic royal Indian Mogra (Jasmine) aroma',
      'Free from mineral oils, synthetic silicones, and parabens'
    ],
    ingredients: [
      'Butyrospermum Parkii (Shea) Butter (Organic 45%)',
      'Astrocaryum Murumuru Seed Butter',
      'Jasminum Sambac (Mogra) Flower Extract',
      'Cocos Nucifera (Virgin Coconut) Oil',
      'Theobroma Cacao (Cocoa) Seed Butter',
      'Prunus Armeniaca (Apricot) Kernel Oil',
      'Vegetable Squalane'
    ],
    howToUse: [
      'Scoop a dollop of whipped butter into palms.',
      'Massage generously over limbs, focusing on dry heels, elbows, and knees.',
      'Best applied after a warm evening bath for maximum softness.'
    ],
    sizeVolume: '200 ml / 6.7 fl oz glass tub',
    suitability: 'Luxurious hydration for normal to extra-dry skin.'
  }
];

export const CATEGORIES: { id: string; name: string; description: string; image: string }[] = [
  {
    id: 'Skincare',
    name: 'Skincare',
    description: 'Targeted serums, clinical-botanical elixirs, and radiant skin treatments.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Makeup',
    name: 'Makeup',
    description: 'Clean foundations, luminous bronzers, and radiant liquid highlighters.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Lip Care',
    name: 'Lip Care',
    description: 'Pillow-soft matte lipsticks, rose petal sleeping masks, and nourishing balms.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Face Care',
    name: 'Face Care',
    description: 'Ceramic rollerball eye elixirs, soothing night cremes, and floral hydrosols.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'Body Care',
    name: 'Body Care',
    description: 'Mysore sandalwood nectars, whipped jasmine body soufflés, and dry oils.',
    image: 'https://images.unsplash.com/photo-1608248597359-5f21e51381e4?auto=format&fit=crop&w=800&q=80'
  }
];
