# DataTechHub - Learning Management System

A modern, full-stack Learning Management System (LMS) built with Next.js, Sanity CMS, and Clerk authentication. DataTechHub provides a comprehensive platform for online learning with course management, progress tracking, and interactive learning experiences.

## 🚀 Features

### For Students
- **Smart Course Resumption**: Automatically resume courses from the last uncompleted lesson
- **Progress Tracking**: Real-time course completion tracking with visual progress indicators
- **Interactive Learning**: Video lessons with completion tracking and navigation
- **Dashboard Analytics**: Comprehensive stats showing enrolled courses, completed courses, and progress
- **Live Classes**: Scheduled weekend classes with meeting integration
- **Responsive Design**: Optimized for desktop and mobile learning

### For Instructors/Admins
- **Course Management**: Create and manage courses with modules and lessons
- **Student Analytics**: Track student progress and completion rates
- **Content Management**: Rich content editor with video integration
- **User Management**: Comprehensive student and instructor management
- **Live Class Scheduling**: Schedule and manage live learning sessions

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: Sanity CMS (Headless CMS)
- **Authentication**: Clerk (User management and authentication)
- **UI Components**: Radix UI, Lucide Icons
- **Video Player**: Custom video player component
- **File Upload**: Video and image upload capabilities
- **Real-time**: Live data fetching and revalidation

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (admin)/           # Admin dashboard and management
│   ├── (user)/            # Student learning interface
│   ├── api/               # API routes and webhooks
│   └── actions/           # Server Actions
├── components/            # Reusable UI components
│   ├── admin/            # Admin-specific components
│   ├── my-learning/      # Learning interface components
│   ├── ui/               # Base UI components
│   └── video-player/     # Video player components
├── lib/                  # Utility functions and configurations
├── sanity/               # Sanity CMS configuration and schemas
│   ├── lib/             # Sanity utility functions
│   └── schemaTypes/     # Content schemas
├── hooks/               # Custom React hooks
└── public/              # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Sanity account
- Clerk account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/VansRouges/dth-main.git
cd dth-main
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token

# Other configurations
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Key Features Implementation

### Smart Course Resumption
- Automatically detects the next uncompleted lesson
- Redirects users to their progress point instead of starting over
- Handles edge cases for completed courses

### Progress Tracking
- Real-time lesson completion tracking
- Course progress calculation with percentage completion
- Visual progress indicators and completion stats

### User Experience
- Intuitive navigation with sidebar course structure
- Video player with lesson navigation controls
- Responsive design for all device sizes
- Loading states and error handling

## 🗂 Content Management

The project uses Sanity CMS for content management with the following schemas:
- **Courses**: Course information, pricing, and structure
- **Modules**: Course modules with lesson organization
- **Lessons**: Individual lessons with video content
- **Students**: Student profiles and enrollment data
- **Instructors**: Instructor profiles and course assignments
- **Lesson Completions**: Progress tracking data

## 🔐 Authentication & Authorization

- **Clerk Integration**: Secure user authentication and management
- **Role-based Access**: Different interfaces for students and admins
- **Course Access Control**: Enrollment-based course access
- **User Context**: Consistent user state across the application

## 📊 Analytics & Tracking

- **Student Dashboard**: Enrollment stats, completion rates, progress tracking
- **Course Analytics**: Per-course completion and engagement metrics
- **Admin Insights**: Student management and course performance data

## 🚀 Deployment

The application is designed to be deployed on Vercel:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Configure Environment Variables**
4. **Deploy**

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**DataTechHub** - Empowering learning through technology 🎓
