
import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Screen } from './types';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Navigation } from './pages/Navigation';
import { Doctors } from './pages/Doctors';
import { Booking } from './pages/Booking';
import { Emergency } from './pages/Emergency';
import { Records } from './pages/Records';
import { QRScanner } from './pages/QRScanner';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { StaffPortal } from './pages/StaffPortal';

const USER_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAwEJj5kwTJmjp9zcnRhwmDWVnYL4vNUIpc8UvZq43wrRBVgaAO9VBFGdg6ydfSqZAMJuW4AYZ5sJ-BCZQaj6zHT9juLY6IFGMz70l2pB-Ob5X8WeQZKi0ddr5zlJBSXw-xhK_2KXHm6wk-5_Yi0sMaMTaByxus73AaXxDwCjhATha4L-inkoBQaqM3vc_K18TYNMP_my0ZVLShrpnDfBHzy3oOdyLdj5ZHyGd7wYOsqYISlNIp9Sfuxl3_Ac6BqNOd8tILE9ND1veK";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Landing);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Landing:
        return <Landing onNavigate={setCurrentScreen} />;
      case Screen.Login:
        return <Login onLogin={setCurrentScreen} />;
      case Screen.StaffPortal:
        return <StaffPortal />;
      case Screen.Home:
        return <Home onNavigate={setCurrentScreen} />;
      case Screen.Navigation:
        return <Navigation onNavigate={setCurrentScreen} />;
      case Screen.Doctors:
        return <Doctors onNavigate={setCurrentScreen} />;
      case Screen.Booking:
        return <Booking />;
      case Screen.Emergency:
        return <Emergency />;
      case Screen.Records:
        return <Records />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  const showShell = currentScreen !== Screen.QRScanner && currentScreen !== Screen.Login;

  return (
    <div className="min-h-screen bg-surface">
      <AnimatePresence mode="wait">
        {currentScreen !== Screen.QRScanner && (
          <>
            {showShell && <TopBar userImageUrl={USER_IMAGE} />}
            <main className="min-h-screen">
              <AnimatePresence mode="wait">
                <div key={currentScreen}>
                  {renderScreen()}
                </div>
              </AnimatePresence>
            </main>
            {showShell && (
              <BottomNav 
                currentScreen={currentScreen} 
                onScreenChange={setCurrentScreen} 
              />
            )}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentScreen === Screen.QRScanner && (
          <QRScanner onClose={() => setCurrentScreen(Screen.Navigation)} />
        )}
      </AnimatePresence>
    </div>
  );
}
