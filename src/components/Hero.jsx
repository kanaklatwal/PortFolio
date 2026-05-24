export default function Hero() {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
  
        <div className="text-center max-w-4xl">
  
          <p className="text-gray-400 mb-3">
            Welcome to my portfolio
          </p>
  
          <h1 className="text-6xl md:text-7xl font-bold">
            Hi, I'm{" "} <span className=" bg-gradient-to-r  from-blue-500 to-cyan-400
            text-transparent
            bg-clip-text">
           Kanak
           </span> 👋
         </h1>
          <h2 className="text-xl md:text-2xl mt-6 text-gray-300">
            MCA Candidate (2026) | Java Full Stack Developer | Python | ML Enthusiast
          </h2>
  
          <p className="mt-8 text-gray-400 leading-8 max-w-2xl mx-auto">
            Full-stack developer skilled in Java, Python, React.js and Machine Learning.
            Passionate about building scalable applications and solving real-world problems.
          </p>
  
          <div className="mt-10 flex flex-wrap justify-center gap-4">
  
            <a
              href="https://github.com/kanaklatwal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
            >
              GitHub
            </a>
  
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-xl border border-gray-500 hover:bg-white hover:text-black transition duration-300"
            >
              Download Resume
            </a>
  
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl border border-gray-500 hover:bg-white hover:text-black transition duration-300"
            >
              View Projects
            </a>
  
          </div>
  
        </div>
  
      </section>
    );
  }