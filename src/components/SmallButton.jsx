export default function SmallButton({ Icon }) {
    return (
        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#FAFAFE] dark:bg-[#131517] flex items-center justify-center text-[#323233] dark:text-[#D0D0D1] hover:bg-gray-200 dark:hover:bg-gray-700
        transition-colors duration-200">
            <Icon className="w-[1.33931rem] h-[1.33931rem]" />
        </div>
    );
}
