import { useSelector, useDispatch } from "react-redux";
import { resetResume, setStep } from "../redux/resumeSlice";

export default function Final() {
  const resume = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="final-actions">
        <button onClick={() => window.print()}>Download</button>
        <button onClick={() => dispatch(setStep(0))}>Edit</button>
        <button onClick={() => dispatch(resetResume())}>Reset</button>
      </div>

      <div className="resume">
        <div className="resume-header">
          <img
            src={resume.profile.image}
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />

          <h2>
            {resume.profile.fname} {resume.profile.lname}
          </h2>

          <p>{resume.profile.phone}</p>
          <p>{resume.profile.address}</p>
          <p>{resume.profile.url}</p>
        </div>

        <div className="resume-body">
          <div className="resume-left">
            {resume.skills.length > 0 && (
              <div className="resume-section">
                <h3>SKILLS</h3>
                <ul>
                  {resume.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {resume.social.length > 0 && (
              <div className="resume-section">
                <h3>SOCIAL</h3>
                <ul>
                  {resume.social.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="resume-right">
            {resume.education.length > 0 && (
              <div className="resume-section">
                <h3>EDUCATION</h3>
                {resume.education.map((e, i) => (
                  <p key={i}>
                    <b>{e.courseName}</b>
                    <br />
                    {e.college} ({e.completionYear}) – {e.percentage}%
                  </p>
                ))}
              </div>
            )}

            {resume.projects.length > 0 && (
              <div className="resume-section">
                <h3>PROJECTS</h3>
                {resume.projects.map((p, i) => (
                  <div key={i}>
                    <p>
                      <b>{p.projectName}</b>
                    </p>
                    <p>{p.techStack}</p>
                    <p>{p.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
