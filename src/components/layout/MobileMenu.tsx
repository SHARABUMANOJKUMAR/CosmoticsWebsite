import { NavLink } from 'react-router-dom';
import { Drawer } from '../ui/Drawer';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} position="left" width="340px">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 'var(--spacing-6)' }}>
        {/* Brand header */}
        <div style={{ paddingBottom: 'var(--spacing-4)', borderBottom: '1px solid var(--border-subtle)' }}>
          <Typography variant="h3" style={{ fontSize: '1.4rem', color: 'var(--color-deep-burgundy)' }}>
            AURA BOTANICA
          </Typography>
          <Typography variant="eyebrow" style={{ marginTop: '4px' }}>
            Bengaluru Atelier
          </Typography>
        </div>

        {/* Navigation list */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              style={({ isActive }) => ({
                display: 'block',
                padding: 'var(--spacing-3) var(--spacing-4)',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: isActive ? 'var(--color-deep-burgundy)' : 'var(--text-secondary)',
                backgroundColor: isActive ? 'var(--color-soft-blush)' : 'transparent',
                fontWeight: isActive ? 600 : 400,
                transition: 'all var(--transition-fast)'
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Quick CTA */}
        <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-6)', borderTop: '1px solid var(--border-subtle)' }}>
          <Button variant="secondary" fullWidth to="/shop" onClick={onClose} style={{ marginBottom: 'var(--spacing-3)' }}>
            <Sparkles size={16} /> Explore All Products
          </Button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <MapPin size={14} color="var(--color-rose-gold)" />
              <Typography variant="body-sm">Indiranagar, Bengaluru 560038</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Phone size={14} color="var(--color-rose-gold)" />
              <a href="tel:+918023456789" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
                +91 (080) 2345-6789
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Mail size={14} color="var(--color-rose-gold)" />
              <a href="mailto:concierge@aurabotanica.in" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
                concierge@aurabotanica.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
