
export default function SidebarItem({ label, Icon, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex w-57 py-3.75 px-[1.40625rem] 
        items-center gap-3.75 rounded-[0.625rem] 
        transition-colors duration-200 cursor-pointer 
        font-poppins text-base font-normal
        ${
          isSelected
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-white text-[#000000B2] hover:bg-gray-100 hover:text-black dark:bg-[#212325] dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-300"
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="flex-shrink-0">{label}</span>
    </button>
  );
}
