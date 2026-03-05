import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Terminal, BookOpen, PenTool, Library } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check local storage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Listen for system changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        if (e.matches) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { href: "/frameworks", label: "Frameworks", icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { href: "/prompt-builder", label: "Builder", icon: <PenTool className="w-4 h-4 mr-2" /> },
    { href: "/prompt-library", label: "Library", icon: <Library className="w-4 h-4 mr-2" /> },
    { href: "/blog", label: "Blog", icon: <Terminal className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary text-primary-foreground p-1 rounded-md">
            <Terminal className="h-6 w-6" />
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">EngineerPromptLab</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary flex items-center ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex items-center text-sm font-medium text-foreground hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-8 mt-auto bg-muted/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2026 EngineerPromptLab. Built for engineers.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © Prashant Fawade, built with AI assistance
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/ppfawade/Engineer-Prompt-Lab" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary">GitHub</a>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
