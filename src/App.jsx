// import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  // const [currentView, setCurrentView] = useState('landing');

  return (
    <div className="App">
      {/* {currentView === 'landing' ? (
        <LandingPage onNavigateToAdmin={() => setCurrentView('admin')} />
      ) : (
        <AdminDashboard onNavigateToHome={() => setCurrentView('landing')} />
      )} */}

      {/* <LandingPage /> */}
      <AdminDashboard />
    </div>

  );
}

export default App;

