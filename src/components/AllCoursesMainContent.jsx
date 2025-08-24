import { useState } from "react";
import SubjectCardAdd from "./SubjectCardAdd";
import SubjectGrid from "./SubjectGrid";
import { SUBJECTS } from "../data";
import { FaSort, FaFilter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function MyCoursesMainContent() {
  const { isDark } = useTheme();

  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("None");
  const [openDropdown, setOpenDropdown] = useState(null); // "filter" | "sort" | null

  // Filtering
  const filteredSubjects = Object.values(SUBJECTS).filter((subj) => {
    if (filter === "All") return true;
    return subj.pool === filter; // assumes SUBJECTS has a "pool"
  });

  // Sorting
  const sortedSubjects = [...filteredSubjects].sort((a, b) => {
    if (sortOrder === "AtoZ") return a.subject.localeCompare(b.subject);
    if (sortOrder === "ZtoA") return b.subject.localeCompare(a.subject);
    return 0; // None → original order
  });

  return (
    <div className="w-screen px-[1.87rem] flex flex-col bg-[#FAFAFE] dark:bg-[#131517]">
      <div className="flex justify-between my-[1.88rem] relative">
        <div></div>

        <div className="flex gap-[1rem]">
          {/* Filter Button with Dropdown */}
          <div className="relative">
            <div onClick={() => setOpenDropdown(openDropdown === "filter" ? null : "filter")}>
              <Button Icon={FaFilter} iconText="Filter By" />
            </div>
            {openDropdown === "filter" && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 z-50">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                  onClick={() => { setFilter("All"); setOpenDropdown(null); }}
                >
                  Filter By (Original)
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                  onClick={() => { setFilter("Pool A"); setOpenDropdown(null); }}
                >
                  Pool A
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                  onClick={() => { setFilter("Pool B"); setOpenDropdown(null); }}
                >
                  Pool B
                </button>
              </div>
            )}
          </div>

          {/* Sort Button with Dropdown */}
          <div className="relative">
            <div onClick={() => setOpenDropdown(openDropdown === "sort" ? null : "sort")}>
              <Button Icon={FaSort} iconText="Sort By" />
            </div>
            {openDropdown === "sort" && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 z-50">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                  onClick={() => { setSortOrder("None"); setOpenDropdown(null); }}
                >
                  Sort By (Original)
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                  onClick={() => { setSortOrder("AtoZ"); setOpenDropdown(null); }}
                >
                  A → Z
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                  onClick={() => { setSortOrder("ZtoA"); setOpenDropdown(null); }}
                >
                  Z → A
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subject Grid */}
      <SubjectGrid className="flex flex-row flex-wrap gap-[0.94rem]">
        {sortedSubjects.map((subj) => (
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



