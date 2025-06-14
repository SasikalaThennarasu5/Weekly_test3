import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SurveyList from "./components/SurveyList";
import SurveyEdit from "./components/SurveyEdit";
import SurveyView from "./components/SurveyView";
import withAutoSave from "./hoc/withAutoSave";
import { AuthProvider } from "./context/AuthContext";

const AutoSavingSurveyEdit = withAutoSave(SurveyEdit);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surveys" element={<SurveyList />} />
          <Route path="/surveys/:id/edit" element={<AutoSavingSurveyEdit />} />
          <Route path="/surveys/:id/view" element={<SurveyView />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
