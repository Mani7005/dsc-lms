// import { Ellipsis } from "lucide-react";

// export default function SubjectCard({ id, title, department }) {
//     const randomRgbColor = () => {
//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     return (
//         <div
//             className="rounded-[0.625rem] border border-gray-300 dark:border-gray-700 
//                  font-poppins flex w-[22rem] flex-col items-end 
//                  transition-transform duration-300 hover:scale-[1.02] 
//                  hover:shadow-lg dark:hover:shadow-gray-800"
//         >
//             <div
//                 className="h-[6.25rem] self-stretch rounded-t-[10px]"
//                 style={{ backgroundColor: randomRgbColor() }}
//             ></div>
//             <div className="flex h-[7.5rem] p-[1.25rem_0.9375rem] flex-col items-start gap-[0.625rem] 
//                       self-stretch rounded-b-[0.625rem] 
//                       bg-white dark:bg-[#212325]">
//                 <div className="w-[20.125rem] h-[0.5625rem] 
//                         text-black/50 dark:text-[#FFFFFFB2]
//                         text-[0.75rem] font-normal not-italic 
//                         leading-[0.5775rem] flex flex-row items-center justify-between">
//                     <span>{id}</span>
//                     <Ellipsis className="cursor-pointer hover:text-black dark:hover:text-white" />
//                 </div>
//                 <h3 className="self-stretch text-black dark:text-white 
//                        text-[0.875rem] font-normal leading-[0.67375rem] not-italic">
//                     {title}
//                 </h3>
//                 <span className="text-black/50 dark:text-[#FFFFFFB2]
//                          text-[0.75rem] font-normal not-italic leading-[1.25]">
//                     {department}
//                 </span>
//             </div>
//         </div>
//     );
// }

import { Ellipsis } from "lucide-react";

export default function SubjectCard({ code, subject, department, onClick }) {
  // GDSC brand colors
  const gdscColors = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];

  
  const hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; 
    }
    return Math.abs(hash);
  };

  
  const getConsistentColor = () => {
    
    const uniqueId = `${code}-${subject}-${department}`;
    const hash = hashString(uniqueId);
    const index = hash % gdscColors.length;
    return gdscColors[index];
  };

  const color = getConsistentColor();

  return (
    <button
      onClick={() => onClick(code, color)}
      className="
        rounded-[0.625rem] border border-gray-300 dark:border-gray-700 
        font-poppins flex flex-col items-end text-left
        w-full max-w-[28rem]     
        transition-transform duration-300 hover:scale-[1.02] 
        hover:shadow-lg dark:hover:shadow-gray-800 cursor-pointer
      "
    >
      <div
        className="h-[6.25rem] self-stretch rounded-t-[10px]"
        style={{ backgroundColor: color }}
      />
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
          <Ellipsis className="cursor-pointer hover:text-black dark:hover:text-white" />
        </div>

        <h3
          className="
            self-stretch text-black dark:text-white 
            text-[0.875rem] font-normal leading-[0.9rem] not-italic
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
    </button>
  );
}


