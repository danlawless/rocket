// ====================================
// MW TRADING COMMAND CENTER - DUMMY DATA
// ====================================

// Market Status Data
export const marketStatus = {
  btc: {
    price: 67234.56,
    change: 2.34,
    changePercent: 2.34,
    trend: 'up',
    mwBandPosition: 'Above +10% Band',
    volume24h: '23.4B',
    dominance: 54.2,
    fearGreedIndex: 76
  },
  us500: {
    price: 4156.23,
    change: 33.45,
    changePercent: 0.81,
    trend: 'up',
    correlation: 0.85, // Correlation with BTC
    session: 'US_OPEN',
    volatility: 'low'
  },
  koreanSession: {
    status: 'active', // active, inactive, pre-market
    influence: 'high', // low, medium, high
    activeCoins: ['OM', 'KLAY', 'CHZ', 'QTUM', 'ICX'],
    pumpCoins: ['PEPE', 'WIF', 'BONK'],
    volumeIncrease: 147.5 // %
  },
  marketRegime: {
    current: 'RISK_ON', // RISK_ON, RISK_OFF, NEUTRAL, TRANSITION
    strength: 8.5, // 0-10 scale
    trend: 'strengthening', // strengthening, weakening, stable
    duration: '3 days',
    nextChange: 'unlikely' // unlikely, possible, likely
  }
};

// Active Trading Setups
export const tradingSetups = [
  {
    id: 'setup_001',
    token: 'SOL',
    tokenName: 'Solana',
    setupType: 'MW Band Bounce',
    timeframe: '1H',
    confidence: 95,
    confidenceLevel: 'critical', // critical, high, medium, low
    status: 'active', // active, approaching, past_due, expired
    entryPrice: 145.67,
    currentPrice: 148.23,
    target: 162.40,
    stopLoss: 138.20,
    riskReward: 2.3,
    source: ['market', 'livestream', 'x'], // market, livestream, x, ai
    timeRemaining: '4h 23m',
    timeCreated: '2024-01-15T10:30:00Z',
    lastUpdate: '2024-01-15T14:53:00Z',
    mwQuote: 'SOL looking absolutely incredible right now above the MW +15% band',
    unrealizedPnl: +1.76, // %
    volumeConfirmation: true,
    technicalAlignment: 94,
    marketContext: 'BTC bullish, Korean session active',
    alerts: {
      entry: true,
      target25: false,
      target50: false,
      target75: false,
      stopLoss: false
    }
  },
  {
    id: 'setup_002',
    token: 'PEPE',
    tokenName: 'Pepe',
    setupType: 'Korean Pump',
    timeframe: '4H',
    confidence: 92,
    confidenceLevel: 'critical',
    status: 'mw_call', // Special status for MW direct calls
    entryPrice: 0.000012,
    currentPrice: 0.000014,
    target: 0.000018,
    stopLoss: 0.000009,
    riskReward: 2.0,
    source: ['livestream', 'x'],
    timeRemaining: '2h 15m',
    timeCreated: '2024-01-15T08:15:00Z',
    lastUpdate: '2024-01-15T14:45:00Z',
    mwQuote: 'PEPE is absolutely flying - Korean session is pumping this hard',
    unrealizedPnl: +16.67,
    volumeConfirmation: true,
    technicalAlignment: 89,
    marketContext: 'Korean pump active, meme season',
    alerts: {
      entry: true,
      target25: true,
      target50: false,
      target75: false,
      stopLoss: false
    }
  },
  {
    id: 'setup_003',
    token: 'MATIC',
    tokenName: 'Polygon',
    setupType: 'Chase Short',
    timeframe: '4H',
    confidence: 89,
    confidenceLevel: 'high',
    status: 'approaching',
    entryPrice: 0.89,
    currentPrice: 0.91,
    target: 0.76,
    stopLoss: 0.95,
    riskReward: 2.1,
    source: ['market'],
    timeRemaining: '6h 45m',
    timeCreated: '2024-01-15T12:00:00Z',
    lastUpdate: '2024-01-15T14:50:00Z',
    mwQuote: null,
    unrealizedPnl: 0,
    volumeConfirmation: false,
    technicalAlignment: 86,
    marketContext: 'Overextended, awaiting rejection',
    alerts: {
      entry: false,
      target25: false,
      target50: false,
      target75: false,
      stopLoss: false
    }
  },
  {
    id: 'setup_004',
    token: 'UNI',
    tokenName: 'Uniswap',
    setupType: 'X Override',
    timeframe: '15M',
    confidence: 85,
    confidenceLevel: 'high',
    status: 'fresh', // New from social signals
    entryPrice: 7.23,
    currentPrice: 7.31,
    target: 8.15,
    stopLoss: 6.95,
    riskReward: 3.2,
    source: ['x', 'market'],
    timeRemaining: '1h 12m',
    timeCreated: '2024-01-15T14:30:00Z',
    lastUpdate: '2024-01-15T14:55:00Z',
    mwQuote: 'UNI looking strong above MW +5% band - Korean session might push this',
    unrealizedPnl: +1.11,
    volumeConfirmation: true,
    technicalAlignment: 82,
    marketContext: 'Social momentum + technical alignment',
    alerts: {
      entry: true,
      target25: false,
      target50: false,
      target75: false,
      stopLoss: false
    }
  },
  {
    id: 'setup_005',
    token: 'LINK',
    tokenName: 'Chainlink',
    setupType: 'Confirmation Trade',
    timeframe: '1H',
    confidence: 78,
    confidenceLevel: 'medium',
    status: 'past_due',
    entryPrice: 15.45,
    currentPrice: 14.89,
    target: 17.20,
    stopLoss: 14.20,
    riskReward: 1.4,
    source: ['market'],
    timeRemaining: 'expired',
    timeCreated: '2024-01-15T09:00:00Z',
    lastUpdate: '2024-01-15T14:00:00Z',
    mwQuote: null,
    unrealizedPnl: -3.63,
    volumeConfirmation: false,
    technicalAlignment: 71,
    marketContext: 'Lost momentum, consider exit',
    alerts: {
      entry: true,
      target25: false,
      target50: false,
      target75: false,
      stopLoss: false
    }
  }
];

