import { FaSort, FaFilter } from "react-icons/fa";

export default function Button({ Icon, iconText = 'Add Filter' }) {
    return (
        <button className="inline-flex items-center gap-[0.9375rem] p-[0.75rem_0.9375rem] rounded-[0.6875rem] border border-black/50 dark:border-[#88898A]
          bg-[#FAFAFE] dark:bg-[#131517]
          text-black/70 dark:text-white
          transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-black dark:hover:border-gray-400">
            <Icon className="w-[1.125rem] h-[1.125rem] text-gray-600 dark:text-gray-200 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white" />
            <span className="font-poppins text-base font-normal leading-[0.77]">{iconText}</span>
        </button>
    );
}