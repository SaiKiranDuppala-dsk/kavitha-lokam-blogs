
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BlogPostForm from "@/components/admin/BlogPostForm";
import BlogPostsList from "@/components/admin/BlogPostsList";
import GenreForm from "@/components/admin/GenreForm";
import GenresList from "@/components/admin/GenresList";
import { BlogPost, Genre } from "@/types/blog";
import { getBlogPosts, getGenres, updateBlogPosts, updateGenres } from "@/lib/data";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";

const AdminPage = () => {
  const { toast } = useToast();
  const { logout } = useAuth();
  
  const [posts, setPosts] = useState<BlogPost[]>(getBlogPosts());
  const [genres, setGenres] = useState<Genre[]>(getGenres());
  
  const [currentPost, setCurrentPost] = useState<BlogPost | undefined>(undefined);
  const [currentGenre, setCurrentGenre] = useState<Genre | undefined>(undefined);
  
  const [openPostDialog, setOpenPostDialog] = useState(false);
  const [openGenreDialog, setOpenGenreDialog] = useState(false);
  
  const handleSavePost = (postData: Partial<BlogPost>) => {
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
      updateBlogPosts(updatedPosts);
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
      
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      updateBlogPosts(updatedPosts);
      toast({ title: "Post Created", description: "The new blog post has been successfully created." });
    }
    
    setOpenPostDialog(false);
    setCurrentPost(undefined);
  };
  
  const handleSaveGenre = (genreData: Partial<Genre>) => {
    if (currentGenre) {
      // Update existing genre
      const updatedGenres = genres.map(genre => 
        genre.id === currentGenre.id 
          ? { ...genre, ...genreData } 
          : genre
      );
      
      setGenres(updatedGenres);
      updateGenres(updatedGenres);
      toast({ title: "Genre Updated", description: "The genre has been successfully updated." });
    } else {
      // Create new genre
      const newGenre: Genre = {
        id: Date.now().toString(),
        name: genreData.name || "Untitled",
        slug: genreData.slug || "untitled"
      };
      
      const updatedGenres = [...genres, newGenre];
      setGenres(updatedGenres);
      updateGenres(updatedGenres);
      toast({ title: "Genre Created", description: "The new genre has been successfully created." });
    }
    
    setOpenGenreDialog(false);
    setCurrentGenre(undefined);
  };
  
  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post);
    setOpenPostDialog(true);
  };
  
  const handleDeletePost = (postId: string) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    updateBlogPosts(updatedPosts);
    toast({ title: "Post Deleted", description: "The blog post has been successfully deleted." });
  };
  
  const handleNewPost = () => {
    setCurrentPost(undefined);
    setOpenPostDialog(true);
  };
  
  const handleEditGenre = (genre: Genre) => {
    setCurrentGenre(genre);
    setOpenGenreDialog(true);
  };
  
  const handleDeleteGenre = (genreId: string) => {
    const updatedGenres = genres.filter(genre => genre.id !== genreId);
    setGenres(updatedGenres);
    updateGenres(updatedGenres);
    toast({ title: "Genre Deleted", description: "The genre has been successfully deleted." });
  };
  
  const handleNewGenre = () => {
    setCurrentGenre(undefined);
    setOpenGenreDialog(true);
  };
  
  const handleLogout = () => {
    logout();
    toast({ title: "Logged Out", description: "You have been successfully logged out." });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOut size={18} />
          Logout
        </Button>
      </div>
      
      <Tabs defaultValue="posts">
        <TabsList>
          <TabsTrigger value="posts">Blog Posts</TabsTrigger>
          <TabsTrigger value="genres">Genres</TabsTrigger>
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
        
        <TabsContent value="genres" className="pt-6">
          <div className="flex justify-end mb-6">
            <Button onClick={handleNewGenre}>
              Create New Genre
            </Button>
          </div>
          
          <GenresList 
            genres={genres} 
            onEdit={handleEditGenre}
            onDelete={handleDeleteGenre}
          />
        </TabsContent>
      </Tabs>
      
      <Dialog open={openPostDialog} onOpenChange={setOpenPostDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{currentPost ? "Edit" : "Create"} Blog Post</DialogTitle>
            <DialogDescription>
              Fill in the details for your blog post. Fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          <BlogPostForm post={currentPost} onSave={handleSavePost} />
        </DialogContent>
      </Dialog>
      
      <Dialog open={openGenreDialog} onOpenChange={setOpenGenreDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentGenre ? "Edit" : "Create"} Genre</DialogTitle>
            <DialogDescription>
              Enter a name for your genre. A slug will be generated automatically.
            </DialogDescription>
          </DialogHeader>
          <GenreForm genre={currentGenre} onSave={handleSaveGenre} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPage;