// Intelligence Feed Data
export const intelligenceData = {
  livestream: {
    today: {
      id: 'stream_20240115',
      title: 'Altcoins PUMPING - MW Indicator Ruling!',
      youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '2h 15m',
      status: 'processed', // pending, analyzing, processed, failed
      gemsFound: 5,
      timestamp: '2024-01-15T12:00:00Z',
      processingProgress: 100,
      thumbnail: '/thumbnails/stream_20240115.jpg'
    },
    gems: [
      {
        id: 'gem_001',
        token: 'PEPE',
        tokenName: 'Pepe',
        quote: 'PEPE is looking absolutely incredible right now guys - this Korean session is going to send it',
        timestamp: '1:23:45',
        confidence: 88,
        currentPrice: 0.000014,
        priceChange: +15.6,
        sentiment: 0.92, // -1 to 1
        actionable: true,
        mwRating: 9.2, // 1-10 MW excitement level
        context: 'Korean session discussion'
      },
      {
        id: 'gem_002',
        token: 'SOL',
        tokenName: 'Solana',
        quote: 'SOL above the MW +15% band - this is textbook perfect setup guys',
        timestamp: '45:12',
        confidence: 94,
        currentPrice: 148.23,
        priceChange: +2.34,
        sentiment: 0.89,
        actionable: true,
        mwRating: 9.5,
        context: 'Technical analysis explanation'
      },
      {
        id: 'gem_003',
        token: 'WIF',
        tokenName: 'dogwifhat',
        quote: 'WIF is one of those coins that when it moves, it really moves',
        timestamp: '1:58:30',
        confidence: 76,
        currentPrice: 2.89,
        priceChange: +8.45,
        sentiment: 0.72,
        actionable: false,
        mwRating: 7.8,
        context: 'General market commentary'
      },
      {
        id: 'gem_004',
        token: 'OM',
        tokenName: 'MANTRA',
        quote: 'OM dumping as predicted - told you guys this was coming',
        timestamp: '34:56',
        confidence: 91,
        currentPrice: 0.45,
        priceChange: -12.34,
        sentiment: -0.65,
        actionable: true,
        mwRating: 8.9,
        context: 'Prediction validation'
      },
      {
        id: 'gem_005',
        token: 'BONK',
        tokenName: 'Bonk',
        quote: 'BONK is following the exact same pattern - watch for the bounce',
        timestamp: '2:03:15',
        confidence: 82,
        currentPrice: 0.000023,
        priceChange: +11.23,
        sentiment: 0.78,
        actionable: true,
        mwRating: 8.2,
        context: 'Pattern recognition'
      }
    ],
    recent: [
      {
        id: 'stream_20240114',
        title: 'Korean Traders Pumping Markets Again!',
        date: '2024-01-14',
        duration: '1h 45m',
        gemsFound: 3,
        performance: +18.5 // % average of gems
      },
      {
        id: 'stream_20240113',
        title: 'Top 10 Altcoins to Pump Next Week',
        date: '2024-01-13',
        duration: '2h 30m',
        gemsFound: 7,
        performance: +24.2
      }
    ]
  },
  
  xPosts: [
    {
      id: 'post_001',
      account: '@MW_Trading',
      accountType: 'primary',
      content: 'SOL looking strong above MW +15% band. Korean session might push this higher. Watching for confirmation. #SOL #Trading',
      timestamp: '2024-01-15T14:45:00Z',
      timeAgo: '15 minutes ago',
      tokens: ['SOL'],
      sentiment: 0.8,
      confidence: 91,
      engagement: {
        likes: 234,
        retweets: 67,
        comments: 45,
        views: 12500
      },
      tradingSignal: {
        type: 'bullish',
        strength: 'strong',
        timeframe: 'short-term'
      },
      aiInterpretation: 'High confidence bullish signal for SOL with technical and market context support'
    },
    {
      id: 'post_002',
      account: '@MW_Team',
      accountType: 'team',
      content: 'PEPE Korean pump incoming 🚀🇰🇷 Volume spiking hard. This is it. #PEPE #Korean',
      timestamp: '2024-01-15T14:30:00Z',
      timeAgo: '30 minutes ago',
      tokens: ['PEPE'],
      sentiment: 0.95,
      confidence: 89,
      engagement: {
        likes: 189,
        retweets: 123,
        comments: 78,
        views: 8900
      },
      tradingSignal: {
        type: 'bullish',
        strength: 'very-strong',
        timeframe: 'immediate'
      },
      aiInterpretation: 'Urgent bullish signal with Korean market catalyst and volume confirmation'
    },
    {
      id: 'post_003',
      account: '@MW_Trading',
      accountType: 'primary',
      content: 'Market looking risk-on. BTC holding strong, alts following. Perfect conditions for the MW strategy.',
      timestamp: '2024-01-15T13:15:00Z',
      timeAgo: '1h 45m ago',
      tokens: ['BTC'],
      sentiment: 0.72,
      confidence: 85,
      engagement: {
        likes: 156,
        retweets: 34,
        comments: 23,
        views: 6700
      },
      tradingSignal: {
        type: 'market-bullish',
        strength: 'medium',
        timeframe: 'medium-term'
      },
      aiInterpretation: 'General market bullish sentiment with strategy validation'
    }
  ],
  
  aiSynthesis: {
    consensusSignals: [
      {
        token: 'SOL',
        confidence: 94,
        sources: ['market', 'livestream', 'x'],
        signal: 'strong-buy',
        reasoning: 'Technical breakout + MW livestream mention + X confirmation',
        strength: 9.4,
        timeframe: '1H-4H',
        risk: 'medium'
      },
      {
        token: 'PEPE',
        confidence: 90,
        sources: ['livestream', 'x', 'korean'],
        signal: 'buy',
        reasoning: 'Korean session catalyst + MW enthusiasm + social momentum',
        strength: 9.0,
        timeframe: '15M-1H',
        risk: 'high'
      }
    ],
    
    overrides: [
      {
        id: 'override_001',
        token: 'UNI',
        type: 'social-momentum',
        confidence: 82,
        reason: 'Strong X mention despite weak technicals - MW methodology suggests following social signals in trending markets',
        urgency: 'medium',
        action: 'consider-entry',
        validUntil: '2024-01-15T16:00:00Z'
      }
    ],
    
    conflicts: [
      {
        id: 'conflict_001',
        token: 'LINK',
        technicalSignal: 'bearish',
        socialSignal: 'neutral',
        marketSignal: 'bullish',
        recommendation: 'wait',
        reason: 'Mixed signals suggest waiting for clearer direction'
      }
    ]
  }
};

