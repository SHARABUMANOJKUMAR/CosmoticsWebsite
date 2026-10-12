import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/Button';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'var(--spacing-6)',
        right: 'var(--spacing-6)',
        zIndex: 90,
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <Button
        variant="primary"
        size="icon"
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          boxShadow: 'var(--shadow-lg)',
          backgroundColor: 'var(--color-deep-burgundy)',
          color: 'var(--color-warm-ivory)'
        }}
      >
        <ArrowUp size={20} />
      </Button>
    </div>
  );
};
