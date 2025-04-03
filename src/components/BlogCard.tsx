
import { BlogPost } from "@/types/blog";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <span className="bg-kavitha-light-purple text-kavitha-purple px-3 py-1 rounded-full text-xs font-medium">
            {post.genre.name}
          </span>
          <div className="flex items-center ml-auto text-muted-foreground text-xs">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-serif font-semibold mb-2 hover:text-kavitha-purple transition-colors">{post.title}</h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-kavitha-purple font-medium text-sm mt-auto flex items-center story-link self-start"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
