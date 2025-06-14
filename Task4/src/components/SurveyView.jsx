// src/components/SurveyView.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { mockSurveys } from "../data/mockSurveys";

const SurveyView = () => {
  const { id } = useParams();
  const survey = mockSurveys.find((s) => s.id === id);

  if (!survey) return <p>Survey not found</p>;

  return (
    <div>
      <h2>{survey.title}</h2>
      {survey.questions.map((q) => (
        <div key={q.id}>
          <label>{q.label}</label>
          <input type="text" disabled />
        </div>
      ))}
    </div>
  );
};

export default SurveyView;
