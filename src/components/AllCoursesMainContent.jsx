import Button from "./Button";
import SubjectCardAdd from './SubjectCardAdd';
import SubjectGrid from "./SubjectGrid";
import { SUBJECTS } from "../data";
import { FaSort, FaFilter } from "react-icons/fa";
import { useDarkMode } from './useDarkMode';


  

export default function MyCoursesMainContent() {
    const { isDark, toggleTheme } = useDarkMode();
    return (
        <div className="w-screen px-[1.87rem] flex flex-col bg-[#FAFAFE] dark:bg-[#131517]">
            <div className="flex justify-between my-[1.88rem]">
                <div></div>
                <div className="flex gap-[1rem] ">
                    <Button Icon={FaFilter} iconText="Add Filter" />
                    <Button Icon={FaSort} iconText="Sort by" />
                </div>
            </div>
            {/* <div className="flex flex-row flex-wrap gap-[0.94rem]">
                {courses.map((course,index)=><SubjectCard key={index} {...course}/>)}
            </div> */}
            <SubjectGrid className="flex flex-row flex-wrap gap-[0.94rem]">
                {Object.values(SUBJECTS).map((subj, index) => (
                    <SubjectCardAdd
                        key={subj.code}
                        code={subj.code}
                        subject={subj.subject}
                        department={subj.department}
                    />
                ))}
            </SubjectGrid>
        </div>
    );
}