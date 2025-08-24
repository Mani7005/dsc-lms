import { useState } from "react";
import SubDetail from "./SubDetail";
import TabButton from "./TabButton";
import ClampNotebook from "./ClampNotebook"; 
import { subDetails } from "../data";
import { SUBJECTS } from "../data";

export default function IndividualSubjectContent({subjCode, color}) {
    const [selectedTopic, setSelectedTopic] = useState('syllabus');

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <div className="w-screen h-screen font-poppins bg-[#FAFAFE] dark:bg-[#131517] flex">
            
            <div className="flex-1 flex flex-col gap-6.25 px-7.5 pt-8 overflow-y-auto">
                <section className="h-72 flex gap-5">
                    <div className="h-72 w-1.5 rounded-[62.5rem]" style={{ backgroundColor: color }}></div>
                    <div className="flex flex-col h-72 gap-6.25">
                        <div className="w-25 h-25 rounded-full" style={{ backgroundColor: color }}></div>
                        <h1 className="text-[2rem] font-semibold leading-[100%] text-black dark:text-white">
                            {SUBJECTS[subjCode].subject}
                        </h1>
                        <ul className="list-none flex flex-col gap-2 justify-center">
                            {subDetails.map((item, index) => (
                                <SubDetail
                                    key={index}
                                    Icon={item.Icon}
                                    text={SUBJECTS[subjCode][item.key]}
                                />
                            ))}
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="w-full px-7.5 py-4 rounded-[1.75rem] bg-white dark:bg-[#212325]">
                        <menu className="flex gap-10 items-center">
                            <TabButton
                                onClick={() => handleSelect('syllabus')}
                                isSelected={selectedTopic === 'syllabus'}
                            >
                                Syllabus
                            </TabButton>
                            <TabButton
                                onClick={() => handleSelect('slides')}
                                isSelected={selectedTopic === 'slides'}
                            >
                                Class Slides
                            </TabButton>
                            <TabButton
                                onClick={() => handleSelect('videosAndNotes')}
                                isSelected={selectedTopic === 'videosAndNotes'}
                            >
                                Videos and Notes
                            </TabButton>
                            <TabButton
                                onClick={() => handleSelect('tutorialSheets')}
                                isSelected={selectedTopic === 'tutorialSheets'}
                            >
                                Tutorial Sheets
                            </TabButton>
                        </menu>
                    </div>
                </section>

                <section>
                    {selectedTopic && (
                        <div className="w-full p-7.5 rounded-[1.75rem] flex flex-col items-start gap-3.75 bg-white dark:bg-[#212325]">
                            <h3 className="text-base not-italic font-semibold leading-none text-black dark:text-white">
                                {SUBJECTS[subjCode][selectedTopic].title}
                            </h3>
                            
                            <div className="text-zinc-400">
                                Content for {selectedTopic} will be displayed here.
                            </div>
                        </div>
                    )}
                </section>
            </div>

            
            <div className="w-72 h-screen sticky top-0 right-0">
                <ClampNotebook 
                    subjectCode={subjCode}
                    subjectName={SUBJECTS[subjCode].subject}
                />
            </div>
        </div>
    );
}