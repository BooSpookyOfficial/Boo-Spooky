import React from 'react';
import { Github, Twitter, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 border-b-2 border-red-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 
          className="text-4xl font-bold outline-title-header"
        >
          BOO SPOOKY
        </h1>
        <div className="flex space-x-4">
          <a href="https://x.com/boospooky_" target="_blank" rel="noopener noreferrer" 
             className="p-2 bg-transparent border-2 border-red-600 hover:bg-red-900 rounded transition-colors duration-200">
            <Twitter className="w-5 h-5 outline-icon" />
          </a>
          <a href="https://github.com/BooSpookyOfficial/Boo-Spooky" target="_blank" rel="noopener noreferrer"
             className="p-2 bg-transparent border-2 border-red-600 hover:bg-red-900 rounded transition-colors duration-200">
            <Github className="w-5 h-5 outline-icon" />
          </a>
          <a href="https://boos-organization.gitbook.io/boo-spooky/" target="_blank" rel="noopener noreferrer"
             className="p-2 bg-transparent border-2 border-red-600 hover:bg-red-900 rounded transition-colors duration-200">
            <BookOpen className="w-5 h-5 outline-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;