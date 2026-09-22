import {
  CampusArea,
  ClassroomInfrastructure,
  CourseLevel,
  SubjectItem,
  TeacherProfile,
  SchoolNotice,
  SchoolEvent,
} from '../types';

export const SCHOOL_INFO = {
  name: 'Oakridge International Academy',
  tagline: 'Inspiring Curiosity • Empowering Excellence • Nurturing Character',
  establishedYear: 1994,
  affiliation: 'CBSE & IB World School Certified (Affiliation No: 830192)',
  campusSize: '25 Acres Lush Green Eco-Campus',
  studentCount: '2,450+ Enrolled Scholars',
  facultyCount: '135+ Distinguished Educators',
  studentTeacherRatio: '11 : 1',
  placementRate: '100% University Placement (Ivy League, IIT, Russell Group, Oxbridge)',
  address: 'Hillview Eco Campus, Sector 14, Knowledge Corridor, Bengaluru, KA 560068',
  contactEmail: 'admissions@oakridge-academy.edu',
  helplinePhone: '+91 (080) 4192-8800',
  admissionDeskPhone: '+91 (080) 4192-8855',
  visitingHours: 'Monday – Saturday: 08:30 AM to 04:30 PM',
};

export const CAMPUS_AREAS: CampusArea[] = [
  {
    id: 'academic-quad',
    name: 'Aryabhata Academic Quadrangle',
    category: 'Academics',
    acreageOrSqft: '140,000 sq ft (4 Storeys)',
    capacity: '1,600 Students simultaneously',
    description:
      'The core academic sanctuary featuring 64 climate-controlled smart classrooms, tiered lecture halls, breakout discussion pods, and faculty resource lounges.',
    highlights: [
      'Ergonomic dual student benches with posture lumbar curve',
      '86" Promethean 4K interactive digital touchboards',
      'Dual-glazed sound-insulated acoustic windows',
      'Natural cross-ventilation & HEPA air filtration',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 38, y: 35 },
    facilities: ['Smart Classrooms', 'Student Locker Hub', 'Faculty Lounges', 'Water Refill Stations'],
    builtYear: 2018,
  },
  {
    id: 'stem-innovation-hub',
    name: 'Ada Lovelace STEM & Robotics Hub',
    category: 'Science & Tech',
    acreageOrSqft: '42,000 sq ft',
    capacity: '320 Scholars per shift',
    description:
      'State-of-the-art research complex housing specialized physics, chemistry, biotechnology labs, 3D printing makerspace, and AI/IoT robotics prototyping workshops.',
    highlights: [
      'Modular hexagonal collaborative work benches with pneumatic height adjust',
      'Integrated spark-proof power consoles & acid-resistant ceramic tops',
      'High-speed fiber-optic Gigabit testing lanes',
      'Automated fume extractors and eyewash emergency stations',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 62, y: 28 },
    facilities: ['Robotics Arena', 'Biochem Wet Labs', 'Optics Darkroom', '3D Prototyping Farm'],
    builtYear: 2021,
  },
  {
    id: 'central-library',
    name: 'Tagore Central Library & Media Center',
    category: 'Library & Culture',
    acreageOrSqft: '35,000 sq ft',
    capacity: '450 Silent Readers',
    description:
      'Three-tier modern repository containing 55,000+ volumes, JSTOR/IEEE digital database subscriptions, soundproof podcast/audiobook studios, and collaborative study nooks.',
    highlights: [
      'Solid oak reading tables with individualized dimmable brass lamps',
      'Ergonomic Herman Miller study chairs with memory foam',
      'RFID self-checkout kiosks and return chutes',
      'Curated rare manuscripts and global periodical gallery',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 48, y: 55 },
    facilities: ['Digital Research Lab', 'Rare Books Archive', 'Silent Reading Mezzanine', 'Discussion Pods'],
    builtYear: 2019,
  },
  {
    id: 'olympic-sports-complex',
    name: 'Olympia Athletic Arena & Aquatic Pavilion',
    category: 'Sports',
    acreageOrSqft: '8.5 Acres outdoor + indoor',
    capacity: '2,500 Spectators',
    description:
      'World-class sporting infrastructure comprising an 8-lane 400m synthetic running track, FIFA-standard artificial turf football pitch, heated Olympic 50m pool, and indoor wooden basketball courts.',
    highlights: [
      'Heated 50m Olympic regulation 8-lane swimming pool',
      'FIBA-certified maple wood indoor basketball gymnasium',
      '4 floodlit synthetic tennis & pickleball courts',
      'Physiotherapy & sports medicine conditioning wing',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 78, y: 62 },
    facilities: ['Olympic Pool', 'Synthetic Track', 'Cricket Pavilion', 'Squash Courts'],
    builtYear: 2020,
  },
  {
    id: 'junior-montessori-pavilion',
    name: 'Early Horizons Montessori Wing',
    category: 'Academics',
    acreageOrSqft: '28,000 sq ft',
    capacity: '280 Early Learners',
    description:
      'Carefully designed sensory-rich learning sanctuary for Pre-K to Grade 2. Features soft-wood low-height benches, tactile sand & water learning pits, and child-safe gardens.',
    highlights: [
      'Child-safe low-height Scandinavian birchwood benches & desks',
      'Non-toxic organic plant-based finishes and rounded safety borders',
      'Direct outdoor garden connectivity for sensory botany exploration',
      'Indoor soft play gymnasium and musical discovery corner',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 22, y: 58 },
    facilities: ['Sensory Garden', 'Sand Pit', 'Nap & Wellness Pods', 'Mini Amphitheatre'],
    builtYear: 2022,
  },
  {
    id: 'performing-arts-auditorium',
    name: 'Symphony Hall & Visual Arts Atrium',
    category: 'Library & Culture',
    acreageOrSqft: '32,000 sq ft',
    capacity: '1,200 Seated Audience',
    description:
      'Acoustically tuned grand auditorium with professional motorized fly-tower stage, Dolby surround sound, pottery ceramic kilns, and fine art painting ateliers.',
    highlights: [
      'Meyer Sound acoustic array with reverberation time tuning',
      'Green rooms and orchestra pit for symphonic ensembles',
      'Sculpture and ceramic studio with dual high-fire kilns',
      'Exhibition galleria with museum-grade adjustable spotlighting',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 25, y: 25 },
    facilities: ['Main Auditorium', 'Orchestra Pit', 'Ceramics Kiln', 'Black Box Theatre'],
    builtYear: 2017,
  },
  {
    id: 'cafeteria-nutrition-center',
    name: 'Annapurna Dining Pavilion & Organic Kitchen',
    category: 'Residential & Amenities',
    acreageOrSqft: '24,000 sq ft',
    capacity: '800 Diners per sitting',
    description:
      'Hygienic, dietician-supervised central dining hall serving wholesome balanced vegetarian and non-vegetarian meals, fresh fruits, and dairy from our sustainable partner farms.',
    highlights: [
      'Stainless steel & solid composite easy-sanitize bench sets',
      'FSSAI 5-Star rated stainless commercial kitchen',
      'Zero-waste composting digestor turning organic waste to campus fertilizer',
      'Reverse Osmosis UV mineral water hydration points',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 55, y: 78 },
    facilities: ['Main Dining Hall', 'Salad & Fruit Bar', 'Staff Dining Lounge', 'Compost Station'],
    builtYear: 2019,
  },
  {
    id: 'boarding-residences',
    name: 'Horizon Boarding Lodges (Boys & Girls)',
    category: 'Residential & Amenities',
    acreageOrSqft: '65,000 sq ft',
    capacity: '360 Resident Scholars',
    description:
      'Twin residential pavilions with 24/7 security, full-time resident wardens, medical infirmary, study lounges, and laundromat facilities.',
    highlights: [
      'Twin-sharing en-suite rooms with individual study desks & ergonomic chairs',
      'Biometric access controls & 24/7 nursing clinic',
      'Evening supervised prep rooms and peer tutoring halls',
      'Weekend recreation room with indoor games & media screens',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    mapCoordinates: { x: 82, y: 32 },
    facilities: ['Infirmary', 'Laundry Wing', 'Resident Gym', 'Common TV Lounge'],
    builtYear: 2020,
  },
];

export const CLASSROOM_INFRASTRUCTURE: ClassroomInfrastructure[] = [
  {
    id: 'ergonomic-benches',
    title: 'Dual Ergonomic Posture-Aligned Student Benches',
    category: 'Benches & Seating',
    summary:
      'Specially engineered German educational furniture crafted to support active spinal alignment during long learning sessions.',
    specs: [
      'Material: High-density German Beechwood laminate with powder-coated alloy chassis',
      'Ergonomics: 12° tilted desk surface to eliminate neck strain during writing',
      'Seating: S-curve lumbar backrest with breathable waterfall seat edge',
      'Storage: Integrated under-desk dual steel wire basket & heavy-duty backpack hooks',
      'Safety: Rounded 25mm bullnose corner radius with zero-pinch hinge mechanics',
      'Acoustics: Rubberized floor glides preventing screeching noises during movement',
    ],
    ergonomicsFocus:
      'Reduces cervical spine compression by 34% compared to traditional flat wooden desks. Recommended by Indian Orthopaedic Paediatric Council.',
    imageUrl:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    badge: 'Classroom Benchmark',
  },
  {
    id: 'modular-stem-benches',
    title: 'Collaborative Hexagonal STEM Workbenches',
    category: 'Benches & Seating',
    summary:
      'Flexible, reconfigurable work tables designed for robotics, group experiments, and peer-to-peer design sprints.',
    specs: [
      'Configuration: Can be arranged as standalone islands, large circular roundtables, or zigzag testing tracks',
      'Power: Pop-up flush electrical sockets with 65W USB-PD fast-charging and ground-fault protection',
      'Durability: Chemical-resistant, scratch-proof epoxy resin work surface (100kg load capacity)',
      'Mobility: Heavy-duty 360° lockable polyurethane silent caster wheels',
      'Tool Racks: Embedded magnetic side rails for precision screwdrivers, multimeter holders, and tablets',
    ],
    ergonomicsFocus:
      'Facilitates rapid transition between independent focused drafting and 6-person collaborative engineering sessions in under 60 seconds.',
    imageUrl:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    badge: 'Innovation Standard',
  },
  {
    id: 'science-lab-benches',
    title: 'Advanced Wet-Lab Heavy Duty Benches',
    category: 'Benches & Seating',
    summary:
      'Specialized laboratory workstations installed in Chemistry, Physics, and Advanced Biotechnology research suites.',
    specs: [
      'Worktop: 25mm monolithic acid/alkali-resistant ceramic slab rated for thermal shock up to 600°C',
      'Service Spine: Gas nozzles with leak detection cutoffs, vacuum taps, and pure deionized water spigots',
      'Sink: Integrated marine-grade epoxy sinks with swan-neck dilution faucets and anti-siphon valves',
      'Safety: Overhead localized extraction arms drawing volatile vapors away from student breathing zones',
      'Stools: Swivel stools with hydraulic height adjustment (550mm - 750mm) and footrest rings',
    ],
    ergonomicsFocus:
      'Allows both seated microscopy tasks and standing titration experiments with full spinal balance and uninhibited arm sweep.',
    imageUrl:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    badge: 'Lab Grade',
  },
  {
    id: 'smart-boards',
    title: '86" 4K Ultra-HD Interactive Multi-Touch Smartboard',
    category: 'Smart Interactive Tech',
    summary:
      'Centrally mounted in all 64 classrooms, paired with 4K AI-tracking PTZ cameras for hybrid lecturing and interactive 3D simulations.',
    specs: [
      'Display: Zero-bonding anti-glare toughened glass with ambient light self-calibration',
      'Touch: 40-point simultaneous touch allowing 4 students to solve equations simultaneously',
      'Audio: 45W front-firing acoustic soundbar with studio array beamforming microphones',
      'Connectivity: Wireless screen casting from student iPads/laptops with teacher moderation',
      'Software: Preloaded with GeoGebra, PhET Physics simulations, and 3D Anatomy explorer',
    ],
    ergonomicsFocus:
      'Optical anti-blue-light filter certification (TÜV Rheinland) prevents eye strain for students even seated in the rear row.',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    badge: 'Digital Classroom',
  },
  {
    id: 'lighting-acoustics',
    title: 'Circadian Daylight LED & Acoustic Sound Dampening',
    category: 'Ergonomics & Lighting',
    summary:
      'Classroom environmental engineering designed to maximize student alertness, cognitive stamina, and speech intelligibility.',
    specs: [
      'Illumination: Smart circadian lighting matching the sun’s natural color temperature (3000K to 5500K)',
      'Uniformity: Minimum 500 Lux shadowless illumination across every student desktop',
      'Sound Absorption: Recycled PET felt acoustic ceiling baffles absorbing 85% of ambient echo (NRC 0.85)',
      'Air Quality: Continuous TVOC, CO2, and PM2.5 monitoring dashboard in every wing with fresh-air intake',
    ],
    ergonomicsFocus:
      'Decreases mental fatigue during afternoon classes by maintaining optimal oxygenation and eliminating high-frequency flicker.',
    imageUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    badge: 'Wellness Engineering',
  },
  {
    id: 'junior-furniture',
    title: 'Scandinavian Soft-Curve Montessori Discovery Benches',
    category: 'Benches & Seating',
    summary:
      'Scaled down for kindergarten and early years learners, fostering tactile autonomy, posture health, and joyous peer interaction.',
    specs: [
      'Material: Solid untreated Nordic Birch finished with food-grade beeswax',
      'Weight: Lightweight enough for 5-year-olds to safely carry and reconfigure during play circles',
      'Safety: Zero sharp edges, zero screws exposed; interlocking mortise-and-tenon woodcraft',
      'Organization: Built-in slide-out transparent storage bins for crayons, blocks, and reading books',
    ],
    ergonomicsFocus:
      'Ensures children’s feet rest firmly flat on the floor with knees at a 90° angle, preventing fidgeting and enhancing attention span.',
    imageUrl:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
    badge: 'Early Years',
  },
];

export const GALLERY_PHOTOS = [
  {
    id: 'g-1',
    title: 'Modern Smart Classroom with Ergonomic Benches',
    category: 'Classrooms & Benches',
    imageUrl:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Grade 10 classroom equipped with adjustable dual benches and 4K interactive display.',
  },
  {
    id: 'g-2',
    title: 'Senior Chemistry & Molecular Research Lab',
    category: 'Labs & Science',
    imageUrl:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Individual acid-proof ceramic workstations with individual gas & fume extraction points.',
  },
  {
    id: 'g-3',
    title: 'Robotics & Artificial Intelligence Prototyping Bay',
    category: 'Labs & Science',
    imageUrl:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students assembling autonomous rovers on modular hexagonal powered workbenches.',
  },
  {
    id: 'g-4',
    title: 'Tagore Central Library Silent Reading Atrium',
    category: 'Library & Study',
    imageUrl:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    caption: 'Solid oak study carrels with personal warm LED desk reading lights.',
  },
  {
    id: 'g-5',
    title: 'Heated Olympic 50m Swimming Pavilion',
    category: 'Sports & Grounds',
    imageUrl:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    caption: 'Temperature regulated 8-lane racing pool with FINA electronic timing pads.',
  },
  {
    id: 'g-6',
    title: 'Early Years Montessori Learning Corner',
    category: 'Classrooms & Benches',
    imageUrl:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Low-height birchwood child benches designed for hands-on discovery and peer collaboration.',
  },
  {
    id: 'g-7',
    title: 'Lush 25-Acre Eco-Campus Main Entrance & Walkways',
    category: 'Campus Grounds',
    imageUrl:
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Pedestrianized tree-lined boulevards connecting the academic quadrangles.',
  },
  {
    id: 'g-8',
    title: 'Synthetic 400m Athletics Track & Football Field',
    category: 'Sports & Grounds',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    caption: 'All-weather polyurethane running track and floodlit regulation turf.',
  },
  {
    id: 'g-9',
    title: 'Fine Arts, Sculpture & Ceramics Studio',
    category: 'Arts & Culture',
    imageUrl:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Natural skylit artist benches, potter wheels, and ceramic firing kilns.',
  },
  {
    id: 'g-10',
    title: 'Collaborative Group Study & Breakout Pods',
    category: 'Classrooms & Benches',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    caption: 'High-backed acoustic bench booths for team debate prep and project brainstorming.',
  },
  {
    id: 'g-11',
    title: 'Grand Symphony Auditorium Main Stage',
    category: 'Arts & Culture',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    caption: '1,200 seat tiered auditorium hosting annual drama productions and guest symposiums.',
  },
  {
    id: 'g-12',
    title: 'Clean Energy Solar Canopies & Weather Station',
    category: 'Campus Grounds',
    imageUrl:
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    caption: 'Roof-mounted 250kW solar array providing 60% of daily campus electrical needs.',
  },
];

export const COURSES_DATA: CourseLevel[] = [
  {
    id: 'early-years',
    levelName: 'Early Horizons Montessori',
    grades: 'Pre-K, Nursery, Kindergarten (KG1 & KG2)',
    ageRange: '3 to 5.5 Years',
    board: 'International Montessori & EYFS Framework',
    studentCount: 220,
    description:
      'A holistic, play-integrated early childhood curriculum nurturing motor dexterity, language confidence, social empathy, and fundamental numeracy in child-friendly spaces.',
    keyPillars: [
      'Phonics & Storytelling Guilds',
      'Sensory Botany & Nature Play',
      'Foundational Number Sense & Logic Blocks',
      'Music, Movement & Gross Motor Gymnastics',
    ],
    schedule: '08:45 AM – 12:45 PM (Monday to Friday)',
  },
  {
    id: 'primary-school',
    levelName: 'Primary School Academy',
    grades: 'Grades 1 to 5',
    ageRange: '6 to 10 Years',
    board: 'CBSE & Cambridge Primary Integration',
    studentCount: 680,
    description:
      'Cultivating independent reading, scientific questioning, creative writing, and bilingual fluency through hands-on project work and outdoor learning cycles.',
    keyPillars: [
      'Singapore Math & Heuristic Problem Solving',
      'Inquiry Science Discovery Labs',
      'Bilingual Language Immersion (Hindi/French/Spanish)',
      'Visual Arts, Coding with Scratch & Yoga',
    ],
    schedule: '08:15 AM – 03:00 PM (Monday to Friday)',
  },
  {
    id: 'middle-school',
    levelName: 'Middle School Discovery',
    grades: 'Grades 6 to 8',
    ageRange: '11 to 13 Years',
    board: 'CBSE Accelerated Foundation',
    studentCount: 620,
    description:
      'Transitioning scholars toward analytical rigor, laboratory experimentation, historical causality analysis, and foundational algorithmic thinking with dedicated faculty mentors.',
    keyPillars: [
      'Integrated General Science with Dedicated Physics, Chemistry, Biology Lab Hours',
      'Python Programming & Basic Robotics',
      'Global Perspectives, Model UN & Debate Society',
      'Mandatory Competitive Sport & Performing Art Specialty',
    ],
    schedule: '08:00 AM – 03:30 PM (Monday to Friday)',
  },
  {
    id: 'secondary-school',
    levelName: 'Secondary School (High School)',
    grades: 'Grades 9 & 10',
    ageRange: '14 to 15 Years',
    board: 'CBSE All India Secondary School Examination (AISSE)',
    studentCount: 510,
    description:
      'Rigorous academic training for board exams paired with Olympiad coaching, career aptitude counseling, scientific research symposiums, and leadership internships.',
    keyPillars: [
      'Advanced Mathematics (Standard / Basic options)',
      'Comprehensive Science with 6 Hours of Weekly Lab Practicals',
      'Artificial Intelligence & Data Science Elective',
      'Social Sciences & Economics Case Studies',
    ],
    schedule: '08:00 AM – 03:45 PM (Monday to Friday)',
  },
  {
    id: 'senior-secondary',
    levelName: 'Senior Secondary College Prep',
    grades: 'Grades 11 & 12',
    ageRange: '16 to 18 Years',
    board: 'CBSE All India Senior School Certificate Examination (AISSCE)',
    studentCount: 420,
    description:
      'Four distinct specialized academic streams designed for rigorous competitive examination success (JEE, NEET, CLAT, SAT, CUET) and admissions to premier global universities.',
    keyPillars: [
      'Four Specialized Academic Streams with flexible 5th/6th electives',
      'Integrated in-house coaching by master professors',
      'Independent Capstone Research Papers & Lab Mentorships',
      'Comprehensive College Guidance Counseling & Overseas Portfolios',
    ],
    schedule: '08:00 AM – 04:15 PM (Monday to Saturday)',
    streams: [
      {
        id: 'stem-engineering',
        name: 'STEM Engineering & Tech (PCM)',
        code: 'STR-PCM-ENG',
        description:
          'For future engineers, software architects, mathematicians, and physical scientists aiming for premier engineering institutes.',
        compulsorySubjects: ['Physics (Theory & Lab)', 'Chemistry', 'Mathematics', 'English Core'],
        electiveSubjects: [
          'Computer Science (Python & SQL)',
          'Artificial Intelligence & ML',
          'Physical Education',
          'Applied Economics',
        ],
        careerPaths: [
          'Aerospace & Mechanical Engineering',
          'Computer Science & AI Research',
          'Data Science & Quantitative Finance',
          'Robotics & Nanotechnology',
        ],
        seatsAvailable: 80,
      },
      {
        id: 'life-sciences-medical',
        name: 'Life Sciences & Medical (PCB)',
        code: 'STR-PCB-MED',
        description:
          'Dedicated pathway for future surgeons, biomedical researchers, geneticists, and healthcare leaders with intensive clinical lab exposure.',
        compulsorySubjects: ['Biology & Genetics', 'Physics (Medical Focus)', 'Chemistry', 'English Core'],
        electiveSubjects: [
          'Biotechnology & Bioinformatics',
          'Mathematics (Standard/Applied)',
          'Psychology',
          'Physical Education',
        ],
        careerPaths: [
          'Medicine & Surgery (MBBS / MD)',
          'Biomedical Engineering & Genomics',
          'Pharmaceutical Chemistry',
          'Neuroscience & Clinical Psychology',
        ],
        seatsAvailable: 60,
      },
      {
        id: 'commerce-economics',
        name: 'Commerce, Finance & Global Markets',
        code: 'STR-COM-FIN',
        description:
          'Analytical stream focusing on corporate finance, accounting regulations, micro/macro economics, and business enterprise management.',
        compulsorySubjects: [
          'Accountancy & Financial Auditing',
          'Business Studies & Entrepreneurship',
          'Economics',
          'English Core',
        ],
        electiveSubjects: [
          'Applied Mathematics / Statistics',
          'Informatics Practices & Python',
          'Commercial Arts',
          'Legal Studies',
        ],
        careerPaths: [
          'Investment Banking & Equity Research',
          'Chartered Accountancy (CA / CFA / ACCA)',
          'Corporate Law & M&A Advisory',
          'Fintech & Venture Capital',
        ],
        seatsAvailable: 75,
      },
      {
        id: 'humanities-social-sciences',
        name: 'Humanities, Public Policy & International Relations',
        code: 'STR-HUM-POL',
        description:
          'Empowering critical thinkers, writers, diplomats, legal scholars, and journalists with profound understanding of society and law.',
        compulsorySubjects: ['World & Indian History', 'Political Science & Governance', 'Psychology', 'English Core'],
        electiveSubjects: [
          'Sociology & Anthropology',
          'Economics',
          'Legal Studies & Constitutional Law',
          'Mass Media & Journalism',
        ],
        careerPaths: [
          'Civil Services & Diplomatic Corps (UPSC)',
          'International Human Rights & Corporate Law',
          'Investigative Journalism & Media Production',
          'Public Policy & Think Tank Advisory',
        ],
        seatsAvailable: 65,
      },
    ],
  },
];

export const SUBJECTS_CATALOG: SubjectItem[] = [
  {
    id: 'subj-phy',
    name: 'Advanced Physics & Quantum Principles',
    code: 'PHY-042',
    department: 'Physical Sciences',
    grades: ['Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '70% Theory / 30% Laboratory',
    weeklyHours: 6,
    description:
      'Rigorous exploration of Classical Mechanics, Electrodynamics, Wave Optics, Thermodynamics, and Modern Quantum & Semiconductor Physics with weekly experimental lab modules.',
    keyTopics: [
      'Rotational Dynamics & Gravitation',
      'Electromagnetic Induction & AC Circuits',
      'Wave Optics & Laser Interferometry',
      'Dual Nature of Matter & Nuclear Fission/Fusion',
      'Semiconductor Diodes & Logic Gates',
    ],
    assignedTeachers: ['Dr. Evelyn Vance (Ph.D. Cambridge)', 'Prof. Rajesh Sen (M.Sc. IIT)'],
    textbook: 'NCERT Physics Vols I & II + Resnick Halliday & Krane Reference Series',
  },
  {
    id: 'subj-cs-ai',
    name: 'Computer Science & Artificial Intelligence',
    code: 'CS-083',
    department: 'Computer Science',
    grades: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '50% Theory / 50% Lab Coding',
    weeklyHours: 5,
    description:
      'Comprehensive programming pedagogy covering computational logic, Python object-oriented programming, relational databases (SQL), data structures (Stacks & Queues), and foundational Neural Networks.',
    keyTopics: [
      'Python OOP & Modular Software Design',
      'Algorithm Complexity & Sorting / Searching',
      'Relational Database Management with MySQL',
      'Computer Networks & Cyber Safety Protocols',
      'Introductory Computer Vision & NLP Models',
    ],
    assignedTeachers: ['Marcus Sterling (M.Sc. MIT)', 'Priya Natarajan (M.Tech. BITS Pilani)'],
    textbook: 'Sumita Arora Computer Science + Oakridge AI Lab Manual',
  },
  {
    id: 'subj-chem',
    name: 'Chemistry & Molecular Synthesis',
    code: 'CHE-043',
    department: 'Chemical Sciences',
    grades: ['Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '70% Theory / 30% Lab Practicals',
    weeklyHours: 6,
    description:
      'In-depth study of physical equilibrium, chemical kinetics, organic reaction mechanisms (reaction intermediates, stereochemistry), coordination compounds, and qualitative salt analysis.',
    keyTopics: [
      'Chemical Thermodynamics & Gibbs Energy',
      'Electrochemistry & Chemical Kinetics',
      'd- and f-Block Elements & Coordination Compounds',
      'Aldehydes, Ketones, Carboxylic Acids & Biomolecules',
      'Spectroscopic Analysis & Green Chemistry Protocols',
    ],
    assignedTeachers: ['Dr. Sudhir Deshmukh (Ph.D. IISc)', 'Neeta Kapoor (M.Sc. Delhi Univ)'],
    textbook: 'NCERT Chemistry Vols I & II + Morrison & Boyd Organic Chemistry Guide',
  },
  {
    id: 'subj-math',
    name: 'Pure & Applied Mathematics',
    code: 'MAT-041',
    department: 'Mathematics',
    grades: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '80% Theory / 20% Math Lab',
    weeklyHours: 6,
    description:
      'Developing rigorous deductive reasoning through Differential & Integral Calculus, Vectors & 3D Geometry, Linear Programming, Probability Distributions, and Matrices.',
    keyTopics: [
      'Continuity, Differentiability & Derivatives Applications',
      'Indefinite & Definite Integrals with Area under Curves',
      'Vector Algebra & Three-Dimensional Spatial Geometry',
      'Bayes Theorem & Binomial Random Variables',
      'Linear Programming Optimization Matrices',
    ],
    assignedTeachers: ['Prof. Rajesh Sen (M.Sc. IIT)', 'Sunita Raman (M.Sc. Chennai Math Inst)'],
    textbook: 'NCERT Mathematics + RD Sharma Advanced Problem Set',
  },
  {
    id: 'subj-bio',
    name: 'Biology, Genetics & Evolutionary Ecology',
    code: 'BIO-044',
    department: 'Biological Sciences',
    grades: ['Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '70% Theory / 30% Slide & Dissection Lab',
    weeklyHours: 6,
    description:
      'Comprehensive study of Mendelian & Molecular Genetics, Human Physiology, Biotechnology recombinant DNA tools, Ecology, and Immunology with microscope dissection labs.',
    keyTopics: [
      'DNA Replication, Transcription & Protein Translation',
      'CRISPR-Cas9 & Recombinant DNA Technologies',
      'Endocrine, Cardiovascular & Neural Human Systems',
      'Biodiversity Conservation & Population Ecology',
      'Microbiology of Pathogens & Monoclonal Antibodies',
    ],
    assignedTeachers: ['Dr. Ananya Ray (Ph.D. Stanford Postdoc)', 'Kavita Pillai (M.Sc. JNU)'],
    textbook: 'NCERT Biology + Campbell Biology Global Edition',
  },
  {
    id: 'subj-eng',
    name: 'World Literature & Rhetoric (English Core)',
    code: 'ENG-301',
    department: 'Languages & Humanities',
    grades: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    credits: 3,
    theoryVsPractical: '100% Interactive Seminar',
    weeklyHours: 4,
    description:
      'Elevating critical textual analysis, argumentative essay writing, public rhetoric, and exploration of classic and contemporary post-colonial literature and poetry.',
    keyTopics: [
      'Critical Reading of Modern & Classical Drama',
      'Comparative Thematic Analysis & Close Literary Reading',
      'Persuasive Oratory, Formal Debate & Model UN Speech',
      'Formal Editorial, Article & Report Writing',
    ],
    assignedTeachers: ['Ananya Sharma (M.A. Oxford)', 'David Vance (M.A. Columbia)'],
    textbook: 'Flamingo & Vistas Anthologies + The Norton Anthology of Literature',
  },
  {
    id: 'subj-acc',
    name: 'Accountancy & Corporate Financial Reporting',
    code: 'ACC-055',
    department: 'Commerce & Finance',
    grades: ['Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '80% Theory / 20% Financial Software Lab',
    weeklyHours: 5,
    description:
      'Accounting for partnership firms, company share capital issuance, debentures, cash flow statements, and financial ratio analysis using Tally and Excel spreadsheets.',
    keyTopics: [
      'Partnership Admission, Retirement & Dissolution Accounts',
      'Issue & Forfeiture of Equity Shares & Debentures',
      'Analysis of Financial Statements & Ratio Computations',
      'Cash Flow Statement (AS-3 Compliant Preparation)',
      'Computerized Accounting & ERP Principles',
    ],
    assignedTeachers: ['Vipin Mehra (FCA, Chartered Accountant)', 'Alka Jain (M.Com.)'],
    textbook: 'TS Grewal Accountancy + Corporate Annual Report Case Studies',
  },
  {
    id: 'subj-econ',
    name: 'Micro & Macro Economics',
    code: 'ECO-030',
    department: 'Commerce & Finance',
    grades: ['Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '85% Theory / 15% Case Project',
    weeklyHours: 5,
    description:
      'Understanding consumer behavior, elasticity, production functions, national income accounting, banking systems, monetary/fiscal policy, and international balance of payments.',
    keyTopics: [
      'Consumer Equilibrium & Price Elasticity of Demand',
      'National Income Aggregates (GDP, GNP, NNP calculations)',
      'Central Banking, Money Multipliers & Repo Rates',
      'Government Budgeting & Fiscal Deficit Metrics',
      'Foreign Exchange Rate Mechanisms & Balance of Payments',
    ],
    assignedTeachers: ['Dr. Harish Kumar (Ph.D. London School of Economics)', 'Alka Jain (M.Com.)'],
    textbook: 'Sandeep Garg Economics + Reserve Bank of India Macroeconomic Reports',
  },
  {
    id: 'subj-pol',
    name: 'Political Science & Global Geopolitics',
    code: 'POL-028',
    department: 'Languages & Humanities',
    grades: ['Grade 11', 'Grade 12'],
    credits: 4,
    theoryVsPractical: '90% Seminar / 10% Mock Parliament',
    weeklyHours: 5,
    description:
      'Analytical review of contemporary world politics (Cold War to multipolar order), UN peacekeeping, regional blocs, constitutional democracy, and social movements.',
    keyTopics: [
      'The End of Bipolarity & Rise of New Power Centers',
      'United Nations & International Security Architectures',
      'Indian Constitution: Fundamental Rights & Judicial Activism',
      'Electoral Politics, Coalition Governments & Federalism',
    ],
    assignedTeachers: ['Siddharth Mukherjee (M.Phil. JNU)', 'David Vance (M.A. Columbia)'],
    textbook: 'NCERT Contemporary World Politics & Politics in India Since Independence',
  },
  {
    id: 'subj-fine-arts',
    name: 'Fine Arts, Sculpture & Art History',
    code: 'ART-049',
    department: 'Visual Arts',
    grades: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    credits: 3,
    theoryVsPractical: '30% Theory / 70% Studio Work',
    weeklyHours: 4,
    description:
      'Immersive studio practice in oil/acrylic painting, clay sculpture, relief printmaking, and analytical appreciation of Rajasthani miniature to European Impressionism.',
    keyTopics: [
      'Six Limbs of Indian Painting (Shadang) & Miniature Art',
      'Life Drawing, Perspective & Chromatic Harmonization',
      'Clay Modeling, Ceramic Firing & Plaster Casting',
      'Modern Abstract Expressionism & Portfolio Curation',
    ],
    assignedTeachers: ['Elena Rostova (M.F.A. Florence Academy of Art)', 'Kunal Sen (B.F.A. Shantiniketan)'],
    textbook: 'Panoramic Indian Art + Studio Practicum Folio',
  },
];

export const TEACHERS_DATA: TeacherProfile[] = [
  {
    id: 't-vance',
    name: 'Dr. Evelyn Vance',
    role: 'Dean of Sciences & Senior Physics Chair',
    department: 'Physical Sciences',
    qualifications: 'Ph.D. in Experimental Physics (University of Cambridge), M.Sc. Imperial College',
    experienceYears: 18,
    email: 'evelyn.vance@oakridge-academy.edu',
    phone: '+91 (080) 4192-8812',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Former CERN visiting fellow with over 18 years of teaching high school scholars. Specializes in making quantum mechanics, thermodynamics, and optics vividly intuitive through live lab demonstrations.',
    subjectsTaught: ['Advanced Physics & Quantum Principles', 'Astronomy & Astrophysics Club'],
    officeHours: 'Tuesday & Thursday: 03:45 PM – 04:45 PM (Room S-204)',
    awards: [
      'National Exemplary Educator Award (2023)',
      'Cambridge Physics Teaching Fellowship (2019)',
      'Mentored 6 International Physics Olympiad Medalists',
    ],
  },
  {
    id: 't-sterling',
    name: 'Marcus Sterling',
    role: 'Head of Computer Science & Robotics Lab',
    department: 'Computer Science',
    qualifications: 'M.Sc. in Artificial Intelligence & Robotics (MIT), B.Tech. Computer Engineering',
    experienceYears: 12,
    email: 'marcus.sterling@oakridge-academy.edu',
    phone: '+91 (080) 4192-8815',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Former Silicon Valley software architect turned educator. Marcus guides students in autonomous robotics, generative AI modeling, competitive programming, and ethical AI stewardship.',
    subjectsTaught: ['Computer Science & Artificial Intelligence', 'Robotics Engineering Workshop'],
    officeHours: 'Monday & Wednesday: 03:30 PM – 04:30 PM (STEM Hub Bay 3)',
    awards: [
      'FIRST Robotics Regional Mentor Champion (2024)',
      'Google Educator Innovation Fellow',
    ],
  },
  {
    id: 't-sharma',
    name: 'Ananya Sharma',
    role: 'Head of Humanities & Literature Guild',
    department: 'Languages & Humanities',
    qualifications: 'M.A. in English Literature (University of Oxford), B.A. Hons. St. Stephen’s College',
    experienceYears: 15,
    email: 'ananya.sharma@oakridge-academy.edu',
    phone: '+91 (080) 4192-8819',
    photoUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    bio: 'Published essayist and debate coach who inspires scholars to dissect literature with philosophical depth and speak with razor-sharp rhetorical conviction in national forums.',
    subjectsTaught: ['World Literature & Rhetoric', 'Creative Writing Masterclass', 'Model UN Mentorship'],
    officeHours: 'Wednesday & Friday: 03:00 PM – 04:00 PM (Library Room L-12)',
    awards: [
      'Oxford South Asian Scholar Citation',
      'All-India Debating Coach of the Year (2022)',
    ],
  },
  {
    id: 't-sen',
    name: 'Prof. Rajesh Sen',
    role: 'Head of Mathematics & Olympiad Coach',
    department: 'Mathematics',
    qualifications: 'M.Sc. in Applied Mathematics (IIT Bombay), B.Sc. St. Xavier’s College',
    experienceYears: 22,
    email: 'rajesh.sen@oakridge-academy.edu',
    phone: '+91 (080) 4192-8822',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Legendary mathematics educator whose students consistently rank in top 0.1% percentiles in IIT-JEE and international math competitions. Transforms complex calculus into an art form.',
    subjectsTaught: ['Pure & Applied Mathematics', 'Olympiad Problem Solving Seminar'],
    officeHours: 'Daily: 07:30 AM – 08:00 AM & 03:45 PM – 04:30 PM (Math Lab M-101)',
    awards: [
      'Presidential Distinguished Teacher Medal (2021)',
      'Ramanujan Math Educator Honor',
    ],
  },
  {
    id: 't-ray',
    name: 'Dr. Ananya Ray',
    role: 'Senior Biology & Biotechnology Fellow',
    department: 'Biological Sciences',
    qualifications: 'Ph.D. in Cellular Genetics (IISc Bengaluru), Postdoctoral Fellow (Stanford Medicine)',
    experienceYears: 14,
    email: 'ananya.ray@oakridge-academy.edu',
    phone: '+91 (080) 4192-8826',
    photoUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80',
    bio: 'Passionate geneticist who leads students through real-world bacterial transformation experiments, CRISPR simulations, and medical physiology workshops.',
    subjectsTaught: ['Biology, Genetics & Evolutionary Ecology', 'Bioinformatics Lab'],
    officeHours: 'Monday & Thursday: 03:30 PM – 04:30 PM (Biotech Lab B-105)',
    awards: [
      'Department of Biotechnology Young Scientist Fellow',
      'Mentor to 3 Intel ISEF finalists',
    ],
  },
  {
    id: 't-mehra',
    name: 'Vipin Mehra, FCA',
    role: 'Head of Commerce & Enterprise Studies',
    department: 'Commerce & Finance',
    qualifications: 'Fellow Chartered Accountant (ICAI), M.Com. Finance & Taxation',
    experienceYears: 16,
    email: 'vipin.mehra@oakridge-academy.edu',
    phone: '+91 (080) 4192-8829',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Brings 16 years of corporate audit and educational leadership into the classroom. Runs the student-led Oakridge Investment Fund and Entrepreneurship Incubator.',
    subjectsTaught: ['Accountancy & Corporate Financial Reporting', 'Youth Entrepreneurship Lab'],
    officeHours: 'Tuesday & Friday: 03:30 PM – 04:30 PM (Commerce Block C-302)',
    awards: [
      'ICAI Best Commerce Educator Award',
      'Junior Achievement Incubator Champion',
    ],
  },
  {
    id: 't-rostova',
    name: 'Elena Rostova',
    role: 'Director of Fine Arts & Sculpture Atelier',
    department: 'Visual Arts',
    qualifications: 'M.F.A. in Classical Realism (Florence Academy of Art, Italy), B.A. Fine Arts',
    experienceYears: 11,
    email: 'elena.rostova@oakridge-academy.edu',
    phone: '+91 (080) 4192-8833',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bio: 'Internationally exhibited visual artist teaching classical composition, anatomy drawing, ceramic pottery, and modern portfolio curation for top art colleges worldwide.',
    subjectsTaught: ['Fine Arts, Sculpture & Art History', 'Ceramics & 3D Form Studio'],
    officeHours: 'Wednesday & Thursday: 03:15 PM – 04:45 PM (Atrium Studio 4)',
    awards: [
      'Florence Biennale Emerging Artist Nominee',
      'National Arts Educator Fellowship',
    ],
  },
  {
    id: 't-miller',
    name: 'Coach David Miller',
    role: 'Director of Physical Education & Athletics',
    department: 'Physical Education & Athletics',
    qualifications: 'M.P.Ed. Sports Sciences, Former National 400m Sprinter & World Athletics Level 3 Coach',
    experienceYears: 19,
    email: 'david.miller@oakridge-academy.edu',
    phone: '+91 (080) 4192-8838',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Oversees 14 competitive school varsity teams, athletic conditioning, injury prevention clinics, and promotes sportsmanship, teamwork, and mental grit in every child.',
    subjectsTaught: ['Physical Education & Sports Sciences', 'Track & Field Varsity Squad'],
    officeHours: 'Monday to Friday: 06:45 AM – 08:00 AM & 04:00 PM – 05:00 PM (Athletics Pavilion)',
    awards: [
      'State Dronacharya Athletics Coaching Excellence Award',
      'Coached 4 Athletes to National Junior Games Podiums',
    ],
  },
];

export const SCHOOL_NOTICES: SchoolNotice[] = [
  {
    id: 'n-1',
    date: 'September 18, 2026',
    title: 'Admissions Open for Academic Year 2027–2028 (Pre-K to Grade 11)',
    category: 'Admissions',
    priority: 'Urgent',
    author: 'Office of Registrar & Admissions',
    summary:
      'Online applications are now formally open for all grades. Early assessment phase interviews will commence from October 15, 2026. Limited seats in STEM & Medical streams.',
    fullText:
      'We are pleased to invite prospective families to apply for the 2027-2028 academic year across all grade levels (Montessori through Grade 11). Interested candidates must submit the online portal form along with academic transcripts and birth verification documents. Sibling priorities and merit scholarship evaluations will be conducted during the Phase-1 window.',
    downloadFilename: 'Oakridge_Admissions_Prospectus_2027-28.pdf',
  },
  {
    id: 'n-2',
    date: 'September 14, 2026',
    title: 'Installation of Next-Gen Ergonomic Dual Benches in Grades 6–8 Wings',
    category: 'Academic',
    priority: 'Normal',
    author: 'Campus Facilities & Infrastructure Board',
    summary:
      'Phase 2 of our posture health initiative is complete. All Middle School classrooms have been upgraded with lumbar-aligned dual benches and acoustic wall panels.',
    fullText:
      'In line with our commitment to student orthopedic health and active classroom engagement, all 18 Middle School classrooms have now been fitted with customized German dual desks featuring 12° angled writing planes, pneumatic seat adjustments, and zero-glare birch tops.',
    downloadFilename: 'Ergonomic_Furniture_Specification_Sheet.pdf',
  },
  {
    id: 'n-3',
    date: 'September 10, 2026',
    title: 'Annual Inter-School STEM & Robotics Hackathon 2026 Announced',
    category: 'Academic',
    priority: 'High',
    author: 'Ada Lovelace STEM Center',
    summary:
      'Oakridge Academy will host 40 premier schools for the 48-hour "RoboVenture 2026" hackathon focusing on autonomous solar vehicles and AI disaster relief drones.',
    fullText:
      'Students from Grades 8 through 12 are invited to register in teams of 4. Hardware testing kits, 3D printing filaments, and microcontroller development boards will be provided in the STEM Innovation Hub. Cash awards worth INR 2,50,000 to be won.',
    downloadFilename: 'RoboVenture_2026_Rulebook.pdf',
  },
  {
    id: 'n-4',
    date: 'September 05, 2026',
    title: 'Term-1 Midterm Assessment Schedule & Parent-Teacher Conclave',
    category: 'Examinations',
    priority: 'High',
    author: 'Dean of Academics & Examination Cell',
    summary:
      'Examinations for Grades 9–12 will take place from October 05 to October 16, 2026. Comprehensive report cards will be released at the Conclave on October 24.',
    fullText:
      'Detailed subject-wise date sheets and syllabus boundaries have been posted on the student dashboard. Preparatory leave will commence 2 days prior. Parent consultations can be pre-booked online through the teacher portal directory.',
    downloadFilename: 'Midterm_Exam_Datesheet_Oct2026.pdf',
  },
];

export const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: 'ev-1',
    date: 'October 03, 2026',
    time: '09:00 AM – 02:00 PM',
    title: 'Oakridge Open House & Guided Campus Tour',
    location: 'Main Academic Quad & Central Auditorium',
    category: 'Community',
    targetAudience: 'Prospective Parents & Students',
    description:
      'Experience our 25-acre campus in action. Meet faculty heads, inspect our ergonomic smart classrooms and science labs, and attend the Principal’s admissions briefing.',
  },
  {
    id: 'ev-2',
    date: 'October 17, 2026',
    time: '10:00 AM – 04:00 PM',
    title: 'National Science Discovery & Innovation Expo',
    location: 'STEM Innovation Hub & Quad Courtyard',
    category: 'Academic',
    targetAudience: 'All Scholars, Parents & Visiting Scientists',
    description:
      'Over 120 student research projects on display, including clean hydrogen fuel cells, smart agricultural drones, and biomimetic robotics.',
  },
  {
    id: 'ev-3',
    date: 'November 07, 2026',
    time: '08:00 AM – 05:00 PM',
    title: '32nd Annual Inter-House Athletics & Aquatic Meet',
    location: 'Olympia Athletic Arena & Olympic Swimming Pool',
    category: 'Sports',
    targetAudience: 'Entire School Community',
    description:
      'Four historic houses (Agni, Prithvi, Vayu, Trishul) clash in track, field, relay sprints, and aquatic diving championships with live band performances.',
  },
  {
    id: 'ev-4',
    date: 'November 21, 2026',
    time: '06:00 PM – 09:30 PM',
    title: 'Shakespeare Under the Stars: Symphony Theatre Night',
    location: 'Open Air Greek Amphitheatre',
    category: 'Arts',
    targetAudience: 'Scholars, Parents & Alumni',
    description:
      'A breathtaking dramatic rendition of "The Tempest" staged by the Senior Drama Society accompanied by the 45-piece School Philharmonic Orchestra.',
  },
];

export const UPCOMING_EVENTS = SCHOOL_EVENTS;

export const FEE_STRUCTURE = [
  {
    id: 'early-years',
    gradeTier: 'Early Years (Pre-K & KG)',
    annualTuition: 165000,
    labAndDigitalFee: 25000,
    annualDevelopmentFee: 20000,
    oneTimeAdmissionFee: 45000,
  },
  {
    id: 'primary-1-5',
    gradeTier: 'Primary (Grades 1 to 5)',
    annualTuition: 195000,
    labAndDigitalFee: 35000,
    annualDevelopmentFee: 25000,
    oneTimeAdmissionFee: 50000,
  },
  {
    id: 'middle-6-8',
    gradeTier: 'Middle School (Grades 6 to 8)',
    annualTuition: 225000,
    labAndDigitalFee: 42000,
    annualDevelopmentFee: 30000,
    oneTimeAdmissionFee: 55000,
  },
  {
    id: 'secondary-9-10',
    gradeTier: 'Secondary (Grades 9 & 10)',
    annualTuition: 255000,
    labAndDigitalFee: 48000,
    annualDevelopmentFee: 35000,
    oneTimeAdmissionFee: 60000,
  },
  {
    id: 'grade-11-12',
    gradeTier: 'Senior Secondary (Grades 11 & 12)',
    annualTuition: 285000,
    labAndDigitalFee: 55000,
    annualDevelopmentFee: 40000,
    oneTimeAdmissionFee: 65000,
  },
];

export const ADMISSION_FAQ = [
  {
    question: 'What are the age criteria for admission to Pre-K and Grade 1?',
    answer:
      'For Early Years Montessori (Pre-K), the child must have completed 3 years by June 1st of the academic year. For Grade 1, the applicant must have completed 6 years of age.',
  },
  {
    question: 'How do your classroom benches and furniture support student posture?',
    answer:
      'Every classroom is equipped with certified ergonomic dual or modular benches featuring a 12° writing inclination, curved lumbar backrests, non-slip foot supports, and rounded bullnose safety corners. They are designed to prevent cervical strain, enhance oxygen flow, and support long periods of active cognitive focus.',
  },
  {
    question: 'What streams are available in Senior Secondary (Grades 11 & 12)?',
    answer:
      'We offer 4 distinguished streams: 1) STEM Engineering & Computer Science (PCM), 2) Life Sciences & Medical (PCB), 3) Commerce, Finance & Applied Economics, and 4) Humanities, Public Policy & International Relations. Students can also choose flexible 5th/6th electives including AI, Biotechnology, and Legal Studies.',
  },
  {
    question: 'What is the teacher-to-student ratio?',
    answer:
      'Our overall campus student-to-teacher ratio is maintained at 11:1. Class sections are strictly capped at 24 scholars per classroom in primary/middle and 26 in senior secondary, ensuring individual attention and customized mentoring.',
  },
  {
    question: 'Do you provide school transport and hostel facilities?',
    answer:
      'Yes, we operate a fleet of 42 air-conditioned GPS-tracked buses with female security attendants, speed governors, and live parent tracking app access across all major city routes. We also provide twin-sharing residential boarding lodges with 24/7 infirmary and academic prep tutors for scholars from Grade 6 upwards.',
  },
  {
    question: 'Are there merit scholarships or sibling concessions available?',
    answer:
      'Yes! We offer Merit Scholarships (up to 40% tuition waiver) for students achieving 92%+ or exceptional national sports/arts achievements. A 10% sibling discount applies automatically to the younger child enrolled concurrently.',
  },
];
