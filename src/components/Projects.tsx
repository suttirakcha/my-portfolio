import { ProjListProps } from "../types"
import { projectList } from "../data"

const Projects = () => {
  const ProjList = ({ title, desc, projLink, projCode, img } : ProjListProps) => {
    return (
      <div className="bg-white rounded-lg p-5 hover:shadow-lg transition-all text-indigo-900 flex flex-col gap-y-5">
        <img src={img} className="rounded-md" alt={title}/>

        <h1 className="text-2xl font-semibold drop-shadow-md text-indigo-900">{title}</h1>
        <p className="text-lg">{desc}</p>

        <div className="flex gap-4 justify-center">
          <a className="bg-indigo-900 hover:bg-indigo-700 text-white inline-block px-3 py-2 rounded-md" href={projLink}>View project</a>
          <a className="bg-indigo-900 hover:bg-indigo-700 text-white inline-block px-3 py-2 rounded-md" href={projCode}>View source code</a>
        </div>
      </div>
    )
  }

  return (
    <header className="bg-cyan-400" id="projects">
      <div className="main-section slide-up">
        <h1 className="text-5xl font-bold drop-shadow-lg mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          {projectList.map((proj: any) => (
            <ProjList title={proj.title} img={proj.img} projLink={proj.projLink} projCode={proj.projCode} desc={proj.desc} />
          ))}
        </div>
      </div>
    </header>
  )
}

export default Projects