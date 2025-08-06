import React from 'react';
import './Badge.css';

/**
 * MW Trading Badge Component
 * 
 * Versatile badge component for confidence levels, status indicators, and metrics
 * Follows MW design system with confidence-based coloring
 * 
 * Props:
 * - children: Badge content
 * - variant: 'confidence' | 'status' | 'metric' | 'outline' | 'solid'
 * - color: 'critical' | 'high' | 'medium' | 'low' | 'success' | 'warning' | 'danger' | 'info'
 * - size: 'xs' | 'sm' | 'md' | 'lg'
 * - confidence: number (0-100) - auto-determines color for confidence badges
 * - pulse: boolean - adds pulsing animation
 * - className: additional CSS classes
 */

const Badge = ({
  children,
  variant = 'solid',
  color,
  size = 'sm',
  confidence,
  pulse = false,
  className = '',
  ...props
}) => {
  // Auto-determine color based on confidence level
  const getConfidenceColor = (confidence) => {
    if (confidence >= 95) return 'critical';
    if (confidence >= 85) return 'high';
    if (confidence >= 70) return 'medium';
    if (confidence >= 50) return 'low';
    return 'very-low';
  };

  // Use confidence-based color if confidence is provided
  const badgeColor = confidence !== undefined ? getConfidenceColor(confidence) : color || 'info';

  const classes = [
    'mw-badge',
    `mw-badge-${variant}`,
    `mw-badge-${size}`,
    `mw-badge-${badgeColor}`,
    pulse ? 'mw-badge-pulse' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
      {confidence !== undefined && variant === 'confidence' && '%'}
    </span>
  );
};

// Specialized badge components
export const ConfidenceBadge = ({ confidence, ...props }) => (
  <Badge variant="confidence" confidence={confidence} {...props}>
    {confidence}
  </Badge>
);

export const StatusBadge = ({ status, ...props }) => {
  const statusConfig = {
    active: { color: 'success', children: 'ACTIVE', pulse: true },
    approaching: { color: 'warning', children: 'APPROACH' },
    past_due: { color: 'danger', children: 'PAST DUE' },
    expired: { color: 'low', children: 'EXPIRED' },
    fresh: { color: 'critical', children: 'FRESH', pulse: true },
    mw_call: { color: 'critical', children: 'MW CALL', pulse: true }
  };

  const config = statusConfig[status] || { color: 'info', children: status };
  
  return <Badge variant="status" {...config} {...props} />;
};

export const MetricBadge = ({ label, value, color = 'info', ...props }) => (
  <div className="mw-metric-badge-container">
    <span className="mw-metric-label">{label}</span>
    <Badge variant="metric" color={color} {...props}>
      {value}
    </Badge>
  </div>
);

export const TrendBadge = ({ change, ...props }) => {
  const isPositive = change > 0;
  const color = isPositive ? 'success' : 'danger';
  const symbol = isPositive ? '+' : '';
  
  return (
    <Badge variant="solid" color={color} {...props}>
      {symbol}{change}%
    </Badge>
  );
};

export default Badge;