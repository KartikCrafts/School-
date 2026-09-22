import React, { useState } from 'react';
import { AdmissionApplication } from '../types';
import { motion } from 'motion/react';
import {
  Search,
  CheckCircle2,
  Clock,
  FileCheck,
  GraduationCap,
  Phone,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TrackProps {
  applications: AdmissionApplication[];
  initialSearchId?: string;
  onApplyNew: () => void;
}

export const TrackApplicationView: React.FC<TrackProps> = ({
  applications,
  initialSearchId = '',
  onApplyNew,
}) => {
  const [searchId, setSearchId] = useState<string>(initialSearchId);
  const [searchedApp, setSearchedApp] = useState<AdmissionApplication | null>(
    applications.find((a) => a.id === initialSearchId) || applications[0] || null
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    const found = applications.find(
      (a) => a.id.toLowerCase() === searchId.trim().toLowerCase()
    );

    if (found) {
      setSearchedApp(found);
    } else {
      // Mock lookup if user typed a simulated id
      setSearchedApp({
        id: searchId.toUpperCase(),
        submittedAt: 'September 19, 2026',
        studentFirstName: 'Kabir',
        studentLastName: 'Mehta',
        dateOfBirth: '2011-08-20',
        gender: 'Male',
        gradeApplying: 'Grade 11',
        streamChosen: 'STEM Engineering & Tech (PCM)',
        academicYear: '2027–2028',
        previousSchool: 'St. Joseph Academy',
        previousGpaOrPercentage: '95.6%',
        parentName: 'Sanjay Mehta',
        parentRelationship: 'Father',
        parentEmail: 'sanjay.mehta@example.com',
        parentPhone: '+91 98450 88219',
        residentialAddress: 'Indiranagar 100ft Road, Bengaluru',
        transportRequired: true,
        busZone: 'Zone 2 (5-15 km)',
        hostelRequired: false,
        scholarshipCategory: 'Merit Scholarship (90%+ Academic Track)',
        status: 'Documents Verified',
        applicationFeePaid: true,
        uploadedDocuments: [
          { name: 'Birth_Certificate.pdf', size: '1.2 MB', status: 'Verified' },
          { name: 'Grade_10_Marksheet.pdf', size: '2.4 MB', status: 'Verified' },
        ],
        remarks: 'Transcripts verified. Diagnostic entrance assessment scheduled for Oct 12, 2026.',
      });
    }
  };

  const steps = [
    { title: 'Application Received', desc: 'Logged into Registrar database', icon: FileCheck },
    { title: 'Document Verification', desc: 'Academic records & age audit', icon: ShieldCheck },
    { title: 'Diagnostic Assessment', desc: 'Cognitive & concept interaction', icon: GraduationCap },
    { title: 'Dean Interaction', desc: 'Student & parent orientation meet', icon: Building },
    { title: 'Formal Enrolment', desc: 'Offer letter & welcome package', icon: CheckCircle2 },
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'Received':
        return 0;
      case 'Documents Verified':
        return 1;
      case 'Entrance Assessment Scheduled':
        return 2;
      case 'Interview Round':
        return 3;
      case 'Provisional Offer Granted':
      case 'Fee Paid & Enrolled':
        return 4;
      default:
        return 1;
    }
  };

  const currentStepIdx = searchedApp ? getStepIndex(searchedApp.status) : 0;

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
          <FileCheck className="w-3.5 h-3.5 text-[#854e25]" />
          Real-Time Application Status
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
          Track Your Admission Dossier
        </h2>
        <p className="text-sm text-[#66462d] mt-1 max-w-2xl">
          Enter your Application Reference ID (e.g., OAK-2027-XXXX) to review evaluation stages,
          assessment schedules, and registrar remarks.
        </p>
      </motion.div>

      {/* Search Bar in Light Brown */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSearch}
        className="flex gap-2 max-w-lg"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter Application ID (e.g. OAK-2027-8492)"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dfceba] focus:border-[#854e25] focus:ring-1 focus:ring-[#854e25] outline-hidden text-sm bg-white text-[#291708] shadow-2xs"
          />
          <Search className="w-4 h-4 text-[#8f7056] absolute left-3.5 top-3.5" />
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="px-5 py-3 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
        >
          Look Up Dossier
        </motion.button>
      </motion.form>

      {/* Quick Select of Session Applications if available */}
      {applications.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap text-xs text-[#66462d]">
          <span className="font-semibold text-[#735339]">Applications in this session:</span>
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                setSearchId(app.id);
                setSearchedApp(app);
              }}
              className={`px-3 py-1 rounded-lg border font-mono font-bold transition-colors ${
                searchedApp?.id === app.id
                  ? 'bg-[#4a2810] text-white border-[#4a2810]'
                  : 'bg-[#faf6f0] text-[#291708] border-[#dfceba] hover:border-[#854e25]'
              }`}
            >
              {app.id} ({app.studentFirstName})
            </button>
          ))}
        </div>
      )}

      {/* Status Details Card */}
      {searchedApp ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 sm:p-8 shadow-xs space-y-8"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#dfceba]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-[#291708] font-mono">
                  {searchedApp.id}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ebdccb] text-[#5e3416] border border-[#dfceba]">
                  {searchedApp.status}
                </span>
              </div>
              <p className="text-xs text-[#735339] mt-1">
                Submitted on {searchedApp.submittedAt} • Academic Year {searchedApp.academicYear}
              </p>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-xs text-[#735339] block">Candidate Scholar</span>
              <span className="font-bold text-[#291708] text-base">
                {searchedApp.studentFirstName} {searchedApp.studentLastName}
              </span>
              <span className="text-xs text-[#854e25] font-medium block">
                {searchedApp.gradeApplying} {searchedApp.streamChosen ? `• ${searchedApp.streamChosen}` : ''}
              </span>
            </div>
          </div>

          {/* Visual Milestone Pipeline in Light Brown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#735339] mb-6">
              Admission Pipeline Progress:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
              {steps.map((step, idx) => {
                const isDone = idx < currentStepIdx;
                const isCurrent = idx === currentStepIdx;

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-xl border relative transition-all ${
                      isDone
                        ? 'bg-[#ebdccb] border-[#dfceba] text-[#4d2d14]'
                        : isCurrent
                        ? 'bg-[#f5ede2] border-[#854e25] ring-2 ring-[#854e25]/20 shadow-xs text-[#291708]'
                        : 'bg-[#faf6f0] border-[#dfceba] text-[#8f7056]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          isDone
                            ? 'bg-[#854e25] text-white'
                            : isCurrent
                            ? 'bg-[#4a2810] text-white animate-pulse'
                            : 'bg-[#ebdccb] text-[#735339]'
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>

                      {isCurrent && (
                        <span className="text-[10px] font-bold uppercase text-[#7a441b] bg-[#ebdccb] px-1.5 py-0.5 rounded border border-[#dfceba]">
                          Current
                        </span>
                      )}
                    </div>

                    <h5 className="font-bold text-xs leading-snug">{step.title}</h5>
                    <p className="text-[11px] text-[#735339] mt-1 leading-tight">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Registrar Notes Box in Warm Sand */}
          <div className="p-4 bg-[#f5ede2] rounded-xl border border-[#dfceba] flex items-start gap-3 text-xs">
            <Clock className="w-4 h-4 text-[#854e25] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#291708] block mb-0.5">Admissions Cell Notice:</span>
              <p className="text-[#66462d] leading-relaxed">{searchedApp.remarks}</p>
            </div>
          </div>

          {/* Candidate Dossier Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-4 border-t border-[#dfceba]">
            <div>
              <span className="text-[#735339] block">Parent / Guardian:</span>
              <span className="font-bold text-[#291708]">{searchedApp.parentName}</span>
              <span className="text-[#66462d] block text-[11px]">{searchedApp.parentPhone}</span>
            </div>
            <div>
              <span className="text-[#735339] block">School Bus Transport:</span>
              <span className="font-bold text-[#291708]">
                {searchedApp.transportRequired ? searchedApp.busZone || 'Requested' : 'Self-Commute'}
              </span>
            </div>
            <div>
              <span className="text-[#735339] block">Scholarship Consideration:</span>
              <span className="font-bold text-[#291708]">
                {searchedApp.scholarshipCategory || 'Standard'}
              </span>
            </div>
            <div>
              <span className="text-[#735339] block">Verified Documents:</span>
              <span className="font-bold text-[#854e25]">
                {searchedApp.uploadedDocuments?.length || 2} Files on Record
              </span>
            </div>
          </div>

          {/* Need help footer */}
          <div className="pt-4 border-t border-[#dfceba] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#735339]">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#854e25]" />
              <span>Admissions Desk Helpline: {SCHOOL_INFO.admissionDeskPhone}</span>
            </div>
            <a
              href={`mailto:${SCHOOL_INFO.contactEmail}?subject=Inquiry regarding Application ${searchedApp.id}`}
              className="text-[#854e25] hover:underline font-semibold"
            >
              Email Registrar Regarding This Dossier &rarr;
            </a>
          </div>
        </motion.div>
      ) : (
        <div className="bg-[#f5ede2] rounded-2xl p-12 text-center border border-[#dfceba]">
          <GraduationCap className="w-12 h-12 text-[#854e25] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#291708]">No Application Looked Up Yet</h3>
          <p className="text-xs text-[#66462d] max-w-sm mx-auto mt-1">
            Submit a new application or input your registration code in the search field above.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onApplyNew}
            className="mt-4 px-5 py-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-xs transition-colors"
          >
            Start New Admission Application
          </motion.button>
        </div>
      )}
    </div>
  );
};
