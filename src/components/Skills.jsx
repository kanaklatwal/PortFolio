export default function Skills() {

  const skills = [
    "Java",
    "Python",
    "Machine Learning",
    "React.js",
    "Node.js",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Git",
    "GitHub",
    "Postman",
    "DSA"
  ]

  return (
    <section
      id="skills"
      className="bg-black text-white py-24"
    >

      <h1 className="text-5xl font-bold text-center mb-14">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-10">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="
            border border-gray-700
            px-7 py-4
            rounded-2xl
            bg-gray-950
            cursor-pointer

            hover:scale-110
            hover:border-blue-500
            hover:bg-blue-500
            hover:text-white
            hover:shadow-lg

            transition-all duration-300
            "
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  )
}