import Topbar from "./components/Topbar";
import { lazy, Suspense, useEffect } from "react";

import { useTransition } from "react";

function App() {

  const [isPending, startTransition] = useTransition()

  const Hero = lazy(() => import('./components/Hero'))
  const AboutMe = lazy(() => import('./components/AboutMe'))
  const Projects = lazy(() => import('./components/Projects'))

  return (
    <main>
      <Topbar />

      <Suspense fallback={<></>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<></>}>
        <AboutMe />
      </Suspense>

      <Suspense fallback={<></>}>
        <Projects />
      </Suspense>
    </main>
  );
}

export default App;
