import React, { useState } from 'react';
import { TEACHERS_DATA } from '../data/schoolData';
import { TeacherProfile } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Search,
  Award,
  Mail,
  Clock,
  Calendar,
  CheckCircle2,
  X,
} from 'lucide-react';

interface TeachersProps {
  searchFilter?: string;
}

export const TeachersDirectoryView: React.FC<TeachersProps> = ({
  searchFilter = '',
}) => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(searchFilter);
  const [selectedTeacherForConsult, setSelectedTeacherForConsult] = useState<TeacherProfile | null>(null);
  const [consultationSuccess, setConsultationSuccess] = useState<boolean>(false);
  const [consultForm, setConsultForm] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    date: '2026-10-06',
    timeSlot: '03:45 PM – 04:15 PM',
    topic: 'Academic progress and syllabus orientation',
  });

  const departments = [
    'All',
    'Physical Sciences',
    'Computer Science',
    'Languages & Humanities',
    'Mathematics',
    'Biological Sciences',
    'Commerce & Finance',
    'Visual Arts',
    'Physical Education & Athletics',
  ];

  const filteredTeachers = TEACHERS_DATA.filter((teacher) => {
    const matchesDept = departmentFilter === 'All' || teacher.department === departmentFilter;
    const matchesQuery =
      !searchQuery ||
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subjectsTaught.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      teacher.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSuccess(true);
    setTimeout(() => {
      setConsultationSuccess(false);
      setSelectedTeacherForConsult(null);
    }, 2800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-2.5 py-1 rounded-md border border-[#dfceba] mb-2">
            <Users className="w-3.5 h-3.5 text-[#854e25]" />
            Distinguished Faculty
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
            Meet Our Masters & Department Chairs
          </h2>
          <p className="text-sm text-[#66462d] mt-1 max-w-2xl">
            135+ accomplished scholars, authors, and researchers with advanced degrees from Cambridge, MIT,
            Oxford, IIT, and IISc maintaining an 11:1 student-to-mentor ratio.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by teacher name, subject, or credential..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-[#dfceba] text-xs text-[#291708] placeholder-[#8f7056] focus:border-[#854e25] focus:ring-1 focus:ring-[#854e25] outline-hidden shadow-2xs"
          />
          <Search className="w-4 h-4 text-[#8f7056] absolute left-3 top-3" />
        </div>
      </motion.div>

      {/* Department Filter Pills in Light Brown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none"
      >
        {departments.map((dept) => (
          <motion.button
            key={dept}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDepartmentFilter(dept)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              departmentFilter === dept
                ? 'bg-[#854e25] text-white shadow-xs'
                : 'bg-[#ebdccb] text-[#593922] hover:bg-[#dfceba]'
            }`}
          >
            {dept}
          </motion.button>
        ))}
      </motion.div>

      {/* Faculty Cards Grid with Scroll Motion */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher, idx) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#854e25] transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Header Image & Badge */}
              <div className="relative aspect-16/10 bg-[#291708] overflow-hidden">
                <img
                  src={teacher.photoUrl}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261406] via-[#261406]/30 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200 bg-[#3b200c]/80 backdrop-blur-xs px-2 py-0.5 rounded border border-amber-300/30">
                    {teacher.experienceYears}+ Years Experience
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 leading-tight">{teacher.name}</h3>
                  <p className="text-xs text-[#dfcebd] font-medium">{teacher.role}</p>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-5 space-y-4 text-xs">
                <div>
                  <span className="text-[#735339] text-[11px] block font-medium">Academic Pedigree:</span>
                  <span className="font-semibold text-[#291708] leading-snug block mt-0.5">
                    {teacher.qualifications}
                  </span>
                </div>

                <p className="text-[#66462d] leading-relaxed line-clamp-3">{teacher.bio}</p>

                {/* Subjects Taught */}
                <div>
                  <span className="text-[#735339] text-[11px] block font-medium mb-1">
                    Specialist Subjects:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {teacher.subjectsTaught.map((sub, i) => (
                      <span
                        key={i}
                        className="bg-[#ebdccb] text-[#5e3416] px-2 py-0.5 rounded text-[11px] font-semibold border border-[#dfceba]"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards in Warm Golden Sand */}
                {teacher.awards && teacher.awards.length > 0 && (
                  <div className="bg-[#f5ede2] p-2.5 rounded-lg border border-[#dfceba]">
                    <span className="text-[#7a441b] font-bold text-[11px] flex items-center gap-1 mb-1">
                      <Award className="w-3.5 h-3.5 text-[#854e25]" />
                      Key Accolades
                    </span>
                    <p className="text-[#593922] text-[11px] leading-tight">
                      {teacher.awards[0]}
                    </p>
                  </div>
                )}

                {/* Office Hours */}
                <div className="flex items-center gap-1.5 text-[#735339] text-[11px] pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#854e25] shrink-0" />
                  <span>{teacher.officeHours}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions in Light Brown */}
            <div className="p-4 bg-[#f5ede2] border-t border-[#dfceba] flex items-center justify-between gap-2">
              <a
                href={`mailto:${teacher.email}`}
                className="p-2 rounded-lg bg-[#faf6f0] border border-[#dfceba] text-[#66462d] hover:text-[#854e25] hover:border-[#854e25] transition-colors"
                title={`Email ${teacher.name}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTeacherForConsult(teacher)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs transition-colors shadow-2xs text-center flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="bg-[#f5ede2] rounded-2xl p-12 text-center border border-[#dfceba]">
          <p className="text-[#735339] text-sm">No faculty members found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setDepartmentFilter('All');
            }}
            className="mt-3 text-xs text-[#854e25] font-bold hover:underline"
          >
            Reset Search
          </button>
        </div>
      )}

      {/* Book Consultation Modal */}
      <AnimatePresence>
        {selectedTeacherForConsult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#170c04]/75 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedTeacherForConsult(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="bg-[#faf6f0] max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#dfceba]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold text-[#7a441b] uppercase tracking-wider">
                    Academic Consultation Request
                  </span>
                  <h3 className="text-xl font-extrabold text-[#291708] mt-1">
                    Meet with {selectedTeacherForConsult.name}
                  </h3>
                  <p className="text-xs text-[#735339] mt-0.5">{selectedTeacherForConsult.role}</p>
                </div>
                <button
                  onClick={() => setSelectedTeacherForConsult(null)}
                  className="p-1.5 rounded-lg text-[#8f7056] hover:text-[#291708] hover:bg-[#ebdccb]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {consultationSuccess ? (
                <div className="my-8 text-center py-6 bg-[#ede2d5] rounded-xl border border-[#dfceba]">
                  <CheckCircle2 className="w-12 h-12 text-[#854e25] mx-auto mb-2" />
                  <h4 className="text-base font-bold text-[#291708]">Consultation Slot Reserved!</h4>
                  <p className="text-xs text-[#66462d] mt-1 max-w-xs mx-auto">
                    A confirmation email and Google Meet / Room Pass have been dispatched to {consultForm.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookConsultation} className="mt-5 space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold text-[#4d2d14] block mb-1">Parent / Guardian Name</label>
                      <input
                        type="text"
                        required
                        value={consultForm.parentName}
                        onChange={(e) => setConsultForm({ ...consultForm, parentName: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-3 py-2 rounded-lg border border-[#dfceba] focus:border-[#854e25] outline-hidden bg-white text-[#291708]"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-[#4d2d14] block mb-1">Student Name & Grade</label>
                      <input
                        type="text"
                        required
                        value={consultForm.studentName}
                        onChange={(e) => setConsultForm({ ...consultForm, studentName: e.target.value })}
                        placeholder="e.g. Aryan Sharma (Grade 10)"
                        className="w-full px-3 py-2 rounded-lg border border-[#dfceba] focus:border-[#854e25] outline-hidden bg-white text-[#291708]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold text-[#4d2d14] block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={consultForm.email}
                        onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-3 py-2 rounded-lg border border-[#dfceba] focus:border-[#854e25] outline-hidden bg-white text-[#291708]"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-[#4d2d14] block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={consultForm.phone}
                        onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg border border-[#dfceba] focus:border-[#854e25] outline-hidden bg-white text-[#291708]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold text-[#4d2d14] block mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={consultForm.date}
                        onChange={(e) => setConsultForm({ ...consultForm, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-[#dfceba] focus:border-[#854e25] outline-hidden bg-white text-[#291708]"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-[#4d2d14] block mb-1">Available Slot</label>
                      <select
                        value={consultForm.timeSlot}
                        onChange={(e) => setConsultForm({ ...consultForm, timeSlot: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-[#dfceba] focus:border-[#854e25] outline-hidden bg-white text-[#291708]"
                      >
                        <option>03:45 PM – 04:15 PM (In-Person)</option>
                        <option>04:15 PM – 04:45 PM (In-Person)</option>
                        <option>05:00 PM – 05:30 PM (Virtual Google Meet)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-[#4d2d14] block mb-1">Discussion Agenda / Questions</label>
                    <textarea
                      rows={2}
                      value={consultForm.topic}
                      onChange={(e) => setConsultForm({ ...consultForm, topic: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-[#dfceba] focus:border-[#854e25] outline-hidden resize-none bg-white text-[#291708]"
                    />
                  </div>

                  <div className="pt-3 border-t border-[#dfceba] flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedTeacherForConsult(null)}
                      className="px-4 py-2 rounded-lg text-[#66462d] hover:bg-[#ebdccb] font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white font-bold shadow-xs"
                    >
                      Confirm Consultation Slot
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
