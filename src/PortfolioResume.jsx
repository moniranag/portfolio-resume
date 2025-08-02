import React from "react";

export default function PortfolioResume() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Monisha Rana</h1>
          <p className="text-lg text-gray-600">
            Frontend Developer | JavaScript & React Enthusiast
          </p>
          <p className="text-sm">
            📍 Hapur, Uttar Pradesh | 📞 +91 7678353581 | 📧
            monirana0138@gmail.com
          </p>
        </div>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-1">
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ReactJS (Learning)</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
            <li>Git & VS Code</li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Projects
          </h2>
          <div className="space-y-2">
            <div>
              <h3 className="font-bold">Responsive E-Commerce UI</h3>
              <p>
                Built with HTML, CSS, JavaScript. Front-end shopping UI with
                cart simulation.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Daily Expense Tracker</h3>
              <p>
                Responsive app using JS and MySQL for secure expense tracking.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Portfolio Website (WIP)</h3>
              <p>
                Modern layout showcasing projects, skills, and resume using
                React.
              </p>
            </div>
          </div>
        </section>

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
            <ul className="list-disc list-inside">
              <li>Built responsive layouts with HTML5, CSS3, Bootstrap5</li>
              <li>Improved UI of e-commerce modules</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mt-2">Accuratics Software, UP</h3>
            <p className="text-sm italic">
              Web Development Intern | Nov 2022 – May 2023
            </p>
            <ul className="list-disc list-inside">
              <li>Built UI modules using JavaScript</li>
              <li>Participated in Agile team stand-ups</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Education
          </h2>
          <ul className="list-disc list-inside">
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

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 mb-2">
            Achievements
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Selected from 1000+ candidates by Solitaire Infosys after 3
              interview rounds
            </li>
            <li>Coordinated IIT Delhi (Rendezvous) event</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-10">
          Built with 💻 using React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
