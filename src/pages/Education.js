import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "../redux/resumeSlice";

export default function Education() {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education);

  const [edu, setEdu] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: ""
  });

  return (
    <div>
      <h2>Education</h2>

      <div>
        <label>Course Name</label><br />
        <input
          name="courseName"
          placeholder="Course Name"
          onChange={(e) => setEdu({ ...edu, courseName: e.target.value })}
        />
      </div>

      <br />

      <div>
        <label>Completion Year</label><br />
        <input
          name="completionYear"
          placeholder="Completion Year"
          onChange={(e) => setEdu({ ...edu, completionYear: e.target.value })}
        />
      </div>

      <br />

      <div>
        <label>College</label><br />
        <input
          name="college"
          placeholder="College"
          onChange={(e) => setEdu({ ...edu, college: e.target.value })}
        />
      </div>

      <br />

      <div>
        <label>Percentage</label><br />
        <input
          name="percentage"
          placeholder="Percentage"
          onChange={(e) => setEdu({ ...edu, percentage: e.target.value })}
        />
      </div>

      <br />

      <button
        id="add_education"
        onClick={() => dispatch(addEducation(edu))}
      >
        Add Education
      </button>

      <hr />

      {education.map((e, i) => (
        <div key={i}>
          {e.courseName} ({e.completionYear})
          <button
            id="delete"
            onClick={() => dispatch(deleteEducation(i))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
