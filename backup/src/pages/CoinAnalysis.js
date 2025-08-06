import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { tradingSetups, tradingViewConfig, intelligenceData } from '../data/dummyData';
import './CoinAnalysis.css';

/**
 * MW Coin Analysis Page
 * 
 * Comprehensive coin analysis page featuring:
 * - Multi-timeframe TradingView charts with MW indicators
 * - MW indicator panel and analysis
 * - Real-time price action and sentiment
 * - MW-specific trading signals and commentary
 * - Risk management tools and position sizing
 * - Intelligence feed specific to the coin
 * 
 * TradingView Integration Points:
 * - 4H Chart: tv-chart-4h (Context View)
 * - 1H Chart: tv-chart-1h (Primary View)  
 * - 15M Chart: tv-chart-15m (Execution View)
 * - Indicators Panel: tv-indicators-panel (Custom MW Indicators)
 */

const CoinAnalysis = () => {
  const { symbol } = useParams();
  const symbolUpper = symbol?.toUpperCase();
  
  // Find relevant setup data for this coin
  const coinSetup = tradingSetups.find(setup => setup.token === symbolUpper);
  const coinGems = intelligenceData.livestream.gems.filter(gem => gem.token === symbolUpper);
  const coinPosts = intelligenceData.xPosts.filter(post => post.tokens.includes(symbolUpper));

  // Mock current price data (would be real-time in production)
  const currentPrice = coinSetup?.currentPrice || 145.67;
  const priceChange = 2.34;
  const priceChangePercent = 1.67;
  const volume24h = '234.5M';
  const marketCap = '67.8B';

  return (
    <div className="coin-analysis">
      <div className="coin-analysis-container">
        {/* Coin Header Section */}
        <section className="coin-header-section">
          <CoinHeader 
            symbol={symbolUpper}
            currentPrice={currentPrice}
            priceChange={priceChange}
            priceChangePercent={priceChangePercent}
            volume={volume24h}
            marketCap={marketCap}
            setup={coinSetup}
          />
        </section>

        {/* Multi-Timeframe Charts Section */}
        <section className="charts-section">
          <div className="charts-section-header">
            <h2 className="section-title">Multi-Timeframe Analysis</h2>
            <span className="section-subtitle">MW indicators across timeframes</span>
          </div>
          <ChartsGrid symbol={symbolUpper} />
        </section>

        {/* MW Analysis Section */}
        <section className="analysis-section">
          <div className="analysis-section-header">
            <h2 className="section-title">MW Analysis</h2>
            <span className="section-subtitle">Technical breakdown and signals</span>
          </div>
          <MWAnalysisBreakdown symbol={symbolUpper} setup={coinSetup} />
        </section>

        {/* Intelligence & Signals Section */}
        <section className="intelligence-section">
          <div className="intelligence-section-header">
            <h2 className="section-title">Intelligence & Signals</h2>
            <span className="section-subtitle">{symbolUpper} mentions and analysis</span>
          </div>
          <CoinIntelligence 
            symbol={symbolUpper}
            gems={coinGems}
            posts={coinPosts}
          />
        </section>

        {/* Action Panel Section */}
        <section className="action-section">
          <div className="action-section-header">
            <h2 className="section-title">Trading Actions</h2>
            <span className="section-subtitle">Risk management and execution</span>
          </div>
          <ActionPanel symbol={symbolUpper} setup={coinSetup} />
        </section>
      </div>
    </div>
  );
};

