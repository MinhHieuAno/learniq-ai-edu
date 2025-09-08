import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Brain, 
  MessageCircle, 
  Target, 
  Sparkles, 
  CheckCircle,
  Heart,
  Trophy,
  Play
} from "lucide-react";
import studentFeatureImage from "@/assets/student-ai-feature.jpg";

const Students = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Giải đáp thắc mắc thông minh",
      description: "Bạn học ảo không đưa đáp án ngay, mà đặt câu hỏi gợi mở, dẫn dắt bạn tự tìm ra câu trả lời.",
      highlight: "Phát triển tư duy độc lập",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Củng cố kiến thức cá nhân hóa",
      description: "Hệ thống phát hiện 'lỗ hổng kiến thức' và đề xuất bài tập phù hợp để lấp đầy.",
      highlight: "Học tập hiệu quả hơn",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "Luyện tập tư duy phản biện",
      description: "Phương pháp học tập giúp bạn không chỉ ghi nhớ mà còn hiểu sâu và vận dụng linh hoạt.",
      highlight: "Tư duy sáng tạo",
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Định hướng lộ trình học tập",
      description: "AI phân tích năng lực và sở thích để gợi ý lộ trình học tập và định hướng nghề nghiệp phù hợp.",
      highlight: "Sắp ra mắt",
      color: "text-accent"
    }
  ];

  const benefits = [
    "Không còn sợ hỏi bài",
    "Học tập chủ động hơn", 
    "Tự tin thể hiện ý kiến",
    "Kết quả học tập cải thiện",
    "Phát triển tư duy logic",
    "Chuẩn bị tốt cho tương lai"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Dành cho Học sinh
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="block text-foreground">Người bạn đồng hành</span>
                  <span className="block bg-gradient-hero bg-clip-text text-transparent">
                    thông minh,
                  </span>
                  <span className="block text-foreground">luôn sẵn sàng giúp bạn</span>
                  <span className="block text-foreground">chinh phục tri thức!</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Bạn học ảo của LearnIQ không chỉ giải đáp thắc mắc mà còn dẫn dắt tư duy, 
                  giúp bạn phát triển khả năng tự học và tư duy độc lập.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Bắt đầu học thử miễn phí
                </Button>
                <Button variant="outline" size="xl">
                  <Play className="w-5 h-5 mr-2" />
                  Xem video demo
                </Button>
              </div>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={studentFeatureImage}
                alt="Học sinh học tập với AI"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tính năng "Bạn học ảo"
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trải nghiệm học tập hoàn toàn mới với AI thông minh và thân thiện
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${feature.color} bg-current/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon className={`w-6 h-6 ${feature.color}`} />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">
                            {feature.title}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {feature.highlight}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Xem Bạn học ảo hoạt động
            </h2>
            <p className="text-xl text-muted-foreground">
              Video demo tương tác thực tế giữa học sinh và AI
            </p>
          </div>

          <Card className="border-0 shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-hero flex items-center justify-center text-white">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold">Demo: Học Toán với Bạn học ảo</h3>
                  <p className="text-lg opacity-90">Thời lượng: 2 phút 30 giây</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-elegant bg-gradient-subtle">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                
                <blockquote className="text-2xl text-card-foreground leading-relaxed italic">
                  "Từ ngày có Bạn học ảo, em không còn sợ môn Toán nữa! 
                  Bạn ấy luôn kiên nhẫn và giúp em hiểu bài thay vì chỉ cho đáp án."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    👨‍🎓
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-card-foreground text-lg">
                      Em Trần Minh Anh
                    </div>
                    <div className="text-muted-foreground">
                      Học sinh lớp 10A1, THPT Chu Văn An
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Lợi ích khi học cùng LearnIQ
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-card">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-card-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bắt đầu hành trình học tập thú vị!
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Tham gia cùng hàng nghìn học sinh đã chọn LearnIQ để cải thiện kết quả học tập và phát triển tư duy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline-white" size="xl">
                <Heart className="w-5 h-5 mr-2" />
                Học thử miễn phí ngay
              </Button>
              <Button variant="outline-white" size="xl">
                Tải ứng dụng di động
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;