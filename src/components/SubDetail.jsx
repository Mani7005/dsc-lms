import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { PiBookmarksSimple } from "react-icons/pi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { VscMortarBoard } from "react-icons/vsc";

export default function SubDetail({ Icon,text }) {
    return (
        <li className="h-5 flex gap-2.5 items-center text-[#323233] dark:text-[#D0D0D1]">
            <Icon className="w-5 h-5" />
            <span className="font-poppins text-base font-normal leading-[77%]">{text}</span>
        </li>
    );
}