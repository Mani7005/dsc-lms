import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import profileImg from "../assets/images/profileImg.jpg";
import SmallButton from "./SmallButton";

export default function Header({
    studentImg = profileImg,
    studentName = "Thapar Student",
    studentEmail = "student@thapar.edu",
    title = "My Courses"
}) {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleBackClick = () => {
        // If on a subject page, go back to my courses
        if (location.pathname.includes('/dashboard/subject/')) {
            navigate('/dashboard/my-courses');
        } else {
            // Use browser history for other cases
            window.history.back();
        }
    };

    const handleForwardClick = () => {
        window.history.forward();
    };

    // Determine if we can show back button (when on subject page)
    const canGoBack = location.pathname.includes('/dashboard/subject/') || window.history.length > 1;
    return (
        <header
            className="
        flex items-center justify-between h-[4.69rem] px-6
        border-b-3 border-[#F1F1F1] dark:border-[#2E2E2E] 
        bg-white dark:bg-[#212325] font-poppins
        sticky top-0 z-50
      "
        >
            <div className="w-75 flex items-center">
                {/* logo */}
            </div>

            <div className="flex items-center gap-6 flex-1 justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <button 
                            onClick={handleBackClick}
                            disabled={!canGoBack}
                            className={!canGoBack ? "opacity-50 cursor-not-allowed" : ""}
                        >
                            <SmallButton Icon={IoIosArrowBack} />
                        </button>
                        <button 
                            onClick={handleForwardClick}
                        >
                            <SmallButton Icon={IoIosArrowForward} />
                        </button>
                    </div>
                    <h1 className="text-2xl text-black dark:text-[#FFFFFFB2] font-semibold tracking-tight">
                        {title}
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => window.history.back()}>
                        <SmallButton Icon={GoBell} />
                    </button>
                    <button>
                        <SmallButton Icon={AiOutlineLogout} />
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                        <img
                            src={studentImg}
                            alt="profile"
                            className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-gray-600"
                        />
                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                                Hi, {studentName}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {studentEmail}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}



// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { GoBell } from "react-icons/go";
// import { LuCircleArrowOutUpRight } from "react-icons/lu";
// import profileImg from '../assets/images/profileImg.jpg'

// import SmallButton from "./SmallButton";

// export default function Header({ studentImg = profileImg, studentName = 'Thapar Student', studentEmail = 'student@thapar.edu' }) {
//     return (
//         <header className="
//         flex items-center h-[4.69rem]
//         border-b-3 border-[#F1F1F1] dark:border-[#2E2E2E]
//         bg-white dark:bg-[#212325] font-poppins
//       ">
//             <div className="w-[17.75rem]"></div>
//             <div className="p-[1.87rem] flex justify-between">
//                 <div className="flex items-center gap-[1.25rem]">
//                     <div className="flex flex-row gap-[0.62rem]">
//                         <button>
//                             <SmallButton Icon={IoIosArrowBack} />
//                         </button>
//                         <button>
//                             <SmallButton Icon={IoIosArrowForward} />
//                         </button>
//                     </div>
//                     <div className="text-[1.5rem] not-italic font-medium leading-normal">My Courses</div>
//                 </div>

//                 <div className="flex gap-[0.63rem]">
//                     <button>
//                         <SmallButton Icon={GoBell} />
//                     </button>
//                     <button>
//                         <SmallButton Icon={LuCircleArrowOutUpRight} />
//                     </button>
//                     <div className="flex">
//                         <div>
//                             <img src={profileImg} alt="profile image" className="w-[3rem] h-[3rem] rounded-[1.75rem]" />
//                         </div>
//                         <div className="flex flex-col justify-center">
//                             <div className="text-[1.125rem] font-medium leading-[0.77] tracking-[-0.045em]">Hi, {studentName}</div>
//                             <div className="text-[#5E5E5E] text-[0.875rem] font-normal leading-[0.77] tracking-[-0.035em]">{studentEmail}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </header>
//     );
// }

