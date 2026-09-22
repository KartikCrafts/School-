import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { CampusAndInfrastructureView } from './components/CampusAndInfrastructureView';
import { CoursesAndSubjectsView } from './components/CoursesAndSubjectsView';
import { TeachersDirectoryView } from './components/TeachersDirectoryView';
import { AdmissionApplicationView } from './components/AdmissionApplicationView';
import { TrackApplicationView } from './components/TrackApplicationView';
import { FeeCalculatorView } from './components/FeeCalculatorView';
import { CampusTourBookingView } from './components/CampusTourBookingView';
import { NoticesAndCalendarView } from './components/NoticesAndCalendarView';
import { AiCounselorModal } from './components/AiCounselorModal';
import { Footer } from './components/Footer';
import { AdmissionApplication } from './types';
import { motion } from 'motion/react';
import {
  Sparkles,
  Layers,
  GraduationCap,
  Users,
  CheckCircle2,
  ArrowRight,
  Award,
} from 'lucide-react';

const INITIAL_APPLICATIONS: AdmissionApplication[] = [
  {
    id: 'OAK-2027-4182',
    submittedAt: 'September 18, 2026',
    studentFirstName: 'Aarav',
    studentLastName: 'Sen',
    dateOfBirth: '2011-04-12',
    gender: 'Male',
    gradeApplying: 'Grade 11 (Senior Secondary Stream)',
    streamChosen: 'STEM Engineering & Tech (PCM)',
    academicYear: '2027–2028',
    previousSchool: 'Greenwood High International',
    previousGpaOrPercentage: '96.2%',
    parentName: 'Vikram Sen',
    parentRelationship: 'Father',
    parentEmail: 'vikram.sen@techcorp.in',
    parentPhone: '+91 98450 77123',
    residentialAddress: 'Whitefield Green Glen Layout, Bengaluru',
    transportRequired: true,
    busZone: 'Zone 2 (5 km - 15 km)',
    hostelRequired: false,
    scholarshipCategory: 'Merit Scholarship (90%+ Academic Track)',
    status: 'Documents Verified',
    applicationFeePaid: true,
    uploadedDocuments: [
      { name: 'Aarav_Birth_Certificate.pdf', size: '1.2 MB', status: 'Verified' },
      { name: 'Grade_10_Official_Transcript.pdf', size: '2.4 MB', status: 'Verified' },
    ],
    remarks: 'Transcripts verified. Diagnostic entrance assessment scheduled for Oct 14, 2026.',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCounselorOpen, setIsCounselorOpen] = useState(false);
  const [prefilledGrade, setPrefilledGrade] = useState('Grade 11');
  const [prefilledStream, setPrefilledStream] = useState('STEM Engineering & Tech (PCM)');
  const [trackedApplicationId, setTrackedApplicationId] = useState<string>('OAK-2027-4182');

  const [applications, setApplications] = useState<AdmissionApplication[]>(() => {
    try {
      const saved = localStorage.getItem('oakridge_admissions');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // ignore
    }
    return INITIAL_APPLICATIONS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('oakridge_admissions', JSON.stringify(applications));
    } catch (e) {
      // ignore
    }
  }, [applications]);

  const handleApplicationCreated = (newApp: AdmissionApplication) => {
    setApplications((prev) => [newApp, ...prev]);
    setTrackedApplicationId(newApp.id);
  };

  const handleApplyWithCourse = (grade: string, stream?: string) => {
    setPrefilledGrade(grade);
    if (stream) setPrefilledStream(stream);
    setActiveTab('admission');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTrackRedirect = (appId: string) => {
    setTrackedApplicationId(appId);
    setActiveTab('track');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#331f10] flex flex-col font-sans selection:bg-[#ebd0b4] selection:text-[#2d1708]">
      {/* Top Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCounselor={() => setIsCounselorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* TAB 1: HOME PORTAL OVERVIEW */}
        {activeTab === 'home' && (
          <div>
            <HeroBanner
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenCounselor={() => setIsCounselorOpen(true)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* Quick Feature Grid for School Area, Benches, Courses, Teachers, and Admissions */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto mb-10"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-3 py-1 rounded-md border border-[#dfceba]">
                  Integrated User Portal
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2a1708] mt-2">
                  Explore Oakridge Academy
                </h2>
                <p className="text-xs sm:text-sm text-[#66462d] mt-2">
                  Select a portal destination below to review physical infrastructure, ergonomic seating,
                  curriculum streams, faculty portfolios, and admission steps.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* School Area & Benches Card */}
                <motion.div
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => {
                    setActiveTab('campus');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 shadow-2xs hover:shadow-xl hover:border-[#854e25] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#ebdccb] text-[#78431c] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6 text-[#78431c]" />
                    </div>
                    <h3 className="font-bold text-lg text-[#291708] group-hover:text-[#78431c] transition-colors">
                      School Area & Benches
                    </h3>
                    <p className="text-xs text-[#66462d] mt-2 leading-relaxed">
                      Explore our 25-acre green masterplan, 64 smart classroom suites, and German Beechwood
                      posture-aligned ergonomic benches designed to protect spinal curvature.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#ebdccb] flex items-center justify-between text-xs font-bold text-[#854e25]">
                    <span>Inspect Classrooms & Benches</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>

                {/* Courses & Subjects Card */}
                <motion.div
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => {
                    setActiveTab('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 shadow-2xs hover:shadow-xl hover:border-[#854e25] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#ebdccb] text-[#78431c] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-6 h-6 text-[#78431c]" />
                    </div>
                    <h3 className="font-bold text-lg text-[#291708] group-hover:text-[#78431c] transition-colors">
                      Courses & Subjects
                    </h3>
                    <p className="text-xs text-[#66462d] mt-2 leading-relaxed">
                      From Early Montessori to Senior Secondary STEM (PCM), Medical (PCB), Commerce, and
                      Humanities. Review detailed subject catalogs, lab practicals, and weekly hours.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#ebdccb] flex items-center justify-between text-xs font-bold text-[#854e25]">
                    <span>View Academic Matrix</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>

                {/* Teachers & Faculty Card */}
                <motion.div
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => {
                    setActiveTab('teachers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 shadow-2xs hover:shadow-xl hover:border-[#854e25] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#ebdccb] text-[#78431c] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-[#78431c]" />
                    </div>
                    <h3 className="font-bold text-lg text-[#291708] group-hover:text-[#78431c] transition-colors">
                      Teachers & Mentors
                    </h3>
                    <p className="text-xs text-[#66462d] mt-2 leading-relaxed">
                      135+ master educators holding credentials from Cambridge, MIT, Oxford, IIT, and IISc.
                      Review biographies, research publications, and book personal consultation slots.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#ebdccb] flex items-center justify-between text-xs font-bold text-[#854e25]">
                    <span>Meet the Faculty</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>

                {/* Apply for Admission Card */}
                <motion.div
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => {
                    setActiveTab('admission');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-br from-[#8d532b] via-[#75411c] to-[#593012] text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between border border-[#a46537]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#4a260d] text-amber-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-amber-200" />
                    </div>
                    <h3 className="font-extrabold text-lg text-white">
                      Apply for Admission
                    </h3>
                    <p className="text-xs text-[#ebd7c5] mt-2 leading-relaxed font-medium">
                      Seamless 5-step digital enrolment form for 2027–2028. Instant registration reference ID,
                      transcript upload simulation, and diagnostic assessment scheduling.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-amber-200">
                    <span>Start Online Application</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              </div>

              {/* Spotlight: Ergonomic Benches & Infrastructure Teaser with Scroll Motion */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className="mt-14 bg-[#faf5ed] rounded-3xl border border-[#dfceba] overflow-hidden shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-6 p-8 sm:p-12"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-3 py-1 rounded-md border border-[#d8c3ad]">
                      Infrastructure Highlight
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#281507] mt-3 tracking-tight">
                      Why Classroom Seating Matters for Academic Retention
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66462d] mt-3 leading-relaxed">
                      Children spend over 1,200 hours per year seated in school classrooms. 
                      Oakridge invested in orthopedically engineered German Beechwood dual benches featuring 
                      a 12° reading/writing incline, S-curve spinal support, and waterfall seat front edges 
                      that improve oxygen circulation and reduce physical fatigue.
                    </p>

                    <div className="mt-6 space-y-2 text-xs text-[#523620]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#854e25]" />
                        <span>FSC-Certified non-toxic waterborne lacquer finishes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#854e25]" />
                        <span>Modular STEM hexagonal tables with USB-PD power hubs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#854e25]" />
                        <span>Dedicated under-bench wire book baskets & dual backpack hooks</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => {
                          setActiveTab('campus');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-md transition-colors"
                      >
                        Explore Benches & Photo Gallery
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => {
                          setActiveTab('tour');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-[#ebdccb] hover:bg-[#e0cfbe] text-[#42250f] font-bold text-xs border border-[#cfbfae] transition-colors"
                      >
                        Book In-Person Campus Tour
                      </motion.button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="lg:col-span-6 h-full min-h-[340px] bg-[#ebdccb] relative overflow-hidden"
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
                      alt="Ergonomic Classroom Benches"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#261406]/80 via-transparent to-transparent flex items-end p-6">
                      <span className="text-[#f5ede3] text-xs font-semibold bg-[#261406]/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#85532d]/40">
                        Senior Quad Classrooms: Model 2026 Beechwood Dual Suites
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* TAB 2: CAMPUS, BENCHES & GALLERY */}
        {activeTab === 'campus' && (
          <CampusAndInfrastructureView
            onApplyClick={() => {
              setActiveTab('admission');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookTourClick={() => {
              setActiveTab('tour');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB 3: COURSES & SUBJECTS */}
        {activeTab === 'courses' && (
          <CoursesAndSubjectsView
            onApplyWithGrade={handleApplyWithCourse}
            searchFilter={searchQuery}
          />
        )}

        {/* TAB 4: TEACHERS & FACULTY DIRECTORY */}
        {activeTab === 'teachers' && (
          <TeachersDirectoryView searchFilter={searchQuery} />
        )}

        {/* TAB 5: APPLY FOR ADMISSION */}
        {activeTab === 'admission' && (
          <AdmissionApplicationView
            onApplicationCreated={handleApplicationCreated}
            prefilledGrade={prefilledGrade}
            prefilledStream={prefilledStream}
            onTrackRedirect={handleTrackRedirect}
          />
        )}

        {/* TAB 6: TRACK APPLICATION */}
        {activeTab === 'track' && (
          <TrackApplicationView
            applications={applications}
            initialSearchId={trackedApplicationId}
            onApplyNew={() => {
              setActiveTab('admission');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB 7: FEE CALCULATOR */}
        {activeTab === 'fees' && (
          <FeeCalculatorView onApplyWithSelection={handleApplyWithCourse} />
        )}

        {/* TAB 8: SCHEDULE CAMPUS TOUR */}
        {activeTab === 'tour' && (
          <CampusTourBookingView
            onApplyClick={() => {
              setActiveTab('admission');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB 9: NOTICES & CALENDAR */}
        {(activeTab === 'calendar' || activeTab === 'notices') && <NoticesAndCalendarView />}
      </main>

      {/* Persistent Floating AI Counselor Action Button in Warm Brown */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsCounselorOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-[#854e25] to-[#5f3314] hover:from-[#72401d] hover:to-[#4e270d] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-[#caa888]/50 transition-transform group"
      >
        <div className="relative">
          <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-[#4a260d]" />
        </div>
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          Ask AI Admissions Counselor
        </span>
      </motion.button>

      {/* AI Counselor Dialog Modal */}
      <AiCounselorModal
        isOpen={isCounselorOpen}
        onClose={() => setIsCounselorOpen(false)}
        onNavigateToTab={(tab) => {
          setIsCounselorOpen(false);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Portal Footer in Warm Light Brown */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCounselor={() => setIsCounselorOpen(true)}
      />
    </div>
  );
}
