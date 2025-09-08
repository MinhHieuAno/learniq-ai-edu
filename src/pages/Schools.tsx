import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Calendar,
  Award,
  Target
} from "lucide-react";

const Schools = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Nâng cao chất lượng giáo dục",
      description: "Cải thiện hiệu quả giảng dạy và học tập với công nghệ AI tiên tiến"
    },
    {
      icon: Clock,
      title: "Giảm tải cho đội ngũ giáo viên",
      description: "Tự động hóa các công việc hành chính, giúp giáo viên tập trung vào giảng dạy"
    },
    {
      icon: Users,
      title: "Quản lý học sinh hiệu quả",
      description: "Theo dõi tiến độ, phân tích dữ liệu học tập một cách hệ thống"
    },
    {
      icon: Shield,
      title: "Đáp ứng chuyển đổi số",
      description: "Bắt kịp xu hướng công nghệ giáo dục, tuân thủ chính sách của Bộ GD&ĐT"
    }
  ];

  const pricingPlans = [
    {
      name: "Gói Cơ bản",
      price: "200,000đ",
      period: "/tháng/giáo viên",
      features: [
        "Trợ giảng ảo cơ bản",
        "Tạo đề kiểm tra",
        "Chấm bài tự động",
        "Hỗ trợ kỹ thuật",
        "Báo cáo cơ bản"
      ],
      popular: false
    },
    {
      name: "Gói Nâng cao",
      price: "350,000đ",
      period: "/tháng/giáo viên",
      features: [
        "Tất cả tính năng Cơ bản",
        "Bạn học ảo cho học sinh",
        "Phân tích chi tiết",
        "Tùy chỉnh nâng cao",
        "Đào tạo chuyên sâu",
        "Ưu tiên hỗ trợ"
      ],
      popular: true
    },
    {
      name: "Gói Cao cấp",
      price: "Liên hệ",
      period: "Báo giá theo quy mô",
      features: [
        "Tất cả tính năng Nâng cao",
        "Tích hợp hệ thống trường",
        "API riêng biệt",
        "Đào tạo tại chỗ",
        "Hỗ trợ 24/7",
        "Quản lý tài khoản riêng"
      ],
      popular: false
    }
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Khảo sát & Tư vấn",
      description: "Đánh giá nhu cầu và đề xuất giải pháp phù hợp"
    },
    {
      step: "02", 
      title: "Thiết lập hệ thống",
      description: "Cài đặt và cấu hình LearnIQ theo yêu cầu trường"
    },
    {
      step: "03",
      title: "Đào tạo sử dụng",
      description: "Đào tạo giáo viên và quản lý cách sử dụng hiệu quả"
    },
    {
      step: "04",
      title: "Triển khai thử nghiệm",
      description: "Run pilot với một số lớp để đánh giá hiệu quả"
    },
    {
      step: "05",
      title: "Vận hành toàn trường",
      description: "Mở rộng ra toàn trường với hỗ trợ liên tục"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary">
              <Building2 className="w-4 h-4 mr-2" />
              Giải pháp B2B
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              <span className="block text-foreground">Giải pháp chuyển đổi số</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                toàn diện
              </span>
              <span className="block text-foreground">cho Trường học & Trung tâm</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nâng cao chất lượng giáo dục, tối ưu hóa quy trình quản lý và tạo lợi thế cạnh tranh 
              với hệ sinh thái AI giáo dục thông minh LearnIQ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Calendar className="w-5 h-5 mr-2" />
                Yêu cầu Demo cho Trường
              </Button>
              <Button variant="outline" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Liên hệ Tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lợi ích tổng thể cho Nhà trường
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LearnIQ mang lại giá trị thiết thực cho toàn bộ hệ thống giáo dục của trường
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Các gói dịch vụ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lựa chọn gói phù hợp với quy mô và nhu cầu của trường
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-card hover:shadow-elegant transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-4 h-4 mr-1" />
                      Phổ biến nhất
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {plan.name}
                      </h3>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-primary">
                          {plan.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {plan.period}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      className="w-full" 
                      size="lg"
                    >
                      {plan.price === "Liên hệ" ? "Liên hệ báo giá" : "Chọn gói này"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quy trình triển khai
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              5 bước đơn giản để đưa LearnIQ vào hoạt động tại trường của bạn
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-accent/10 text-accent">
                    <Award className="w-4 h-4 mr-2" />
                    Case Study
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-card-foreground">
                    THCS Lê Quý Đôn - Thành công sau 3 tháng triển khai
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Trường THCS Lê Quý Đôn với 800 học sinh và 45 giáo viên đã triển khai LearnIQ 
                    và đạt được những kết quả ấn tượng trong việc nâng cao chất lượng giáo dục.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Target className="w-6 h-6 text-primary" />
                      <span className="text-card-foreground">
                        <strong>15%</strong> tăng tỷ lệ học sinh khá giỏi
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="w-6 h-6 text-accent" />
                      <span className="text-card-foreground">
                        <strong>30%</strong> tiết kiệm thời gian soạn bài của giáo viên
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Users className="w-6 h-6 text-primary" />
                      <span className="text-card-foreground">
                        <strong>95%</strong> giáo viên hài lòng với hệ thống
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                  <blockquote className="text-xl italic leading-relaxed mb-6">
                    "LearnIQ đã thay đổi cách chúng tôi tiếp cận giáo dục. 
                    Giáo viên có thêm thời gian tương tác với học sinh, 
                    còn học sinh thì học tập chủ động và hiệu quả hơn."
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      👔
                    </div>
                    <div>
                      <div className="font-semibold">ThS. Phạm Văn Đức</div>
                      <div className="opacity-90">Hiệu trưởng THCS Lê Quý Đôn</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sẵn sàng chuyển đổi số cho trường của bạn?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí và trải nghiệm demo LearnIQ 
              phù hợp với nhu cầu cụ thể của trường.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline-white" size="xl">
                <Calendar className="w-5 h-5 mr-2" />
                Đặt lịch Demo
              </Button>
              <Button variant="outline-white" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Gọi tư vấn: 0916 561 440
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;