import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  RefreshCw,
} from 'lucide-react';

interface AiCounselorProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tab: any) => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

export const AiCounselorModal: React.FC<AiCounselorProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Greetings! I am the Oakridge Academy AI Academic & Admissions Counselor. You can ask me anything about our 25-acre campus, ergonomic posture-engineered classroom benches, science & computer labs, Cambridge/MIT faculty, Grade 11 & 12 streams, fee estimates, or the online admission process. How may I assist you today?",
      time: 'Just now',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Tell me about the classroom benches & ergonomics',
    'What subjects are taught in Grade 11 PCM stream?',
    'Who leads the Physics & Robotics department?',
    'How do I apply for 2027–28 admission?',
    'What are the school bus transport zones?',
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      role: 'user',
      content: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputQuery('');
    setLoading(true);

    try {
      const response = await fetch('/api/counselor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: textToSend.trim() }),
      });

      if (!response.ok) {
        throw new Error('API response failed');
      }

      const data = await response.json();
      const botMsg: Message = {
        role: 'assistant',
        content: data.reply || 'I am happy to provide more details about Oakridge Academy.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      // Fallback answers locally if offline or error
      let fallbackText =
        'Oakridge Academy provides a 25-acre green eco-campus with 64 smart classroom suites. Our classrooms feature custom-crafted Beechwood dual benches engineered at a 12° writing incline with lumbar S-curve support to protect growing spinal posture. We offer Pre-K through Grade 12 with specialized Grade 11-12 streams in STEM (PCM), Medical (PCB), Commerce, and Humanities led by 135+ faculty from Cambridge, MIT, and IIT. You can apply directly through our Admissions tab!';

      if (textToSend.toLowerCase().includes('bench')) {
        fallbackText =
          'Our classroom benches are German Beechwood ergonomic units with a 12° optical writing tilt, waterfall seat edges to safeguard circulation, lumbar contouring, and under-desk bag baskets. We also provide collaborative hexagonal tables for STEM and acid-resistant ceramic workstations in our science labs.';
      } else if (textToSend.toLowerCase().includes('pcm') || textToSend.toLowerCase().includes('stream')) {
        fallbackText =
          'The Senior Secondary STEM Engineering & Tech (PCM) stream includes Physics, Chemistry, and Advanced Calculus as compulsory subjects, alongside elective combinations like Python Computer Science, AI, and Engineering Graphics. Each batch is capped at 60 scholars.';
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: fallbackText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#291708]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#faf6f0] rounded-2xl w-full max-w-2xl h-[85vh] flex flex-col shadow-2xl border border-[#dfceba] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header in Deep Brown */}
        <div className="bg-gradient-to-r from-[#291708] via-[#3a1d08] to-[#4a2810] text-white p-4 sm:px-6 flex items-center justify-between border-b border-[#4a2810]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#854e25] text-amber-200 flex items-center justify-center shadow-xs border border-amber-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">Oakridge AI Academic Counselor</h3>
                <span className="text-[10px] font-extrabold uppercase bg-[#ebdccb]/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full">
                  Live 24/7
                </span>
              </div>
              <p className="text-xs text-[#dfceba]">
                Grounded in official school curriculum, infrastructure & admissions data
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#baa490] hover:text-white hover:bg-[#4a2810] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#f5ede2]">
          {messages.map((msg, i) => {
            const isBot = msg.role === 'assistant';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 text-xs leading-relaxed ${
                  isBot ? 'justify-start' : 'justify-end'
                }`}
              >
                {isBot && (
                  <div className="w-7 h-7 rounded-lg bg-[#854e25] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3.5 shadow-2xs whitespace-pre-line ${
                    isBot
                      ? 'bg-[#faf6f0] text-[#291708] border border-[#dfceba]'
                      : 'bg-[#854e25] text-white font-medium'
                  }`}
                >
                  <p>{msg.content}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      isBot ? 'text-[#735339]' : 'text-[#ebdccb]'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
                {!isBot && (
                  <div className="w-7 h-7 rounded-lg bg-[#4a2810] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            );
          })}

          {loading && (
            <div className="flex gap-3 text-xs items-center text-[#735339]">
              <div className="w-7 h-7 rounded-lg bg-[#854e25] text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-[#faf6f0] border border-[#dfceba] p-3 rounded-2xl flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#854e25]" />
                <span>Counselor is formulating detailed guidance...</span>
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Quick Suggested Prompts Strip */}
        <div className="p-2.5 bg-[#ede2d5] border-t border-[#dfceba] overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
          <span className="text-[11px] font-semibold text-[#4d2d14] pl-1 shrink-0">Suggestions:</span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-[#ebdccb] text-[#291708] border border-[#dfceba] hover:border-[#854e25] whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 bg-[#faf6f0] border-t border-[#dfceba] flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask about benches, campus area, PCM stream, teachers, admission..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-[#dfceba] focus:border-[#854e25] focus:ring-1 focus:ring-[#854e25] outline-hidden text-xs bg-white text-[#291708]"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !inputQuery.trim()}
            className="p-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] disabled:opacity-50 text-white transition-colors shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};
