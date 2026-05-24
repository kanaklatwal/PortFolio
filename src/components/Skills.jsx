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
      id = "skills"
      className="bg-black text-white py-20">
  
        <h1 className="text-4xl font-bold text-center mb-12">
          Skills
        </h1>
  
        <div className="flex flex-wrap justify-center gap-5 px-10">
  
          {skills.map((skill,index)=>(
  
            <div
              key={index}
              className="
               border border-gray-700
               px-6 py-4 rounded-2xl
              hover:scale-110
            hover:border-blue-500
              transition duration-300">
              {skill}
            </div>
  
          ))}
  
        </div>
  
      </section>
    )
  }