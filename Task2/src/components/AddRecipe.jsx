import React, { useState } from "react";
import axios from "../api/axiosConfig";
import withValidation from "../hoc/withValidation";

const AddRecipe = ({ isValid }) => {
  const [form, setForm] = useState({ title: "", body: "" });
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid(form)) return alert("Please fill all fields.");

    try {
      const res = await axios.post("/posts", form);
      setSuccess(res.data);
    } catch (err) {
      alert("Error posting recipe.");
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <br />
        <textarea
          placeholder="Recipe Description"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {success && <p>Recipe added with ID: {success.id}</p>}
    </div>
  );
};

export default withValidation(AddRecipe);
