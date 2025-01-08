import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./input.css";
import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import NoPage from "./pages/NoPage";
import TeamPage from "./pages/TeamPage";
import AdminPage from "./pages/AdminPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
