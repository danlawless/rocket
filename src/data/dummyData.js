// ====================================
// MW TRADING DASHBOARD - DUMMY DATA
// ====================================

// Market Status Data
export const marketStatus = {
  btc: {
    price: 67234.56,
    change: 1567.23,
    changePercent: 2.34,
    trend: 'up',
    mwBandPosition: 'Above +12% Band',
    volume24h: '28.4B',
    dominance: 54.2,
    fearGreedIndex: 78,
    nextResistance: 69500,
    nextSupport: 65800
  },
  us500: {
    price: 4156.23,
    change: 33.45,
    changePercent: 0.81,
    trend: 'up',
    correlation: 0.87, // Correlation with BTC
    session: 'US_OPEN',
    volatility: 'low',
    nextLevel: 4200
  },
  koreanSession: {
    status: 'active', // active, inactive, pre-market
    influence: 'very_high', // low, medium, high, very_high
    activeCoins: ['PEPE', 'WIF', 'BONK', 'OM', 'KLAY'],
    volumeIncrease: 189.7, // %
    sessionTimeRemaining: '2h 34m',
    topPumps: [
      { token: 'PEPE', change: 23.4 },
      { token: 'WIF', change: 18.9 },
      { token: 'BONK', change: 15.2 }
    ]
  },
  marketRegime: {
    current: 'RISK_ON', // RISK_ON, RISK_OFF, NEUTRAL, TRANSITION
    strength: 9.2, // 0-10 scale
    trend: 'strengthening', // strengthening, weakening, stable
    duration: '4 days',
    confidence: 94
  }
};

