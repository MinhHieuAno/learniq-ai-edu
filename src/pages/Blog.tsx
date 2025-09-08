import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  Brain, 
  TrendingUp,
  Clock,
  Eye
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Làm thế nào để sử dụng AI mà không làm mất đi tư duy phản biện của học sinh?",
    excerpt: "Khám phá cách ứng dụng AI trong giáo dục một cách thông minh, giúp học sinh phát triển tư duy độc lập thay vì lệ thuộc vào công nghệ...",
    author: "Nguyễn Hồng Thắm",
    date: "15 tháng 12, 2024",
    readTime: "8 phút đọc",
    views: "2.3k",
    category: "AI & Giáo dục",
    image: "🧠",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 cách 'Trợ giảng ảo' giúp giáo viên tiết kiệm 10 giờ mỗi tuần",
      excerpt: "Tìm hiểu các tính năng cụ thể của LearnIQ và cách chúng giúp tối ưu hóa quy trình giảng dạy hàng ngày...",
      author: "Phạm Minh Hiếu",
      date: "12 tháng 12, 2024",
      readTime: "6 phút đọc",
      views: "1.8k",
      category: "Giáo viên",
      image: "⏰"
    },
    {
      id: 3,
      title: "Xu hướng EdTech 2025: Cá nhân hóa sẽ là chìa khóa",
      excerpt: "Phân tích các xu hướng công nghệ giáo dục mới nhất và tại sao cá nhân hóa trở thành yếu tố quan trọng nhất...",
      author: "Dương Minh Anh",
      date: "10 tháng 12, 2024",
      readTime: "7 phút đọc",
      views: "2.1k",
      category: "Xu hướng",
      image: "🚀"
    },
    {
      id: 4,
      title: "Câu chuyện thành công: THCS Lê Quý Đôn và hành trình chuyển đổi số",
      excerpt: "Tìm hiểu cách một trường THCS đã áp dụng LearnIQ để cải thiện 15% kết quả học tập của học sinh...",
      author: "Lê Vũ Anh",
      date: "8 tháng 12, 2024",
      readTime: "5 phút đọc",
      views: "1.5k",
      category: "Case Study",
      image: "🏫"
    },
    {
      id: 5,
      title: "Tâm lý học sinh Gen Z và cách AI có thể hỗ trợ tốt hơn",
      excerpt: "Khám phá đặc điểm tâm lý của thế hệ Gen Z và cách thiết kế công cụ AI phù hợp với cách học của họ...",
      author: "Nguyễn Hồng Thắm",
      date: "5 tháng 12, 2024",
      readTime: "9 phút đọc",
      views: "1.9k",
      category: "Tâm lý học",
      image: "🎯"
    },
    {
      id: 6,
      title: "Hướng dẫn tích hợp LearnIQ với hệ thống quản lý học tập hiện tại",
      excerpt: "Bước đầu chi tiết về cách tích hợp LearnIQ vào LMS có sẵn của trường một cách mượt mà...",
      author: "Võ Hoàng Tuấn",
      date: "3 tháng 12, 2024",
      readTime: "12 phút đọc",
      views: "987",
      category: "Kỹ thuật",
      image: "⚙️"
    }
  ];

  const categories = [
    { name: "Tất cả", count: 25, active: true },
    { name: "AI & Giáo dục", count: 8 },
    { name: "Giáo viên", count: 6 },
    { name: "Học sinh", count: 4 },
    { name: "Xu hướng", count: 3 },
    { name: "Case Study", count: 4 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog LearnIQ
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block text-foreground">Khám phá</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                tương lai giáo dục
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cập nhật xu hướng EdTech mới nhất, chia sẻ kinh nghiệm thực tế và 
              khám phá cách AI đang thay đổi bộ mặt giáo dục Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Bài viết nổi bật</h2>
          </div>

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-primary flex items-center justify-center text-8xl p-16">
                  {featuredPost.image}
                </div>
                
                <div className="p-12 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-accent/10 text-accent">
                        {featuredPost.category}
                      </Badge>
                      <Badge variant="secondary">Nổi bật</Badge>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-card-foreground leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="hero" className="group">
                    Đọc bài viết
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "ghost"}
                size="sm"
                className="rounded-full"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-subtle flex items-center justify-center text-4xl border-b">
                    {post.image}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <Badge className="bg-primary/10 text-primary text-xs">
                        {post.category}
                      </Badge>
                      
                      <h3 className="text-lg font-semibold text-card-foreground leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              Xem thêm bài viết
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Đừng bỏ lỡ những cập nhật mới nhất
            </h2>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Đăng ký nhận bản tin để cập nhật xu hướng EdTech, tips giảng dạy hiệu quả 
              và những câu chuyện thành công từ cộng đồng LearnIQ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-4 py-3 rounded-lg text-foreground bg-white/95 border-0 focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button variant="outline-white" size="lg">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;