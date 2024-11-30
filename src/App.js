import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Skills from "./components/skills";
import Achievements from "./components/achievements";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="overflow-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900">
        <div className="fixed top-0 left-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-8 min-h-screen">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Skills />
                    <Achievements />
                    <Projects />
                    <Contact />
                  </>
                }
              />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
