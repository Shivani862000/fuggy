import React from "react";

const About = () => {
  return (
    <div className="container-max my-[150px] mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-8">
       
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            I am Shivani Verma - Frontend Developer
          </h1>
          <p className="text-gray-600 mb-8">2 years of experience</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="list-disc pl-8">
              <li>
                Healthy Planet Website{" "}
                <a href=" https://www.hp.school/" className="text-blue-500">
                  🔗
                </a>
                <p>
                  Used tools like Next.js, HTML5, Sass, JS, and GraphQL for a
                  sustainable, responsive, and headless WordPress CMS site.
                  Employed Git for collaboration, Vercel for hosting, and
                  testing for solid functionality. Gained skills in full-stack
                  development, Git, and Vercel deployment, Performance
                  optimization, Mailer.
                </p>
              </li>
              <li className=" text-red-600 font-bold my-4 ">
                
                Swiggy Clone
              
                </li>
                <h2 className="text-2xl font-bold my-4 ">
                  Embarking on My Swiggy Clone Journey
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Crafting a Swiggy clone has been a thrilling expedition,
                  marked by the adoption of cutting-edge technologies and best
                  practices. From leveraging the power of React.js for dynamic
                  UI to styling prowess with Tailwind CSS, and state management
                  using React Redux, it's been a remarkable learning curve.
                  Here's a glimpse of my achievements:
                </p>
                <div className="mb-8">
                  <p className="text-2xl font-semibold mb-4 text-blue-600">
                    Technologies and Techniques Mastered:
                  </p>
                  <ul className="list-disc ml-8 text-gray-700">
                    <li className="mb-2">
                      React.js for crafting dynamic and responsive user
                      interfaces.
                    </li>
                    <li className="mb-2">
                      Tailwind CSS for sleek styling and efficient design.
                    </li>
                    <li className="mb-2">
                      Git for seamless version control and collaborative
                      development.
                    </li>
                    <li className="mb-2">
                      Unit and integration testing with Jest for robust code
                      quality.
                    </li>
                    <li className="mb-2">
                      Live API integration to ensure real-time data updates.
                    </li>
                    <li className="mb-2">
                      React Router DOM for seamless navigation.
                    </li>
                    <li className="mb-2">
                      Deployment strategies for hosting the application
                      flawlessly.
                    </li>
                    <li className="mb-2">
                      Crafting custom hooks for reusable logic, such as data
                      fetching.
                    </li>
                    <li className="mb-2">
                      Implementing higher-order components for enhanced code
                      reusability.
                    </li>
                    <li className="mb-2">
                      Creating a user-friendly search functionality for an
                      enriched experience.
                    </li>
                    <li className="mb-2">
                      Efficiently filtering data for optimal content
                      organization.
                    </li>
                    <li className="mb-2">
                      Enhanced styling and animations for a delightful user
                      interface.
                    </li>
                  </ul>
                </div>
             
              <li>
                Yugantar{" "}
                <a href="https://yugantar.film/" className="text-blue-500">
                  🔗
                </a>{" "}
                & HSB{" "}
                <a href="https://hsb.icdlabs.in/" className="text-blue-500">
                  🔗
                </a>
                <p>
                  Single-Handed Project, WordPress Custom Theme, HTML, Sass,
                  PHP, jQuery, Responsive, Testing.
                </p>
              </li>
              <li>
                Prodapt{" "}
                <a href="https://prod.icdlabs.in/" className="text-blue-500">
                  🔗
                </a>
                <p>
                  Pure Website HTML5, Liquid JS, Sass, JavaScript, Eleventy
                  Static Site Generator.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div>
              <h3 className="text-xl font-bold mb-2">
                ICD, Saket — Frontend Developer
              </h3>
              <p className="text-gray-600 mb-2">Feb 2022 - Present</p>
              <p>
                Diversified my skills across various technologies—Shopify &
                WordPress custom themes and full-stack web applications with
                CMS. This broad experience enhances adaptability and proficiency
                in embracing new technologies.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">
                Brand Samosa, Noida-13 — Intern Web Developer
              </h3>
              <p className="text-gray-600 mb-2">Oct 2021 - Dec 2021</p>
              <p>
                Worked with HTML, CSS, and JavaScript. My proficiency extends to
                hosting and optimizing websites, refining both technical skills
                and practical insights into efficient website management and
                optimization strategies.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
