// Comprehensive Token Detail Data
// Deep analysis data for individual tokens

export const getTokenDetailData = (tokenSymbol) => {
  const tokenData = {
    'SOL': {
      // Basic Info
      symbol: 'SOL',
      name: 'Solana',
      logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/sol.png',
      price: 238.45,
      priceChange24h: 12.34,
      priceChangePercent24h: 5.47,
      marketCap: 115_400_000_000,
      volume24h: 4_200_000_000,
      
      // MW Analysis Summary
      mwAnalysis: {
        overallRating: 9.2, // out of 10
        confidence: 95,
        recommendation: 'STRONG BUY',
        targetPrice: 275,
        stopLoss: 220,
        riskReward: 2.8,
        timeframe: '1-2 weeks',
        
        keyPoints: [
          'Breakout pattern confirmed above $235 resistance',
          'Korean volume surge indicates institutional interest', 
          'Network activity at all-time highs',
          'MW called this exact setup 3 days ago',
          'Strong correlation with positive market sentiment'
        ],
        
        risks: [
          'BTC correlation risk if macro turns negative',
          'Potential profit-taking at $250 level',
          'Overall altcoin market dependency'
        ]
      },
      
      // Recent MW Mentions & Analysis
      mwInsights: {
        totalMentions: 47, // last 7 days
        recentMentions: [
          {
            date: '2024-12-15',
            stream: "Crypto Ready to Pump? Korean Session Analysis!",
            timestamp: '23:45',
            quote: 'SOL is looking absolutely pristine here, this breakout pattern is textbook. I\'ve been waiting for this setup for weeks.',
            context: 'Technical analysis discussion',
            sentiment: 'bullish',
            importance: 'high'
          },
          {
            date: '2024-12-15', 
            stream: "Crypto Ready to Pump? Korean Session Analysis!",
            timestamp: '45:12',
            quote: 'If SOL holds above $235, next target is $275. This is exactly what we want to see.',
            context: 'Price prediction',
            sentiment: 'bullish',
            importance: 'critical'
          },
          {
            date: '2024-12-14',
            stream: "Altcoins Finding Bullish Momentum!",
            timestamp: '18:30',
            quote: 'SOL ecosystem is on fire right now. Network fees, transactions, everything pointing up.',
            context: 'Fundamental analysis',
            sentiment: 'bullish',
            importance: 'high'
          },
          {
            date: '2024-12-13',
            stream: "What Altcoins Are Ready to Trade Today?",
            timestamp: '12:15',
            quote: 'Watch SOL closely here. If it breaks $230 with volume, we\'re going much higher.',
            context: 'Setup identification',
            sentiment: 'bullish', 
            importance: 'medium'
          }
        ],
        
        // MW's historical accuracy on this token
        trackRecord: {
          totalCalls: 12,
          successfulCalls: 10,
          accuracy: 83.3,
          avgReturn: 18.7,
          bestCall: '+34.5% (Oct 2024)',
          lastMissedCall: 'Sep 2024 (-8.2%)'
        }
      },
      
      // X/Twitter Correlation Analysis
      socialCorrelation: {
        overallScore: 92,
        mentionVolume: 156, // last 24h
        sentimentScore: 87, // 0-100 bullish score
        influencerEngagement: 94,
        
        topCorrelatedPosts: [
          {
            account: '@MW_Trades',
            timestamp: '3 minutes ago',
            content: 'SOL breakout confirmed! This is exactly what I was talking about in today\'s stream 🚀 Next target $275 #Solana',
            engagement: { likes: 1247, retweets: 384, comments: 156 },
            correlationScore: 98,
            postImpact: 'high'
          },
          {
            account: '@CryptoTrader_KR',
            timestamp: '8 minutes ago',
            content: 'Korean whales accumulating $SOL heavy after MW\'s analysis. Smart money following smart analysis 🇰🇷',
            engagement: { likes: 567, retweets: 234, comments: 89 },
            correlationScore: 91,
            postImpact: 'medium'
          },
          {
            account: '@SolanaFloor',
            timestamp: '15 minutes ago',
            content: 'MW called this SOL setup perfectly. Following his TA has been printing money 💰',
            engagement: { likes: 892, retweets: 298, comments: 123 },
            correlationScore: 95,
            postImpact: 'high'
          },
          {
            account: '@AltcoinSherpa',
            timestamp: '1 hour ago',
            content: 'SOL network metrics looking incredible. MW was right about this ecosystem strength',
            engagement: { likes: 445, retweets: 167, comments: 78 },
            correlationScore: 78,
            postImpact: 'medium'
          }
        ],
        
        sentimentTrend: [
          { time: '6h ago', score: 72 },
          { time: '4h ago', score: 79 },
          { time: '2h ago', score: 84 },
          { time: '1h ago', score: 87 },
          { time: 'now', score: 87 }
        ]
      },
      
      // Technical Analysis
      technicalAnalysis: {
        trend: 'bullish',
        strength: 85,
        
        keyLevels: {
          resistance: [275, 290, 315],
          support: [235, 220, 205]
        },
        
        indicators: {
          rsi: { value: 67, signal: 'bullish', strength: 'medium' },
          macd: { signal: 'bullish', strength: 'strong', trend: 'upward' },
          ema20: { value: 232.15, position: 'above', signal: 'bullish' },
          ema50: { value: 225.67, position: 'above', signal: 'bullish' },
          bollinger: { position: 'upper', signal: 'bullish', squeeze: false },
          volume: { trend: 'increasing', strength: 'high', compared: '+145% vs avg' }
        },
        
        patterns: [
          {
            name: 'Bullish Flag Breakout',
            confidence: 87,
            target: 275,
            status: 'confirmed'
          },
          {
            name: 'Higher Lows Pattern',
            confidence: 92,
            target: 280,
            status: 'in_progress'
          }
        ],
        
        mwTechnicalNotes: [
          'Perfect bounce off 21 EMA - exactly what MW predicted',
          'Volume breakout confirms institutional buying',
          'RSI still has room to run to 75-80 level',
          'MACD histogram expanding - momentum building'
        ]
      },
      
      // On-Chain & Fundamental Data
      fundamentalData: {
        networkHealth: {
          transactions24h: 45_600_000,
          transactionChange: '+12.4%',
          activeAddresses: 1_850_000,
          addressChange: '+8.7%',
          totalStaked: '65.2%',
          stakingYield: '7.1%'
        },
        
        defiMetrics: {
          tvl: 8_400_000_000,
          tvlChange: '+15.6%',
          topProtocols: [
            { name: 'Jupiter', tvl: 1_200_000_000 },
            { name: 'Marinade', tvl: 980_000_000 },
            { name: 'Raydium', tvl: 850_000_000 }
          ]
        },
        
        ecosystemGrowth: {
          dailyUsers: 2_100_000,
          userGrowth: '+18.9%',
          newProjects: 147,
          developerActivity: 'Very High'
        },
        
        mwFundamentalView: [
          'Network growth is accelerating - exactly what we want to see',
          'DeFi TVL growth showing real adoption, not just speculation',
          'Staking metrics indicate strong holder conviction',
          'Developer activity suggests long-term ecosystem health'
        ]
      },
      
      // Trading Setup Details
      tradingSetup: {
        setupType: 'Breakout + Momentum',
        entryZone: { min: 235, max: 242 },
        targets: [
          { level: 275, probability: 85, reward: '15.4%' },
          { level: 290, probability: 65, reward: '21.7%' },
          { level: 315, probability: 35, reward: '32.1%' }
        ],
        stopLoss: 220,
        riskPercent: 7.2,
        positionSize: 'Medium (3-5% portfolio)',
        timeframe: '1-3 weeks',
        
        mwTradingNotes: [
          'Perfect risk/reward setup - exactly what MW looks for',
          'Multiple confluences: technical, fundamental, sentiment',
          'Korean session volume confirms institutional interest',
          'Stop loss gives good cushion below major support'
        ],
        
        riskFactors: [
          { factor: 'BTC correlation', impact: 'High', mitigation: 'Watch BTC dominance' },
          { factor: 'Profit taking', impact: 'Medium', mitigation: 'Scale out approach' },
          { factor: 'Market conditions', impact: 'High', mitigation: 'Tight stop loss' }
        ]
      },
      
      // Correlation with MW's Other Calls
      portfolioCorrelation: {
        correlatedTokens: [
          { symbol: 'AVAX', correlation: 0.78, reason: 'L1 sector rotation' },
          { symbol: 'NEAR', correlation: 0.65, reason: 'Similar technical setup' },
          { symbol: 'FTM', correlation: 0.71, reason: 'MW mentioned together' }
        ],
        
        conflictingSignals: [],
        
        portfolioImpact: 'Positive - adds to L1 thesis without over-concentration'
      }
    },
    
    'PEPE': {
      symbol: 'PEPE',
      name: 'Pepe',
      logo: 'https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg',
      price: 0.00002156,
      priceChange24h: 0.00000287,
      priceChangePercent24h: 15.34,
      marketCap: 9_100_000_000,
      volume24h: 2_800_000_000,
      
      mwAnalysis: {
        overallRating: 8.5,
        confidence: 88,
        recommendation: 'BUY',
        targetPrice: 0.000028,
        stopLoss: 0.000018,
        riskReward: 3.2,
        timeframe: '2-4 weeks',
        
        keyPoints: [
          'Meme season confluence with Korean trader activity',
          'Breaking above key resistance with volume',
          'MW\'s meme coin methodology signals active',
          'Social sentiment extremely bullish',
          'Perfect setup for chase trading strategy'
        ],
        
        risks: [
          'High volatility typical of meme coins',
          'Dependent on social media momentum',
          'No fundamental value backing'
        ]
      },
      
      mwInsights: {
        totalMentions: 23,
        recentMentions: [
          {
            date: '2024-12-15',
            stream: "Korean Session PEPE Explosion!",
            timestamp: '15:32',
            quote: 'PEPE is absolutely flying right now - this is exactly what Korean pump season looks like!',
            context: 'Meme coin momentum analysis',
            sentiment: 'bullish',
            importance: 'high'
          },
          {
            date: '2024-12-15',
            stream: "Korean Session PEPE Explosion!",
            timestamp: '16:45',
            quote: 'If you missed the PEPE entry, wait for a pullback to the 21 EMA - don\'t chase here',
            context: 'Entry guidance',
            sentiment: 'bullish',
            importance: 'critical'
          },
          {
            date: '2024-12-14',
            stream: "Meme Coins Ready to Explode",
            timestamp: '22:18',
            quote: 'PEPE showing perfect meme coin breakout pattern - volume is key here',
            context: 'Technical setup analysis',
            sentiment: 'bullish',
            importance: 'high'
          }
        ],
        trackRecord: {
          totalCalls: 8,
          successfulCalls: 6,
          accuracy: 76.9,
          avgReturn: 24.3,
          bestCall: '+78.4% (Nov 2024)',
          lastMissedCall: 'Oct 2024 (-12.1%)'
        }
      },

      socialCorrelation: {
        overallScore: 89,
        mentionVolume: 287,
        sentimentScore: 91,
        influencerEngagement: 96,
        
        topCorrelatedPosts: [
          {
            account: '@MW_Trades',
            timestamp: '12 minutes ago',
            content: 'PEPE breakout is textbook meme coin momentum - Korean session is pumping this HARD 🐸🚀',
            engagement: { likes: 2341, retweets: 867, comments: 234 },
            correlationScore: 97,
            postImpact: 'high'
          },
          {
            account: '@MemeCoinMillionaire',
            timestamp: '25 minutes ago',
            content: 'Following MW\'s PEPE call from yesterday - already up 18%! 🚀 This is why I never fade MW',
            engagement: { likes: 1456, retweets: 543, comments: 187 },
            correlationScore: 94,
            postImpact: 'high'
          },
          {
            account: '@CryptoFrog_KR',
            timestamp: '1 hour ago',
            content: '한국 세션에서 PEPE 폭등! MW 분석이 정확했다 🇰🇷🐸',
            engagement: { likes: 789, retweets: 456, comments: 123 },
            correlationScore: 88,
            postImpact: 'medium'
          }
        ]
      },

      technicalAnalysis: {
        trend: 'bullish',
        strength: 92,
        
        keyLevels: {
          resistance: [0.000028, 0.000032, 0.000038],
          support: [0.000020, 0.000018, 0.000015]
        },
        
        indicators: {
          rsi: { value: 74, signal: 'bullish', strength: 'strong' },
          macd: { signal: 'bullish', strength: 'very_strong', trend: 'accelerating' },
          ema20: { value: 0.000019, position: 'above', signal: 'bullish' },
          ema50: { value: 0.000017, position: 'above', signal: 'bullish' },
          bollinger: { position: 'upper', signal: 'bullish', squeeze: true },
          volume: { trend: 'explosive', strength: 'very_high', compared: '+340% vs avg' }
        },
        
        patterns: [
          {
            name: 'Meme Coin Breakout',
            confidence: 91,
            target: 0.000028,
            status: 'confirmed'
          },
          {
            name: 'Korean Pump Pattern',
            confidence: 88,
            target: 0.000032,
            status: 'in_progress'
          }
        ],
        
        mwTechnicalNotes: [
          'Perfect meme coin momentum - exactly MW\'s preferred setup',
          'Korean session volume explosion confirms institutional interest',
          'RSI approaching overbought but momentum can carry higher',
          'Volume breakout is key - this is real buying, not just speculation'
        ]
      },

      tradingSetup: {
        setupType: 'Korean Meme Pump',
        entryZone: { min: 0.000019, max: 0.000022 },
        targets: [
          { level: 0.000028, probability: 78, reward: '29.6%' },
          { level: 0.000032, probability: 55, reward: '48.1%' },
          { level: 0.000038, probability: 25, reward: '76.3%' }
        ],
        stopLoss: 0.000018,
        riskPercent: 12.5,
        positionSize: 'Small-Medium (1-3% portfolio)',
        timeframe: '1-2 weeks',
        
        mwTradingNotes: [
          'Classic MW meme coin play - high risk, high reward',
          'Korean session timing is perfect for this setup',
          'Use tight stops - meme coins can reverse quickly',
          'Scale out at each target - don\'t get too greedy'
        ],
        
        riskFactors: [
          { factor: 'Meme volatility', impact: 'Very High', mitigation: 'Small position size' },
          { factor: 'Social sentiment shift', impact: 'High', mitigation: 'Monitor Twitter closely' },
          { factor: 'Whale dumping', impact: 'High', mitigation: 'Watch large holder moves' }
        ]
      }
    },

    'AVAX': {
      symbol: 'AVAX',
      name: 'Avalanche',
      logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/avax.png',
      price: 42.67,
      priceChange24h: 3.21,
      priceChangePercent24h: 8.14,
      marketCap: 17_200_000_000,
      volume24h: 1_800_000_000,
      
      mwAnalysis: {
        overallRating: 8.8,
        confidence: 91,
        recommendation: 'BUY',
        targetPrice: 52.50,
        stopLoss: 38.20,
        riskReward: 2.2,
        timeframe: '2-4 weeks',
        
        keyPoints: [
          'L1 sector rotation momentum building strongly',
          'Subnet activity and development accelerating',
          'Strong correlation with SOL - follow-through play',
          'MW\'s L1 thesis playing out perfectly',
          'Institutional accumulation pattern visible'
        ],
        
        risks: [
          'Competition from other L1 chains',
          'Dependent on overall crypto market sentiment',
          'Ethereum ecosystem improvements could impact'
        ]
      },

      mwInsights: {
        totalMentions: 31,
        recentMentions: [
          {
            date: '2024-12-15',
            stream: "L1 Sector Rotation In Full Effect!",
            timestamp: '14:22',
            quote: 'AVAX is the perfect follow-through to SOL - L1 rotation is just getting started',
            context: 'Sector rotation analysis',
            sentiment: 'bullish',
            importance: 'high'
          },
          {
            date: '2024-12-15',
            stream: "L1 Sector Rotation In Full Effect!",
            timestamp: '25:45',
            quote: 'Watch AVAX closely - if it breaks $45 with volume, we\'re going to $52 quickly',
            context: 'Technical level identification',
            sentiment: 'bullish',
            importance: 'critical'
          },
          {
            date: '2024-12-14',
            stream: "Altcoins Following BTC Strength",
            timestamp: '31:18',
            quote: 'AVAX subnet growth is impressive - this is real adoption, not speculation',
            context: 'Fundamental analysis',
            sentiment: 'bullish',
            importance: 'medium'
          }
        ],
        trackRecord: {
          totalCalls: 15,
          successfulCalls: 12,
          accuracy: 80.0,
          avgReturn: 19.4,
          bestCall: '+45.2% (Sep 2024)',
          lastMissedCall: 'Aug 2024 (-6.7%)'
        }
      },

      socialCorrelation: {
        overallScore: 85,
        mentionVolume: 134,
        sentimentScore: 82,
        influencerEngagement: 88,
        
        topCorrelatedPosts: [
          {
            account: '@MW_Trades',
            timestamp: '45 minutes ago',
            content: 'AVAX setup looking clean - L1 sector rotation continuing exactly as predicted 🔺',
            engagement: { likes: 987, retweets: 321, comments: 98 },
            correlationScore: 95,
            postImpact: 'high'
          },
          {
            account: '@AvalancheHub',
            timestamp: '2 hours ago',
            content: 'MW\'s AVAX analysis from last week aging like fine wine - subnet metrics through the roof 📈',
            engagement: { likes: 543, retweets: 187, comments: 67 },
            correlationScore: 89,
            postImpact: 'medium'
          }
        ]
      },

      technicalAnalysis: {
        trend: 'bullish',
        strength: 88,
        
        keyLevels: {
          resistance: [45.50, 49.20, 52.50],
          support: [40.00, 38.20, 35.80]
        },
        
        indicators: {
          rsi: { value: 63, signal: 'bullish', strength: 'medium' },
          macd: { signal: 'bullish', strength: 'strong', trend: 'upward' },
          ema20: { value: 41.85, position: 'above', signal: 'bullish' },
          ema50: { value: 39.67, position: 'above', signal: 'bullish' },
          bollinger: { position: 'middle', signal: 'neutral', squeeze: false },
          volume: { trend: 'increasing', strength: 'medium', compared: '+67% vs avg' }
        },
        
        patterns: [
          {
            name: 'Ascending Triangle',
            confidence: 84,
            target: 49.20,
            status: 'forming'
          },
          {
            name: 'L1 Sector Follow-Through',
            confidence: 91,
            target: 52.50,
            status: 'in_progress'
          }
        ],
        
        mwTechnicalNotes: [
          'Clean technical setup with room to run higher',
          'Volume building nicely - institutional interest growing',
          'RSI healthy - not overbought like some other L1s',
          'Perfect risk/reward at current levels'
        ]
      },

      tradingSetup: {
        setupType: 'L1 Sector Rotation',
        entryZone: { min: 41.50, max: 44.20 },
        targets: [
          { level: 49.20, probability: 75, reward: '15.4%' },
          { level: 52.50, probability: 50, reward: '23.1%' },
          { level: 56.80, probability: 25, reward: '33.2%' }
        ],
        stopLoss: 38.20,
        riskPercent: 10.5,
        positionSize: 'Medium (3-5% portfolio)',
        timeframe: '2-4 weeks',
        
        mwTradingNotes: [
          'Perfect L1 rotation play - follow SOL\'s momentum',
          'Lower risk than meme coins, good risk/reward',
          'Subnet growth provides fundamental backing',
          'Good correlation with BTC but not too dependent'
        ],
        
        riskFactors: [
          { factor: 'L1 competition', impact: 'Medium', mitigation: 'AVAX has strong differentiators' },
          { factor: 'Market rotation', impact: 'Medium', mitigation: 'Currently in favor' },
          { factor: 'BTC correlation', impact: 'Low', mitigation: 'Less correlated than others' }
        ]
      }
    }
  };
  
  return tokenData[tokenSymbol] || null;
};