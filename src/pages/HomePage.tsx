
import { getFeaturedBlogPosts, getBlogPosts } from "@/lib/data";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HomePage = () => {
  const featuredPosts = getFeaturedBlogPosts();
  const recentPosts = getBlogPosts().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }).slice(0, 6);
  
  const mainFeaturedPost = featuredPosts[0];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        {mainFeaturedPost && <FeaturedPost post={mainFeaturedPost} />}
      </section>
      
      <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md my-8 w-fit">
        <Avatar className="h-12 w-12 border-2 border-kavitha-purple">
          <AvatarImage src="/lovable-uploads/249c693c-de68-4f17-ae99-4bb5cdd2dcb2.png" alt="Sai Kiran Duppala" />
          <AvatarFallback>SKD</AvatarFallback>
        </Avatar>
        <span className="text-lg font-medium">Sai Kiran Duppala</span>
      </div>
      
      <section className="mt-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif font-bold">Recent Posts</h2>
          <Button asChild variant="outline">
            <Link to="/genres">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      
      <section className="mt-20 bg-kavitha-light-purple rounded-lg p-8 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Welcome to Kavitha Lokam</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Explore a world of poetry, stories, and literary reflections. Join me on this journey through words and emotions.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link to="/about">About Me</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
