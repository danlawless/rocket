import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { marketStatus, tradingSetups, intelligenceData, alertsData } from '../data/dummyData';
import './Dashboard.css';

/**
 * MW Trading Dashboard - Command Center Home Page
 * 
 * Main overview page showing:
 * - Market pulse and status indicators  
 * - High-level intelligence feed
 * - Active trading opportunities
 * - Critical alerts and notifications
 * - Quick action buttons
 */

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Market Pulse Section */}
        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <h2 className="dashboard-section-title">Market Pulse</h2>
            <span className="dashboard-section-subtitle">Real-time market overview</span>
          </div>
          <MarketPulseGrid />
        </section>

        {/* Intelligence Feed Section */}
        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <h2 className="dashboard-section-title">Intelligence Feed</h2>
            <span className="dashboard-section-subtitle">MW signals and analysis</span>
          </div>
          <IntelligenceFeed />
        </section>

        {/* Opportunity Matrix Section */}
        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <h2 className="dashboard-section-title">Top Opportunities</h2>
            <span className="dashboard-section-subtitle">High-confidence setups</span>
          </div>
          <OpportunityMatrix />
        </section>

        {/* Quick Actions Section */}
        <section className="dashboard-section">
          <div className="dashboard-section-header">
            <h2 className="dashboard-section-title">Quick Actions</h2>
            <span className="dashboard-section-subtitle">One-click access</span>
          </div>
          <QuickActionsPanel />
        </section>
      </div>
    </div>
  );
};

// Market Pulse Grid Component
const MarketPulseGrid = () => {
  const pulseCards = [
    {
      title: 'Market Regime',
      value: marketStatus.marketRegime.current,
      confidence: Math.round(marketStatus.marketRegime.strength * 10),
      trend: marketStatus.marketRegime.trend,
      icon: '📈',
      details: `${marketStatus.marketRegime.duration} duration`
    },
    {
      title: 'BTC Momentum',
      value: `$${marketStatus.btc.price.toLocaleString()}`,
      confidence: marketStatus.btc.fearGreedIndex,
      trend: marketStatus.btc.trend,
      icon: '₿',
      details: `${marketStatus.btc.changePercent >= 0 ? '+' : ''}${marketStatus.btc.changePercent}%`
    },
    {
      title: 'Korean Activity',
      value: marketStatus.koreanSession.influence.toUpperCase(),
      confidence: marketStatus.koreanSession.status === 'active' ? 94 : 45,
      trend: 'up',
      icon: '🇰🇷',
      details: `${marketStatus.koreanSession.volumeIncrease}% volume`
    },
    {
      title: 'Active Setups',
      value: `${tradingSetups.filter(s => s.status === 'active').length} Active`,
      confidence: 89,
      trend: 'stable',
      icon: '🎯',
      details: `${tradingSetups.filter(s => s.confidence >= 90).length} high confidence`
    }
  ];

  return (
    <div className="market-pulse-grid">
      {pulseCards.map((card, index) => (
        <Card 
          key={index} 
          variant="elevated" 
          confidence={card.confidence}
          className="pulse-card"
        >
          <div className="pulse-card-header">
            <div className="pulse-card-icon">{card.icon}</div>
            <Badge confidence={card.confidence} variant="confidence" size="sm" />
          </div>
          <div className="pulse-card-body">
            <h3 className="pulse-card-title">{card.title}</h3>
            <div className="pulse-card-value">{card.value}</div>
            <div className="pulse-card-details">{card.details}</div>
          </div>
          <div className="pulse-card-trend">
            <TrendIndicator trend={card.trend} />
          </div>
        </Card>
      ))}
    </div>
  );
};

// Intelligence Feed Component
const IntelligenceFeed = () => {
  const feedItems = [
    {
      type: 'livestream',
      title: 'Today\'s Stream Processed',
      content: intelligenceData.livestream.today.title,
      timestamp: '2 hours ago',
      badge: { text: `${intelligenceData.livestream.today.gemsFound} GEMS`, color: 'critical' },
      icon: '🎥'
    },
    {
      type: 'x_post',
      title: 'MW Trading Signal',
      content: intelligenceData.xPosts[0].content,
      timestamp: intelligenceData.xPosts[0].timeAgo,
      badge: { text: `${intelligenceData.xPosts[0].confidence}% CONF`, color: 'high' },
      icon: '🐦'
    },
    {
      type: 'ai_consensus',
      title: 'AI Consensus Alert',
      content: `${intelligenceData.aiSynthesis.consensusSignals[0].token} showing strong buy signal across all sources`,
      timestamp: '5 minutes ago',
      badge: { text: 'HIGH PRIORITY', color: 'critical' },
      icon: '🤖'
    }
  ];

  return (
    <div className="intelligence-feed">
      {feedItems.map((item, index) => (
        <Card key={index} variant="default" className="feed-item">
          <div className="feed-item-header">
            <div className="feed-item-icon">{item.icon}</div>
            <div className="feed-item-meta">
              <span className="feed-item-title">{item.title}</span>
              <span className="feed-item-timestamp">{item.timestamp}</span>
            </div>
            <Badge 
              variant="solid" 
              color={item.badge.color} 
              size="xs"
            >
              {item.badge.text}
            </Badge>
          </div>
          <div className="feed-item-content">
            {item.content}
          </div>
        </Card>
      ))}
    </div>
  );
};

