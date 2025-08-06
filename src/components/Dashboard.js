import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Zap, 
  Activity, 
  BarChart3,
  Globe,
  Clock,
  DollarSign,
  Percent,
  Users,
  Eye,
  MessageCircle,
  Repeat,
  Heart,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  CheckCircle,
  Info,
  Grid,
  List
} from 'lucide-react';
import { 
  marketStatus, 
  tradingSetups, 
  intelligenceData, 
  performanceMetrics,
  realtimeUpdates 
} from '../data/dummyData';
import TradesTable from './TradesTable';
import StyledTable from './StyledTable';
import './Dashboard.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2 
    }).format(value);
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 95) return 'confidence-critical';
    if (confidence >= 90) return 'confidence-very-high';
    if (confidence >= 85) return 'confidence-high';
    if (confidence >= 75) return 'confidence-medium';
    return 'confidence-low';
  };

  const getStatusColor = (status) => {
    const colors = {
      'active': 'status-active',
      'mw_priority': 'status-priority', 
      'triggered': 'status-triggered',
      'approaching': 'status-approaching',
      'fresh': 'status-fresh'
    };
    return colors[status] || 'status-default';
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        
        {/* Header Section */}
        <motion.header 
          className="dashboard-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content glass-strong">
            <div className="header-left">
              <div className="logo-section">
                <div className="logo-icon">MW</div>
                <div className="logo-text">
                  <h1 className="logo-title gradient-text">MW Trading</h1>
                  <span className="logo-subtitle">Command Center</span>
                </div>
              </div>
              
              <div className="time-section">
                <div className="current-time">{formatTime(currentTime)}</div>
                <div className="session-status">
                  <span className={`session-indicator ${marketStatus.koreanSession.status === 'active' ? 'active' : ''}`}>
                    🇰🇷 Korean Session
                  </span>
                </div>
              </div>
            </div>
            
            <div className="header-right">
              <div className="key-metrics">
                <div className="metric-item">
                  <span className="metric-label">Win Rate</span>
                  <span className="metric-value text-success">{performanceMetrics.today.winRate}%</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Today P&L</span>
                  <span className="metric-value text-success">+{performanceMetrics.today.totalReturn}%</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Active Setups</span>
                  <span className="metric-value">{performanceMetrics.today.activeSetups}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Market Status Overview */}
        <motion.section 
          className="market-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title">Market Overview</h2>
          <div className="market-cards">
            
            {/* BTC Status Card */}
            <div className="market-card glass animate-fade-in">
              <div className="market-card-header">
                <div className="market-icon">₿</div>
                <div className="market-trend">
                  {marketStatus.btc.trend === 'up' ? <TrendingUp className="trend-up" /> : <TrendingDown className="trend-down" />}
                </div>
              </div>
              <div className="market-card-body">
                <h3 className="market-label">Bitcoin</h3>
                <div className="market-price">{formatCurrency(marketStatus.btc.price)}</div>
                <div className="market-change positive">
                  <ArrowUpRight size={16} />
                  +{formatCurrency(marketStatus.btc.change)} ({marketStatus.btc.changePercent}%)
                </div>
                <div className="market-details">
                  <div className="detail-item">
                    <span>MW Position:</span>
                    <span className="text-success">{marketStatus.btc.mwBandPosition}</span>
                  </div>
                  <div className="detail-item">
                    <span>Fear & Greed:</span>
                    <span className="text-warning">{marketStatus.btc.fearGreedIndex}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* US500 Status Card */}
            <div className="market-card glass animate-fade-in">
              <div className="market-card-header">
                <div className="market-icon">📈</div>
                <div className="market-correlation">
                  <span className="correlation-value">{Math.round(marketStatus.us500.correlation * 100)}%</span>
                </div>
              </div>
              <div className="market-card-body">
                <h3 className="market-label">US500</h3>
                <div className="market-price">{marketStatus.us500.price.toLocaleString()}</div>
                <div className="market-change positive">
                  <ArrowUpRight size={16} />
                  +{marketStatus.us500.change} ({marketStatus.us500.changePercent}%)
                </div>
                <div className="market-details">
                  <div className="detail-item">
                    <span>BTC Correlation:</span>
                    <span className="text-success">{Math.round(marketStatus.us500.correlation * 100)}%</span>
                  </div>
                  <div className="detail-item">
                    <span>Session:</span>
                    <span className="text-info">{marketStatus.us500.session}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Korean Session Card */}
            <div className="market-card glass animate-fade-in korean-card">
              <div className="market-card-header">
                <div className="market-icon">🇰🇷</div>
                <div className="korean-status active">
                  <span className="status-dot"></span>
                  {marketStatus.koreanSession.status.toUpperCase()}
                </div>
              </div>
              <div className="market-card-body">
                <h3 className="market-label">Korean Session</h3>
                <div className="korean-influence">{marketStatus.koreanSession.influence.replace('_', ' ').toUpperCase()}</div>
                <div className="korean-volume">
                  <Zap size={16} />
                  +{marketStatus.koreanSession.volumeIncrease}% Volume
                </div>
                <div className="korean-coins">
                  <span className="korean-label">Pumping:</span>
                  <div className="korean-pumps">
                    {marketStatus.koreanSession.topPumps.map((pump, index) => (
                      <span key={index} className="pump-token">
                        {pump.token} +{pump.change}%
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Market Regime Card */}
            <div className="market-card glass animate-fade-in regime-card">
              <div className="market-card-header">
                <div className="market-icon">🎯</div>
                <div className="regime-strength">
                  <span className="strength-value">{marketStatus.marketRegime.strength}/10</span>
                </div>
              </div>
              <div className="market-card-body">
                <h3 className="market-label">Market Regime</h3>
                <div className="regime-status">{marketStatus.marketRegime.current}</div>
                <div className="regime-trend">
                  <Activity size={16} />
                  {marketStatus.marketRegime.trend}
                </div>
                <div className="market-details">
                  <div className="detail-item">
                    <span>Duration:</span>
                    <span>{marketStatus.marketRegime.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span>Confidence:</span>
                    <span className="text-success">{marketStatus.marketRegime.confidence}%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* Active Trading Opportunities */}
        <motion.section 
          className="trading-opportunities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-header">
            <h2 className="section-title">Active Trading Opportunities</h2>
            <div className="section-header-right">
              <div className="opportunity-stats">
                <span className="stat-item">
                  <Target size={16} />
                  {tradingSetups.length} Active Setups
                </span>
                <span className="stat-item">
                  <BarChart3 size={16} />
                  Avg Confidence: {Math.round(tradingSetups.reduce((acc, setup) => acc + setup.confidence, 0) / tradingSetups.length)}%
                </span>
              </div>
              
              <div className="view-toggle">
                <button
                  className={`view-toggle-btn ${viewMode === 'cards' ? 'active' : ''}`}
                  onClick={() => setViewMode('cards')}
                >
                  <Grid size={16} />
                  Cards
                </button>
                <button
                  className={`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                  onClick={() => setViewMode('table')}
                >
                  <List size={16} />
                  Table
                </button>
              </div>
            </div>
          </div>

          {/* Conditional Rendering: Cards or Table */}
          {viewMode === 'cards' ? (
            <div className="opportunities-grid">
              {tradingSetups.map((setup, index) => (
              <motion.div
                key={setup.id}
                className={`opportunity-card glass ${getConfidenceColor(setup.confidence)} ${getStatusColor(setup.status)}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="opportunity-header">
                  <div className="token-section">
                    <div className="token-icon">
                      <img 
                        src={`https://cryptologos.cc/logos/${setup.token.toLowerCase()}-${setup.token.toLowerCase()}-logo.png`}
                        alt={setup.token}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="token-fallback" style={{ display: 'none' }}>
                        {setup.token}
                      </div>
                    </div>
                    <div className="token-info">
                      <h4 className="token-symbol">{setup.token}</h4>
                      <span className="token-name">{setup.tokenName}</span>
                    </div>
                  </div>
                  
                  <div className="setup-badges">
                    <div className={`confidence-badge ${getConfidenceColor(setup.confidence)}`}>
                      {setup.confidence}%
                    </div>
                    <div className={`status-badge ${getStatusColor(setup.status)}`}>
                      {setup.status === 'mw_priority' ? 'MW PRIORITY' : setup.status.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="opportunity-body">
                  <div className="setup-info">
                    <div className="info-row">
                      <span className="info-label">Setup Type:</span>
                      <span className="info-value setup-type">{setup.setupType}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Timeframe:</span>
                      <span className="info-value timeframe">{setup.timeframe}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Risk/Reward:</span>
                      <span className="info-value risk-reward">{setup.riskReward}:1</span>
                    </div>
                  </div>

                  <div className="price-section">
                    <div className="current-price">
                      <span className="price-label">Current</span>
                      <span className="price-value">${setup.price.toFixed(setup.price < 1 ? 6 : 2)}</span>
                    </div>
                    <div className="price-targets">
                      <div className="target-item">
                        <span>Entry: ${setup.entryPrice.toFixed(setup.entryPrice < 1 ? 6 : 2)}</span>
                      </div>
                      <div className="target-item">
                        <span>Target: ${setup.target1.toFixed(setup.target1 < 1 ? 6 : 2)}</span>
                      </div>
                      <div className="target-item">
                        <span>Stop: ${setup.stopLoss.toFixed(setup.stopLoss < 1 ? 6 : 2)}</span>
                      </div>
                    </div>
                  </div>

                  {setup.unrealizedPnl !== 0 && (
                    <div className={`pnl-section ${setup.unrealizedPnl > 0 ? 'positive' : 'negative'}`}>
                      <span className="pnl-label">Unrealized P&L:</span>
                      <span className="pnl-value">
                        {setup.unrealizedPnl > 0 ? '+' : ''}{setup.unrealizedPnl}%
                      </span>
                    </div>
                  )}

                  {setup.mwQuote && (
                    <div className="mw-quote">
                      <span className="quote-icon">💬</span>
                      <span className="quote-text">"{setup.mwQuote}"</span>
                    </div>
                  )}

                  <div className="setup-meta">
                    <div className="source-tags">
                      {setup.source.map((source, idx) => (
                        <span key={idx} className={`source-tag source-${source}`}>
                          {source === 'livestream' ? '🎥' : 
                           source === 'x' ? '🐦' : 
                           source === 'korean' ? '🇰🇷' : 
                           source === 'ai' ? '🤖' : '📊'}
                        </span>
                      ))}
                    </div>
                    <div className="last-update">
                      <Clock size={12} />
                      {setup.lastUpdate}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          ) : (
            <StyledTable trades={tradingSetups} />
          )}
        </motion.section>

        {/* Intelligence Feed */}
        <motion.section 
          className="intelligence-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-header">
            <h2 className="section-title">MW Intelligence Feed</h2>
            <div className="intelligence-stats">
              <span className="stat-item">
                <Eye size={16} />
                {intelligenceData.livestream.today.viewerCount.toLocaleString()} Viewers
              </span>
              <span className="stat-item">
                <TrendingUp size={16} />
                +{intelligenceData.livestream.today.avgPerformance}% Avg Performance
              </span>
            </div>
          </div>

          <div className="intelligence-grid">
            {/* Livestream Card */}
            <div className="intelligence-card glass livestream-card animate-fade-in">
              <div className="intelligence-header">
                <div className="header-left">
                  <div className="intelligence-icon livestream">🎥</div>
                  <div className="intelligence-title">
                    <h3>Today's Livestream</h3>
                    <span className="stream-status processing">PROCESSING</span>
                  </div>
                </div>
                <div className="header-right">
                  <div className="gems-found">
                    <span className="gems-count">{intelligenceData.livestream.today.gemsFound}</span>
                    <span className="gems-label">Gems Found</span>
                  </div>
                </div>
              </div>
              
              <div className="intelligence-content">
                <h4 className="stream-title">{intelligenceData.livestream.today.title}</h4>
                <div className="stream-meta">
                  <span className="stream-duration">
                    <Clock size={14} />
                    {intelligenceData.livestream.today.duration}
                  </span>
                  <span className="stream-performance">
                    <TrendingUp size={14} />
                    +{intelligenceData.livestream.today.avgPerformance}%
                  </span>
                </div>
                
                <div className="recent-gems">
                  <h5>Top Gems:</h5>
                  {intelligenceData.livestream.recentGems.slice(0, 3).map((gem, index) => (
                    <div key={index} className="gem-item">
                      <div className="gem-token">{gem.token}</div>
                      <div className="gem-performance">+{gem.performance}%</div>
                      <div className="gem-rating">{gem.mwRating}/10</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* X Posts Card */}
            <div className="intelligence-card glass x-posts-card animate-fade-in">
              <div className="intelligence-header">
                <div className="header-left">
                  <div className="intelligence-icon x-posts">🐦</div>
                  <div className="intelligence-title">
                    <h3>Recent X Posts</h3>
                    <span className="posts-count">{intelligenceData.xPosts.length} Recent</span>
                  </div>
                </div>
              </div>
              
              <div className="intelligence-content">
                {intelligenceData.xPosts.slice(0, 2).map((post, index) => (
                  <div key={index} className="post-item">
                    <div className="post-header">
                      <span className="post-account">{post.account}</span>
                      <span className="post-time">{post.timestamp}</span>
                    </div>
                    <div className="post-content">{post.content}</div>
                    <div className="post-engagement">
                      <span className="engagement-item">
                        <Heart size={12} />
                        {post.engagement.likes}
                      </span>
                      <span className="engagement-item">
                        <Repeat size={12} />
                        {post.engagement.retweets}
                      </span>
                      <span className="engagement-item">
                        <MessageCircle size={12} />
                        {post.engagement.comments}
                      </span>
                      <span className="confidence-score">
                        {post.confidence}% Confidence
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Consensus Card */}
            <div className="intelligence-card glass ai-consensus-card animate-fade-in">
              <div className="intelligence-header">
                <div className="header-left">
                  <div className="intelligence-icon ai">🤖</div>
                  <div className="intelligence-title">
                    <h3>AI Consensus Signals</h3>
                    <span className="signals-count">{intelligenceData.aiSynthesis.consensusSignals.length} Active</span>
                  </div>
                </div>
              </div>
              
              <div className="intelligence-content">
                {intelligenceData.aiSynthesis.consensusSignals.map((signal, index) => (
                  <div key={index} className="consensus-item">
                    <div className="consensus-header">
                      <span className="consensus-token">{signal.token}</span>
                      <span className={`consensus-signal ${signal.signal.toLowerCase()}`}>
                        {signal.signal.replace('_', ' ')}
                      </span>
                      <span className="consensus-confidence">{signal.confidence}%</span>
                    </div>
                    <div className="consensus-reasoning">{signal.reasoning}</div>
                    <div className="consensus-meta">
                      <span className="consensus-sources">{signal.sources.length} Sources</span>
                      <span className="consensus-timeframe">{signal.timeframe}</span>
                      <span className={`consensus-urgency ${signal.urgency.toLowerCase()}`}>
                        {signal.urgency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Performance Analytics */}
        <motion.section 
          className="performance-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="section-title">Performance Analytics</h2>
          <div className="performance-grid">
            
            <div className="performance-card glass animate-fade-in">
              <div className="performance-header">
                <h3>Today</h3>
                <span className="performance-period">Live</span>
              </div>
              <div className="performance-stats">
                <div className="stat-large">
                  <span className="stat-value text-success">+{performanceMetrics.today.totalReturn}%</span>
                  <span className="stat-label">Total Return</span>
                </div>
                <div className="stat-grid">
                  <div className="stat-item">
                    <span className="stat-value">{performanceMetrics.today.winRate}%</span>
                    <span className="stat-label">Win Rate</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{performanceMetrics.today.avgReturn}%</span>
                    <span className="stat-label">Avg Return</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{performanceMetrics.today.totalSetups}</span>
                    <span className="stat-label">Total Setups</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{performanceMetrics.today.sharpeRatio}</span>
                    <span className="stat-label">Sharpe Ratio</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="performance-card glass animate-fade-in">
              <div className="performance-header">
                <h3>This Week</h3>
                <span className="performance-period">7 Days</span>
              </div>
              <div className="performance-stats">
                <div className="stat-large">
                  <span className="stat-value text-success">+{performanceMetrics.week.totalReturn}%</span>
                  <span className="stat-label">Total Return</span>
                </div>
                <div className="stat-grid">
                  <div className="stat-item">
                    <span className="stat-value">{performanceMetrics.week.winRate}%</span>
                    <span className="stat-label">Win Rate</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{performanceMetrics.week.avgReturn}%</span>
                    <span className="stat-label">Avg Return</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{performanceMetrics.week.consecutiveWins}</span>
                    <span className="stat-label">Consecutive Wins</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{Math.abs(performanceMetrics.week.maxDrawdown)}%</span>
                    <span className="stat-label">Max Drawdown</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="performance-card glass animate-fade-in">
              <div className="performance-header">
                <h3>This Month</h3>
                <span className="performance-period">30 Days</span>
              </div>
              <div className="performance-stats">
                <div className="stat-large">
                  <span className="stat-value text-success">+{performanceMetrics.month.totalReturn}%</span>
                  <span className="stat-label">Total Return</span>
                </div>
                <div className="best-tokens">
                  <h4>Top Performers:</h4>
                  <div className="token-list">
                    {performanceMetrics.month.topTokens.slice(0, 5).map((token, index) => (
                      <span key={index} className="top-token">{token}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* Live Updates Feed */}
        <motion.section 
          className="live-updates-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="section-header">
            <h2 className="section-title">Live Updates</h2>
            <div className="live-indicator">
              <span className="live-dot"></span>
              Real-time
            </div>
          </div>
          
          <div className="updates-feed glass">
            {realtimeUpdates.map((update, index) => (
              <motion.div
                key={index}
                className={`update-item ${update.type}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="update-icon">
                  {update.type === 'success' && <CheckCircle size={16} />}
                  {update.type === 'warning' && <AlertTriangle size={16} />}
                  {update.type === 'info' && <Info size={16} />}
                </div>
                <div className="update-content">
                  <span className="update-time">{update.time}</span>
                  <span className="update-message">{update.message}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Dashboard;