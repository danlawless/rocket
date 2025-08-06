import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

/**
 * MW Library Page
 * 
 * Searchable library of all MW content:
 * - Historical livestreams and performance
 * - X post archive and analysis
 * - Best performing calls and setups
 * - Performance analytics and insights
 */

const MWLibrary = () => {
  const [activeCategory, setActiveCategory] = React.useState('livestreams');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  return (
    <div className="mw-library">
      <div className="library-container">
        {/* Search & Filter Bar */}
        <LibrarySearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        {/* Content Categories */}
        <ContentCategories 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        {/* Content Grid */}
        <ContentGrid category={activeCategory} searchQuery={searchQuery} />
        
        {/* Performance Analytics */}
        <LibraryAnalytics />
      </div>
    </div>
  );
};

// Library Search Bar
const LibrarySearchBar = ({ searchQuery, setSearchQuery }) => (
  <Card variant="elevated" className="library-search-bar">
    <div className="search-input-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search MW library... (token, date, topic)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      {searchQuery && (
        <button 
          className="clear-search"
          onClick={() => setSearchQuery('')}
        >
          ×
        </button>
      )}
    </div>
    
    <div className="search-filters">
      <select className="date-filter">
        <option>All Time</option>
        <option>Last 30 Days</option>
        <option>Last 7 Days</option>
        <option>Today</option>
      </select>
      
      <select className="performance-filter">
        <option>All Performance</option>
        <option>Best Calls (>20%)</option>
        <option>Good Calls (>10%)</option>
        <option>Recent Calls</option>
      </select>
    </div>
  </Card>
);

// Content Categories
const ContentCategories = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'livestreams', icon: '🎥', label: 'Livestreams', count: 847 },
    { id: 'x_posts', icon: '🐦', label: 'X Posts', count: 1243 },
    { id: 'analysis', icon: '📊', label: 'Analysis', count: 234 },
    { id: 'best_calls', icon: '🏆', label: 'Best Calls', count: 67 }
  ];

  return (
    <div className="content-categories">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
        >
          <span className="category-icon">{category.icon}</span>
          <span className="category-label">{category.label}</span>
          <Badge variant="solid" color="info" size="xs">
            {category.count}
          </Badge>
        </button>
      ))}
    </div>
  );
};

// Content Grid
const ContentGrid = ({ category, searchQuery }) => {
  // Mock data - replace with actual library content
  const mockContent = {
    livestreams: [
      {
        id: 1,
        title: "Altcoins PUMPING - MW Indicator Ruling!",
        date: "2024-01-15",
        duration: "2h 15m",
        gemsFound: 5,
        avgPerformance: 18.5,
        topGem: { token: "PEPE", performance: 34.2 }
      },
      {
        id: 2,
        title: "Korean Traders Pumping Markets Again!",
        date: "2024-01-14",
        duration: "1h 45m",
        gemsFound: 3,
        avgPerformance: 12.8,
        topGem: { token: "OM", performance: 28.1 }
      }
    ],
    x_posts: [
      {
        id: 1,
        content: "SOL looking strong above MW +15% band. Korean session might push this higher.",
        date: "2024-01-15",
        engagement: { likes: 234, retweets: 67 },
        performance: 8.5,
        tokens: ["SOL"]
      }
    ],
    analysis: [],
    best_calls: [
      {
        id: 1,
        token: "PEPE",
        callDate: "2024-01-10",
        callPrice: 0.000008,
        peakPrice: 0.000014,
        performance: 75.0,
        source: "livestream",
        setupType: "Korean Pump"
      }
    ]
  };
  
  const content = mockContent[category] || [];
  
  return (
    <div className="content-grid">
      {content.length === 0 ? (
        <Card variant="elevated" className="no-content">
          <div className="no-content-message">
            <span className="no-content-icon">📚</span>
            <h3>No content found</h3>
            <p>No {category} match your search criteria.</p>
          </div>
        </Card>
      ) : (
        content.map((item) => (
          <ContentCard key={item.id} item={item} category={category} />
        ))
      )}
    </div>
  );
};

// Individual Content Card
const ContentCard = ({ item, category }) => {
  if (category === 'livestreams') {
    return (
      <Card variant="elevated" className="content-card livestream-card">
        <div className="content-header">
          <span className="content-icon">🎥</span>
          <Badge variant="solid" color="success" size="xs">
            +{item.avgPerformance}%
          </Badge>
        </div>
        <h4 className="content-title">{item.title}</h4>
        <div className="content-meta">
          <span>{item.date}</span>
          <span>•</span>
          <span>{item.duration}</span>
          <span>•</span>
          <span>{item.gemsFound} gems</span>
        </div>
        {item.topGem && (
          <div className="top-gem">
            <span>Top Gem: {item.topGem.token} (+{item.topGem.performance}%)</span>
          </div>
        )}
        <Button variant="secondary" size="sm" fullWidth>
          🔍 View Details
        </Button>
      </Card>
    );
  }
  
  if (category === 'best_calls') {
    return (
      <Card variant="elevated" className="content-card best-call-card">
        <div className="content-header">
          <span className="content-icon">🏆</span>
          <Badge variant="solid" color="critical" size="sm">
            +{item.performance}%
          </Badge>
        </div>
        <h4 className="content-title">{item.token} Call</h4>
        <div className="call-details">
          <div className="call-detail">
            <span>Called:</span>
            <span>${item.callPrice}</span>
          </div>
          <div className="call-detail">
            <span>Peak:</span>
            <span>${item.peakPrice}</span>
          </div>
          <div className="call-detail">
            <span>Setup:</span>
            <span>{item.setupType}</span>
          </div>
        </div>
        <Button variant="primary" size="sm" fullWidth>
          🎯 Analyze Call
        </Button>
      </Card>
    );
  }
  
  return (
    <Card variant="elevated" className="content-card">
      <p>Content for {category}</p>
    </Card>
  );
};

// Library Analytics
const LibraryAnalytics = () => (
  <div className="library-analytics">
    <h3>Performance Analytics</h3>
    <div className="analytics-grid">
      <Card variant="default" className="analytics-card">
        <div className="analytics-value">73.5%</div>
        <div className="analytics-label">Overall Win Rate</div>
      </Card>
      <Card variant="default" className="analytics-card">
        <div className="analytics-value">+18.4%</div>
        <div className="analytics-label">Avg Performance</div>
      </Card>
      <Card variant="default" className="analytics-card">
        <div className="analytics-value">847</div>
        <div className="analytics-label">Total Streams</div>
      </Card>
      <Card variant="default" className="analytics-card">
        <div className="analytics-value">2,150</div>
        <div className="analytics-label">Total Calls</div>
      </Card>
    </div>
  </div>
);

export default MWLibrary;