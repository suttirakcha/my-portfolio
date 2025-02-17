import { Certificates, Menus, ProjListProps, Skills } from "../types";
import letsguess from "../images/lets-guess.png"
import blogjectImg from "../images/blogject.png"
import memoryQuizImg from "../images/memoryquiz.png"

export const menus: Menus[] = [
  {
    title: "Home",
    id: "hero"
  },
  {
    title: "About Me",
    id:"about-me"
  },
  {
    title: "My Projects",
    id:"projects"
  }
];

export const certificates: Certificates[] = [
  {
    title:'HTML and CSS Frontend Fundamentals',
    institute:'Pirple',
    year:2020
  },
  {
    title:'Responsive Web Design',
    institute:'freeCodeCamp',
    year:2021
  },
  {
    title:'Keeping Up with the JavaScripts ES6',
    institute:'Pirple',
    year:2025
  },
];

export const projectList: ProjListProps[] = [
  {
    title: "Let's Guess",
    img: letsguess,
    projLink: "https://lets-guess.vercel.app",
    projCode: "https://github.com/suttirakcha/lets-guess",
    desc: "Wanna guess? Call your friends and let's play!"
  },
  {
    title: "Blogject",
    img: blogjectImg,
    projLink: "https://blogject.vercel.app",
    projCode: "https://github.com/suttirakcha/blogject",
    desc: "An experimental social media app that you can post something you want. To experimentally use it, please sign up using mock up email such as aaa@mail.com."
  },
  {
    title: "Memoryquiz",
    img: memoryQuizImg,
    projLink: "https://memoryquiz.vercel.app",
    projCode: "https://github.com/suttirakcha/memoryquiz",
    desc: "The quiz game for memorisation which can help you relax"
  }
];

export const codingSkills: Skills[] = [
  { title: "HTML", level: "Advanced" },
  { title: "CSS", level: "Intermediate" },
  { title: "JavaScript", level: "Intermediate"},
  { title: "TypeScript", level: "Intermediate" },
  { title: "Python", level: "Beginner" }
];

export const frameworkSkills: Skills[] = [
  { title: "React", level: "Intermediate" },
  { title: "Django", level: "Beginner" },
  { title: "TailwindCSS", level: "Intermediate" }
];