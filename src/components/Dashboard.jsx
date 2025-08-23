import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MyCoursesMainContent from "./MyCoursesMainContent";
import AllCoursesMainContent from './AllCoursesMainContent';
import IndividualSubjectContent from "./IndividualSubjectContent";
import { SUBJECTS } from "../data";
import { useTheme } from '../context/ThemeContext';

export default function Dashboard() {
    const { isDarkMode } = useTheme(); 
    const [sidebarButton, setSidebarButton] = useState('myCourses');
    const [selectedSubject, setSelectedSubject] = useState();
    const [selectedColor, setSelectedColor] = useState();

    function cardClickHandler(code, color) {
        setSelectedSubject(code);
        setSelectedColor(color);
    }

    function clickHandler(selectedButton) {
        setSidebarButton(selectedButton);
        setSelectedSubject(null);
    }
        
    const getPageTitle = () => {
        if (selectedSubject) {
                     
            return SUBJECTS[selectedSubject]?.subject || "Course Details";
        }
                
        switch (sidebarButton) {
            case 'myCourses':
                return 'My Courses';
            case 'allCourses':
                return 'All Courses';
            case 'gdscCourses':
                return 'GDSC Courses';
            case 'askClamp':
                return 'Ask CLAMP';
            default:
                return 'My Courses';
        }
    };

    return (
        // Added theme-aware background - this is the ONLY styling change
        <div className="min-h-screen bg-white dark:bg-[#131517] transition-colors duration-300">
            <Header title={getPageTitle()} />
            <div className="flex flex-row">
                <Sidebar handleSelectedButton={clickHandler} activeButton={sidebarButton} />
                {sidebarButton === "myCourses" && (
                    selectedSubject ? (
                        <IndividualSubjectContent
                            subjCode={selectedSubject}
                            color={selectedColor}
                        />
                    ) : (
                        <MyCoursesMainContent handleCardClick={cardClickHandler} />
                    )
                )}
                {sidebarButton === "allCourses" && <AllCoursesMainContent />}
                {sidebarButton === "gdscCourses" && (
                    <div className="p-6 text-lg text-gray-900 dark:text-white">GDSC Courses Content</div>
                )}
                {sidebarButton === "askClamp" && (
                    <IndividualSubjectContent />
                )}
            </div>
        </div>
    );
}