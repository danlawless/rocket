import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  TrendingUp, 
  TrendingDown,
  Target,
  Shield,
  Zap,
  BarChart3,
  MessageCircle,
  Heart,
  Repeat,
  Eye,
  Clock,
  DollarSign,
  Percent,
  Activity,
  AlertTriangle,
  CheckCircle,
  Star,
  ExternalLink
} from 'lucide-react';
import { getTokenDetailData } from '../data/tokenDetailData';
import './TokenDetailPage.css';

const TokenDetailPage = ({ tokenSymbol, onBack }) => {
  const [tokenData, setTokenData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!tokenSymbol || typeof tokenSymbol !== 'string') {
      console.warn('Invalid tokenSymbol provided:', tokenSymbol);
      return;
    }
    
    const data = getTokenDetailData(tokenSymbol);
    if (!data) {
      console.warn('No token data found for:', tokenSymbol);
      return;
    }
    
    setTokenData(data);
  }, [tokenSymbol]);



  // Data validation helpers
  const validateNumeric = (value, defaultValue = 0) => {
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
  };

  const validateString = (value, defaultValue = '') => {
    return typeof value === 'string' ? value : String(value || defaultValue);
  };

  const formatCurrency = (value, decimals = 2) => {
    const numValue = validateNumeric(value, 0);
    if (numValue < 0.01 && numValue > 0) {
      return numValue.toFixed(8);
    }
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: decimals 
    }).format(numValue);
  };

  const formatLargeNumber = (num) => {
    const numValue = validateNumeric(num, 0);
    if (numValue >= 1e9) return (numValue / 1e9).toFixed(1) + 'B';
    if (numValue >= 1e6) return (numValue / 1e6).toFixed(1) + 'M';
    if (numValue >= 1e3) return (numValue / 1e3).toFixed(1) + 'K';
    return numValue.toString();
  };

  const getRecommendationColor = (recommendation) => {
    switch(recommendation) {
      case 'STRONG BUY': return 'recommendation-strong-buy';
      case 'BUY': return 'recommendation-buy';
      case 'HOLD': return 'recommendation-hold';
      case 'SELL': return 'recommendation-sell';
      default: return 'recommendation-neutral';
    }
  };

  const getSignalColor = (signal) => {
    switch(signal) {
      case 'bullish': return 'signal-bullish';
      case 'bearish': return 'signal-bearish';
      default: return 'signal-neutral';
    }
  };

  if (!tokenData) {
    return (
      <div className="token-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading token analysis...</p>
      </div>
    );
  }

  return (
    <div className="token-detail-page">
      {/* Header */}
      <motion.header 
        className="token-detail-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="header-content">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
          
          <div className="token-header-info">
            <div className="token-basic-info">
              <img 
                src={tokenData.logo} 
                alt={tokenData.name}
                className="token-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="token-names">
                <h1>{tokenData.symbol}</h1>
                <span className="token-full-name">{tokenData.name}</span>
              </div>
            </div>
            
            <div className="token-price-info">
              <div className="current-price">
                {formatCurrency(tokenData.price, tokenData.price < 1 ? 6 : 2)}
              </div>
              <div className={`price-change ${tokenData.priceChangePercent24h >= 0 ? 'positive' : 'negative'}`}>
                {tokenData.priceChangePercent24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {tokenData.priceChangePercent24h >= 0 ? '+' : ''}{tokenData.priceChangePercent24h.toFixed(2)}%
                ({tokenData.priceChangePercent24h >= 0 ? '+' : ''}{formatCurrency(tokenData.priceChange24h)})
              </div>
            </div>
            
            <div className="mw-rating-badge">
              <div className={`recommendation ${getRecommendationColor(tokenData.mwAnalysis.recommendation)}`}>
                <Star size={16} />
                <span>MW Rating: {tokenData.mwAnalysis.overallRating}/10</span>
                <span className="recommendation-text">{tokenData.mwAnalysis.recommendation}</span>
              </div>
              <div className="confidence-score">
                {tokenData.mwAnalysis.confidence}% Confidence
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Quick Stats Bar */}
      <motion.section 
        className="quick-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="stat-item">
          <span className="stat-label">Market Cap</span>
          <span className="stat-value">${formatLargeNumber(tokenData.marketCap)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">24h Volume</span>
          <span className="stat-value">${formatLargeNumber(tokenData.volume24h)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">MW Target</span>
          <span className="stat-value target-price">{formatCurrency(tokenData.mwAnalysis.targetPrice)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Risk/Reward</span>
          <span className="stat-value risk-reward">{tokenData.mwAnalysis.riskReward}:1</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Timeframe</span>
          <span className="stat-value">{tokenData.mwAnalysis.timeframe}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">MW Mentions</span>
          <span className="stat-value">{tokenData.mwInsights.totalMentions} (7d)</span>
        </div>
      </motion.section>

      {/* Navigation Tabs */}
      <div className="detail-nav-tabs">
        {[
          { id: 'overview', label: '📊 Overview' },
          { id: 'mw-analysis', label: '🎯 MW Analysis' },
          { id: 'technical', label: '📈 Technical' },
          { id: 'fundamental', label: '🏗️ Fundamentals' },
          { id: 'social', label: '🐦 Social Correlation' },
          { id: 'trading', label: '💰 Trading Setup' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`detail-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="detail-content">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="overview-section"
          >
            <div className="overview-layout">
              
              {/* Chart Section */}
              <div className="chart-section">
                <div className="chart-header">
                  <h3>Price Chart</h3>
                  <div className="chart-indicators">
                    {tokenData.technicalAnalysis?.indicators?.rsi && (
                      <span className={`indicator ${getSignalColor(tokenData.technicalAnalysis.indicators.rsi.signal)}`}>
                        RSI: {tokenData.technicalAnalysis.indicators.rsi.value}
                      </span>
                    )}
                    {tokenData.technicalAnalysis?.indicators?.macd && (
                      <span className={`indicator ${getSignalColor(tokenData.technicalAnalysis.indicators.macd.signal)}`}>
                        MACD: {tokenData.technicalAnalysis.indicators.macd.signal}
                      </span>
                    )}
                  </div>
                </div>
                <div className="chart-placeholder">
                  <div className="placeholder-content">
                    <BarChart3 size={48} />
                    <h4>{tokenData.symbol}/USDT Chart</h4>
                    <p>Interactive chart coming soon</p>
                    <div className="placeholder-stats">
                      <span>Current: {formatCurrency(tokenData.price)}</span>
                      <span className={tokenData.priceChangePercent24h >= 0 ? 'positive' : 'negative'}>
                        24h: {tokenData.priceChangePercent24h >= 0 ? '+' : ''}{tokenData.priceChangePercent24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Insights */}
              <div className="key-insights-section">
                <h3>🔥 Key Insights</h3>
                <div className="insights-grid">
                  <div className="insight-card mw-insight">
                    <h4>MW Analysis</h4>
                    <div className="insight-points">
                      {(tokenData.mwAnalysis?.keyPoints || []).slice(0, 3).map((point, index) => (
                        <div key={index} className="insight-point">
                          <CheckCircle size={14} />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="insight-card risk-insight">
                    <h4>Risk Factors</h4>
                    <div className="insight-points">
                      {(tokenData.mwAnalysis?.risks || []).map((risk, index) => (
                        <div key={index} className="insight-point risk">
                          <AlertTriangle size={14} />
                          {risk}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="insight-card track-record">
                    <h4>MW Track Record</h4>
                    <div className="track-record-stats">
                      <div className="track-stat">
                        <span className="track-value">{tokenData.mwInsights.trackRecord.accuracy}%</span>
                        <span className="track-label">Accuracy</span>
                      </div>
                      <div className="track-stat">
                        <span className="track-value">+{tokenData.mwInsights.trackRecord.avgReturn}%</span>
                        <span className="track-label">Avg Return</span>
                      </div>
                      <div className="track-stat">
                        <span className="track-value">{tokenData.mwInsights.trackRecord.totalCalls}</span>
                        <span className="track-label">Total Calls</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* MW Analysis Tab */}
        {activeTab === 'mw-analysis' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mw-analysis-section"
          >
            <div className="mw-analysis-layout">
              
              {/* Recent MW Mentions */}
              <div className="mw-mentions-card">
                <h3>🎥 Recent MW Mentions</h3>
                <div className="mentions-list">
                  {(tokenData.mwInsights?.recentMentions || []).map((mention, index) => (
                    <div key={index} className={`mention-item importance-${mention.importance}`}>
                      <div className="mention-header">
                        <span className="mention-date">{mention.date}</span>
                        <span className="mention-timestamp">{mention.timestamp}</span>
                        <span className={`mention-sentiment ${mention.sentiment}`}>
                          {mention.sentiment.toUpperCase()}
                        </span>
                      </div>
                      <div className="mention-stream">{mention.stream}</div>
                      <div className="mention-quote">"{mention.quote}"</div>
                      <div className="mention-context">Context: {mention.context}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* MW Technical Notes */}
              <div className="mw-technical-notes">
                <h3>🔍 MW Technical Analysis Notes</h3>
                <div className="technical-notes-list">
                  {tokenData.technicalAnalysis?.mwTechnicalNotes?.map((note, index) => (
                    <div key={index} className="technical-note">
                      <BarChart3 size={16} />
                      {note}
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </motion.div>
        )}

        {/* Technical Analysis Tab */}
        {activeTab === 'technical' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="technical-section"
          >
            <div className="technical-layout">
              
              {/* Key Levels */}
              <div className="key-levels-card">
                <h3>🎯 Key Levels</h3>
                <div className="levels-grid">
                  <div className="levels-column">
                    <h4>Resistance</h4>
                    {tokenData.technicalAnalysis?.keyLevels?.resistance?.map((level, index) => (
                      <div key={index} className="level-item resistance">
                        {formatCurrency(level)}
                      </div>
                    ))}
                  </div>
                  <div className="levels-column">
                    <h4>Support</h4>
                    {tokenData.technicalAnalysis?.keyLevels?.support?.map((level, index) => (
                      <div key={index} className="level-item support">
                        {formatCurrency(level)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Technical Indicators */}
              <div className="indicators-card">
                <h3>📊 Technical Indicators</h3>
                <div className="indicators-grid">
                  {Object.entries(tokenData.technicalAnalysis?.indicators || {}).map(([key, indicator]) => (
                    <div key={key} className={`indicator-item ${getSignalColor(indicator.signal)}`}>
                      <div className="indicator-name">{key.toUpperCase()}</div>
                      <div className="indicator-value">
                        {indicator.value || indicator.signal}
                      </div>
                      <div className="indicator-signal">{indicator.signal}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chart Patterns */}
              <div className="patterns-card">
                <h3>📈 Chart Patterns</h3>
                <div className="patterns-list">
                  {tokenData.technicalAnalysis?.patterns?.map((pattern, index) => (
                    <div key={index} className={`pattern-item status-${pattern.status}`}>
                      <div className="pattern-header">
                        <span className="pattern-name">{pattern.name}</span>
                        <span className="pattern-confidence">{pattern.confidence}%</span>
                      </div>
                      <div className="pattern-details">
                        <span>Target: {formatCurrency(pattern.target)}</span>
                        <span className={`pattern-status ${pattern.status}`}>
                          {pattern.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </motion.div>
        )}

        {/* Fundamental Analysis Tab */}
        {activeTab === 'fundamental' && tokenData.fundamentalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fundamental-section"
          >
            <div className="fundamental-layout">
              
              {/* Network Health */}
              <div className="network-health-card">
                <h3>🌐 Network Health</h3>
                <div className="network-metrics-grid">
                  <div className="network-metric">
                    <span className="metric-value">{tokenData.fundamentalData.networkHealth.transactions24h?.toLocaleString()}</span>
                    <span className="metric-label">24h Transactions</span>
                    <span className="metric-change positive">{tokenData.fundamentalData.networkHealth.transactionChange}</span>
                  </div>
                  <div className="network-metric">
                    <span className="metric-value">{tokenData.fundamentalData.networkHealth.activeAddresses?.toLocaleString()}</span>
                    <span className="metric-label">Active Addresses</span>
                    <span className="metric-change positive">{tokenData.fundamentalData.networkHealth.addressChange}</span>
                  </div>
                  <div className="network-metric">
                    <span className="metric-value">{tokenData.fundamentalData.networkHealth.totalStaked}</span>
                    <span className="metric-label">Total Staked</span>
                    <span className="metric-yield">{tokenData.fundamentalData.networkHealth.stakingYield} APY</span>
                  </div>
                </div>
              </div>
              
              {/* DeFi Metrics */}
              {tokenData.fundamentalData.defiMetrics && (
                <div className="defi-metrics-card">
                  <h3>🏦 DeFi Ecosystem</h3>
                  <div className="defi-overview">
                    <div className="tvl-metric">
                      <span className="tvl-value">${formatLargeNumber(tokenData.fundamentalData.defiMetrics.tvl)}</span>
                      <span className="tvl-label">Total Value Locked</span>
                      <span className="tvl-change positive">{tokenData.fundamentalData.defiMetrics.tvlChange}</span>
                    </div>
                  </div>
                  <div className="top-protocols">
                    <h4>Top Protocols</h4>
                    {tokenData.fundamentalData.defiMetrics.topProtocols?.map((protocol, index) => (
                      <div key={index} className="protocol-item">
                        <span className="protocol-name">{protocol.name}</span>
                        <span className="protocol-tvl">${formatLargeNumber(protocol.tvl)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Ecosystem Growth */}
              {tokenData.fundamentalData.ecosystemGrowth && (
                <div className="ecosystem-growth-card">
                  <h3>🚀 Ecosystem Growth</h3>
                  <div className="growth-metrics">
                    <div className="growth-metric">
                      <span className="growth-value">{formatLargeNumber(tokenData.fundamentalData.ecosystemGrowth.dailyUsers)}</span>
                      <span className="growth-label">Daily Users</span>
                      <span className="growth-change positive">{tokenData.fundamentalData.ecosystemGrowth.userGrowth}</span>
                    </div>
                    <div className="growth-metric">
                      <span className="growth-value">{tokenData.fundamentalData.ecosystemGrowth.newProjects}</span>
                      <span className="growth-label">New Projects (30d)</span>
                    </div>
                    <div className="growth-metric">
                      <span className="growth-value">{tokenData.fundamentalData.ecosystemGrowth.developerActivity}</span>
                      <span className="growth-label">Developer Activity</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* MW Fundamental View */}
              {tokenData.fundamentalData.mwFundamentalView && (
                <div className="mw-fundamental-view">
                  <h3>🔍 MW Fundamental Analysis</h3>
                  <div className="fundamental-notes-list">
                    {tokenData.fundamentalData.mwFundamentalView.map((note, index) => (
                      <div key={index} className="fundamental-note">
                        <CheckCircle size={16} />
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          </motion.div>
        )}

        {/* Social Correlation Tab */}
        {activeTab === 'social' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="social-section"
          >
            <div className="social-layout">
              
              {/* Social Metrics Summary */}
              <div className="social-metrics-card">
                <h3>📱 Social Metrics</h3>
                <div className="social-stats-grid">
                  <div className="social-stat">
                    <span className="stat-value">{tokenData.socialCorrelation.overallScore}</span>
                    <span className="stat-label">Overall Score</span>
                  </div>
                  <div className="social-stat">
                    <span className="stat-value">{tokenData.socialCorrelation.mentionVolume}</span>
                    <span className="stat-label">Mentions (24h)</span>
                  </div>
                  <div className="social-stat">
                    <span className="stat-value">{tokenData.socialCorrelation.sentimentScore}%</span>
                    <span className="stat-label">Bullish Sentiment</span>
                  </div>
                  <div className="social-stat">
                    <span className="stat-value">{tokenData.socialCorrelation.influencerEngagement}</span>
                    <span className="stat-label">Influencer Score</span>
                  </div>
                </div>
              </div>
              
              {/* Correlated Posts */}
              <div className="correlated-posts-card">
                <h3>🔗 Top Correlated Posts</h3>
                <div className="posts-list">
                  {tokenData.socialCorrelation?.topCorrelatedPosts?.map((post, index) => (
                    <div key={index} className={`post-item impact-${post.postImpact}`}>
                      <div className="post-header">
                        <span className="post-account">{post.account}</span>
                        <span className="post-timestamp">{post.timestamp}</span>
                        <span className="correlation-score">{post.correlationScore}%</span>
                      </div>
                      <div className="post-content">{post.content}</div>
                      <div className="post-engagement">
                        <span><Heart size={12} /> {post.engagement.likes}</span>
                        <span><Repeat size={12} /> {post.engagement.retweets}</span>
                        <span><MessageCircle size={12} /> {post.engagement.comments}</span>
                        <span className={`impact-badge impact-${post.postImpact}`}>
                          {post.postImpact.toUpperCase()} IMPACT
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </motion.div>
        )}

        {/* Trading Setup Tab */}
        {activeTab === 'trading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="trading-section"
          >
            <div className="trading-layout">
              
              {/* Setup Summary */}
              <div className="setup-summary-card">
                <h3>💰 Trading Setup</h3>
                <div className="setup-overview">
                  <div className="setup-type">
                    <strong>{tokenData.tradingSetup.setupType}</strong>
                  </div>
                  <div className="setup-details">
                    <div className="setup-detail">
                      <span>Entry Zone:</span>
                      <span>{formatCurrency(tokenData.tradingSetup.entryZone.min)} - {formatCurrency(tokenData.tradingSetup.entryZone.max)}</span>
                    </div>
                    <div className="setup-detail">
                      <span>Stop Loss:</span>
                      <span className="stop-loss">{formatCurrency(tokenData.tradingSetup.stopLoss)}</span>
                    </div>
                    <div className="setup-detail">
                      <span>Risk:</span>
                      <span className="risk-percent">{tokenData.tradingSetup.riskPercent}%</span>
                    </div>
                    <div className="setup-detail">
                      <span>Position Size:</span>
                      <span>{tokenData.tradingSetup.positionSize}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Price Targets */}
              <div className="targets-card">
                <h3>🎯 Price Targets</h3>
                <div className="targets-list">
                  {tokenData.tradingSetup?.targets?.map((target, index) => (
                    <div key={index} className="target-item">
                      <div className="target-level">Target {index + 1}</div>
                      <div className="target-price">{formatCurrency(target.level)}</div>
                      <div className="target-reward">{target.reward} gain</div>
                      <div className="target-probability">{target.probability}% probability</div>
                      <div className="target-progress">
                        <div 
                          className="progress-bar"
                          style={{ width: `${target.probability}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* MW Trading Notes */}
              <div className="trading-notes-card">
                <h3>📝 MW Trading Notes</h3>
                <div className="trading-notes-list">
                  {tokenData.tradingSetup?.mwTradingNotes?.map((note, index) => (
                    <div key={index} className="trading-note">
                      <CheckCircle size={16} />
                      {note}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Risk Analysis */}
              <div className="risk-analysis-card">
                <h3>⚠️ Risk Analysis</h3>
                <div className="risk-factors-list">
                  {tokenData.tradingSetup?.riskFactors?.map((risk, index) => (
                    <div key={index} className={`risk-factor impact-${risk.impact.toLowerCase()}`}>
                      <div className="risk-header">
                        <span className="risk-name">{risk.factor}</span>
                        <span className={`risk-impact ${risk.impact.toLowerCase()}`}>
                          {risk.impact.toUpperCase()} RISK
                        </span>
                      </div>
                      <div className="risk-mitigation">
                        <strong>Mitigation:</strong> {risk.mitigation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default TokenDetailPage;