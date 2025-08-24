import { useState } from "react";
import SubjectCard from "./SubjectCard";
import SubjectGrid from "./SubjectGrid";
import { FaSort, FaChevronDown } from "react-icons/fa";
import { SUBJECTS } from "../data";

export default function MyCoursesMainContent({ handleCardClick }) {
  const [sortOrder, setSortOrder] = useState("");

  // Sort subjects only if sortOrder is selected
  const sortedSubjects = [...Object.values(SUBJECTS)].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.subject.localeCompare(b.subject); // A → Z
    } else if (sortOrder === "desc") {
      return b.subject.localeCompare(a.subject); // Z → A
    }
    return 0; // default (no sorting)
  });

  return (
    <div className="flex flex-col bg-[#FAFAFE] dark:bg-[#131517] mx-auto w-full max-w-[1400px] px-6.5">
      {/* Top bar */}
      <div className="flex justify-between my-[1.88rem]">
        <div></div>
        <div className="flex gap-[1rem] items-center">
          <FaSort className="text-gray-600 dark:text-gray-300" />

          {/* Custom styled dropdown */}
          <div className="relative">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-white dark:bg-[#1f2023] dark:text-white appearance-none pr-8"
            >
              <option value="">Sort by</option>
              <option value="asc">A → Z</option>
              <option value="desc">Z → A</option>
            </select>
            {/* Custom dropdown arrow */}
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <SubjectGrid className="flex flex-row flex-wrap gap-[0.94rem]">
        {sortedSubjects.map((subj) => (
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


