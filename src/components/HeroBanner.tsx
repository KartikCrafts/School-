import React from 'react';
import {
  Compass,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Building2,
  Users,
  Award,
  BookOpen,
  Layers,
  Search,
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { motion } from 'motion/react';

interface HeroBannerProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenCounselor: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onNavigate,
  onOpenCounselor,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="relative bg-gradient-to-b from-[#eadecb] via-[#f5ede2] to-[#ebdccb] text-[#2c190a] overflow-hidden border-b border-[#d8c3ad]">
      {/* Subtle warm light brown grid texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8f5c34_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d9bd9c]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cda983]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-3xl">
          {/* Tagline / Pill with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfceba] border border-[#cfbfae] text-[#543013] text-xs font-bold mb-4 shadow-2xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#8f5222]" />
            <span>Excellence in Holistic Education Since 1994</span>
            <span className="text-[#bfa58a]">•</span>
            <span className="text-[#7d461c] font-extrabold">Admissions Open 2027–28</span>
          </motion.div>

          {/* Headline with Motion */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2c190a] leading-tight"
          >
            Where Academic Mastery Meets <br className="hidden sm:inline" />
            <span className="text-[#874e23] underline decoration-[#c99f78] decoration-wavy decoration-2">
              World-Class Infrastructure
            </span>
          </motion.h1>

          {/* Description with Motion */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#593d25] text-base sm:text-lg leading-relaxed max-w-2xl font-medium"
          >
            Welcome to the official user portal of Oakridge Academy. Explore our 25-acre eco-campus, 
            ergonomic posture-aligned classroom benches, advanced STEM laboratories, Cambridge & MIT faculty, 
            and apply online for 2027–2028 admissions.
          </motion.p>

          {/* Search bar inside portal with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-col sm:flex-row gap-2 max-w-xl"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search classrooms, benches, subjects, courses, teachers..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/95 text-[#2c190a] placeholder-[#8d715a] text-sm border border-[#cebbaa] focus:border-[#874e23] focus:ring-2 focus:ring-[#874e23]/25 outline-hidden transition-all shadow-xs"
              />
              <Search className="w-4 h-4 text-[#8f725a] absolute left-3.5 top-3.5" />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (searchQuery.trim()) {
                  const q = searchQuery.toLowerCase();
                  if (
                    q.includes('bench') ||
                    q.includes('desk') ||
                    q.includes('room') ||
                    q.includes('area') ||
                    q.includes('campus')
                  ) {
                    onNavigate('campus');
                  } else if (q.includes('teacher') || q.includes('faculty') || q.includes('staff')) {
                    onNavigate('teachers');
                  } else {
                    onNavigate('courses');
                  }
                }
              }}
              className="px-5 py-3 rounded-xl bg-[#854e25] hover:bg-[#703f1b] text-white text-sm font-bold shadow-md transition-colors shrink-0 flex items-center justify-center gap-2"
            >
              <span>Explore Portal</span>
            </motion.button>
          </motion.div>

          {/* Quick Action Navigation Chips with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 flex items-center gap-2 flex-wrap text-xs"
          >
            <span className="text-[#6d4d33] font-bold">Quick jump:</span>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('campus')}
              className="px-2.5 py-1 rounded-lg bg-[#e3d1be] hover:bg-[#d8c3ac] text-[#4d2d14] border border-[#ccb297] font-semibold transition-colors inline-flex items-center gap-1 shadow-2xs"
            >
              <Building2 className="w-3 h-3 text-[#8a4e21]" />
              Classrooms & Benches
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('courses')}
              className="px-2.5 py-1 rounded-lg bg-[#e3d1be] hover:bg-[#d8c3ac] text-[#4d2d14] border border-[#ccb297] font-semibold transition-colors inline-flex items-center gap-1 shadow-2xs"
            >
              <BookOpen className="w-3 h-3 text-[#8a4e21]" />
              Senior Streams & Subjects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('teachers')}
              className="px-2.5 py-1 rounded-lg bg-[#e3d1be] hover:bg-[#d8c3ac] text-[#4d2d14] border border-[#ccb297] font-semibold transition-colors inline-flex items-center gap-1 shadow-2xs"
            >
              <Users className="w-3 h-3 text-[#8a4e21]" />
              Faculty Directory
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('admission')}
              className="px-2.5 py-1 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white border border-[#72401d] transition-colors inline-flex items-center gap-1 font-bold shadow-2xs"
            >
              <GraduationCap className="w-3 h-3 text-amber-200" />
              Apply Online
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenCounselor}
              className="px-2.5 py-1 rounded-lg bg-[#dfceba] hover:bg-[#d4beaa] text-[#4d2c12] border border-[#cbb399] transition-colors inline-flex items-center gap-1 font-bold shadow-2xs"
            >
              <Sparkles className="w-3 h-3 text-[#8a4e21]" />
              Ask AI Counselor
            </motion.button>
          </motion.div>
        </div>

        {/* Live Academic Metric Strip with Scroll Motion */}
        <div className="mt-12 pt-8 border-t border-[#d8c5b0] grid grid-cols-2 sm:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#faf6f0]/90 p-4 rounded-xl border border-[#dec9b4] shadow-xs"
          >
            <div className="flex items-center gap-2 text-[#854d24] text-xs font-bold mb-1">
              <Compass className="w-4 h-4" />
              <span>Campus Area</span>
            </div>
            <div className="text-2xl font-extrabold text-[#2a1708]">25 Acres</div>
            <p className="text-xs text-[#71543d] mt-0.5">Lush Eco-Green Sanctuary</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#faf6f0]/90 p-4 rounded-xl border border-[#dec9b4] shadow-xs"
          >
            <div className="flex items-center gap-2 text-[#854d24] text-xs font-bold mb-1">
              <Layers className="w-4 h-4" />
              <span>Classrooms & Benches</span>
            </div>
            <div className="text-2xl font-extrabold text-[#2a1708]">64 Suites</div>
            <p className="text-xs text-[#71543d] mt-0.5">Ergonomic Posture-Aligned</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#faf6f0]/90 p-4 rounded-xl border border-[#dec9b4] shadow-xs"
          >
            <div className="flex items-center gap-2 text-[#854d24] text-xs font-bold mb-1">
              <Users className="w-4 h-4" />
              <span>Student Mentorship</span>
            </div>
            <div className="text-2xl font-extrabold text-[#2a1708]">11 : 1</div>
            <p className="text-xs text-[#71543d] mt-0.5">Faculty-to-Scholar Ratio</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#faf6f0]/90 p-4 rounded-xl border border-[#dec9b4] shadow-xs"
          >
            <div className="flex items-center gap-2 text-[#854d24] text-xs font-bold mb-1">
              <Award className="w-4 h-4" />
              <span>University Placement</span>
            </div>
            <div className="text-2xl font-extrabold text-[#2a1708]">100%</div>
            <p className="text-xs text-[#71543d] mt-0.5">Top Global Admittance</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
