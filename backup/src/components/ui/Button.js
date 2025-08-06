import React from 'react';
import './Button.css';

/**
 * MW Trading Button Component
 * 
 * Professional button component following MW design system
 * Supports various variants, sizes, and states
 * 
 * Props:
 * - children: Button content
 * - variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'outline'
 * - size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * - disabled: boolean
 * - loading: boolean
 * - fullWidth: boolean
 * - leftIcon: React component/element
 * - rightIcon: React component/element
 * - onClick: click handler
 * - className: additional CSS classes
 */

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  className = '',
  ...props
}) => {
  const classes = [
    'mw-btn',
    `mw-btn-${variant}`,
    `mw-btn-${size}`,
    fullWidth ? 'mw-btn-full-width' : '',
    loading ? 'mw-btn-loading' : '',
    disabled ? 'mw-btn-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <button 
      className={classes}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner size={size} />}
      {!loading && leftIcon && (
        <span className="mw-btn-icon mw-btn-icon-left">
          {leftIcon}
        </span>
      )}
      <span className={`mw-btn-content ${loading ? 'mw-btn-content-loading' : ''}`}>
        {children}
      </span>
      {!loading && rightIcon && (
        <span className="mw-btn-icon mw-btn-icon-right">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

// Loading Spinner Component
const LoadingSpinner = ({ size }) => {
  const spinnerSize = {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px'
  }[size] || '16px';

  return (
    <div 
      className="mw-btn-spinner"
      style={{ width: spinnerSize, height: spinnerSize }}
    />
  );
};

export default Button;