
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

import Home from "./screens/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import About from "./screens/HomeComponents/About";
import MyServices from "./screens/HomeComponents/MyServices";
import MySkills from "./screens/HomeComponents/MySkills";
import MyProjects from "./screens/HomeComponents/MyProjects";
import MyBlogs from "./screens/HomeComponents/MyBlogs";
import GotoTop from "./screens/HomeComponents/GotoTop";
import BlogPost from "./screens/HomeComponents/BlogPost";

import "./app.css";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="/myblogs/:id" element={<BlogPost />} />
        </Routes>

        <GotoTop />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
