import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import me from "../images/me.jpg"

const Hero = () => {
  return (
    <header id="hero">
      <div className="main-section">
        <div className="grid lg:grid-cols-2 w-full gap-20 items-center pt-10">
          <div className="flex flex-col gap-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold drop-shadow-lg">Hello, I am Suttirak</h1>
            <p className="text-xl">A web developer with 2-year working experience on the web development field and the passion of coding projects using React and TypeScript.</p>
            <div className="flex gap-x-4 justify-center lg:justify-start">
              <a href="https://github.com/suttirakcha">
                <FontAwesomeIcon icon={faSquareGithub} className="h-10 w-10"/>
              </a>
              <a href="https://www.linkedin.com/in/suttirak-charoenrajabhakdi-87a7721a6/">
                <FontAwesomeIcon icon={faLinkedin} className="h-10 w-10"/>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={me} className="w-[400px] rounded-full opacity-25 hover:opacity-100 transition-opacity"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero