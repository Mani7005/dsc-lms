import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import AuthPage from './components/AuthPage';
import Profile from './components/profile';
import OTP_page from './components/OTP_page';
import SignUp from './components/SignUp';
import CourseDashboard from './components/Dashboard';
import IndividualSubjectContent from './components/IndividualSubjectContent';
import { ThemeProvider } from './context/ThemeContext';
import { SUBJECTS } from './data';

// App content that uses theme
function AppContent() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#131517] text-gray-900 dark:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP_page />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<CourseDashboard />} />
          <Route path="/dashboard/my-courses" element={<CourseDashboard pageType="myCourses" />} />
          <Route path="/dashboard/all-courses" element={<CourseDashboard pageType="allCourses" />} />
          <Route path="/dashboard/gdsc-courses" element={<CourseDashboard pageType="gdscCourses" />} />
          {/* Individual subject routes */}
          <Route path="/dashboard/subject/:subjectCode" element={<SubjectPageWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

// Wrapper component to handle subject routing
function SubjectPageWrapper() {
  const { subjectCode } = useParams();
  const subject = SUBJECTS[subjectCode];
  
  if (!subject) {
    return <div>Subject not found</div>;
  }
  
  return (
    <IndividualSubjectContent 
      subjCode={subjectCode}
      color={subject.color || '#3B82F6'}
    />
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;