// Active Trading Setups
export const tradingSetups = [
  {
    id: 'setup_001',
    token: 'SOL',
    tokenName: 'Solana',
    price: 148.23,
    setupType: 'MW Band Bounce',
    timeframe: '1H',
    confidence: 96,
    status: 'active', // active, approaching, triggered, expired
    direction: 'Long',
    entryPrice: 145.67,
    target1: 156.40,
    target2: 162.80,
    target3: 168.50,
    stopLoss: 138.20,
    riskReward: 2.8,
    source: ['market', 'livestream', 'x'],
    timeRemaining: '3h 45m',
    mwQuote: 'SOL looking absolutely incredible above the MW +15% band - this Korean session is going to send it higher',
    unrealizedPnl: +1.76,
    volumeConfirmation: true,
    technicalAlignment: 94,
    marketContext: 'BTC bullish + Korean session active',
    lastUpdate: '2 minutes ago',
    // MW Technical Indicators
    mwIndicators: {
      ema34: 143.45,
      sma21: 146.89,
      ema200: 128.67,
      mwBandPosition: '+15.2%', // Above +15% band
      bandLevel: 'resistance_3', // support_3, support_2, support_1, neutral, resistance_1, resistance_2, resistance_3
      wickAnalysis: 'bullish_continuation',
      rocketMacro: 'strong_uptrend',
      mfi: 78.4,
      adx: 45.6,
      diPlus: 28.9,
      diMinus: 12.3,
      volume24h: '2.4B',
      volumeProfile: 'above_average',
      koreanInfluence: 'high',
      btcCorrelation: 0.87,
      funding: -0.0234, // Negative = bullish
      openInterest: '+12.4%',
      socialSentiment: 89.2,
      whaleActivity: 'accumulating'
    }
  },
  {
    id: 'setup_002', 
    token: 'PEPE',
    tokenName: 'Pepe',
    price: 0.000014,
    setupType: 'Korean Mega Pump',
    timeframe: '4H',
    confidence: 94,
    status: 'mw_priority',
    direction: 'Long',
    entryPrice: 0.000012,
    target1: 0.000018,
    target2: 0.000022,
    target3: 0.000028,
    stopLoss: 0.000009,
    riskReward: 3.2,
    source: ['livestream', 'x', 'korean'],
    timeRemaining: '1h 23m',
    mwQuote: 'PEPE Korean pump is absolutely flying - this is exactly what we predicted',
    unrealizedPnl: +16.67,
    volumeConfirmation: true,
    technicalAlignment: 91,
    marketContext: 'Korean mega pump session',
    lastUpdate: '1 minute ago',
    // MW Technical Indicators
    mwIndicators: {
      ema34: 0.000012,
      sma21: 0.000013,
      ema200: 0.000009,
      mwBandPosition: '+22.8%', // Above +20% band
      bandLevel: 'resistance_4', // Korean pump level
      wickAnalysis: 'korean_breakout',
      rocketMacro: 'parabolic_uptrend',
      mfi: 92.1,
      adx: 67.8,
      diPlus: 45.2,
      diMinus: 8.4,
      volume24h: '8.7B',
      volumeProfile: 'explosive',
      koreanInfluence: 'very_high',
      btcCorrelation: 0.23, // Meme decoupling
      funding: 0.1456, // Very positive = caution
      openInterest: '+234.7%',
      socialSentiment: 96.4,
      whaleActivity: 'fomo_buying'
    }
  },
  {
    id: 'setup_003',
    token: 'WIF',
    tokenName: 'dogwifhat', 
    price: 2.89,
    setupType: 'Chase Long',
    timeframe: '1H',
    confidence: 89,
    status: 'approaching',
    direction: 'Long',
    entryPrice: 2.75,
    target1: 3.20,
    target2: 3.45,
    target3: 3.78,
    stopLoss: 2.55,
    riskReward: 2.25,
    source: ['market', 'x'],
    timeRemaining: '45m',
    mwQuote: 'WIF following PEPE - watch for the breakout above resistance',
    unrealizedPnl: 0,
    volumeConfirmation: false,
    technicalAlignment: 87,
    marketContext: 'Meme coin momentum building',
    lastUpdate: '5 minutes ago',
    // MW Technical Indicators
    mwIndicators: {
      ema34: 2.67,
      sma21: 2.78,
      ema200: 2.34,
      mwBandPosition: '+8.2%', // Above +5% band
      bandLevel: 'resistance_1',
      wickAnalysis: 'building_pressure',
      rocketMacro: 'uptrend',
      mfi: 65.8,
      adx: 38.2,
      diPlus: 24.7,
      diMinus: 16.3,
      volume24h: '1.8B',
      volumeProfile: 'above_average',
      koreanInfluence: 'medium',
      btcCorrelation: 0.45,
      funding: 0.0876,
      openInterest: '+45.2%',
      socialSentiment: 78.5,
      whaleActivity: 'neutral'
    }
  },
  {
    id: 'setup_004',
    token: 'MATIC',
    tokenName: 'Polygon',
    price: 0.87,
    setupType: 'Reversal Short',
    timeframe: '4H', 
    confidence: 85,
    status: 'triggered',
    direction: 'Short',
    entryPrice: 0.91,
    target1: 0.82,
    target2: 0.76,
    target3: 0.69,
    stopLoss: 0.96,
    riskReward: 1.8,
    source: ['market'],
    timeRemaining: '6h 15m',
    mwQuote: null,
    unrealizedPnl: +4.40,
    volumeConfirmation: true,
    technicalAlignment: 83,
    marketContext: 'Overextended correction',
    lastUpdate: '8 minutes ago',
    // MW Technical Indicators
    mwIndicators: {
      ema34: 0.89,
      sma21: 0.91,
      ema200: 1.02,
      mwBandPosition: '-12.7%', // Below support
      bandLevel: 'support_2',
      wickAnalysis: 'reversal_setup',
      rocketMacro: 'downtrend_weakening',
      mfi: 34.2,
      adx: 52.1,
      diPlus: 16.8,
      diMinus: 31.4,
      volume24h: '890M',
      volumeProfile: 'high',
      koreanInfluence: 'low',
      btcCorrelation: 0.78,
      funding: -0.0145,
      openInterest: '-8.3%',
      socialSentiment: 42.1,
      whaleActivity: 'distributing'
    }
  },
  {
    id: 'setup_005',
    token: 'UNI',
    tokenName: 'Uniswap',
    price: 7.45,
    setupType: 'X Override Signal',
    timeframe: '15M',
    confidence: 92,
    status: 'fresh',
    direction: 'Long',
    entryPrice: 7.23,
    target1: 8.15,
    target2: 8.67,
    target3: 9.20,
    stopLoss: 6.95,
    riskReward: 3.5,
    source: ['x', 'ai'],
    timeRemaining: '2h 10m',
    mwQuote: 'UNI showing massive social momentum - this could be the next runner',
    unrealizedPnl: +3.04,
    volumeConfirmation: true,
    technicalAlignment: 88,
    marketContext: 'Social momentum spike',
    lastUpdate: '3 minutes ago',
    // MW Technical Indicators
    mwIndicators: {
      ema34: 7.12,
      sma21: 7.28,
      ema200: 6.78,
      mwBandPosition: '+9.8%', // Above +5% band
      bandLevel: 'resistance_2',
      wickAnalysis: 'social_breakout',
      rocketMacro: 'strong_uptrend',
      mfi: 84.3,
      adx: 43.7,
      diPlus: 35.2,
      diMinus: 14.6,
      volume24h: '1.2B',
      volumeProfile: 'explosive',
      koreanInfluence: 'medium',
      btcCorrelation: 0.52,
      funding: 0.0234,
      openInterest: '+89.4%',
      socialSentiment: 94.7,
      whaleActivity: 'accumulating'
    }
  },
  {
    id: 'setup_006',
    token: 'BONK',
    tokenName: 'Bonk',
    price: 0.000025,
    setupType: 'Korean Continuation',
    timeframe: '1H',
    confidence: 87,
    status: 'active',
    direction: 'Short',
    entryPrice: 0.000023,
    target1: 0.000029,
    target2: 0.000032,
    target3: 0.000037,
    stopLoss: 0.000021,
    riskReward: 2.4,
    source: ['livestream', 'korean'],
    timeRemaining: '4h 30m',
    mwQuote: 'BONK following the Korean playbook perfectly',
    unrealizedPnl: +8.70,
    volumeConfirmation: true,
    technicalAlignment: 85,
    marketContext: 'Korean session extension',
    lastUpdate: '4 minutes ago',
    // MW Technical Indicators
    mwIndicators: {
      ema34: 0.000022,
      sma21: 0.000024,
      ema200: 0.000018,
      mwBandPosition: '+13.6%', // Above +10% band
      bandLevel: 'resistance_2',
      wickAnalysis: 'korean_continuation',
      rocketMacro: 'uptrend',
      mfi: 76.9,
      adx: 41.3,
      diPlus: 29.8,
      diMinus: 18.7,
      volume24h: '3.2B',
      volumeProfile: 'above_average',
      koreanInfluence: 'high',
      btcCorrelation: 0.34,
      funding: 0.0687,
      openInterest: '+67.8%',
      socialSentiment: 85.3,
      whaleActivity: 'accumulating'
    }
  }
];

