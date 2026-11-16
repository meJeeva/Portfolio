export type ProjectCategory = 'All' | 'Healthcare' | 'ERP & Retail' | 'Productivity';

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  highlights: string[];
  stack: string[];
}

export interface ProjectScreenMock {
  id: string;
  label: string;
  headerTitle: string;
  headerSubtitle: string;
  primaryMetricLabel: string;
  primaryMetricValue: string;
  items: { title: string; meta: string; status: string }[];
  actionLabel: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  period: string;
  role: string;
  summary: string;
  architectureNotes: string[];
  stack: string[];
  platforms: string;
  highlights: string[];
  screens: ProjectScreenMock[];
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export const PROFILE = {
  name: 'Jeeva V',
  title: 'React Native Developer | Mobile Application Developer',
  headline: 'Engineering resilient cross-platform mobile systems.',
  location: 'Salem, Tamil Nadu',
  phone: '+91 9514336230',
  email: 'jeevaofficialjob@gmail.com',
  resumeUrl: '/assets/aistudio/Jeeva_V_Resume_20bd4c15.pdf',
  summary:
    'React Native Developer with 3 years of experience building scalable cross-platform mobile applications for healthcare, ERP, and e-commerce industries. Specialized in real-time teleconsultation via Agora and Twilio, state architecture with Redux and React Hooks, secure Razorpay payments, and end-to-end App Store and Google Play delivery.',
};

export const KEY_METRICS = [
  { value: '3+ Years', label: 'Cross-Platform Mobile Engineering' },
  { value: '3 User Roles', label: 'Multi-App Hospital Management' },
  { value: '3 Video SDKs', label: 'Agora, Twilio & Zoom Real-Time' },
  { value: '2 Stores', label: 'App Store & Google Play Releases' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'smart-rabbitz',
    company: 'Smart Rabbitz',
    location: 'Trivandrum, Kerala',
    role: 'Software Engineer',
    period: 'May 2025 — Present',
    current: true,
    highlights: [
      'Accomplished scalable healthcare service delivery for 3 user roles by developing and maintaining a multi-app hospital management system using React Native and JavaScript.',
      'Delivered stable real-time teleconsultation functionality by integrating Agora SDK, Twilio SDK, and Zoom SDK.',
      'Implemented Firebase Cloud Messaging (FCM), push notifications, and REST API integration for appointment updates and clinical alerts.',
      'Engineered responsive, reusable UI components using Redux, React Hooks, and Context API across Android and iOS.',
      'Collaborated with cross-functional agile teams via Git, GitHub, and Bitbucket; executed debugging, performance optimization, and device testing in Android Studio and Xcode.',
    ],
    stack: ['React Native', 'JavaScript', 'Redux', 'Agora SDK', 'Twilio SDK', 'Zoom SDK', 'Firebase FCM'],
  },
  {
    id: 'rasi-infotech',
    company: 'Rasi Infotech',
    location: 'Salem, Tamil Nadu',
    role: 'React Native Developer',
    period: 'May 2023 — April 2025',
    current: false,
    highlights: [
      'Developed cross-platform mobile applications across healthcare, ERP, and e-commerce domains using React Native and JavaScript.',
      'Integrated Razorpay payment gateway and REST APIs for secure online transaction handling and backend synchronization.',
      'Architected scalable mobile UI components and reusable patterns with Redux, React Hooks, and Context API.',
      'Implemented Firebase services, push notifications, Axios networking, and real-time API workflows.',
      'Supported debugging, QA testing, Google Play Store deployment, and Apple App Store releases via Android Studio and Xcode.',
    ],
    stack: ['React Native', 'JavaScript', 'Redux', 'Razorpay', 'REST API', 'Axios', 'Firebase'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'tanjer',
    index: '01',
    title: 'Tanjer',
    subtitle: 'Doctor Appointment Booking & Teleconsultation Application',
    category: 'Healthcare',
    period: '2025 — Present',
    role: 'Mobile Application Engineer',
    platforms: 'iOS & Android',
    summary:
      'Cross-platform healthcare application enabling patient scheduling, multi-role hospital workflows, and encrypted real-time video consultations between clinicians and patients.',
    architectureNotes: [
      'Dual-provider real-time video bridge supporting Agora SDK and Twilio SDK with graceful reconnect handling.',
      'Event-driven Firebase Cloud Messaging (FCM) pipeline delivering instant appointment reminders and queue updates.',
      'Centralized Redux state slices synchronized with authenticated REST endpoints and React Hooks.',
    ],
    stack: ['React Native', 'Redux', 'Firebase', 'Agora SDK', 'Twilio SDK', 'REST API'],
    highlights: [
      'Cross-platform doctor appointment booking and teleconsultation services',
      'Secure real-time video calling using Agora SDK and Twilio SDK',
      'REST API integration with Firebase Cloud Messaging (FCM) appointment reminders',
      'Responsive reusable UI components built with React Native, Redux, and React Hooks',
    ],
    screens: [
      {
        id: 'tanjer-booking',
        label: 'Slot Booking',
        headerTitle: 'Tanjer Care',
        headerSubtitle: 'Cardiology · Today',
        primaryMetricLabel: 'Next Available Slot',
        primaryMetricValue: '10:30 AM',
        items: [
          { title: 'Dr. Aravind K · MD', meta: 'Video Consult · 15m', status: 'Open' },
          { title: 'Dr. Meera S · MS', meta: 'Clinic Visit · 20m', status: '11:15 AM' },
          { title: 'Lab Follow-Up Sync', meta: 'FCM Alert Enabled', status: 'Synced' },
        ],
        actionLabel: 'Confirm Consultation',
      },
      {
        id: 'tanjer-video',
        label: 'Teleconsultation',
        headerTitle: 'Live Consultation',
        headerSubtitle: 'Agora / Twilio Encrypted Channel',
        primaryMetricLabel: 'Session Audio & Video',
        primaryMetricValue: 'HD Ready',
        items: [
          { title: 'Channel Encryption', meta: 'Token-Verified Session', status: 'Active' },
          { title: 'Vitals & Rx Notes', meta: 'Live REST Sync', status: 'Attached' },
          { title: 'Push Notification', meta: 'Patient Joined Alert', status: 'Delivered' },
        ],
        actionLabel: 'Share Prescription',
      },
    ],
  },
  {
    id: 'zinger',
    index: '02',
    title: 'Zinger',
    subtitle: 'Jewellery ERP & E-Commerce Application',
    category: 'ERP & Retail',
    period: '2023 — 2025',
    role: 'React Native Developer',
    platforms: 'iOS & Android',
    summary:
      'Cross-platform ERP and retail commerce suite tailored for jewellery storefronts and monthly gold saving scheme management with integrated Razorpay checkout.',
    architectureNotes: [
      'Razorpay checkout lifecycle with server-verified order signatures and instant installment ledger updates.',
      'Optimized catalog rendering with lazy loading and memoized list virtualization for high-SKU jewellery inventories.',
      'Unified Redux store managing cart, gold rate snapshots, and customer saving scheme installments.',
    ],
    stack: ['React Native', 'JavaScript', 'Redux', 'REST API', 'Razorpay'],
    highlights: [
      'Cross-platform ERP and e-commerce flows for jewellery retail and saving scheme management',
      'Integrated Razorpay payment gateway for secure online transactions and scheme installments',
      'Optimized REST API integration and list rendering performance for seamless browsing',
      'Responsive mobile interfaces and reusable components across Android and iOS',
    ],
    screens: [
      {
        id: 'zinger-scheme',
        label: 'Saving Scheme',
        headerTitle: 'Zinger Retail ERP',
        headerSubtitle: 'Gold Saving Plan · 11 Months',
        primaryMetricLabel: 'Installment Progress',
        primaryMetricValue: '08 / 11 Paid',
        items: [
          { title: 'Monthly Contribution', meta: '22K Rate Locked', status: '₹5,000' },
          { title: 'Razorpay Checkout', meta: 'UPI / Card / NetBanking', status: 'Verified' },
          { title: 'Accumulated Weight', meta: 'Synced to ERP Ledger', status: '5.42 g' },
        ],
        actionLabel: 'Pay Monthly Installment',
      },
      {
        id: 'zinger-catalog',
        label: 'ERP Catalog',
        headerTitle: 'Inventory & Orders',
        headerSubtitle: '22K Hallmark Collection',
        primaryMetricLabel: 'Active SKU Sync',
        primaryMetricValue: '1,240 Items',
        items: [
          { title: 'Temple Necklace Set', meta: '28.4g · Net Wt Verified', status: 'In Stock' },
          { title: 'Bridal Bangle Pair', meta: '19.1g · Store Branch 02', status: 'Reserved' },
          { title: 'Order Dispatch Sync', meta: 'REST API Webhook', status: 'Ready' },
        ],
        actionLabel: 'Create Retail Invoice',
      },
    ],
  },
  {
    id: 'en-project',
    index: '03',
    title: 'En Project',
    subtitle: 'Project Management & Team Workflow Application',
    category: 'Productivity',
    period: '2023 — 2024',
    role: 'React Native Developer',
    platforms: 'iOS & Android',
    summary:
      'Mobile operations platform built for distributed engineering teams to coordinate task allocation, attendance tracking, bug triage, and client milestone updates.',
    architectureNotes: [
      'Modular component architecture separating task queues, attendance logs, and defect lifecycle states.',
      'Consistent REST API synchronization backed by Redux actions and optimistic UI transitions.',
      'Strict Git & Bitbucket branch workflows ensuring clean multi-developer sprint releases.',
    ],
    stack: ['React Native', 'Redux', 'REST API', 'Git', 'Bitbucket'],
    highlights: [
      'Mobile modules for task allocation, attendance tracking, bug management, and client interaction',
      'Interactive, responsive UI components improving team collaboration and workflow clarity',
      'Agile collaboration using Git and Bitbucket for structured version control and delivery',
      'Reusable component architecture and REST API integration for maintainable scale',
    ],
    screens: [
      {
        id: 'en-tasks',
        label: 'Sprint Tasks',
        headerTitle: 'En Project',
        headerSubtitle: 'Mobile Sprint Board',
        primaryMetricLabel: 'Sprint Allocation',
        primaryMetricValue: '14 Active Tasks',
        items: [
          { title: 'Payment Webhook Triage', meta: 'Assigned · Mobile QA', status: 'In Review' },
          { title: 'Daily Attendance Sync', meta: 'Geo-Verified Check-in', status: 'Logged' },
          { title: 'Client Milestone Sign-off', meta: 'Release v2.4 Build', status: 'Approved' },
        ],
        actionLabel: 'Assign New Task',
      },
      {
        id: 'en-bugs',
        label: 'Bug Triage',
        headerTitle: 'Issue Tracker',
        headerSubtitle: 'iOS & Android QA Queue',
        primaryMetricLabel: 'Resolution Queue',
        primaryMetricValue: '94% Closed',
        items: [
          { title: 'Xcode Build Sign Check', meta: 'Release Pipeline', status: 'Verified' },
          { title: 'Push Payload Parsing', meta: 'Android 14 Fix', status: 'Merged' },
          { title: 'Client Comment Thread', meta: 'REST Sync Active', status: 'Updated' },
        ],
        actionLabel: 'Log QA Report',
      },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'mobile',
    label: 'Mobile & Deployment',
    description: 'Cross-platform mobile architecture, native build tooling, and store submission pipelines.',
    skills: [
      { name: 'React Native', context: '3+ years production iOS & Android apps' },
      { name: 'iOS & Android Engineering', context: 'Platform-adaptive layouts & native bridging' },
      { name: 'FlutterFlow', context: 'Rapid cross-platform UI prototyping' },
      { name: 'Xcode & App Store', context: 'Provisioning, archiving & TestFlight/App Store release' },
      { name: 'Android Studio & Play Store', context: 'APK/AAB signing, profiling & Play Console rollout' },
      { name: 'Redux, Hooks & Context API', context: 'Predictable global & local state orchestration' },
    ],
  },
  {
    id: 'realtime',
    label: 'APIs & Real-Time',
    description: 'Low-latency video communication, push delivery, and structured backend data flows.',
    skills: [
      { name: 'Agora Video SDK', context: 'Multi-party teleconsultation video & audio channels' },
      { name: 'Twilio SDK & Zoom SDK', context: 'Failover real-time healthcare consultation rooms' },
      { name: 'Firebase Cloud Messaging (FCM)', context: 'Targeted appointment & order push notifications' },
      { name: 'REST APIs & Axios', context: 'Authenticated request interceptors & error recovery' },
      { name: 'GraphQL & WebSocket', context: 'Typed queries & bidirectional live state sync' },
      { name: 'WebRTC', context: 'Peer media transport & connection diagnostics' },
    ],
  },
  {
    id: 'performance',
    label: 'Performance & Testing',
    description: 'Profiling, bundle optimization, and automated component verification.',
    skills: [
      { name: 'Mobile Performance Optimization', context: 'Frame-rate stability & memory leak prevention' },
      { name: 'Code Splitting & Lazy Loading', context: 'Faster startup time & lean bundle hydration' },
      { name: 'State Management Refactoring', context: 'Reducing unnecessary re-renders in complex lists' },
      { name: 'Jest', context: 'Unit testing business logic & state reducers' },
      { name: 'React Native Testing Library', context: 'Component interaction & accessibility assertions' },
      { name: 'QA Coordination', context: 'Device matrix verification across Android & iOS' },
    ],
  },
  {
    id: 'web-integrations',
    label: 'Web, Backend & Payments',
    description: 'Full-stack JavaScript foundations and verified third-party transaction gateways.',
    skills: [
      { name: 'Razorpay Payment Gateway', context: 'Secure retail checkout & recurring saving schemes' },
      { name: 'React.js & JavaScript (ES6+)', context: 'Modern component architecture & async patterns' },
      { name: 'HTML5, CSS3 & Bootstrap', context: 'Responsive web interfaces & semantic markup' },
      { name: 'Node.js & Express.js', context: 'REST service integration & API middleware' },
      { name: 'MongoDB & Firebase', context: 'Document persistence & real-time cloud services' },
      { name: 'Git, GitLab, GitHub, Bitbucket & Jira', context: 'Agile/Scrum delivery & CI branch discipline' },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'M.Sc Computer Science',
    institution: 'Government Arts College (Autonomous) — Periyar University',
    period: '2021 — 2023',
    location: 'Salem, Tamil Nadu',
  },
  {
    degree: 'B.Sc Computer Science',
    institution: 'Government Arts College (Autonomous) — Periyar University',
    period: '2018 — 2021',
    location: 'Salem, Tamil Nadu',
  },
];
