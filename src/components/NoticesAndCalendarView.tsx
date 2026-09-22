import React, { useState } from 'react';
import { SCHOOL_NOTICES, UPCOMING_EVENTS } from '../data/schoolData';
import { motion } from 'motion/react';
import {
  Bell,
  Calendar,
  Clock,
  Pin,
  MapPin,
  ChevronRight,
  Search,
} from 'lucide-react';

export const NoticesAndCalendarView: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = ['All', 'Admissions', 'Academics', 'Infrastructure', 'Examination'];

  const filteredNotices = SCHOOL_NOTICES.filter((notice) => {
    const matchesCat = filterCategory === 'All' || notice.category === filterCategory;
    const matchesSearch =
      !search ||
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.summary.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-2.5 py-1 rounded-md mb-2 border border-[#dfceba]">
          <Bell className="w-3.5 h-3.5 text-[#854e25]" />
          Campus Gazette & Bulletins
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
          Official School Notices & Academic Calendar
        </h2>
        <p className="text-sm text-[#66462d] mt-1 max-w-2xl">
          Real-time circulars regarding admissions, campus infrastructure rollouts, 
          examination dates, and inter-school academic symposiums.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Notices Feed in Light Brown */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    filterCategory === cat
                      ? 'bg-[#854e25] text-white shadow-xs'
                      : 'bg-[#ebdccb] text-[#593922] hover:bg-[#dfceba]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-60">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search circulars..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#dfceba] text-xs bg-white text-[#291708] outline-hidden focus:border-[#854e25]"
              />
              <Search className="w-3.5 h-3.5 text-[#8f7056] absolute left-2.5 top-2.5" />
            </div>
          </motion.div>

          <div className="space-y-4">
            {filteredNotices.map((notice, idx) => {
              const isPinned = notice.pinned ?? (notice.priority === 'Urgent');
              const noticeAuthor = notice.signatory || notice.author;
              return (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                  className={`p-5 rounded-xl border transition-all ${
                    isPinned
                      ? 'bg-[#f5ede2] border-[#dfceba] shadow-2xs ring-1 ring-[#dfceba]'
                      : 'bg-[#faf6f0] border-[#dfceba] hover:border-[#854e25] shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      {isPinned && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#7a441b] bg-[#ebdccb] px-2 py-0.5 rounded border border-[#dfceba]">
                          <Pin className="w-3 h-3 text-[#854e25]" /> Pinned Official Circular
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ebdccb] text-[#5e3416] border border-[#dfceba]">
                        {notice.category}
                      </span>
                    </div>
                    <span className="text-[#735339] font-mono text-[11px]">{notice.date}</span>
                  </div>

                  <h4 className="font-bold text-base text-[#291708] leading-snug">
                    {notice.title}
                  </h4>
                  <p className="text-xs text-[#66462d] mt-2 leading-relaxed">
                    {notice.summary}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#dfceba] flex items-center justify-between text-xs text-[#735339]">
                    <span>Signatory: {noticeAuthor}</span>
                    <span className="text-[#854e25] font-semibold cursor-pointer hover:underline inline-flex items-center gap-1">
                      Download Signed PDF
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events Calendar Widget in Light Brown */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 shadow-xs space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[#dfceba] pb-3">
            <h3 className="font-bold text-base text-[#291708] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#854e25]" />
              Calendar Events
            </h3>
            <span className="text-xs text-[#854e25] font-semibold">Term 1 (2026–27)</span>
          </div>

          <div className="space-y-4">
            {UPCOMING_EVENTS.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02 }}
                className="p-3.5 bg-[#f5ede2] rounded-xl border border-[#dfceba] space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#7a441b] bg-[#ebdccb] px-2 py-0.5 rounded border border-[#dfceba]">
                    {event.date}
                  </span>
                  <span className="text-[10px] font-semibold text-[#735339]">{event.category}</span>
                </div>

                <h5 className="font-bold text-sm text-[#291708] leading-tight">
                  {event.title}
                </h5>
                <p className="text-xs text-[#66462d] leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-2 border-t border-[#dfceba] flex items-center justify-between text-[11px] text-[#735339]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#854e25]" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#854e25]" />
                    {event.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-3 bg-[#ede2d5] rounded-xl border border-[#dfceba] text-xs text-[#291708]">
            <span className="font-bold block mb-1 text-[#291708]">Subscribe to School Google Calendar</span>
            <p className="text-[#66462d] text-[11px] leading-relaxed">
              Parents can synchronize academic schedules, sports fixtures, and exam periods to their mobile devices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