// Coin Header Component
const CoinHeader = ({ 
  symbol, 
  currentPrice, 
  priceChange, 
  priceChangePercent, 
  volume, 
  marketCap, 
  setup 
}) => {
  return (
    <Card variant="elevated" className="coin-header-card">
      <div className="coin-header-main">
        <div className="coin-identity">
          <div className="coin-icon-large">
            <img 
              src={`/icons/${symbol.toLowerCase()}.png`} 
              alt={symbol}
              onError={(e) => e.target.style.display = 'none'}
            />
            <span className="coin-fallback-large">{symbol}</span>
          </div>
          <div className="coin-details">
            <h1 className="coin-symbol-large">{symbol}</h1>
            <span className="coin-name-large">{getCoinName(symbol)}</span>
            <div className="coin-market-data">
              <span className="market-data-item">Vol: {volume}</span>
              <span className="market-data-item">MCap: {marketCap}</span>
            </div>
          </div>
        </div>
        
        <div className="coin-price-section">
          <div className="current-price-large">${currentPrice.toFixed(4)}</div>
          <div className="price-change-section">
            <Badge 
              variant="solid" 
              color={priceChange > 0 ? 'success' : 'danger'}
              size="md"
            >
              {priceChange > 0 ? '+' : ''}${priceChange.toFixed(2)}
            </Badge>
            <Badge 
              variant="solid" 
              color={priceChangePercent > 0 ? 'success' : 'danger'}
              size="md"
            >
              {priceChangePercent > 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%
            </Badge>
          </div>
        </div>
      </div>
      
      {setup && (
        <div className="coin-setup-summary">
          <div className="setup-summary-header">
            <h3>Active MW Setup</h3>
            <Badge confidence={setup.confidence} variant="confidence" />
          </div>
          <div className="setup-summary-details">
            <div className="setup-summary-item">
              <span className="setup-label">Type:</span>
              <span className="setup-value">{setup.setupType}</span>
            </div>
            <div className="setup-summary-item">
              <span className="setup-label">Timeframe:</span>
              <span className="setup-value">{setup.timeframe}</span>
            </div>
            <div className="setup-summary-item">
              <span className="setup-label">R:R:</span>
              <span className="setup-value">{setup.riskReward}</span>
            </div>
            <div className="setup-summary-item">
              <span className="setup-label">P&L:</span>
              <span className={`setup-value ${setup.unrealizedPnl > 0 ? 'positive' : 'negative'}`}>
                {setup.unrealizedPnl > 0 ? '+' : ''}{setup.unrealizedPnl}%
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

// Charts Grid Component - TradingView Integration Points
const ChartsGrid = ({ symbol }) => {
  React.useEffect(() => {
    // TradingView Widget Initialization
    // These are the exact integration points where TradingView widgets will be embedded
    
    const initializeTradingViewCharts = () => {
      // 4H Context Chart
      if (window.TradingView && document.getElementById('tv-chart-4h')) {
        new window.TradingView.widget({
          ...tradingViewConfig.placements.coinAnalysis.chart4H,
          symbol: `BINANCE:${symbol}USDT`,
          container_id: 'tv-chart-4h'
        });
      }
      
      // 1H Primary Chart  
      if (window.TradingView && document.getElementById('tv-chart-1h')) {
        new window.TradingView.widget({
          ...tradingViewConfig.placements.coinAnalysis.chart1H,
          symbol: `BINANCE:${symbol}USDT`,
          container_id: 'tv-chart-1h'
        });
      }
      
      // 15M Execution Chart
      if (window.TradingView && document.getElementById('tv-chart-15m')) {
        new window.TradingView.widget({
          ...tradingViewConfig.placements.coinAnalysis.chart15M,
          symbol: `BINANCE:${symbol}USDT`,
          container_id: 'tv-chart-15m'
        });
      }
      
      // MW Indicators Panel
      if (window.TradingView && document.getElementById('tv-indicators-panel')) {
        new window.TradingView.widget({
          ...tradingViewConfig.placements.coinAnalysis.indicatorsPanel,
          symbol: `BINANCE:${symbol}USDT`,
          container_id: 'tv-indicators-panel'
        });
      }
    };

    // Initialize charts when TradingView library loads
    if (window.TradingView) {
      initializeTradingViewCharts();
    } else {
      // Wait for TradingView to load
      const checkTradingView = setInterval(() => {
        if (window.TradingView) {
          clearInterval(checkTradingView);
          initializeTradingViewCharts();
        }
      }, 100);
    }
  }, [symbol]);

  return (
    <div className="charts-grid">
      {/* 4H Context Chart */}
      <Card variant="elevated" className="chart-container chart-4h">
        <div className="chart-header">
          <h3 className="chart-title">4H Context View</h3>
          <div className="chart-indicators">
            <Badge variant="outline" color="info" size="xs">MW Bands</Badge>
            <Badge variant="outline" color="info" size="xs">Rocket Macro</Badge>
          </div>
        </div>
        <div 
          id="tv-chart-4h" 
          className="tradingview-chart"
          style={{ height: '400px', width: '100%' }}
        >
          {/* TradingView 4H Chart will be embedded here */}
          <div className="chart-placeholder">
            <div className="chart-placeholder-content">
              <span className="chart-placeholder-icon">📈</span>
              <span className="chart-placeholder-text">4H {symbol}/USDT Chart</span>
              <span className="chart-placeholder-subtitle">TradingView integration point</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 1H Primary Chart */}
      <Card variant="elevated" className="chart-container chart-1h">
        <div className="chart-header">
          <h3 className="chart-title">1H Primary View</h3>
          <div className="chart-indicators">
            <Badge variant="outline" color="success" size="xs">MW Trade Panel</Badge>
            <Badge variant="outline" color="warning" size="xs">EMA 34/SMA 21</Badge>
          </div>
        </div>
        <div 
          id="tv-chart-1h" 
          className="tradingview-chart"
          style={{ height: '400px', width: '100%' }}
        >
          {/* TradingView 1H Chart will be embedded here */}
          <div className="chart-placeholder">
            <div className="chart-placeholder-content">
              <span className="chart-placeholder-icon">📊</span>
              <span className="chart-placeholder-text">1H {symbol}/USDT Chart</span>
              <span className="chart-placeholder-subtitle">Primary analysis timeframe</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 15M Execution Chart */}
      <Card variant="elevated" className="chart-container chart-15m">
        <div className="chart-header">
          <h3 className="chart-title">15M Execution View</h3>
          <div className="chart-indicators">
            <Badge variant="outline" color="critical" size="xs">MW Wick Multi TF</Badge>
            <Badge variant="outline" color="info" size="xs">Volume</Badge>
          </div>
        </div>
        <div 
          id="tv-chart-15m" 
          className="tradingview-chart"
          style={{ height: '400px', width: '100%' }}
        >
          {/* TradingView 15M Chart will be embedded here */}
          <div className="chart-placeholder">
            <div className="chart-placeholder-content">
              <span className="chart-placeholder-icon">⚡</span>
              <span className="chart-placeholder-text">15M {symbol}/USDT Chart</span>
              <span className="chart-placeholder-subtitle">Entry/exit timing</span>
            </div>
          </div>
        </div>
      </Card>

      {/* MW Indicators Panel */}
      <Card variant="elevated" className="chart-container indicators-panel">
        <div className="chart-header">
          <h3 className="chart-title">MW Indicators</h3>
          <div className="chart-indicators">
            <Badge variant="outline" color="critical" size="xs">Live</Badge>
            <Badge variant="outline" color="success" size="xs">Confidence: 94%</Badge>
          </div>
        </div>
        <div 
          id="tv-indicators-panel" 
          className="tradingview-chart"
          style={{ height: '400px', width: '100%' }}
        >
          {/* TradingView MW Indicators Panel will be embedded here */}
          <div className="chart-placeholder">
            <div className="chart-placeholder-content">
              <span className="chart-placeholder-icon">🎯</span>
              <span className="chart-placeholder-text">MW Custom Indicators</span>
              <span className="chart-placeholder-subtitle">Confidence & correlation metrics</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

// MW Analysis Breakdown Component
const MWAnalysisBreakdown = ({ symbol, setup }) => {
  const analysisData = {
    mwBandPosition: setup ? 'Above +15% Band' : 'Between Base and +5%',
    volumeConfirmation: setup ? setup.volumeConfirmation : false,
    technicalAlignment: setup ? setup.technicalAlignment : 72,
    marketContext: setup ? setup.marketContext : 'Neutral market conditions',
    riskLevel: setup ? 'Medium' : 'Low',
    recommendation: setup ? 'ACTIVE SETUP' : 'MONITORING'
  };

  return (
    <div className="analysis-breakdown">
      <div className="analysis-grid">
        <AnalysisCard 
          title="MW Band Analysis"
          value={analysisData.mwBandPosition}
          confidence={setup?.confidence || 72}
          details="Price action relative to MW bands"
        />
        <AnalysisCard 
          title="Volume Confirmation"
          value={analysisData.volumeConfirmation ? 'CONFIRMED' : 'PENDING'}
          confidence={analysisData.volumeConfirmation ? 85 : 45}
          details="Volume supporting price movement"
        />
        <AnalysisCard 
          title="Technical Alignment"
          value={`${analysisData.technicalAlignment}%`}
          confidence={analysisData.technicalAlignment}
          details="Multi-timeframe technical confluence"
        />
        <AnalysisCard 
          title="Market Context"
          value={analysisData.marketContext}
          confidence={78}
          details="Broader market conditions"
        />
      </div>
      
      <Card variant="elevated" className="mw-recommendation-card">
        <div className="recommendation-header">
          <h3>MW Recommendation</h3>
          <Badge 
            variant="solid" 
            color={setup ? 'critical' : 'warning'}
            size="lg"
          >
            {analysisData.recommendation}
          </Badge>
        </div>
        <div className="recommendation-details">
          {setup ? (
            <>
              <p>Strong MW setup identified with {setup.confidence}% confidence.</p>
              <p><strong>Setup Type:</strong> {setup.setupType}</p>
              <p><strong>Entry Strategy:</strong> {setup.timeframe} timeframe confirmation</p>
              <p><strong>Risk Management:</strong> Stop loss at ${setup.stopLoss}, Target at ${setup.target}</p>
            </>
          ) : (
            <>
              <p>No active MW setup currently identified for {symbol}.</p>
              <p><strong>Monitoring:</strong> Watching for MW band interactions and volume confirmation.</p>
              <p><strong>Next Action:</strong> Wait for clear setup formation before entry.</p>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

// Analysis Card Component
const AnalysisCard = ({ title, value, confidence, details }) => (
  <Card variant="default" confidence={confidence} className="analysis-card">
    <div className="analysis-card-header">
      <h4 className="analysis-card-title">{title}</h4>
      <Badge confidence={confidence} variant="confidence" size="sm" />
    </div>
    <div className="analysis-card-value">{value}</div>
    <div className="analysis-card-details">{details}</div>
  </Card>
);

// Coin Intelligence Component
const CoinIntelligence = ({ symbol, gems, posts }) => (
  <div className="coin-intelligence">
    <div className="intelligence-grid">
      {/* MW Livestream Gems */}
      <Card variant="elevated" className="intelligence-card">
        <div className="intelligence-card-header">
          <h3>🎥 MW Livestream Mentions</h3>
          <Badge variant="solid" color="critical" size="sm">
            {gems.length} GEMS
          </Badge>
        </div>
        <div className="intelligence-content">
          {gems.length > 0 ? (
            gems.slice(0, 2).map((gem, index) => (
              <div key={index} className="gem-item">
                <div className="gem-header">
                  <Badge confidence={gem.confidence} variant="confidence" size="xs" />
                  <span className="gem-timestamp">{gem.timestamp}</span>
                </div>
                <div className="gem-quote">"{gem.quote}"</div>
                <div className="gem-context">
                  MW Rating: {gem.mwRating}/10 • {gem.context}
                </div>
              </div>
            ))
          ) : (
            <div className="no-data">No recent MW mentions for {symbol}</div>
          )}
        </div>
      </Card>

      {/* X/Twitter Mentions */}
      <Card variant="elevated" className="intelligence-card">
        <div className="intelligence-card-header">
          <h3>🐦 Social Signals</h3>
          <Badge variant="solid" color="info" size="sm">
            {posts.length} POSTS
          </Badge>
        </div>
        <div className="intelligence-content">
          {posts.length > 0 ? (
            posts.slice(0, 2).map((post, index) => (
              <div key={index} className="post-item">
                <div className="post-header">
                  <span className="post-account">{post.account}</span>
                  <Badge confidence={post.confidence} variant="confidence" size="xs" />
                </div>
                <div className="post-content">{post.content}</div>
                <div className="post-engagement">
                  {post.engagement.likes} likes • {post.engagement.retweets} retweets
                </div>
              </div>
            ))
          ) : (
            <div className="no-data">No recent social mentions for {symbol}</div>
          )}
        </div>
      </Card>
    </div>
  </div>
);

// Action Panel Component
const ActionPanel = ({ symbol, setup }) => (
  <div className="action-panel">
    <div className="action-grid">
      <Card variant="elevated" className="action-card risk-card">
        <h3 className="action-card-title">Risk Calculator</h3>
        <div className="risk-calculator">
          <div className="risk-input-group">
            <label>Account Balance</label>
            <input type="number" defaultValue="50000" className="risk-input" />
          </div>
          <div className="risk-input-group">
            <label>Risk Per Trade (%)</label>
            <input type="number" defaultValue="2" className="risk-input" />
          </div>
          <div className="risk-results">
            <div className="risk-result-item">
              <span>Position Size:</span>
              <span className="risk-value">$1,000</span>
            </div>
            <div className="risk-result-item">
              <span>Liquidation Buffer:</span>
              <span className="risk-value">3.2x</span>
            </div>
          </div>
        </div>
      </Card>

      <Card variant="elevated" className="action-card alerts-card">
        <h3 className="action-card-title">Setup Alerts</h3>
        <div className="alerts-config">
          <div className="alert-toggle">
            <input type="checkbox" id="entry-alert" defaultChecked />
            <label htmlFor="entry-alert">Entry Signal</label>
          </div>
          <div className="alert-toggle">
            <input type="checkbox" id="target-alert" />
            <label htmlFor="target-alert">Target Reached</label>
          </div>
          <div className="alert-toggle">
            <input type="checkbox" id="stop-alert" />
            <label htmlFor="stop-alert">Stop Loss</label>
          </div>
        </div>
        <Button variant="primary" size="sm" fullWidth>
          Set Alerts
        </Button>
      </Card>
    </div>

    <div className="action-buttons">
      <Button variant="success" size="lg">
        🎯 Track Setup
      </Button>
      <Button variant="secondary" size="lg">
        📊 Add to Watchlist  
      </Button>
      <Button variant="outline" size="lg">
        📱 Share Analysis
      </Button>
    </div>
  </div>
);

// Helper function to get coin name
const getCoinName = (symbol) => {
  const coinNames = {
    'SOL': 'Solana',
    'PEPE': 'Pepe',
    'MATIC': 'Polygon',
    'UNI': 'Uniswap',
    'LINK': 'Chainlink',
    'BTC': 'Bitcoin',
    'ETH': 'Ethereum'
  };
  return coinNames[symbol] || symbol;
};

export default CoinAnalysis;