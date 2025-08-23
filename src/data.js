import { VscMortarBoard } from "react-icons/vsc";
import { PiBookmarksSimple } from "react-icons/pi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

// export const sidebarItems = [
//     { icon: Clock, label: 'My Courses' },
//     { icon: BookOpen, label: 'All Courses' },
//     { icon: Globe, label: 'GDSC Courses'},
//     { icon: HelpCircle, label: 'Ask CLAMP'},
//   ];

export const subDetails = [
    { Icon: VscMortarBoard, key: "code" },
    { Icon: PiBookmarksSimple, key: "credits" },
    { Icon: PiClockCounterClockwiseFill, key: "LTPsplit" },
    { Icon: LiaChalkboardTeacherSolid, key: "department" },
];

export const SUBJECTS = {
    'UCB009': {
        code: 'UCB009',
        subject: "Applied Chemistry",
        credits: '4 Credits',
        LTPsplit: '3 Lectures / 0 Tutorials / 2 Labs',
        department: "Chemistry & Biochemistry Department",
        syllabus: {
            title: 'Topics Covered',
            description: ""
        },
        slides: {
            title: "Slides",
            slideFiles: [
                { name: "Lecture-8.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
                { name: "Lecture-1-3.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
            ]
        },
        videosAndNotes: {
            title: "Youtube Playlist",
        },
        tutorialSheets: {
            title: "Tutorial Sheets",
        }
    },
    'UES013': {
        code: 'UES013',
        subject: "Electrical & Electronics Engineering",
        credits: '4.5 Credits',
        LTPsplit: '3 Lectures / 1 Tutorials / 2 Labs',
        department: "Department of Electrical & Electronics Engineering",
        syllabus: {
            title: 'Topics Covered',
            description: ""
        },
        slides: {
            title: "Slides",
            slideFiles: [
                { name: "Lecture-8.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
                { name: "Lecture-1-3.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
            ]
        },
        videosAndNotes: {
            title: "Youtube Playlist",
        },
        tutorialSheets: {
            title: "Tutorial Sheets",
        }
    },
    'UES103': {
        code: 'UES103',
        subject: "Programming for Problem Solving",
        credits: '4 Credits',
        LTPsplit: '3 Lectures / 0 Tutorials / 2 Labs',
        department: "Computer Science Engineering Department",
        syllabus: {
            title: 'Topics Covered',
            description: ""
        },
        slides: {
            title: "Slides",
            slideFiles: [
                { name: "Lecture-8.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
                { name: "Lecture-1-3.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
            ]
        },
        videosAndNotes: {
            title: "Youtube Playlist",
        },
        tutorialSheets: {
            title: "Tutorial Sheets",
        }
    },
    'UEN008': {
        code: 'UEN008',
        subject: "Energy and Environment",
        credits: '2 Credits',
        LTPsplit: '2 Lectures / 0 Tutorials / 0 Labs',
        department: "Energy and Environment Engineering Department",
        syllabus: {
            title: 'Topics Covered',
            description: ""
        },
        slides: {
            title: "Slides",
            slideFiles: [
                { name: "Lecture-8.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
                { name: "Lecture-1-3.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
            ]
        },
        videosAndNotes: {
            title: "Youtube Playlist",
        },
        tutorialSheets: {
            title: "Tutorial Sheets",
        }
    },
    'UMA022': {
        code: 'UMA022',
        subject: "Mathematics-I",
        credits: '3.5 Credits',
        LTPsplit: '3 Lectures / 1 Tutorials / 0 Labs',
        department: "Department of Mathematics",
        syllabus: {
            title: 'Topics Covered',
            description: ""
        },
        slides: {
            title: "Slides",
            slideFiles: [
                { name: "Lecture-8.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
                { name: "Lecture-1-3.ppt", url: "https://drive.google.com/file/d/1qaWhF6ojSgbjYEdVIfENwT8yDQS0Enop/view", type: "ppt" },
            ]
        },
        videosAndNotes: {
            title: "Youtube Playlist",
        },
        tutorialSheets: {
            title: "Tutorial Sheets",
        }
    }
};