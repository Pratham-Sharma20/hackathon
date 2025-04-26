import React from 'react';
import { Link } from 'react-router-dom';

function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center">
        <Link to="/">
            <span className="text-blue-400 text-xl font-bold">✦ ResumeAnalyzer</span>
          </Link>
        </div>
        <Link to="/analyze">
        <button className="text-gray-300 hover:text-white">
          Analyze
        </button></Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Hero Text */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-blue-400">Supercharge Your Job Search</span>{" "}
              <span className="text-violet-400">with AI</span>
            </h1>
            <p className="text-gray-300 mb-8">
              Upload your resume and let our AI analyze it. Get accurate feedback on 
              your skills, experience, and ways to stand out to recruiters.
            </p>
            <Link to="/analyze">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center">
              Analyze Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button></Link>
          </div>

          {/* Right Side - Resume Mockup */}
          <div className="lg:w-1/2">
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-lg relative overflow-hidden">
              {/* Resume Mock Lines */}
              <div className="h-4 bg-slate-800 mb-4 rounded w-1/3"></div>
              <div className="h-3 bg-slate-800 mb-3 rounded w-full"></div>
              <div className="h-3 bg-slate-800 mb-3 rounded w-full"></div>
              <div className="h-3 bg-slate-800 mb-3 rounded w-5/6"></div>
              <div className="h-3 bg-violet-900/50 mb-3 rounded w-full"></div>
              <div className="h-3 bg-violet-800/60 mb-6 rounded w-5/6"></div>
              <div className="h-3 bg-violet-700/70 mb-3 rounded w-4/5"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 to-violet-500/5"></div>
              <div className="absolute -inset-px rounded-lg border border-blue-500/20 border-r-violet-500/20 border-b-violet-500/20"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {/* Feature 1 */}
          <div className="bg-slate-900/60 p-6 rounded-lg border border-slate-800">
            <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
            <p className="text-gray-400">
              Our AI analyzes your resume's content, structure, and impact.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-900/60 p-6 rounded-lg border border-slate-800">
            <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
            <p className="text-gray-400">
              Get immediate insights and suggestions to improve your resume.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-900/60 p-6 rounded-lg border border-slate-800">
            <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-400">
              Leveraging advanced AI to help you land your dream job.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResumePage;