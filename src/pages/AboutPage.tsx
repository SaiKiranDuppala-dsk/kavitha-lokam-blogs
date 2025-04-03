
const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif font-bold mb-4">About Kavitha Lokam</h1>
        <p className="text-xl text-gray-600">A literary journey by Sai Kiran Duppala</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img 
            src="/placeholder.svg" 
            alt="Sai Kiran Duppala" 
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-2">Who Am I?</h2>
            <p className="text-gray-700">
              I'm Sai Kiran Duppala, a passionate writer and literature enthusiast. Through Kavitha Lokam, 
              I share my love for poetry, storytelling, and literary exploration.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-2">My Journey</h2>
            <p className="text-gray-700">
              My journey in literature began early in life, fueled by a deep appreciation for the 
              power of words. Over the years, I've explored various forms of writing, from poetry to essays, 
              always seeking to understand and express the human experience.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-2">Kavitha Lokam</h2>
            <p className="text-gray-700">
              "Kavitha Lokam" translates to "World of Poetry." This blog is my humble attempt to create a
              space where words transcend their conventional meanings and become vehicles for deeper understanding, 
              emotional connection, and artistic expression.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-kavitha-light-purple rounded-lg p-8">
        <h2 className="text-2xl font-serif font-semibold mb-4 text-center">Connect With Me</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <a 
            href="https://www.instagram.com/kavitha_lokam_dsk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-6 py-3 rounded-full shadow hover:shadow-md transition-shadow text-center"
          >
            Instagram: @kavitha_lokam_dsk
          </a>
          <a 
            href="https://www.linkedin.com/in/sai-kiran-duppala/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-6 py-3 rounded-full shadow hover:shadow-md transition-shadow text-center"
          >
            LinkedIn: Sai Kiran Duppala
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
