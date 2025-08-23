import { FaRegClock } from "react-icons/fa6";
import { FaGoogle, FaBook } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar({handleSelectedButton, activeButton}) {
    const { isDarkMode, toggleTheme } = useTheme();
    
    return (
        <div className="w-71 xl:w-65 lg:w-60 md:w-54 h-screen flex flex-col items-center justify-between flex-shrink-0 pt-[1.71rem]
                        bg-white text-[#000000B2]
                        dark:bg-[#212325] dark:text-white
                        transition-colors duration-300">
            <div className="flex flex-col gap-1.5">
                <SidebarItem 
                    label='My Courses'
                    Icon={FaRegClock}
                    onClick={() => handleSelectedButton('myCourses')}
                    isSelected={activeButton === 'myCourses'}
                />
                <SidebarItem 
                    label='All Courses'
                    Icon={FaBook}
                    onClick={() => handleSelectedButton('allCourses')}
                    isSelected={activeButton === 'allCourses'}
                />
                <SidebarItem 
                    label='GDSC Courses'
                    Icon={FaGoogle}
                    onClick={() => handleSelectedButton('gdscCourses')}
                    isSelected={activeButton === 'gdscCourses'}
                />
            </div>
            <div className="mb-[8rem]">
                <SidebarItem 
                    label='Switch Modes'
                    Icon={isDarkMode ? IoMoon : IoSunny}
                    onClick={toggleTheme}
                />
            </div>
        </div>
    );
}