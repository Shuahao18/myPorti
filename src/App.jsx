import { useEffect, useMemo, useState } from "react";
import { Nav } from "./components";
import { Hero, Skills, Project, Contact } from "./sections";
import { ThemeProvider } from "./context/ThemeContext";

const pageTwoSections = ["skills", "project", "contact-us"];

const getActiveSectionFromHash = () => {
  const hash = window.location.hash.replace("#", "");
  return pageTwoSections.includes(hash) ? hash : "skills";
};

const App = () => {
  const [activeSection, setActiveSection] = useState(getActiveSectionFromHash);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      setActiveSection(getActiveSectionFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const targetId = currentHash === "#home" || !currentHash ? "home" : "page-two";
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  }, [currentHash]);

  const showTopNav = !!currentHash && currentHash !== "#home";

  const activePageTwoSection = useMemo(() => {
    switch (activeSection) {
      case "project":
        return <Project />;
      case "contact-us":
        return <Contact />;
      case "skills":
        return <Skills />;
      default:
        return null;
    }
  }, [activeSection]);

  const isPageTwo = !!currentHash && currentHash !== "#home";

  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-primary">
        <Nav
          visible={true}
          isPageTwo={isPageTwo}
          activeSection={!currentHash || currentHash === "#home" ? "home" : activeSection}
        />
        <Hero />
        <div id="page-two" className="min-h-screen">
          {activePageTwoSection}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
