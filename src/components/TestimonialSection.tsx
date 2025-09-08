import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Cô Nguyễn Thị Lan",
      role: "Giáo viên Tiếng Anh, THPT Nguyễn Du",
      content: "LearnIQ đã giúp tôi tiết kiệm 5 giờ mỗi tuần trong việc soạn bài và chấm kiểm tra. Tôi có thể tập trung nhiều hơn vào việc tương tác với học sinh.",
      rating: 5,
      image: "👩‍🏫"
    },
    {
      name: "Em Trần Minh Anh",
      role: "Học sinh lớp 10A1, THPT Chu Văn An", 
      content: "Bạn học ảo rất thú vị! Thay vì đưa đáp án ngay, bạn ấy luôn hỏi những câu giúp em tự tìm ra lời giải. Em không còn sợ môn Toán nữa!",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "ThS. Phạm Văn Đức",
      role: "Hiệu trưởng THCS Lê Quý Đôn",
      content: "Sau 3 tháng triển khai, tỷ lệ học sinh khá giỏi của trường tăng 15%. Giáo viên cảm thấy hài lòng hơn với công việc của mình.",
      rating: 5,
      image: "👔"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Lời chứng thực
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Người dùng nói gì về LearnIQ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hàng nghìn giáo viên và học sinh đã tin tưởng sử dụng LearnIQ để nâng cao chất lượng giáo dục
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-card-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,000+", label: "Giáo viên tin tưởng" },
              { number: "10,000+", label: "Học sinh sử dụng" },
              { number: "50+", label: "Trường học đối tác" },
              { number: "30%", label: "Tiết kiệm thời gian" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;