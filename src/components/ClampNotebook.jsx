import React, { useState, useEffect } from "react";
import { Lightbulb, FileText, Send, Sun, Moon } from "lucide-react";

export default function ClampNotebook({ subjectCode, subjectName }) {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([
    { id: 1, text: "Explain the Thevenin's Theorem", category: "Basics", icon: Lightbulb, color: "text-yellow-400" },
    { id: 2, text: "What is the Difference between an OR and an AND Gate?", category: "Curriculum Info", icon: FileText, color: "text-red-400" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [followSystem, setFollowSystem] = useState(true);

  useEffect(() => {
    if (!followSystem) return;
    
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    
    // Add/remove dark class on document
    if (mq.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    const onChange = (e) => {
      setIsDark(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    mq.addEventListener('change', onChange);
    
    return () => mq.removeEventListener('change', onChange);
  }, [followSystem]);

  // Handle manual theme changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleSubmit = () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    
    const newQuestion = {
      id: questions.length + 1,
      text: question.trim(),
      category: "Your Questions",
      icon: Send,
      color: "text-blue-400"
    };
    
    setTimeout(() => {
      setQuestions(prev => [...prev, newQuestion]);
      setQuestion("");
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={`w-72 h-[calc(100vh-2rem)] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700/50 flex flex-col rounded-lg shadow-xl m-4 mr-6`}>
      <div className={`p-6 border-b border-gray-200 dark:border-zinc-700/50 flex justify-between items-center`}>
        <div>
          <h1 className={`text-xl font-semibold text-gray-900 dark:text-white`}>Clamp Notebook</h1>
          {subjectName && (
            <p className={`text-sm text-gray-600 dark:text-zinc-400 mt-1`}>{subjectName}</p>
          )}
        </div>
        <button
          onClick={() => {
            setFollowSystem(false);
            setIsDark(!isDark);
          }}
          className={`p-2 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors ${!followSystem ? 'ring-1 ring-blue-400' : ''}`}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {questions.map((q) => {
          const IconComponent = q.icon;
          return (
            <div key={q.id} className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <IconComponent className={`w-4 h-4 ${q.color}`} />
                <span className={`text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider`}>{q.category}</span>
              </div>
              <h3 className={`text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-zinc-200 leading-relaxed transition-colors pl-7`}>
                {q.text}
              </h3>
            </div>
          );
        })}
        
        {isLoading && (
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-4 h-4 bg-gray-300 dark:bg-zinc-600 rounded animate-pulse`}></div>
              <span className={`text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider`}>Processing...</span>
            </div>
            <div className="pl-7 space-y-2">
              <div className={`h-4 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse w-3/4`}></div>
              <div className={`h-4 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse w-1/2`}></div>
            </div>
          </div>
        )}
      </div>

      <div className={`p-6 border-t border-gray-200 dark:border-zinc-700/50 space-y-3`}>
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-red-400 opacity-70 blur-sm transition-all duration-300 group-focus-within:opacity-100 group-focus-within:blur-md group-hover:opacity-80"></div>
          <input
            type="text"
            placeholder="Your Questions!"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            disabled={isLoading}
            className={`relative w-full bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-400 border-gray-300 dark:border-zinc-700 text-sm px-4 py-3 pr-12 rounded-lg border focus:border-transparent focus:outline-none transition-all duration-300 disabled:opacity-50`}
          />
          <button 
            onClick={handleSubmit}
            disabled={isLoading || !question.trim()}
            className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Send className={`w-4 h-4 ${isLoading ? 'animate-pulse' : ''}`} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button className={`text-xs text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-300 transition-colors font-medium`}>
            Browse Prompts
          </button>
          <span className={`text-xs text-gray-400 dark:text-zinc-500`}>{questions.length} / 3000</span>
        </div>
      </div>
    </div>
  );
}