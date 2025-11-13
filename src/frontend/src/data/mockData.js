// Mock data for Posture Keeper Dashboard

// User Profile Data
export const mockUser = {
  id: 1,
  username: 'demo_user',
  email: 'demo@posturekeep.com',
  nickname: 'Posture King',
  phone: '010-1234-5678',
  createdAt: '2024-01-15',
  lastLogin: '2024-11-13',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo_user'
};

// Daily Statistics
export const mockDailyStats = {
  totalDetections: 2847,
  correctPosture: 1705,
  incorrectPosture: 1142,
  correctPercentage: 59.9,
  incorrectPercentage: 40.1,
  postureBreakdown: {
    good: 1705,
    bad1: 342,
    bad2: 456,
    bad3: 234,
    bad4: 110,
    absent: -1
  },
  timeInSeat: '8h 23m',
  timeAbsent: '1h 37m',
  usageHours: 10
};

// Weekly Statistics
export const mockWeeklyStats = {
  dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  correctRatio: [62, 58, 65, 59, 61, 72, 68],
  badRatio: [38, 42, 35, 41, 39, 28, 32],
  usageHours: [8, 9, 8.5, 9.2, 8.8, 7, 6.5],
  weekAverage: 62.1
};

// Posture Analysis Results
export const mockPostureResults = [
  { timestamp: '10:23:45', type: 'good', confidence: 0.94, correction: null },
  { timestamp: '10:24:12', type: 'good', confidence: 0.92, correction: null },
  { timestamp: '10:24:38', type: 'bad_type2', confidence: 0.87, correction: 'Straighten your shoulders' },
  { timestamp: '10:25:01', type: 'good', confidence: 0.91, correction: null },
  { timestamp: '10:25:42', type: 'bad_type1', confidence: 0.89, correction: 'Keep your neck straight' },
];

// Gamification Data
export const mockGamification = {
  level: 12,
  points: 4523,
  nextLevelPoints: 5000,
  pointsToNextLevel: 477,
  achievements: [
    { id: 1, name: 'Getting Started', icon: '🎯', unlocked: true, date: '2024-01-15' },
    { id: 2, name: 'Week Warrior', icon: '🔥', unlocked: true, date: '2024-01-22' },
    { id: 3, name: 'Month Master', icon: '⭐', unlocked: true, date: '2024-02-15' },
    { id: 4, name: 'Perfect Day', icon: '💯', unlocked: false, date: null },
    { id: 5, name: 'Posture Master', icon: '👑', unlocked: false, date: null },
  ],
  dailyStreak: 23,
  bestStreak: 45,
  leaderboard: [
    { rank: 1, username: 'Posture King', points: 4523, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user1' },
    { rank: 2, username: 'Posture Queen', points: 4120, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user2' },
    { rank: 3, username: 'Spine Guardian', points: 3890, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user3' },
    { rank: 4, username: 'Neck Protector', points: 3450, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user4' },
    { rank: 5, username: 'Posture Warrior', points: 3120, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user5' },
  ]
};

// Chatbot Conversation
export const mockChatbotMessages = [
  {
    id: 1,
    type: 'bot',
    text: 'Hello! I\'m your Posture Assistant. Do you have any questions about posture correction or health?',
    timestamp: '2024-11-13 09:00'
  },
  {
    id: 2,
    type: 'user',
    text: 'My posture keeps slouching. What should I do?',
    timestamp: '2024-11-13 09:01'
  },
  {
    id: 3,
    type: 'bot',
    text: 'Great question! Slouching can strain your neck and spine. Here are some tips:\n\n1. Position your screen at eye level\n2. Sit deep in your chair\n3. Stretch every 30 minutes\n4. Keep your shoulders back and chest open',
    timestamp: '2024-11-13 09:02'
  },
  {
    id: 4,
    type: 'user',
    text: 'Thank you!',
    timestamp: '2024-11-13 09:03'
  }
];

// Board Posts
export const mockBoardPosts = [
  {
    id: 1,
    title: 'My Posture Correction Journey',
    author: 'HealthySpine',
    content: 'Started paying attention to my posture 2 months ago, and I feel so much lighter!',
    createdAt: '2024-11-13',
    comments: 5,
    views: 234,
    image: null
  },
  {
    id: 2,
    title: 'Recommended Stretching Routine',
    author: 'FlexibleBody',
    content: 'Sharing a simple stretching routine for office workers.',
    createdAt: '2024-11-12',
    comments: 12,
    views: 567,
    image: null
  },
  {
    id: 3,
    title: 'Tips for Using Posture Keeper',
    author: 'TechLover',
    content: 'Compiled effective ways to use various features of the app.',
    createdAt: '2024-11-11',
    comments: 8,
    views: 345,
    image: null
  },
  {
    id: 4,
    title: 'Better posture = Better focus',
    author: 'FocusMaster',
    content: 'My work efficiency increased by 30% through posture correction.',
    createdAt: '2024-11-10',
    comments: 15,
    views: 892,
    image: null
  },
  {
    id: 5,
    title: 'Neck pain is gone!',
    author: 'HealthManiac',
    content: 'Used to have severe neck pain, but consistent posture correction helped.',
    createdAt: '2024-11-09',
    comments: 22,
    views: 1203,
    image: null
  }
];

// Stretching Exercises
export const mockExercises = [
  {
    id: 1,
    name: 'Neck Stretch',
    description: 'Stretching to relieve neck tension',
    duration: 30,
    difficulty: 'easy',
    steps: [
      'Sit with proper posture',
      'Slowly tilt your right ear toward your right shoulder',
      'Hold for 15 seconds',
      'Repeat on the other side'
    ]
  },
  {
    id: 2,
    name: 'Shoulder Stretch',
    description: 'Stretching to relieve shoulder tension',
    duration: 45,
    difficulty: 'medium',
    steps: [
      'Sit with proper posture',
      'Bring your left arm across your chest to the right',
      'Gently pull your left elbow with your right hand',
      'Hold for 20 seconds and repeat on the other side'
    ]
  },
  {
    id: 3,
    name: 'Back Stretch',
    description: 'Stretching to relieve back tension',
    duration: 60,
    difficulty: 'medium',
    steps: [
      'Sit with proper posture',
      'Clasp your hands behind your head',
      'Slowly lean your upper body backward',
      'Hold for 20 seconds'
    ]
  }
];

// AI Analysis Feedback
export const mockAIFeedback = {
  overall: 'Good Progress!',
  score: 7.8,
  feedback: [
    'Your posture correction is going well today.',
    'Neck position has improved. Keep it up!',
    'Try to move more often. Stretch every 30 minutes.',
  ],
  recommendations: [
    'Level your shoulders',
    'Regular stretching',
    'Try posture correction games'
  ]
};

// Notifications
export const mockNotifications = [
  { id: 1, type: 'warning', message: 'Poor posture detected for 30 minutes', timestamp: '10 min ago' },
  { id: 2, type: 'achievement', message: 'Daily goal achieved! +100 points', timestamp: '1 hour ago' },
  { id: 3, type: 'info', message: 'New stretching exercises added', timestamp: '2 hours ago' },
  { id: 4, type: 'success', message: 'Weekly goal achieved! Congratulations', timestamp: '1 day ago' }
];

// Settings
export const mockSettings = {
  notifications: {
    badPosture: true,
    achievements: true,
    newExercises: true,
    dailyReminder: true
  },
  postureSensitivity: 0.7,
  breakInterval: 30,
  language: 'en',
  theme: 'light'
};
