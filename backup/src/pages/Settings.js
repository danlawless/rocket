import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { userSettings } from '../data/dummyData';

/**
 * MW Settings Page
 * 
 * Comprehensive settings for MW Trading Command Center:
 * - User profile and subscription
 * - Notification preferences  
 * - Trading preferences and risk settings
 * - Display and theme customization
 * - Security and privacy settings
 */

const Settings = () => {
  const [activeSection, setActiveSection] = React.useState('profile');
  
  return (
    <div className="settings">
      <div className="settings-container">
        {/* Settings Navigation */}
        <SettingsNavigation 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        {/* Settings Content */}
        <SettingsContent section={activeSection} />
      </div>
    </div>
  );
};

// Settings Navigation
const SettingsNavigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'notifications', icon: '🔔', label: 'Notifications' },
    { id: 'trading', icon: '📊', label: 'Trading Preferences' },
    { id: 'display', icon: '🎨', label: 'Display' },
    { id: 'security', icon: '🔒', label: 'Security' },
    { id: 'app', icon: '📱', label: 'App Settings' }
  ];
  
  return (
    <div className="settings-navigation">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`settings-nav-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => setActiveSection(section.id)}
        >
          <span className="nav-icon">{section.icon}</span>
          <span className="nav-label">{section.label}</span>
        </button>
      ))}
    </div>
  );
};

// Settings Content
const SettingsContent = ({ section }) => {
  switch (section) {
    case 'profile':
      return <ProfileSettings />;
    case 'notifications':
      return <NotificationSettings />;
    case 'trading':
      return <TradingSettings />;
    case 'display':
      return <DisplaySettings />;
    case 'security':
      return <SecuritySettings />;
    case 'app':
      return <AppSettings />;
    default:
      return <ProfileSettings />;
  }
};

// Profile Settings
const ProfileSettings = () => (
  <div className="settings-content">
    <div className="settings-header">
      <h2>Profile Settings</h2>
      <p>Manage your account information and subscription</p>
    </div>
    
    <Card variant="elevated" className="settings-card">
      <div className="profile-section">
        <div className="profile-avatar">
          <div className="avatar-circle">MW</div>
          <Button variant="secondary" size="sm">Change Avatar</Button>
        </div>
        
        <div className="profile-info">
          <div className="form-group">
            <label>Username</label>
            <input type="text" defaultValue={userSettings.profile.username} />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue={userSettings.profile.email} />
          </div>
          
          <div className="form-group">
            <label>Timezone</label>
            <select defaultValue={userSettings.profile.timezone}>
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European Time (UTC+1)</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="subscription-section">
        <div className="subscription-header">
          <h3>Subscription</h3>
          <Badge variant="solid" color="critical" size="lg">
            {userSettings.profile.subscription.toUpperCase()}
          </Badge>
        </div>
        <p>Full access to MW Trading Command Center with real-time signals</p>
        <Button variant="primary">Manage Subscription</Button>
      </div>
    </Card>
  </div>
);

// Notification Settings
const NotificationSettings = () => (
  <div className="settings-content">
    <div className="settings-header">
      <h2>Notification Settings</h2>
      <p>Configure when and how you receive alerts</p>
    </div>
    
    <Card variant="elevated" className="settings-card">
      <div className="notification-groups">
        <div className="notification-group">
          <h3>Trading Alerts</h3>
          <div className="notification-toggles">
            <SettingToggle 
              label="Setup Alerts" 
              description="MW setup triggers and confirmations"
              defaultChecked={userSettings.notifications.setupAlerts}
            />
            <SettingToggle 
              label="MW Mentions" 
              description="Livestream and X post mentions"
              defaultChecked={userSettings.notifications.mwMentions}
            />
            <SettingToggle 
              label="Risk Warnings" 
              description="Position and liquidation warnings"
              defaultChecked={userSettings.notifications.riskWarnings}
            />
          </div>
        </div>
        
        <div className="notification-group">
          <h3>Market Alerts</h3>
          <div className="notification-toggles">
            <SettingToggle 
              label="Korean Session" 
              description="Korean trading session activity"
              defaultChecked={userSettings.notifications.koreanSession}
            />
          </div>
        </div>
        
        <div className="notification-group">
          <h3>Delivery Method</h3>
          <div className="notification-toggles">
            <SettingToggle 
              label="Push Notifications" 
              description="Browser and mobile push notifications"
              defaultChecked={userSettings.notifications.pushNotifications}
            />
            <SettingToggle 
              label="Email Notifications" 
              description="Important alerts via email"
              defaultChecked={userSettings.notifications.emailNotifications}
            />
            <SettingToggle 
              label="Sound" 
              description="Audio notifications"
              defaultChecked={userSettings.notifications.sound}
            />
          </div>
        </div>
      </div>
    </Card>
  </div>
);

// Trading Settings
const TradingSettings = () => (
  <div className="settings-content">
    <div className="settings-header">
      <h2>Trading Preferences</h2>
      <p>Configure your trading style and risk management</p>
    </div>
    
    <Card variant="elevated" className="settings-card">
      <div className="trading-groups">
        <div className="form-group">
          <label>Minimum Confidence Level</label>
          <div className="slider-group">
            <input 
              type="range" 
              min="50" 
              max="100" 
              defaultValue={userSettings.trading.minConfidence}
              className="confidence-slider"
            />
            <span className="slider-value">{userSettings.trading.minConfidence}%</span>
          </div>
        </div>
        
        <div className="form-group">
          <label>Preferred Timeframes</label>
          <div className="checkbox-group">
            {['5M', '15M', '1H', '4H', '1D'].map((tf) => (
              <label key={tf} className="checkbox-label">
                <input 
                  type="checkbox" 
                  defaultChecked={userSettings.trading.preferredTimeframes.includes(tf)}
                />
                {tf}
              </label>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label>Default Risk Per Trade</label>
          <div className="input-with-unit">
            <input 
              type="number" 
              defaultValue={userSettings.trading.defaultRiskPerTrade}
              min="0.5"
              max="10"
              step="0.1"
            />
            <span className="input-unit">%</span>
          </div>
        </div>
        
        <div className="form-group">
          <label>Account Balance</label>
          <div className="input-with-unit">
            <input 
              type="number" 
              defaultValue={userSettings.trading.accountBalance}
            />
            <span className="input-unit">USD</span>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

// Display Settings
const DisplaySettings = () => (
  <div className="settings-content">
    <div className="settings-header">
      <h2>Display Settings</h2>
      <p>Customize the appearance and layout</p>
    </div>
    
    <Card variant="elevated" className="settings-card">
      <div className="display-groups">
        <div className="form-group">
          <label>Theme</label>
          <select defaultValue={userSettings.display.theme}>
            <option value="dark">Dark Theme</option>
            <option value="light">Light Theme</option>
            <option value="auto">Auto (System)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Layout Density</label>
          <select defaultValue={userSettings.display.density}>
            <option value="compact">Compact</option>
            <option value="comfortable">Comfortable</option>
            <option value="spacious">Spacious</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Currency Display</label>
          <select defaultValue={userSettings.display.currency}>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
        
        <SettingToggle 
          label="Animations" 
          description="Enable smooth transitions and animations"
          defaultChecked={userSettings.display.animations}
        />
      </div>
    </Card>
  </div>
);

// Security Settings
const SecuritySettings = () => (
  <div className="settings-content">
    <div className="settings-header">
      <h2>Security Settings</h2>
      <p>Manage your account security and privacy</p>
    </div>
    
    <Card variant="elevated" className="settings-card">
      <div className="security-groups">
        <div className="security-group">
          <h3>Password & Authentication</h3>
          <div className="security-actions">
            <Button variant="secondary" size="sm">Change Password</Button>
            <Button variant="secondary" size="sm">Enable 2FA</Button>
          </div>
        </div>
        
        <div className="security-group">
          <h3>Data & Privacy</h3>
          <div className="security-actions">
            <Button variant="ghost" size="sm">Download My Data</Button>
            <Button variant="ghost" size="sm">Privacy Policy</Button>
            <Button variant="danger" size="sm">Delete Account</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

// App Settings
const AppSettings = () => (
  <div className="settings-content">
    <div className="settings-header">
      <h2>App Settings</h2>
      <p>Application preferences and data management</p>
    </div>
    
    <Card variant="elevated" className="settings-card">
      <div className="app-groups">
        <div className="app-group">
          <h3>Data Management</h3>
          <div className="app-actions">
            <Button variant="secondary" size="sm">Clear Cache</Button>
            <Button variant="secondary" size="sm">Reset Settings</Button>
            <Button variant="secondary" size="sm">Export Settings</Button>
          </div>
        </div>
        
        <div className="app-group">
          <h3>App Info</h3>
          <div className="app-info">
            <div className="info-row">
              <span>Version:</span>
              <span>1.0.0</span>
            </div>
            <div className="info-row">
              <span>Build:</span>
              <span>2024.01.15</span>
            </div>
            <div className="info-row">
              <span>Last Update:</span>
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

// Reusable Setting Toggle Component
const SettingToggle = ({ label, description, defaultChecked }) => (
  <div className="setting-toggle">
    <div className="toggle-info">
      <span className="toggle-label">{label}</span>
      {description && <span className="toggle-description">{description}</span>}
    </div>
    <label className="toggle-switch">
      <input type="checkbox" defaultChecked={defaultChecked} />
      <span className="toggle-slider"></span>
    </label>
  </div>
);

export default Settings;