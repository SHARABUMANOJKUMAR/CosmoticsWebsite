import type { JournalArticle } from '../types/journal';

export const SAMPLE_ARTICLES: JournalArticle[] = [
  {
    id: 'art-001',
    slug: 'southern-climate-skin-barrier-ritual',
    title: 'Maintaining a Balanced Skin Barrier in Southern Climates',
    subtitle: 'Expert techniques for balancing high humidity and air-conditioned microclimates',
    category: 'Skincare Routine',
    readTime: '5 min read',
    date: 'October 2026',
    author: 'Aura Botanica Editorial Team',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Living in urban hubs like Bengaluru presents a unique skincare dichotomy: pleasant outdoor breezes paired with dehydrating corporate air conditioning. Here is how to maintain cellular lipid equilibrium.',
    content: [
      'The modern urban skin barrier faces a constant push-and-pull. In tropical and plateau environments like Karnataka, high ambient humidity during monsoons alternates with dry, dehumidified indoor air in work spaces. This rapid thermal fluctuation can compromise the stratum corneum.',
      'Rather than piling on heavy occlusive greases that trap heat and clog pores, skin experts recommend lightweight humectant layering. Begin with multi-molecular hyaluronic acid or rose hydrosols that bind ambient water to the epidermis.',
      'Follow with non-comedogenic botanical lipids like cold-pressed rosehip seed oil or plant squalane. These lock in moisture without suffocating the follicles, providing a resilient barrier against pollution particles.',
      'Remember that gentle cleansing at sunset is equally vital. Avoid foaming detergents with harsh alkaline pH; instead, choose milk or balm cleansers that preserve the acid mantle.'
    ],
    tips: [
      'Layer watery essences onto damp skin within 30 seconds of washing.',
      'Keep a micro-fine botanical rose mist at your workspace to rehydrate mid-afternoon.',
      'Switch between lighter lotions in the morning and peptide creams at night.'
    ],
    recommendedProductIds: ['aura-001', 'aura-004', 'aura-006']
  },
  {
    id: 'art-002',
    slug: 'botanical-saffron-kashmir-to-bengaluru',
    title: 'Ingredient Spotlight: The Timeless Science of Kashmiri Saffron',
    subtitle: 'From classical royal preparations to cellular antioxidant defense',
    category: 'Ingredient Spotlight',
    readTime: '4 min read',
    date: 'September 2026',
    author: 'Botanical Research Guild',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Known as "Kesar", Crocus sativus has been prized for centuries. Modern dermatological literature now confirms its high concentrations of crocin and safranal.',
    content: [
      'Kashmiri Saffron (Crocus sativus) has been revered for millennia in subcontinental wellness rituals. Hand-harvested during brief autumnal mornings, each fragile red stigma contains potent carotenoid glycosides, principally crocin and crocetin.',
      'These compounds possess high free-radical scavenging capacity. In topical cosmetic formulations, saffron extract helps counter oxidative stress caused by ultraviolet exposure and particulate matter.',
      'Furthermore, its natural bioflavonoids assist in gently even-toning areas prone to post-inflammatory hyperpigmentation, without the rebound sensitivity often triggered by synthetic bleaching agents.',
      'At Aura Botanica, we source saffron through ethical grower collectives, ensuring fair farmer wages and cold-process solvent extraction to preserve bioactivity.'
    ],
    tips: [
      'Look for deep crimson red stigmas rather than powdered shortcuts.',
      'Saffron serums work synergistically with Vitamin B3 (Niacinamide).',
      'Consistent use for 4 to 6 weeks reveals a clearer, lit-from-within glow.'
    ],
    recommendedProductIds: ['aura-001', 'aura-006']
  },
  {
    id: 'art-003',
    slug: 'evening-unwind-massage-technique',
    title: 'The 3-Minute Evening Facial Massage Ritual',
    subtitle: 'A mindful decompression technique to relieve jaw tension and stimulate lymphatic drainage',
    category: 'Beauty Ritual',
    readTime: '3 min read',
    date: 'August 2026',
    author: 'Master Esthetician Priya R.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Transform your nightly skincare routine from a chore into a restorative sensory pause. Gentle acupressure and sweeping strokes awaken your facial contours.',
    content: [
      'Facial muscles store significant unconscious tension throughout long days of screen concentration, phone calls, and urban commuting. Clenching along the masseter muscles can restrict local microcirculation.',
      'After applying your evening serum or facial oil, warm your hands together. Begin by placing the heels of your palms at the jawline, sweeping slowly up toward the ear lobes with firm, grounding pressure.',
      'Next, use your index and middle knuckles to trace along the cheekbones toward the temples. This encourages sluggish lymphatic fluid to drain toward the submandibular and cervical lymph nodes.',
      'Conclude by gently pressing your ring fingertips into the space between your eyebrows for three deep breaths. Inhale the relaxing lavender and botanical notes to signal to your nervous system that it is time to rest.'
    ],
    tips: [
      'Never tug on dry skin — always use 3 to 4 drops of facial oil for smooth glide.',
      'Maintain an upward and outward direction for all strokes.',
      'Perform this ritual in dim ambient lighting before sleep.'
    ],
    recommendedProductIds: ['aura-001', 'aura-004', 'aura-007']
  },
  {
    id: 'art-004',
    slug: 'transitional-autumn-glow-guide',
    title: 'Autumn to Winter Skincare Transitions for Indian Skin',
    subtitle: 'How to preempt dullness, dryness, and barrier sensitivity as seasons turn',
    category: 'Seasonal Care',
    readTime: '4 min read',
    date: 'October 2026',
    author: 'Skin Health Editorial',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    excerpt: 'As festival seasons arrive and evening breezes turn crisp, seasonal humidity drops. Here are dermatologist-approved tweaks to keep your glow luminous.',
    content: [
      'Seasonal transitions frequently catch our skin off guard. As temperatures cool slightly and winds pick up, epidermal lipid production decelerates. The natural consequence is a duller, rougher skin texture that sheds unevenly.',
      'The remedy is not aggressive chemical peeling, which only exacerbates barrier irritation during dry weather. Instead, swap harsh scrubs for enzymatic polishes and introduce richer body nectars right after stepping out of the shower.',
      'Lip care also requires proactive attention. The skin of the lips is 70% thinner than facial skin and possesses no sebaceous oil glands. Incorporate a nightly rose-honey mask to avoid seasonal peeling.',
      'Stay committed to broad-spectrum SPF 30+ even on overcast days, as long-wave UVA rays remain constant throughout the year.'
    ],
    tips: [
      'Upgrade from a gel moisturizer to a ceramide-rich cream.',
      'Keep warm showers under 10 minutes to prevent lipid stripping.',
      'Apply body oil to damp skin immediately after bathing.'
    ],
    recommendedProductIds: ['aura-004', 'aura-005', 'aura-009', 'aura-012']
  }
];
