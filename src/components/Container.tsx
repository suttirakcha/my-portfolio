import Certifications from "@/components/Certifications";
import Divider from "@/components/Divider";
import FadeUp from "@/components/FadeUp";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

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
          <FadeUp delay={100}>
            {comp}
            {isLastComp && <Divider />}
          </FadeUp>
        );
      })}
    </main>
  );
}

export default Container;
