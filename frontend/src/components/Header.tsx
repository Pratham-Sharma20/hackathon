import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-white font-semibold">ResumeAnalyzer</span>
          </div>
          
          <div className="text-gray-300">
            Developed by{' '}
            <a 
              href="https://github.com/sumitjha16"
              className="text-gray-300 hover:text-white transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sumit Jha
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}