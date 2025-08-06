// MW Monitoring Data Models and Mock Data
// Simple data structures for livestream and X correlation tracking

// Enhanced Token Analysis - MW Technical Methodology Focus
// Includes MW Indicator (SMA21/EMA34 Channel) analysis across multiple timeframes
export const tokenHeatData = [
  {
    id: 'SOL',
    symbol: 'SOL',
    name: 'Solana',
    currentPrice: 198.75,
    change24h: 8.47,
    heatScore: 98, // Based on MW methodology
    confidence: 96, // AI confidence + MW agreement
    mwRating: 'STRONG_BUY', // STRONG_BUY, BUY, HOLD, SELL, STRONG_SELL
    
    // MW Indicator Channel Analysis (SMA21/EMA34)
    mwIndicator: {
      // Multi-timeframe channel position
      timeframes: {
        '15m': {
          channelPosition: '+12.4%', // 12.4% above channel
          status: 'BREAKOUT_CONFIRMED', // BREAKOUT_CONFIRMED, BREAKDOWN, CHANNEL_BOUNCE, IN_CHANNEL
          sma21: 176.80,
          ema34: 182.30,
          signal: 'STRONG_LONG',
          peakDeviation: false, // Not at extreme deviation
          valleyDeviation: false
        },
        '1h': {
          channelPosition: '+8.7%',
          status: 'BREAKOUT_CONFIRMED',
          sma21: 184.20,
          ema34: 189.40,
          signal: 'LONG',
          peakDeviation: false,
          valleyDeviation: false
        },
        '4h': {
          channelPosition: '+5.2%',
          status: 'CHANNEL_BREAKOUT_TEST',
          sma21: 188.90,
          ema34: 191.20,
          signal: 'LONG',
          peakDeviation: false,
          valleyDeviation: false
        }
      },
      overallSignal: 'MASSIVE_BREAKOUT', // All timeframes confirm breakout
      channelBreakConfirmation: 'CONFIRMED_ALL_TIMEFRAMES'
    },

    // Key Technical Indicators MW watches
    technicals: {
      adx: {
        value: 67.4, // Strong trend above 25
        trend: 'STRONG_TREND', // WEAK_TREND, TREND, STRONG_TREND
        signal: 'BULLISH_MOMENTUM'
      },
      mfi: {
        value: 78.2, // Money Flow Index
        level: 'HIGH', // LOW, MEDIUM, HIGH, EXTREME_HIGH
        signal: 'INSTITUTIONAL_BUYING'
      },
      volume: {
        current: '2.4B', // Current 24h volume
        avgRatio: 3.47, // 347% above average - HUGE
        signal: 'MASSIVE_VOLUME',
        koreanVolume: 'LEADING' // Korean market leading
      },
      fundingRate: {
        current: 0.0847, // 8.47% - very high
        level: 'EXTREME_HIGH', // LOW, MEDIUM, HIGH, EXTREME_HIGH
        signal: 'EUPHORIC_BULLISH', // Market paying premium to go long
        trend: 'RISING'
      }
    },

    // MW's Position Analysis
    position: {
      entry: 89.50, // His ETF entry
      current: 198.75,
      performance: '+122.1%',
      size: '20%', // ETF weight
      conviction: 'MAXIMUM',
      action: 'HOLD_ADD_DIPS'
    },

    // Mentions and Sentiment
    mentions: {
      livestream: 47, // Mentioned 47 times recently
      xPosts: 23,
      totalToday: 70,
      sentiment: 'EXTREMELY_BULLISH'
    },

    lastMentioned: '12 seconds ago',
    mwLatestTake: "SOL looking absolutely perfect. This is the Korean flow leader. Breaking out on massive volume - exactly what we want to see.",
    trend: 'rising',
    
    keyInsights: [
      'Breakout confirmed across ALL timeframes - massive signal',
      'ADX showing strongest trend strength in weeks',
      'Funding rate at extreme high - market paying premium',
      'Korean institutional flows leading the charge',
      'MW\'s top conviction play - 20% ETF weight'
    ]
  },
  
  {
    id: 'PEPE',
    symbol: 'PEPE',
    name: 'Pepe',
    currentPrice: 0.0000234,
    change24h: 15.83,
    heatScore: 92,
    confidence: 89,
    mwRating: 'STRONG_BUY',
    
    mwIndicator: {
      timeframes: {
        '15m': {
          channelPosition: '+18.2%', // Way above channel - extreme
          status: 'EXTREME_BREAKOUT',
          sma21: 0.0000198,
          ema34: 0.0000201,
          signal: 'STRONG_LONG',
          peakDeviation: true, // At extreme - watch for reversal
          valleyDeviation: false
        },
        '1h': {
          channelPosition: '+14.6%',
          status: 'BREAKOUT_CONFIRMED',
          sma21: 0.0000205,
          ema34: 0.0000208,
          signal: 'LONG',
          peakDeviation: true,
          valleyDeviation: false
        },
        '4h': {
          channelPosition: '+9.1%',
          status: 'BREAKOUT_TEST',
          sma21: 0.0000214,
          ema34: 0.0000216,
          signal: 'LONG',
          peakDeviation: false,
          valleyDeviation: false
        }
      },
      overallSignal: 'PARABOLIC_BREAKOUT',
      channelBreakConfirmation: 'CONFIRMED_BUT_EXTENDED'
    },

    technicals: {
      adx: {
        value: 72.1,
        trend: 'STRONG_TREND',
        signal: 'PARABOLIC_MOMENTUM'
      },
      mfi: {
        value: 89.4, // Very high - potential top signal
        level: 'EXTREME_HIGH',
        signal: 'RETAIL_FOMO_PEAK'
      },
      volume: {
        current: '847M',
        avgRatio: 5.23, // 523% above average
        signal: 'MEME_MANIA',
        koreanVolume: 'MASSIVE'
      },
      fundingRate: {
        current: 0.1247,
        level: 'EXTREME_HIGH',
        signal: 'EUPHORIC_TOP_SIGNAL',
        trend: 'PARABOLIC'
      }
    },

    position: {
      entry: 0.0000087,
      current: 0.0000234,
      performance: '+169.0%',
      size: '10%',
      conviction: 'HIGH',
      action: 'SCALE_OUT_STRENGTH'
    },

    mentions: {
      livestream: 31,
      xPosts: 45,
      totalToday: 76,
      sentiment: 'MANIC_BULLISH'
    },

    lastMentioned: '3 minutes ago',
    mwLatestTake: "PEPE going parabolic as predicted. Korean retail FOMO is insane. Start taking profits on strength - this is getting extended.",
    trend: 'rising',
    
    keyInsights: [
      'EXTREME deviation above channel - reversal risk high',
      'Funding rate at euphoric levels - top signal',
      'Korean retail FOMO driving parabolic move',
      'MFI showing extreme overbought - scale out',
      'Perfect meme season leader but extended'
    ]
  },

  {
    id: 'AVAX',
    symbol: 'AVAX',
    name: 'Avalanche',
    currentPrice: 47.30,
    change24h: 4.12,
    heatScore: 78,
    confidence: 84,
    mwRating: 'BUY',
    
    mwIndicator: {
      timeframes: {
        '15m': {
          channelPosition: '+2.8%',
          status: 'CHANNEL_BREAKOUT_ATTEMPT',
          sma21: 45.90,
          ema34: 46.15,
          signal: 'LONG',
          peakDeviation: false,
          valleyDeviation: false
        },
        '1h': {
          channelPosition: '+1.2%',
          status: 'CHANNEL_BOUNCE',
          sma21: 46.50,
          ema34: 46.70,
          signal: 'NEUTRAL_LONG',
          peakDeviation: false,
          valleyDeviation: false
        },
        '4h': {
          channelPosition: '-0.4%',
          status: 'IN_CHANNEL',
          sma21: 47.20,
          ema34: 47.50,
          signal: 'NEUTRAL',
          peakDeviation: false,
          valleyDeviation: false
        }
      },
      overallSignal: 'SETUP_BUILDING',
      channelBreakConfirmation: 'PENDING_CONFIRMATION'
    },

    technicals: {
      adx: {
        value: 28.4,
        trend: 'TREND',
        signal: 'MOMENTUM_BUILDING'
      },
      mfi: {
        value: 52.7,
        level: 'MEDIUM',
        signal: 'HEALTHY_ACCUMULATION'
      },
      volume: {
        current: '234M',
        avgRatio: 1.34,
        signal: 'NORMAL',
        koreanVolume: 'MODERATE'
      },
      fundingRate: {
        current: 0.0234,
        level: 'MEDIUM',
        signal: 'NEUTRAL_OPTIMISTIC',
        trend: 'STABLE'
      }
    },

    position: {
      entry: 24.80,
      current: 47.30,
      performance: '+90.7%',
      size: '15%',
      conviction: 'MEDIUM_HIGH',
      action: 'HOLD_ADD_BREAKOUT'
    },

    mentions: {
      livestream: 18,
      xPosts: 12,
      totalToday: 30,
      sentiment: 'CAUTIOUSLY_BULLISH'
    },

    lastMentioned: '18 minutes ago',
    mwLatestTake: "AVAX setting up nicely. Not quite ready yet but watch for channel breakout confirmation. Perfect L1 rotation candidate.",
    trend: 'stable',
    
    keyInsights: [
      'Setting up for channel breakout - need confirmation',
      'ADX showing momentum building but not extended',
      'Healthy MFI levels - room to run higher',
      'L1 rotation candidate - gaming catalyst coming',
      'Good risk/reward at current levels'
    ]
  },

  {
    id: 'WIF',
    symbol: 'WIF',
    name: 'dogwifhat',
    currentPrice: 2.87,
    change24h: 12.45,
    heatScore: 85,
    confidence: 91,
    mwRating: 'BUY',
    
    mwIndicator: {
      timeframes: {
        '15m': {
          channelPosition: '+7.3%',
          status: 'BREAKOUT_CONFIRMED',
          sma21: 2.68,
          ema34: 2.71,
          signal: 'LONG',
          peakDeviation: false,
          valleyDeviation: false
        },
        '1h': {
          channelPosition: '+4.9%',
          status: 'BREAKOUT_TEST',
          sma21: 2.73,
          ema34: 2.75,
          signal: 'LONG',
          peakDeviation: false,
          valleyDeviation: false
        },
        '4h': {
          channelPosition: '+1.8%',
          status: 'CHANNEL_BOUNCE',
          sma21: 2.81,
          ema34: 2.83,
          signal: 'NEUTRAL_LONG',
          peakDeviation: false,
          valleyDeviation: false
        }
      },
      overallSignal: 'HEALTHY_BREAKOUT',
      channelBreakConfirmation: 'BUILDING_CONFIRMATION'
    },

    technicals: {
      adx: {
        value: 45.2,
        trend: 'STRONG_TREND',
        signal: 'STRONG_MOMENTUM'
      },
      mfi: {
        value: 67.8,
        level: 'HIGH',
        signal: 'STRONG_BUYING'
      },
      volume: {
        current: '156M',
        avgRatio: 2.47,
        signal: 'HIGH_INTEREST',
        koreanVolume: 'STRONG'
      },
      fundingRate: {
        current: 0.0456,
        level: 'MEDIUM_HIGH',
        signal: 'BULLISH_BIAS',
        trend: 'RISING'
      }
    },

    position: {
      entry: 1.24,
      current: 2.87,
      performance: '+131.5%',
      size: '8%',
      conviction: 'HIGH',
      action: 'HOLD_STRONG'
    },

    mentions: {
      livestream: 22,
      xPosts: 18,
      totalToday: 40,
      sentiment: 'BULLISH'
    },

    lastMentioned: '7 minutes ago',
    mwLatestTake: "WIF breaking out beautifully. This is the Solana meme leader. Perfect follow-through on SOL ecosystem thesis.",
    trend: 'rising',
    
    keyInsights: [
      'Clean channel breakout - healthy not extended',
      'Strong ADX momentum without euphoria',
      'SOL ecosystem leader riding main narrative',
      'Korean interest building - follow SOL flows',
      'Good position size with more upside potential'
    ]
  },

  {
    id: 'NEAR',
    symbol: 'NEAR',
    name: 'Near Protocol',
    currentPrice: 8.90,
    change24h: 6.78,
    heatScore: 71,
    confidence: 79,
    mwRating: 'HOLD',
    
    mwIndicator: {
      timeframes: {
        '15m': {
          channelPosition: '-2.1%',
          status: 'BELOW_CHANNEL',
          sma21: 9.08,
          ema34: 9.12,
          signal: 'NEUTRAL',
          peakDeviation: false,
          valleyDeviation: true // Near valley - potential bounce
        },
        '1h': {
          channelPosition: '-3.8%',
          status: 'CHANNEL_RETEST',
          sma21: 9.15,
          ema34: 9.25,
          signal: 'NEUTRAL_WEAK',
          peakDeviation: false,
          valleyDeviation: true
        },
        '4h': {
          channelPosition: '+0.8%',
          status: 'IN_CHANNEL',
          sma21: 8.82,
          ema34: 8.85,
          signal: 'NEUTRAL',
          peakDeviation: false,
          valleyDeviation: false
        }
      },
      overallSignal: 'WAITING_SETUP',
      channelBreakConfirmation: 'NEEDS_RECLAIM'
    },

    technicals: {
      adx: {
        value: 18.7,
        trend: 'WEAK_TREND',
        signal: 'CONSOLIDATION'
      },
      mfi: {
        value: 34.2,
        level: 'LOW',
        signal: 'POTENTIAL_ACCUMULATION'
      },
      volume: {
        current: '78M',
        avgRatio: 0.89,
        signal: 'BELOW_AVERAGE',
        koreanVolume: 'LIGHT'
      },
      fundingRate: {
        current: -0.0067,
        level: 'LOW',
        signal: 'NEUTRAL_BEARISH',
        trend: 'FLAT'
      }
    },

    position: {
      entry: 3.45,
      current: 8.90,
      performance: '+158.0%',
      size: '12%',
      conviction: 'MEDIUM',
      action: 'HOLD_WATCH_SETUP'
    },

    mentions: {
      livestream: 8,
      xPosts: 5,
      totalToday: 13,
      sentiment: 'NEUTRAL'
    },

    lastMentioned: '45 minutes ago',
    mwLatestTake: "NEAR needs to reclaim the channel. Still up huge but waiting for AI narrative to re-emerge. Patience here.",
    trend: 'stable',
    
    keyInsights: [
      'Below channel on lower timeframes - need reclaim',
      'Valley deviation suggests potential bounce zone',
      'ADX weak - needs catalyst to restart momentum',
      'Low MFI could be accumulation opportunity',
      'AI narrative dormant - waiting for re-emergence'
    ]
  }
];

