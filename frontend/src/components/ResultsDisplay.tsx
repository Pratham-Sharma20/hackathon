import React from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Briefcase, Code, ListChecks, Target } from 'lucide-react';

// Helper function to format action plan content with proper alignment
const formatActionPlan = (content) => {
  if (!content) return null;
  
  const sections = content.split(/(?=\d+\.\s)/).filter(Boolean);
  
  return sections.map((section, idx) => {
    const [title, ...content] = section.split('\n').filter(Boolean);
    const items = content.reduce((acc, line) => {
      if (line.includes(':') && !line.startsWith('•')) {
        acc.push({ type: 'heading', content: line });
      } else if (line.startsWith('•')) {
        acc.push({ type: 'bullet', content: line.substring(1) });
      } else {
        acc.push({ type: 'text', content: line });
      }
      return acc;
    }, []);

    return (
      <div key={idx} className="mb-6">
        <h3 className="text-lg font-medium text-purple-200 mb-3 text-left">{title}</h3>
        {items.map((item, i) => {
          if (item.type === 'heading') {
            return (
              <h4 key={i} className="text-base font-medium text-purple-300 mt-4 mb-2 text-left">
                {item.content}
              </h4>
            );
          }
          if (item.type === 'bullet') {
            return (
              <div key={i} className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-left">{item.content}</p>
              </div>
            );
          }
          return (
            <p key={i} className="text-gray-300 mb-2 text-left">
              {item.content}
            </p>
          );
        })}
      </div>
    );
  });
};

// Helper function to format enhancement suggestions with proper alignment
const formatEnhancementSuggestions = (content) => {
  if (!content) return null;

  const sections = content.split(/(?=\d+\.\s)/).filter(Boolean);

  return sections.map((section, idx) => {
    const [title, ...content] = section.split('\n').filter(Boolean);
    
    return (
      <div key={idx} className="mb-6">
        <h3 className="text-lg font-medium text-purple-200 mb-3 text-left">{title}</h3>
        {content.map((line, i) => {
          if (line.startsWith('Example:')) {
            return (
              <div key={i} className="bg-purple-900/30 p-4 rounded-lg my-3">
                <p className="text-gray-300 italic text-left">{line.replace('Example:', '').trim()}</p>
              </div>
            );
          }
          if (line.match(/^[a-z]\)/)) {
            return (
              <div key={i} className="mb-3">
                <p className="text-gray-300 text-left">{line}</p>
              </div>
            );
          }
          return (
            <p key={i} className="text-gray-300 mb-2 text-left">
              {line}
            </p>
          );
        })}
      </div>
    );
  });
};

// Helper function to format skills analysis with proper alignment
const formatSkillsAnalysis = (content) => {
  if (!content) return null;

  const sections = content.split(/(?=\d+\.\s)/).filter(Boolean);

  return sections.map((section, idx) => {
    const [title, ...content] = section.split('\n').filter(Boolean);
    
    return (
      <div key={idx} className="mb-6">
        <h3 className="text-lg font-medium text-purple-200 mb-3 text-left">{title}</h3>
        {content.map((line, i) => (
          <p key={i} className="text-gray-300 mb-2 text-left">
            {line}
          </p>
        ))}
      </div>
    );
  });
};

export function ResultsDisplay({ analysis, onClose }) {
  // Use an object to track expanded state for each section independently
  const [expandedSections, setExpandedSections] = React.useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'career',
      title: 'Career Trajectory',
      icon: <Briefcase className="w-6 h-6" />,
      content: analysis?.analysis?.analysis?.career_trajectory,
      formatter: formatSkillsAnalysis
    },
    {
      id: 'skills',
      title: 'Skills Analysis',
      icon: <Code className="w-6 h-6" />,
      content: analysis?.analysis?.analysis?.skills_analysis,
      formatter: formatSkillsAnalysis
    },
    {
      id: 'optimization',
      title: 'Resume Enhancement Suggestions',
      icon: <ListChecks className="w-6 h-6" />,
      content: analysis?.analysis?.analysis?.resume_optimization,
      formatter: formatEnhancementSuggestions
    },
    {
      id: 'action',
      title: 'Action Plan',
      icon: <Target className="w-6 h-6" />,
      content: analysis?.analysis?.analysis?.action_plan,
      formatter: formatActionPlan
    }
  ];

  if (!analysis?.analysis?.analysis) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900/90 to-gray-900/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="animate-pulse text-2xl text-white font-medium">
          Analyzing your resume...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900/90 to-gray-900/90 backdrop-blur-sm py-10 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Resume Analysis Results
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Detailed insights and recommendations for your professional journey
        </p>

        <div className="space-y-4">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="rounded-lg border border-purple-500/20 bg-black/40 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 md:p-6 flex items-center justify-between text-white hover:bg-purple-500/10 transition-all"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    {section.icon}
                  </div>
                  <span className="text-lg md:text-xl font-medium">{section.title}</span>
                </div>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-6 h-6 text-purple-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-purple-400" />
                )}
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-4 md:px-6 pb-6">
                  <div className="pt-6 border-t border-purple-500/20">
                    {section.formatter(section.content)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          Analyze Another Resume
        </button>
      </div>
    </div>
  );
}

export default ResultsDisplay;