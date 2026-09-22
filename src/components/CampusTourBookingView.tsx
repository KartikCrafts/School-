import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TourProps {
  onApplyClick: () => void;
}

export const CampusTourBookingView: React.FC<TourProps> = ({ onApplyClick }) => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childGrade: 'Grade 9',
    tourDate: '2026-10-10',
    timeSlot: '10:00 AM – 11:30 AM (Morning Tour & Lab Demo)',
    attendeesCount: '3',
    interests: ['Smart Classrooms & Ergonomic Benches', 'Science & Robotics Labs'],
  });

  const availableSlots = [
    '10:00 AM – 11:30 AM (Morning Tour & Lab Demo)',
    '02:30 PM – 04:00 PM (Afternoon Quad & Sports Tour)',
    '11:00 AM – 12:00 PM (Saturday Family Open House)',
  ];

  const focusOptions = [
    'Smart Classrooms & Ergonomic Benches',
    'Science & Robotics Labs',
    'Olympic Sports Complex & Swimming',
    'Residential Boarding Lodges',
    'Montessori Early Years Wing',
    'Tagore Central Library',
  ];

  const toggleInterest = (opt: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(opt)
        ? prev.interests.filter((i) => i !== opt)
        : [...prev.interests, opt],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-2.5 py-1 rounded-md mb-2 border border-[#dfceba]">
          <Compass className="w-3.5 h-3.5 text-[#854e25]" />
          Campus Immersion
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
          Experience Oakridge Campus in Person
        </h2>
        <p className="text-sm text-[#66462d] mt-1 max-w-2xl">
          Walk our 25-acre landscaped grounds, sit in our posture-engineered beechwood classroom benches,
          and interact with our science and academic mentors.
        </p>
      </motion.div>

      {bookingConfirmed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-8 text-center max-w-lg mx-auto shadow-md"
        >
          <div className="w-16 h-16 bg-[#ebdccb] text-[#854e25] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#dfceba]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-2.5 py-0.5 rounded-full border border-[#dfceba]">
            Guided Tour Confirmed
          </span>
          <h3 className="text-2xl font-extrabold text-[#291708] mt-2">
            We Look Forward to Welcoming You!
          </h3>
          <p className="text-xs text-[#66462d] mt-1">
            A digital campus gate pass has been emailed to <strong>{formData.email}</strong>.
          </p>

          <div className="my-6 p-4 bg-[#f5ede2] rounded-xl border border-[#dfceba] text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-[#735339]">Date & Time:</span>
              <span className="font-bold text-[#291708]">{formData.tourDate} at {formData.timeSlot.split('(')[0]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#735339]">Visitor Party:</span>
              <span className="font-bold text-[#291708]">{formData.parentName} ({formData.attendeesCount} Guests)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#735339]">Meeting Point:</span>
              <span className="font-bold text-[#854e25]">Oakridge Welcome Rotunda, Gate 1</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setBookingConfirmed(false)}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#593922] hover:bg-[#ebdccb]"
            >
              Book Another Slot
            </button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onApplyClick}
              className="px-5 py-2.5 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-xs"
            >
              Proceed to Admission Form
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form in Light Brown */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 shadow-xs space-y-5 text-xs"
          >
            <h3 className="font-bold text-base text-[#291708] border-b border-[#dfceba] pb-3">
              Book a Scheduled Guided Walkthrough
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-[#4d2d14] block mb-1">Parent / Visitor Name *</label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="e.g. Ananya Roy"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                />
              </div>

              <div>
                <label className="font-bold text-[#4d2d14] block mb-1">Applying Grade *</label>
                <select
                  value={formData.childGrade}
                  onChange={(e) => setFormData({ ...formData, childGrade: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                >
                  <option>Pre-K / Kindergarten</option>
                  <option>Grade 1 to 5 (Primary)</option>
                  <option>Grade 6 to 8 (Middle)</option>
                  <option>Grade 9 & 10 (Secondary)</option>
                  <option>Grade 11 & 12 (Senior Secondary)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-[#4d2d14] block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="parent@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                />
              </div>

              <div>
                <label className="font-bold text-[#4d2d14] block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98451 09876"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-[#4d2d14] block mb-1">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.tourDate}
                  onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                />
              </div>

              <div>
                <label className="font-bold text-[#4d2d14] block mb-1">Number of Visitors</label>
                <select
                  value={formData.attendeesCount}
                  onChange={(e) => setFormData({ ...formData, attendeesCount: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                >
                  <option>1 Visitor</option>
                  <option>2 Visitors</option>
                  <option>3 Visitors (Student + Parents)</option>
                  <option>4+ Visitors (Family)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-[#4d2d14] block mb-1">Select Tour Time Slot *</label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden font-medium"
              >
                {availableSlots.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-[#4d2d14] block mb-2">
                What areas would you like to inspect in detail?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {focusOptions.map((opt) => {
                  const isChecked = formData.interests.includes(opt);
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleInterest(opt)}
                      className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-[#ebdccb] border-[#854e25] text-[#291708] font-bold'
                          : 'bg-[#f5ede2] border-[#dfceba] text-[#66462d]'
                      }`}
                    >
                      <span>{opt}</span>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#854e25] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-[#dfceba] flex items-center justify-end">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-xs transition-colors inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Reserve Campus Tour Pass
              </motion.button>
            </div>
          </motion.form>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-[#291708] text-white rounded-2xl p-6 border border-[#4a2810] space-y-4 shadow-xl">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Tour Protocol & What to Expect
              </span>
              <h4 className="text-lg font-bold text-white leading-tight">
                An Immersive 75-Minute Campus Experience
              </h4>
              <p className="text-xs text-[#dfceba] leading-relaxed">
                Guided by senior faculty heads. You’ll observe active classrooms, examine 
                ergonomic seating tolerances, visit robotics and chemistry labs, and tour boarding lodges.
              </p>

              <div className="space-y-2 text-xs pt-2">
                <div className="flex items-center gap-2 text-[#dfceba]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complimentary visitor parking at Gate 1</span>
                </div>
                <div className="flex items-center gap-2 text-[#dfceba]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Refreshments served at Annapurna Dining Pavilion</span>
                </div>
                <div className="flex items-center gap-2 text-[#dfceba]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive Q&A with Admissions Director</span>
                </div>
              </div>

              <div className="p-3 bg-[#3a1d08] rounded-xl border border-[#4d280d] text-xs">
                <span className="text-[#baa490] block text-[11px]">Campus Location:</span>
                <span className="font-semibold text-[#ebdccb] block mt-0.5">{SCHOOL_INFO.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