// Livestream Data - tracks daily streams and analysis
export const livestreamData = {
  today: {
    id: 'stream_20241215',
    title: 'Crypto Ready to Pump? Korean Session Analysis!',
    url: 'https://youtube.com/watch?v=example',
    youtubeId: 'example',
    date: '2024-12-15',
    duration: '1h 23m',
    durationSeconds: 4980,
    status: 'processed', // live, processing, processed
    transcriptStatus: 'complete',
    viewerCount: 2847,
    thumbnail: 'https://img.youtube.com/vi/example/maxresdefault.jpg',
    
    // AI Analysis Results
    analysis: {
      tokensDiscussed: 8,
      keyThemes: ['Korean session', 'Altcoin rotation', 'Meme season'],
      sentiment: 'bullish',
      confidence: 87,
      actionableSignals: 5,
      overallRating: 9.2
    },
    
    // AI-Discovered Key Moments
    keyMoments: [
      {
        id: 'moment_1',
        timestamp: '2:08',
        timestampSeconds: 128,
        type: 'MACRO_VIEW',
        title: 'MACRO Market Analysis Begins',
        description: 'MW starts comprehensive macro market breakdown',
        importance: 'HIGH',
        tokens: ['BTC', 'ETH'],
        sentiment: 'neutral',
        screenshotUrl: '/screenshots/stream_20241215/02_08.jpg'
      },
      {
        id: 'moment_2', 
        timestamp: '5:04',
        timestampSeconds: 304,
        type: 'TOKEN_DISCOVERY',
        title: 'AVAX Analysis - Bearish Sentiment',
        description: 'Deep dive into AVAX chart structure, bearish signals identified',
        importance: 'HIGH',
        tokens: ['AVAX'],
        sentiment: 'bearish',
        screenshotUrl: '/screenshots/stream_20241215/05_04.jpg'
      },
      {
        id: 'moment_3',
        timestamp: '12:34',
        timestampSeconds: 754,
        type: 'TOKEN_DISCOVERY',
        title: 'SOL Breakout Pattern Recognition',
        description: 'Textbook breakout pattern identified on SOL chart',
        importance: 'CRITICAL',
        tokens: ['SOL'],
        sentiment: 'bullish',
        screenshotUrl: '/screenshots/stream_20241215/12_34.jpg'
      },
      {
        id: 'moment_4',
        timestamp: '23:45',
        timestampSeconds: 1425,
        type: 'TRADING_SIGNAL',
        title: 'Korean Session PEPE Entry Signal',
        description: 'Korean traders moving into PEPE, entry signal given',
        importance: 'CRITICAL',
        tokens: ['PEPE'],
        sentiment: 'bullish',
        screenshotUrl: '/screenshots/stream_20241215/23_45.jpg'
      }
    ],
    
    // Token-Specific Screenshot Collections
    tokenCollections: {
      'SOL': {
        totalScreenshots: 8,
        keyTimestamps: ['12:34', '23:45', '34:12', '45:23'],
        screenshots: [
          {
            timestamp: '12:34',
            url: '/screenshots/stream_20241215/sol/12_34.jpg',
            description: 'Breakout pattern formation',
            importance: 'CRITICAL'
          },
          {
            timestamp: '23:45',
            url: '/screenshots/stream_20241215/sol/23_45.jpg', 
            description: 'Post-breakout confirmation',
            importance: 'HIGH'
          },
          {
            timestamp: '34:12',
            url: '/screenshots/stream_20241215/sol/34_12.jpg',
            description: 'Volume analysis',
            importance: 'MEDIUM'
          }
        ]
      },
      'PEPE': {
        totalScreenshots: 6,
        keyTimestamps: ['5:04', '23:45', '56:12'],
        screenshots: [
          {
            timestamp: '5:04',
            url: '/screenshots/stream_20241215/pepe/05_04.jpg',
            description: 'Korean session setup analysis',
            importance: 'HIGH'
          },
          {
            timestamp: '23:45', 
            url: '/screenshots/stream_20241215/pepe/23_45.jpg',
            description: 'Entry signal confirmation',
            importance: 'CRITICAL'
          }
        ]
      },
      'AVAX': {
        totalScreenshots: 4,
        keyTimestamps: ['5:04', '18:23'],
        screenshots: [
          {
            timestamp: '5:04',
            url: '/screenshots/stream_20241215/avax/05_04.jpg',
            description: 'Bearish structure analysis',
            importance: 'HIGH'
          }
        ]
      }
    },
    
    // Raw minute-by-minute data
    rawData: {
      totalMinuteClips: 83,
      screenshotsPerMinute: 1,
      transcriptSegments: 83,
      clips: [
        {
          minute: 0,
          timestamp: '0:00-1:00',
          screenshotUrl: '/screenshots/stream_20241215/raw/00_00.jpg',
          transcriptSegment: 'Welcome everyone to today\'s stream, we\'re going to dive into...',
          tokensDiscussed: [],
          aiNotes: 'Stream introduction, no trading content'
        },
        {
          minute: 2,
          timestamp: '2:00-3:00', 
          screenshotUrl: '/screenshots/stream_20241215/raw/02_00.jpg',
          transcriptSegment: 'Let\'s look at the macro picture first. Bitcoin is showing...',
          tokensDiscussed: ['BTC'],
          aiNotes: 'Beginning of macro analysis section'
        },
        {
          minute: 5,
          timestamp: '5:00-6:00',
          screenshotUrl: '/screenshots/stream_20241215/raw/05_00.jpg', 
          transcriptSegment: 'AVAX here is looking quite bearish to me. The structure...',
          tokensDiscussed: ['AVAX'],
          aiNotes: 'AVAX bearish analysis begins - key moment'
        }
      ]
    },
    
    // Timeline of token discussions
    tokenTimeline: [
      {
        startTime: '2:08',
        endTime: '4:30',
        duration: '2m 22s',
        tokens: ['BTC', 'ETH'],
        topic: 'Macro Market Analysis',
        sentiment: 'neutral',
        keyPoints: [
          'Bitcoin holding key support levels',
          'ETH showing relative strength', 
          'Overall market structure analysis'
        ]
      },
      {
        startTime: '5:04',
        endTime: '8:45',
        duration: '3m 41s', 
        tokens: ['AVAX'],
        topic: 'AVAX Bearish Structure',
        sentiment: 'bearish',
        keyPoints: [
          'Bearish divergence on indicators',
          'Key support level breakdown',
          'Risk management considerations'
        ]
      },
      {
        startTime: '12:34',
        endTime: '18:20',
        duration: '5m 46s',
        tokens: ['SOL'],
        topic: 'SOL Breakout Analysis', 
        sentiment: 'bullish',
        keyPoints: [
          'Textbook breakout pattern',
          'Volume confirmation', 
          'Target levels identified'
        ]
      },
      {
        startTime: '23:45',
        endTime: '28:10',
        duration: '4m 25s',
        tokens: ['PEPE'],
        topic: 'Korean Session PEPE Setup',
        sentiment: 'bullish', 
        keyPoints: [
          'Korean trader interest identified',
          'Entry signal confirmation',
          'Risk/reward assessment'
        ]
      }
    ],
    
    // Top token mentions from this stream
    topTokens: [
      { symbol: 'SOL', mentions: 12, sentiment: 'bullish', totalTimeDiscussed: '8m 32s' },
      { symbol: 'PEPE', mentions: 8, sentiment: 'bullish', totalTimeDiscussed: '6m 45s' },
      { symbol: 'AVAX', mentions: 6, sentiment: 'bearish', totalTimeDiscussed: '5m 20s' },
      { symbol: 'ONDO', mentions: 5, sentiment: 'neutral', totalTimeDiscussed: '3m 15s' }
    ],
    
    keyQuotes: [
      {
        timestamp: '23:45',
        quote: 'SOL is looking absolutely pristine here, this breakout pattern is textbook',
        tokens: ['SOL'],
        importance: 'HIGH',
        context: 'Technical analysis'
      },
      {
        timestamp: '45:12', 
        quote: 'Korean traders are moving into PEPE again, watch this space',
        tokens: ['PEPE'],
        importance: 'CRITICAL',
        context: 'Trading signal'
      },
      {
        timestamp: '5:04',
        quote: 'AVAX structure is looking quite weak here, I\'m not interested in this setup',
        tokens: ['AVAX'], 
        importance: 'HIGH',
        context: 'Bearish analysis'
      }
    ]
  },
  
  recent: [
    {
      id: 'stream_20241214',
      title: 'Altcoins Finding Bullish Momentum!',
      url: 'https://youtube.com/watch?v=bullish_momentum',
      youtubeId: 'bullish_momentum',
      date: '2024-12-14',
      duration: '1h 15m',
      durationSeconds: 4500,
      status: 'processed',
      transcriptStatus: 'complete',
      viewerCount: 3124,
      thumbnail: 'https://img.youtube.com/vi/bullish_momentum/maxresdefault.jpg',
      
      analysis: {
        tokensDiscussed: 6,
        keyThemes: ['Altcoin rotation', 'Bullish momentum', 'Market recovery'],
        sentiment: 'bullish',
        confidence: 92,
        actionableSignals: 7,
        overallRating: 9.1
      },
      
      keyMoments: [
        {
          id: 'moment_1',
          timestamp: '3:22',
          timestampSeconds: 202,
          type: 'MACRO_VIEW',
          title: 'Market Recovery Analysis',
          description: 'Comprehensive breakdown of altcoin market recovery patterns',
          importance: 'HIGH',
          tokens: ['BTC', 'ETH'],
          sentiment: 'bullish',
          screenshotUrl: '/screenshots/stream_20241214/03_22.jpg'
        },
        {
          id: 'moment_2',
          timestamp: '8:45',
          timestampSeconds: 525,
          type: 'TOKEN_DISCOVERY',
          title: 'AVAX Momentum Building',
          description: 'AVAX showing strong technical setup with volume confirmation',
          importance: 'CRITICAL',
          tokens: ['AVAX'],
          sentiment: 'bullish',
          screenshotUrl: '/screenshots/stream_20241214/08_45.jpg'
        },
        {
          id: 'moment_3',
          timestamp: '18:30',
          timestampSeconds: 1110,
          type: 'TRADING_SIGNAL',
          title: 'Layer 1 Rotation Signal',
          description: 'Strong rotation into Layer 1 tokens, entry signals given',
          importance: 'CRITICAL',
          tokens: ['AVAX', 'SOL', 'ADA'],
          sentiment: 'bullish',
          screenshotUrl: '/screenshots/stream_20241214/18_30.jpg'
        }
      ],
      
      tokenCollections: {
        'AVAX': {
          totalScreenshots: 12,
          keyTimestamps: ['8:45', '18:30', '32:15', '45:10'],
          screenshots: [
            {
              timestamp: '8:45',
              url: '/screenshots/stream_20241214/avax/08_45.jpg',
              description: 'Momentum building with volume spike',
              importance: 'CRITICAL'
            },
            {
              timestamp: '18:30',
              url: '/screenshots/stream_20241214/avax/18_30.jpg',
              description: 'Breakout confirmation pattern',
              importance: 'HIGH'
            }
          ]
        },
        'SOL': {
          totalScreenshots: 8,
          keyTimestamps: ['18:30', '25:45', '38:20'],
          screenshots: [
            {
              timestamp: '18:30',
              url: '/screenshots/stream_20241214/sol/18_30.jpg',
              description: 'Layer 1 rotation setup',
              importance: 'HIGH'
            }
          ]
        }
      },
      
      rawData: {
        totalMinuteClips: 75,
        screenshotsPerMinute: 1,
        transcriptSegments: 75,
        clips: [
          {
            minute: 0,
            timestamp: '0:00-1:00',
            screenshotUrl: '/screenshots/stream_20241214/raw/00_00.jpg',
            transcriptSegment: 'Welcome back traders, today we\'re looking at some incredible altcoin momentum...',
            tokensDiscussed: [],
            aiNotes: 'Stream introduction, market overview'
          },
          {
            minute: 8,
            timestamp: '8:00-9:00',
            screenshotUrl: '/screenshots/stream_20241214/raw/08_00.jpg',
            transcriptSegment: 'AVAX is absolutely flying right now, this momentum is exactly what we were waiting for...',
            tokensDiscussed: ['AVAX'],
            aiNotes: 'AVAX momentum analysis begins - key trading opportunity identified'
          }
        ]
      },
      
      tokenTimeline: [
        {
          startTime: '3:22',
          endTime: '7:10',
          duration: '3m 48s',
          tokens: ['BTC', 'ETH'],
          topic: 'Market Recovery Overview',
          sentiment: 'bullish',
          keyPoints: [
            'Bitcoin holding strong support levels',
            'ETH showing relative strength vs BTC',
            'Altcoin recovery patterns emerging'
          ]
        },
        {
          startTime: '8:45',
          endTime: '15:30',
          duration: '6m 45s',
          tokens: ['AVAX'],
          topic: 'AVAX Bullish Momentum',
          sentiment: 'bullish',
          keyPoints: [
            'Strong volume confirmation on breakout',
            'Technical setup looking pristine',
            'Target levels clearly defined'
          ]
        }
      ],
      
      topTokens: [
        { symbol: 'AVAX', mentions: 15, sentiment: 'bullish', totalTimeDiscussed: '12m 30s' },
        { symbol: 'SOL', mentions: 8, sentiment: 'bullish', totalTimeDiscussed: '6m 15s' },
        { symbol: 'ADA', mentions: 6, sentiment: 'bullish', totalTimeDiscussed: '4m 45s' },
        { symbol: 'DOT', mentions: 4, sentiment: 'neutral', totalTimeDiscussed: '3m 20s' }
      ],
      
      keyQuotes: [
        {
          timestamp: '8:45',
          quote: 'AVAX is absolutely flying right now, this momentum is exactly what we were waiting for',
          tokens: ['AVAX'],
          importance: 'CRITICAL',
          context: 'Bullish momentum confirmation'
        },
        {
          timestamp: '18:30',
          quote: 'We\'re seeing a clear rotation into Layer 1s, this is textbook market behavior',
          tokens: ['AVAX', 'SOL', 'ADA'],
          importance: 'HIGH',
          context: 'Market rotation analysis'
        }
      ]
    },
    {
      id: 'stream_20241213',
      title: 'What Altcoins Are Ready to Trade Today?',
      url: 'https://youtube.com/watch?v=altcoins_ready',
      youtubeId: 'altcoins_ready',
      date: '2024-12-13',
      duration: '1h 32m',
      durationSeconds: 5520,
      status: 'processed',
      transcriptStatus: 'complete',
      viewerCount: 2856,
      thumbnail: 'https://img.youtube.com/vi/altcoins_ready/maxresdefault.jpg',
      
      analysis: {
        tokensDiscussed: 9,
        keyThemes: ['Altcoin selection', 'Trading setups', 'Risk management'],
        sentiment: 'bullish',
        confidence: 89,
        actionableSignals: 6,
        overallRating: 8.8
      },
      
      keyMoments: [
        {
          id: 'moment_1',
          timestamp: '4:15',
          timestampSeconds: 255,
          type: 'TOKEN_DISCOVERY',
          title: 'SOL Setup Analysis',
          description: 'Comprehensive SOL technical analysis and entry points',
          importance: 'CRITICAL',
          tokens: ['SOL'],
          sentiment: 'bullish',
          screenshotUrl: '/screenshots/stream_20241213/04_15.jpg'
        },
        {
          id: 'moment_2',
          timestamp: '12:30',
          timestampSeconds: 750,
          type: 'TRADING_SIGNAL',
          title: 'Meme Coin Rotation Signal',
          description: 'Identifying meme coin rotation opportunities',
          importance: 'HIGH',
          tokens: ['PEPE', 'WIF', 'BONK'],
          sentiment: 'bullish',
          screenshotUrl: '/screenshots/stream_20241213/12_30.jpg'
        },
        {
          id: 'moment_3',
          timestamp: '25:45',
          timestampSeconds: 1545,
          type: 'MACRO_VIEW',
          title: 'Risk Management Framework',
          description: 'Detailed risk management strategies for altcoin trading',
          importance: 'HIGH',
          tokens: [],
          sentiment: 'neutral',
          screenshotUrl: '/screenshots/stream_20241213/25_45.jpg'
        }
      ],
      
      tokenCollections: {
        'SOL': {
          totalScreenshots: 14,
          keyTimestamps: ['4:15', '16:20', '28:45', '42:10'],
          screenshots: [
            {
              timestamp: '4:15',
              url: '/screenshots/stream_20241213/sol/04_15.jpg',
              description: 'Perfect setup formation on daily chart',
              importance: 'CRITICAL'
            },
            {
              timestamp: '16:20',
              url: '/screenshots/stream_20241213/sol/16_20.jpg',
              description: 'Entry zone confirmation',
              importance: 'HIGH'
            }
          ]
        },
        'PEPE': {
          totalScreenshots: 10,
          keyTimestamps: ['12:30', '20:15', '35:50'],
          screenshots: [
            {
              timestamp: '12:30',
              url: '/screenshots/stream_20241213/pepe/12_30.jpg',
              description: 'Meme coin rotation setup',
              importance: 'HIGH'
            }
          ]
        }
      },
      
      rawData: {
        totalMinuteClips: 92,
        screenshotsPerMinute: 1,
        transcriptSegments: 92,
        clips: [
          {
            minute: 0,
            timestamp: '0:00-1:00',
            screenshotUrl: '/screenshots/stream_20241213/raw/00_00.jpg',
            transcriptSegment: 'What\'s up traders! Today we\'re hunting for the best altcoin setups...',
            tokensDiscussed: [],
            aiNotes: 'Stream introduction, agenda overview'
          },
          {
            minute: 4,
            timestamp: '4:00-5:00',
            screenshotUrl: '/screenshots/stream_20241213/raw/04_00.jpg',
            transcriptSegment: 'SOL is setting up beautifully here, this is the kind of setup dreams are made of...',
            tokensDiscussed: ['SOL'],
            aiNotes: 'SOL analysis begins - premium setup identified'
          }
        ]
      },
      
      tokenTimeline: [
        {
          startTime: '4:15',
          endTime: '10:30',
          duration: '6m 15s',
          tokens: ['SOL'],
          topic: 'SOL Premium Setup',
          sentiment: 'bullish',
          keyPoints: [
            'Perfect technical setup on daily timeframe',
            'Volume profile supporting the move',
            'Clear entry and target levels'
          ]
        },
        {
          startTime: '12:30',
          endTime: '18:45',
          duration: '6m 15s',
          tokens: ['PEPE', 'WIF', 'BONK'],
          topic: 'Meme Coin Rotation Analysis',
          sentiment: 'bullish',
          keyPoints: [
            'Meme season signals emerging',
            'Rotation patterns identified',
            'Risk-reward calculations'
          ]
        }
      ],
      
      topTokens: [
        { symbol: 'SOL', mentions: 18, sentiment: 'bullish', totalTimeDiscussed: '15m 45s' },
        { symbol: 'PEPE', mentions: 12, sentiment: 'bullish', totalTimeDiscussed: '8m 30s' },
        { symbol: 'WIF', mentions: 8, sentiment: 'bullish', totalTimeDiscussed: '5m 20s' },
        { symbol: 'BONK', mentions: 6, sentiment: 'bullish', totalTimeDiscussed: '4m 10s' }
      ],
      
      keyQuotes: [
        {
          timestamp: '4:15',
          quote: 'SOL is setting up beautifully here, this is the kind of setup dreams are made of',
          tokens: ['SOL'],
          importance: 'CRITICAL',
          context: 'Premium setup identification'
        },
        {
          timestamp: '12:30',
          quote: 'Meme season is coming, and these are the coins that will lead the charge',
          tokens: ['PEPE', 'WIF', 'BONK'],
          importance: 'HIGH',
          context: 'Meme coin rotation prediction'
        }
      ]
    }
  ]
};

