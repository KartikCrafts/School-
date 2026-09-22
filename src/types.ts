export interface CampusArea {
  id: string;
  name: string;
  category: 'Academics' | 'Sports' | 'Science & Tech' | 'Library & Culture' | 'Residential & Amenities';
  acreageOrSqft: string;
  capacity: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  mapCoordinates: { x: number; y: number }; // percentage on interactive map
  facilities: string[];
  builtYear: number;
}

export interface ClassroomInfrastructure {
  id: string;
  title: string;
  category: 'Benches & Seating' | 'Smart Interactive Tech' | 'Ergonomics & Lighting' | 'Safety & Hygiene';
  summary: string;
  specs: string[];
  ergonomicsFocus: string;
  imageUrl: string;
  badge: string;
}

export interface StreamOption {
  id: string;
  name: string;
  code: string;
  description: string;
  compulsorySubjects: string[];
  electiveSubjects: string[];
  careerPaths: string[];
  seatsAvailable: number;
}

export interface CourseLevel {
  id: string;
  levelName: string;
  grades: string;
  ageRange: string;
  board: string;
  studentCount: number;
  description: string;
  keyPillars: string[];
  schedule: string;
  streams?: StreamOption[];
}

export interface SubjectItem {
  id: string;
  name: string;
  code: string;
  department: string;
  grades: string[];
  credits: number;
  theoryVsPractical: string;
  weeklyHours: number;
  description: string;
  keyTopics: string[];
  assignedTeachers: string[];
  textbook: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  role: string;
  department: string;
  qualifications: string;
  experienceYears: number;
  email: string;
  phone: string;
  photoUrl: string;
  bio: string;
  subjectsTaught: string[];
  officeHours: string;
  awards: string[];
}

export interface AdmissionApplication {
  id: string;
  submittedAt: string;
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: string;
  gradeApplying: string;
  streamChosen?: string;
  academicYear: string;
  previousSchool: string;
  previousGpaOrPercentage: string;
  parentName: string;
  parentRelationship: string;
  parentEmail: string;
  parentPhone: string;
  residentialAddress: string;
  transportRequired: boolean;
  busZone?: string;
  hostelRequired: boolean;
  scholarshipCategory?: string;
  status: 'Received' | 'Documents Verified' | 'Entrance Assessment Scheduled' | 'Interview Round' | 'Provisional Offer Granted' | 'Fee Paid & Enrolled';
  applicationFeePaid: boolean;
  uploadedDocuments: { name: string; size: string; status: 'Verified' | 'Pending' }[];
  remarks: string;
}

export interface SchoolNotice {
  id: string;
  date: string;
  title: string;
  category: 'Academic' | 'Admissions' | 'Sports' | 'Circular' | 'Examinations';
  priority: 'High' | 'Normal' | 'Urgent';
  author: string;
  summary: string;
  fullText: string;
  downloadFilename?: string;
  pinned?: boolean;
  signatory?: string;
}

export interface SchoolEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  category: 'Academic' | 'Sports' | 'Arts' | 'Community' | 'Celebration';
  targetAudience: string;
  description: string;
}

export interface CampusTourBooking {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  date: string;
  slot: string;
  gradeOfInterest: string;
  attendeesCount: number;
  status: 'Confirmed' | 'Completed';
  bookedAt: string;
}
