import React, { useState } from "react";
import axiosConfig from "../axiosConfig";
import ImageUploadModal from "../portals/ImageUploadModal";

const AddRecipe = ({ validate }) => {
  const [formData, setFormData] = useState({ title: "", ingredients: "" });
  const [showModal, setShowModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(formData)) {
      alert("Please fill in all required fields.");
      return;
    }

    axiosConfig.post("/posts", formData) // Replace with /recipes
      .then(() => alert("Recipe submitted!"))
      .catch(console.error);
  };

  const handleImageUpload = () => {
    const fakeUrl = "https://via.placeholder.com/150";
    setPreviewUrl(fakeUrl);
    setShowModal(true);
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Recipe Title" onChange={handleChange} />
        <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} />
        <br />
        <button type="button" onClick={handleImageUpload}>Upload Image</button>
        <button type="submit">Submit</button>
      </form>
      {showModal && <ImageUploadModal previewUrl={previewUrl} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AddRecipe;
