import React, { useState } from 'react';
import { AdmissionApplication } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Upload,
  FileText,
  Clock,
  ArrowRight,
  Printer,
  Sparkles,
} from 'lucide-react';

interface AdmissionProps {
  onApplicationCreated: (app: AdmissionApplication) => void;
  prefilledGrade?: string;
  prefilledStream?: string;
  onTrackRedirect: (appId: string) => void;
}

export const AdmissionApplicationView: React.FC<AdmissionProps> = ({
  onApplicationCreated,
  prefilledGrade = 'Grade 11',
  prefilledStream = 'STEM Engineering & Tech (PCM)',
  onTrackRedirect,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submittedApplication, setSubmittedApplication] = useState<AdmissionApplication | null>(null);

  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '2011-05-14',
    gender: 'Male',
    gradeApplying: prefilledGrade,
    streamChosen: prefilledStream,
    academicYear: '2027–2028',
    previousSchool: 'National Public High School',
    previousGpaOrPercentage: '94.2%',
    parentName: '',
    parentRelationship: 'Father',
    parentEmail: '',
    parentPhone: '',
    residentialAddress: '',
    transportRequired: true,
    busZone: 'Zone 2 (5 km - 15 km)',
    hostelRequired: false,
    scholarshipCategory: 'Merit Scholarship (90%+ Academic Track)',
    coCurriculars: 'Inter-School Robotics Club Captain, 400m Track Bronze Medalist',
  });

  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'Student_Birth_Certificate.pdf', size: '1.4 MB', status: 'Verified' as const },
    { name: 'Grade_9_Official_Transcript.pdf', size: '2.1 MB', status: 'Verified' as const },
  ]);

  const gradesList = [
    'Pre-K (Early Montessori)',
    'Kindergarten (KG1 / KG2)',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9 (Secondary Prep)',
    'Grade 10 (Board Year)',
    'Grade 11 (Senior Secondary Stream)',
    'Grade 12 (Board Year)',
  ];

  const streamList = [
    'STEM Engineering & Tech (PCM)',
    'Life Sciences & Medical (PCB)',
    'Commerce, Finance & Global Markets',
    'Humanities, Public Policy & International Relations',
  ];

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.studentFirstName.trim() || !formData.studentLastName.trim()) {
        alert('Please provide student first and last name.');
        return;
      }
    } else if (currentStep === 3) {
      if (!formData.parentName.trim() || !formData.parentEmail.trim() || !formData.parentPhone.trim()) {
        alert('Please complete the primary parent/guardian contact information.');
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 5));
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSimulateUpload = (docTitle: string) => {
    const filename = `${formData.studentFirstName || 'Student'}_${docTitle.replace(/\s+/g, '_')}.pdf`;
    setUploadedFiles((prev) => [
      ...prev.filter((f) => !f.name.includes(docTitle.replace(/\s+/g, '_'))),
      { name: filename, size: '1.8 MB', status: 'Verified' },
    ]);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const applicationId = `OAK-2027-${randomSuffix}`;

    const newApp: AdmissionApplication = {
      id: applicationId,
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      studentFirstName: formData.studentFirstName,
      studentLastName: formData.studentLastName,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      gradeApplying: formData.gradeApplying,
      streamChosen: formData.gradeApplying.includes('11') || formData.gradeApplying.includes('12') ? formData.streamChosen : undefined,
      academicYear: formData.academicYear,
      previousSchool: formData.previousSchool,
      previousGpaOrPercentage: formData.previousGpaOrPercentage,
      parentName: formData.parentName,
      parentRelationship: formData.parentRelationship,
      parentEmail: formData.parentEmail,
      parentPhone: formData.parentPhone,
      residentialAddress: formData.residentialAddress,
      transportRequired: formData.transportRequired,
      busZone: formData.transportRequired ? formData.busZone : undefined,
      hostelRequired: formData.hostelRequired,
      scholarshipCategory: formData.scholarshipCategory,
      status: 'Received',
      applicationFeePaid: true,
      uploadedDocuments: uploadedFiles,
      remarks: 'Application submitted via Online Portal. Diagnostic evaluation scheduled.',
    };

    onApplicationCreated(newApp);
    setSubmittedApplication(newApp);
    window.scrollTo({ top: 100, behavior: 'smooth' });
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
          <GraduationCap className="w-3.5 h-3.5 text-[#854e25]" />
          Academic Admissions Window 2027–2028
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
          Online Admission Application Portal
        </h2>
        <p className="text-sm text-[#66462d] mt-1 max-w-2xl">
          Submit your child’s enrollment application for Pre-K through Grade 12. 
          Applications receive a tracking reference code with transparent evaluation milestones.
        </p>
      </motion.div>

      {/* SUCCESS CONFIRMATION RECEIPT */}
      {submittedApplication ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 sm:p-10 shadow-lg"
        >
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#ebdccb] text-[#854e25] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#dfceba]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-2.5 py-1 rounded-full border border-[#dfceba]">
              Application Successfully Registered
            </span>
            <h3 className="text-2xl font-extrabold text-[#291708] mt-2">
              Welcome to Oakridge Academy!
            </h3>
            <p className="text-xs text-[#66462d] mt-1">
              Your formal admission dossier has been logged into the Registrar’s queue.
            </p>

            {/* Reference Badge in Warm Espresso */}
            <div className="my-6 p-4 rounded-xl bg-[#291708] text-white text-center shadow-inner border border-[#4a2810]">
              <span className="text-[11px] text-[#dfceba] block uppercase tracking-widest font-medium">
                Official Reference ID
              </span>
              <span className="text-2xl font-black text-amber-300 tracking-wider">
                {submittedApplication.id}
              </span>
              <span className="text-[11px] text-[#baa490] block mt-1">
                Save this code to check your diagnostic test and admission status
              </span>
            </div>
          </div>

          {/* Application Summary Box in Light Warm Sand */}
          <div className="mt-6 bg-[#f5ede2] rounded-xl p-5 border border-[#dfceba] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[#735339] block">Candidate Scholar:</span>
              <span className="font-bold text-[#291708] text-sm">
                {submittedApplication.studentFirstName} {submittedApplication.studentLastName}
              </span>
            </div>
            <div>
              <span className="text-[#735339] block">Grade & Stream:</span>
              <span className="font-bold text-[#291708]">
                {submittedApplication.gradeApplying}
                {submittedApplication.streamChosen ? ` (${submittedApplication.streamChosen.split(' ')[0]})` : ''}
              </span>
            </div>
            <div>
              <span className="text-[#735339] block">Parent / Guardian:</span>
              <span className="font-bold text-[#291708]">{submittedApplication.parentName}</span>
            </div>
            <div>
              <span className="text-[#735339] block">Application Status:</span>
              <span className="font-bold text-[#7a441b] bg-[#ebdccb] px-2 py-0.5 rounded inline-block border border-[#dfceba]">
                Received & Queued
              </span>
            </div>
          </div>

          {/* Next Steps Card in Light Brown */}
          <div className="mt-6 p-4 bg-[#ede2d5] rounded-xl border border-[#dfceba] flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#854e25] shrink-0 mt-0.5" />
            <div className="text-xs text-[#291708]">
              <span className="font-bold block mb-0.5 text-[#291708]">What Happens Next?</span>
              <p className="text-[#593922] leading-relaxed">
                The Admissions Office will verify your academic transcripts within 48 hours. 
                You will receive an SMS and email notification with your child’s diagnostic placement 
                assessment date and a one-on-one conversation slot with the Dean.
              </p>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onTrackRedirect(submittedApplication.id)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-md transition-colors inline-flex items-center justify-center gap-2"
            >
              Track Live Application Pipeline
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.print()}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-[#ebdccb] text-[#291708] font-semibold text-xs border border-[#dfceba] transition-colors inline-flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Print Application Slip
            </motion.button>
          </div>
        </motion.div>
      ) : (
        /* MULTI-STEP ADMISSION FORM IN LIGHT BROWN */
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] shadow-xs overflow-hidden"
        >
          {/* Step Progress Header in Warm Sand */}
          <div className="bg-[#f5ede2] border-b border-[#dfceba] p-4 sm:px-8">
            <div className="flex items-center justify-between">
              {[
                { step: 1, label: 'Student Profile' },
                { step: 2, label: 'Academics & Stream' },
                { step: 3, label: 'Parent Details' },
                { step: 4, label: 'Amenities & Aid' },
                { step: 5, label: 'Docs & Submit' },
              ].map((s) => {
                const isCompleted = currentStep > s.step;
                const isCurrent = currentStep === s.step;
                return (
                  <div key={s.step} className="flex items-center gap-2 text-xs">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold transition-colors ${
                        isCompleted
                          ? 'bg-[#854e25] text-white'
                          : isCurrent
                          ? 'bg-[#4a2810] text-white ring-2 ring-[#854e25]'
                          : 'bg-[#ebdccb] text-[#735339]'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                    </div>
                    <span
                      className={`hidden md:inline font-semibold ${
                        isCurrent ? 'text-[#291708] font-bold' : 'text-[#735339]'
                      }`}
                    >
                      {s.label}
                    </span>
                    {s.step < 5 && <div className="hidden sm:block w-6 lg:w-12 h-0.5 bg-[#dfceba]" />}
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmitApplication} className="p-6 sm:p-8">
            {/* STEP 1: STUDENT PROFILE */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#291708] border-b border-[#dfceba] pb-2">
                  Step 1: Student Personal Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Student First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentFirstName}
                      onChange={(e) => setFormData({ ...formData, studentFirstName: e.target.value })}
                      placeholder="e.g. Advait"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] focus:ring-1 focus:ring-[#854e25] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Student Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentLastName}
                      onChange={(e) => setFormData({ ...formData, studentLastName: e.target.value })}
                      placeholder="e.g. Verma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] focus:ring-1 focus:ring-[#854e25] outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Gender *</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-Binary / Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Academic Year</label>
                    <input
                      type="text"
                      disabled
                      value={formData.academicYear}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#ebdccb] text-[#593922] border border-[#dfceba] font-semibold"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="font-bold text-[#4d2d14] block mb-1">Applying for Grade Level *</label>
                  <select
                    value={formData.gradeApplying}
                    onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                  >
                    {gradesList.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                  <span className="text-[11px] text-[#735339] mt-1 block">
                    Admissions are subject to vacancy in respective sections and diagnostic test clearance.
                  </span>
                </div>
              </div>
            )}

            {/* STEP 2: ACADEMIC BACKGROUND & SENIOR STREAM */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#291708] border-b border-[#dfceba] pb-2">
                  Step 2: Prior Schooling & Stream Selection
                </h3>

                {(formData.gradeApplying.includes('11') || formData.gradeApplying.includes('12')) && (
                  <div className="p-4 bg-[#f5ede2] rounded-xl border border-[#dfceba] space-y-2">
                    <label className="font-bold text-[#291708] text-xs block">
                      Choose Senior Secondary Specialized Stream (Grade 11 & 12) *
                    </label>
                    <select
                      value={formData.streamChosen}
                      onChange={(e) => setFormData({ ...formData, streamChosen: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden text-xs font-semibold"
                    >
                      {streamList.map((st) => (
                        <option key={st}>{st}</option>
                      ))}
                    </select>
                    <p className="text-[11px] text-[#66462d]">
                      Each stream incorporates 6 hours of weekly laboratory practicals in specialized science and computer hubs.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Current / Previous School Name</label>
                    <input
                      type="text"
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                      placeholder="e.g. Bishop Cotton Boys School"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Previous Year GPA or Percentage</label>
                    <input
                      type="text"
                      value={formData.previousGpaOrPercentage}
                      onChange={(e) => setFormData({ ...formData, previousGpaOrPercentage: e.target.value })}
                      placeholder="e.g. 93.4% or 9.4 GPA"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="font-bold text-[#4d2d14] block mb-1">
                    Extracurricular Honors & Sports / Arts Pursuits
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coCurriculars}
                    onChange={(e) => setFormData({ ...formData, coCurriculars: e.target.value })}
                    placeholder="List state/national sports, coding olympiads, musical instruments, debate prizes..."
                    className="w-full px-3.5 py-2 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden resize-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: PARENT / GUARDIAN DETAILS */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#291708] border-b border-[#dfceba] pb-2">
                  Step 3: Parent or Legal Guardian Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="sm:col-span-2">
                    <label className="font-bold text-[#4d2d14] block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Rajesh Kumar Verma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Relationship to Student</label>
                    <select
                      value={formData.parentRelationship}
                      onChange={(e) => setFormData({ ...formData, parentRelationship: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    >
                      <option>Father</option>
                      <option>Mother</option>
                      <option>Legal Guardian</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Primary Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      placeholder="rajesh.verma@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    />
                    <span className="text-[10px] text-[#735339] mt-1 block">
                      Diagnostic schedule & status updates are sent to this address.
                    </span>
                  </div>

                  <div>
                    <label className="font-bold text-[#4d2d14] block mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      placeholder="+91 98450 12345"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="font-bold text-[#4d2d14] block mb-1">Residential Address</label>
                  <textarea
                    rows={2}
                    value={formData.residentialAddress}
                    onChange={(e) => setFormData({ ...formData, residentialAddress: e.target.value })}
                    placeholder="House/Apartment number, street, city, pin code..."
                    className="w-full px-3.5 py-2 rounded-xl border border-[#dfceba] bg-white text-[#291708] focus:border-[#854e25] outline-hidden resize-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: AMENITIES, TRANSPORT & SCHOLARSHIP */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#291708] border-b border-[#dfceba] pb-2">
                  Step 4: School Transport, Boarding & Financial Aid
                </h3>

                {/* Transport */}
                <div className="p-4 bg-[#f5ede2] rounded-xl border border-[#dfceba] space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#291708] block">Air-Conditioned GPS Bus Transport</span>
                      <span className="text-[#735339] text-[11px]">42 tracked routes with CCTV and female attendants</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.transportRequired}
                      onChange={(e) => setFormData({ ...formData, transportRequired: e.target.checked })}
                      className="w-5 h-5 rounded text-[#854e25] focus:ring-[#854e25] cursor-pointer"
                    />
                  </div>

                  {formData.transportRequired && (
                    <div className="pt-2 border-t border-[#dfceba]">
                      <label className="font-semibold text-[#4d2d14] block mb-1">Bus Zone Distance Tier</label>
                      <select
                        value={formData.busZone}
                        onChange={(e) => setFormData({ ...formData, busZone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-[#dfceba] bg-white text-[#291708]"
                      >
                        <option>Zone 1 (Under 5 km from Campus) – ₹24,000 / Year</option>
                        <option>Zone 2 (5 km - 15 km) – ₹36,000 / Year</option>
                        <option>Zone 3 (15 km - 25 km Outer Corridor) – ₹48,000 / Year</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Boarding Lodge */}
                <div className="p-4 bg-[#f5ede2] rounded-xl border border-[#dfceba] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#291708] block">Residential Boarding Lodge Facility</span>
                    <span className="text-[#735339] text-[11px]">Twin-sharing air-conditioned suites with 24/7 infirmary (Grade 6+)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.hostelRequired}
                    onChange={(e) => setFormData({ ...formData, hostelRequired: e.target.checked })}
                    className="w-5 h-5 rounded text-[#854e25] focus:ring-[#854e25] cursor-pointer"
                  />
                </div>

                {/* Scholarship Option */}
                <div className="text-xs">
                  <label className="font-bold text-[#4d2d14] block mb-1">
                    Scholarship & Fee Concession Category
                  </label>
                  <select
                    value={formData.scholarshipCategory}
                    onChange={(e) => setFormData({ ...formData, scholarshipCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfceba] bg-white text-[#291708]"
                  >
                    <option>Standard Admission (No Scholarship Requested)</option>
                    <option>Merit Scholarship (90%+ Academic Track - Up to 40% Waiver)</option>
                    <option>National Sports / Arts Achiever Concession (Up to 30% Waiver)</option>
                    <option>Sibling Concession (10% Automatic Waiver on 2nd Child)</option>
                    <option>Defence & Armed Forces Concession (15% Waiver)</option>
                  </select>
                  <span className="text-[11px] text-[#735339] mt-1 block">
                    Scholarship eligibility requires supporting verification documents in the next step.
                  </span>
                </div>
              </div>
            )}

            {/* STEP 5: DOCUMENT UPLOAD & FINAL CONFIRMATION */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#291708] border-b border-[#dfceba] pb-2">
                  Step 5: Verification Documents & Submit Dossier
                </h3>

                <p className="text-xs text-[#66462d]">
                  Please upload simulated digital copies for document review. 
                  Accepted formats include PDF, JPG, PNG (Max 5MB per file).
                </p>

                {/* Document Slots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    'Birth Certificate',
                    'Previous Year Report Card',
                    'Transfer Certificate (TC)',
                    'Passport Sized Photograph',
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#f5ede2] rounded-xl border border-[#dfceba] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#854e25] shrink-0" />
                        <div>
                          <span className="font-semibold text-[#291708] block">{doc}</span>
                          <span className="text-[10px] text-[#735339]">PDF / Image</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleSimulateUpload(doc)}
                        className="px-3 py-1 bg-[#faf6f0] hover:bg-[#ebdccb] text-[#5e3416] font-bold border border-[#dfceba] rounded-lg text-[11px] transition-colors inline-flex items-center gap-1 shadow-2xs"
                      >
                        <Upload className="w-3 h-3 text-[#854e25]" />
                        Attach
                      </button>
                    </div>
                  ))}
                </div>

                {/* Attached Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 p-3 bg-[#ede2d5] rounded-xl border border-[#dfceba]">
                    <span className="text-[11px] font-bold text-[#4a2810] block mb-1">
                      {uploadedFiles.length} Documents Ready for Submission:
                    </span>
                    <div className="space-y-1">
                      {uploadedFiles.map((file, i) => (
                        <div key={i} className="flex items-center justify-between text-xs text-[#593922]">
                          <span className="truncate">{file.name} ({file.size})</span>
                          <span className="font-bold flex items-center gap-1 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#854e25]" />
                            {file.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Terms Agreement Check */}
                <div className="pt-3 border-t border-[#dfceba] flex items-start gap-2.5 text-xs text-[#66462d]">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="w-4 h-4 mt-0.5 rounded text-[#854e25] focus:ring-[#854e25] cursor-pointer"
                  />
                  <span>
                    I confirm that the details provided are accurate. I agree to Oakridge Academy’s 
                    code of conduct, campus health guidelines, and diagnostic evaluation schedule.
                  </span>
                </div>
              </div>
            )}

            {/* Navigation Buttons Footer */}
            <div className="mt-8 pt-4 border-t border-[#dfceba] flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#593922] hover:bg-[#ebdccb] transition-colors inline-flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white text-xs font-bold shadow-xs transition-colors inline-flex items-center gap-1.5"
                >
                  Save & Proceed
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white text-xs font-extrabold shadow-md transition-colors inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  Submit Formal Admission Dossier
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};
