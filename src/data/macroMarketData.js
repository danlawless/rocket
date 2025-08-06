// Macro Market Data - MW Trading Style
// Focus on market regime, direction, and strength

export const macroMarketData = {
  // Overall Market Regime - Core MW Analysis
  marketRegime: {
    current: 'PUMPING', // RANGING, PUMPING, DUMPING
    strength: 87, // 0-100 strength of the current regime
    duration: '4 days', // how long we've been in this regime
    confidence: 92, // MW's confidence in regime analysis
    
    // Visual indicators
    color: '#00ff88', // green for pumping
    trend: 'accelerating', // accelerating, stable, weakening
    
    // Key insights
    reasoning: [
      'BTC broke above key resistance with volume',
      'Korean session showing sustained buying pressure', 
      'Altcoin rotation patterns confirming bull momentum',
      'Risk-on sentiment dominating across all sectors'
    ],
    
    nextLevel: {
      level: 'STRONG_PUMPING',
      requirement: 'BTC > $105k with altcoin breakouts',
      probability: 73
    }
  },

  // Core Macro Indicators - MW's Primary Market Drivers
  macroIndicators: {
    DXY: {
      name: 'Dollar Index',
      current: 103.24,
      change24h: -0.52,
      mwAgreement: 96, // How much MW agrees with current direction
      overallDirection: 'BEARISH',
      overallStrength: 'STRONG',
      mentions: 18, // Times mentioned in recent content
      
      timeframes: {
        '15m': { 
          direction: 'BEARISH', 
          strength: 'STRONG', 
          signal: 'SHORT',
          technicals: ['RSI: 31 (oversold)', 'MACD: -0.68 (accelerating)'],
          volume: 'HIGH',
          confidence: 92
        },
        '1h': { 
          direction: 'BEARISH', 
          strength: 'STRONG', 
          signal: 'SHORT',
          technicals: ['Support break confirmed', 'Volume: MASSIVE'],
          volume: 'MASSIVE',
          confidence: 89
        },
        '4h': { 
          direction: 'BEARISH', 
          strength: 'MODERATE', 
          signal: 'SHORT',
          technicals: ['Trendline breakdown', 'EMA death cross'],
          volume: 'HIGH',
          confidence: 85
        }
      },
      keyLevels: { resistance: 104.80, nearSupport: 102.60, majorSupport: 101.20 },
      mwLatestComment: "DXY collapsing = crypto moon mission confirmed. This is what we've been waiting for.",
      impact: 'MASSIVE_POSITIVE' // for crypto
    },

    US500: {
      name: 'S&P 500',
      current: 5847.20,
      change24h: 0.23,
      mwAgreement: 71,
      overallDirection: 'NEUTRAL',
      overallStrength: 'WEAK',
      mentions: 7,
      
      timeframes: {
        '15m': { 
          direction: 'NEUTRAL', 
          strength: 'WEAK', 
          signal: 'NEUTRAL',
          technicals: ['RSI: 48 (neutral)', 'Low volume chop'],
          volume: 'LOW',
          confidence: 65
        },
        '1h': { 
          direction: 'BULLISH', 
          strength: 'WEAK', 
          signal: 'WEAK_LONG',
          technicals: ['Above 20 EMA', 'Grinding higher slowly'],
          volume: 'MEDIUM',
          confidence: 58
        },
        '4h': { 
          direction: 'BULLISH', 
          strength: 'MODERATE', 
          signal: 'LONG',
          technicals: ['Uptrend intact', 'ATH proximity'],
          volume: 'MEDIUM',
          confidence: 73
        }
      },
      keyLevels: { resistance: 5890, nearSupport: 5820, majorSupport: 5780 },
      mwLatestComment: "SPX boring sideways action. All the alpha is in crypto right now.",
      impact: 'NEUTRAL' // for crypto
    },

    BTC: {
      name: 'Bitcoin',
      current: 101750,
      change24h: 3.47,
      mwAgreement: 98,
      overallDirection: 'BULLISH',
      overallStrength: 'VERY_STRONG',
      mentions: 52,
      
      timeframes: {
        '15m': { 
          direction: 'BULLISH', 
          strength: 'VERY_STRONG', 
          signal: 'STRONG_LONG',
          technicals: ['RSI: 72 (strong momentum)', 'MACD: +1.24 (explosive)'],
          volume: 'MASSIVE',
          confidence: 97
        },
        '1h': { 
          direction: 'BULLISH', 
          strength: 'STRONG', 
          signal: 'LONG',
          technicals: ['Breakout confirmed', 'Volume: INSTITUTIONAL'],
          volume: 'INSTITUTIONAL',
          confidence: 94
        },
        '4h': { 
          direction: 'BULLISH', 
          strength: 'STRONG', 
          signal: 'LONG',
          technicals: ['Bull flag breakout', 'All EMAs aligned'],
          volume: 'HIGH',
          confidence: 91
        }
      },
      keyLevels: { resistance: 105000, nearSupport: 99800, majorSupport: 96500 },
      mwLatestComment: "BTC looking absolutely perfect. Korean flows + DXY weakness = altcoin season incoming.",
      impact: 'BULLISH_LEADER' // for crypto market
    },

    PAXGBTC: {
      name: 'PAXG/BTC',
      current: 0.0289,
      change24h: -0.0012,
      mwAgreement: 88,
      overallDirection: 'BEARISH',
      overallStrength: 'MODERATE',
      mentions: 14,
      
      timeframes: {
        '15m': { 
          direction: 'BEARISH', 
          strength: 'MODERATE', 
          signal: 'SHORT',
          technicals: ['RSI: 42 (weakening)', 'Gold losing to BTC momentum'],
          volume: 'MEDIUM',
          confidence: 82
        },
        '1h': { 
          direction: 'BEARISH', 
          strength: 'STRONG', 
          signal: 'SHORT',
          technicals: ['BTC dominance rising', 'Flight to crypto over gold'],
          volume: 'HIGH',
          confidence: 87
        },
        '4h': { 
          direction: 'BEARISH', 
          strength: 'MODERATE', 
          signal: 'SHORT',
          technicals: ['Institutional preference for BTC', 'Digital gold narrative'],
          volume: 'MEDIUM',
          confidence: 85
        }
      },
      keyLevels: { resistance: 0.0295, nearSupport: 0.0275, majorSupport: 0.0260 },
      mwLatestComment: "PAXGBTC falling = institutions choosing digital gold over physical. Bullish for crypto ecosystem.",
      impact: 'POSITIVE' // for crypto - shows preference for BTC over gold
    },

    USDTDOM: {
      name: 'USDT Dominance',
      current: 4.73,
      change24h: -0.18,
      mwAgreement: 94,
      overallDirection: 'BEARISH',
      overallStrength: 'STRONG',
      mentions: 22,
      
      timeframes: {
        '15m': { 
          direction: 'BEARISH', 
          strength: 'STRONG', 
          signal: 'RISK_ON',
          technicals: ['USDT.D falling = money rotating into alts', 'Risk appetite increasing'],
          volume: 'HIGH',
          confidence: 91
        },
        '1h': { 
          direction: 'BEARISH', 
          strength: 'VERY_STRONG', 
          signal: 'ALTCOIN_SEASON',
          technicals: ['Classic altseason pattern', 'Stablecoin exit accelerating'],
          volume: 'MASSIVE',
          confidence: 95
        },
        '4h': { 
          direction: 'BEARISH', 
          strength: 'STRONG', 
          signal: 'ALTCOIN_SEASON',
          technicals: ['Multi-week downtrend', 'Capital rotating to risk assets'],
          volume: 'HIGH',
          confidence: 89
        }
      },
      keyLevels: { resistance: 4.95, nearSupport: 4.65, majorSupport: 4.40 },
      mwLatestComment: "USDT.D collapsing = altcoin season confirmed. This is the signal we've been waiting for.",
      impact: 'MASSIVE_POSITIVE' // for altcoins - falling USDT dominance = altcoin season
    }
  },

  // BTC Analysis - The King (Legacy structure maintained)
  btcAnalysis: {
    price: 101750,
    trend: 'BULLISH',
    momentum: 'STRONG', // WEAK, MEDIUM, STRONG
    
    // Key levels MW is watching
    keyLevels: {
      majorResistance: 105000,
      nearResistance: 103500,
      currentSupport: 99800,
      majorSupport: 96500
    },
    
    // MW's BTC read
    mwRead: {
      position: 'Above all key moving averages',
      pattern: 'Higher highs, higher lows intact',
      volume: 'Institutional accumulation visible',
      sentiment: 'Strong buyer conviction',
      nextTarget: '$105k psychological level'
    },
    
    // Dominance impact
    dominance: {
      current: 58.4,
      trend: 'stable', // rising, stable, falling
      altcoinImpact: 'Allowing altcoin rotation',
      implication: 'Healthy for overall crypto market'
    }
  },

  // Market Sentiment Indicators
  sentimentIndicators: {
    // Fear & Greed with MW interpretation
    fearGreed: {
      value: 78,
      label: 'Extreme Greed',
      mwTake: 'Time to be selective, not greedy',
      signal: 'CAUTION', // BULLISH, NEUTRAL, CAUTION, BEARISH
      color: '#ffaa00'
    },
    
    // Korean Session Impact
    koreanSession: {
      status: 'ACTIVE_PUMP',
      influence: 92, // 0-100 impact on market
      volume: '+156% vs average',
      topPumps: ['SOL', 'AVAX', 'NEAR'],
      mwNote: 'Korean whales leading the charge again'
    },
    
    // Risk Environment  
    riskEnvironment: {
      overall: 'RISK_ON',
      tradfi: 'Bullish (SPY ATH)',
      crypto: 'Aggressive rotation',
      correlation: 'Decoupling from stocks',
      mwStrategy: 'Full allocation justified'
    },
    
    // Momentum Score
    momentumScore: {
      value: 84,
      components: {
        price: 89, // price momentum
        volume: 85, // volume confirmation  
        breadth: 81, // how many coins participating
        sentiment: 82 // social sentiment
      },
      signal: 'STRONG_BUY'
    }
  },

  // Sector Analysis - MW's Rotation Strategy
  sectorRotation: {
    current: 'L1_SEASON',
    phase: 'Early stage', // Early, Mid, Late, Exhaustion
    
    sectors: [
      {
        name: 'Layer 1s',
        status: 'LEADING', // LEADING, ROTATING, LAGGING, DEAD
        strength: 91,
        topPicks: ['SOL', 'AVAX', 'NEAR'],
        mwNote: 'Primary focus - infrastructure plays'
      },
      {
        name: 'Meme Coins', 
        status: 'ROTATING',
        strength: 78,
        topPicks: ['PEPE', 'WIF', 'BONK'],
        mwNote: 'Secondary plays - Korean influence'
      },
      {
        name: 'DeFi',
        status: 'LAGGING',
        strength: 45,
        topPicks: ['UNI', 'AAVE'],
        mwNote: 'Wait for sector rotation signal'
      },
      {
        name: 'AI Tokens',
        status: 'DEAD',
        strength: 23,
        topPicks: [],
        mwNote: 'Avoid - narrative exhausted'
      }
    ],
    
    nextRotation: {
      expected: 'MEME_COIN_SEASON',
      timeframe: '1-2 weeks',
      catalyst: 'Korean retail FOMO',
      probability: 67
    }
  },

  // Volume & Liquidity Analysis
  volumeAnalysis: {
    overall: 'HEALTHY',
    trend: '+47% vs 30-day average',
    
    breakdown: {
      spot: '68%', // spot vs derivatives
      derivatives: '32%',
      institutional: 'High participation',
      retail: 'FOMO building'
    },
    
    liquidityZones: {
      support: '$99,800 (High liquidity)',
      resistance: '$103,500 (Medium liquidity)',
      nextMajor: '$105,000 (Massive sell wall)'
    },
    
    mwVolumeRead: 'Institutional accumulation with retail following - perfect setup'
  },

  // Market Alerts & Warnings
  marketAlerts: [
    {
      type: 'OPPORTUNITY',
      priority: 'HIGH',
      message: 'L1 altcoins breaking out - MW called this rotation',
      timeframe: 'Active now'
    },
    {
      type: 'WARNING', 
      priority: 'MEDIUM',
      message: 'Fear & Greed at extreme levels - prepare for volatility',
      timeframe: 'Watch next 48h'
    },
    {
      type: 'INFO',
      priority: 'LOW', 
      message: 'Korean session ends in 3 hours - volume may decrease',
      timeframe: 'Next 3 hours'
    }
  ],

  // MW's Current Macro Thesis
  mwMacroThesis: {
    title: 'Long Cycle Acceleration',
    confidence: 94,
    timeframe: 'Q1 2025',
    
    keyPoints: [
      'BTC institutional adoption creating permanent bid',
      'Altcoin season entering explosive phase',
      'Korean institutional money leading global adoption',
      'Traditional finance finally embracing crypto assets',
      'Perfect setup for generational wealth creation'
    ],
    
    strategy: 'MAXIMUM_ALLOCATION',
    riskLevel: 'MEDIUM', // considering position size
    
    targets: {
      btc: '$120k by March',
      altcoinIndex: '+200% from current levels',
      timeline: '90-120 days'
    }
  },

  // Real-time Market State
  currentState: {
    phase: 'BULL_ACCELERATION',
    daysSinceBottom: 47,
    strength: 'INCREASING',
    participation: 'BROAD_BASED',
    
    // What to do right now
    actionItems: [
      'Focus on L1 tokens with Korean volume',
      'Scale into meme coins on any dip', 
      'Avoid DeFi until rotation signal',
      'Take profits above MW resistance levels'
    ]
  },

  // Historical Context
  historicalContext: {
    similarSetups: [
      {
        period: 'Oct 2021',
        similarity: 89,
        outcome: '+340% average altcoin gains',
        duration: '8 weeks'
      },
      {
        period: 'Dec 2020', 
        similarity: 76,
        outcome: '+180% average altcoin gains',
        duration: '12 weeks'  
      }
    ],
    
    mwAccuracy: 'MW called both previous cycles with 90%+ accuracy'
  }
};