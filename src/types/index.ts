export interface Certificates {
  title: string
  institute: string
  year: number
}

export interface ProjListProps {
  title: string
  desc: string
  projLink: string
  projCode: string
  img: string
}

export interface Menus {
  title: string
  id: string
}

export type AboutMeSec = 'About Me' | 'Skills' | 'Achievements' | string

export type Skills = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced"
}