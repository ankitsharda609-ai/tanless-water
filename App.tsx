
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DiagnosticTool from './components/DiagnosticTool';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'faq' | 'blog'>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <DiagnosticTool />
            <BlogSection />
          </>
        );
      case 'services':
        return <Services />;
      case 'faq':
        return <FAQ />;
      case 'blog':
        return <BlogSection />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
