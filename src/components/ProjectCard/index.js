function ProjectCard({ project }) {
    return <>
        <div className="col-12 col-md-2">

        </div>
        <div className="col-12 col-md-8 card-wrapper">
            <div className="project-card p-3">
                <h5 className=" mb-0 project-title">{project.title}</h5>
                <p className='text'>
                    {project.description}
                </p>
                <div className="row card-body m-1">
                    <div className="col-sm-6 col-12 panel-left">
                        <img src={project.imageSource} alt={project.title} className="card-img"></img>
                    </div>
                    <div className="col-sm-6 col-12 panel-right pt-2">
                        <pre>
                            <code className="text">
                                {
                                    `{
  technologies: [
${project.technologies.map((t,i)=>(i>0?"\n":"")+"\t"+t)}
  ]
}`
                                }
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    {project.repository&&<a className="btn btn-custom me-2" target="_blank" rel="noreferrer" href={project.repository}>Repo</a>}
                    {project.liveLink&&<a className="btn btn-custom" target="_blank" rel="noreferrer" href={project.liveLink}>Live</a>}
                </div>
            </div>
        </div>
        <div className="col-12 col-md-2">

        </div>
    </>
}

export default ProjectCard;