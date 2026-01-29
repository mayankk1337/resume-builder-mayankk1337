import { useSelector, useDispatch } from "react-redux";
import { next, back, saveAll } from "./redux/resumeSlice";

import Profile from "./pages/Profile";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import Final from "./pages/Final";

function App() {
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();

  const pages = [
    <Profile />,
    <Education />,
    <Skills />,
    <Projects />,
    <Social />,
    <Final />
  ];

  return (
  <div className="app-container">
    <h1>Resume Builder</h1>

    {pages[step]}

    <div className="nav-buttons">
      <button id="back" onClick={() => dispatch(back())}>
        Back
      </button>

      <button id="next" onClick={() => dispatch(next())}>
        Next
      </button>

      <button id="save" onClick={() => dispatch(saveAll())}>
        Save
      </button>
    </div>
  </div>
);
}

export default App;
