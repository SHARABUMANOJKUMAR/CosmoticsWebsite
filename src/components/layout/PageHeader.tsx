import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Typography } from '../ui/Typography';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  centered?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  centered = true
}) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-warm-ivory)',
        borderBottom: '1px solid var(--border-subtle)',
        paddingTop: 'var(--spacing-12)',
        paddingBottom: 'var(--spacing-12)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: centered ? 'center' : 'flex-start',
              gap: 'var(--spacing-1)',
              marginBottom: 'var(--spacing-4)',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.label}>
                {idx > 0 && <ChevronRight size={12} color="var(--color-rose-gold)" />}
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    style={{
                      color: 'var(--text-muted)',
                      textDecoration: 'none'
                    }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div style={{ textAlign: centered ? 'center' : 'left', maxWidth: '820px', margin: centered ? '0 auto' : '0' }}>
          {eyebrow && (
            <Typography variant="eyebrow">
              {eyebrow}
            </Typography>
          )}

          <Typography
            variant="h1"
            style={{
              marginBottom: description ? 'var(--spacing-3)' : 0,
              color: 'var(--color-deep-burgundy)'
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="body-lg"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}
            >
              {description}
            </Typography>
          )}
        </div>
      </div>
    </section>
  );
};
