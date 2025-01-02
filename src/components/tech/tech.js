import React from "react";
import "./tech.css"

const TechStack = () => {
  const techs = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"},  
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/76x76.png" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ];

  return (
    <div className="container text-center my-5 " id="tech">
      <h2 className="fw-bold text-white">My Tech Stack</h2>
      <p className="text-white">Technologies I've been working with recently</p>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 justify-content-center mt-4">
        {techs.map((tech, index) => (
          <div className="col d-flex flex-column align-items-center" key={index}>
            <img
              src={tech.icon}
              alt={tech.name}
              className="img-fluid"
              style={{ width: "60px", height: "60px" }}
            />
            <p className="mt-2 text-light">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