// X/Twitter Correlation Data
export const xCorrelationData = [
  {
    id: 'x_post_1',
    account: '@MW_Trades',
    timestamp: '3 minutes ago',
    content: 'SOL breakout confirmed! This is exactly what I was talking about in today\'s stream 🚀',
    tokens: ['SOL'],
    engagement: {
      likes: 847,
      retweets: 234,
      comments: 89
    },
    correlationScore: 95, // how well this correlates with stream content
    streamReference: true, // directly references the stream
    sentiment: 'bullish'
  },
  {
    id: 'x_post_2',
    account: '@CryptoTrader_KR',
    timestamp: '8 minutes ago',  
    content: 'Korean volume flowing into PEPE just like MW predicted. This guy sees the market!',
    tokens: ['PEPE'],
    engagement: {
      likes: 312,
      retweets: 98,
      comments: 45
    },
    correlationScore: 88,
    streamReference: true,
    sentiment: 'bullish'
  },
  {
    id: 'x_post_3',
    account: '@AltcoinGems',
    timestamp: '12 minutes ago',
    content: 'ONDO still consolidating, waiting for MW\'s next signal on this one',
    tokens: ['ONDO'],
    engagement: {
      likes: 156,
      retweets: 32,
      comments: 18
    },
    correlationScore: 72,
    streamReference: true,
    sentiment: 'neutral'
  }
];

