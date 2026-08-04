import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Services from '../pages/Services/Services.jsx';
import Process from '../pages/Process/Process.jsx';
import Projects from '../pages/Projects/Projects.jsx';
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails.jsx';
import About from '../pages/About/About.jsx';
import Blogs from '../pages/Blogs/Blogs.jsx';
import BlogDetails from '../pages/BlogDetails/BlogDetails.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/process" element={<Process />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
