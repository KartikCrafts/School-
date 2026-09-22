import React, { useState } from 'react';
import { COURSES_DATA, SUBJECTS_CATALOG } from '../data/schoolData';
import { SubjectItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  GraduationCap,
  Clock,
  Layers,
  ChevronRight,
  CheckCircle2,
  Search,
  BookMarked,
  Sparkles,
  Compass,
  ArrowUpRight,
  X,
} from 'lucide-react';

interface CoursesProps {
  onApplyWithGrade: (grade: string, stream?: string) => void;
  searchFilter?: string;
}

export const CoursesAndSubjectsView: React.FC<CoursesProps> = ({
  onApplyWithGrade,
  searchFilter = '',
}) => {
  const [selectedLevelId, setSelectedLevelId] = useState<string>('senior-secondary');
  const [selectedStreamId, setSelectedStreamId] = useState<string>('stem-engineering');
  const [subjectDepartmentFilter, setSubjectDepartmentFilter] = useState<string>('All');
  const [subjectSearch, setSubjectSearch] = useState<string>(searchFilter);
  const [selectedSubjectModal, setSelectedSubjectModal] = useState<SubjectItem | null>(null);

  const currentLevel = COURSES_DATA.find((c) => c.id === selectedLevelId) || COURSES_DATA[4];

  const currentStream = currentLevel.streams?.find((s) => s.id === selectedStreamId) || currentLevel.streams?.[0];

  const departments = [
    'All',
    'Physical Sciences',
    'Computer Science',
    'Chemical Sciences',
    'Mathematics',
    'Biological Sciences',
    'Languages & Humanities',
    'Commerce & Finance',
    'Visual Arts',
  ];

  const filteredSubjects = SUBJECTS_CATALOG.filter((sub) => {
    const matchesDept =
      subjectDepartmentFilter === 'All' || sub.department === subjectDepartmentFilter;
    const matchesQuery =
      !subjectSearch ||
      sub.name.toLowerCase().includes(subjectSearch.toLowerCase()) ||
      sub.code.toLowerCase().includes(subjectSearch.toLowerCase()) ||
      sub.keyTopics.some((t) => t.toLowerCase().includes(subjectSearch.toLowerCase()));
    return matchesDept && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header Section with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-2.5 py-1 rounded-md border border-[#dfceba] mb-2">
          <BookOpen className="w-3.5 h-3.5 text-[#854e25]" />
          Academics & Curricula
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
          Academic Levels, Senior Streams & Subject Matrix
        </h2>
        <p className="text-sm text-[#66462d] mt-1 max-w-3xl">
          An internationally benchmarked academic curriculum aligned with CBSE national standards and IB inquiry-based learning principles.
          Explore course outlines, lab credits, and dedicated faculty leads.
        </p>
      </motion.div>

      {/* Grade Level Selector Tabs in Light Brown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="bg-[#ede2d5] p-1.5 rounded-2xl border border-[#d9c5b2] overflow-x-auto scrollbar-none flex items-center gap-1"
      >
        {COURSES_DATA.map((level) => {
          const isSelected = selectedLevelId === level.id;
          return (
            <button
              key={level.id}
              onClick={() => setSelectedLevelId(level.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#854e25] text-white shadow-xs'
                  : 'text-[#5e3c23] hover:text-[#2d1808] hover:bg-[#dfceba]'
              }`}
            >
              <GraduationCap className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-200' : 'text-[#8f6d50]'}`} />
              <span>{level.levelName}</span>
              <span className={`text-[10px] font-normal ${isSelected ? 'text-amber-100' : 'text-[#7d5c41]'}`}>
                ({level.grades.split(',')[0]})
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Active Grade Level Overview Card in Light Brown Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 sm:p-8 shadow-xs"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#ebdccb] text-[#5e3416] border border-[#dfceba]">
                {currentLevel.grades}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#f3e7db] text-[#78451f] border border-[#dfceba]">
                Age: {currentLevel.ageRange}
              </span>
              <span className="text-xs text-[#735339] font-medium">
                • {currentLevel.board}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#291708]">{currentLevel.levelName}</h3>
            <p className="text-sm text-[#66462d] mt-2 leading-relaxed">{currentLevel.description}</p>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#543013] mb-3">
                Core Academic & Pedagogical Pillars:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentLevel.keyPillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-2 bg-[#f4ebe1] p-3 rounded-lg border border-[#dfceba] text-xs text-[#4d2d14]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#854e25] shrink-0 mt-0.5" />
                    <span className="font-medium">{pillar}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#dfceba] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#66462d]">
                <Clock className="w-4 h-4 text-[#854e25]" />
                <span className="font-semibold text-[#291708]">Daily Timetable:</span>
                <span>{currentLevel.schedule}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onApplyWithGrade(currentLevel.grades)}
                className="px-4 py-2 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                Apply for {currentLevel.levelName}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>

          {/* Quick Level Fact Box in Light Warm Sand */}
          <div className="lg:col-span-4 bg-[#f5ede2] rounded-xl p-5 border border-[#dfceba]">
            <span className="text-xs font-bold text-[#735339] uppercase tracking-wider block mb-3">
              Cohort Snapshot
            </span>
            <div className="space-y-3 text-xs">
              <div className="bg-[#faf6f0] p-3 rounded-lg border border-[#dfceba]">
                <span className="text-[#735339] block">Current Enrollment:</span>
                <span className="text-lg font-extrabold text-[#291708]">{currentLevel.studentCount} Scholars</span>
              </div>
              <div className="bg-[#faf6f0] p-3 rounded-lg border border-[#dfceba]">
                <span className="text-[#735339] block">Classroom Format:</span>
                <span className="font-bold text-[#4d2d14]">Max 24 Scholars / Section</span>
              </div>
              <div className="bg-[#faf6f0] p-3 rounded-lg border border-[#dfceba]">
                <span className="text-[#735339] block">Bench & Seating Standard:</span>
                <span className="font-bold text-[#4d2d14]">Ergonomic Dual Beechwood Units</span>
              </div>
              <div className="bg-[#faf6f0] p-3 rounded-lg border border-[#dfceba]">
                <span className="text-[#735339] block">Academic Affiliation:</span>
                <span className="font-bold text-[#4d2d14]">{currentLevel.board}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SENIOR SECONDARY STREAM SELECTOR */}
        {currentLevel.streams && currentLevel.streams.length > 0 && (
          <div className="mt-10 pt-8 border-t border-[#dfceba]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-lg font-bold text-[#291708] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Grade 11 & 12 Specialized Career Streams
                </h4>
                <p className="text-xs text-[#66462d]">
                  Select a stream to review compulsory subjects, electives, lab practicals, and university career trajectories.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#7a441b] bg-[#ebdccb] px-2.5 py-1 rounded-full border border-[#dfceba] self-start sm:self-auto">
                Seats Open for 2027–28
              </span>
            </div>

            {/* Stream Navigation Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {currentLevel.streams.map((st) => {
                const isStreamActive = currentStream?.id === st.id;
                return (
                  <motion.div
                    key={st.id}
                    whileHover={{ y: -3 }}
                    onClick={() => setSelectedStreamId(st.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isStreamActive
                        ? 'bg-[#4a2810] text-white border-[#4a2810] shadow-md'
                        : 'bg-[#f4ebe1] text-[#291708] border-[#dfceba] hover:border-[#854e25] hover:bg-[#ede2d5]'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider block mb-1 ${
                        isStreamActive ? 'text-amber-200' : 'text-[#854e25]'
                      }`}
                    >
                      {st.code}
                    </span>
                    <h5 className="font-bold text-sm leading-snug">{st.name}</h5>
                    <div className="mt-3 flex items-center justify-between text-[11px] pt-2 border-t border-current/15">
                      <span>{st.seatsAvailable} Seats / Batch</span>
                      <span className="font-semibold">{isStreamActive ? 'Active View' : 'Explore'} &rarr;</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Active Stream Detailed Breakdown */}
            {currentStream && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#f5ede2] rounded-xl p-6 border border-[#dfceba]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#dfceba]">
                  <div>
                    <span className="text-xs font-bold text-[#7a441b] uppercase tracking-wide">
                      Stream Specification
                    </span>
                    <h4 className="text-xl font-extrabold text-[#291708] mt-0.5">
                      {currentStream.name}
                    </h4>
                    <p className="text-xs text-[#66462d] mt-1 max-w-2xl">{currentStream.description}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onApplyWithGrade('Grade 11', currentStream.name)}
                    className="px-4 py-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-xs transition-colors shrink-0 inline-flex items-center gap-1.5"
                  >
                    <GraduationCap className="w-4 h-4 text-amber-200" />
                    Apply for this Stream
                  </motion.button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Compulsory Subjects */}
                  <div className="bg-[#faf6f0] p-4 rounded-xl border border-[#dfceba] shadow-2xs">
                    <span className="text-xs font-bold text-[#291708] block mb-2 flex items-center gap-1.5">
                      <BookMarked className="w-3.5 h-3.5 text-[#854e25]" />
                      Compulsory Core Subjects
                    </span>
                    <ul className="space-y-1.5">
                      {currentStream.compulsorySubjects.map((sub, i) => (
                        <li key={i} className="text-xs text-[#54351d] flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-[#854e25] shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Elective Options */}
                  <div className="bg-[#faf6f0] p-4 rounded-xl border border-[#dfceba] shadow-2xs">
                    <span className="text-xs font-bold text-[#291708] block mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#a86532]" />
                      Flexible 5th & 6th Electives
                    </span>
                    <ul className="space-y-1.5">
                      {currentStream.electiveSubjects.map((sub, i) => (
                        <li key={i} className="text-xs text-[#54351d] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#854e25] shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Pathways */}
                  <div className="bg-[#faf6f0] p-4 rounded-xl border border-[#dfceba] shadow-2xs">
                    <span className="text-xs font-bold text-[#291708] block mb-2 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#854e25]" />
                      University & Career Targets
                    </span>
                    <ul className="space-y-1.5">
                      {currentStream.careerPaths.map((career, i) => (
                        <li key={i} className="text-xs text-[#54351d] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>

      {/* COMPREHENSIVE SUBJECTS CATALOG MATRIX */}
      <div className="pt-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-2.5 py-1 rounded border border-[#dfceba] mb-1">
              <BookMarked className="w-3.5 h-3.5 text-[#854e25]" />
              Syllabus & Laboratory Details
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#291708]">
              Complete Subjects Catalog
            </h3>
            <p className="text-xs text-[#66462d] mt-1">
              Inspect curriculum outlines, lab credits, and assigned master educators.
            </p>
          </div>

          {/* Search in subjects */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={subjectSearch}
              onChange={(e) => setSubjectSearch(e.target.value)}
              placeholder="Search subject or topic..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-[#dfceba] text-xs text-[#291708] placeholder-[#8f7056] focus:border-[#854e25] focus:ring-1 focus:ring-[#854e25] outline-hidden shadow-2xs"
            />
            <Search className="w-4 h-4 text-[#8f7056] absolute left-3 top-3" />
          </div>
        </motion.div>

        {/* Department Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {departments.map((dept) => (
            <motion.button
              key={dept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubjectDepartmentFilter(dept)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                subjectDepartmentFilter === dept
                  ? 'bg-[#854e25] text-white shadow-xs'
                  : 'bg-[#ebdccb] text-[#593922] hover:bg-[#dfceba]'
              }`}
            >
              {dept}
            </motion.button>
          ))}
        </div>

        {/* Subjects Grid with Scroll Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject, idx) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setSelectedSubjectModal(subject)}
              className="bg-[#faf6f0] rounded-xl border border-[#dfceba] p-5 hover:border-[#854e25] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#ebdccb] text-[#5e3416] border border-[#dfceba]">
                    {subject.code}
                  </span>
                  <span className="text-[11px] font-medium text-[#735339]">
                    {subject.weeklyHours} Hrs/Week
                  </span>
                </div>

                <h4 className="font-bold text-base text-[#291708] group-hover:text-[#854e25] transition-colors">
                  {subject.name}
                </h4>
                <p className="text-xs text-[#735339] mt-1 font-medium">{subject.department}</p>

                <p className="text-xs text-[#66462d] mt-3 line-clamp-2 leading-relaxed">
                  {subject.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#dfceba] flex items-center justify-between text-xs text-[#735339]">
                  <span>{subject.theoryVsPractical}</span>
                  <span className="font-semibold text-[#4d2d14]">{subject.grades.join(', ')}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#dfceba] flex items-center justify-between text-xs">
                <span className="text-[#854e25] font-semibold group-hover:underline inline-flex items-center gap-1">
                  View Full Syllabus
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#8f7056] text-[11px]">
                  {subject.assignedTeachers[0]?.split('(')[0] || 'Oakridge Faculty'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="bg-[#f5ede2] rounded-2xl p-12 text-center border border-[#dfceba]">
            <p className="text-[#735339] text-sm">No subjects found matching "{subjectSearch}".</p>
            <button
              onClick={() => {
                setSubjectSearch('');
                setSubjectDepartmentFilter('All');
              }}
              className="mt-3 text-xs text-[#854e25] font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Subject Detail Modal */}
      <AnimatePresence>
        {selectedSubjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#170c04]/75 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedSubjectModal(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="bg-[#faf6f0] max-w-2xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#dfceba] max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#ebdccb] text-[#5e3416] border border-[#dfceba]">
                      {selectedSubjectModal.code}
                    </span>
                    <span className="text-xs text-[#735339]">{selectedSubjectModal.department}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#291708] mt-1">
                    {selectedSubjectModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSubjectModal(null)}
                  className="p-1.5 rounded-lg text-[#8f7056] hover:text-[#291708] hover:bg-[#ebdccb]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#66462d] mt-3 leading-relaxed">
                {selectedSubjectModal.description}
              </p>

              {/* Metrics */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="bg-[#f5ede2] p-2.5 rounded-lg border border-[#dfceba]">
                  <span className="text-[#735339] text-[10px] block">Weekly Hours</span>
                  <span className="font-bold text-[#291708]">{selectedSubjectModal.weeklyHours} Hours</span>
                </div>
                <div className="bg-[#f5ede2] p-2.5 rounded-lg border border-[#dfceba]">
                  <span className="text-[#735339] text-[10px] block">Credits</span>
                  <span className="font-bold text-[#291708]">{selectedSubjectModal.credits} Academic Credits</span>
                </div>
                <div className="bg-[#f5ede2] p-2.5 rounded-lg border border-[#dfceba] col-span-2">
                  <span className="text-[#735339] text-[10px] block">Evaluation Balance</span>
                  <span className="font-bold text-[#291708]">{selectedSubjectModal.theoryVsPractical}</span>
                </div>
              </div>

              {/* Key Topics */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#543013] mb-2">
                  Key Syllabus Modules:
                </h4>
                <div className="space-y-1.5">
                  {selectedSubjectModal.keyTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-2 bg-[#f4ebe1] rounded-lg border border-[#dfceba] text-xs text-[#4d2d14] flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#854e25] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Textbook & Faculty */}
              <div className="mt-5 pt-4 border-t border-[#dfceba] text-xs space-y-2">
                <div>
                  <span className="font-bold text-[#4d2d14]">Prescribed Reference Textbook: </span>
                  <span className="text-[#66462d]">{selectedSubjectModal.textbook}</span>
                </div>
                <div>
                  <span className="font-bold text-[#4d2d14]">Faculty Leadership: </span>
                  <span className="text-[#66462d]">{selectedSubjectModal.assignedTeachers.join(' & ')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#dfceba] flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedSubjectModal(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-[#66462d] hover:bg-[#ebdccb]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const grade = selectedSubjectModal.grades[0] || 'Grade 11';
                    setSelectedSubjectModal(null);
                    onApplyWithGrade(grade);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Apply for this Grade ({selectedSubjectModal.grades[0]})
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
