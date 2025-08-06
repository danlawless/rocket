import React from 'react';
import { useLocation } from 'react-router-dom';
import Badge from '../ui/Badge';
import './TopBar.css';

/**
 * MW Trading Top Bar Component
 * 
 * Main header component with app branding, page context, and status indicators
 * Shows current page, real-time market status, and alert counters
 */

const TopBar = () => {
  const location = useLocation();
  
  // Get page title based on current route
  const getPageTitle = (pathname) => {
    const titles = {
      '/': 'Command Center',
      '/scanner': 'Market Scanner',
      '/setups': 'Active Setups',
      '/intelligence': 'Intelligence Hub',
      '/alerts': 'Alert Center',
      '/library': 'MW Library',
      '/settings': 'Settings'
    };
    
    // Handle dynamic routes like /coin/SOL
    if (pathname.startsWith('/coin/')) {
      const symbol = pathname.split('/')[2];
      return `${symbol} Analysis`;
    }
    
    return titles[pathname] || 'MW Trading';
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="mw-topbar">
      <div className="mw-topbar-container">
        {/* Left Section - Logo & Page Title */}
        <div className="mw-topbar-left">
          <div className="mw-topbar-logo">
            <div className="mw-logo-icon">MW</div>
            <div className="mw-logo-text">
              <span className="mw-logo-brand">MW Trading</span>
              <span className="mw-logo-tagline">Command Center</span>
            </div>
          </div>
          
          <div className="mw-topbar-divider" />
          
          <div className="mw-topbar-page">
            <h1 className="mw-page-title">{pageTitle}</h1>
            <div className="mw-page-breadcrumb">
              <span className="mw-breadcrumb-time">
                {new Date().toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
              <span className="mw-breadcrumb-separator">•</span>
              <span className="mw-breadcrumb-session">US Session</span>
            </div>
          </div>
        </div>

        {/* Right Section - Status & Actions */}
        <div className="mw-topbar-right">
          {/* Market Status Indicators */}
          <div className="mw-topbar-status">
            <div className="mw-status-item">
              <span className="mw-status-label">BTC</span>
              <span className="mw-status-value success">$67.2K</span>
              <Badge variant="solid" color="success" size="xs">+2.3%</Badge>
            </div>
            
            <div className="mw-status-divider" />
            
            <div className="mw-status-item">
              <span className="mw-status-label">US500</span>
              <span className="mw-status-value success">4,156</span>
              <Badge variant="solid" color="success" size="xs">+0.8%</Badge>
            </div>
            
            <div className="mw-status-divider" />
            
            <div className="mw-status-item">
              <span className="mw-status-label">Korean</span>
              <Badge variant="status" color="success" size="xs" pulse>ACTIVE</Badge>
            </div>
          </div>

          {/* Alert Notifications */}
          <div className="mw-topbar-alerts">
            <button className="mw-alert-button">
              <div className="mw-alert-icon">🚨</div>
              <Badge 
                variant="notification" 
                className="mw-alert-count"
                size="xs"
              >
                12
              </Badge>
            </button>
          </div>

          {/* Connection Status */}
          <div className="mw-topbar-connection">
            <div className="mw-connection-indicator">
              <div className="mw-connection-dot success" />
              <span className="mw-connection-label">Live</span>
            </div>
          </div>

          {/* Settings Menu */}
          <div className="mw-topbar-menu">
            <button className="mw-menu-button">
              <div className="mw-menu-avatar">
                <span>MW</span>
              </div>
              <div className="mw-menu-info">
                <span className="mw-menu-name">Trader Pro</span>
                <Badge variant="solid" color="critical" size="xs">PREMIUM</Badge>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Market Alert Banner (shown when needed) */}
      <MarketAlertBanner />
    </header>
  );
};

// Market Alert Banner Component
const MarketAlertBanner = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  
  if (!showAlert) return null;
  
  return (
    <div className="mw-alert-banner">
      <div className="mw-alert-banner-content">
        <div className="mw-alert-banner-icon">🇰🇷</div>
        <div className="mw-alert-banner-text">
          <strong>Korean Session Alert:</strong> High volume pump activity detected - 
          Monitor PEPE, WIF, BONK for potential breakouts
        </div>
        <button 
          className="mw-alert-banner-close"
          onClick={() => setShowAlert(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default TopBar;