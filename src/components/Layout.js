import Navbar from "./Navbar";
import '../components/Layout.css'
import Herosection from "./Herosection";
import Techstack from "./Techstack";
import Projects from "./Projects";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="content">
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Techstack></Techstack>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
