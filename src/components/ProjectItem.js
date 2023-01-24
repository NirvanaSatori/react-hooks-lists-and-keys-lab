import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologyLists = technologies.map(technology=>
  <span key={technology}>{technology}</span>)

  return (
    <div key={name} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyLists}
        
      </div>
    </div>
  );
}

export default ProjectItem;
