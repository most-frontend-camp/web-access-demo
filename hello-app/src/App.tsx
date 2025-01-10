import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./input.css";
import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import NoPage from "./pages/NoPage";
import TeamPage from "./pages/TeamPage";
import AdminPage from "./pages/AdminPage";
import FormPage from "./pages/FormPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonPage from "./pages/PokemonPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="form/:id" element={<PokemonPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
