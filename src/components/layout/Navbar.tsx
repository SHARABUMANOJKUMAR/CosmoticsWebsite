import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Journal', path: '/journal' },
    { name: 'Our Story', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 'var(--z-sticky)',
          backgroundColor: isScrolled ? 'rgba(255, 249, 242, 0.94)' : 'var(--bg-primary)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--transition-normal)'
        }}
      >
        <div className="site-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '80px'
            }}
          >
            {/* Mobile Menu Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <button
                className="mobile-only-btn"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                style={{
                  display: 'none',
                  padding: 'var(--spacing-2)',
                  color: 'var(--color-deep-burgundy)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <Menu size={24} />
              </button>

              {/* Brand Wordmark Placeholder */}
              <Link
                to="/"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none'
                }}
                aria-label="Aura Botanica Homepage"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'var(--color-deep-burgundy)',
                    lineHeight: 1.1
                  }}
                >
                  AURA BOTANICA
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'var(--color-rose-gold)',
                    marginTop: '2px'
                  }}
                >
                  BENGALURU • BOTANICAL LUXURY
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              role="navigation"
              aria-label="Main Navigation"
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-8)'
              }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.04em',
                    color: isActive ? 'var(--color-deep-burgundy)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: 'var(--spacing-2) 0',
                    borderBottom: isActive ? '2px solid var(--color-rose-gold)' : '2px solid transparent',
                    transition: 'all var(--transition-fast)'
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons: Search, Wishlist, Cart */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)'
              }}
            >
              <Button
                variant="ghost"
                size="icon"
                to="/shop"
                aria-label="Search and filter products in shop"
                title="Search Shop"
              >
                <Search size={20} color="var(--color-deep-burgundy)" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                to="/shop?filter=wishlist"
                aria-label={`Wishlist (${wishlistCount} items)`}
                title="View Wishlist"
                style={{ position: 'relative' }}
              >
                <Heart
                  size={20}
                  color="var(--color-deep-burgundy)"
                  fill={wishlistCount > 0 ? 'var(--color-rose-gold)' : 'none'}
                />
                {wishlistCount > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '6px',
                      right: '6px',
                      backgroundColor: 'var(--color-rose-gold)',
                      color: 'white',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {wishlistCount}
                  </span>
                )}
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={openCart}
                aria-label={`Shopping Cart (${cartCount} items)`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  paddingLeft: 'var(--spacing-4)',
                  paddingRight: 'var(--spacing-4)'
                }}
              >
                <ShoppingBag size={18} />
                <span style={{ fontWeight: 600 }}>Cart</span>
                <span
                  style={{
                    backgroundColor: 'var(--color-rose-gold)',
                    color: 'white',
                    borderRadius: 'var(--radius-full)',
                    padding: '1px 7px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  {cartCount}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-only-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
