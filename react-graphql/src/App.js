import './App.css';
import Characterslist from './pages/CharactersList';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/welcome" element={<Characterslist/>} />
        </Routes>         
    </div>
  );
}

export default App;
