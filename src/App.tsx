import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@/components/Layout";
import Home from "@/pages/Home";
import Frameworks from "@/pages/Frameworks";
import FrameworkDetail from "@/pages/FrameworkDetail";
import PromptBuilder from "@/pages/PromptBuilder";
import PromptLibrary from "@/pages/PromptLibrary";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/frameworks" element={<Frameworks />} />
            <Route path="/frameworks/:id" element={<FrameworkDetail />} />
            <Route path="/prompt-builder" element={<PromptBuilder />} />
            <Route path="/prompt-library" element={<PromptLibrary />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
