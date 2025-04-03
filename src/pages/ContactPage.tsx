
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif font-bold mb-4">Contact Me</h1>
        <p className="text-xl text-gray-600">Get in touch with your thoughts and inquiries</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-kavitha-light-purple p-8 rounded-lg">
          <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-1">Phone</h3>
              <p className="text-gray-700">+91 7995038113</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-1">Social Media</h3>
              <p className="text-gray-700 mb-1">
                Instagram: <a href="https://www.instagram.com/kavitha_lokam_dsk/" target="_blank" rel="noopener noreferrer" className="text-kavitha-purple hover:underline">@kavitha_lokam_dsk</a>
              </p>
              <p className="text-gray-700">
                LinkedIn: <a href="https://www.linkedin.com/in/sai-kiran-duppala/" target="_blank" rel="noopener noreferrer" className="text-kavitha-purple hover:underline">Sai Kiran Duppala</a>
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-1">Preferred Contact Method</h3>
              <p className="text-gray-700">
                For the fastest response, please reach out via Instagram DM or use the contact form.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this regarding?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
