import { ReactNode, useState } from "react"
import { AboutMeSec } from "../types";
import { codingSkills, frameworkSkills, certificates } from "../data";

const AboutMe = () => {
  const [aboutMeSec, setAboutMeSec] = useState<AboutMeSec>('About Me');
  const aboutMeMenus = ['About Me', 'Skills', 'Achievements'];
  const SectionToChange = ({ children } : { children: ReactNode }) => {
    return (
      <section className="fade-in text-blue-900">
        {children}
      </section>
    )
  }

  return (
    <div id="about-me" className="main-section slide-up">
      <h1 className="text-5xl font-bold drop-shadow-lg text-blue-900 mb-4">About Me</h1>
      <div className="text-blue-900 flex items-center gap-x-4">
        {aboutMeMenus.map((menu: string) => (
          <button key={menu} onClick={() => setAboutMeSec(menu)} className={`${aboutMeSec === menu ? 'bg-blue-100' : ''} px-3 py-2 hover:bg-blue-100 rounded-md transition-all`}>
            {menu}
          </button>
        ))}
      </div>
      <section className="mt-4">
        {aboutMeSec === 'About Me' && (
          <SectionToChange>
            <p className="text-xl mb-8">My name is Suttirak Charoenrajabhakdi, you can call me Mark. I am currently working as a web developer to create websites and web applications using HTML, CSS, JavaScript, React, and TypeScript. Also, I like to learn how to code, especially TypeScript and React, and practise writing projects when I have free time.</p>
            <div className="flex flex-col gap-y-4">
              <h1 className="text-2xl font-bold">Hobbies</h1>
              <ul className="text-xl">
                <li>Learning languages such as English, Chinese and German</li>
                <li>Listening to music</li>
                <li>Playing mobile games</li>
              </ul>
            </div>
          </SectionToChange>
        )}
        {aboutMeSec === 'Skills' && (
          <SectionToChange>
            <div className="flex text-left gap-16 flex-col md:flex-row">
              <div className="flex flex-col gap-y-4">
                <h1 className="text-2xl font-bold">Coding language skills</h1>
                <ul className="text-xl">
                  {codingSkills.map(skill => (
                    <li>{skill.title} - {skill.level}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-2xl font-bold">Frameworks</h1>
                <ul className="text-xl">
                  {frameworkSkills.map(skill => (
                    <li>{skill.title} - {skill.level}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionToChange>
        )}
        {aboutMeSec === 'Achievements' && (
          <SectionToChange>
            <ul className="flex flex-col gap-y-4">
              {certificates.map((certificate: any) => (
                <li>
                  <h2 className="text-2xl font-bold">{certificate.title}</h2>
                  <p className="text-xl">{certificate.institute} - {certificate.year}</p>
                </li>
              ))}
            </ul>
          </SectionToChange>
        )}
      </section>
    </div>
  )
}

export default AboutMe