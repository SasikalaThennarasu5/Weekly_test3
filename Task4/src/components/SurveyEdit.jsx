// src/components/SurveyEdit.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockSurveys } from "../data/mockSurveys";
import LivePreview from "./LivePreview";
import ReactDOM from "react-dom";

const SurveyEdit = () => {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const found = mockSurveys.find((s) => s.id === id);
    setSurvey(found);
  }, [id]);

  if (!survey) return <p>Survey not found</p>;

  return (
    <div>
      <h2>Edit: {survey.title}</h2>
      {survey.questions.map((q) => (
        <div key={q.id}>
          <label>{q.label}</label>
          <input type="text" placeholder="Edit question..." />
        </div>
      ))}
      <button onClick={() => setShowPreview(true)}>Live Preview</button>

      {showPreview &&
        ReactDOM.createPortal(
          <LivePreview survey={survey} onClose={() => setShowPreview(false)} />,
          document.getElementById("modal-root")
        )}
    </div>
  );
};

export default SurveyEdit;
