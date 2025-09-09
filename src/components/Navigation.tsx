import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, GraduationCap, Building2 } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Trang chủ", href: "/", icon: BookOpen },
    { name: "Giải pháp", href: "/teachers", icon: Users },
    { name: "Về chúng tôi", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              LearnIQ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                location.pathname === "/"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Trang chủ</span>
            </Link>

            <Link
              to="/teachers"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                location.pathname === "/teachers"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Cho Giáo viên</span>
            </Link>

            <Link
              to="/students"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                location.pathname === "/students"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Cho Học sinh</span>
            </Link>

            <Link
              to="/schools"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                location.pathname === "/schools"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Cho Trường học</span>
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Về chúng tôi
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Liên hệ
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Đăng nhập
            </Button>
            <Button variant="hero" size="sm">
              Dùng thử miễn phí
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Trang chủ</span>
              </Link>

              {/* Mobile Solutions */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                  Giải pháp
                </div>
                <Link
                  to="/teachers"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-6 py-2 rounded-md text-base font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-primary/5"
                >
                  <Users className="w-5 h-5" />
                  <span>Cho Giáo viên</span>
                </Link>
                <Link
                  to="/students"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-6 py-2 rounded-md text-base font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-primary/5"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Cho Học sinh</span>
                </Link>
                <Link
                  to="/schools"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-6 py-2 rounded-md text-base font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-primary/5"
                >
                  <Building2 className="w-5 h-5" />
                  <span>Cho Trường học</span>
                </Link>
              </div>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === "/about"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span>Về chúng tôi</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === "/contact"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <span>Liên hệ</span>
              </Link>

              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Đăng nhập
                </Button>
                <Button variant="hero" className="w-full">
                  Dùng thử miễn phí
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;