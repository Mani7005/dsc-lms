import Button from "./Button";
import SubjectCard from "./SubjectCard";
import SubjectGrid from "./SubjectGrid";
import { FaSort } from "react-icons/fa";
import { SUBJECTS } from "../data";

export default function MyCoursesMainContent({handleCardClick}) {
    return (
        <div className="flex flex-col bg-[#FAFAFE] dark:bg-[#131517] mx-auto w-full max-w-[1400px] px-6.5">
            <div className="flex justify-between my-[1.88rem]">
                <div></div>
                <div className="flex gap-[1rem] ">
                    <Button Icon={FaSort} iconText="Sort by" />
                </div>
            </div>
            <SubjectGrid className="flex flex-row flex-wrap gap-[0.94rem]">
                {Object.values(SUBJECTS).map((subj, index) => (
                    <SubjectCard
                        key={subj.code}
                        code={subj.code}
                        subject={subj.subject}
                        department={subj.department}
                        onClick={handleCardClick}
                    />
                ))}
            </SubjectGrid>
        </div>
    );
}