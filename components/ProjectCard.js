

function ProjectCard({title,link,body,skills}) {

   
  return (
  <a target="_blank" rel="noopener noreferrer" href={link} >
    <div className="projectcard w-64 h-64 flex justify-between flex-col gap-3 relative p-4 pt-3">
      <header className="flex flex-col gap-2">
        <svg
          style={{ width: "1.25rem",marginLeft:"auto" }}
          className="w-5 ml-auto float-right"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-external-link"
        >
          <title>External Link</title>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        <h3>{title} </h3>
        <p>
          {body}
        </p>
      </header>
      <div className="skills flex gap-2 justify-between px-2">
        {skills.map((skill,index)=>{
            return(
                <small key={index} className={`${index}`}>{skill}</small>
            )
        })}
      </div>
    </div>
    </a>
  );
}

export default ProjectCard;
