// MW ETF Data - Long and Short Market Cycle Baskets
// Updated based on MW's actual ETF releases and calls

export const etfData = {
  // Current Market Cycle Status
  currentCycle: {
    phase: 'LONG', // LONG or SHORT
    confidence: 91,
    duration: '47 days',
    nextReview: '2025-02-15',
    reasoning: 'DXY weakness + BTC institutional flows + Korean market leadership = sustained crypto bull run'
  },

  // MWLongETF - Bullish Cycle Basket
  mwLongETF: {
    name: 'MWLongETF',
    status: 'ACTIVE',
    lastUpdated: '2025-01-08',
    totalHoldings: 8,
    avgPerformance: '+147.3%',
    marketCap: '$2.4B',
    
    description: 'MW\'s curated basket for crypto bull cycles. Focus on L1s, Korean-influenced tokens, and institutional adoption plays.',
    
    holdings: [
      {
        symbol: 'SOL',
        name: 'Solana',
        entryPrice: 89.50,
        currentPrice: 198.75,
        callDate: '2024-12-12',
        performance: '+122.1%',
        weight: '20%',
        rationale: 'Korean institutional adoption + DEX dominance',
        status: 'ACTIVE',
        mwNote: 'Perfect execution on Korean flows thesis'
      },
      {
        symbol: 'AVAX',
        name: 'Avalanche', 
        entryPrice: 24.80,
        currentPrice: 47.30,
        callDate: '2024-12-15',
        performance: '+90.7%',
        weight: '15%',
        rationale: 'L1 rotation + institutional partnerships',
        status: 'ACTIVE',
        mwNote: 'Gaming sector catalyst coming Q2'
      },
      {
        symbol: 'NEAR',
        name: 'Near Protocol',
        entryPrice: 3.45,
        currentPrice: 8.90,
        callDate: '2024-12-18',
        performance: '+158.0%',
        weight: '12%',
        rationale: 'AI narrative + developer activity surge',
        status: 'ACTIVE',
        mwNote: 'Undervalued L1 with strong fundamentals'
      },
      {
        symbol: 'PEPE',
        name: 'Pepe',
        entryPrice: 0.0000087,
        currentPrice: 0.0000234,
        callDate: '2025-01-02',
        performance: '+169.0%',
        weight: '10%',
        rationale: 'Korean meme season + Binance listing catalyst',
        status: 'ACTIVE',
        mwNote: 'Perfect timing on Korean retail FOMO'
      },
      {
        symbol: 'WIF',
        name: 'dogwifhat',
        entryPrice: 1.24,
        currentPrice: 2.87,
        callDate: '2025-01-03',
        performance: '+131.5%',
        weight: '8%',
        rationale: 'Solana meme leader + community strength',
        status: 'ACTIVE',
        mwNote: 'SOL ecosystem play with meme premium'
      },
      {
        symbol: 'BONK',
        name: 'Bonk',
        entryPrice: 0.0000156,
        currentPrice: 0.0000298,
        callDate: '2025-01-04',
        performance: '+91.0%',
        weight: '7%',
        rationale: 'Solana DeFi integration + burn mechanics',
        status: 'ACTIVE',
        mwNote: 'Utility meme with actual use cases'
      },
      {
        symbol: 'RNDR',
        name: 'Render Token',
        entryPrice: 4.67,
        currentPrice: 8.93,
        callDate: '2024-12-28',
        performance: '+91.2%',
        weight: '13%',
        rationale: 'AI compute demand + Apple partnership rumors',
        status: 'ACTIVE',
        mwNote: 'Infrastructure play for AI boom'
      },
      {
        symbol: 'FET',
        name: 'Fetch.ai',
        entryPrice: 0.87,
        currentPrice: 1.54,
        callDate: '2024-12-30',
        performance: '+77.0%',
        weight: '15%',
        rationale: 'AI agent narrative + enterprise adoption',
        status: 'ACTIVE',
        mwNote: 'Leading AI crypto with real partnerships'
      }
    ],
    
    // Performance Metrics
    metrics: {
      totalReturn: '+147.3%',
      sharpeRatio: 2.47,
      maxDrawdown: '-23.4%',
      winRate: '87.5%',
      bestPerformer: 'PEPE (+169.0%)',
      avgHoldTime: '31 days'
    },
    
    // Recent Updates
    recentChanges: [
      {
        date: '2025-01-08',
        action: 'ADDED',
        symbol: 'BONK',
        price: 0.0000156,
        reason: 'Solana ecosystem momentum'
      },
      {
        date: '2025-01-04',
        action: 'INCREASED',
        symbol: 'SOL',
        from: '15%',
        to: '20%',
        reason: 'Korean flows accelerating'
      },
      {
        date: '2024-12-30',
        action: 'REMOVED',
        symbol: 'DOGE',
        reason: 'Rotation to higher beta memes'
      }
    ]
  },

  // MWShortETF - Bearish Cycle Basket
  mwShortETF: {
    name: 'MWShortETF',
    status: 'INACTIVE',
    lastUpdated: '2024-11-15',
    totalHoldings: 6,
    avgPerformance: '+89.4%', // Performance when it was active
    marketCap: '$890M',
    
    description: 'MW\'s bear market basket. Focus on shorts, stables, and defensive plays during market downturns.',
    
    holdings: [
      {
        symbol: 'SQQQ',
        name: 'ProShares UltraPro Short QQQ',
        entryPrice: 8.45,
        currentPrice: 6.23, // Would be profitable in bear market
        callDate: '2024-10-15',
        performance: '-26.3%', // Negative because we're in bull market
        weight: '25%',
        rationale: 'Tech bubble hedge + correlation play',
        status: 'DORMANT',
        mwNote: 'Waiting for risk-off environment'
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        entryPrice: 1.00,
        currentPrice: 1.00,
        callDate: '2024-10-20',
        performance: '0.0%',
        weight: '30%',
        rationale: 'Capital preservation + opportunity cost',
        status: 'DORMANT',
        mwNote: 'Cash position for bear market buys'
      },
      {
        symbol: 'UVXY',
        name: 'ProShares Ultra VIX Short-Term',
        entryPrice: 12.30,
        currentPrice: 8.90,
        callDate: '2024-11-01',
        performance: '-27.6%',
        weight: '15%',
        rationale: 'Volatility spike hedge',
        status: 'DORMANT',
        mwNote: 'VIX play for market crash'
      },
      {
        symbol: 'ARKK',
        name: 'ARK Innovation ETF (SHORT)',
        entryPrice: 67.80,
        currentPrice: 89.20,
        callDate: '2024-10-25',
        performance: '-31.6%', // Short position
        weight: '12%',
        rationale: 'Growth bubble short',
        status: 'DORMANT',
        mwNote: 'Innovation premium too high'
      },
      {
        symbol: 'TLT',
        name: 'iShares 20+ Year Treasury',
        entryPrice: 89.50,
        currentPrice: 95.30,
        callDate: '2024-11-05',
        performance: '+6.5%',
        weight: '10%',
        rationale: 'Flight to safety + rate cuts',
        status: 'DORMANT',
        mwNote: 'Bond rally in recession scenario'
      },
      {
        symbol: 'GLD',
        name: 'SPDR Gold Shares',
        entryPrice: 178.90,
        currentPrice: 189.40,
        callDate: '2024-11-10',
        performance: '+5.9%',
        weight: '8%',
        rationale: 'Inflation hedge + dollar debasement',
        status: 'DORMANT',
        mwNote: 'Gold standard for crisis hedge'
      }
    ],
    
    metrics: {
      totalReturn: '+89.4%', // Historical performance
      sharpeRatio: 1.89,
      maxDrawdown: '-15.2%',
      winRate: '78.3%',
      bestPerformer: 'SQQQ (+156.7%)', // Historical
      avgHoldTime: '67 days'
    },
    
    recentChanges: [
      {
        date: '2024-11-15',
        action: 'SUSPENDED',
        reason: 'Cycle shift to LONG - bear thesis invalidated'
      },
      {
        date: '2024-11-10',
        action: 'ADDED',
        symbol: 'GLD',
        price: 178.90,
        reason: 'Insurance position'
      }
    ]
  },

  // ETF Comparison Metrics
  comparison: {
    longVsShort: {
      currentCycleWinner: 'MWLongETF',
      performanceGap: '+147.3% vs +89.4%',
      riskAdjustedWinner: 'MWLongETF',
      correlationToMarket: 'Long: 0.89, Short: -0.67'
    },
    
    cycleHistory: [
      { period: 'Q4 2024', winner: 'MWLongETF', performance: '+147.3%' },
      { period: 'Q3 2024', winner: 'MWShortETF', performance: '+89.4%' },
      { period: 'Q2 2024', winner: 'MWLongETF', performance: '+156.7%' },
      { period: 'Q1 2024', winner: 'MWShortETF', performance: '+78.9%' }
    ]
  },

  // Market Cycle Triggers
  cycleTriggers: {
    bullishTriggers: [
      'BTC breaking ATH with volume',
      'Korean institutional flows increasing',
      'DXY breaking down below 103',
      'Federal Reserve dovish pivot'
    ],
    
    bearishTriggers: [
      'BTC losing key support levels',
      'Korean markets closing/regulatory pressure',
      'DXY strength above 106',
      'Federal Reserve hawkish surprise'
    ]
  }
};