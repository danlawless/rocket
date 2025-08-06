import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Play,
  Eye,
  Clock,
  Zap,
  Target,
  Activity,
  BarChart3,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Minus,
  AlertTriangle,
  Star,
  Calendar,
  Camera,
  Brain
} from 'lucide-react';
import { 
  tokenHeatData, 
  livestreamData, 
  xCorrelationData, 
  aiCorrelationAnalysis,
  dashboardSummary 
} from '../data/mwMonitoringData';
import { macroMarketData } from '../data/macroMarketData';
import { etfData } from '../data/etfData';
import TokenDetailPage from './TokenDetailPage';
import './MWMonitor.css';

// Stream Analysis Modal Component
const StreamAnalysisModal = ({ isOpen, onClose, streamData, initialView = 'detailed', isToday = false, onBackToLibrary = null }) => {
  const [modalView, setModalView] = useState(initialView); // detailed, timeline, screenshots, rawdata
  const [selectedToken, setSelectedToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reset view when modal opens
  useEffect(() => {
    if (isOpen) {
      setModalView(initialView);
      setSelectedToken(null);
    }
  }, [isOpen, initialView]);

  if (!isOpen) return null;
  
  const renderYouTubePlayer = () => {
    if (!streamData.youtubeId) return null;
    
    return (
      <div className="youtube-player-container">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${streamData.youtubeId}`}
          title={streamData.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };
  
  const renderStreamOverview = () => (
    <div className="stream-overview">
      <div className="stream-header">
        <div className="stream-title-section">
          {onBackToLibrary && (
            <div className="stream-breadcrumb">
              <button className="breadcrumb-btn" onClick={onBackToLibrary}>
                <ArrowLeft size={16} />
                Back to Library
              </button>
              <span className="breadcrumb-separator">→</span>
            </div>
          )}
          <h2>🎥 {isToday ? 'Today\'s' : 'Historical'} Stream Analysis</h2>
          <h3>{streamData.title}</h3>
          <div className="stream-meta">
            <span className="duration">
              <Clock size={16} />
              {streamData.duration}
            </span>
            <span className="viewers">
              <Eye size={16} />
              {streamData.viewerCount.toLocaleString()} viewers
            </span>
            <span className="ai-rating">
              <Star size={16} />
              {streamData.analysis.overallRating}/10 AI Rating
            </span>
          </div>
        </div>
        
        <div className="stream-actions">
          <button 
            className="view-btn primary"
            onClick={() => {
              setModalView('detailed');
              setIsModalOpen(true);
            }}
          >
            <Play size={16} />
            Watch & Analyze
          </button>
          <button 
            className="view-btn"
            onClick={() => {
              setModalView('timeline');
              setIsModalOpen(true);
            }}
          >
            <Calendar size={16} />
            AI Timeline
          </button>
        </div>
      </div>
      
      <div className="quick-stats">
        <div className="stat-card">
          <Target size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.analysis.tokensDiscussed}</span>
            <span className="stat-label">Tokens Analyzed</span>
          </div>
        </div>
        <div className="stat-card">
          <Zap size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.analysis.actionableSignals}</span>
            <span className="stat-label">Trading Signals</span>
          </div>
        </div>
        <div className="stat-card">
          <BarChart3 size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.analysis.confidence}%</span>
            <span className="stat-label">AI Confidence</span>
          </div>
        </div>
        <div className="stat-card">
          <Camera size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.keyMoments.length}</span>
            <span className="stat-label">Key Moments</span>
          </div>
        </div>
      </div>
      
      <div className="key-moments-preview">
        <h4>🎯 AI-Discovered Key Moments</h4>
        <div className="moments-grid">
          {streamData.keyMoments.slice(0, 4).map((moment) => (
            <div 
              key={moment.id} 
              className={`moment-card ${moment.importance.toLowerCase()}`}
              onClick={() => {
                setModalView('detailed');
                setIsModalOpen(true);
              }}
            >
              <div className="moment-header">
                <span className="moment-time">{moment.timestamp}</span>
                <span className={`moment-type ${moment.type.toLowerCase()}`}>
                  {moment.type.replace('_', ' ')}
                </span>
              </div>
              <h5>{moment.title}</h5>
              <p>{moment.description}</p>
              <div className="moment-tokens">
                {moment.tokens.map(token => (
                  <span key={token} className={`token-tag ${moment.sentiment}`}>
                    {token}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="tokens-discussed">
        <h4>💰 Tokens Analyzed This Stream</h4>
        <div className="tokens-grid">
          {streamData.topTokens.map((token, index) => (
            <div key={index} className="token-analysis-card">
              <div className="token-header">
                <span className="token-symbol">{token.symbol}</span>
                <span className={`token-sentiment ${token.sentiment}`}>
                  {token.sentiment === 'bullish' ? '🚀' : token.sentiment === 'bearish' ? '📉' : '⚖️'}
                  {token.sentiment.toUpperCase()}
                </span>
              </div>
              <div className="token-stats">
                <span>{token.mentions} mentions</span>
                <span>{token.totalTimeDiscussed} discussed</span>
              </div>
              <button 
                className="token-details-btn"
                onClick={() => {
                  setSelectedToken(token.symbol);
                  setModalView('screenshots');
                  setIsModalOpen(true);
                }}
              >
                View Charts 📊
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const renderModalHeader = () => (
    <div className="modal-header">
      <div className="modal-title">
        <h3>{streamData.title}</h3>
        <div className="modal-meta">
          <span className="duration">
            <Clock size={14} />
            {streamData.duration}
          </span>
          <span className="viewers">
            <Eye size={14} />
            {streamData.viewerCount.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="modal-controls">
        <div className="modal-tabs">
          <button 
            className={modalView === 'detailed' ? 'active' : ''}
            onClick={() => setModalView('detailed')}
          >
            Video
          </button>
          <button 
            className={modalView === 'timeline' ? 'active' : ''}
            onClick={() => setModalView('timeline')}
          >
            Timeline
          </button>
          <button 
            className={modalView === 'screenshots' ? 'active' : ''}
            onClick={() => setModalView('screenshots')}
          >
            Screen Shots
          </button>
          <button 
            className={modalView === 'rawdata' ? 'active' : ''}
            onClick={() => setModalView('rawdata')}
          >
            Raw Data
          </button>
        </div>
        <button className="close-modal" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );

  const renderDetailedView = () => (
    <div className="modal-detailed-view">
      
      {renderYouTubePlayer()}
      
      <div className="key-moments-timeline">
        <h4>🎯 Jump to Key Moments</h4>
        <div className="moments-timeline">
          {streamData.keyMoments.map((moment) => (
            <div key={moment.id} className="timeline-moment">
              <button 
                className={`moment-timestamp ${moment.importance.toLowerCase()}`}
                onClick={() => {
                  // Here you would integrate with YouTube API to jump to timestamp
                  console.log(`Jumping to ${moment.timestampSeconds} seconds`);
                }}
              >
                {moment.timestamp}
              </button>
              <div className="moment-details">
                <strong>{moment.title}</strong>
                <p>{moment.description}</p>
                <div className="moment-tokens">
                  {moment.tokens.map(token => (
                    <span key={token} className={`token-tag ${moment.sentiment}`}>
                      {token}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const renderTokenTimeline = () => (
    <div className="token-timeline">
      <div className="timeline-header">
        <h3>📊 Token Discussion Timeline</h3>
      </div>
      
      <div className="timeline-visual">
        {streamData.tokenTimeline.map((segment, index) => (
          <div key={index} className="timeline-segment">
            <div className="timeline-time">
              <span className="start-time">{segment.startTime}</span>
              <span className="duration">{segment.duration}</span>
              <span className="end-time">{segment.endTime}</span>
            </div>
            <div className={`timeline-bar ${segment.sentiment}`}>
              <div className="segment-content">
                <h5>{segment.topic}</h5>
                <div className="segment-tokens">
                  {segment.tokens.map(token => (
                    <span key={token} className="token-chip">{token}</span>
                  ))}
                </div>
                <div className="key-points">
                  {segment.keyPoints.map((point, idx) => (
                    <div key={idx} className="key-point">• {point}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  const renderTokenScreenshots = () => (
    <div className="token-screenshots">
      <div className="screenshots-header">
        <h3>📸 Token Chart Analysis</h3>
        <div className="token-selector">
          {Object.keys(streamData.tokenCollections).map(token => (
            <button
              key={token}
              className={`token-select ${selectedToken === token ? 'active' : ''}`}
              onClick={() => setSelectedToken(token)}
            >
              {token} ({streamData.tokenCollections[token].totalScreenshots})
            </button>
          ))}
        </div>
      </div>
      
      {selectedToken && streamData.tokenCollections[selectedToken] && (
        <div className="screenshots-collection">
          <h4>{selectedToken} Chart Analysis</h4>
          <div className="screenshots-grid">
            {streamData.tokenCollections[selectedToken].screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-card">
                <div className="screenshot-header">
                  <span className="screenshot-time">{screenshot.timestamp}</span>
                  <span className={`importance ${screenshot.importance.toLowerCase()}`}>
                    {screenshot.importance}
                  </span>
                </div>
                <div className="screenshot-image">
                  <img 
                    src={screenshot.url} 
                    alt={`${selectedToken} chart at ${screenshot.timestamp}`}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNoYXJ0IFNjcmVlbnNob3Q8L3RleHQ+PC9zdmc+';
                    }}
                  />
                </div>
                <div className="screenshot-description">
                  <p>{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
  const renderRawData = () => (
    <div className="raw-data-section">
      <div className="raw-data-header">
        <h3>📊 Raw Minute-by-Minute Data</h3>
        <div className="raw-stats">
          <span>{streamData.rawData.totalMinuteClips} minute clips</span>
          <span>{streamData.rawData.screenshotsPerMinute} screenshot/min</span>
        </div>
      </div>
      
      <div className="raw-clips-grid">
        {streamData.rawData.clips.map((clip, index) => (
          <div key={index} className="raw-clip">
            <div className="clip-header">
              <span className="clip-time">{clip.timestamp}</span>
              <span className="minute-marker">Min {clip.minute}</span>
            </div>
            <div className="clip-screenshot">
              <img 
                src={clip.screenshotUrl}
                alt={`Minute ${clip.minute} screenshot`}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1pbiAke2NsaXAubWludXRlfTwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>
            <div className="clip-content">
              <div className="transcript-segment">
                <strong>Transcript:</strong>
                <p>"{clip.transcriptSegment}"</p>
              </div>
              {clip.tokensDiscussed.length > 0 && (
                <div className="clip-tokens">
                  <strong>Tokens:</strong>
                  {clip.tokensDiscussed.map(token => (
                    <span key={token} className="clip-token">{token}</span>
                  ))}
                </div>
              )}
              <div className="ai-notes">
                <strong>AI Notes:</strong>
                <p>{clip.aiNotes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className="stream-analysis-modal-overlay" onClick={onClose}>
      <div className="stream-analysis-modal" onClick={(e) => e.stopPropagation()}>
        {renderModalHeader()}
        <div className="modal-content">
          {modalView === 'detailed' && renderDetailedView()}
          {modalView === 'timeline' && renderTokenTimeline()}
          {modalView === 'screenshots' && renderTokenScreenshots()}
          {modalView === 'rawdata' && renderRawData()}
        </div>
      </div>
    </div>
  );
};

// Stream Analysis Component (Overview)  
const StreamAnalysis = ({ streamData, isToday = false, onBackToLibrary = null }) => {
  const [selectedToken, setSelectedToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('detailed');
  
  const renderStreamOverview = () => (
    <div className="stream-overview">
      <div className="stream-header">
        <div className="stream-title-section">
          {onBackToLibrary && (
            <div className="stream-breadcrumb">
              <button className="breadcrumb-btn" onClick={onBackToLibrary}>
                <ArrowLeft size={16} />
                Back to Library
              </button>
              <span className="breadcrumb-separator">→</span>
            </div>
          )}
          <h2>🎥 {isToday ? 'Today\'s' : 'Historical'} Stream Analysis</h2>
          <h3>{streamData.title}</h3>
          <div className="stream-meta">
            <span className="duration">
              <Clock size={16} />
              {streamData.duration}
            </span>
            <span className="viewers">
              <Eye size={16} />
              {streamData.viewerCount.toLocaleString()} viewers
            </span>
            <span className="ai-rating">
              <Star size={16} />
              {streamData.analysis.overallRating}/10 AI Rating
            </span>
          </div>
        </div>
        
        <div className="stream-actions">
          <button 
            className="view-btn primary"
            onClick={() => {
              setModalView('detailed');
              setIsModalOpen(true);
            }}
          >
            <Play size={16} />
            Watch & Analyze
          </button>
          <button 
            className="view-btn"
            onClick={() => {
              setModalView('timeline');
              setIsModalOpen(true);
            }}
          >
            <Calendar size={16} />
            AI Timeline
          </button>
        </div>
      </div>
      
      <div className="quick-stats">
        <div className="stat-card">
          <Target size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.analysis.tokensDiscussed}</span>
            <span className="stat-label">Tokens Analyzed</span>
          </div>
        </div>
        <div className="stat-card">
          <Zap size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.analysis.actionableSignals}</span>
            <span className="stat-label">Trading Signals</span>
          </div>
        </div>
        <div className="stat-card">
          <BarChart3 size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.analysis.confidence}%</span>
            <span className="stat-label">AI Confidence</span>
          </div>
        </div>
        <div className="stat-card">
          <Camera size={20} />
          <div className="stat-content">
            <span className="stat-number">{streamData.keyMoments.length}</span>
            <span className="stat-label">Key Moments</span>
          </div>
        </div>
      </div>
      
      <div className="key-moments-preview">
        <h4>🎯 AI-Discovered Key Moments</h4>
        <div className="moments-grid">
          {streamData.keyMoments.slice(0, 4).map((moment) => (
            <div 
              key={moment.id} 
              className={`moment-card ${moment.importance.toLowerCase()}`}
              onClick={() => {
                setModalView('detailed');
                setIsModalOpen(true);
              }}
            >
              <div className="moment-header">
                <span className="moment-time">{moment.timestamp}</span>
                <span className={`moment-type ${moment.type.toLowerCase()}`}>
                  {moment.type.replace('_', ' ')}
                </span>
              </div>
              <h5>{moment.title}</h5>
              <p>{moment.description}</p>
              <div className="moment-tokens">
                {moment.tokens.map(token => (
                  <span key={token} className={`token-tag ${moment.sentiment}`}>
                    {token}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="tokens-discussed">
        <h4>💰 Tokens Analyzed This Stream</h4>
        <div className="tokens-grid">
          {streamData.topTokens.map((token, index) => (
            <div key={index} className="token-analysis-card">
              <div className="token-header">
                <span className="token-symbol">{token.symbol}</span>
                <span className={`token-sentiment ${token.sentiment}`}>
                  {token.sentiment === 'bullish' ? '🚀' : token.sentiment === 'bearish' ? '📉' : '⚖️'}
                  {token.sentiment.toUpperCase()}
                </span>
              </div>
              <div className="token-stats">
                <span>{token.mentions} mentions</span>
                <span>{token.totalTimeDiscussed} discussed</span>
              </div>
              <button 
                className="token-details-btn"
                onClick={() => {
                  setSelectedToken(token.symbol);
                  setModalView('screenshots');
                  setIsModalOpen(true);
                }}
              >
                View Charts 📊
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <StreamAnalysisModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        streamData={streamData}
        initialView={modalView}
        isToday={isToday}
        onBackToLibrary={onBackToLibrary}
      />
    </div>
  );

  return (
    <div className="stream-analysis">
      {renderStreamOverview()}
    </div>
  );
};

const MWMonitor = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('dashboard');
  const [currentView, setCurrentView] = useState('monitor'); // 'monitor' or 'token-detail'
  const [selectedToken, setSelectedToken] = useState(null);
  const [activeETF, setActiveETF] = useState('long'); // 'long' or 'short'
  const [selectedStream, setSelectedStream] = useState(null); // For historical stream analysis

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getHeatColor = (score) => {
    if (score >= 90) return 'heat-critical';
    if (score >= 80) return 'heat-high'; 
    if (score >= 70) return 'heat-medium';
    if (score >= 60) return 'heat-warm';
    return 'heat-cool';
  };



  // Macro Market Helper Functions
  const getRegimeIcon = (regime) => {
    switch(regime) {
      case 'PUMPING': return <ArrowUp className="regime-pumping" size={20} />;
      case 'DUMPING': return <ArrowDown className="regime-dumping" size={20} />;
      case 'RANGING': return <Minus className="regime-ranging" size={20} />;
      default: return <Activity size={20} />;
    }
  };

  const getRegimeColor = (regime) => {
    switch(regime) {
      case 'PUMPING': return '#00ff88';
      case 'DUMPING': return '#ff4444';
      case 'RANGING': return '#ffaa00';
      default: return '#ffffff';
    }
  };



  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleTokenClick = (tokenSymbol) => {
    setSelectedToken(tokenSymbol);
    setCurrentView('token-detail');
  };

  const handleBackToMonitor = () => {
    setCurrentView('monitor');
    setSelectedToken(null);
    setSelectedStream(null);
    setActiveSection('dashboard');
  };

  const handleStreamClick = (stream) => {
    setSelectedStream(stream);
    setActiveSection('livestream');
  };

  const handleBackToLibrary = () => {
    setSelectedStream(null);
  };

  // If we're in token detail view, render the token detail page
  if (currentView === 'token-detail' && selectedToken) {
    return (
      <TokenDetailPage 
        tokenSymbol={selectedToken}
        onBack={handleBackToMonitor}
      />
    );
  }

  return (
    <div className="mw-monitor">
      {/* Top Mini Indicators Bar */}
      <div className="top-mini-indicators-bar">
        <div className="mini-indicators-ticker">
          <div className="mini-indicator btc-mini">
            <span className="mini-symbol">₿</span>
            <span className="mini-value">{formatCurrency(macroMarketData.macroIndicators.BTC.current)}</span>
            <span className={`mini-change ${macroMarketData.macroIndicators.BTC.change24h < 0 ? 'negative' : 'positive'}`}>
              {macroMarketData.macroIndicators.BTC.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.BTC.change24h}%
            </span>
          </div>
          <div className="mini-indicator paxgbtc-mini">
            <span className="mini-symbol">PAXG/BTC</span>
            <span className="mini-value">{macroMarketData.macroIndicators.PAXGBTC.current.toFixed(4)}</span>
            <span className={`mini-change ${macroMarketData.macroIndicators.PAXGBTC.change24h < 0 ? 'negative' : 'positive'}`}>
              {macroMarketData.macroIndicators.PAXGBTC.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.PAXGBTC.change24h.toFixed(4)}
            </span>
          </div>
          <div className="mini-indicator usdtdom-mini">
            <span className="mini-symbol">USDT.D</span>
            <span className="mini-value">{macroMarketData.macroIndicators.USDTDOM.current.toFixed(2)}%</span>
            <span className={`mini-change ${macroMarketData.macroIndicators.USDTDOM.change24h < 0 ? 'negative' : 'positive'}`}>
              {macroMarketData.macroIndicators.USDTDOM.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.USDTDOM.change24h.toFixed(2)}%
            </span>
          </div>
          <div className="mini-indicator dxy-mini">
            <span className="mini-symbol">DXY</span>
            <span className="mini-value">{macroMarketData.macroIndicators.DXY.current}</span>
            <span className={`mini-change ${macroMarketData.macroIndicators.DXY.change24h < 0 ? 'negative' : 'positive'}`}>
              {macroMarketData.macroIndicators.DXY.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.DXY.change24h}
            </span>
          </div>
          <div className="mini-indicator sp500-mini">
            <span className="mini-symbol">S&P</span>
            <span className="mini-value">{formatCurrency(macroMarketData.macroIndicators.US500.current)}</span>
            <span className={`mini-change ${macroMarketData.macroIndicators.US500.change24h < 0 ? 'negative' : 'positive'}`}>
              {macroMarketData.macroIndicators.US500.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.US500.change24h}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Hyper-Optimized Multi-Line Macro Header */}
      <motion.header 
        className="macro-overview-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="macro-container">
          


          {/* Row 3: Core Technical Indicators - DXY, S&P, BTC */}
          <div className="macro-row indicators-row">
            <div className="tech-indicators-row">
              
              {/* DXY */}
              <div className="tech-card dxy">
                <div className="tech-header">
                  <span className="tech-symbol">💵 DXY</span>
                  <span className="tech-value">{macroMarketData.macroIndicators.DXY.current}</span>
                  <span className={`tech-change ${macroMarketData.macroIndicators.DXY.change24h < 0 ? 'negative' : 'positive'}`}>
                    {macroMarketData.macroIndicators.DXY.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.DXY.change24h}
                  </span>
                </div>
                <div className="tech-signals">
                  {['15m', '1h', '4h'].map((tf) => {
                    const data = macroMarketData.macroIndicators.DXY.timeframes[tf];
                    return (
                      <span key={tf} className={`tf-dot ${data.direction.toLowerCase()}`} title={`${tf}: ${data.direction}`}>
                        {data.direction === 'BULLISH' ? '🟢' : data.direction === 'BEARISH' ? '🔴' : '🟡'}
                      </span>
                    );
                  })}
                  <span className="mw-agree">✅ {macroMarketData.macroIndicators.DXY.mwAgreement}%</span>
                </div>
              </div>

              {/* S&P 500 */}
              <div className="tech-card sp500">
                <div className="tech-header">
                  <span className="tech-symbol">📈 S&P</span>
                  <span className="tech-value">{Math.round(macroMarketData.macroIndicators.US500.current/1000)}k</span>
                  <span className={`tech-change ${macroMarketData.macroIndicators.US500.change24h < 0 ? 'negative' : 'positive'}`}>
                    {macroMarketData.macroIndicators.US500.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.US500.change24h}%
                  </span>
                </div>
                <div className="tech-signals">
                  {['15m', '1h', '4h'].map((tf) => {
                    const data = macroMarketData.macroIndicators.US500.timeframes[tf];
                    return (
                      <span key={tf} className={`tf-dot ${data.direction.toLowerCase()}`} title={`${tf}: ${data.direction}`}>
                        {data.direction === 'BULLISH' ? '🟢' : data.direction === 'BEARISH' ? '🔴' : '🟡'}
                      </span>
                    );
                  })}
                  <span className="mw-agree">✅ {macroMarketData.macroIndicators.US500.mwAgreement}%</span>
                </div>
              </div>

              {/* BTC */}
              <div className="tech-card btc">
                <div className="tech-header">
                  <span className="tech-symbol">₿ BTC</span>
                  <span className="tech-value">{Math.round(macroMarketData.macroIndicators.BTC.current/1000)}k</span>
                  <span className={`tech-change ${macroMarketData.macroIndicators.BTC.change24h < 0 ? 'negative' : 'positive'}`}>
                    {macroMarketData.macroIndicators.BTC.change24h > 0 ? '+' : ''}{macroMarketData.macroIndicators.BTC.change24h}%
                  </span>
                </div>
                <div className="tech-signals">
                  {['15m', '1h', '4h'].map((tf) => {
                    const data = macroMarketData.macroIndicators.BTC.timeframes[tf];
                    return (
                      <span key={tf} className={`tf-dot ${data.direction.toLowerCase()}`} title={`${tf}: ${data.direction}`}>
                        {data.direction === 'BULLISH' ? '🟢' : data.direction === 'BEARISH' ? '🔴' : '🟡'}
                      </span>
                    );
                  })}
                  <span className="mw-agree">✅ {macroMarketData.macroIndicators.BTC.mwAgreement}%</span>
                </div>
              </div>

            </div>
          </div>

          {/* Row 4: Timing + Stats + Live Time */}
          <div className="macro-row timing-row">
            {/* Timing Info */}
            <div className="timing-compact">
              <div className="timing-item">
                <span>🎥</span>
                <span>{livestreamData.today.duration}</span>
              </div>
              <div className="timing-item">
                <span>🐦</span>
                <span>{xCorrelationData[0].timestamp}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="stats-compact">
              <span>🔥 {dashboardSummary.todayStats.tokensTracked}</span>
              <span>⚡ {dashboardSummary.todayStats.actionableSignals}</span>
              <span>📈 {dashboardSummary.todayStats.avgConfidence}%</span>
            </div>

            {/* Live Time */}
            <div className="live-time-compact">
              <div className="live-dot"></div>
              <span>{formatTime(currentTime)}</span>
            </div>
          </div>

          {/* Row 5: Notifications - Alerts & Actions */}
          <div className="macro-row notifications-row">
            {/* Critical Alert */}
            <div className="alert-compact">
              <AlertTriangle size={12} />
              <span>⚠️ {macroMarketData.marketAlerts[0] && macroMarketData.marketAlerts[0].message.slice(0, 40)}...</span>
            </div>

            {/* Action Items */}
            <div className="actions-compact">
              <Target size={12} />
              <span>🎯 {macroMarketData.currentState.actionItems.slice(0, 2).join(' • ')}</span>
            </div>
          </div>

        </div>
      </motion.header>

      {/* Navigation */}
      <div className="nav-tabs">
        {[
          { id: 'dashboard', label: '🎯 Dashboard', count: null },
          { id: 'etfs', label: '💰 ETFs', count: etfData.currentCycle.phase === 'LONG' ? etfData.mwLongETF.totalHoldings : etfData.mwShortETF.totalHoldings },
          { id: 'livestream', label: '🎥 Stream Analysis', count: null },
          { id: 'xfeed', label: '🐦 X Feed', count: xCorrelationData.length },
          { id: 'library', label: '📚 Library', count: livestreamData.recent.length }
        ].map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${activeSection === tab.id ? 'active' : ''}`}
            onClick={() => setActiveSection(tab.id)}
          >
            {tab.label}
            {tab.count && <span className="tab-count">{tab.count}</span>}
          </button>
        ))}
      </div>

      <div className="monitor-content">
        
        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="dashboard-section"
          >
            {/* Optimized MW Macro Header */}
            <motion.section 
              className="optimized-macro-header"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Market Regime & Thesis - Super Compact */}
              <div className="macro-status-bar">
                <div className="regime-compact" style={{ borderColor: getRegimeColor(macroMarketData.marketRegime.current) }}>
                  <div className="regime-icon-compact">
                    {getRegimeIcon(macroMarketData.marketRegime.current)}
                  </div>
                  <div className="regime-text">
                    <span className="regime-label">MARKET:</span>
                    <span 
                      className="regime-value" 
                      style={{ color: getRegimeColor(macroMarketData.marketRegime.current) }}
                    >
                      {macroMarketData.marketRegime.current}
                    </span>
                    <span className="regime-strength">({macroMarketData.marketRegime.strength}%)</span>
                  </div>
                </div>
                

                
                <div className="alerts-compact">
                  <AlertTriangle size={16} />
                  <div className="alert-text">
                    {macroMarketData.marketAlerts[0] && macroMarketData.marketAlerts[0].message}
                  </div>
                </div>
              </div>

              {/* Core Indicators: BTC, PAXGBTC, USDT.D, DXY, S&P */}
              <div className="core-indicators-grid">
                
                {/* BTC Indicator */}
                <div className="indicator-card btc-card">
                  <div className="indicator-header">
                    <div className="indicator-symbol">BTC</div>
                    <div className="indicator-price">
                      {formatCurrency(macroMarketData.macroIndicators.BTC.current)}
                      <span className={`price-change ${macroMarketData.macroIndicators.BTC.change24h < 0 ? 'negative' : 'positive'}`}>
                        {macroMarketData.macroIndicators.BTC.change24h > 0 ? '+' : ''}
                        {macroMarketData.macroIndicators.BTC.change24h}%
                      </span>
                    </div>
                    <div className="mw-agreement">
                      MW: {macroMarketData.macroIndicators.BTC.mwAgreement}%
                      <span className="mentions-count">({macroMarketData.macroIndicators.BTC.mentions})</span>
                    </div>
                  </div>
                  
                  <div className="timeframes-row">
                    {['15m', '1h', '4h'].map((tf) => {
                      const data = macroMarketData.macroIndicators.BTC.timeframes[tf];
                      return (
                        <div key={tf} className={`timeframe-cell ${data.direction.toLowerCase()}`}>
                          <div className="tf-label">{tf}</div>
                          <div className="tf-direction">
                            {data.direction === 'BULLISH' ? <ArrowUp size={12} /> : 
                             data.direction === 'BEARISH' ? <ArrowDown size={12} /> : 
                             <Minus size={12} />}
                            <span className={`strength-${data.strength.toLowerCase().replace('_', '-')}`}>
                              {data.strength}
                            </span>
                          </div>
                          <div className="tf-confidence">{data.confidence}%</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mw-comment">
                    "{macroMarketData.macroIndicators.BTC.mwLatestComment}"
                  </div>
                </div>

                {/* PAXGBTC Indicator */}
                <div className="indicator-card paxgbtc-card">
                  <div className="indicator-header">
                    <div className="indicator-symbol">PAXG/BTC</div>
                    <div className="indicator-price">
                      {macroMarketData.macroIndicators.PAXGBTC.current.toFixed(4)}
                      <span className={`price-change ${macroMarketData.macroIndicators.PAXGBTC.change24h < 0 ? 'negative' : 'positive'}`}>
                        {macroMarketData.macroIndicators.PAXGBTC.change24h > 0 ? '+' : ''}
                        {macroMarketData.macroIndicators.PAXGBTC.change24h.toFixed(4)}
                      </span>
                    </div>
                    <div className="mw-agreement">
                      MW: {macroMarketData.macroIndicators.PAXGBTC.mwAgreement}%
                      <span className="mentions-count">({macroMarketData.macroIndicators.PAXGBTC.mentions})</span>
                    </div>
                  </div>
                  
                  <div className="timeframes-row">
                    {['15m', '1h', '4h'].map((tf) => {
                      const data = macroMarketData.macroIndicators.PAXGBTC.timeframes[tf];
                      return (
                        <div key={tf} className={`timeframe-cell ${data.direction.toLowerCase()}`}>
                          <div className="tf-label">{tf}</div>
                          <div className="tf-direction">
                            {data.direction === 'BULLISH' ? <ArrowUp size={12} /> : 
                             data.direction === 'BEARISH' ? <ArrowDown size={12} /> : 
                             <Minus size={12} />}
                            <span className={`strength-${data.strength.toLowerCase().replace('_', '-')}`}>
                              {data.strength}
                            </span>
                          </div>
                          <div className="tf-confidence">{data.confidence}%</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mw-comment">
                    "{macroMarketData.macroIndicators.PAXGBTC.mwLatestComment}"
                  </div>
                </div>

                {/* USDT Dominance Indicator */}
                <div className="indicator-card usdtdom-card">
                  <div className="indicator-header">
                    <div className="indicator-symbol">USDT.D</div>
                    <div className="indicator-price">
                      {macroMarketData.macroIndicators.USDTDOM.current.toFixed(2)}%
                      <span className={`price-change ${macroMarketData.macroIndicators.USDTDOM.change24h < 0 ? 'negative' : 'positive'}`}>
                        {macroMarketData.macroIndicators.USDTDOM.change24h > 0 ? '+' : ''}
                        {macroMarketData.macroIndicators.USDTDOM.change24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="mw-agreement">
                      MW: {macroMarketData.macroIndicators.USDTDOM.mwAgreement}%
                      <span className="mentions-count">({macroMarketData.macroIndicators.USDTDOM.mentions})</span>
                    </div>
                  </div>
                  
                  <div className="timeframes-row">
                    {['15m', '1h', '4h'].map((tf) => {
                      const data = macroMarketData.macroIndicators.USDTDOM.timeframes[tf];
                      return (
                        <div key={tf} className={`timeframe-cell ${data.direction.toLowerCase()}`}>
                          <div className="tf-label">{tf}</div>
                          <div className="tf-direction">
                            {data.direction === 'BULLISH' ? <ArrowUp size={12} /> : 
                             data.direction === 'BEARISH' ? <ArrowDown size={12} /> : 
                             <Minus size={12} />}
                            <span className={`strength-${data.strength.toLowerCase().replace('_', '-')}`}>
                              {data.strength}
                            </span>
                          </div>
                          <div className="tf-confidence">{data.confidence}%</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mw-comment">
                    "{macroMarketData.macroIndicators.USDTDOM.mwLatestComment}"
                  </div>
                </div>

                {/* DXY Indicator */}
                <div className="indicator-card dxy-card">
                  <div className="indicator-header">
                    <div className="indicator-symbol">DXY</div>
                    <div className="indicator-price">
                      {macroMarketData.macroIndicators.DXY.current}
                      <span className={`price-change ${macroMarketData.macroIndicators.DXY.change24h < 0 ? 'negative' : 'positive'}`}>
                        {macroMarketData.macroIndicators.DXY.change24h > 0 ? '+' : ''}
                        {macroMarketData.macroIndicators.DXY.change24h}
                      </span>
                    </div>
                    <div className="mw-agreement">
                      MW: {macroMarketData.macroIndicators.DXY.mwAgreement}%
                      <span className="mentions-count">({macroMarketData.macroIndicators.DXY.mentions})</span>
                    </div>
                  </div>
                  
                  <div className="timeframes-row">
                    {['15m', '1h', '4h'].map((tf) => {
                      const data = macroMarketData.macroIndicators.DXY.timeframes[tf];
                      return (
                        <div key={tf} className={`timeframe-cell ${data.direction.toLowerCase()}`}>
                          <div className="tf-label">{tf}</div>
                          <div className="tf-direction">
                            {data.direction === 'BULLISH' ? <ArrowUp size={12} /> : 
                             data.direction === 'BEARISH' ? <ArrowDown size={12} /> : 
                             <Minus size={12} />}
                            <span className={`strength-${data.strength.toLowerCase().replace('_', '-')}`}>
                              {data.strength}
                            </span>
                          </div>
                          <div className="tf-confidence">{data.confidence}%</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mw-comment">
                    "{macroMarketData.macroIndicators.DXY.mwLatestComment}"
                  </div>
                </div>

                {/* US500 Indicator */}
                <div className="indicator-card us500-card">
                  <div className="indicator-header">
                    <div className="indicator-symbol">S&P</div>
                    <div className="indicator-price">
                      {formatCurrency(macroMarketData.macroIndicators.US500.current)}
                      <span className={`price-change ${macroMarketData.macroIndicators.US500.change24h < 0 ? 'negative' : 'positive'}`}>
                        {macroMarketData.macroIndicators.US500.change24h > 0 ? '+' : ''}
                        {macroMarketData.macroIndicators.US500.change24h}%
                      </span>
                    </div>
                    <div className="mw-agreement">
                      MW: {macroMarketData.macroIndicators.US500.mwAgreement}%
                      <span className="mentions-count">({macroMarketData.macroIndicators.US500.mentions})</span>
                    </div>
                  </div>
                  
                  <div className="timeframes-row">
                    {['15m', '1h', '4h'].map((tf) => {
                      const data = macroMarketData.macroIndicators.US500.timeframes[tf];
                      return (
                        <div key={tf} className={`timeframe-cell ${data.direction.toLowerCase()}`}>
                          <div className="tf-label">{tf}</div>
                          <div className="tf-direction">
                            {data.direction === 'BULLISH' ? <ArrowUp size={12} /> : 
                             data.direction === 'BEARISH' ? <ArrowDown size={12} /> : 
                             <Minus size={12} />}
                            <span className={`strength-${data.strength.toLowerCase().replace('_', '-')}`}>
                              {data.strength}
                            </span>
                          </div>
                          <div className="tf-confidence">{data.confidence}%</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mw-comment">
                    "{macroMarketData.macroIndicators.US500.mwLatestComment}"
                  </div>
                </div>
              </div>

              {/* Quick Action Bar */}
              <div className="quick-action-bar">
                <div className="action-section">
                  <Target size={14} />
                  <span>Actions: {macroMarketData.currentState.actionItems.join(' • ')}</span>
                </div>
              </div>

            </motion.section>

            {/* Hottest Tokens */}
            <section className="hot-tokens-section">
              <div className="section-header">
                <h2>🔥 Hottest Tokens Right Now</h2>
                <span className="live-indicator">
                  <span className="live-dot"></span>
                  Live
                </span>
              </div>
              
              <div className="enhanced-tokens-grid">
                {tokenHeatData.map((token, index) => (
                  <motion.div
                    key={token.id}
                    className={`enhanced-token-card ${getHeatColor(token.heatScore)}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleTokenClick(token.symbol)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Token Header with Price */}
                    <div className="enhanced-token-header">
                      <div className="token-main-info">
                        <h3 className="token-symbol">{token.symbol}</h3>
                        <span className="token-name">{token.name}</span>
                        <div className="token-price">
                          <span className="current-price">
                            ${token.symbol === 'PEPE' || token.symbol === 'BONK' ? 
                              token.currentPrice.toExponential(2) : token.currentPrice.toFixed(2)}
                          </span>
                          <span className={`price-change ${token.change24h > 0 ? 'positive' : 'negative'}`}>
                            {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                      <div className="token-rating">
                        <div className={`mw-rating rating-${token.mwRating.toLowerCase().replace('_', '-')}`}>
                          {token.mwRating.replace('_', ' ')}
                        </div>
                        <div className="heat-score">{token.heatScore}</div>
                        <div className="mentions-total">{token.mentions.totalToday} mentions</div>
                      </div>
                    </div>

                    {/* MW Indicator Channel Analysis */}
                    <div className="mw-indicator-section">
                      <div className="indicator-header">
                        <span className="indicator-label">MW Indicator (SMA21/EMA34)</span>
                        <span className={`overall-signal ${token.mwIndicator.overallSignal.toLowerCase().replace('_', '-')}`}>
                          {token.mwIndicator.overallSignal.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="timeframes-analysis">
                        {['15m', '1h', '4h'].map((tf) => {
                          const data = token.mwIndicator.timeframes[tf];
                          return (
                            <div key={tf} className="timeframe-analysis">
                              <div className="tf-header">
                                <span className="tf-label">{tf}</span>
                                <span className={`channel-position ${data.channelPosition.startsWith('+') ? 'above' : 'below'}`}>
                                  {data.channelPosition}
                                </span>
                              </div>
                              <div className={`tf-status ${data.status.toLowerCase().replace('_', '-')}`}>
                                {data.status.replace('_', ' ')}
                                {data.peakDeviation && <span className="deviation-warning">⚠️ Peak</span>}
                                {data.valleyDeviation && <span className="deviation-opportunity">💎 Valley</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technical Indicators */}
                    <div className="technicals-section">
                      <div className="technicals-grid">
                        <div className="tech-indicator">
                          <span className="tech-label">ADX</span>
                          <span className={`tech-value adx-${token.technicals.adx.trend.toLowerCase().replace('_', '-')}`}>
                            {token.technicals.adx.value.toFixed(1)}
                          </span>
                          <span className="tech-signal">{token.technicals.adx.signal.replace('_', ' ')}</span>
                        </div>
                        <div className="tech-indicator">
                          <span className="tech-label">MFI</span>
                          <span className={`tech-value mfi-${token.technicals.mfi.level.toLowerCase().replace('_', '-')}`}>
                            {token.technicals.mfi.value.toFixed(1)}
                          </span>
                          <span className="tech-signal">{token.technicals.mfi.signal.replace('_', ' ')}</span>
                        </div>
                        <div className="tech-indicator">
                          <span className="tech-label">Volume</span>
                          <span className={`tech-value volume-${token.technicals.volume.signal.toLowerCase().replace('_', '-')}`}>
                            {token.technicals.volume.avgRatio.toFixed(2)}x
                          </span>
                          <span className="tech-signal">{token.technicals.volume.koreanVolume}</span>
                        </div>
                        <div className="tech-indicator">
                          <span className="tech-label">Funding</span>
                          <span className={`tech-value funding-${token.technicals.fundingRate.level.toLowerCase().replace('_', '-')}`}>
                            {(token.technicals.fundingRate.current * 100).toFixed(2)}%
                          </span>
                          <span className="tech-signal">{token.technicals.fundingRate.trend}</span>
                        </div>
                      </div>
                    </div>

                    {/* MW Position & Performance */}
                    <div className="position-section">
                      <div className="position-header">
                        <span className="position-label">MW Position</span>
                        <span className="position-performance">{token.position.performance}</span>
                      </div>
                      <div className="position-details">
                        <span className="position-size">Size: {token.position.size}</span>
                        <span className={`position-action action-${token.position.action.toLowerCase().replace('_', '-')}`}>
                          {token.position.action.replace('_', ' ')}
                        </span>
                        <span className={`position-conviction conviction-${token.position.conviction.toLowerCase().replace('_', '-')}`}>
                          {token.position.conviction.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    {/* MW Latest Take */}
                    <div className="mw-take">
                      <div className="take-header">
                        <span className="take-label">MW Latest:</span>
                        <span className="take-time">{token.lastMentioned}</span>
                      </div>
                      <div className="take-quote">"{token.mwLatestTake}"</div>
                    </div>

                    {/* Key Technical Insights */}
                    <div className="technical-insights">
                      {token.keyInsights.slice(0, 3).map((insight, idx) => (
                        <div key={idx} className="tech-insight">
                          <span className="insight-bullet">•</span>
                          <span className="insight-text">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Today's Stream Summary */}
            <section className="stream-summary">
              <h2>📺 Today's Stream Analysis</h2>
              <div className="stream-card">
                <div className="stream-header">
                  <h3>{livestreamData.today.title}</h3>
                  <div className="stream-meta">
                    <span className="duration">
                      <Clock size={16} />
                      {livestreamData.today.duration}
                    </span>
                    <span className="viewers">
                      <Eye size={16} />
                      {livestreamData.today.viewerCount.toLocaleString()}
                    </span>
                    <span className="status processed">
                      ✅ Processed
                    </span>
                  </div>
                </div>
                
                <div className="analysis-results">
                  <div className="result-item">
                    <Target size={16} />
                    <span>{livestreamData.today.analysis.tokensDiscussed} Tokens Discussed</span>
                  </div>
                  <div className="result-item">
                    <Zap size={16} />
                    <span>{livestreamData.today.analysis.actionableSignals} Action Signals</span>
                  </div>
                  <div className="result-item">
                    <BarChart3 size={16} />
                    <span>{livestreamData.today.analysis.confidence}% AI Confidence</span>
                  </div>
                </div>
                
                <div className="top-quotes">
                  <h4>Key Quotes:</h4>
                  {livestreamData.today.keyQuotes.map((quote, index) => (
                    <div key={index} className="quote-item">
                      <span className="timestamp">{quote.timestamp}</span>
                      <span className="quote">"{quote.quote}"</span>
                      <div className="quote-tokens">
                        {quote.tokens.map(token => (
                          <span key={token} className="quote-token">{token}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Correlation Summary */}
            <section className="ai-summary">
              <h2>🤖 AI Correlation Analysis</h2>
              <div className="correlation-card">
                <div className="correlation-header">
                  <div className="overall-confidence">
                    <span className="confidence-value">{aiCorrelationAnalysis.overallConfidence}%</span>
                    <span className="confidence-label">Overall Confidence</span>
                  </div>
                  <div className="correlation-stats">
                    <div className="stat">
                      <span className="value">{aiCorrelationAnalysis.strongCorrelations.length}</span>
                      <span className="label">Strong Correlations</span>
                    </div>
                    <div className="stat">
                      <span className="value">{aiCorrelationAnalysis.trendingUp.length}</span>
                      <span className="label">Trending Up</span>
                    </div>
                  </div>
                </div>
                
                <div className="strong-correlations">
                  <h4>Strongest Signal Correlations:</h4>
                  {aiCorrelationAnalysis.strongCorrelations.map((corr, index) => (
                    <div key={index} className="correlation-item">
                      <div className="corr-header">
                        <span className="token">{corr.token}</span>
                        <span className="strength">{corr.correlationStrength}%</span>
                      </div>
                      <div className="corr-details">
                        <span>Stream: {corr.streamMentions}x | X: {corr.xMentions}x</span>
                      </div>
                      <div className="reasoning">{corr.reasoning}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ETFs Section */}
        {activeSection === 'etfs' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="etfs-section"
          >
            {/* ETF Header - Cycle Status */}
            <div className="etf-header">
              <div className="cycle-status">
                <div className="cycle-main">
                  <span className="cycle-label">CURRENT CYCLE:</span>
                  <span className={`cycle-value ${etfData.currentCycle.phase.toLowerCase()}`}>
                    {etfData.currentCycle.phase} ({etfData.currentCycle.confidence}%)
                  </span>
                  <span className="cycle-duration">{etfData.currentCycle.duration}</span>
                </div>
                <div className="cycle-reasoning">
                  "{etfData.currentCycle.reasoning}"
                </div>
              </div>

              <div className="etf-status">
                <div 
                  className={`etf-selector ${etfData.mwLongETF.status === 'ACTIVE' ? 'active' : 'inactive'}`}
                  onClick={() => setActiveETF('long')}
                >
                  <div className="etf-name">MWLongETF</div>
                  <div className="etf-performance">
                    {etfData.mwLongETF.avgPerformance}
                  </div>
                  <div className="etf-updated">
                    Updated: {etfData.mwLongETF.lastUpdated}
                  </div>
                </div>

                <div 
                  className={`etf-selector ${etfData.mwShortETF.status === 'ACTIVE' ? 'active' : 'inactive'}`}
                  onClick={() => setActiveETF('short')}
                >
                  <div className="etf-name">MWShortETF</div>
                  <div className="etf-performance">
                    {etfData.mwShortETF.avgPerformance}
                  </div>
                  <div className="etf-updated">
                    Updated: {etfData.mwShortETF.lastUpdated}
                  </div>
                </div>
              </div>
            </div>

            {/* ETF Tabs */}
            <div className="etf-tabs">
              <button 
                className={`etf-tab ${activeETF === 'long' ? 'active' : ''}`}
                onClick={() => setActiveETF('long')}
              >
                💚 MWLongETF ({etfData.mwLongETF.totalHoldings} holdings)
              </button>
              <button 
                className={`etf-tab ${activeETF === 'short' ? 'active' : ''}`}
                onClick={() => setActiveETF('short')}
              >
                🔴 MWShortETF ({etfData.mwShortETF.totalHoldings} holdings)
              </button>
            </div>

            {/* Long ETF Content */}
            {activeETF === 'long' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="etf-content"
              >
                <div className="etf-overview">
                  <div className="etf-description">
                    <h3>🚀 {etfData.mwLongETF.name}</h3>
                    <p>{etfData.mwLongETF.description}</p>
                    <div className="etf-stats">
                      <div className="stat-item">
                        <span className="stat-label">Total Return:</span>
                        <span className="stat-value positive">{etfData.mwLongETF.metrics.totalReturn}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Win Rate:</span>
                        <span className="stat-value">{etfData.mwLongETF.metrics.winRate}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Best Performer:</span>
                        <span className="stat-value positive">{etfData.mwLongETF.metrics.bestPerformer}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Market Cap:</span>
                        <span className="stat-value">{etfData.mwLongETF.marketCap}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Holdings Table */}
                <div className="holdings-table">
                  <div className="table-header">
                    <div className="col-symbol">Token</div>
                    <div className="col-entry">Entry Price</div>
                    <div className="col-current">Current</div>
                    <div className="col-performance">Performance</div>
                    <div className="col-weight">Weight</div>
                    <div className="col-date">Call Date</div>
                    <div className="col-rationale">MW Rationale</div>
                  </div>
                  
                  {etfData.mwLongETF.holdings.map((holding, index) => (
                    <div key={index} className="holding-row">
                      <div className="col-symbol">
                        <div className="token-info">
                          <span className="symbol">{holding.symbol}</span>
                          <span className="name">{holding.name}</span>
                        </div>
                      </div>
                      <div className="col-entry">
                        ${holding.symbol === 'PEPE' || holding.symbol === 'BONK' ? 
                          holding.entryPrice.toExponential(2) : holding.entryPrice.toFixed(2)}
                      </div>
                      <div className="col-current">
                        ${holding.symbol === 'PEPE' || holding.symbol === 'BONK' ? 
                          holding.currentPrice.toExponential(2) : holding.currentPrice.toFixed(2)}
                      </div>
                      <div className="col-performance">
                        <span className={holding.performance.startsWith('+') ? 'positive' : 'negative'}>
                          {holding.performance}
                        </span>
                      </div>
                      <div className="col-weight">{holding.weight}</div>
                      <div className="col-date">{holding.callDate}</div>
                      <div className="col-rationale">
                        <div className="rationale">{holding.rationale}</div>
                        <div className="mw-note">"{holding.mwNote}"</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Changes */}
                <div className="recent-changes">
                  <h4>📈 Recent Portfolio Changes</h4>
                  <div className="changes-list">
                    {etfData.mwLongETF.recentChanges.map((change, index) => (
                      <div key={index} className={`change-item ${change.action.toLowerCase()}`}>
                        <span className="change-date">{change.date}</span>
                        <span className={`change-action ${change.action.toLowerCase()}`}>
                          {change.action}
                        </span>
                        <span className="change-symbol">{change.symbol}</span>
                        <span className="change-details">
                          {change.price && `@ $${change.price}`}
                          {change.from && change.to && `${change.from} → ${change.to}`}
                        </span>
                        <span className="change-reason">{change.reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Short ETF Content */}
            {activeETF === 'short' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="etf-content"
              >
                <div className="etf-overview">
                  <div className="etf-description">
                    <h3>🛡️ {etfData.mwShortETF.name}</h3>
                    <p>{etfData.mwShortETF.description}</p>
                    <div className="etf-stats">
                      <div className="stat-item">
                        <span className="stat-label">Historical Return:</span>
                        <span className="stat-value positive">{etfData.mwShortETF.metrics.totalReturn}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Win Rate:</span>
                        <span className="stat-value">{etfData.mwShortETF.metrics.winRate}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Status:</span>
                        <span className="stat-value dormant">{etfData.mwShortETF.status}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Market Cap:</span>
                        <span className="stat-value">{etfData.mwShortETF.marketCap}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Holdings Table for Short ETF */}
                <div className="holdings-table">
                  <div className="table-header">
                    <div className="col-symbol">Asset</div>
                    <div className="col-entry">Entry Price</div>
                    <div className="col-current">Current</div>
                    <div className="col-performance">Performance</div>
                    <div className="col-weight">Weight</div>
                    <div className="col-date">Call Date</div>
                    <div className="col-rationale">MW Rationale</div>
                  </div>
                  
                  {etfData.mwShortETF.holdings.map((holding, index) => (
                    <div key={index} className="holding-row dormant">
                      <div className="col-symbol">
                        <div className="token-info">
                          <span className="symbol">{holding.symbol}</span>
                          <span className="name">{holding.name}</span>
                        </div>
                      </div>
                      <div className="col-entry">${holding.entryPrice.toFixed(2)}</div>
                      <div className="col-current">${holding.currentPrice.toFixed(2)}</div>
                      <div className="col-performance">
                        <span className={holding.performance.startsWith('+') ? 'positive' : 'negative'}>
                          {holding.performance}
                        </span>
                      </div>
                      <div className="col-weight">{holding.weight}</div>
                      <div className="col-date">{holding.callDate}</div>
                      <div className="col-rationale">
                        <div className="rationale">{holding.rationale}</div>
                        <div className="mw-note">"{holding.mwNote}"</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dormant Notice */}
                <div className="dormant-notice">
                  <h4>🔒 ETF Currently Dormant</h4>
                  <p>This ETF is inactive during the current {etfData.currentCycle.phase} cycle. 
                     Holdings shown represent the last active configuration.</p>
                  <div className="reactivation-triggers">
                    <strong>Reactivation Triggers:</strong>
                    <ul>
                      {etfData.cycleTriggers.bearishTriggers.map((trigger, index) => (
                        <li key={index}>{trigger}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* X Feed Section */}
        {activeSection === 'xfeed' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="xfeed-section"
          >
            <h2>🐦 Correlated X Posts</h2>
            <div className="posts-feed">
              {xCorrelationData.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="post-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="post-header">
                    <span className="account">{post.account}</span>
                    <span className="timestamp">{post.timestamp}</span>
                    <span className="correlation-score">{post.correlationScore}%</span>
                  </div>
                  
                  <div className="post-content">{post.content}</div>
                  
                  <div className="post-tokens">
                    {post.tokens.map(token => (
                      <span key={token} className="post-token">{token}</span>
                    ))}
                  </div>
                  
                  <div className="post-engagement">
                    <span>❤️ {post.engagement.likes}</span>
                    <span>🔄 {post.engagement.retweets}</span>
                    <span>💬 {post.engagement.comments}</span>
                    <span className={`sentiment ${post.sentiment}`}>
                      {post.sentiment}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stream Analysis Section */}
        {activeSection === 'livestream' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="livestream-section"
          >
            {selectedStream ? (
              <StreamAnalysis 
                streamData={selectedStream} 
                isToday={false}
                onBackToLibrary={handleBackToLibrary}
              />
            ) : (
              <StreamAnalysis 
                streamData={livestreamData.today} 
                isToday={true}
              />
            )}
          </motion.div>
        )}

        {/* Library Section */}
        {activeSection === 'library' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="library-section"
          >
            <h2>📚 Stream Library</h2>
            <div className="library-content">
              <div className="recent-streams">
                {livestreamData.recent.map((stream, index) => (
                  <div 
                    key={stream.id} 
                    className="library-item enhanced-library-item"
                    onClick={() => handleStreamClick(stream)}
                  >
                    <div className="library-thumbnail">
                      <img 
                        src={stream.thumbnail}
                        alt={stream.title}
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxpdmVzdHJlYW08L3RleHQ+PC9zdmc+';
                        }}
                      />
                      <div className="library-duration">{stream.duration}</div>
                    </div>
                    <div className="library-main-content">
                      <div className="library-header">
                        <h4>{stream.title}</h4>
                        <div className="library-meta">
                          <span className="stream-date">{stream.date}</span>
                          <span className="viewer-count">
                            <Eye size={14} />
                            {stream.viewerCount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="library-analysis-preview">
                        <div className="analysis-stats">
                          <div className="stat">
                            <Target size={16} />
                            <span>{stream.analysis.tokensDiscussed} tokens</span>
                          </div>
                          <div className="stat">
                            <Zap size={16} />
                            <span>{stream.analysis.actionableSignals} signals</span>
                          </div>
                          <div className="stat">
                            <Star size={16} />
                            <span>{stream.analysis.overallRating}/10</span>
                          </div>
                          <div className="stat">
                            <Camera size={16} />
                            <span>{stream.keyMoments.length} key moments</span>
                          </div>
                        </div>
                        
                        <div className="key-themes">
                          <span className="themes-label">Themes:</span>
                          {stream.analysis.keyThemes.map((theme, idx) => (
                            <span key={idx} className="theme-tag">{theme}</span>
                          ))}
                        </div>
                        
                        <div className="top-tokens-preview">
                          <span className="tokens-label">Top Tokens:</span>
                          <div className="tokens-list">
                            {stream.topTokens.slice(0, 4).map((token, idx) => (
                              <span 
                                key={idx} 
                                className={`token-preview ${token.sentiment}`}
                              >
                                {token.symbol}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="library-footer">
                        <span className={`overall-sentiment ${stream.analysis.sentiment}`}>
                          {stream.analysis.sentiment === 'bullish' ? '🚀' : stream.analysis.sentiment === 'bearish' ? '📉' : '⚖️'}
                          {stream.analysis.sentiment.toUpperCase()}
                        </span>
                        <span className="confidence-score">
                          {stream.analysis.confidence}% confidence
                        </span>
                        <button className="analyze-btn">
                          Deep Dive Analysis →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default MWMonitor;