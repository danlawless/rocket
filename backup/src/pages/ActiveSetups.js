import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { tradingSetups } from '../data/dummyData';

/**
 * MW Active Setups Page
 * 
 * Manage and monitor all active trading setups
 * Features:
 * - Setup lifecycle tracking (approaching, active, past_due)
 * - Real-time P&L monitoring
 * - Risk management tools
 * - Setup details modal with TradingView integration
 */

const ActiveSetups = () => {
  const [activeTab, setActiveTab] = React.useState('active');
  
  const setupsByStatus = {
    active: tradingSetups.filter(s => s.status === 'active'),
    approaching: tradingSetups.filter(s => s.status === 'approaching'),
    past_due: tradingSetups.filter(s => s.status === 'past_due'),
    all: tradingSetups
  };

  return (
    <div className="active-setups">
      <div className="setups-container">
        {/* Setup Tabs */}
        <SetupTabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setupCounts={setupsByStatus}
        />
        
        {/* Setup Grid */}
        <SetupGrid setups={setupsByStatus[activeTab]} />
      </div>
    </div>
  );
};

// Setup Tabs Component
const SetupTabs = ({ activeTab, setActiveTab, setupCounts }) => {
  const tabs = [
    { id: 'active', label: 'Active', color: 'success', count: setupCounts.active.length },
    { id: 'approaching', label: 'Approaching', color: 'warning', count: setupCounts.approaching.length },
    { id: 'past_due', label: 'Past Due', color: 'danger', count: setupCounts.past_due.length },
    { id: 'all', label: 'All Setups', color: 'info', count: setupCounts.all.length }
  ];

  return (
    <div className="setup-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`setup-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="tab-label">{tab.label}</span>
          <Badge variant="solid" color={tab.color} size="xs">
            {tab.count}
          </Badge>
        </button>
      ))}
    </div>
  );
};

// Setup Grid Component
const SetupGrid = ({ setups }) => {
  if (setups.length === 0) {
    return (
      <Card variant="elevated" className="no-setups">
        <div className="no-setups-content">
          <span className="no-setups-icon">🎯</span>
          <h3>No setups found</h3>
          <p>No trading setups match your current filters.</p>
          <Button variant="primary" size="lg">
            🔍 Scan Market
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="setups-grid">
      {setups.map((setup) => (
        <DetailedSetupCard key={setup.id} setup={setup} />
      ))}
    </div>
  );
};

// Detailed Setup Card Component
const DetailedSetupCard = ({ setup }) => (
  <Card 
    variant="elevated" 
    confidence={setup.confidence}
    className="detailed-setup-card"
  >
    <div className="setup-card-header">
      <div className="token-section">
        <div className="token-icon">
          <img 
            src={`/icons/${setup.token.toLowerCase()}.png`} 
            alt={setup.token}
            onError={(e) => e.target.style.display = 'none'}
          />
          <span className="token-fallback">{setup.token}</span>
        </div>
        <div className="token-details">
          <h3 className="token-symbol">{setup.token}</h3>
          <span className="token-name">{setup.tokenName}</span>
        </div>
      </div>
      
      <div className="setup-badges">
        <Badge confidence={setup.confidence} variant="confidence" />
        <Badge variant="status" color="success" pulse>
          {setup.status.toUpperCase()}
        </Badge>
      </div>
    </div>
    
    <div className="setup-details">
      <div className="setup-info-row">
        <span className="info-label">Setup Type:</span>
        <span className="info-value">{setup.setupType}</span>
      </div>
      <div className="setup-info-row">
        <span className="info-label">Timeframe:</span>
        <span className="info-value">{setup.timeframe}</span>
      </div>
      <div className="setup-info-row">
        <span className="info-label">Entry:</span>
        <span className="info-value">${setup.entryPrice}</span>
      </div>
      <div className="setup-info-row">
        <span className="info-label">Current:</span>
        <span className="info-value">${setup.currentPrice}</span>
      </div>
      <div className="setup-info-row">
        <span className="info-label">Target:</span>
        <span className="info-value">${setup.target}</span>
      </div>
      <div className="setup-info-row">
        <span className="info-label">Stop:</span>
        <span className="info-value">${setup.stopLoss}</span>
      </div>
    </div>
    
    {setup.unrealizedPnl !== 0 && (
      <div className="pnl-section">
        <Badge 
          variant="solid" 
          color={setup.unrealizedPnl > 0 ? 'success' : 'danger'}
          size="lg"
        >
          {setup.unrealizedPnl > 0 ? '+' : ''}{setup.unrealizedPnl}%
        </Badge>
      </div>
    )}
    
    <div className="setup-actions">
      <Button variant="primary" size="sm" fullWidth>
        View Analysis
      </Button>
      <Button variant="secondary" size="sm" fullWidth>
        Manage Position
      </Button>
    </div>
  </Card>
);

export default ActiveSetups;