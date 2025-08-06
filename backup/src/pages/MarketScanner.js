import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { tradingSetups, tokenUniverse } from '../data/dummyData';

/**
 * MW Market Scanner Page
 * 
 * Real-time market scanning for MW-style opportunities
 * Features:
 * - Live token scanning across all tiers
 * - MW setup detection and filtering
 * - Confidence-based sorting and filtering
 * - Quick setup analysis and drill-down
 * 
 * TradingView Integration Point:
 * - Scanner Overview Chart: tv-scanner-overview
 */

const MarketScanner = () => {
  const [scanMode, setScanMode] = React.useState('mw_style');
  const [minConfidence, setMinConfidence] = React.useState(70);
  
  // Filter setups based on current criteria
  const filteredSetups = tradingSetups
    .filter(setup => setup.confidence >= minConfidence)
    .sort((a, b) => b.confidence - a.confidence);

  return (
    <div className="market-scanner">
      <div className="scanner-container">
        {/* Scan Control Bar */}
        <ScanControlBar 
          scanMode={scanMode}
          setScanMode={setScanMode}
          minConfidence={minConfidence}
          setMinConfidence={setMinConfidence}
        />
        
        {/* Scanner Stats */}
        <ScannerStats 
          totalScanned={127}
          setupsFound={filteredSetups.length}
          lastUpdate="2s ago"
        />
        
        {/* Filter Panel */}
        <FilterPanel />
        
        {/* Results Grid */}
        <ScanResultsGrid setups={filteredSetups} />
        
        {/* TradingView Scanner Overview */}
        <Card variant="elevated" className="scanner-chart-container">
          <div className="chart-header">
            <h3>Market Overview</h3>
            <Badge variant="solid" color="success" size="sm">LIVE</Badge>
          </div>
          <div 
            id="tv-scanner-overview"
            className="tradingview-chart"
            style={{ height: '300px', width: '100%' }}
          >
            {/* TradingView Scanner Chart will be embedded here */}
            <div className="chart-placeholder">
              <div className="chart-placeholder-content">
                <span className="chart-placeholder-icon">📊</span>
                <span className="chart-placeholder-text">Market Scanner Overview</span>
                <span className="chart-placeholder-subtitle">TradingView integration point</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Scan Control Bar Component
const ScanControlBar = ({ scanMode, setScanMode, minConfidence, setMinConfidence }) => (
  <Card variant="elevated" className="scan-control-bar">
    <div className="scan-controls-left">
      <Button 
        variant={scanMode === 'live' ? 'success' : 'secondary'}
        size="sm"
        leftIcon="🔄"
      >
        Live Scan
      </Button>
      <div className="scan-stats">
        <span className="tokens-scanned">Scanning: 127 tokens</span>
        <span className="last-update">Updated: 2s ago</span>
      </div>
    </div>
    
    <div className="scan-controls-right">
      <select 
        value={scanMode} 
        onChange={(e) => setScanMode(e.target.value)}
        className="mode-selector"
      >
        <option value="mw_style">MW Style</option>
        <option value="high_confidence">High Confidence</option>
        <option value="korean_focus">Korean Focus</option>
        <option value="all">All Setups</option>
      </select>
      
      <div className="confidence-filter">
        <label>Min Confidence: {minConfidence}%</label>
        <input
          type="range"
          min="50"
          max="100"
          value={minConfidence}
          onChange={(e) => setMinConfidence(Number(e.target.value))}
        />
      </div>
    </div>
  </Card>
);

// Scanner Stats Component
const ScannerStats = ({ totalScanned, setupsFound, lastUpdate }) => (
  <div className="scanner-stats-grid">
    <Card variant="default" className="stat-card">
      <div className="stat-value">{totalScanned}</div>
      <div className="stat-label">Tokens Scanned</div>
    </Card>
    <Card variant="default" className="stat-card">
      <div className="stat-value">{setupsFound}</div>
      <div className="stat-label">Setups Found</div>
    </Card>
    <Card variant="default" className="stat-card">
      <div className="stat-value">{lastUpdate}</div>
      <div className="stat-label">Last Update</div>
    </Card>
  </div>
);

// Filter Panel Component
const FilterPanel = () => (
  <Card variant="elevated" className="filter-panel">
    <h3>Filters</h3>
    <div className="filter-grid">
      <div className="filter-group">
        <label>Setup Types</label>
        <div className="filter-checkboxes">
          <label><input type="checkbox" defaultChecked /> MW Band Bounce</label>
          <label><input type="checkbox" defaultChecked /> Korean Pump</label>
          <label><input type="checkbox" defaultChecked /> Chase Short</label>
          <label><input type="checkbox" defaultChecked /> Confirmation</label>
        </div>
      </div>
      
      <div className="filter-group">
        <label>Timeframes</label>
        <div className="filter-checkboxes">
          <label><input type="checkbox" defaultChecked /> 15M</label>
          <label><input type="checkbox" defaultChecked /> 1H</label>
          <label><input type="checkbox" defaultChecked /> 4H</label>
        </div>
      </div>
      
      <div className="filter-group">
        <label>Sources</label>
        <div className="filter-checkboxes">
          <label><input type="checkbox" defaultChecked /> 📊 Market</label>
          <label><input type="checkbox" defaultChecked /> 🎥 Livestream</label>
          <label><input type="checkbox" defaultChecked /> 🐦 X Posts</label>
        </div>
      </div>
    </div>
  </Card>
);

// Scan Results Grid Component
const ScanResultsGrid = ({ setups }) => (
  <div className="scan-results">
    <div className="results-header">
      <h3>Scan Results ({setups.length})</h3>
      <div className="results-sort">
        <select className="sort-selector">
          <option>Sort by Confidence</option>
          <option>Sort by Time</option>
          <option>Sort by P&L</option>
        </select>
      </div>
    </div>
    
    <div className="results-grid">
      {setups.map((setup) => (
        <ScanResultCard key={setup.id} setup={setup} />
      ))}
    </div>
  </div>
);

// Individual Scan Result Card
const ScanResultCard = ({ setup }) => (
  <Card 
    variant="elevated" 
    confidence={setup.confidence}
    className="scan-result-card"
    onClick={() => {/* Navigate to coin analysis */}}
  >
    <div className="result-header">
      <div className="token-info">
        <span className="token-symbol">{setup.token}</span>
        <Badge variant="solid" color="info" size="xs">{setup.timeframe}</Badge>
      </div>
      <Badge confidence={setup.confidence} variant="confidence" />
    </div>
    
    <div className="result-body">
      <div className="setup-type">{setup.setupType}</div>
      <div className="setup-price">${setup.currentPrice}</div>
      {setup.unrealizedPnl !== 0 && (
        <Badge 
          variant="solid" 
          color={setup.unrealizedPnl > 0 ? 'success' : 'danger'}
          size="sm"
        >
          {setup.unrealizedPnl > 0 ? '+' : ''}{setup.unrealizedPnl}%
        </Badge>
      )}
    </div>
    
    <div className="result-footer">
      <Badge variant="status" color="success" size="xs">
        {setup.status.toUpperCase()}
      </Badge>
      <div className="setup-sources">
        {setup.source.map((source, index) => (
          <span key={index} className={`source-icon source-${source}`}>
            {source === 'livestream' ? '🎥' : source === 'x' ? '🐦' : '📊'}
          </span>
        ))}
      </div>
    </div>
  </Card>
);

export default MarketScanner;