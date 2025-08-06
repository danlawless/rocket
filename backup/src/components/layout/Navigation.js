import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Badge from '../ui/Badge';
import './Navigation.css';

/**
 * MW Trading Bottom Navigation Component
 * 
 * Mobile-first bottom navigation with tab indicators and notification badges
 * Auto-hides on scroll down, shows on scroll up for better UX
 */

const Navigation = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  // Auto-hide navigation on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    {
      path: '/',
      icon: '🏠',
      label: 'Home',
      badge: null
    },
    {
      path: '/scanner',
      icon: '📊',
      label: 'Scanner',
      badge: { count: 23, color: 'success' }
    },
    {
      path: '/setups',
      icon: '🎯',
      label: 'Setups',
      badge: { count: 12, color: 'critical' }
    },
    {
      path: '/intelligence',
      icon: '🤖',
      label: 'Intelligence',
      badge: { count: 5, color: 'warning' }
    },
    {
      path: '/alerts',
      icon: '⚡',
      label: 'Alerts',
      badge: { count: 8, color: 'danger', pulse: true }
    }
  ];

  return (
    <nav className={`mw-navigation ${isVisible ? 'mw-navigation-visible' : 'mw-navigation-hidden'}`}>
      <div className="mw-navigation-container">
        <div className="mw-navigation-items">
          {navigationItems.map((item) => (
            <NavItem
              key={item.path}
              path={item.path}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
        
        {/* Active indicator line */}
        <div className="mw-navigation-indicator" />
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className="mw-navigation-safe-area" />
    </nav>
  );
};

// Individual Navigation Item Component
const NavItem = ({ path, icon, label, badge, isActive }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => 
        `mw-nav-item ${isActive ? 'mw-nav-item-active' : ''}`
      }
    >
      <div className="mw-nav-item-content">
        <div className="mw-nav-item-icon-container">
          <span className="mw-nav-item-icon">{icon}</span>
          {badge && (
            <Badge
              variant="notification"
              color={badge.color}
              size="xs"
              pulse={badge.pulse}
              className="mw-nav-item-badge"
            >
              {badge.count}
            </Badge>
          )}
        </div>
        <span className="mw-nav-item-label">{label}</span>
      </div>
      
      {/* Active state indicator */}
      {isActive && <div className="mw-nav-item-active-dot" />}
    </NavLink>
  );
};

export default Navigation;