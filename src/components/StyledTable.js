import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp, ArrowDown, ArrowUpDown, Search, Filter, 
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, 
  Zap, Target, Clock, DollarSign
} from 'lucide-react';
import './StyledTable.css';

const StyledTable = ({ trades }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [confidenceFilter, setConfidenceFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const formatValue = (value, type = 'default') => {
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle size={14} className="status-icon status-active" />;
      case 'mw_priority': return <AlertTriangle size={14} className="status-icon status-priority" />;
      case 'approaching': return <Clock size={14} className="status-icon status-approaching" />;
      case 'triggered': return <Target size={14} className="status-icon status-triggered" />;
      case 'fresh': return <Zap size={14} className="status-icon status-fresh" />;
      default: return <div className="status-dot status-default" />;
    }
  };

  const getDirectionIcon = (direction) => {
    return direction === 'Long' ? 
      <TrendingUp size={14} className="direction-icon direction-long" /> : 
      <TrendingDown size={14} className="direction-icon direction-short" />;
  };

  const getConfidenceClass = (confidence) => {
    if (confidence >= 95) return 'confidence-exceptional';
    if (confidence >= 90) return 'confidence-high';
    if (confidence >= 80) return 'confidence-good';
    return 'confidence-moderate';
  };

  const getBandLevelClass = (bandPosition) => {
    if (!bandPosition) return '';
    if (bandPosition.includes('+')) return 'band-resistance';
    if (bandPosition.includes('-')) return 'band-support';
    return 'band-neutral';
  };

  // Filtering and sorting logic
  const filteredAndSortedTrades = useMemo(() => {
    let filtered = trades.filter(trade => {
      const matchesSearch = trade.token.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trade.tokenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trade.setupType.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || trade.status === statusFilter;
      const matchesConfidence = confidenceFilter === 'all' || 
                               (confidenceFilter === 'high' && trade.confidence >= 90) ||
                               (confidenceFilter === 'medium' && trade.confidence >= 80 && trade.confidence < 90) ||
                               (confidenceFilter === 'low' && trade.confidence < 80);
      
      return matchesSearch && matchesStatus && matchesConfidence;
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue = sortConfig.key.includes('.') ? 
          sortConfig.key.split('.').reduce((obj, key) => obj?.[key], a) : a[sortConfig.key];
        let bValue = sortConfig.key.includes('.') ? 
          sortConfig.key.split('.').reduce((obj, key) => obj?.[key], b) : b[sortConfig.key];
        
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [trades, searchTerm, statusFilter, confidenceFilter, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'ascending' ? 'descending' : 'ascending'
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <ArrowUpDown size={12} className="sort-icon" />;
    return sortConfig.direction === 'ascending' ? 
      <ArrowUp size={12} className="sort-icon active" /> : 
      <ArrowDown size={12} className="sort-icon active" />;
  };

  return (
    <div className="styled-table-container">
      {/* Table Controls */}
      <div className="table-controls glass">
        <div className="search-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search tokens, setups..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <Filter size={14} />
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="mw_priority">MW Priority</option>
              <option value="approaching">Approaching</option>
              <option value="triggered">Triggered</option>
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
              <option value="high">High (90%+)</option>
              <option value="medium">Medium (80-89%)</option>
              <option value="low">Low (&lt;80%)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Info */}
      <div className="table-info">
        <span className="table-scroll-hint">
          ← → Performance | Entry/Exit | MW Technicals | Market Context
        </span>
        <span className="table-count">
          {filteredAndSortedTrades.length} setups
        </span>
      </div>

      {/* Main Table */}
      <div className="styled-table-wrapper glass">
        <table className="styled-table">
          <thead>
            <tr>
              {/* Performance Group */}
              <th className="group-header performance-group" colSpan="8">
                <div className="group-title">
                  <DollarSign size={16} />
                  Performance & Status
                </div>
              </th>
              {/* Entry/Exit Group */}
              <th className="group-header entry-group" colSpan="5">
                <div className="group-title">
                  <Target size={16} />
                  Entry & Exit Levels
                </div>
              </th>
              {/* MW Technicals Group */}
              <th className="group-header technicals-group" colSpan="8">
                <div className="group-title">
                  <Zap size={16} />
                  MW Technical Indicators
                </div>
              </th>
              {/* Market Context Group */}
              <th className="group-header context-group" colSpan="5">
                <div className="group-title">
                  <TrendingUp size={16} />
                  Market Context
                </div>
              </th>
            </tr>
            <tr className="column-headers">
              {/* Performance Group Columns */}
              <th className="sortable" onClick={() => handleSort('status')}>
                Status {getSortIcon('status')}
              </th>
              <th className="sortable" onClick={() => handleSort('token')}>
                Token {getSortIcon('token')}
              </th>
              <th className="sortable" onClick={() => handleSort('price')}>
                Price {getSortIcon('price')}
              </th>
              <th className="sortable" onClick={() => handleSort('setupType')}>
                Setup {getSortIcon('setupType')}
              </th>
              <th className="sortable" onClick={() => handleSort('direction')}>
                Direction {getSortIcon('direction')}
              </th>
              <th className="sortable" onClick={() => handleSort('confidence')}>
                Conf% {getSortIcon('confidence')}
              </th>
              <th className="sortable" onClick={() => handleSort('timeframe')}>
                TF {getSortIcon('timeframe')}
              </th>
              <th className="sortable group-border-right" onClick={() => handleSort('unrealizedPnl')}>
                P&L% {getSortIcon('unrealizedPnl')}
              </th>
              
              {/* Entry/Exit Group Columns */}
              <th className="sortable" onClick={() => handleSort('entryPrice')}>
                Entry {getSortIcon('entryPrice')}
              </th>
              <th className="sortable" onClick={() => handleSort('target1')}>
                Target {getSortIcon('target1')}
              </th>
              <th className="sortable" onClick={() => handleSort('stopLoss')}>
                Stop {getSortIcon('stopLoss')}
              </th>
              <th className="sortable" onClick={() => handleSort('riskReward')}>
                R:R {getSortIcon('riskReward')}
              </th>
              <th className="sortable group-border-right" onClick={() => handleSort('timeRemaining')}>
                Time {getSortIcon('timeRemaining')}
              </th>
              
              {/* MW Technicals Group Columns */}
              <th className="sortable" onClick={() => handleSort('mwIndicators.mwBandPosition')}>
                MW Band {getSortIcon('mwIndicators.mwBandPosition')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.ema34')}>
                EMA34 {getSortIcon('mwIndicators.ema34')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.sma21')}>
                SMA21 {getSortIcon('mwIndicators.sma21')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.ema200')}>
                EMA200 {getSortIcon('mwIndicators.ema200')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.mfi')}>
                MFI {getSortIcon('mwIndicators.mfi')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.adx')}>
                ADX {getSortIcon('mwIndicators.adx')}
              </th>
              <th>DI+/-</th>
              <th className="sortable group-border-right" onClick={() => handleSort('mwIndicators.volume24h')}>
                Volume {getSortIcon('mwIndicators.volume24h')}
              </th>
              
              {/* Market Context Group Columns */}
              <th className="sortable" onClick={() => handleSort('mwIndicators.koreanInfluence')}>
                Korean {getSortIcon('mwIndicators.koreanInfluence')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.btcCorrelation')}>
                BTC% {getSortIcon('mwIndicators.btcCorrelation')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.funding')}>
                Fund% {getSortIcon('mwIndicators.funding')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.socialSentiment')}>
                Social {getSortIcon('mwIndicators.socialSentiment')}
              </th>
              <th className="sortable" onClick={() => handleSort('mwIndicators.whaleActivity')}>
                Whale {getSortIcon('mwIndicators.whaleActivity')}
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
                {/* Performance Group Data */}
                <td>
                  <div className="status-cell">
                    {getStatusIcon(trade.status)}
                    <span className="status-text">{trade.status.replace('_', ' ').toUpperCase()}</span>
                  </div>
                </td>
                <td>
                  <div className="token-cell">
                    <span className="token-symbol">{trade.token}</span>
                    <span className="token-name">{trade.tokenName}</span>
                  </div>
                </td>
                <td className="price-cell">{formatValue(trade.price, 'currency')}</td>
                <td className="setup-cell">{trade.setupType}</td>
                <td>
                  <div className={`direction-cell direction-${trade.direction.toLowerCase()}`}>
                    {getDirectionIcon(trade.direction)}
                    <span>{trade.direction}</span>
                  </div>
                </td>
                <td>
                  <div className={`confidence-cell ${getConfidenceClass(trade.confidence)}`}>
                    <span className="confidence-value">{trade.confidence}</span>
                    <span className="confidence-percent">%</span>
                  </div>
                </td>
                <td>
                  <div className="timeframe-badge">{trade.timeframe}</div>
                </td>
                <td className="group-border-right">
                  <div className={`pnl-cell ${trade.unrealizedPnl >= 0 ? 'pnl-positive' : 'pnl-negative'}`}>
                    {trade.unrealizedPnl >= 0 ? '+' : ''}{formatValue(trade.unrealizedPnl, 'percentage')}
                  </div>
                </td>
                
                {/* Entry/Exit Group Data */}
                <td className="entry-cell">{formatValue(trade.entryPrice, 'currency')}</td>
                <td className="target-cell">{formatValue(trade.target1, 'currency')}</td>
                <td className="stop-cell">{formatValue(trade.stopLoss, 'currency')}</td>
                <td className="rr-cell">{trade.riskReward}:1</td>
                <td className="group-border-right">
                  <div className="time-remaining">{trade.timeRemaining}</div>
                </td>
                
                {/* MW Technicals Group Data */}
                <td>
                  <div className={`band-position ${getBandLevelClass(trade.mwIndicators?.mwBandPosition)}`}>
                    {trade.mwIndicators?.mwBandPosition || '-'}
                  </div>
                </td>
                <td className="ema-cell">{formatValue(trade.mwIndicators?.ema34, 'currency')}</td>
                <td className="sma-cell">{formatValue(trade.mwIndicators?.sma21, 'currency')}</td>
                <td className="ema-cell">{formatValue(trade.mwIndicators?.ema200, 'currency')}</td>
                <td>
                  <div className={`mfi-value ${trade.mwIndicators?.mfi > 70 ? 'mfi-overbought' : trade.mwIndicators?.mfi < 30 ? 'mfi-oversold' : ''}`}>
                    {formatValue(trade.mwIndicators?.mfi)}
                  </div>
                </td>
                <td>
                  <div className={`adx-value ${trade.mwIndicators?.adx > 40 ? 'adx-strong' : trade.mwIndicators?.adx > 25 ? 'adx-moderate' : 'adx-weak'}`}>
                    {formatValue(trade.mwIndicators?.adx)}
                  </div>
                </td>
                <td className="di-cell">
                  <div className="di-values">
                    <span className="di-plus">{formatValue(trade.mwIndicators?.diPlus)}</span>
                    <span className="di-separator">/</span>
                    <span className="di-minus">{formatValue(trade.mwIndicators?.diMinus)}</span>
                  </div>
                </td>
                <td className="group-border-right volume-cell">{trade.mwIndicators?.volume24h || '-'}</td>
                
                {/* Market Context Group Data */}
                <td>
                  <div className={`korean-influence ${trade.mwIndicators?.koreanInfluence || 'low'}`}>
                    {(trade.mwIndicators?.koreanInfluence || 'LOW').replace('_', ' ').toUpperCase()}
                  </div>
                </td>
                <td>
                  <div className={`btc-correlation ${trade.mwIndicators?.btcCorrelation > 0.7 ? 'correlation-high' : trade.mwIndicators?.btcCorrelation > 0.3 ? 'correlation-medium' : 'correlation-low'}`}>
                    {formatValue(trade.mwIndicators?.btcCorrelation, 'correlation')}
                  </div>
                </td>
                <td>
                  <div className={`funding-value ${trade.mwIndicators?.funding > 0 ? 'funding-positive' : 'funding-negative'}`}>
                    {formatValue(trade.mwIndicators?.funding, 'percentage')}
                  </div>
                </td>
                <td>
                  <div className={`social-sentiment ${trade.mwIndicators?.socialSentiment > 70 ? 'sentiment-bullish' : trade.mwIndicators?.socialSentiment < 30 ? 'sentiment-bearish' : 'sentiment-neutral'}`}>
                    {formatValue(trade.mwIndicators?.socialSentiment)}
                  </div>
                </td>
                <td>
                  <div className={`whale-activity ${trade.mwIndicators?.whaleActivity || 'neutral'}`}>
                    {(trade.mwIndicators?.whaleActivity || 'NEUTRAL').replace('_', ' ').toUpperCase()}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Summary */}
      <div className="table-summary glass">
        <div className="summary-stats">
          <div className="stat-item">
            <span className="stat-label">Total Setups</span>
            <span className="stat-value">{filteredAndSortedTrades.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Active</span>
            <span className="stat-value active">{filteredAndSortedTrades.filter(t => t.status === 'active').length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">High Confidence</span>
            <span className="stat-value high">{filteredAndSortedTrades.filter(t => t.confidence >= 90).length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Avg P&L</span>
            <span className="stat-value">
              {formatValue(filteredAndSortedTrades.reduce((acc, t) => acc + (t.unrealizedPnl || 0), 0) / filteredAndSortedTrades.length, 'percentage')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledTable;