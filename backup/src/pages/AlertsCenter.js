import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { alertsData } from '../data/dummyData';

/**
 * MW Alerts Center Page
 * 
 * Centralized alert management system:
 * - Critical trading alerts
 * - Setup notifications
 * - Intelligence signals
 * - Risk management warnings
 */

const AlertsCenter = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const allAlerts = [
    ...alertsData.critical.map(a => ({ ...a, category: 'critical' })),
    ...alertsData.setup.map(a => ({ ...a, category: 'setup' })),
    ...alertsData.intelligence.map(a => ({ ...a, category: 'intelligence' }))
  ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  const filteredAlerts = activeCategory === 'all' 
    ? allAlerts 
    : allAlerts.filter(alert => alert.category === activeCategory);

  return (
    <div className="alerts-center">
      <div className="alerts-container">
        {/* Alert Categories */}
        <AlertCategories 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          alertsData={alertsData}
        />
        
        {/* Alert List */}
        <AlertsList alerts={filteredAlerts} />
      </div>
    </div>
  );
};

// Alert Categories Component
const AlertCategories = ({ activeCategory, setActiveCategory, alertsData }) => {
  const categories = [
    {
      id: 'all',
      title: 'All Alerts',
      count: alertsData.critical.length + alertsData.setup.length + alertsData.intelligence.length,
      icon: '🚨',
      color: 'info',
      description: 'All notifications'
    },
    {
      id: 'critical',
      title: 'Critical Alerts',
      count: alertsData.critical.length,
      icon: '🔴',
      color: 'danger',
      description: 'Immediate attention required'
    },
    {
      id: 'setup',
      title: 'Setup Alerts',
      count: alertsData.setup.length,
      icon: '🎯',
      color: 'warning',
      description: 'Trading opportunities'
    },
    {
      id: 'intelligence',
      title: 'Intelligence',
      count: alertsData.intelligence.length,
      icon: '🤖',
      color: 'success',
      description: 'MW mentions & signals'
    }
  ];

  return (
    <div className="alert-categories">
      {categories.map((category) => (
        <Card
          key={category.id}
          variant={activeCategory === category.id ? 'elevated' : 'default'}
          className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
        >
          <div className="category-header">
            <span className="category-icon">{category.icon}</span>
            <Badge variant="solid" color={category.color} size="sm">
              {category.count}
            </Badge>
          </div>
          <h3 className="category-title">{category.title}</h3>
          <p className="category-description">{category.description}</p>
        </Card>
      ))}
    </div>
  );
};

// Alerts List Component
const AlertsList = ({ alerts }) => {
  if (alerts.length === 0) {
    return (
      <Card variant="elevated" className="no-alerts">
        <div className="no-alerts-content">
          <span className="no-alerts-icon">✓</span>
          <h3>No alerts</h3>
          <p>You're all caught up! No alerts match your current filters.</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="alerts-list">
      <div className="alerts-header">
        <h3>Alerts ({alerts.length})</h3>
        <div className="alerts-actions">
          <Button variant="ghost" size="sm">
            Mark All Read
          </Button>
          <Button variant="secondary" size="sm">
            Settings
          </Button>
        </div>
      </div>
      
      <div className="alerts-grid">
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};

// Individual Alert Card
const AlertCard = ({ alert }) => {
  const getUrgencyColor = (urgency) => {
    const colors = {
      immediate: 'danger',
      high: 'warning', 
      medium: 'info',
      low: 'success'
    };
    return colors[urgency] || 'info';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      critical: '🔴',
      setup: '🎯',
      intelligence: '🤖'
    };
    return icons[category] || '🚨';
  };

  return (
    <Card 
      variant="elevated" 
      confidence={alert.confidence}
      className={`alert-card alert-${alert.category} ${alert.status === 'unread' ? 'unread' : 'read'}`}
    >
      <div className="alert-header">
        <div className="alert-type">
          <span className="alert-type-icon">{getCategoryIcon(alert.category)}</span>
          <span className="alert-type-label">{alert.category.toUpperCase()}</span>
        </div>
        <div className="alert-badges">
          <Badge 
            variant="solid" 
            color={getUrgencyColor(alert.urgency)} 
            size="xs"
          >
            {alert.urgency.toUpperCase()}
          </Badge>
          <Badge confidence={alert.confidence} variant="confidence" size="xs" />
        </div>
      </div>
      
      <div className="alert-body">
        <h4 className="alert-title">{alert.title}</h4>
        <p className="alert-message">{alert.message}</p>
        
        {alert.token && (
          <div className="alert-token">
            <span className="alert-token-label">Token:</span>
            <span className="alert-token-value">{alert.token}</span>
          </div>
        )}
      </div>
      
      <div className="alert-footer">
        <div className="alert-meta">
          <span className="alert-time">{alert.timeAgo}</span>
          <span className="alert-source">Source: {alert.source}</span>
        </div>
        
        <div className="alert-actions">
          {alert.action && (
            <Button variant="primary" size="xs">
              {alert.action}
            </Button>
          )}
          <Button variant="ghost" size="xs">
            Dismiss
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AlertsCenter;