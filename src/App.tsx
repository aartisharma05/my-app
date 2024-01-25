import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ScheduleMail from "./components/ScheduleMail";
import ScheduleList from "./components/ScheduleList";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addschedule" element={<ScheduleMail />} />
        <Route path="/schedules" element={<ScheduleList />} />
      </Routes>
    </Router>
  );
}

export default App;
