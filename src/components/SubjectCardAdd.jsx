import { IoMdAdd } from "react-icons/io";

export default function SubjectCard({ code, subject, department }) {
    // GDSC brand colors
    const gdscColors = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];
    
    // Simple hash function to convert string to number
    const hashString = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    };
    
    // Get consistent color based on card data
    const getConsistentColor = () => {
        // Combine code, subject, and department to create unique identifier
        const uniqueId = `${code}-${subject}-${department}`;
        const hash = hashString(uniqueId);
        const index = hash % gdscColors.length;
        return gdscColors[index];
    };

    return (
        <div
            className="
                rounded-[0.625rem] border border-gray-300 dark:border-gray-700 
                font-poppins flex flex-col items-end
                w-full max-w-[28rem]    
                transition-transform duration-300 hover:scale-[1.02] 
                hover:shadow-lg dark:hover:shadow-gray-800
            "
        >
            <div
                className="h-[6.25rem] self-stretch rounded-t-[10px] flex items-end justify-end p-2"
                style={{ backgroundColor: getConsistentColor() }}
            >
                <button
                    className="flex items-center gap-1.25 px-2.5 py-1.25 text-xs font-medium
                                bg-white text-[#5C5C5C] rounded-[0.625rem] shadow
                                hover:bg-gray-100 hover:text-black
                                transition-transform duration-300 hover:scale-[1.02]
                                hover:shadow-lg dark:hover:shadow-gray-800"
                >
                    <IoMdAdd />
                    Add Course
                </button>
            </div>

            <div
                className="
                    flex h-[7.5rem] p-[1.25rem_0.9375rem] flex-col items-start gap-[0.625rem]
                    self-stretch rounded-b-[0.625rem]
                    bg-white dark:bg-[#212325]
                "
            >
                <div
                    className="
                        w-full h-[0.5625rem]
                        text-black/50 dark:text-[#FFFFFFB2]
                        text-[0.75rem] font-normal not-italic 
                        leading-[0.5775rem] flex flex-row items-center justify-between
                    "
                >
                    <span>{code}</span>
                </div>

                <h3
                    className="
                        self-stretch text-black dark:text-white 
                        text-[0.875rem] font-normal leading-[0.67375rem] not-italic
                    "
                >
                    {subject}
                </h3>

                <span
                    className="
                        text-black/50 dark:text-[#FFFFFFB2]
                        text-[0.75rem] font-normal not-italic leading-[1.25]
                    "
                >
                    {department}
                </span>
            </div>
        </div>
    );
}



