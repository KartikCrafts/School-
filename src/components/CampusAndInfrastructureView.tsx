import React, { useState } from 'react';
import {
  CAMPUS_AREAS,
  CLASSROOM_INFRASTRUCTURE,
  GALLERY_PHOTOS,
} from '../data/schoolData';
import { CampusArea, ClassroomInfrastructure } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building,
  Layers,
  Image as ImageIcon,
  MapPin,
  CheckCircle2,
  Maximize2,
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Eye,
} from 'lucide-react';

interface CampusProps {
  onApplyClick: () => void;
  onBookTourClick: () => void;
}

export const CampusAndInfrastructureView: React.FC<CampusProps> = ({
  onApplyClick,
  onBookTourClick,
}) => {
  const [subSection, setSubSection] = useState<'benches' | 'map' | 'gallery'>('benches');
  const [selectedArea, setSelectedArea] = useState<CampusArea>(CAMPUS_AREAS[0]);
  const [selectedBench, setSelectedBench] = useState<ClassroomInfrastructure>(CLASSROOM_INFRASTRUCTURE[0]);
  const [galleryFilter, setGalleryFilter] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; caption: string } | null>(null);
  const [activeErgonomicHotspot, setActiveErgonomicHotspot] = useState<number>(0);

  const galleryCategories = [
    'All',
    'Classrooms & Benches',
    'Labs & Science',
    'Sports & Grounds',
    'Library & Study',
    'Arts & Culture',
    'Campus Grounds',
  ];

  const filteredPhotos =
    galleryFilter === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === galleryFilter);

  const ergonomicHotspots = [
    {
      title: '12° Writing Tilt Plane',
      desc: 'Eliminates forward cervical spinal bend, reducing neck muscle strain by 34% during writing and reading.',
      x: '38%',
      y: '42%',
    },
    {
      title: 'Lumbar S-Curve Backrest',
      desc: 'Anatomically contoured beechwood cradles the lower spine, discouraging slouching and promoting natural diaphragmatic breathing.',
      x: '68%',
      y: '30%',
    },
    {
      title: 'Waterfall Front Seat Edge',
      desc: 'Gentle downward curve behind the knees prevents vascular pressure, sustaining healthy circulation during continuous 45-minute periods.',
      x: '58%',
      y: '65%',
    },
    {
      title: 'Under-Desk Dual Wire Basket & Bag Hooks',
      desc: 'Keeps aisleways clear and backpacks off the floor, eliminating trip hazards and preserving clean classroom airflow.',
      x: '28%',
      y: '72%',
    },
    {
      title: '25mm Bullnose Safety Rounded Edges',
      desc: 'Zero sharp angles or exposed hardware. Smooth hand-sanded edges prevent accidental bruising or fabric tearing.',
      x: '18%',
      y: '35%',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* View Header & Section Switcher with Scroll Motion */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#dfceba] pb-6"
      >
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a441b] bg-[#ebdccb] px-3 py-1 rounded-md border border-[#dfceba] mb-2">
            <Building className="w-3.5 h-3.5 text-[#854e25]" />
            Infrastructure & Environment
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#291708] tracking-tight">
            Campus Area, Smart Classrooms & Ergonomic Benches
          </h2>
          <p className="text-sm text-[#66462d] mt-1 max-w-2xl">
            A purpose-built 25-acre eco-sanctuary designed from the ground up to nurture academic rigor,
            posture health, and collaborative scientific inquiry.
          </p>
        </div>

        {/* Sub Navigation Pills in Warm Light Brown */}
        <div className="flex items-center gap-1 bg-[#ede2d5] p-1.5 rounded-xl shrink-0 border border-[#d9c5b2]">
          <button
            onClick={() => setSubSection('benches')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              subSection === 'benches'
                ? 'bg-[#854e25] text-white shadow-xs'
                : 'text-[#5e3c23] hover:text-[#2d1808]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Classrooms & Benches
          </button>
          <button
            onClick={() => setSubSection('map')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              subSection === 'map'
                ? 'bg-[#854e25] text-white shadow-xs'
                : 'text-[#5e3c23] hover:text-[#2d1808]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            Campus Area Map
          </button>
          <button
            onClick={() => setSubSection('gallery')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              subSection === 'gallery'
                ? 'bg-[#854e25] text-white shadow-xs'
                : 'text-[#5e3c23] hover:text-[#2d1808]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Photo Gallery ({GALLERY_PHOTOS.length})
          </button>
        </div>
      </motion.div>

      {/* SUB-SECTION 1: CLASSROOMS, BENCHES & INFRASTRUCTURE */}
      {subSection === 'benches' && (
        <div className="mt-8 space-y-10">
          {/* Ergonomic Bench Spotlight Banner in Deep Rich Leather/Warm Brown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#4a2810] via-[#351c09] to-[#251306] text-[#f7efe6] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#6b3e1a] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-400/30 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Certified Posture Ergonomics
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Engineered for Posture, Comfort & Academic Focus
                </h3>
                <p className="mt-3 text-[#dfcebd] text-sm sm:text-base leading-relaxed font-normal">
                  Unlike conventional rigid school desks that cause slouching and cervical compression, 
                  Oakridge classrooms are furnished with custom-engineered German Beechwood dual benches. 
                  Every angle, curvature, and bevel is calibrated to support natural spinal alignment, 
                  sustaining student stamina through active school days.
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-3 rounded-xl backdrop-blur-xs border border-white/10"
                  >
                    <span className="text-amber-300 font-bold text-lg block">-34%</span>
                    <span className="text-xs text-[#dfcebd]">Cervical Spine Compression</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-3 rounded-xl backdrop-blur-xs border border-white/10"
                  >
                    <span className="text-amber-300 font-bold text-lg block">12°</span>
                    <span className="text-xs text-[#dfcebd]">Optical Writing Incline</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-3 rounded-xl backdrop-blur-xs border border-white/10"
                  >
                    <span className="text-amber-300 font-bold text-lg block">100%</span>
                    <span className="text-xs text-[#dfcebd]">FSC Beechwood & Alloy</span>
                  </motion.div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onBookTourClick}
                    className="px-4 py-2.5 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs shadow-md transition-colors inline-flex items-center gap-2 border border-amber-300/30"
                  >
                    Experience Benches in Person (Book Tour)
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onApplyClick}
                    className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#f7efe6] font-semibold text-xs border border-white/20 transition-colors"
                  >
                    Apply for 2027–28 Admission
                  </motion.button>
                </div>
              </div>

              {/* Interactive Bench Hotspots Inspector in Warm Tone */}
              <div className="lg:col-span-5 bg-[#2f1808]/90 p-4 rounded-xl border border-[#5c3519]">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold text-[#ecdccb] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Interactive Bench Spec Inspector
                  </span>
                  <span className="text-[#baa48d]">Click numbered pins below</span>
                </div>

                {/* Hotspot Preview Image Container */}
                <div className="relative rounded-lg overflow-hidden border border-[#5c3519] bg-[#1a0e05] aspect-4/3">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
                    alt="Classroom Benches"
                    className="w-full h-full object-cover opacity-85"
                  />

                  {/* Hotspots Buttons */}
                  {ergonomicHotspots.map((hotspot, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setActiveErgonomicHotspot(idx)}
                      style={{ left: hotspot.x, top: hotspot.y }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-lg ${
                        activeErgonomicHotspot === idx
                          ? 'bg-[#854e25] text-white ring-4 ring-amber-300 scale-125 z-10 border border-white'
                          : 'bg-[#d8c0aa] text-[#42240e] hover:bg-[#854e25] hover:text-white'
                      }`}
                    >
                      {idx + 1}
                    </motion.button>
                  ))}
                </div>

                {/* Active Hotspot Info Card */}
                <div className="mt-3 bg-[#1d0d04] p-3 rounded-lg border border-[#4d2a12]">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-200 mb-1">
                    <span>Feature #{activeErgonomicHotspot + 1}: {ergonomicHotspots[activeErgonomicHotspot].title}</span>
                  </div>
                  <p className="text-xs text-[#d3beaa] leading-relaxed font-normal">
                    {ergonomicHotspots[activeErgonomicHotspot].desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Infrastructure Category Showcase Cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-4"
            >
              <h3 className="text-xl font-bold text-[#291708]">
                Detailed Classroom & Infrastructure Inventory
              </h3>
              <span className="text-xs text-[#6e4e34]">
                All 64 classroom suites standardized across campus
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLASSROOM_INFRASTRUCTURE.map((item, idx) => {
                const isSelected = selectedBench.id === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedBench(item)}
                    className={`group bg-[#faf6f0] rounded-xl border p-5 transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#854e25] ring-2 ring-[#854e25]/25 shadow-md'
                        : 'border-[#dfceba] hover:border-[#854e25] hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="relative rounded-lg overflow-hidden aspect-16/10 mb-4 bg-[#ede2d5]">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#291708]/85 text-amber-200 backdrop-blur-xs">
                          {item.badge}
                        </span>
                        <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#faf6f0]/95 text-[#4a2b13]">
                          {item.category}
                        </span>
                      </div>

                      <h4 className="font-bold text-base text-[#291708] group-hover:text-[#854e25] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#66462d] mt-1.5 leading-relaxed line-clamp-2">
                        {item.summary}
                      </p>

                      <div className="mt-4 pt-3 border-t border-[#dfceba] space-y-1.5">
                        <span className="text-[11px] font-bold text-[#4d2d14] block">
                          Key Technical Specifications:
                        </span>
                        {item.specs.slice(0, 3).map((spec, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[#66462d]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#854e25] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#dfceba] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#854e25] group-hover:underline inline-flex items-center gap-1">
                        View Full Specifications
                        <ChevronRight className="w-3 h-3" />
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImage({
                            url: item.imageUrl,
                            title: item.title,
                            caption: item.ergonomicsFocus,
                          });
                        }}
                        className="p-1.5 rounded text-[#8f6d50] hover:text-[#42250e] hover:bg-[#ebdccb]"
                        title="Enlarge Image"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selected Furniture Specification Drawer Modal */}
          {selectedBench && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f5ede2] border border-[#dfceba] rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="w-full lg:w-1/3 shrink-0">
                  <img
                    src={selectedBench.imageUrl}
                    alt={selectedBench.title}
                    className="w-full aspect-4/3 object-cover rounded-xl shadow-xs border border-[#dfceba]"
                  />
                  <div className="mt-3 p-3 bg-[#ead9c7] border border-[#d8c3ad] rounded-xl">
                    <span className="text-xs font-bold text-[#4a2810] block mb-1">
                      Orthopedic Paediatric Benefit:
                    </span>
                    <p className="text-xs text-[#5e371a] leading-relaxed">
                      {selectedBench.ergonomicsFocus}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#ebdccb] text-[#5e3416] border border-[#dfceba]">
                      {selectedBench.category}
                    </span>
                    <span className="text-xs text-[#735339]">• {selectedBench.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#291708]">{selectedBench.title}</h3>
                  <p className="text-sm text-[#66462d] mt-2 leading-relaxed">{selectedBench.summary}</p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#543013] mt-5 mb-2">
                    Complete Architectural & Material Specs:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedBench.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="bg-[#faf6f0] p-3 rounded-lg border border-[#dfceba] flex items-start gap-2 text-xs text-[#4d2d14] shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#854e25] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 flex-wrap">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={onBookTourClick}
                      className="px-4 py-2.5 bg-[#854e25] hover:bg-[#72401d] text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
                    >
                      Book Physical Campus Visit & Tour
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setSubSection('gallery')}
                      className="px-4 py-2.5 bg-[#ebdccb] hover:bg-[#dfceba] text-[#42250e] border border-[#d8c3ad] rounded-lg text-xs font-semibold transition-colors"
                    >
                      Browse Related Photos
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* SUB-SECTION 2: CAMPUS AREA & INTERACTIVE MAP */}
      {subSection === 'map' && (
        <div className="mt-8 space-y-8">
          {/* 25-Acre Map Overview Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="bg-[#faf6f0] rounded-2xl border border-[#dfceba] p-6 shadow-xs"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <span className="text-xs font-bold text-[#7a441b] uppercase tracking-wider bg-[#ebdccb] px-2.5 py-1 rounded border border-[#dfceba]">
                  Spatial Masterplan
                </span>
                <h3 className="text-xl font-extrabold text-[#291708] mt-2">
                  25-Acre Eco-Campus Layout
                </h3>
                <p className="text-xs text-[#66462d] mt-1.5 leading-relaxed">
                  Interconnected pedestrian-only quads, green shaded courtyards, rain gardens, and 
                  dedicated research complexes designed for safe, distraction-free learning.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#523620] border-y md:border-y-0 md:border-x border-[#dfceba] py-3 md:py-0 md:px-6">
                <div>
                  <span className="font-bold text-[#291708] block text-sm">8 Major Zones</span>
                  <span className="text-[#735339]">Fully Accessible Ramps</span>
                </div>
                <div>
                  <span className="font-bold text-[#291708] block text-sm">2,500 Capacity</span>
                  <span className="text-[#735339]">Day Scholars & Boarders</span>
                </div>
                <div>
                  <span className="font-bold text-[#291708] block text-sm">60% Solar</span>
                  <span className="text-[#735339]">Clean Energy Generation</span>
                </div>
                <div>
                  <span className="font-bold text-[#291708] block text-sm">Zero-Vehicle</span>
                  <span className="text-[#735339]">Central Academic Core</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onBookTourClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#854e25] hover:bg-[#72401d] text-white text-xs font-bold text-center shadow-xs transition-colors"
                >
                  Schedule Guided Campus Tour
                </motion.button>
                <span className="text-[11px] text-[#735339] text-center">
                  Daily tours conducted Mon–Sat: 10:00 AM & 02:30 PM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Graphical Schematic in Deep Warm Leather */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="bg-[#241306] rounded-2xl p-6 border border-[#4a2912] text-white relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-base text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-300" />
                  Interactive Campus Schematic Map
                </h4>
                <p className="text-xs text-[#cbb6a1]">Click any zone pin to view area specs, photos, and facilities</p>
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-amber-200 bg-[#42230e] px-2.5 py-1 rounded-full border border-[#693a18]">
                Selected: {selectedArea.name}
              </span>
            </div>

            {/* Visual Stylized Map Grid with Pinpoints */}
            <div className="relative w-full aspect-16/9 bg-gradient-to-br from-[#1a0c03] via-[#241206] to-[#361c0a] rounded-xl border border-[#4a2912] overflow-hidden shadow-inner flex items-center justify-center">
              {/* Background architectural contours */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4a373_1px,transparent_1px)] [background-size:24px_24px]" />

              {/* Central Green Quad Simulation */}
              <div className="absolute left-[30%] top-[25%] w-[40%] h-[50%] bg-[#2e3d18]/40 rounded-3xl border border-[#6b8c38]/30 flex items-center justify-center pointer-events-none">
                <span className="text-[11px] font-bold text-[#b4d482]/60 uppercase tracking-widest text-center px-4">
                  Central Shaded Botanical Quadrangle
                </span>
              </div>

              {/* Synthetic Running Track Outline */}
              <div className="absolute right-[8%] bottom-[12%] w-[28%] h-[45%] rounded-full border-2 border-dashed border-[#cda077]/40 pointer-events-none" />

              {/* Map Hotspot Pins */}
              {CAMPUS_AREAS.map((area) => {
                const isSelected = selectedArea.id === area.id;
                return (
                  <motion.div
                    key={area.id}
                    whileHover={{ scale: 1.15 }}
                    style={{ left: `${area.mapCoordinates.x}%`, top: `${area.mapCoordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                    onClick={() => setSelectedArea(area)}
                  >
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/40 scale-110'
                          : 'bg-[#3b200c]/90 text-white hover:bg-[#854e25] hover:scale-105 border border-[#5e3415]'
                      }`}
                    >
                      <Building className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline text-[11px] whitespace-nowrap">{area.name.split(' ')[0]}</span>
                    </div>

                    {/* Hover tooltip */}
                    <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#2d1708] text-white text-[11px] p-2 rounded-lg border border-[#5e3415] shadow-xl pointer-events-none z-20">
                      <p className="font-bold text-amber-300">{area.name}</p>
                      <p className="text-[#cbb6a1] text-[10px] mt-0.5">{area.acreageOrSqft} • {area.capacity}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Selected Area Detail Pane */}
            {selectedArea && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-[#331c0c] rounded-xl p-5 border border-[#522d14] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-4 rounded-lg overflow-hidden aspect-16/10 bg-[#1d0e04] border border-[#4d2a12]">
                  <img
                    src={selectedArea.imageUrl}
                    alt={selectedArea.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#593113] text-amber-200 border border-[#7a451d]">
                      {selectedArea.category}
                    </span>
                    <span className="text-xs text-[#cbb6a1]">Commissioned Year {selectedArea.builtYear}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white">{selectedArea.name}</h4>
                  <p className="text-xs text-[#dfcebd] mt-1.5 leading-relaxed">{selectedArea.description}</p>

                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-[#241306] p-2 rounded border border-[#4d2a12]">
                      <span className="text-[#baa48d] text-[10px] block">Area Size:</span>
                      <span className="font-bold text-amber-300">{selectedArea.acreageOrSqft}</span>
                    </div>
                    <div className="bg-[#241306] p-2 rounded border border-[#4d2a12]">
                      <span className="text-[#baa48d] text-[10px] block">Capacity:</span>
                      <span className="font-bold text-white">{selectedArea.capacity}</span>
                    </div>
                    <div className="bg-[#241306] p-2 rounded border border-[#4d2a12] col-span-2">
                      <span className="text-[#baa48d] text-[10px] block">Key Amenities:</span>
                      <span className="font-semibold text-[#f7efe6] truncate block">
                        {selectedArea.facilities.join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={onBookTourClick}
                      className="px-3.5 py-1.5 rounded-lg bg-[#854e25] hover:bg-[#72401d] text-white font-bold text-xs transition-colors border border-amber-300/30"
                    >
                      Visit This Zone (Tour Booking)
                    </motion.button>
                    <button
                      onClick={() => setSubSection('gallery')}
                      className="text-xs font-semibold text-amber-200 hover:text-white transition-colors"
                    >
                      View Zone Photos &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Area Directory List */}
          <div>
            <h4 className="text-lg font-bold text-[#291708] mb-4">Complete Campus Area Zones</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CAMPUS_AREAS.map((area, idx) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedArea(area)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedArea.id === area.id
                      ? 'bg-[#ebdccb] border-[#854e25] shadow-xs ring-1 ring-[#854e25]'
                      : 'bg-[#faf6f0] border-[#dfceba] hover:border-[#854e25] hover:shadow-2xs'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a441b] block">
                    {area.category}
                  </span>
                  <h5 className="font-bold text-sm text-[#291708] mt-1">{area.name}</h5>
                  <p className="text-xs text-[#735339] mt-0.5">{area.acreageOrSqft}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-SECTION 3: PHOTO GALLERY */}
      {subSection === 'gallery' && (
        <div className="mt-8 space-y-6">
          {/* Gallery Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {galleryCategories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGalleryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  galleryFilter === cat
                    ? 'bg-[#854e25] text-white shadow-xs'
                    : 'bg-[#ebdccb] text-[#593922] hover:bg-[#dfceba]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid with Scroll Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() =>
                  setLightboxImage({
                    url: photo.imageUrl,
                    title: photo.title,
                    caption: photo.caption,
                  })
                }
                className="group relative bg-[#faf6f0] rounded-xl overflow-hidden border border-[#dfceba] shadow-2xs hover:shadow-lg hover:border-[#854e25] transition-all cursor-pointer"
              >
                <div className="aspect-16/11 overflow-hidden bg-[#ede2d5] relative">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261406]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold inline-flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-amber-300" />
                      Click to Enlarge
                    </span>
                  </div>
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#291708]/85 text-amber-200 backdrop-blur-xs">
                    {photo.category}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-sm text-[#291708] group-hover:text-[#854e25] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-[#66462d] mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#170c04]/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#261407] rounded-2xl overflow-hidden border border-[#4d2c13] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#3d220e]/80 text-white hover:bg-[#573114] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] bg-black flex items-center justify-center">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 bg-[#261407] text-white">
                <h3 className="text-lg font-bold text-amber-300">{lightboxImage.title}</h3>
                <p className="text-xs text-[#dfcebd] mt-1">{lightboxImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
