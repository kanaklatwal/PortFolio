export default function Contact() {
  return (
    <section className="bg-gray-950 text-white py-20 text-center">

      <h1 className="text-5xl font-bold mb-8">
        Contact Me
      </h1>

      <p className="text-lg">
        📧 kanaklatwal@gmail.com
      </p>

      <div className="flex justify-center gap-4 mt-6">

        <a
          href="https://github.com/kanaklatwal"
          target="_blank"
          rel="noopener noreferrer"
          className="
          border border-gray-700
          px-5 py-2
          rounded-xl
          hover:bg-white
          hover:text-black
          transition duration-300
          "
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kanak-latwal-14b289323/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          border border-gray-700
          px-5 py-2
          rounded-xl
          hover:bg-blue-500
          hover:border-blue-500
          transition duration-300
          "
        >
          LinkedIn
        </a>

      </div>

      <p className="mt-6 text-lg">
        📍 Dehradun, Uttarakhand
      </p>

    </section>
  )
}