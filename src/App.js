import React from 'react';
import { Toaster } from 'react-hot-toast';
import MWMonitor from './components/MWMonitor';
import './App.css';

function App() {
  return (
    <div className="app">
      <MWMonitor />
      
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
          },
          success: {
            iconTheme: {
              primary: '#00ff88',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </div>
  );
}

export default App;