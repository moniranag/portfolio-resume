import React from "react";

export default function PortfolioResume() {
  const skills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "ReactJS (Learning)",
    "Bootstrap",
    "MySQL",
    "Git & VS Code",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-8 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text drop-shadow-md">
            Monisha Rana
          </h1>
          <p className="text-lg text-gray-600">
            Frontend Developer | JavaScript & React Enthusiast
          </p>
          <p className="text-sm">
            📍 Hapur, Uttar Pradesh | 📞 +91 7678353581 | 📧
            monirana0138@gmail.com
          </p>
        </div>

        <div className="text-center mt-2">
          <a
            href="/Monisha_Rana_Resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            📄 Download Resume (PDF)
          </a>
        </div>

        <div className="h-px bg-gray-300 my-4"></div>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="h-px bg-gray-300 my-4"></div>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Projects
          </h2>
          <div className="space-y-4">
            <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-1">
                Responsive E-Commerce UI
              </h3>
              <p className="text-sm text-gray-600">
                Built with HTML, CSS, JavaScript. Front-end shopping UI with
                cart simulation.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-1">
                Daily Expense Tracker
              </h3>
              <p className="text-sm text-gray-600">
                Responsive app using JS and MySQL for secure expense tracking.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition-all">
              <h3 className="font-semibold text-lg mb-1">
                Portfolio Website (WIP)
              </h3>
              <p className="text-sm text-gray-600">
                Modern layout showcasing projects, skills, and resume using
                React.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-300 my-4"></div>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Internship Experience
          </h2>
          <div>
            <h3 className="font-bold">APPWARS Technology, Delhi</h3>
            <p className="text-sm italic">
              Frontend Intern | Mar 2023 – Jul 2023
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Built responsive layouts with HTML5, CSS3, Bootstrap5</li>
              <li>Improved UI of e-commerce modules</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Accuratics Software, UP</h3>
            <p className="text-sm italic">
              Web Development Intern | Nov 2022 – May 2023
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Built UI modules using JavaScript</li>
              <li>Participated in Agile team stand-ups</li>
            </ul>
          </div>
        </section>

        <div className="h-px bg-gray-300 my-4"></div>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Education
          </h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              <strong>B.Tech CSE</strong>, Shiva Group of Institutions, H.P. –
              81.6% (2019–2022)
            </li>
            <li>
              <strong>Diploma</strong>, Govt. Polytechnic for Women, Panchkula –
              75.62% (2016–2019)
            </li>
            <li>
              <strong>10th (CBSE)</strong>, DAV Public School, Narela – 70%
              (2015)
            </li>
          </ul>
        </section>

        <div className="h-px bg-gray-300 my-4"></div>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Selected from 1000+ candidates by Solitaire Infosys after 3
              interview rounds
            </li>
            <li>Coordinated IIT Delhi (Rendezvous) event</li>
          </ul>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          Built with 💻 using React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
