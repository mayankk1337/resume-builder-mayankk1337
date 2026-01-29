import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSocial } from "../redux/resumeSlice";

export default function Social() {
  const dispatch = useDispatch();
  const social = useSelector((state) => state.social);
  const [link, setLink] = useState("");

  return (
    <div>
      <h2>Social Media</h2>

      <div>
        <label>Social Link</label><br />
        <input
          name="Social"
          placeholder="Social Media URL"
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <br />

      <button
        id="add_social"
        onClick={() => dispatch(addSocial(link))}
      >
        Add Social
      </button>

      <hr />

      {social.map((s, i) => (
        <div key={i}>{s}</div>
      ))}
    </div>
  );
}
