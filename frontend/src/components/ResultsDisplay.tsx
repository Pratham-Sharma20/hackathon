import React from 'react';
import { CheckCircle, Briefcase, Code, ListChecks, Target, PieChart, ChevronDown, ChevronUp } from 'lucide-react';

const formatATSScore = (score) => {
  if (score === undefined || score === null) return null;

  const displayScore = 78; // testing value

  const getScoreData = (score) => {
    if (score >= 80) {
      return {
        color: 'text-green-400',
        ringColor: 'border-green-500',
        bgColor: 'bg-green-500/20',
        message: 'Excellent! Your resume is highly optimized for ATS systems.'
      };
    } else if (score >= 60) {
      return {
        color: 'text-yellow-400',
        ringColor: 'border-yellow-500',
        bgColor: 'bg-yellow-500/20',
        message: 'Good. Your resume has moderate ATS compatibility but could be improved.'
      };
    } else {
      return {
        color: 'text-red-400',
        ringColor: 'border-red-500',
        bgColor: 'bg-red-500/20',
        message: 'Your resume needs optimization to pass through ATS filters effectively.'
      };
    }
  };

  const { color, ringColor, bgColor, message } = getScoreData(displayScore);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-purple-500/30 bg-black/30 shadow-md">
      <div className="flex-shrink-0">
        <div className={`w-32 h-32 rounded-full ${ringColor} border-4 flex items-center justify-center ${bgColor}`}>
          <div className={`text-3xl font-bold ${color}`}>{Math.round(displayScore)}%</div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-purple-200 mb-2">ATS Compatibility</h3>
        <p className="text-gray-300 mb-2">{message}</p>
        <p className="text-gray-400 text-sm">
          This score reflects how well your resume matches industry-standard keywords and formatting.
        </p>
      </div>
    </div>
  );
};

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
        <h3 className="text-xl font-semibold text-purple-200 mb-3">{title}</h3>
        {items.map((item, i) => {
          if (item.type === 'heading') {
            return <h4 key={i} className="text-lg font-semibold text-purple-300 mt-4 mb-2">{item.content}</h4>;
          }
          if (item.type === 'bullet') {
            return (
              <div key={i} className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-1" />
                <p className="text-gray-300">{item.content}</p>
              </div>
            );
          }
          return <p key={i} className="text-gray-300 mb-2">{item.content}</p>;
        })}
      </div>
    );
  });
};

const formatEnhancementSuggestions = (content) => {
  if (!content) return null;

  const sections = content.split(/(?=\d+\.\s)/).filter(Boolean);

  return sections.map((section, idx) => {
    const [title, ...content] = section.split('\n').filter(Boolean);

    return (
      <div key={idx} className="mb-6">
        <h3 className="text-xl font-semibold text-purple-200 mb-3">{title}</h3>
        {content.map((line, i) => {
          if (line.startsWith('Example:')) {
            return (
              <div key={i} className="bg-purple-900/30 p-4 rounded-lg my-3">
                <p className="text-gray-300 italic">{line.replace('Example:', '').trim()}</p>
              </div>
            );
          }
          if (line.match(/^[a-z]\)/)) {
            return (
              <div key={i} className="mb-3">
                <p className="text-gray-300">{line}</p>
              </div>
            );
          }
          return <p key={i} className="text-gray-300 mb-2">{line}</p>;
        })}
      </div>
    );
  });
};

const formatSkillsAnalysis = (content) => {
  if (!content) return null;

  const sections = content.split(/(?=\d+\.\s)/).filter(Boolean);

  return sections.map((section, idx) => {
    const [title, ...content] = section.split('\n').filter(Boolean);

    return (
      <div key={idx} className="mb-6">
        <h3 className="text-xl font-semibold text-purple-200 mb-3">{title}</h3>
        {content.map((line, i) => (
          <p key={i} className="text-gray-300 mb-2">{line}</p>
        ))}
      </div>
    );
  });
};

export function ResultsDisplay({ analysis, onClose }) {
  const [expandedSections, setExpandedSections] = React.useState({
    ats: true,
    career: false,
    skills: false,
    optimization: false,
    action: false,
  });

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'ats',
      title: 'ATS Compatibility Score',
      icon: <PieChart className="w-6 h-6" />,
      content: analysis?.ats_score,
      formatter: formatATSScore
    },
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] p-4">
        <div className="animate-pulse text-2xl text-white font-semibold">
          Analyzing your resume...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume Analysis Results</h1>
          <p className="text-gray-400 text-lg">Personalized insights and growth roadmap crafted for you</p>
        </div>

        <div className="grid gap-8">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="group rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer focus:outline-none"
                aria-expanded={expandedSections[section.id]}
                aria-controls={`${section.id}-content`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-purple-300">{section.title}</h2>
                </div>
                <div className="text-purple-400">
                  {expandedSections[section.id] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div id={`${section.id}-content`} className="p-6 md:p-8 space-y-4 border-t border-purple-500/30">
                  {section.formatter(section.content)}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-12 w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 text-white font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-indigo-500/30"
        >
          Analyze Another Resume
        </button>
      </div>
    </div>
  );
}

export default ResultsDisplay;
