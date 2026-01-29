import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill } from "../redux/resumeSlice";

export default function Skills() {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills);
  const [skill, setSkill] = useState("");

  return (
    <div>
      <h2>Skills</h2>

      <div>
        <label>Skill</label><br />
        <input
          name="skill"
          placeholder="Enter Skill"
          onChange={(e) => setSkill(e.target.value)}
        />
      </div>

      <br />

      <button
        id="add_skill"
        onClick={() => dispatch(addSkill(skill))}
      >
        Add Skill
      </button>

      <hr />

      {skills.map((s, i) => (
        <div key={i}>
          {s}
          <button
            id="delete_skill"
            onClick={() => dispatch(deleteSkill(i))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
