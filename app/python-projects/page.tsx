

import PythonProjectCard from '../components/PythonProjectCard'

const pythonProjects = [
  {
    title: "Data Sweeper",
    description: "Clean and preprocess your CSV files for ML and analytics using this intuitive Streamlit app.",
    image: "/images/datasweeper.png",
    link: "https://data-sweeper-app-fileconverter.streamlit.app/",
  },
  {
    title: "DocuWiz",
    description: "Smart document parser that extracts, converts, and analyzes files effortlessly.",
    image: "/images/docuwiz.png",
    link: "https://docuwiz-shezafatima.streamlit.app/",
  },
  {
    title: "Password Strength Meter",
    description: "Test your password strength instantly and learn how to make it stronger.",
    image: "/images/passwordmeter.png",
    link: "https://password-strength-meter-shezafatima.streamlit.app/",
  },
  {
    title: "Personal Library Manager",
    description: "Manage, search, and track your books in a clean, easy-to-use digital library.",
    image: "/images/librarymanager.png",
    link: "https://personal-library-manager-app-shezafatima.streamlit.app/",
  },
  {
    title: "Personality Predictor",
    description: "Predict a person's personality type using simple psychological inputs and AI.",
    image: "/images/personalitypredictor.png",
    link: "https://personality-predictor-predictpersonality.streamlit.app/",
  },
  {
    title: "Secure Data Encryption System",
    description: "Encrypt and decrypt sensitive data with advanced security algorithms.",
    image: "/images/encryptionsystem.png",
    link: "https://secure-data-encryption-system-shezafatima.streamlit.app/",
  },
  {
    title: "Unit Converter",
    description: "Convert units for length, weight, temperature, and more—all in one place.",
    image: "/images/unitconverter.png",
    link: "https://unitconverter-shezafatima.streamlit.app/",
  },
]

export default function PythonProjects() {
  return (
    <section className="text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col mb-12">
          <div className="h-1 bg-gradient-to-r from-[#8c4ac5] via-[#5dc0e4] to-[#d13ab8] rounded overflow-hidden" />

         
        
        </div>
             <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-wide mb-4">Python Projects</h1>
          <p className="text-lg text-gray-600">
      Explore a selection of my Python projects, from beginner-friendly tools to functional applications. Each project reflects my journey and growth as a developer.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {pythonProjects.map((project, index) => (
            <PythonProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
