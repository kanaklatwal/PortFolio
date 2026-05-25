export default function Projects() {
  const projects = [
    {
      title: "Scam Detection System",
      tech: "Python • React • Node.js • ML",
      desc: "ML based email & URL fraud detection system with real-time analysis.",
      images: ["/scam_detection1.png", "/scam_detection2.png"],
      github: "https://github.com/kanaklatwal/Scam-Detector",
      live: "https://scam-detector-1-nelr.onrender.com/"
    },

    {
      title: "StreamVerse",
      tech: "React • Node • TMDB API",
      desc: "Netflix clone with authentication and movie search.",
      images: ["/streamverse1.png", "/streamverse2.png"],
      github: "https://github.com/kanaklatwal/Streamverse",
      live: "https://streamverse-eta-sandy.vercel.app/"
    },

    {
      title: "Drone Detection",
      tech: "Python • OpenCV • AI",
      desc: "AI-powered surveillance and drone tracking system.",
      images: ["/drone_output1.png", "/drone_output2.png"],
      github: "https://github.com/kanaklatwal/Drone-Detection-ML",
      live: ""
    }
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-24 px-8"
    >
      <h1 className="text-5xl font-bold text-center mb-14">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((p, index) => (

          <div
            key={index}
            className="
            bg-black
            p-7
            rounded-3xl
            shadow-lg
            border border-gray-800
            hover:-translate-y-2
            hover:scale-105
            transition duration-300"
          >

            <div className="relative group overflow-hidden rounded-2xl">

              <img
                src={p.images[0]}
                alt={p.title}
                className="w-full h-48 object-cover"
              />

              {p.images[1] && (
                <img
                  src={p.images[1]}
                  alt={p.title}
                  className="
                  absolute top-0 left-0
                  w-full h-48 object-cover
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                  "
                />
              )}

            </div>

            <h2 className="text-2xl font-bold mt-5">
              {p.title}
            </h2>

            <p className="text-blue-400 mt-3">
              {p.tech}
            </p>

            <p className="text-gray-400 mt-5">
              {p.desc}
            </p>

            <div className="mt-6 flex gap-3">

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-xl"
                >
                  Live Demo
                </a>
              )}

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="border px-5 py-2 rounded-xl"
              >
                GitHub
              </a>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}