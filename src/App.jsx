import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import KrishiSurakshaPage from './components/KrishiSurakshaPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Loaded on demand so the full curriculum page stays out of the homepage bundle
const SpaceResearchPage = lazy(() => import('./components/SpaceResearchPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-primary overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team/:slug" element={<ProfilePage />} />
            <Route path="/krishi-suraksha-ai" element={<KrishiSurakshaPage />} />
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
    </Router>
  );
}

export default App;
