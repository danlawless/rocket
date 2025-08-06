import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  Target,
  Clock,
  DollarSign,
  Activity,
  Zap,
  Eye,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import './TradesTable.css';

const TradesTable = ({ trades }) => {
  const [sortField, setSortField] = useState('confidence');
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [confidenceFilter, setConfidenceFilter] = useState('all');

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredAndSortedTrades = useMemo(() => {
    let filtered = trades;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(trade => 
        trade.token.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.tokenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.setupType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(trade => trade.status === statusFilter);
    }

    // Confidence filter
    if (confidenceFilter !== 'all') {
      const [min, max] = confidenceFilter.split('-').map(Number);
      filtered = filtered.filter(trade => trade.confidence >= min && (max ? trade.confidence < max : true));
    }

    // Sort
    filtered.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      // Handle nested indicator values
      if (sortField.includes('.')) {
        const keys = sortField.split('.');
        aVal = keys.reduce((obj, key) => obj?.[key], a);
        bVal = keys.reduce((obj, key) => obj?.[key], b);
      }

      // Handle numeric values
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      // Handle string values
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      return 0;
    });

    return filtered;
  }, [trades, searchTerm, statusFilter, confidenceFilter, sortField, sortDirection]);

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <ArrowUpDown size={14} className="sort-icon-inactive" />;
    return sortDirection === 'asc' ? 
      <ArrowUp size={14} className="sort-icon-active" /> : 
      <ArrowDown size={14} className="sort-icon-active" />;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle size={16} className="status-icon-active" />;
      case 'mw_priority': return <AlertTriangle size={16} className="status-icon-priority" />;
      case 'triggered': return <Target size={16} className="status-icon-triggered" />;
      case 'approaching': return <Clock size={16} className="status-icon-approaching" />;
      case 'fresh': return <Zap size={16} className="status-icon-fresh" />;
      default: return <Activity size={16} className="status-icon-default" />;
    }
  };

  const formatIndicatorValue = (value, type = 'default') => {
    if (value === null || value === undefined) return '-';
    
    switch (type) {
      case 'currency':
        return typeof value === 'number' ? `$${value.toFixed(value < 1 ? 6 : 2)}` : (value || '-');
      case 'percentage':
        return typeof value === 'number' ? `${value.toFixed(2)}%` : (value || '-');
      case 'decimal':
        return typeof value === 'number' ? value.toFixed(4) : (value || '-');
      case 'correlation':
        return typeof value === 'number' ? (value * 100).toFixed(0) + '%' : (value || '-');
      default:
        return typeof value === 'number' ? value.toFixed(2) : (value || '-');
    }
  };

  const getConfidenceClass = (confidence) => {
    if (confidence >= 95) return 'confidence-critical';
    if (confidence >= 90) return 'confidence-very-high';
    if (confidence >= 85) return 'confidence-high';
    if (confidence >= 75) return 'confidence-medium';
    return 'confidence-low';
  };

  const getBandLevelClass = (bandLevel) => {
    if (bandLevel?.includes('resistance')) return 'band-resistance';
    if (bandLevel?.includes('support')) return 'band-support';
    return 'band-neutral';
  };

  return (
    <div className="trades-table-container">
      {/* Table Controls */}
      <div className="table-controls glass">
        <div className="controls-left">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search tokens, setups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        
        <div className="controls-right">
          <div className="filter-group">
            <Filter size={16} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="mw_priority">MW Priority</option>
              <option value="active">Active</option>
              <option value="triggered">Triggered</option>
              <option value="approaching">Approaching</option>
              <option value="fresh">Fresh</option>
            </select>
          </div>
          
          <div className="filter-group">
            <select
              value={confidenceFilter}
              onChange={(e) => setConfidenceFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Confidence</option>
              <option value="95-100">Critical (95%+)</option>
              <option value="90-95">Very High (90-95%)</option>
              <option value="85-90">High (85-90%)</option>
              <option value="75-85">Medium (75-85%)</option>
              <option value="0-75">Low (&lt;75%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Comprehensive Trading Table */}
      <div className="table-info">
        <span className="table-scroll-hint">
          ← → Core Trading | Entry/Exit | MW Indicators | Market Context
        </span>
      </div>
      <div className="table-wrapper glass">
        <table className="trades-table">
          <thead>
            <tr>
              {/* Core Trading Info */}
              <th className="col-status group-border-right">
                <button onClick={() => handleSort('status')} className="sort-button">
                  Status <SortIcon field="status" />
                </button>
              </th>
              <th className="col-token">
                <button onClick={() => handleSort('token')} className="sort-button">
                  Token <SortIcon field="token" />
                </button>
              </th>
              <th className="col-price">
                <button onClick={() => handleSort('price')} className="sort-button">
                  Price <SortIcon field="price" />
                </button>
              </th>
              <th className="col-setup">
                <button onClick={() => handleSort('setupType')} className="sort-button">
                  Setup Type <SortIcon field="setupType" />
                </button>
              </th>
              <th className="col-confidence">
                <button onClick={() => handleSort('confidence')} className="sort-button">
                  Conf% <SortIcon field="confidence" />
                </button>
              </th>
              <th className="col-timeframe">
                <button onClick={() => handleSort('timeframe')} className="sort-button">
                  TF <SortIcon field="timeframe" />
                </button>
              </th>
              <th className="col-pnl group-border-right">
                <button onClick={() => handleSort('unrealizedPnl')} className="sort-button">
                  P&L <SortIcon field="unrealizedPnl" />
                </button>
              </th>
              
              {/* Entry/Exit Levels */}
              <th className="col-entry">
                <button onClick={() => handleSort('entryPrice')} className="sort-button">
                  Entry <SortIcon field="entryPrice" />
                </button>
              </th>
              <th className="col-target">
                <button onClick={() => handleSort('target1')} className="sort-button">
                  Target <SortIcon field="target1" />
                </button>
              </th>
              <th className="col-stop">
                <button onClick={() => handleSort('stopLoss')} className="sort-button">
                  Stop <SortIcon field="stopLoss" />
                </button>
              </th>
              <th className="col-rr">
                <button onClick={() => handleSort('riskReward')} className="sort-button">
                  R:R <SortIcon field="riskReward" />
                </button>
              </th>
              <th className="col-time group-border-right">
                <button onClick={() => handleSort('timeRemaining')} className="sort-button">
                  Time <SortIcon field="timeRemaining" />
                </button>
              </th>
              
              {/* MW Technical Indicators */}
              <th className="col-mw-band">
                <button onClick={() => handleSort('mwIndicators.mwBandPosition')} className="sort-button">
                  MW Band <SortIcon field="mwIndicators.mwBandPosition" />
                </button>
              </th>
              <th className="col-ema34">
                <button onClick={() => handleSort('mwIndicators.ema34')} className="sort-button">
                  EMA34 <SortIcon field="mwIndicators.ema34" />
                </button>
              </th>
              <th className="col-sma21">
                <button onClick={() => handleSort('mwIndicators.sma21')} className="sort-button">
                  SMA21 <SortIcon field="mwIndicators.sma21" />
                </button>
              </th>
              <th className="col-mfi">
                <button onClick={() => handleSort('mwIndicators.mfi')} className="sort-button">
                  MFI <SortIcon field="mwIndicators.mfi" />
                </button>
              </th>
              <th className="col-adx">
                <button onClick={() => handleSort('mwIndicators.adx')} className="sort-button">
                  ADX <SortIcon field="mwIndicators.adx" />
                </button>
              </th>
              <th className="col-di">
                DI +/-
              </th>
              <th className="col-volume group-border-right">
                <button onClick={() => handleSort('mwIndicators.volume24h')} className="sort-button">
                  Volume <SortIcon field="mwIndicators.volume24h" />
                </button>
              </th>
              
              {/* Market Context */}
              <th className="col-korean">
                <button onClick={() => handleSort('mwIndicators.koreanInfluence')} className="sort-button">
                  Korean <SortIcon field="mwIndicators.koreanInfluence" />
                </button>
              </th>
              <th className="col-btc-corr">
                <button onClick={() => handleSort('mwIndicators.btcCorrelation')} className="sort-button">
                  BTC% <SortIcon field="mwIndicators.btcCorrelation" />
                </button>
              </th>
              <th className="col-funding">
                <button onClick={() => handleSort('mwIndicators.funding')} className="sort-button">
                  Fund% <SortIcon field="mwIndicators.funding" />
                </button>
              </th>
              <th className="col-social">
                <button onClick={() => handleSort('mwIndicators.socialSentiment')} className="sort-button">
                  Social <SortIcon field="mwIndicators.socialSentiment" />
                </button>
              </th>
              <th className="col-whale">
                <button onClick={() => handleSort('mwIndicators.whaleActivity')} className="sort-button">
                  Whale <SortIcon field="mwIndicators.whaleActivity" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedTrades.map((trade, index) => (
              <motion.tr
                key={trade.id}
                className={`trade-row ${getConfidenceClass(trade.confidence)} status-${trade.status}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                {/* Core Trading Info */}
                <td className="col-status group-border-right">
                  <div className="status-cell">
                    {getStatusIcon(trade.status)}
                    <span className={`status-text status-${trade.status}`}>
                      {trade.status === 'mw_priority' ? 'PRIORITY' : trade.status.toUpperCase()}
                    </span>
                  </div>
                </td>
                
                <td className="col-token">
                  <div className="token-cell">
                    <div className="token-icon">
                      <img 
                        src={`https://cryptologos.cc/logos/${trade.token.toLowerCase()}-${trade.token.toLowerCase()}-logo.png`}
                        alt={trade.token}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="token-fallback" style={{ display: 'none' }}>
                        {trade.token}
                      </div>
                    </div>
                    <div className="token-info">
                      <span className="token-symbol">{trade.token}</span>
                      <span className="token-name">{trade.tokenName}</span>
                    </div>
                  </div>
                </td>
                
                <td className="col-price">
                  <span className="price-value">
                    {formatIndicatorValue(trade.price, 'currency')}
                  </span>
                </td>
                
                <td className="col-setup">
                  <span className="setup-type">{trade.setupType}</span>
                </td>
                
                <td className="col-confidence">
                  <div className={`confidence-cell ${getConfidenceClass(trade.confidence)}`}>
                    <span className="confidence-value">{trade.confidence}%</span>
                  </div>
                </td>
                
                <td className="col-timeframe">
                  <span className="timeframe-badge">{trade.timeframe}</span>
                </td>
                
                <td className="col-pnl group-border-right">
                  <span className={`pnl-value ${trade.unrealizedPnl >= 0 ? 'positive' : 'negative'}`}>
                    {trade.unrealizedPnl >= 0 ? '+' : ''}{trade.unrealizedPnl}%
                  </span>
                </td>
                
                {/* Entry/Exit Levels */}
                <td className="col-entry">
                  <span className="price-entry">
                    {formatIndicatorValue(trade.entryPrice, 'currency')}
                  </span>
                </td>
                
                <td className="col-target">
                  <span className="price-target">
                    {formatIndicatorValue(trade.target1, 'currency')}
                  </span>
                </td>
                
                <td className="col-stop">
                  <span className="price-stop">
                    {formatIndicatorValue(trade.stopLoss, 'currency')}
                  </span>
                </td>
                
                <td className="col-rr">
                  <span className="rr-value">{trade.riskReward}:1</span>
                </td>
                
                <td className="col-time group-border-right">
                  <span className="time-remaining">{trade.timeRemaining}</span>
                </td>
                
                {/* MW Technical Indicators */}
                <td className="col-mw-band">
                  <span className={`band-position ${getBandLevelClass(trade.mwIndicators?.bandLevel)}`}>
                    {trade.mwIndicators?.mwBandPosition || '-'}
                  </span>
                </td>
                
                <td className="col-ema34">
                  <span className="indicator-value">
                    {formatIndicatorValue(trade.mwIndicators?.ema34, 'currency')}
                  </span>
                </td>
                
                <td className="col-sma21">
                  <span className="indicator-value">
                    {formatIndicatorValue(trade.mwIndicators?.sma21, 'currency')}
                  </span>
                </td>
                
                <td className="col-mfi">
                  <span className={`mfi-value ${(trade.mwIndicators?.mfi || 0) > 80 ? 'overbought' : (trade.mwIndicators?.mfi || 0) < 20 ? 'oversold' : 'neutral'}`}>
                    {formatIndicatorValue(trade.mwIndicators?.mfi)}
                  </span>
                </td>
                
                <td className="col-adx">
                  <span className={`adx-value ${(trade.mwIndicators?.adx || 0) > 50 ? 'strong-trend' : (trade.mwIndicators?.adx || 0) > 25 ? 'trend' : 'weak'}`}>
                    {formatIndicatorValue(trade.mwIndicators?.adx)}
                  </span>
                </td>
                
                <td className="col-di">
                  <div className="di-values">
                    <span className="di-plus">{formatIndicatorValue(trade.mwIndicators?.diPlus)}</span>
                    <span className="di-minus">{formatIndicatorValue(trade.mwIndicators?.diMinus)}</span>
                  </div>
                </td>
                
                <td className="col-volume group-border-right">
                  <span className={`volume-value ${trade.mwIndicators?.volumeProfile === 'explosive' ? 'explosive' : trade.mwIndicators?.volumeProfile === 'above_average' ? 'high' : 'normal'}`}>
                    {trade.mwIndicators?.volume24h || '-'}
                  </span>
                </td>
                
                {/* Market Context */}
                <td className="col-korean">
                  <span className={`korean-influence korean-${(trade.mwIndicators?.koreanInfluence || 'low').replace('_', '-')}`}>
                    {(trade.mwIndicators?.koreanInfluence || 'LOW').replace('_', ' ').toUpperCase()}
                  </span>
                </td>
                
                <td className="col-btc-corr">
                  <span className={`btc-correlation ${(trade.mwIndicators?.btcCorrelation || 0) > 0.8 ? 'high-corr' : (trade.mwIndicators?.btcCorrelation || 0) < 0.3 ? 'low-corr' : 'medium-corr'}`}>
                    {formatIndicatorValue(trade.mwIndicators?.btcCorrelation, 'correlation')}
                  </span>
                </td>
                
                <td className="col-funding">
                  <span className={`funding-value ${(trade.mwIndicators?.funding || 0) > 0.05 ? 'very-positive' : (trade.mwIndicators?.funding || 0) > 0 ? 'positive' : 'negative'}`}>
                    {formatIndicatorValue(trade.mwIndicators?.funding, 'percentage')}
                  </span>
                </td>
                
                <td className="col-social">
                  <span className={`social-sentiment ${(trade.mwIndicators?.socialSentiment || 0) > 90 ? 'very-bullish' : (trade.mwIndicators?.socialSentiment || 0) > 70 ? 'bullish' : 'neutral'}`}>
                    {formatIndicatorValue(trade.mwIndicators?.socialSentiment)}
                  </span>
                </td>
                
                <td className="col-whale">
                  <span className={`whale-activity whale-${(trade.mwIndicators?.whaleActivity || 'neutral').replace('_', '-')}`}>
                    {(trade.mwIndicators?.whaleActivity || 'NEUTRAL').replace('_', ' ').toUpperCase()}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Summary */}
      <div className="table-summary glass">
        <div className="summary-stats">
          <div className="summary-item">
            <span className="summary-label">Total Setups:</span>
            <span className="summary-value">{filteredAndSortedTrades.length}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Avg Confidence:</span>
            <span className="summary-value">
              {filteredAndSortedTrades.length > 0 
                ? Math.round(filteredAndSortedTrades.reduce((acc, trade) => acc + trade.confidence, 0) / filteredAndSortedTrades.length)
                : 0}%
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Total Unrealized P&L:</span>
            <span className={`summary-value ${filteredAndSortedTrades.reduce((acc, trade) => acc + (trade.unrealizedPnl || 0), 0) >= 0 ? 'positive' : 'negative'}`}>
              {filteredAndSortedTrades.reduce((acc, trade) => acc + (trade.unrealizedPnl || 0), 0).toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradesTable;