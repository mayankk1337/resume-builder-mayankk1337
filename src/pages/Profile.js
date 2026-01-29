import { useSelector, useDispatch } from "react-redux";
import { saveProfile } from "../redux/resumeSlice";
import { useState, useEffect } from "react";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [form, setForm] = useState(profile);

  useEffect(() => {
    setForm(profile);
  }, [profile]);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    dispatch(saveProfile(updated));
  };

  // 👇 IMAGE HANDLER
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updated = { ...form, image: reader.result };
      setForm(updated);
      dispatch(saveProfile(updated));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Profile</h2>

      {/* IMAGE UPLOAD */}
      <div>
        <label>Profile Image</label><br />
        <input type="file" accept="image/*" onChange={handleImage} />
      </div>

      {form.image && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={form.image}
            alt="Profile Preview"
            width="120"
            style={{ borderRadius: "6px" }}
          />
        </div>
      )}

      <br />

      <div>
        <label>First Name</label><br />
        <input
          name="fname"
          value={form.fname}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Last Name</label><br />
        <input
          name="lname"
          value={form.lname}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Phone</label><br />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Address</label><br />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Website</label><br />
        <input
          name="url"
          value={form.url}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
