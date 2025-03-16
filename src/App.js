import React from 'react';
import FAQ from './components/faq';

const App = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto p-6">
        <FAQ />
      </main>
    </div>
  );
};

export default App;