// Watchlist & Token Universe
export const tokenUniverse = {
  tier1: [
    { symbol: 'BTC', name: 'Bitcoin', category: 'major', koreanInfluence: false },
    { symbol: 'ETH', name: 'Ethereum', category: 'major', koreanInfluence: false },
    { symbol: 'SOL', name: 'Solana', category: 'major', koreanInfluence: true },
    { symbol: 'BNB', name: 'Binance Coin', category: 'major', koreanInfluence: false },
    { symbol: 'ADA', name: 'Cardano', category: 'major', koreanInfluence: false },
    { symbol: 'MATIC', name: 'Polygon', category: 'major', koreanInfluence: true },
    { symbol: 'DOT', name: 'Polkadot', category: 'major', koreanInfluence: false },
    { symbol: 'LINK', name: 'Chainlink', category: 'major', koreanInfluence: false },
    { symbol: 'UNI', name: 'Uniswap', category: 'major', koreanInfluence: false },
    { symbol: 'AVAX', name: 'Avalanche', category: 'major', koreanInfluence: false }
  ],
  
  tier2: [
    { symbol: 'ATOM', name: 'Cosmos', category: 'alt', koreanInfluence: false },
    { symbol: 'ICP', name: 'Internet Computer', category: 'alt', koreanInfluence: false },
    { symbol: 'FTM', name: 'Fantom', category: 'alt', koreanInfluence: true },
    { symbol: 'ALGO', name: 'Algorand', category: 'alt', koreanInfluence: false },
    { symbol: 'VET', name: 'VeChain', category: 'alt', koreanInfluence: false },
    { symbol: 'XLM', name: 'Stellar', category: 'alt', koreanInfluence: false },
    { symbol: 'HBAR', name: 'Hedera', category: 'alt', koreanInfluence: false },
    { symbol: 'THETA', name: 'Theta Network', category: 'alt', koreanInfluence: false },
    { symbol: 'FIL', name: 'Filecoin', category: 'alt', koreanInfluence: false }
  ],
  
  tier3: [
    { symbol: 'PEPE', name: 'Pepe', category: 'meme', koreanInfluence: true },
    { symbol: 'WIF', name: 'dogwifhat', category: 'meme', koreanInfluence: true },
    { symbol: 'BONK', name: 'Bonk', category: 'meme', koreanInfluence: true },
    { symbol: 'DOGE', name: 'Dogecoin', category: 'meme', koreanInfluence: false },
    { symbol: 'SHIB', name: 'Shiba Inu', category: 'meme', koreanInfluence: false },
    { symbol: 'FLOKI', name: 'FLOKI', category: 'meme', koreanInfluence: true }
  ],
  
  koreanSpecial: [
    { symbol: 'OM', name: 'MANTRA', category: 'korean', koreanInfluence: true },
    { symbol: 'KLAY', name: 'Klaytn', category: 'korean', koreanInfluence: true },
    { symbol: 'CHZ', name: 'Chiliz', category: 'korean', koreanInfluence: true },
    { symbol: 'QTUM', name: 'Qtum', category: 'korean', koreanInfluence: true },
    { symbol: 'ICX', name: 'ICON', category: 'korean', koreanInfluence: true },
    { symbol: 'STPT', name: 'Standard Tokenization Protocol', category: 'korean', koreanInfluence: true }
  ]
};

