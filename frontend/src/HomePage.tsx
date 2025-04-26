import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from "./components/ui/text-generate-effect";


function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="flex items-center justify-center p-8 lg:p-12 pt-16 lg:pt-20 gap-6">
  {/* Left Star */}
  <motion.span
    className="text-blue-400 text-6xl"
    animate={{ y: [0, -25, 0] }}
    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
  >
    ✦
  </motion.span>

  <Link to="/" className="flex items-center">
    {/* Logo Text */}
    <span className="text-blue-400 text-5xl font-extrabold tracking-wide">
       ResumeAnalyzer
    </span>
  </Link>

  {/* Right Star */}
  <motion.span
    className="text-blue-400 text-6xl"
    animate={{ y: [0, -25, 0] }}
    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
  >
    ✦
  </motion.span>
</header>


      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-12">
  {/* Left Text */}
  <motion.div 
    className="lg:w-1/2 space-y-8"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* <h1 className="text-5xl font-bold leading-tight">
  <span className="text-blue-400 typing-effect inline-block">
    Supercharge Your Career
  </span>{" "}
  <span className="text-violet-400 typing-effect inline-block" style={{animationDelay: '3s'}}>
    with Powerful AI Insights
  </span>
</h1> */}
<div>
  <TextGenerateEffect
    words="Supercharge Your Career"
    className="text-blue-400 mb-2"
    duration={0.6}
  />
  <TextGenerateEffect
    words="with Powerful AI Insights"
    className="text-violet-400"
    duration={0.6}
  />
</div>



    <p className="text-gray-400 text-lg">
      Tired of sending resumes into the void? Upload your resume today and let our intelligent analyzer provide you with expert feedback. 
      We'll show you exactly how to improve your chances of landing interviews and standing out to recruiters.
    </p>
    <Link to="/analyze">
  <motion.button 
    whileHover={{ scale: 1.05 }}
    className="mt-6 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-full flex items-center"
  >
    Analyze Resume
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </motion.button>
</Link>

  </motion.div>

  {/* Resume Mockup */}
  <motion.div 
    className="lg:w-1/2"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2 }}
  >
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-2xl relative overflow-hidden">
      {/* Resume mockup */}
      <div className="space-y-4">
        <div className="h-4 bg-slate-800 rounded w-1/3"></div>
        <div className="h-3 bg-slate-800 rounded w-full"></div>
        <div className="h-3 bg-slate-800 rounded w-full"></div>
        <div className="h-3 bg-slate-800 rounded w-5/6"></div>
        <div className="h-3 bg-violet-900/50 rounded w-full"></div>
        <div className="h-3 bg-violet-800/60 rounded w-5/6"></div>
        <div className="h-3 bg-violet-700/70 rounded w-4/5"></div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-violet-500/5"></div>
      <div className="absolute -inset-px rounded-xl border border-blue-500/20 border-r-violet-500/20 border-b-violet-500/20"></div>
    </div>
  </motion.div>
</div>


        {/* Features Section */}
        <section className="mt-24">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Feature */}
            {[
              { title: 'Smart Analysis', desc: "We assess your resume's format, keyword density, skills alignment, and overall impact.", icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Instant Feedback', desc: "Receive actionable insights in seconds. Improve, refine, and send a better resume today!", icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'AI-Powered Insights', desc: "Powered by cutting-edge AI trained on 100,000+ successful resumes and recruiter data.", icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-900/60 p-8 rounded-lg border border-slate-800 hover:border-violet-500 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-md">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* How It Works */}
        <section className="mt-32 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Upload your resume → AI scans your document → Instant suggestions for wording, formatting, skills, and ATS-optimization → Download improved version → Apply with confidence.
          </motion.p>
        </section>
      </main>
    </div>
  );
}

export default ResumePage;
