import projects from "../pages/data/projects";
import ProjectReview from "./ProjectReview";

function ProjectList() {
  return (
    <>
      <div>
        <h2>Projects</h2>
        <ul>
          <ProjectReview projects={projects} />
        </ul>
      </div>
    </>
  )
}

export default ProjectList