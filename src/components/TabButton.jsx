"use client";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";

export default function TabButton({ children, isSelected, onClick}) {
  return (
    <li>
      <motion.button
        onClick={onClick}
        className="flex items-center gap-1.25 text-[0.9375rem] font-medium leading-normal tracking-[-0.0375rem] cursor-pointer"
        animate={{
          color: isSelected ? "#000000" : "#5E5E5E",
        }}
        whileHover={{
          color: isSelected ? "#111111" : "#333333",
        }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {isSelected && (
            <motion.span
              key="dot"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <GoDotFill className="w-3 h-3" />
            </motion.span>
          )}
        </AnimatePresence>
        {children}
      </motion.button>
    </li>
  );
}


// "use client";
// import { motion } from "framer-motion";

// export default function TabButton({ children, isSelected, onClick }) {
//   return (
//     <li className="relative">
//       <button
//         onClick={onClick}
//         className={`relative px-2 py-1 text-[0.9375rem] font-medium tracking-[-0.0375rem]
//           transition-colors duration-300
//           ${
//             isSelected
//               ? "text-black dark:text-white"
//               : "text-[#5E5E5E] dark:text-[#FFFFFFB2]"
//           }`}
//       >
//         {children}
//         {isSelected && (
//           <motion.div
//             layoutId="underline"
//             className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-black dark:bg-white"
//             transition={{ type: "spring", stiffness: 500, damping: 30 }}
//           />
//         )}
//       </button>
//     </li>
//   );
// }