
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPostBySlug } from "@/lib/data";
import { Calendar, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!post) {
      navigate("/not-found");
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article>
        <header className="mb-8">
          <div className="mb-4 flex items-center">
            <span className="bg-kavitha-light-purple text-kavitha-purple px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Tag size={16} className="mr-1" />
              {post.genre.name}
            </span>
            <div className="ml-4 text-gray-500 flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-4">{post.title}</h1>
          
          <p className="text-xl text-gray-600">{post.excerpt}</p>
        </header>
        
        <div className="mb-10 h-[300px] md:h-[400px] overflow-hidden rounded-lg">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      
      <div className="mt-10 pt-6 border-t border-gray-200">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
        >
          Back to Posts
        </Button>
      </div>
    </div>
  );
};

export default BlogPostPage;
