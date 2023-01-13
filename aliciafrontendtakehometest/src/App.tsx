import "./App.css";
// import CharactersForm from "./components/CharactersForm/CharactersForm";
import AdminPage from "./pages/Admin";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<CharacterDetails />} />
      </Routes>
    </main>
  );
}

export default App;
