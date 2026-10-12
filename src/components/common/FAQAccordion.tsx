import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import type { FAQItem, FAQCategory } from '../../types/faq';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';

export interface FAQAccordionProps {
  items: FAQItem[];
  showCategoryTabs?: boolean;
}

const CATEGORIES: ('All' | FAQCategory)[] = [
  'All',
  'Ordering & Delivery',
  'Product Formulation',
  'Skincare Routines',
  'Returns & Care'
];

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  showCategoryTabs = true
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);
  const [activeCategory, setActiveCategory] = useState<'All' | FAQCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = items.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Search Input for FAQs */}
      <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto', width: '100%' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions (e.g. shipping, cruelty-free, serums)..."
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 2.6rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-medium)',
            backgroundColor: 'var(--color-white)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-deep-burgundy)'
          }}
          aria-label="Search FAQ"
        />
        <Search
          size={16}
          color="var(--color-rose-gold)"
          style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
        />
      </div>

      {/* Category Tabs */}
      {showCategoryTabs && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-2)',
            flexWrap: 'wrap',
            marginBottom: 'var(--spacing-4)'
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  backgroundColor: isSelected ? 'var(--color-deep-burgundy)' : 'var(--color-white)',
                  color: isSelected ? 'var(--color-warm-ivory)' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--color-deep-burgundy)' : '1px solid var(--border-medium)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Accordion Item Cards */}
      {filteredItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 'var(--spacing-8)', color: 'var(--text-muted)' }}>
          <HelpCircle size={32} style={{ margin: '0 auto var(--spacing-2) auto', opacity: 0.5 }} />
          <Typography variant="body">No questions match your search.</Typography>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          {filteredItems.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <Card
                key={item.id}
                variant="bordered"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: isOpen ? '1px solid var(--color-rose-gold)' : '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-white)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-btn-${item.id}`}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-5) var(--spacing-6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--spacing-4)',
                    textAlign: 'left',
                    backgroundColor: isOpen ? 'var(--color-warm-ivory)' : 'transparent',
                    transition: 'background var(--transition-fast)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-burgundy)'
                    }}
                  >
                    {item.question}
                  </span>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-deep-burgundy)' : 'var(--color-soft-blush)',
                      color: isOpen ? 'var(--color-warm-ivory)' : 'var(--color-deep-burgundy)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-normal)'
                    }}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    style={{
                      padding: 'var(--spacing-4) var(--spacing-6) var(--spacing-6) var(--spacing-6)',
                      borderTop: '1px solid var(--border-subtle)',
                      animation: 'fadeIn 0.2s ease-out'
                    }}
                  >
                    <Typography
                      variant="body"
                      style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7
                      }}
                    >
                      {item.answer}
                    </Typography>
                    <div style={{ marginTop: 'var(--spacing-2)' }}>
                      <span
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-rose-gold-dark)',
                          fontWeight: 600
                        }}
                      >
                        Category: {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
