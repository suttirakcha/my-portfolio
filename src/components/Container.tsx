import Certifications from "@/components/Certifications";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Fragment } from "react";

function Container() {
  const components = [
    <Hero />,
    <Projects />,
    <Certifications />,
    <Skills />,
    <Languages />,
  ];
  return (
    <main>
      {components.map((comp, index) => {
        const isLastComp = components.length !== index + 1;
        return (
          <Fragment>
            {comp}
            {isLastComp && <Divider />}
          </Fragment>
        );
      })}
    </main>
  );
}

export default Container;
