import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t-4 border-red-800 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-900 border-2 border-red-700 p-8">
          <h3 className="text-2xl font-bold text-red-400 mb-4">That's All for Now</h3>
          <p className="text-xl text-red-300 italic mb-4">
            "Thanks for reading my weird stories. At least someone finds my life entertaining!"
          </p>
          <p className="text-gray-400">— Boo Spooky</p>
        </div>
        <div className="mt-8 pt-6 border-t border-red-900">
          <p className="text-gray-600 text-sm">
            © 2025 Boo Spooky. All rights reserved. No supernatural entities were harmed in the making of this website (they harm themselves just fine).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;