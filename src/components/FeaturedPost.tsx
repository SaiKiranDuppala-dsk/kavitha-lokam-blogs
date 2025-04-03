
import { BlogPost } from "@/types/blog";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-kavitha-purple to-purple-900 text-white h-[400px] md:h-[500px] animate-fade-in">
      <div className="absolute inset-0 opacity-20">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
        <div className="flex items-center mb-3">
          <span className="bg-white text-kavitha-purple px-3 py-1 rounded-full text-xs font-medium">
            {post.genre.name}
          </span>
          <div className="flex items-center ml-4 text-white/80 text-sm">
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 hover:text-kavitha-peach transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-white/80 mb-6 md:text-lg max-w-2xl line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link
          to={`/blog/${post.slug}`}
          className="bg-white text-kavitha-purple px-5 py-2 rounded-full font-medium text-sm hover:bg-kavitha-peach transition-colors inline-flex items-center self-start"
        >
          Read Featured Post
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
