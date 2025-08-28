import React from 'react';
import HeaderHero from './HeaderHero';
import ContentSections from './ContentSections';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderHero />
      <ContentSections />
    </div>
  );
}
