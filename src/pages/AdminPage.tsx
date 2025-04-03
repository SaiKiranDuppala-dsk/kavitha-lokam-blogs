
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import BlogPostForm from "@/components/admin/BlogPostForm";
import BlogPostsList from "@/components/admin/BlogPostsList";
import { BlogPost } from "@/types/blog";
import { getBlogPosts, getGenres } from "@/lib/data";
import { useToast } from "@/components/ui/use-toast";

const AdminPage = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>(getBlogPosts());
  const [currentPost, setCurrentPost] = useState<BlogPost | undefined>(undefined);
  const [openDialog, setOpenDialog] = useState(false);
  
  const handleSavePost = (postData: Partial<BlogPost>) => {
    // In a real app, this would send data to a backend API
    const genres = getGenres();
    const genre = genres.find(g => g.id === postData.genreId) || genres[0];
    
    if (currentPost) {
      // Update existing post
      const updatedPosts = posts.map(post => 
        post.id === currentPost.id 
          ? { 
              ...post, 
              ...postData, 
              genre,
              updatedAt: new Date().toISOString() 
            } 
          : post
      );
      
      setPosts(updatedPosts);
      toast({ title: "Post Updated", description: "The blog post has been successfully updated." });
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: postData.title || "Untitled",
        slug: postData.slug || "untitled",
        excerpt: postData.excerpt || "",
        content: postData.content || "",
        genre,
        coverImage: postData.coverImage || "/placeholder.svg",
        isFeatured: postData.isFeatured || false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setPosts([...posts, newPost]);
      toast({ title: "Post Created", description: "The new blog post has been successfully created." });
    }
    
    setOpenDialog(false);
    setCurrentPost(undefined);
  };
  
  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post);
    setOpenDialog(true);
  };
  
  const handleDeletePost = (postId: string) => {
    // In a real app, this would send a delete request to a backend API
    setPosts(posts.filter(post => post.id !== postId));
    toast({ title: "Post Deleted", description: "The blog post has been successfully deleted." });
  };
  
  const handleNewPost = () => {
    setCurrentPost(undefined);
    setOpenDialog(true);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
      </div>
      
      <Tabs defaultValue="posts">
        <TabsList>
          <TabsTrigger value="posts">Blog Posts</TabsTrigger>
          {/* Additional tabs like "Analytics", "Settings" could be added here */}
        </TabsList>
        
        <TabsContent value="posts" className="pt-6">
          <div className="flex justify-end mb-6">
            <Button onClick={handleNewPost}>
              Create New Post
            </Button>
          </div>
          
          <BlogPostsList 
            posts={posts} 
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
          />
        </TabsContent>
      </Tabs>
      
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{currentPost ? "Edit" : "Create"} Blog Post</DialogTitle>
          </DialogHeader>
          <BlogPostForm post={currentPost} onSave={handleSavePost} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPage;
