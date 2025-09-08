import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Users, GraduationCap, Building2 } from "lucide-react";

const SolutionDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const solutions = [
    {
      name: "Cho Giáo viên",
      href: "/teachers",
      icon: Users,
      description: "Trợ giảng ảo thông minh"
    },
    {
      name: "Cho Học sinh", 
      href: "/students",
      icon: GraduationCap,
      description: "Bạn học ảo cá nhân hóa"
    },
    {
      name: "Cho Trường học",
      href: "/schools", 
      icon: Building2,
      description: "Giải pháp toàn diện"
    }
  ];

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        className="px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 text-muted-foreground hover:text-primary hover:bg-primary/5"
      >
        <Users className="w-4 h-4" />
        <span>Giải pháp</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-elegant z-50"
          onMouseEnter={() => setIsOpen(true)}
        >
          <div className="p-4 space-y-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={index}
                  to={solution.href}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {solution.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {solution.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionDropdown;