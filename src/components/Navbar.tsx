import React, { useState } from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Users,
  FileCheck,
  Calculator,
  MessageSquareCode,
  Menu,
  X,
  Compass,
  Sparkles,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { motion } from 'motion/react';

export type ActiveTab =
  | 'home'
  | 'campus'
  | 'courses'
  | 'teachers'
  | 'admission'
  | 'track'
  | 'fees'
  | 'tour'
  | 'notices'
  | 'calendar';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenCounselor: () => void;
  applicationCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenCounselor,
  applicationCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'campus', label: 'Campus & Benches', icon: Compass },
    { id: 'courses', label: 'Courses & Subjects', icon: BookOpen },
    { id: 'teachers', label: 'Faculty Directory', icon: Users },
    { id: 'admission', label: 'Apply for Admission', icon: GraduationCap },
    { id: 'track', label: 'Track Status', icon: FileCheck },
    { id: 'fees', label: 'Fee Estimator', icon: Calculator },
    { id: 'tour', label: 'Book Campus Visit', icon: Calendar },
    { id: 'notices', label: 'Notices & Events', icon: Mail },
  ];

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f7f2ea]/95 backdrop-blur-md border-b border-[#dfd0bd] shadow-xs">
      {/* Top Announcement & Quick Contact Ribbon in Warm Light Brown */}
      <div className="bg-[#ebdccb] text-[#4a2e16] text-xs py-1.5 px-4 sm:px-6 border-b border-[#ddcaa9]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 bg-[#dfceba] text-[#543014] font-bold px-2.5 py-0.5 rounded-full text-[11px] border border-[#cbb498]"
            >
              <Sparkles className="w-3 h-3 text-[#945826] animate-pulse" />
              Admissions Open 2027–28
            </motion.span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#66462c]">
              <MapPin className="w-3 h-3 text-[#875328]" />
              25-Acre Eco Campus, Bengaluru
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-[#66462c]">
              CBSE & IB Certified (Affiliation No: 830192)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#5e3e26] text-[11px]">
            <a
              href={`tel:${SCHOOL_INFO.helplinePhone}`}
              className="inline-flex items-center gap-1 hover:text-[#2d1b0d] font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-[#875328]" />
              {SCHOOL_INFO.helplinePhone}
            </a>
            <span className="hidden sm:inline text-[#c4af98]">|</span>
            <button
              onClick={onOpenCounselor}
              className="inline-flex items-center gap-1 font-bold text-[#733f1b] hover:text-[#46230b] transition-colors"
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              Ask AI Counselor
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* School Brand & Crest with Motion */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7e4a24] via-[#653715] to-[#4c260b] flex items-center justify-center text-amber-200 shadow-md border border-[#965c31]"
            >
              <GraduationCap className="w-7 h-7 text-amber-200" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-[#2c1a0c] group-hover:text-[#78431c] transition-colors">
                  Oakridge
                </span>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#75411b] bg-[#eadecc] px-1.5 py-0.5 rounded border border-[#cfbca8]">
                  Academy
                </span>
              </div>
              <p className="text-xs text-[#71543d] font-medium tracking-wide">
                International School & College Prep • Est. 1994
              </p>
            </div>
          </motion.div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const isAdmission = item.id === 'admission';

              if (isAdmission) {
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleTabClick(item.id)}
                    className={`ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-sm ${
                      isActive
                        ? 'bg-[#73401b] text-white shadow-md'
                        : 'bg-[#895228] hover:bg-[#72401c] text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-200" />
                    <span>{item.label}</span>
                    <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
                  </motion.button>
                );
              }

              return (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? 'text-[#482811] bg-[#eadecc] font-extrabold border border-[#d2bfab]'
                      : 'text-[#5c422c] hover:text-[#2d1b0c] hover:bg-[#ece2d4]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#874f24]' : 'text-[#7d614b]'}`} />
                  {item.label}
                  {item.id === 'track' && applicationCount > 0 && (
                    <span className="ml-1 w-4 h-4 rounded-full bg-emerald-700 text-white text-[10px] flex items-center justify-center font-bold">
                      {applicationCount}
                    </span>
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#874f24] rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Quick AI & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCounselor}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#eadecc] hover:bg-[#dfcfbc] text-[#4d2c12] font-bold text-xs border border-[#cfbba4] transition-colors shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8f5222]" />
              <span>AI Advisor</span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-[#4a2e16] hover:bg-[#eadecc] focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu in Warm Light Brown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="xl:hidden border-t border-[#dfceba] bg-[#f8f3eb] px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="grid grid-cols-1 gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const isAdmission = item.id === 'admission';

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isAdmission
                      ? 'bg-[#854e25] text-white my-1'
                      : isActive
                      ? 'bg-[#eadecc] text-[#4a2b13] border border-[#d2beaa]'
                      : 'text-[#543b27] hover:bg-[#ece2d4]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isAdmission ? 'text-amber-200' : 'text-[#7d614a]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.id === 'track' && applicationCount > 0 && (
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-bold">
                      {applicationCount}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-2 border-t border-[#dfceba] mt-2">
              <button
                onClick={() => {
                  onOpenCounselor();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-sm shadow-xs transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Ask AI Admissions Counselor
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