// AI Correlation Analysis
export const aiCorrelationAnalysis = {
  overallConfidence: 89,
  strongCorrelations: [
    {
      token: 'SOL',
      streamMentions: 12,
      xMentions: 8,
      correlationStrength: 95,
      reasoning: 'MW\'s stream analysis directly echoed in community X posts with high engagement'
    },
    {
      token: 'PEPE', 
      streamMentions: 8,
      xMentions: 15,
      correlationStrength: 88,
      reasoning: 'Korean trader community amplifying MW\'s PEPE analysis across X'
    }
  ],
  
  trendingUp: ['SOL', 'PEPE'],
  coolingDown: ['ONDO'],
  
  dailySummary: {
    totalTokensTracked: 12,
    highConfidenceSignals: 5,
    streamToXCorrelation: 89,
    averageEngagement: '+23%'
  }
};

// Dashboard Summary Data
export const dashboardSummary = {
  hottest: tokenHeatData[0], // SOL with highest heat score
  rising: tokenHeatData.filter(t => t.trend === 'rising'),
  cooling: tokenHeatData.filter(t => t.trend === 'cooling'),
  
  todayStats: {
    streamsProcessed: 1,
    tokensTracked: 8,
    xPostsCorrelated: 24,
    avgConfidence: 87,
    actionableSignals: 5
  }
};