// Opportunity Matrix Component  
const OpportunityMatrix = () => {
  // Get top 6 highest confidence setups
  const topSetups = tradingSetups
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 6);

  return (
    <div className="opportunity-matrix">
      {topSetups.map((setup) => (
        <SetupCard key={setup.id} setup={setup} />
      ))}
    </div>
  );
};

// Individual Setup Card Component
const SetupCard = ({ setup }) => {
  const getStatusColor = (status) => {
    const colors = {
      'active': 'success',
      'approaching': 'warning', 
      'past_due': 'danger',
      'mw_call': 'critical',
      'fresh': 'critical'
    };
    return colors[status] || 'info';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'active': 'ACTIVE',
      'approaching': 'APPROACH',
      'past_due': 'PAST DUE',
      'mw_call': 'MW CALL',
      'fresh': 'FRESH'
    };
    return labels[status] || status.toUpperCase();
  };

  return (
    <Card 
      variant="elevated" 
      confidence={setup.confidence}
      className="setup-card"
      onClick={() => {/* Navigate to coin analysis */}}
    >
      <div className="setup-card-header">
        <div className="setup-card-token">
          <div className="token-icon">
            <img 
              src={`/icons/${setup.token.toLowerCase()}.png`} 
              alt={setup.token}
              onError={(e) => e.target.style.display = 'none'}
            />
            <span className="token-fallback">{setup.token}</span>
          </div>
          <div className="token-info">
            <span className="token-symbol">{setup.token}</span>
            <span className="token-name">{setup.tokenName}</span>
          </div>
        </div>
        <Badge confidence={setup.confidence} variant="confidence" />
      </div>
      
      <div className="setup-card-body">
        <div className="setup-type">
          <span className="setup-type-label">{setup.setupType}</span>
          <span className="setup-timeframe">{setup.timeframe}</span>
        </div>
        
        <div className="setup-metrics">
          <div className="metric">
            <span className="metric-label">Entry</span>
            <span className="metric-value">${setup.entryPrice}</span>
          </div>
          <div className="metric">
            <span className="metric-label">Target</span>
            <span className="metric-value">${setup.target}</span>
          </div>
          <div className="metric">
            <span className="metric-label">R:R</span>
            <span className="metric-value">{setup.riskReward}</span>
          </div>
        </div>
        
        {setup.unrealizedPnl !== 0 && (
          <div className="setup-pnl">
            <Badge 
              variant="solid" 
              color={setup.unrealizedPnl > 0 ? 'success' : 'danger'}
              size="sm"
            >
              {setup.unrealizedPnl > 0 ? '+' : ''}{setup.unrealizedPnl}%
            </Badge>
          </div>
        )}
      </div>
      
      <div className="setup-card-footer">
        <Badge 
          variant="status" 
          color={getStatusColor(setup.status)} 
          size="sm"
          pulse={setup.status === 'active' || setup.status === 'mw_call'}
        >
          {getStatusLabel(setup.status)}
        </Badge>
        
        <div className="setup-sources">
          {setup.source.map((source) => (
            <span key={source} className={`source-indicator source-${source}`}>
              {source === 'livestream' ? '🎥' : source === 'x' ? '🐦' : '📊'}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

// Quick Actions Panel Component
const QuickActionsPanel = () => {
  const quickActions = [
    {
      title: 'Scan Market',
      description: 'Run full MW scan',
      icon: '🔍',
      action: 'scan',
      color: 'primary'
    },
    {
      title: 'Korean Coins',
      description: 'Monitor Korean activity',
      icon: '🇰🇷', 
      action: 'korean',
      color: 'warning'
    },
    {
      title: 'Risk Check',
      description: 'Review all positions',
      icon: '⚠️',
      action: 'risk',
      color: 'danger'
    },
    {
      title: 'MW Library',
      description: 'Search past calls',
      icon: '📚',
      action: 'library',
      color: 'secondary'
    }
  ];

  return (
    <div className="quick-actions-panel">
      {quickActions.map((action, index) => (
        <Button
          key={index}
          variant={action.color}
          size="lg"
          className="quick-action-button"
          onClick={() => {/* Handle action */}}
        >
          <span className="quick-action-icon">{action.icon}</span>
          <div className="quick-action-content">
            <span className="quick-action-title">{action.title}</span>
            <span className="quick-action-description">{action.description}</span>
          </div>
        </Button>
      ))}
    </div>
  );
};

// Trend Indicator Component
const TrendIndicator = ({ trend }) => {
  const trendConfig = {
    up: { icon: '↗️', color: 'success' },
    down: { icon: '↘️', color: 'danger' },
    stable: { icon: '→', color: 'warning' },
    strengthening: { icon: '⬆️', color: 'success' }
  };

  const config = trendConfig[trend] || trendConfig.stable;
  
  return (
    <span className={`trend-indicator trend-${trend}`}>
      {config.icon}
    </span>
  );
};

export default Dashboard;