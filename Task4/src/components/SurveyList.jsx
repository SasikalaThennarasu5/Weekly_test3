    import React from "react";
import { mockSurveys } from "../data/mockSurveys";
import { useNavigate } from "react-router-dom";
import "./SurveyList.css";

const SurveyList = () => {
  const navigate = useNavigate();

  return (
    <div className="survey-grid">
      {mockSurveys.map((survey) => (
        <div className="survey-card" key={survey.id}>
          <h3>{survey.title}</h3>
          <p>{survey.description}</p>
          <div className="survey-buttons">
            <button className="edit-btn" onClick={() => navigate(`/surveys/${survey.id}/edit`)}>
              Edit
            </button>
            <button className="view-btn" onClick={() => navigate(`/surveys/${survey.id}/view`)}>
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurveyList;