// Alerts Data
export const alertsData = {
  critical: [
    {
      id: 'alert_001',
      type: 'setup_triggered',
      token: 'SOL',
      title: 'SOL Setup Triggered',
      message: 'SOL has broken above MW +15% band with volume confirmation',
      confidence: 95,
      urgency: 'immediate',
      timestamp: '2024-01-15T14:52:00Z',
      timeAgo: '3 minutes ago',
      action: 'Consider Entry',
      status: 'unread',
      source: 'market'
    },
    {
      id: 'alert_002',
      type: 'mw_call',
      token: 'PEPE',
      title: 'MW Livestream Call',
      message: 'MW mentioned PEPE as "absolutely incredible" - Korean pump active',
      confidence: 92,
      urgency: 'high',
      timestamp: '2024-01-15T14:25:00Z',
      timeAgo: '30 minutes ago',
      action: 'Review Setup',
      status: 'unread',
      source: 'livestream'
    },
    {
      id: 'alert_003',
      type: 'risk_warning',
      token: 'LINK',
      title: 'Position at Risk',
      message: 'LINK position down 3.63% - approaching stop loss area',
      confidence: 88,
      urgency: 'medium',
      timestamp: '2024-01-15T14:00:00Z',
      timeAgo: '55 minutes ago',
      action: 'Review Position',
      status: 'read',
      source: 'risk'
    }
  ],
  
  setup: [
    {
      id: 'alert_004',
      type: 'approaching',
      token: 'MATIC',
      title: 'MATIC Chase Short Approaching',
      message: 'MATIC approaching MW chase short entry zone - watch for rejection',
      confidence: 89,
      urgency: 'medium',
      timestamp: '2024-01-15T13:45:00Z',
      timeAgo: '1h 10m ago',
      action: 'Monitor',
      status: 'unread',
      source: 'market'
    },
    {
      id: 'alert_005',
      type: 'confirmation_needed',
      token: 'UNI',
      title: 'UNI Social Signal',
      message: 'Strong X mentions for UNI - technical confirmation pending',
      confidence: 82,
      urgency: 'low',
      timestamp: '2024-01-15T13:30:00Z',
      timeAgo: '1h 25m ago',
      action: 'Wait for Confirmation',
      status: 'unread',
      source: 'social'
    }
  ],
  
  intelligence: [
    {
      id: 'alert_006',
      type: 'korean_session',
      token: null,
      title: 'Korean Session Active',
      message: 'High volume Korean session detected - monitor pump coins',
      confidence: 94,
      urgency: 'medium',
      timestamp: '2024-01-15T13:00:00Z',
      timeAgo: '1h 55m ago',
      action: 'Monitor Korean Coins',
      status: 'read',
      source: 'market'
    },
    {
      id: 'alert_007',
      type: 'ai_consensus',
      token: 'SOL',
      title: 'AI Consensus Signal',
      message: 'All intelligence sources agree on SOL bullish signal',
      confidence: 96,
      urgency: 'high',
      timestamp: '2024-01-15T12:45:00Z',
      timeAgo: '2h 10m ago',
      action: 'High Confidence Setup',
      status: 'read',
      source: 'ai'
    }
  ]
};

