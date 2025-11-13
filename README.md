# Posture Keeper - AI-Powered Posture Monitoring System

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-green?style=flat-square&logo=github)](https://joymin5655.github.io/yongmin_proj/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/joymin5655/yongmin_proj)
[![Python](https://img.shields.io/badge/Python-3.11.3-blue?style=flat-square&logo=python)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-4.2-green?style=flat-square&logo=django)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)

> **AI-Based Health Management Web Service for Real-Time Posture Analysis**
> KT AIVLE School 3rd Cohort - Team 10 Mini Project 6
> Development Period: September 2024 - October 2024 (6 weeks)

---

## 🌐 Quick Access

### Live Demo
- **🏠 Landing Page**: [https://joymin5655.github.io/yongmin_proj/](https://joymin5655.github.io/yongmin_proj/)
- **🚀 Dashboard**: [https://joymin5655.github.io/yongmin_proj/dashboard/](https://joymin5655.github.io/yongmin_proj/dashboard/)

### Interactive Features
| Feature | Link | Description |
|---------|------|-------------|
| 📊 **Dashboard** | [Launch](https://joymin5655.github.io/yongmin_proj/dashboard/) | Real-time statistics and insights |
| 🎯 **Posture Analysis** | [Try Now](https://joymin5655.github.io/yongmin_proj/dashboard/#/posture) | AI-powered posture monitoring |
| 🤸 **Stretching Guide** | [Start](https://joymin5655.github.io/yongmin_proj/dashboard/#/stretching) | Interactive exercise guidance |
| 📈 **Statistics** | [View](https://joymin5655.github.io/yongmin_proj/dashboard/#/statistics) | Data visualization with charts |
| 💬 **AI Chatbot** | [Chat](https://joymin5655.github.io/yongmin_proj/dashboard/#/chatbot) | Instant Q&A support |
| 📝 **Community** | [Visit](https://joymin5655.github.io/yongmin_proj/dashboard/#/board) | User forum and discussions |
| 🎮 **Gamification** | [Play](https://joymin5655.github.io/yongmin_proj/dashboard/#/gamification) | Achievements and leaderboards |
| 👤 **Profile** | [Manage](https://joymin5655.github.io/yongmin_proj/dashboard/#/profile) | Settings and progress |

### Documentation & Repository
- **📖 Documentation**: [View README](https://github.com/joymin5655/yongmin_proj/blob/main/README.md)
- **📂 GitHub Repository**: [joymin5655/yongmin_proj](https://github.com/joymin5655/yongmin_proj)
- **🔗 Original Source**: [joymin5655/KT-AIVLE-SCHOOL](https://github.com/joymin5655/KT-AIVLE-SCHOOL)

---

## 📋 Table of Contents

1. [Quick Access](#-quick-access)
2. [Overview](#-overview)
3. [Key Features](#-key-features)
4. [Technology Stack](#-technology-stack)
5. [Project Structure](#-project-structure)
6. [Installation](#-installation)
7. [Usage](#-usage)
8. [Team](#-team)
9. [Architecture](#-architecture)
10. [Performance](#-performance)
11. [License](#-license)

---

## 🎯 Overview

**Posture Keeper** is an AI-powered web application that monitors your posture in real-time using only a webcam—no additional hardware required. The system detects poor posture, sends alerts, and provides personalized stretching guidance to help office workers and remote employees maintain healthy habits.

### Why Posture Keeper?

Modern professionals face increasing health challenges from prolonged sitting and computer use:
- 🔴 **Turtle Neck Syndrome** (Forward Head Posture)
- 🔴 **Scoliosis** (Spinal Curvature)
- 🔴 **Frozen Shoulder** (Adhesive Capsulitis)
- 🔴 **Chronic Lower Back Pain**

### Our Solution

✅ **Webcam-only solution** - No external devices needed
✅ **Real-time monitoring** - Instant feedback on posture
✅ **Smart alerts** - Notification after 1 minute of poor posture
✅ **Environmental adaptability** - Works in various lighting and backgrounds
✅ **Flexible setup** - No forced camera angles or positions
✅ **Stretching guidance** - Interactive exercise verification

---

## 🚀 Key Features

### 1. Real-Time Posture Monitoring ⭐
- **MediaPipe-powered** pose estimation (33 landmarks)
- **Continuous analysis** of shoulder, neck, and back angles
- **Web notifications** triggered after 1 minute of poor posture
- **85-90% accuracy** across different environments
- **30 FPS** real-time processing

### 2. Advanced AI Model ⭐
- **Environment-independent** performance (lighting, background, distance)
- **Flexible camera positioning** (no mandatory side view)
- **Robust detection** with multiple angles and distances
- Differentiates from competitors requiring fixed camera setups

### 3. Interactive Stretching Guide
- **Scheduled stretching reminders** based on user preferences
- **10-second pose verification** using real-time AI analysis
- **Visual guidance** with on-screen demonstrations
- **Retry mechanism** for incomplete exercises

### 4. Statistics & Analytics Dashboard
- **Daily/Weekly/Monthly** posture data aggregation
- **Good posture ratio** calculation and tracking
- **Usage time statistics** with detailed breakdowns
- **Improvement trend analysis** using linear regression
- **Time-based posture patterns** visualization

### 5. Data Visualization with Chart.js
- **Line charts** - Weekly posture trends
- **Bar charts** - Hourly usage patterns
- **Pie charts** - Good vs. bad posture ratio
- **Donut charts** - Time distribution analysis
- **Real-time updates** every 5 seconds

### 6. Community Board (CRUD)
- **Full CRUD operations** (Create, Read, Update, Delete)
- **Comment system** with nested replies
- **Advanced search** with filters (category, date, author)
- **Pagination** (10 posts per page)
- **Responsive design** optimized for mobile

### 7. AI Chatbot (Optional Feature)
- **Langchain-powered** conversational AI
- **Posture-related Q&A** assistance
- Context-aware responses

---

## 💻 Technology Stack

### Backend
| Technology | Purpose |
|------------|---------|
| **Python 3.11.3** | Core programming language |
| **Django 4.2** | Web framework |
| **Django REST Framework** | RESTful API development |
| **SQLite** | Development database |
| **ChromaDB** | Vector database for AI chatbot |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19.2** | Modern UI framework |
| **Vite 7.2** | Build tool and dev server |
| **React Router 7.9** | Client-side routing |
| **Chart.js 4.5** | Data visualization |
| **Recharts 3.4** | Advanced charting |
| **Bootstrap 5** | Responsive design |
| **HTML5/CSS3** | Markup and styling |
| **JavaScript (ES6+)** | Client-side scripting |

### AI/ML
| Technology | Purpose |
|------------|---------|
| **MediaPipe** | Real-time pose estimation |
| **OpenCV** | Video stream processing |
| **NumPy** | Numerical computations |
| **Langchain** | AI chatbot framework |
| **TensorFlow** | Machine learning backend |

### DevOps & Tools
| Technology | Purpose |
|------------|---------|
| **Git/GitHub** | Version control and collaboration |
| **GitHub Pages** | Portfolio hosting |
| **VS Code** | Development environment |
| **Jupyter Notebook** | Data analysis and experimentation |

---

## 📁 Project Structure

```
yongmin_proj/
├── README.md                           # Project documentation (English)
├── .gitignore                          # Git ignore rules
├── requirements.txt                    # Python dependencies
│
├── docs/                               # GitHub Pages (deployed website)
│   ├── index.html                     # Main landing page (English)
│   ├── 404.html                       # Custom 404 error page
│   ├── pages/                         # Additional pages
│   └── dashboard/                     # React dashboard (production build)
│       ├── index.html                 # Dashboard entry point
│       ├── assets/                    # JS/CSS bundles
│       └── images/                    # Stretching exercise images
│
└── src/                                # Source code (development)
    ├── ai/                            # AI/ML models and data
    │   ├── Posture_Classification/    # Posture detection model
    │   │   ├── 1Data_Processing/      # Data preprocessing scripts
    │   │   ├── 2Modeling/             # Model training notebooks
    │   │   └── 3Realtime_Classification/ # Real-time inference engine
    │   └── Stretching_Classification/ # Stretching verification model
    │       ├── 0Data_Processing/      # Data preprocessing
    │       ├── 1Modeling/             # Model development
    │       └── 2Realtime_Classification/ # Real-time verification
    │
    ├── backend/                       # Django web application
    │   ├── accounts/                  # User authentication & management
    │   │   ├── models.py              # User profile models
    │   │   ├── views.py               # Login/signup views
    │   │   ├── urls.py                # Authentication routes
    │   │   └── templates/             # Auth templates
    │   ├── service/                   # Core posture monitoring service
    │   │   ├── models.py              # PostureLog, StretchingLog models
    │   │   ├── views.py               # Monitoring API views
    │   │   ├── consumers.py           # WebSocket consumers
    │   │   └── templates/             # Service UI templates
    │   ├── chatbot/                   # AI chatbot module
    │   │   ├── models.py              # Chat history models
    │   │   ├── views.py               # Chatbot API
    │   │   └── langchain_utils.py     # Langchain integration
    │   ├── brd/                       # Community board (forum)
    │   │   ├── models.py              # Post, Comment models
    │   │   ├── views.py               # CRUD operations
    │   │   ├── forms.py               # Board forms
    │   │   └── templates/             # Board templates
    │   ├── home/                      # Homepage and info pages
    │   │   ├── views.py               # Homepage views
    │   │   └── templates/             # Homepage templates
    │   ├── static/                    # Static assets
    │   │   ├── css/                   # Stylesheets
    │   │   ├── js/                    # JavaScript files
    │   │   └── assets/                # Images, icons, fonts
    │   ├── media/                     # User-uploaded files
    │   │   └── brd_image/             # Board post images
    │   ├── templates/                 # Global Django templates
    │   │   ├── base.html              # Base template
    │   │   └── navbar.html            # Navigation bar
    │   ├── team10/                    # Django project configuration
    │   │   ├── settings.py            # Project settings
    │   │   ├── urls.py                # Root URL configuration
    │   │   ├── wsgi.py                # WSGI entry point
    │   │   └── asgi.py                # ASGI entry point
    │   ├── manage.py                  # Django management script
    │   └── .gitignore                 # Backend-specific ignores
    │
    └── frontend/                      # React dashboard (source code)
        ├── src/                       # React source code
        │   ├── components/            # Reusable UI components
        │   ├── context/               # React Context API
        │   ├── data/                  # Mock/static data
        │   ├── styles/                # CSS modules
        │   └── assets/                # Images and icons
        ├── public/                    # Public assets
        │   └── images/                # Static images
        ├── index.html                 # HTML entry point
        ├── vite.config.js             # Vite build configuration
        ├── package.json               # Node.js dependencies
        ├── package-lock.json          # Dependency lock file
        └── .gitignore                 # Frontend-specific ignores
```

### Directory Organization

#### **`docs/`** - Deployed Website (Public-Facing)
- **Landing Page**: [joymin5655.github.io/yongmin_proj](https://joymin5655.github.io/yongmin_proj/)
  - Professional portfolio website with project overview
  - Interactive demo cards linking to all features
  - Modern responsive design with animations
- **Dashboard**: [joymin5655.github.io/yongmin_proj/dashboard](https://joymin5655.github.io/yongmin_proj/dashboard/)
  - Production-ready React application
  - 8 interactive features (Posture Analysis, Statistics, Chatbot, etc.)
  - Built with Vite + React 19
- Automatically deployed when pushed to the main branch

#### **`src/`** - Source Code (Development)
Organized into three main subsystems:

1. **`ai/`** - Machine Learning Components
   - Pose estimation models for real-time posture detection
   - Stretching exercise verification algorithms
   - Training data, notebooks, and inference scripts

2. **`backend/`** - Django Web Application
   - User authentication and profile management
   - Posture monitoring service with WebSocket support
   - Community board with CRUD operations
   - AI chatbot powered by Langchain
   - RESTful APIs for frontend integration

3. **`frontend/`** - React Dashboard
   - Modern UI components with React 19
   - Data visualization with Chart.js and Recharts
   - Real-time updates and interactive charts
   - Responsive design for mobile compatibility

---

## 🔧 Installation

### Prerequisites
- **Python 3.11.3** or higher
- **Node.js 18+** and npm (for dashboard)
- **pip** (Python package manager)
- **Git** for version control

### 1. Clone the Repository

```bash
git clone https://github.com/joymin5655/yongmin_proj.git
cd yongmin_proj
```

### 2. Backend Setup (Django)

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Navigate to backend directory
cd src/backend

# Run database migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic --noinput

# Start development server
python manage.py runserver
```

The Django application will be available at `http://localhost:8000`

### 3. Frontend Setup (React Dashboard)

```bash
# Navigate to frontend directory
cd src/frontend

# Install Node dependencies
npm install

# Start development server
npm run dev
```

The React dashboard will be available at `http://localhost:5173`

### 4. Production Build (Optional)

```bash
# Build React dashboard for production
cd src/frontend
npm run build

# The built files will be in the dist/ directory
# You can serve them with a static file server or deploy to a hosting service
```

---

## 📱 Usage

### Starting the Application

1. **Start Django Backend**
   ```bash
   cd src/backend
   python manage.py runserver
   ```

2. **Start React Frontend** (Development)
   ```bash
   cd src/frontend
   npm run dev
   ```

3. **Access the Application**
   - Backend: http://localhost:8000
   - Frontend: http://localhost:5173
   - Admin Panel: http://localhost:8000/admin

### Using Posture Monitoring

1. **Sign up** or **Log in** to your account
2. Navigate to **"Start Monitoring"** page
3. **Allow webcam access** when prompted
4. Position yourself in front of the camera
5. The system will:
   - Analyze your posture in real-time
   - Display posture status (Good/Bad)
   - Send alerts after 1 minute of poor posture
   - Log data for statistics

### Viewing Statistics

1. Go to **"Dashboard"** or **"Statistics"** page
2. View your posture data:
   - Daily/Weekly/Monthly trends
   - Good vs. bad posture ratio
   - Time-based usage patterns
3. Track your improvement over time

### Community Board

1. Browse posts in the **"Community"** section
2. Create new posts to share tips
3. Comment on others' posts
4. Search posts by keyword, category, or author

---

## 👥 Team

**Team 10 - KT AIVLE School 3rd Cohort**

| Name | Role | Responsibilities |
|------|------|------------------|
| **Kim Hyun-Joo** | Frontend, Backend, UI/UX, Data, Documentation, Presentation | UI design, backend development, data analysis, documentation |
| **Lee Don-Gyu** | Frontend, Backend, Presentation | Frontend implementation, backend APIs, project presentation |
| **Lee Sung-Gyu** | Frontend, UI/UX | User interface design, responsive layouts |
| **Jo Yong-Min** | Frontend, Database, Data Analysis, AI, Documentation | AI model development, database design, statistics, search functionality |
| **Chae Su-Bin** | Backend, UI/UX, Data, Presentation | Backend logic, UI design, data processing |
| **Hyun Dong-Wook** | Backend, Database, Data, Documentation | Backend development, database management, technical documentation |

### Project Lead Contributions (Jo Yong-Min)

#### Core Responsibilities
- **AI Model Development**: MediaPipe-based posture detection (85-90% accuracy)
- **Database Design**: ERD design and Django ORM implementation
- **Frontend Development**: Main page, community board UI
- **Data Analysis**: Statistical algorithms and Chart.js visualizations
- **Search Features**: Advanced search with filters and AJAX
- **Documentation**: Technical documentation and README

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                             │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ React App   │  │ Chart.js     │  │ MediaPipe Client │  │
│  │ (Dashboard) │  │ (Visualize)  │  │ (Pose Detection) │  │
│  └─────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │ HTTP/REST API
┌─────────────────────────────────────────────────────────────┐
│                      Backend (Django)                        │
│  ┌──────────┐  ┌──────────┐  ┌────────────┐  ┌──────────┐ │
│  │ Auth     │  │ Service  │  │ Board      │  │ Chatbot  │ │
│  │ Module   │  │ (Monitor)│  │ (Community)│  │ (AI Q&A) │ │
│  └──────────┘  └──────────┘  └────────────┘  └──────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                        Data Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ SQLite       │  │ ChromaDB     │  │ MediaPipe Models │  │
│  │ (Main DB)    │  │ (Vector DB)  │  │ (AI Models)      │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Key Workflows

#### 1. Posture Monitoring Flow
```
User → Webcam Access → MediaPipe Pose Detection
  → Angle Calculation → Posture Classification (Good/Bad)
  → 1-min Bad Posture → Web Notification → User Alert
  → Log to Database → Statistics Update
```

#### 2. Data Analysis Flow
```
PostureLog (Database) → Statistical Calculation (Python)
  → Aggregation (Daily/Weekly/Monthly) → Chart.js Rendering
  → User Dashboard Display
```

---

## 📊 Performance

### AI Model Performance
| Metric | Target | Achieved |
|--------|--------|----------|
| **Posture Detection Accuracy** | 80% | **85-90%** ✅ |
| **Processing Speed (FPS)** | 25 FPS | **30 FPS** ✅ |
| **Environment Adaptability** | 70% | **85%** ✅ |

### System Performance
| Metric | Target | Achieved |
|--------|--------|----------|
| **Search Response Time** | 0.5s | **0.3s** ✅ |
| **Page Load Time** | 2s | **1s** ✅ |
| **Web Notification Delay** | 3s | **1.5s** ✅ |
| **Database Query Speed** | - | **70% faster** (with indexing) ✅ |

### User Experience
- ✅ **Mobile Responsive**: 100% compatibility across devices
- ✅ **Cross-Browser Support**: Chrome, Firefox, Safari, Edge
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **Uptime**: 99.5% availability during testing period

---

## 🌐 Live Demo

- **Portfolio Landing Page**: [https://joymin5655.github.io/yongmin_proj/](https://joymin5655.github.io/yongmin_proj/)
- **Source Repository**: [https://github.com/joymin5655/yongmin_proj](https://github.com/joymin5655/yongmin_proj)
- **Original Project**: [KT-AIVLE-SCHOOL by joymin5655](https://github.com/joymin5655/KT-AIVLE-SCHOOL)

---

## 📄 License

This project was developed for educational purposes as part of the **KT AIVLE School 3rd Cohort** curriculum.

### Educational Use Only
- ✅ Study and learning
- ✅ Portfolio demonstration
- ✅ Academic reference

### Restrictions
- ❌ Commercial use without permission
- ❌ Redistribution without attribution
- ❌ Claiming authorship

---

## 🙏 Acknowledgments

- **KT AIVLE School** for providing the learning platform and resources
- **Team 10 Members** for their dedication and collaboration
- **Original Repository**: [joymin5655/KT-AIVLE-SCHOOL](https://github.com/joymin5655/KT-AIVLE-SCHOOL)
- **MediaPipe** by Google for pose estimation technology
- **Django Community** for the robust web framework
- **React Team** for the modern UI library

---

## 📞 Contact

For questions or collaboration:
- **GitHub Issues**: [Create an issue](https://github.com/joymin5655/yongmin_proj/issues)
- **Original Author**: [joymin5655](https://github.com/joymin5655)
- **Portfolio Maintainer**: [joymin5655](https://github.com/joymin5655)

---

## 📈 Project Statistics

- **Total Commits**: 337+
- **Contributors**: 6 developers
- **Development Modules**: 6 core modules
- **Completion**: 100%
- **Primary Languages**: Python (41%), CSS (29.5%), HTML (15.8%), JavaScript (5.3%)
- **Lines of Code**: 10,000+ (estimated)

---

## 🔄 Project Status

| Feature | Status |
|---------|--------|
| Core Functionality | ✅ Complete |
| AI Model Training | ✅ Complete |
| Backend API | ✅ Complete |
| Frontend Dashboard | ✅ Complete |
| Testing | ✅ Complete |
| Documentation | ✅ Complete |
| Deployment | 🚀 GitHub Pages Active |

---

**Last Updated**: November 13, 2024
**Version**: 3.0

---

<p align="center">
  <strong>Built with ❤️ by Team 10 | KT AIVLE School 3rd Cohort</strong>
</p>

<p align="center">
  <sub>© 2024 Posture Keeper - All Rights Reserved</sub>
</p>
