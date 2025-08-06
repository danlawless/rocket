import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import './styles/theme.css';

// Layout Components
import Navigation from './components/layout/Navigation';
import TopBar from './components/layout/TopBar';

// Pages
import Dashboard from './pages/Dashboard';
import MarketScanner from './pages/MarketScanner';
import ActiveSetups from './pages/ActiveSetups';
import IntelligenceHub from './pages/IntelligenceHub';
import CoinAnalysis from './pages/CoinAnalysis';
import AlertsCenter from './pages/AlertsCenter';
import MWLibrary from './pages/MWLibrary';
import Settings from './pages/Settings';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000, // 30 seconds
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <div className="app-container">
            {/* Top Bar - Always Visible */}
            <TopBar />
            
            {/* Main Content Area */}
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/scanner" element={<MarketScanner />} />
                <Route path="/setups" element={<ActiveSetups />} />
                <Route path="/intelligence" element={<IntelligenceHub />} />
                <Route path="/coin/:symbol" element={<CoinAnalysis />} />
                <Route path="/alerts" element={<AlertsCenter />} />
                <Route path="/library" element={<MWLibrary />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
            
            {/* Bottom Navigation - Mobile */}
            <Navigation />
          </div>
        </Router>
        
        {/* Toast Notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--mw-secondary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-primary)',
            },
            success: {
              iconTheme: {
                primary: 'var(--mw-success)',
                secondary: 'var(--mw-secondary)',
              },
            },
            error: {
              iconTheme: {
                primary: 'var(--mw-danger)',
                secondary: 'var(--mw-secondary)',
              },
            },
          }}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;