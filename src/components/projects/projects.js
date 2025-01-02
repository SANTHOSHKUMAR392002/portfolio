import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "My project revolves around building a dynamic and visually appealing web application using HTML, CSS, and Bootstrap. The goal was to create a responsive website that not only functions well across all devices but also offers an intuitive and engaging experience for users.",
      techStack: "HTML, CSS, BOOTSTRAP",
      previewLink: "#",
      codeLink: "#",
      image: require("./html.jpg"),
      link:"https://santhoshkumar392002.github.io/Html_Css/"
    },
    {
      title: "Project 2",
      description:
        "Django's authentication system provides everything needed to handle user authentication out of the box, including features like password hashing, session management, and user authentication checks. I aimed to focus on the front-end user experience while ensuring that the back-end remained secure and efficient.",
      techStack: "HTML,CSS,JavaScript,Django",
      previewLink: "#",
      codeLink: "#",
      image:require("./django.jpg"),
      link:"https://github.com/SANTHOSHKUMAR392002/Django_Login_Project/tree/main/first_project"
    },
    {
      title: "Project 3",
      description: "Developed dynamic components to manage user and schedule data.Ensured clean and reusable code using React’s best practices.Integrated Bootstrap and Tailwind CSS for consistent and attractive styling.Collaborated with team members to test and debug the application for real-world use.",
      techStack: "Technology Used: React.js ,Bootstrap",
      previewLink: "#",
      codeLink: "#",
      image: require("./Intern.png"), 
      link:"https://github.com/SANTHOSHKUMAR392002/driving-school-app"
    }
  ];

  return (
    <div className="container my-5" id="projects">
      <h2 className="fw-bold text-center text-white">Projects</h2>
      <p className="text-center text-white">Things I've built so far</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-4">
        {projects.map((project, index) => (
          <div className="col" key={index}>
            <a href={project.link} >
            <div className="card h-100 project-card shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top project-image"
              />
              <div className="card-body text-white">
                <h5 className="card-title  text-decoration-none">{project.title}</h5>
                <p className="card-text  text-decoration-none">{project.description}</p>
                <p className="card-text  text-decoration-none">
                  <small className="text-black">Tech stack: {project.techStack}</small>
                </p>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
