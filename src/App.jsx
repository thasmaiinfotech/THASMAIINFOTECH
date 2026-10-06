import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import KrishiSurakshaPage from './components/KrishiSurakshaPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Loaded on demand so these long pages stay out of the homepage bundle
const SpaceResearchPage = lazy(() => import('./components/SpaceResearchPage'));
const BusBuddyPage = lazy(() => import('./components/BusBuddyPage'));

// Everything inside the router. Kept separate from App so the prerender step
// (src/entry-server.jsx) can render the same tree under a StaticRouter.
export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-primary overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team/:slug" element={<ProfilePage />} />
            <Route path="/krishi-suraksha-ai" element={<KrishiSurakshaPage />} />
            <Route
              path="/busbuddy"
              element={
                <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
                  <BusBuddyPage />
                </Suspense>
              }
            />
            <Route
              path="/space-research"
              element={
                <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
                  <SpaceResearchPage />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
