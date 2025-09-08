import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Linkedin,
  Youtube,
  Users,
  Building2,
  GraduationCap
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Cảm ơn bạn đã liên hệ!",
      description: "Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "support@learniq.edu.vn",
      description: "Gửi email cho chúng tôi bất cứ lúc nào",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Hotline",
      details: "0916 561 440",
      description: "Hỗ trợ từ 8:00 - 18:00 các ngày trong tuần",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Trò chuyện trực tiếp",
      description: "Phản hồi nhanh trong 5 phút",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      details: "T2-T6: 8:00-18:00, T7: 8:00-12:00",
      description: "Hỗ trợ 24/7 cho khách hàng gói Cao cấp",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      color: "text-blue-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "#",
      color: "text-blue-700"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      color: "text-red-600"
    }
  ];

  const contactReasons = [
    {
      icon: Building2,
      title: "Trường học muốn triển khai",
      description: "Tư vấn giải pháp cho toàn trường"
    },
    {
      icon: Users,
      title: "Giáo viên cá nhân",
      description: "Dùng thử và hỗ trợ sử dụng"
    },
    {
      icon: GraduationCap,
      title: "Học sinh & Phụ huynh",
      description: "Tìm hiểu Bạn học ảo"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary">
              <MessageCircle className="w-4 h-4 mr-2" />
              Liên hệ với chúng tôi
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Sẵn sàng</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                hỗ trợ bạn
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chúng tôi luôn lắng nghe và sẵn sàng giải đáp mọi thắc mắc của bạn về LearnIQ. 
              Liên hệ ngay để được tư vấn miễn phí!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Bạn muốn tìm hiểu về
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-card-foreground">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-card-foreground">
                      Gửi tin nhắn cho chúng tôi
                    </h3>
                    <p className="text-muted-foreground">
                      Điền thông tin và chúng tôi sẽ liên hệ lại trong vòng 24 giờ
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nguyễn Văn A"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0916 561 440"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Bạn là</Label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Chọn vai trò</option>
                          <option value="teacher">Giáo viên</option>
                          <option value="principal">Hiệu trưởng/Quản lý</option>
                          <option value="student">Học sinh</option>
                          <option value="parent">Phụ huynh</option>
                          <option value="other">Khác</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Trường/Tổ chức</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="THPT Nguyễn Du"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Lời nhắn *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tôi muốn tìm hiểu về..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Gửi tin nhắn
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Thông tin liên hệ
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color} bg-current/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-foreground">
                            {info.title}
                          </h4>
                          <p className="text-foreground font-medium">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-card-foreground">
                      Theo dõi chúng tôi
                    </h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.url}
                            className={`w-10 h-10 ${social.color} bg-current/10 rounded-lg flex items-center justify-center hover:bg-current/20 transition-colors`}
                            aria-label={social.name}
                          >
                            <Icon className={`w-5 h-5 ${social.color}`} />
                          </a>
                        );
                      })}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Cập nhật tin tức và tips giáo dục hàng ngày
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">
                  Hoặc liên hệ nhanh
                </h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Bắt đầu Live Chat
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Phone className="w-5 h-5 mr-3" />
                    Gọi ngay: 0916 561 440
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Mail className="w-5 h-5 mr-3" />
                    Email: support@learniq.edu.vn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info (if needed) */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-elegant bg-gradient-subtle">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Văn phòng LearnIQ
                  </h3>
                  <p className="text-muted-foreground">
                    Tầng 5, Tòa nhà Innovation Hub<br />
                    Số 123, Đường Công nghệ cao, Quận 9<br />
                    TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>

                <Button variant="outline" size="lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  Xem bản đồ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;