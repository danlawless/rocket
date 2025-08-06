import React from 'react';
import './Card.css';

/**
 * MW Trading Card Component
 * 
 * Base card component following MW design system
 * Supports confidence-based styling and various variants
 * 
 * Props:
 * - children: Card content
 * - variant: 'default' | 'elevated' | 'flat' | 'outline'
 * - confidence: number (0-100) for confidence-based styling
 * - className: additional CSS classes
 * - onClick: click handler
 * - padding: 'none' | 'sm' | 'md' | 'lg' | 'xl'
 */

const Card = ({ 
  children, 
  variant = 'default',
  confidence,
  className = '',
  onClick,
  padding = 'md',
  ...props 
}) => {
  // Generate confidence class
  const getConfidenceClass = (confidence) => {
    if (confidence >= 95) return 'confidence-critical';
    if (confidence >= 85) return 'confidence-high';
    if (confidence >= 70) return 'confidence-medium';
    if (confidence >= 50) return 'confidence-low';
    return 'confidence-very-low';
  };

  const classes = [
    'mw-card',
    `mw-card-${variant}`,
    `mw-card-padding-${padding}`,
    confidence ? getConfidenceClass(confidence) : '',
    onClick ? 'mw-card-clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;