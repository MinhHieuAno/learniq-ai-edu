import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Brain, Clock } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                AI Giáo dục Thông minh
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Giải phóng giáo viên</span>
                <span className="block text-foreground">khỏi gánh nặng</span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  hành chính
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                LearnIQ - Hệ sinh thái AI giáo dục thông minh với "Trợ giảng ảo" cho giáo viên 
                và "Bạn học ảo" cho học sinh, cá nhân hóa sâu theo từng cá nhân.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <BookOpen className="w-5 h-5 mr-2" />
                Dùng thử cho Trường học
              </Button>
              
              <Button variant="outline" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Xem Demo
              </Button>
            </div>

            {/* Secondary CTAs */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button variant="ghost" className="justify-start text-left p-4 h-auto">
                <Users className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <div className="font-medium">Trải nghiệm</div>
                  <div className="text-sm text-muted-foreground">Bạn học ảo</div>
                </div>
              </Button>
              
              <Button variant="ghost" className="justify-start text-left p-4 h-auto">
                <Clock className="w-5 h-5 mr-3 text-accent" />
                <div>
                  <div className="font-medium">Tìm hiểu thêm</div>
                  <div className="text-sm text-muted-foreground">Về LearnIQ</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="LearnIQ AI Education Platform"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-20 lg:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-muted-foreground mb-4">
              Tại sao chọn LearnIQ?
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Tiết kiệm 30%",
                subtitle: "thời gian soạn giảng",
                color: "text-primary"
              },
              {
                icon: Brain,
                title: "Cá nhân hóa",
                subtitle: "lộ trình học tập",
                color: "text-accent"
              },
              {
                icon: BookOpen,
                title: "Chấm bài &",
                subtitle: "nhận xét thông minh",
                color: "text-primary"
              },
              {
                icon: Users,
                title: "Phát triển",
                subtitle: "tư duy phản biện",
                color: "text-accent"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center space-y-3 p-6 rounded-xl hover:bg-card hover:shadow-card transition-all duration-300">
                  <div className={`w-12 h-12 ${benefit.color} bg-current/10 rounded-xl mx-auto flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{benefit.title}</div>
                    <div className="text-sm text-muted-foreground">{benefit.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;