// Performance & Analytics Data
export const performanceData = {
  today: {
    totalSetups: 23,
    activeSetups: 12,
    completedSetups: 8,
    expiredSetups: 3,
    winRate: 73.5, // %
    avgReturn: 8.4, // %
    bestPerformer: { token: 'PEPE', return: 16.67 },
    worstPerformer: { token: 'LINK', return: -3.63 }
  },
  
  week: {
    totalSetups: 145,
    winRate: 71.2,
    avgReturn: 6.8,
    totalReturn: 42.3,
    sharpRatio: 2.1,
    maxDrawdown: -8.4,
    bestDay: { date: '2024-01-12', return: 18.9 },
    worstDay: { date: '2024-01-10', return: -4.2 }
  },
  
  setupTypes: {
    'MW Band Bounce': { count: 34, winRate: 78.5, avgReturn: 9.2 },
    'Korean Pump': { count: 23, winRate: 69.6, avgReturn: 12.1 },
    'Chase Short': { count: 19, winRate: 68.4, avgReturn: 7.8 },
    'Confirmation Trade': { count: 28, winRate: 75.0, avgReturn: 5.9 },
    'X Override': { count: 15, winRate: 66.7, avgReturn: 8.5 },
    'Reversal Short': { count: 12, winRate: 58.3, avgReturn: 11.3 }
  }
};

// Settings & Configuration
export const userSettings = {
  profile: {
    username: 'trader_pro',
    email: 'trader@example.com',
    subscription: 'premium',
    timezone: 'UTC-5',
    tradingExperience: 'advanced'
  },
  
  notifications: {
    setupAlerts: true,
    mwMentions: true,
    riskWarnings: true,
    koreanSession: true,
    emailNotifications: false,
    pushNotifications: true,
    sound: true,
    vibration: true
  },
  
  trading: {
    minConfidence: 75,
    preferredTimeframes: ['15M', '1H', '4H'],
    excludedSetupTypes: [],
    maxSetupAge: 24, // hours
    defaultRiskPerTrade: 2, // %
    accountBalance: 50000,
    preferredExchanges: ['Binance', 'Coinbase', 'Kraken']
  },
  
  display: {
    theme: 'dark',
    layout: 'grid',
    density: 'comfortable',
    chartTheme: 'dark',
    language: 'en',
    currency: 'USD',
    timeFormat: '24h',
    animations: true
  }
};

// TradingView Configuration Points
export const tradingViewConfig = {
  // These are the exact placement points for TradingView widgets
  placements: {
    // Dashboard mini charts (4 locations)
    dashboard: {
      btcMini: {
        containerId: 'tv-chart-btc-mini',
        symbol: 'BINANCE:BTCUSDT',
        width: '100%',
        height: '200',
        interval: '1H',
        theme: 'dark',
        indicators: ['MW_BANDS', 'VOLUME']
      },
      us500Mini: {
        containerId: 'tv-chart-us500-mini', 
        symbol: 'TVC:SPX500',
        width: '100%',
        height: '200',
        interval: '1H',
        theme: 'dark'
      }
    },
    
    // Coin Analysis Page (4 timeframes)
    coinAnalysis: {
      chart4H: {
        containerId: 'tv-chart-4h',
        width: '100%',
        height: '400',
        interval: '240', // 4H
        theme: 'dark',
        indicators: ['MW_TRADE_PANEL', 'ROCKET_MACRO', 'MW_WICK_MULTI_TF']
      },
      chart1H: {
        containerId: 'tv-chart-1h',
        width: '100%', 
        height: '400',
        interval: '60', // 1H
        theme: 'dark',
        indicators: ['MW_TRADE_PANEL', 'VOLUME', 'EMA_34', 'SMA_21']
      },
      chart15M: {
        containerId: 'tv-chart-15m',
        width: '100%',
        height: '400', 
        interval: '15', // 15M
        theme: 'dark',
        indicators: ['MW_TRADE_PANEL', 'MW_WICK_MULTI_TF']
      },
      indicatorsPanel: {
        containerId: 'tv-indicators-panel',
        width: '100%',
        height: '400',
        customStudies: ['MW_CONFIDENCE_METER', 'CORRELATION_TRACKER']
      }
    },
    
    // Scanner Page (overview charts)
    scanner: {
      overviewChart: {
        containerId: 'tv-scanner-overview',
        width: '100%',
        height: '300',
        interval: '1H',
        theme: 'dark',
        toolbar: true
      }
    },
    
    // Setup Detail Modals
    setupModal: {
      chart: {
        containerId: 'tv-setup-chart',
        width: '100%',
        height: '350',
        theme: 'dark',
        interval: 'dynamic', // Based on setup timeframe
        indicators: ['MW_TRADE_PANEL']
      }
    }
  },
  
  // MW Custom Indicators Configuration
  customIndicators: {
    MW_TRADE_PANEL: {
      name: 'MW Trade Panel',
      script: '/indicators/mw-trade-panel.pine',
      settings: {
        ema34Length: 34,
        sma21Length: 21,
        ema200Length: 200,
        bandPercentages: [5, 10, 15, 20, 25]
      }
    },
    ROCKET_MACRO: {
      name: 'Rocket Macro',
      script: '/indicators/rocket-macro.pine',
      settings: {
        smaValue: 16,
        lookbackPeriod: 672
      }
    },
    MW_WICK_MULTI_TF: {
      name: 'MW Wick Multi TF',
      script: '/indicators/mw-wick-multi-tf.pine',
      settings: {
        wickSensitivity: 'medium'
      }
    }
  }
};

// Export all data
export default {
  marketStatus,
  tradingSetups,
  intelligenceData,
  tokenUniverse,
  alertsData,
  performanceData,
  userSettings,
  tradingViewConfig
};