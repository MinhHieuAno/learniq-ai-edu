import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  BookOpen,
  Brain,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Trophy
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Phạm Minh Hiếu",
      role: "CEO & Co-founder",
      expertise: "Quản lý dự án, Chiến lược kinh doanh",
      icon: "👨‍💼",
      color: "text-primary"
    },
    {
      name: "Dương Minh Anh", 
      role: "CTO & Co-founder",
      expertise: "AI/ML, Kiến trúc hệ thống",
      icon: "👨‍💻",
      color: "text-accent"
    },
    {
      name: "Nguyễn Hồng Thắm",
      role: "Head of Education",
      expertise: "Sư phạm, Phát triển nội dung",
      icon: "👩‍🏫",
      color: "text-primary"
    },
    {
      name: "Võ Hoàng Tuấn",
      role: "Lead Developer",
      expertise: "Full-stack Development, DevOps",
      icon: "👨‍💻",
      color: "text-accent"
    },
    {
      name: "Lê Vũ Anh",
      role: "Product Manager",
      expertise: "UX/UI Design, Product Strategy",
      icon: "👨‍🎨",
      color: "text-primary"
    }
  ];

  const advisors = [
    {
      name: "TS. Huỳnh Nguyễn Thành Luân",
      role: "Cố vấn Công nghệ",
      expertise: "AI trong Giáo dục, Machine Learning",
      icon: "🎓"
    },
    {
      name: "ThS. Nguyễn Trung Kiệt",
      role: "Cố vấn Sư phạm",
      expertise: "Phương pháp giảng dạy, Đánh giá học tập",
      icon: "📚"
    },
    {
      name: "ThS. Trần Hữu Duật",
      role: "Cố vấn Kỹ thuật",
      expertise: "Hệ thống phân tán, Cloud Computing",
      icon: "⚡"
    }
  ];

  const achievements = [
    {
      title: "TEC2024 - Vào vòng Bán kết",
      description: "Cuộc thi Khởi nghiệp Đổi mới sáng tạo toàn quốc",
      icon: Trophy
    },
    {
      title: "1,000+ Giáo viên tin tưởng",
      description: "Đã có hơn 1,000 giáo viên sử dụng và đánh giá tích cực",
      icon: Users
    },
    {
      title: "50+ Trường học đối tác",
      description: "Phủ sóng từ Bắc đến Nam với nhiều loại hình trường học",
      icon: GraduationCap
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Sứ mệnh",
      content: "Dân chủ hóa việc tiếp cận giáo dục chất lượng cao thông qua công nghệ AI, giúp mọi học sinh có cơ hội phát triển tối đa tiềm năng của mình."
    },
    {
      icon: Eye,
      title: "Tầm nhìn", 
      content: "Trở thành nền tảng AI giáo dục hàng đầu Việt Nam, góp phần xây dựng một xã hội học tập suốt đời và phát triển bền vững."
    },
    {
      icon: Heart,
      title: "Giá trị cốt lõi",
      content: "Đặt con người làm trung tâm, cam kết chất lượng, đổi mới sáng tạo và trách nhiệm xã hội trong mọi hoạt động."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary">
              <BookOpen className="w-4 h-4 mr-2" />
              Về LearnIQ
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Đội ngũ đam mê</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                giáo dục & công nghệ
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chúng tôi là những người trẻ với sứ mệnh ứng dụng AI để cách mạng hóa giáo dục Việt Nam, 
              mang đến trải nghiệm học tập cá nhân hóa và hiệu quả cho mọi học sinh.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="space-y-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Đội ngũ sáng lập
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sự kết hợp hoàn hảo giữa chuyên môn CNTT, Sư phạm và Kinh doanh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-3xl">
                      {member.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {member.name}
                      </h3>
                      <p className={`font-medium ${member.color}`}>
                        {member.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {member.expertise}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Đội ngũ cố vấn chuyên môn
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Được hỗ trợ bởi các chuyên gia hàng đầu trong lĩnh vực AI và Giáo dục
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto flex items-center justify-center text-3xl">
                      {advisor.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {advisor.name}
                      </h3>
                      <p className="font-medium text-accent">
                        {advisor.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {advisor.expertise}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thành tựu & Giải thưởng
            </h2>
            <p className="text-xl text-muted-foreground">
              Những dấu mốc quan trọng trên hành trình phát triển
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-elegant bg-white/95">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-accent/10 text-accent">
                    <Heart className="w-4 h-4 mr-2" />
                    Cam kết xã hội
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-card-foreground">
                    Góp phần thực hiện SDG 4 - Giáo dục chất lượng
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    LearnIQ cam kết hỗ trợ các trường học vùng sâu vùng xa thông qua chương trình 
                    "AI cho mọi nhà" - cung cấp miễn phí công nghệ giáo dục cho các trường có hoàn cảnh khó khăn.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-card-foreground">50+ trường vùng cao được hỗ trợ miễn phí</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-card-foreground">5,000+ học sinh được hưởng lợi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-card-foreground">Đào tạo miễn phí cho 200+ giáo viên</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto flex items-center justify-center text-6xl mb-6">
                    🌱
                  </div>
                  <h4 className="text-2xl font-bold text-card-foreground mb-4">
                    Giáo dục bền vững
                  </h4>
                  <p className="text-muted-foreground">
                    Xây dựng tương lai tốt đẹp hơn thông qua giáo dục chất lượng cho tất cả
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Muốn tìm hiểu thêm về LearnIQ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và chia sẻ về hành trình xây dựng tương lai giáo dục Việt Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Mail className="w-5 h-5 mr-2" />
                Liên hệ với chúng tôi
              </Button>
              <Button variant="outline" size="xl">
                Theo dõi hành trình của LearnIQ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;