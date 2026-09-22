import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { FEE_STRUCTURE } from '../data/schoolData';

interface FeeProps {
  onApplyWithSelection: (grade: string, stream?: string) => void;
}

export const FeeCalculatorView: React.FC<FeeProps> = ({ onApplyWithSelection }) => {
  const [selectedGradeId, setSelectedGradeId] = useState<string>('grade-11-12');
  const [transportTier, setTransportTier] = useState<number>(36000);
  const [hostelSelected, setHostelSelected] = useState<boolean>(false);
  const [scholarshipPercent, setScholarshipPercent] = useState<number>(15);

  const selectedTier = FEE_STRUCTURE.find((f) => f.id === selectedGradeId) || FEE_STRUCTURE[3];

  const baseAnnualTuition = selectedTier.annualTuition;
  const labAndSmartClass = selectedTier.labAndDigitalFee;
  const developmentFee = selectedTier.annualDevelopmentFee;
  const oneTimeRegistration = selectedTier.oneTimeAdmissionFee;

  const grossTuition = baseAnnualTuition + labAndSmartClass + developmentFee;
  const scholarshipDiscount = Math.round((baseAnnualTuition * scholarshipPercent) / 100);
  const netAcademicTuition = grossTuition - scholarshipDiscount;

  const boardingFee = hostelSelected ? 180000 : 0;
  const totalAnnualCost = netAcademicTuition + transportTier + boardingFee + oneTimeRegistration;
  const quarterlyInstallment = Math.round((totalAnnualCost - oneTimeRegistration) / 4);

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
          <Calculator className="w-3.5 h-3.5 text-[#854e25]" />
          Financial Planning & Transparency
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
          Tuition, Amenities & Scholarship Calculator
        </h2>
        <p className="text-sm text-[#66462d] mt-1 max-w-2xl">
          Model comprehensive annual educational costs including smart classroom infrastructure, 
          science labs, ergonomic bench maintenance, transport zones, and merit waivers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Parameters Controls in Light Brown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 shadow-xs space-y-6"
        >
          <h3 className="font-bold text-base text-[#291708] border-b border-[#dfceba] pb-3">
            Configure Scholar Enrollment Details
          </h3>

          {/* Grade Tier Selector */}
          <div>
            <label className="text-xs font-bold text-[#4d2d14] block mb-2">
              Select Grade Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FEE_STRUCTURE.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => setSelectedGradeId(tier.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all text-xs ${
                    selectedGradeId === tier.id
                      ? 'bg-[#ebdccb] border-[#854e25] ring-1 ring-[#854e25] text-[#291708] font-bold shadow-2xs'
                      : 'bg-white border-[#dfceba] text-[#593922] hover:border-[#854e25]'
                  }`}
                >
                  <span className="block font-bold">{tier.gradeTier}</span>
                  <span className="text-[11px] text-[#735339] font-normal">
                    Base: ₹{tier.annualTuition.toLocaleString()} / Yr
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transport Tier */}
          <div>
            <label className="text-xs font-bold text-[#4d2d14] block mb-2">
              Air-Conditioned GPS Bus Transport (Annual)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                { label: 'No Bus', fee: 0, desc: 'Self Commute' },
                { label: 'Zone 1 (<5km)', fee: 24000, desc: 'Local Quad' },
                { label: 'Zone 2 (5-15km)', fee: 36000, desc: 'City Hub' },
                { label: 'Zone 3 (15-25km)', fee: 48000, desc: 'Outer Suburb' },
              ].map((t) => (
                <button
                  type="button"
                  key={t.fee}
                  onClick={() => setTransportTier(t.fee)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    transportTier === t.fee
                      ? 'bg-[#854e25] text-white border-[#854e25] font-bold shadow-xs'
                      : 'bg-[#f5ede2] text-[#593922] border-[#dfceba] hover:bg-[#ebdccb]'
                  }`}
                >
                  <span className="block">{t.label}</span>
                  <span className="text-[10px] block opacity-80 font-normal">
                    {t.fee === 0 ? '₹0' : `₹${t.fee.toLocaleString()}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Boarding Lodge Checkbox */}
          <div className="p-4 bg-[#f5ede2] rounded-xl border border-[#dfceba] flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-[#291708] block">Residential Boarding Lodge (Full Board)</span>
              <span className="text-[#735339] text-[11px]">Includes 4 chef-prepared meals, AC twin suite, 24/7 infirmary & evening tutoring</span>
            </div>
            <input
              type="checkbox"
              checked={hostelSelected}
              onChange={(e) => setHostelSelected(e.target.checked)}
              className="w-5 h-5 rounded text-[#854e25] focus:ring-[#854e25] cursor-pointer"
            />
          </div>

          {/* Scholarship Waiver Selector */}
          <div>
            <label className="text-xs font-bold text-[#4d2d14] block mb-2">
              Merit & Achievement Scholarship Waiver on Tuition
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                { label: 'None (0%)', pct: 0 },
                { label: 'Sibling / Armed Forces (15%)', pct: 15 },
                { label: 'Sports / Arts Achiever (25%)', pct: 25 },
                { label: 'Dean’s Merit (40% Waiver)', pct: 40 },
              ].map((s) => (
                <button
                  type="button"
                  key={s.pct}
                  onClick={() => setScholarshipPercent(s.pct)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    scholarshipPercent === s.pct
                      ? 'bg-[#854e25] text-white border-[#854e25] font-extrabold shadow-xs'
                      : 'bg-[#f5ede2] text-[#593922] border-[#dfceba] hover:bg-[#ebdccb]'
                  }`}
                >
                  <span className="block text-xs">{s.pct}% Waiver</span>
                  <span className="text-[10px] block opacity-80 font-normal">{s.label.split('(')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Calculation Invoice Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-[#291708] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#4a2810] space-y-6"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#4a2810]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                Calculated Statement
              </span>
              <h4 className="text-lg font-extrabold text-white mt-0.5">
                {selectedTier.gradeTier}
              </h4>
            </div>
            <span className="text-xs bg-[#ebdccb]/20 text-[#ebdccb] px-2.5 py-1 rounded-full border border-[#ebdccb]/30">
              Session 2027–28
            </span>
          </div>

          {/* Itemized breakdown */}
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between text-[#dfceba]">
              <span>Annual Core Tuition:</span>
              <span className="font-semibold text-white">₹{baseAnnualTuition.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#dfceba]">
              <span>Smart Lab, Science & Ergonomic Benches:</span>
              <span className="font-semibold text-white">₹{labAndSmartClass.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#dfceba]">
              <span>Campus Infrastructure Development:</span>
              <span className="font-semibold text-white">₹{developmentFee.toLocaleString()}</span>
            </div>

            {scholarshipDiscount > 0 && (
              <div className="flex justify-between text-amber-300 font-semibold bg-amber-400/15 p-2 rounded-lg border border-amber-400/30">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Scholarship Waiver ({scholarshipPercent}%):
                </span>
                <span>- ₹{scholarshipDiscount.toLocaleString()}</span>
              </div>
            )}

            {transportTier > 0 && (
              <div className="flex justify-between text-[#dfceba]">
                <span>GPS Air-Conditioned Bus Transport:</span>
                <span className="font-semibold text-white">₹{transportTier.toLocaleString()}</span>
              </div>
            )}

            {hostelSelected && (
              <div className="flex justify-between text-[#dfceba]">
                <span>Boarding & Dining Lodge:</span>
                <span className="font-semibold text-white">₹{boardingFee.toLocaleString()}</span>
              </div>
            )}

            <div className="flex justify-between text-[#baa490] pt-1 text-[11px]">
              <span>One-Time Admission & Registration Fee:</span>
              <span>₹{oneTimeRegistration.toLocaleString()}</span>
            </div>
          </div>

          {/* Total Box */}
          <div className="pt-4 border-t border-[#4a2810]">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs text-[#baa490] font-medium">Estimated Annual Commitment:</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-300">
                ₹{totalAnnualCost.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-baseline text-xs text-[#baa490]">
              <span>Quarterly Installment (4 terms):</span>
              <span className="font-bold text-[#ebdccb]">₹{quarterlyInstallment.toLocaleString()} / Quarter</span>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="p-3 bg-[#3a1d08] rounded-xl border border-[#4d280d] space-y-1 text-[11px] text-[#dfceba]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Zero hidden costs: Books, lab aprons & smart tablet access covered.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>100% refund of registration fee if withdrawal requested before session kickoff.</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onApplyWithSelection(selectedTier.gradeTier)}
            className="w-full py-3 rounded-xl bg-[#854e25] hover:bg-[#9a5c2d] text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-2 border border-amber-500/30"
          >
            Apply for {selectedTier.gradeTier}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
