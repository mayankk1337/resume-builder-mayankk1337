import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "../redux/resumeSlice";

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const [proj, setProj] = useState({
    projectName: "",
    techStack: "",
    description: ""
  });

  return (
    <div>
      <h2>Projects</h2>

      <div>
        <label>Project Name</label><br />
        <input
          name="projectName"
          placeholder="Project Name"
          onChange={(e) =>
            setProj({ ...proj, projectName: e.target.value })
          }
        />
      </div>

      <br />

      <div>
        <label>Tech Stack</label><br />
        <input
          name="techStack"
          placeholder="Tech Stack"
          onChange={(e) =>
            setProj({ ...proj, techStack: e.target.value })
          }
        />
      </div>

      <br />

      <div>
        <label>Description</label><br />
        <input
          name="description"
          placeholder="Description"
          onChange={(e) =>
            setProj({ ...proj, description: e.target.value })
          }
        />
      </div>

      <br />

      <button
        id="add_project"
        onClick={() => dispatch(addProject(proj))}
      >
        Add Project
      </button>

      <hr />

      {projects.map((p, i) => (
        <div key={i}>
          {p.projectName}
          <button
            id="delete"
            onClick={() => dispatch(deleteProject(i))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
