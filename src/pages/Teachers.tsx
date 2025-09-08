import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  FileText, 
  MessageSquare, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Star
} from "lucide-react";
import teacherFeatureImage from "@/assets/teacher-ai-feature.jpg";

const Teachers = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Soạn giáo án thông minh",
      description: "AI đề xuất cấu trúc bài giảng từ tài liệu PDF, tiết kiệm hàng giờ soạn bài.",
      benefits: ["Tự động phân tích tài liệu", "Đề xuất hoạt động học tập", "Tùy chỉnh theo đối tượng học sinh"]
    },
    {
      icon: FileText,
      title: "Tạo đề kiểm tra nhanh chóng",
      description: "Tạo đề kiểm tra với các mức độ nhận biết, thông hiểu, vận dụng chỉ trong vài phút.",
      benefits: ["Đa dạng câu hỏi", "Tự động phân loại mức độ", "Ngân hàng câu hỏi phong phú"]
    },
    {
      icon: CheckCircle,
      title: "Chấm điểm & nhận xét thông minh",
      description: "AI học phong cách nhận xét của bạn để đưa ra phản hồi cá nhân hóa cho từng học sinh.",
      benefits: ["Nhận xét tự động", "Phong cách cá nhân hóa", "Theo dõi tiến độ học sinh"]
    },
    {
      icon: MessageSquare,
      title: "Trợ giảng thông minh",
      description: "Chatbot hỗ trợ trả lời câu hỏi về tình hình lớp học và đưa ra báo cáo tức thì.",
      benefits: ["Báo cáo tức thì", "Phân tích dữ liệu", "Gợi ý cải thiện"]
    }
  ];

  const stats = [
    { icon: Clock, value: "30%", label: "Tiết kiệm thời gian" },
    { icon: Users, value: "95%", label: "Giáo viên hài lòng" },
    { icon: TrendingUp, value: "40%", label: "Tăng hiệu quả giảng dạy" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary">
                  <Users className="w-4 h-4 mr-2" />
                  Dành cho Giáo viên
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="block text-foreground">Tập trung vào</span>
                  <span className="block bg-gradient-hero bg-clip-text text-transparent">
                    giảng dạy,
                  </span>
                  <span className="block text-foreground">để LearnIQ lo phần còn lại</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Trợ giảng ảo thông minh giúp tự động hóa các công việc hành chính, 
                  để bạn có thể dành thời gian cho việc thực sự quan trọng - giảng dạy và tương tác với học sinh.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  Đăng ký dùng thử miễn phí 30 ngày
                </Button>
                <Button variant="outline" size="xl">
                  Xem Demo trực tiếp
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={teacherFeatureImage}
                alt="Giáo viên sử dụng AI hỗ trợ"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tính năng "Trợ giảng ảo" 
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Giải pháp AI toàn diện giúp giáo viên tối ưu hóa quy trình giảng dạy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {feature.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-card-foreground leading-relaxed italic">
                  "LearnIQ đã giúp tôi tiết kiệm 5 giờ mỗi tuần trong việc soạn bài và chấm kiểm tra. 
                  Tôi có thể tập trung nhiều hơn vào việc tương tác với học sinh và cải thiện phương pháp giảng dạy."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    👩‍🏫
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-card-foreground text-lg">
                      Cô Nguyễn Thị Lan
                    </div>
                    <div className="text-muted-foreground">
                      Giáo viên Tiếng Anh, THPT Nguyễn Du
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
              Sẵn sàng trải nghiệm Trợ giảng ảo?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Đăng ký ngay để nhận 30 ngày dùng thử miễn phí và khám phá cách LearnIQ có thể thay đổi cách bạn giảng dạy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline-white" size="xl">
                Đăng ký dùng thử miễn phí
              </Button>
              <Button variant="outline-white" size="xl">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;