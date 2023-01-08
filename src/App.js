import "./App.css";
import useLocalStorage from "use-local-storage";
import Herosection from "./components/Herosection";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn ] = useState(false);
  

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };
 
  return (
    <div className="App"  data-theme={theme}>
      
      <Navbar
        myTheme={theme}
        onToggleTheme={toggleTheme}
        onSwitch={switchBtn}
        
      ></Navbar>
      <Herosection></Herosection>
      <Techstack></Techstack>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
