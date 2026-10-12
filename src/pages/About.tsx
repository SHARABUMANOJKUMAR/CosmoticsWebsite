import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const brandPillars = [
    {
      icon: Leaf,
      title: 'Botanical Authenticity',
      description: 'We believe genuine beauty originates in the soil. We formulate strictly with certified plant oils, steam-distilled floral hydrosols, and clean bio-peptides without petroleum fillers.'
    },
    {
      icon: Sparkles,
      title: 'Formulation Alchemy',
      description: 'Traditional wisdom is honored, yet fortified through contemporary cosmetic science. Our pH-balanced formulations respect the micro-biome of delicate skin.'
    },
    {
      icon: Shield,
      title: 'Radical Transparency',
      description: 'Zero hidden fragrance agents. Every single botanical extract, lipid, and active preservative is fully disclosed on our packaging and digital catalogue.'
    },
    {
      icon: Heart,
      title: 'Compassion & Ethics',
      description: 'Certified cruelty-free and respectful of the earth. We use recyclable amber and frosted glass bottles, ethical mica sourcing, and carbon-conscious localized distribution.'
    }
  ];

  return (
    <div className="about-page animate-fade-in">
      <PageHeader
        eyebrow="Our Story & Philosophy"
        title="Rooted in Nature. Refined by Science."
        description="Aura Botanica was created to redefine luxury skincare as an unhurried, mindful sensory ritual crafted in Bengaluru, India."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Brand Introduction Section with Editorial Split */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--spacing-12)',
              alignItems: 'center'
            }}
          >
            <div>
              <Typography variant="eyebrow">
                The Atelier Heritage
              </Typography>
              <Typography
                variant="h2"
                style={{
                  color: 'var(--color-deep-burgundy)',
                  fontSize: 'clamp(1.85rem, 3vw, 2.45rem)',
                  marginBottom: 'var(--spacing-4)',
                  lineHeight: 1.2
                }}
              >
                A Sanctuary for Conscious Beauty
              </Typography>
              <Typography
                variant="body-lg"
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--spacing-4)',
                  lineHeight: 1.7
                }}
              >
                Conceived in the serene, tree-lined avenues of Bengaluru, Aura Botanica was envisioned to bridge an essential gap in modern beauty: skincare that is uncompromisingly clean, aesthetically luxurious, and formulated specifically for the diverse textures and climatic realities of subcontinental complexions.
              </Typography>
              <Typography
                variant="body"
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--spacing-6)',
                  lineHeight: 1.7
                }}
              >
                In a fast-paced world dominated by synthetic instant-fixes and cluttered routines, our formulations encourage an unhurried pause. We view your daily skincare not as a chore, but as an intimate moment of renewal and self-adoration.
              </Typography>

              <div
                style={{
                  backgroundColor: 'var(--color-warm-ivory)',
                  borderLeft: '3px solid var(--color-rose-gold)',
                  padding: 'var(--spacing-4)',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  marginBottom: 'var(--spacing-6)'
                }}
              >
                <Typography variant="body" style={{ fontStyle: 'italic', color: 'var(--color-deep-burgundy)', margin: 0 }}>
                  "Beauty is not about masking who you are; it is about awakening the incandescent vitality that already lives within your skin."
                </Typography>
              </div>

              <Button variant="primary" to="/shop">
                Explore the Atelier Formulations <ArrowRight size={16} />
              </Button>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  aspectRatio: '4/5',
                  backgroundColor: 'var(--color-warm-ivory)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
                  alt="Mindful wellness and botanical self-care"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Bengaluru Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '20px',
                  backgroundColor: 'var(--color-white)',
                  padding: 'var(--spacing-4) var(--spacing-6)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-3)'
                }}
              >
                <MapPin size={24} color="var(--color-rose-gold)" />
                <div>
                  <Typography variant="caption" style={{ fontWeight: 700, color: 'var(--color-deep-burgundy)', display: 'block' }}>
                    Bengaluru Atelier
                  </Typography>
                  <Typography variant="caption" style={{ color: 'var(--text-muted)' }}>
                    Formulated & Dispatched in Karnataka
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-8)'
            }}
          >
            <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-white)' }}>
              <Typography variant="eyebrow">
                Our Purpose
              </Typography>
              <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
                Our Mission
              </Typography>
              <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                To formulate clean, clinically proven, and sensorial cosmetics that respect the biological integrity of every skin type. We empower individuals to celebrate their natural tone, texture, and luminosity with plant actives harvested in harmony with local grower communities.
              </Typography>
            </Card>

            <Card variant="bordered" padding="lg" style={{ backgroundColor: 'var(--color-white)' }}>
              <Typography variant="eyebrow">
                The Horizon
              </Typography>
              <Typography variant="h3" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
                Our Vision
              </Typography>
              <Typography variant="body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                To become India's foremost benchmark for botanical luxury cosmetics, demonstrating that modern conscious formulating, zero compromises on efficacy, and refined packaging aesthetics can coexist seamlessly.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Values Grid */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--spacing-12) auto' }}>
            <Typography variant="eyebrow">
              Guiding Principles
            </Typography>
            <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-3)' }}>
              The Pillars of Our Craft
            </Typography>
            <Typography variant="body" style={{ color: 'var(--text-secondary)' }}>
              Integrity is formulated into every jar, droplet, and brush stroke.
            </Typography>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--spacing-8)'
            }}
          >
            {brandPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  padding="lg"
                  style={{
                    backgroundColor: 'var(--color-warm-ivory)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-3)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-rose-gold)'
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <Typography variant="h3" style={{ fontSize: '1.3rem', color: 'var(--color-deep-burgundy)', margin: 0 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {p.description}
                  </Typography>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Aura Botanica */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-soft-blush)' }}>
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--spacing-12)',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: 'var(--color-white)',
                aspectRatio: '1/1'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
                alt="Botanical formulation research and lab testing"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <Typography variant="eyebrow">
                The Distinction
              </Typography>
              <Typography variant="h2" style={{ color: 'var(--color-deep-burgundy)', marginBottom: 'var(--spacing-4)' }}>
                Why Beauty Purists Choose Aura Botanica
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-8)' }}>
                {[
                  'Handcrafted in small, limited batches to guarantee peak active ingredient freshness.',
                  'pH-balanced specifically between 4.8 and 5.5 to safeguard the skin’s acid mantle.',
                  'Tested clinically under independent dermatological supervision for zero sensitization.',
                  'Free from parabens, mineral oils, synthetic petrochemical waxes, and drying alcohol.',
                  'Personalized concierge guidance directly accessible via our Bengaluru headquarters.'
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} color="var(--color-rose-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <Typography variant="body" style={{ color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>
                      {point}
                    </Typography>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
                <Button variant="primary" size="lg" to="/shop">
                  Browse the Full Catalogue
                </Button>
                <Button variant="outline" size="lg" to="/contact">
                  Speak to Concierge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
