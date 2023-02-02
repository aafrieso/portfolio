import { useParams } from "react-router-dom"
import findProjects from "../utilities/findProjects"

function ProjectDetails() {
  const { projectDetails } = useParams()
  console.log(projectDetails);
  const project = findProjects(projectDetails)
  console.log(project);
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="project"/>
      <button>
        <a href={project.repoLink}>View the project code here</a>
      </button>
      <button>
        <a href={project.deploymentLink}>Check out the app</a>
      </button>
    </>
  )
}

export default ProjectDetails