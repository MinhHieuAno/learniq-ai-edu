import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Plus, 
  Minus, 
  Shield, 
  CreditCard, 
  Clock, 
  Phone,
  BookOpen,
  Users,
  Settings,
  MessageCircle,
  Calendar
} from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Bảo mật & Riêng tư",
      icon: Shield,
      color: "text-primary",
      questions: [
        {
          question: "LearnIQ bảo mật dữ liệu học sinh như thế nào?",
          answer: "LearnIQ tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật quốc tế ISO 27001 và GDPR. Tất cả dữ liệu được mã hóa end-to-end, lưu trữ trên server tại Việt Nam với hệ thống backup đa lớp. Chúng tôi cam kết không chia sẻ thông tin cá nhân với bên thứ ba và có chính sách riêng tư minh bạch."
        },
        {
          question: "Ai có thể truy cập vào dữ liệu học tập của học sinh?",
          answer: "Chỉ giáo viên được phân quyền và ban quản lý nhà trường mới có thể truy cập dữ liệu học tập. Học sinh và phụ huynh có quyền xem, chỉnh sửa và xóa dữ liệu cá nhân của mình bất cứ lúc nào thông qua tài khoản cá nhân."
        }
      ]
    },
    {
      title: "Chi phí & Thanh toán",
      icon: CreditCard,
      color: "text-accent",
      questions: [
        {
          question: "Chi phí cho một trường học có 500 học sinh là bao nhiêu?",
          answer: "Với 500 học sinh và khoảng 30 giáo viên, chi phí ước tính cho gói Nâng cao là 10.5 triệu đồng/tháng. Chúng tôi có chính sách giảm giá theo quy mô và các gói ưu đãi đặc biệt cho trường công lập. Liên hệ với chúng tôi để nhận báo giá chi tiết và tư vấn gói phù hợp nhất."
        },
        {
          question: "LearnIQ có gói miễn phí không?",
          answer: "Có, chúng tôi cung cấp gói dùng thử miễn phí 30 ngày với đầy đủ tính năng. Ngoài ra, còn có chương trình hỗ trợ miễn phí cho các trường vùng sâu vùng xa thông qua dự án 'AI cho mọi nhà'."
        },
        {
          question: "Các hình thức thanh toán được chấp nhận?",
          answer: "Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, ví điện tử (MoMo, ZaloPay) và thanh toán trực tiếp tại văn phòng. Hỗ trợ thanh toán theo tháng, quý hoặc năm với các mức chiết khấu hấp dẫn."
        }
      ]
    },
    {
      title: "Sử dụng & Tính năng",
      icon: BookOpen,
      color: "text-primary",
      questions: [
        {
          question: "Tôi có thể dùng thử sản phẩm trong bao lâu?",
          answer: "Bạn có thể dùng thử miễn phí trong 30 ngày với đầy đủ tính năng, không giới hạn số lượng học sinh. Không cần thẻ tín dụng để đăng ký dùng thử, và bạn có thể hủy bất cứ lúc nào mà không mất phí."
        },
        {
          question: "LearnIQ có tích hợp được với hệ thống LMS hiện tại không?",
          answer: "Có, LearnIQ hỗ trợ tích hợp với hầu hết các hệ thống LMS phổ biến như Moodle, Google Classroom, Microsoft Teams thông qua API. Đội ngũ kỹ thuật sẽ hỗ trợ quá trình tích hợp hoàn toàn miễn phí."
        },
        {
          question: "Trợ giảng ảo có thể soạn bài cho tất cả môn học không?",
          answer: "Hiện tại LearnIQ hỗ trợ tốt nhất cho các môn Toán, Văn, Tiếng Anh, Khoa học tự nhiên (Lý, Hóa, Sinh) và Khoa học xã hội. Chúng tôi đang mở rộng thêm các môn học khác và sẽ cập nhật liên tục."
        }
      ]
    },
    {
      title: "Hỗ trợ kỹ thuật",
      icon: Settings,
      color: "text-accent",
      questions: [
        {
          question: "Hỗ trợ kỹ thuật hoạt động vào khung giờ nào?",
          answer: "Đội ngũ hỗ trợ kỹ thuật làm việc từ 8:00 - 18:00 các ngày trong tuần và 8:00 - 12:00 thứ 7. Khách hàng gói Cao cấp được hỗ trợ 24/7. Ngoài ra, bạn có thể gửi email hoặc chat qua website bất cứ lúc nào, chúng tôi sẽ phản hồi trong vòng 2 giờ."
        },
        {
          question: "Nếu gặp sự cố kỹ thuật trong giờ dạy thì làm sao?",
          answer: "Chúng tôi có hotline hỗ trợ khẩn cấp 24/7 cho các sự cố trong giờ học. Thời gian phản hồi trung bình là dưới 5 phút. Ngoài ra, hệ thống có chế độ offline backup để đảm bảo việc dạy học không bị gián đoạn."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) => 
    category.questions.map((q, qIndex) => ({
      ...q,
      categoryIndex,
      globalIndex: categoryIndex * 10 + qIndex,
      category: category.title,
      icon: category.icon,
      color: category.color
    }))
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary">
              <HelpCircle className="w-4 h-4 mr-2" />
              Câu hỏi thường gặp
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Giải đáp</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                mọi thắc mắc
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tìm câu trả lời nhanh chóng cho những câu hỏi phổ biến về LearnIQ. 
              Nếu không tìm thấy câu trả lời, đừng ngại liên hệ với chúng tôi.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat với chúng tôi
              </Button>
              <Button variant="outline" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Gọi hotline: 0916 561 440
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {faqCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 ${category.color} bg-current/10 rounded-xl mx-auto flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="font-semibold text-card-foreground">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.questions.length} câu hỏi
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {allQuestions.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openItems.includes(index);
              
              return (
                <Card key={index} className="border-0 shadow-card">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-6 text-left flex items-start justify-between hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`w-8 h-8 ${item.color} bg-current/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2 text-xs">
                            {item.category}
                          </Badge>
                          <h3 className="text-lg font-semibold text-card-foreground">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <Plus className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="ml-12 pt-4 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-card-foreground">
                    Vẫn có thắc mắc?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn. 
                    Liên hệ ngay để được tư vấn chi tiết và giải đáp mọi câu hỏi.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Live Chat</h4>
                      <p className="text-sm text-muted-foreground">Trả lời trong 5 phút</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Hotline</h4>
                      <p className="text-sm text-muted-foreground">0916 561 440</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">Tư vấn 1:1</h4>
                      <p className="text-sm text-muted-foreground">Đặt lịch miễn phí</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="hero" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Bắt đầu chat
                  </Button>
                  <Button variant="outline" size="lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Đặt lịch tư vấn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;