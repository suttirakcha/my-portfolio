import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import me from "../images/me.jpg"
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"

const Hero = () => {
  return (
    <header id="hero">
      <div className="main-section !px-0">
        <div className="flex justify-between w-full gap-x-20 items-center">
          <div className="flex flex-col gap-y-4 text-left">
            <h1 className="text-5xl font-bold drop-shadow-lg">Hello, I am Suttirak</h1>
            <p className="text-xl">A web developer with 2-year working experience on the web development field and the passion of coding projects using React and TypeScript.</p>

            <div className="flex gap-x-4">
              <a href="https://github.com/suttirakcha">
                <FontAwesomeIcon icon={faSquareGithub} className="h-10 w-10"/>
              </a>
              <a href="https://www.linkedin.com/in/suttirak-charoenrajabhakdi-87a7721a6/">
                <FontAwesomeIcon icon={faLinkedin} className="h-10 w-10"/>
              </a>
            </div>
          </div>
          <img src={me} className="w-[40%] rounded-full opacity-25 hover:opacity-100 transition-opacity"/>
        </div>
      </div>
    </header>
  )
}

export default Hero