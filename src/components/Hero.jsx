export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-4xl">

      <p className="text-blue-400 mb-3">
          Full Stack Developer • Machine Learning • Problem Solver
      </p>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight">

          Hi, I'm{" "}

          <span
            className="
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
            text-transparent
            bg-clip-text
          "
          >
            Kanak
          </span>

          <span className="animate-pulse ml-2">
            👋
          </span>

        </h1>

        <h2 className="text-xl md:text-2xl mt-6 text-gray-300">
          MCA Candidate (2026) | Java Full Stack Developer | Python | ML Enthusiast
        </h2>

        <p className="mt-8 text-gray-400 leading-8 max-w-2xl mx-auto">

          Aspiring Java Full Stack Developer with experience in
          MERN, Python and Machine Learning projects.
          Passionate about building impactful applications
          and solving real-world problems.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/kanaklatwal"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-7 py-3
            rounded-xl
            border border-gray-500

            hover:bg-white
            hover:text-black
            hover:scale-105
            hover:shadow-lg

            transition-all duration-300
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kanak-latwal-14b289323/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-7 py-3
            rounded-xl
            border border-gray-500

            hover:bg-blue-500
            hover:border-blue-500
            hover:scale-105
            hover:shadow-lg

            transition-all duration-300
            "
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="
            px-7 py-3
            rounded-xl
            border border-gray-500

            hover:bg-white
            hover:text-black
            hover:scale-105
            hover:shadow-lg

            transition-all duration-300
            "
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="
            px-7 py-3
            rounded-xl
            border border-gray-500

            hover:bg-white
            hover:text-black
            hover:scale-105
            hover:shadow-lg

            transition-all duration-300
            "
          >
            View Projects
          </a>

        </div>

      </div>

    </section>
  );
}