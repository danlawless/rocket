import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { intelligenceData } from '../data/dummyData';

/**
 * MW Intelligence Hub Page
 * 
 * Central hub for all MW intelligence sources:
 * - Daily livestream analysis and gems
 * - X/Twitter monitoring and signals
 * - AI synthesis and consensus signals
 * - Historical performance tracking
 */

const IntelligenceHub = () => {
  const [activeSource, setActiveSource] = React.useState('livestream');
  
  return (
    <div className="intelligence-hub">
      <div className="intelligence-container">
        {/* Source Tabs */}
        <IntelligenceSourceTabs 
          activeSource={activeSource}
          setActiveSource={setActiveSource}
        />
        
        {/* Active Source Content */}
        <IntelligenceContent source={activeSource} />
      </div>
    </div>
  );
};

// Intelligence Source Tabs
const IntelligenceSourceTabs = ({ activeSource, setActiveSource }) => {
  const sources = [
    { id: 'livestream', icon: '🎥', label: 'Livestream', count: 5 },
    { id: 'x_monitor', icon: '🐦', label: 'X Monitor', count: 12 },
    { id: 'library', icon: '📚', label: 'Library', count: 847 },
    { id: 'ai_signals', icon: '🤖', label: 'AI Signals', count: 8 }
  ];
  
  return (
    <div className="intelligence-tabs">
      {sources.map((source) => (
        <button
          key={source.id}
          className={`intelligence-tab ${activeSource === source.id ? 'active' : ''}`}
          onClick={() => setActiveSource(source.id)}
        >
          <span className="tab-icon">{source.icon}</span>
          <span className="tab-label">{source.label}</span>
          <Badge variant="solid" color="info" size="xs">
            {source.count}
          </Badge>
        </button>
      ))}
    </div>
  );
};

// Intelligence Content Component
const IntelligenceContent = ({ source }) => {
  switch (source) {
    case 'livestream':
      return <LivestreamContent />;
    case 'x_monitor':
      return <XMonitorContent />;
    case 'library':
      return <LibraryContent />;
    case 'ai_signals':
      return <AISignalsContent />;
    default:
      return <LivestreamContent />;
  }
};

// Livestream Content
const LivestreamContent = () => (
  <div className="livestream-content">
    <Card variant="elevated" className="todays-stream">
      <div className="stream-header">
        <h3>📺 Today's Stream</h3>
        <Badge variant="solid" color="success" size="sm">PROCESSED</Badge>
      </div>
      <div className="stream-details">
        <h4>{intelligenceData.livestream.today.title}</h4>
        <div className="stream-meta">
          <span>Duration: {intelligenceData.livestream.today.duration}</span>
          <span>•</span>
          <span>Gems Found: {intelligenceData.livestream.today.gemsFound}</span>
        </div>
      </div>
    </Card>
    
    <div className="gems-section">
      <h3>🎯 Today's Gems</h3>
      <div className="gems-grid">
        {intelligenceData.livestream.gems.map((gem, index) => (
          <Card key={index} variant="default" confidence={gem.confidence} className="gem-card">
            <div className="gem-header">
              <span className="gem-token">{gem.token}</span>
              <Badge confidence={gem.confidence} variant="confidence" size="xs" />
            </div>
            <div className="gem-quote">"{gem.quote}"</div>
            <div className="gem-meta">
              <span>Timestamp: {gem.timestamp}</span>
              <span>MW Rating: {gem.mwRating}/10</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

// X Monitor Content
const XMonitorContent = () => (
  <div className="x-monitor-content">
    <h3>🐦 Recent X Posts</h3>
    <div className="posts-list">
      {intelligenceData.xPosts.map((post, index) => (
        <Card key={index} variant="default" className="post-card">
          <div className="post-header">
            <span className="post-account">{post.account}</span>
            <Badge confidence={post.confidence} variant="confidence" size="xs" />
            <span className="post-time">{post.timeAgo}</span>
          </div>
          <div className="post-content">{post.content}</div>
          <div className="post-engagement">
            👍 {post.engagement.likes} • 🔄 {post.engagement.retweets} • 💬 {post.engagement.comments}
          </div>
        </Card>
      ))}
    </div>
  </div>
);

// Library Content
const LibraryContent = () => (
  <div className="library-content">
    <h3>📚 MW Library</h3>
    <p>Historical analysis and performance tracking coming soon...</p>
  </div>
);

// AI Signals Content
const AISignalsContent = () => (
  <div className="ai-signals-content">
    <h3>🤖 AI Consensus Signals</h3>
    <div className="signals-grid">
      {intelligenceData.aiSynthesis.consensusSignals.map((signal, index) => (
        <Card key={index} variant="elevated" confidence={signal.confidence} className="signal-card">
          <div className="signal-header">
            <span className="signal-token">{signal.token}</span>
            <Badge variant="solid" color="critical" size="sm">{signal.signal.toUpperCase()}</Badge>
          </div>
          <div className="signal-reasoning">{signal.reasoning}</div>
          <div className="signal-meta">
            <span>Confidence: {signal.confidence}%</span>
            <span>Sources: {signal.sources.length}</span>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default IntelligenceHub;