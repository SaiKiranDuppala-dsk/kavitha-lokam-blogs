
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Genre } from "@/types/blog";
import { slugify } from "@/lib/utils";

interface GenreFormProps {
  genre?: Genre;
  onSave: (genre: Partial<Genre>) => void;
}

const GenreForm = ({ genre, onSave }: GenreFormProps) => {
  const [formData, setFormData] = useState<Partial<Genre>>({
    name: genre?.name || "",
    slug: genre?.slug || "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-generate slug from name
    if (name === "name") {
      setFormData(prev => ({ ...prev, slug: slugify(value) }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Genre Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="submit">
          {genre ? "Update" : "Create"} Genre
        </Button>
      </div>
    </form>
  );
};

export default GenreForm;
