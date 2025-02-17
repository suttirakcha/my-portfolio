import { ProjListProps } from "../types"
import { projectList } from "../data"
import { useState } from "react"
import { Search, X } from "lucide-react"

const Projects = () => {
  const [searchProject, setSearchProject] = useState("");
  const projClassName = "bg-indigo-900 hover:bg-indigo-700 text-white inline-block px-3 py-2 rounded-md";
  const filteredProject = projectList.filter((proj: ProjListProps) => proj.title.includes(searchProject));
  const ProjList = ({ title, desc, projLink, projCode, img } : ProjListProps) => {
    return (
      <div className="bg-white rounded-lg p-5 hover:shadow-lg transition-all text-indigo-900 flex flex-col gap-y-5">
        <img src={img} className="rounded-md" alt={title}/>
        <h1 className="text-2xl font-semibold drop-shadow-md text-indigo-900">{title}</h1>
        <p className="text-lg">{desc}</p>
        <div className="flex gap-4 justify-center">
          <a className={projClassName} href={projLink}>View project</a>
          <a className={projClassName} href={projCode}>View source code</a>
        </div>
      </div>
    )
  }

  return (
    <header className="bg-cyan-400" id="projects">
      <div className="main-section slide-up space-y-4">
        <h1 className="text-5xl font-bold drop-shadow-lg mb-4">My Projects</h1>
        <div className="relative max-w-[600px] w-full text-black">
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="main-input !pl-12" 
            value={searchProject} 
            onChange={(e: any) => setSearchProject(e.target.value)}
          />
          {searchProject !== "" && 
            <X 
              className="absolute right-4 top-3 cursor-pointer"
              onClick={() => setSearchProject("")}
            />
          }
          <Search className="absolute left-4 top-3"/>
        </div>
        {filteredProject.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-8">
            {filteredProject.map((proj: ProjListProps) => (
              <ProjList title={proj.title} img={proj.img} projLink={proj.projLink} projCode={proj.projCode} desc={proj.desc} />
            ))}
          </div>
        ) : (
          <div className="slide-up text-3xl font-semibold py-40">No projects found</div>
        )}
      </div>
    </header>
  )
}

export default Projects