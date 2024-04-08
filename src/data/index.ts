import { Certificates, Menus, ProjListProps } from "../types";
import letsguess from "../images/lets-guess.png"
import blogjectImg from "../images/blogject.png"

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
]

export const certificates: Certificates[] = [
    {
      title:'Coding for Marketers',
      institute:'Sololearn',
      year:2021
    },
    {
      title:'Responsive Web Design',
      institute:'freeCodeCamp',
      year:2021
    },
    {
      title:'HTML and CSS Frontend Fundamentals',
      institute:'Pirple',
      year:2020
    }
  ]

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
  }
]