// Intelligence Data
export const intelligenceData = {
  livestream: {
    today: {
      title: 'Korean Session EXPLODING - MW Calls Going PARABOLIC!',
      duration: '3h 12m',
      status: 'processing', // live, processing, completed
      gemsFound: 8,
      avgPerformance: +24.7,
      timestamp: '1h 23m ago',
      viewerCount: 12567,
      topGem: { token: 'PEPE', performance: +34.2 }
    },
    recentGems: [
      {
        token: 'PEPE',
        quote: 'PEPE is absolutely flying - Korean session is sending this to the moon!',
        timestamp: '1:23:45',
        confidence: 96,
        performance: +23.4,
        mwRating: 9.8
      },
      {
        token: 'WIF', 
        quote: 'WIF following PEPE perfectly - this is the meme season we\'ve been waiting for',
        timestamp: '2:45:12',
        confidence: 89,
        performance: +18.9,
        mwRating: 9.1
      },
      {
        token: 'BONK',
        quote: 'BONK breaking out exactly as predicted - Korean traders know what they\'re doing',
        timestamp: '2:58:30',
        confidence: 87,
        performance: +15.2,
        mwRating: 8.9
      }
    ]
  },
  
  xPosts: [
    {
      account: '@MW_Trading',
      content: 'Korean session is absolutely INSANE right now 🚀🇰🇷 PEPE, WIF, BONK all moving exactly as predicted. This is why we track these sessions!',
      timestamp: '12 minutes ago',
      engagement: { likes: 2847, retweets: 892, comments: 234 },
      tokens: ['PEPE', 'WIF', 'BONK'],
      sentiment: 0.95,
      confidence: 94
    },
    {
      account: '@MW_Trading',
      content: 'SOL above MW +15% band with Korean session support = BULLISH continuation setup 📈 Target levels loading...',
      timestamp: '28 minutes ago', 
      engagement: { likes: 1923, retweets: 445, comments: 167 },
      tokens: ['SOL'],
      sentiment: 0.88,
      confidence: 91
    },
    {
      account: '@MW_Team',
      content: 'UNI social metrics going parabolic 🔥 This could be the next major runner. MW indicators aligning perfectly.',
      timestamp: '45 minutes ago',
      engagement: { likes: 1456, retweets: 334, comments: 89 },
      tokens: ['UNI'],
      sentiment: 0.85,
      confidence: 88
    }
  ],
  
  aiSynthesis: {
    consensusSignals: [
      {
        token: 'PEPE',
        signal: 'STRONG_BUY',
        confidence: 96,
        sources: ['livestream', 'x', 'korean', 'technical'],
        reasoning: 'Perfect alignment: MW livestream mega-bullish + X momentum + Korean session pump + technical breakout',
        timeframe: '1H-4H',
        urgency: 'HIGH'
      },
      {
        token: 'SOL',
        signal: 'BUY',
        confidence: 94,
        sources: ['livestream', 'x', 'technical', 'market'],
        reasoning: 'Above MW +15% band with Korean session support and bullish market structure',
        timeframe: '1H-1D', 
        urgency: 'MEDIUM'
      }
    ]
  }
};

