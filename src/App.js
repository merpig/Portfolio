import './App.css';
import projects from './projects';
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div className="App">
      <div className="App-header p-2">
        <h1 className="title-text main-title">Sasha's Portfolio</h1>
        <div className="row">
          <div className="col">
            <a href="https://github.com/merpig" target="_blank">
              <i className="fa fa-github" style={{ fontSize: "48px" }}></i>
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/alexandr-sasha-peters-8a2489168/" target="_blank">
              <i className="fa fa-linkedin" style={{ fontSize: "48px" }}></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container p-4">

        <div className="row about-me">
          <div className="col-12 col-sm-8 description">
            <p className="text">
              Hi I'm Sasha, a fullstack web developer with a Bachelors of Science in Computer Science
              from Sewanee, University of the South. I currently work as an instructional specialist
              with the 2U coding bootcamps at the University of North Carolina Charlotte (UNCC). I have
              a passion for design, problem solving, and building multi-layered applications.
            </p>
            {/* <button className="btn btn-custom">Projects</button> */}
          </div>
          <div className="header-image">
            <img src="./profile.png" alt="profile"></img>
            <div className="header-text text p-2">
              Sewanee '18
            </div>
          </div>
        </div>

        <div className="row mb-4">
          {projects.map(project => <ProjectCard project={project} />)}
        </div>

      </div>
      <div className="contact mt-4 pt-4">
        <h2 className='title-text contact-text text-center'>Contact Info</h2>
        <div className="row center p-0 py-4 w-100">
          <div className="col text-center contact-text">
            Sasha Peters
          </div>
          <div className="col text-center contact-text">
            <a href="https://github.com/merpig" target="_blank">
              <i className="fa fa-github mx-2" style={{ fontSize: "24px" }}></i>
            </a>
            <a href="https://www.linkedin.com/in/alexandr-sasha-peters-8a2489168/" target="_blank">
              <i className="fa fa-linkedin mx-2" style={{ fontSize: "24px" }}></i>
            </a>
          </div>
          <div className="col text-center contact-text">
            <a className="contact-text" target="_blank" href="mailto:peteram1@sewanee.edu">peteram1@sewanee.edu</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
