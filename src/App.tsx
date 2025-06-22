import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import StoryCard from './components/StoryCard';
import Footer from './components/Footer';
import { stories } from './data/stories';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <Header />
      <IntroSection />
      
      <main className="py-16 px-6">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            index={index}
            title={story.title}
            content={story.content}
            image={story.image}
            imageAlt={story.imageAlt}
            layout={story.layout}
          />
        ))}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;