// Performance Metrics
export const performanceMetrics = {
  today: {
    totalSetups: 18,
    activeSetups: 6,
    winRate: 91.7, // %
    avgReturn: 12.8, // %
    totalReturn: 47.3, // %
    bestPerformer: { token: 'PEPE', return: 34.2 },
    accuracy: 94.2,
    sharpeRatio: 3.84
  },
  
  week: {
    totalSetups: 127,
    winRate: 88.2,
    avgReturn: 8.9,
    totalReturn: 156.7,
    maxDrawdown: -4.2,
    consecutiveWins: 12,
    bestDay: { date: '2024-01-15', return: 47.3 }
  },
  
  month: {
    totalSetups: 534,
    winRate: 85.4,
    avgReturn: 7.1,
    totalReturn: 284.9,
    bestSetupType: 'Korean Pump',
    topTokens: ['PEPE', 'SOL', 'WIF', 'UNI', 'BONK']
  }
};

// Real-time Updates (simulated)
export const realtimeUpdates = [
  { time: '14:52:34', message: 'PEPE broke above resistance - MW setup triggered!', type: 'success' },
  { time: '14:51:12', message: 'Korean session volume spike detected across meme coins', type: 'info' },
  { time: '14:49:45', message: 'SOL holding MW +15% band - continuation likely', type: 'info' },
  { time: '14:48:23', message: 'WIF approaching entry zone - watch for confirmation', type: 'warning' },
  { time: '14:47:01', message: 'BTC correlation at 87% - strong market alignment', type: 'success' }
];

export default {
  marketStatus,
  tradingSetups,
  intelligenceData,
  performanceMetrics,
  realtimeUpdates
};