export default function Navbar() {
    return (
      <nav className="
      fixed top-0 w-full z-50
      bg-black/70 backdrop-blur-md
      text-white px-10 py-5
      flex justify-between items-center">
  
        <h1 className="text-2xl font-bold text-blue-500">
          Kanak
        </h1>
  
        <div className="flex gap-8">
  
          <a
            href="#"
            className="hover:text-blue-500 transition"
          >
            Home
          </a>
  
          <a
            href="#skills"
            className="hover:text-blue-500 transition"
          >
            Skills
          </a>
  
          <a
            href="#projects"
            className="hover:text-blue-500 transition"
          >
            
            Projects
          </a>
  
          <a
            href="https://github.com/kanaklatwal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
          href="https://www.linkedin.com/in/kanak-latwal-14b289323/"
          target="_blank"
           rel="noopener noreferrer"
           className="hover:text-blue-500 transition"
           >
           LinkedIn
          </a>
        </div>
  
      </nav>
    )
  }