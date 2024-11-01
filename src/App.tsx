import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StartPage from "./components/StartPage";
import QuizWrapper from "./components/QuizWrapper";
import SettingsPage from "./components/SettingsPage";
import { questions as allQuestions } from "./data/questions";
import settingsIcon from "./assets/setting.png"; // Importiere das Settings-Icon
import { useParams } from "react-router-dom";

const App: React.FC = () => {
  const [colors, setColors] = useState({
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#CCCCCC",
    quaternary: "#EEEEEE",
  });

  return (
    <Router>
      <div className="relative">
        {/* Settings Button */}
        <Link to="/settings" className="absolute top-4 right-4">
          <img src={settingsIcon} alt="Settings" className="w-8 h-8" />
        </Link>

        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/settings"
            element={<SettingsPage colors={colors} setColors={setColors} />}
          />
          <Route path="/game/:mode" element={<Game colors={colors} />} />
        </Routes>
      </div>
    </Router>
  );
};

// Hier definieren wir die Props für die Game-Komponente
interface GameProps {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
}

const Game: React.FC<GameProps> = ({ colors }) => {
  const { mode } = useParams<{ mode: string }>();

  if (!mode) {
    return <div>Mode not found</div>;
  }

  return (
    <QuizWrapper
      questions={allQuestions}
      mode={mode.charAt(0).toUpperCase() + mode.slice(1)} // Übergeben mit großem Anfangsbuchstaben
      colors={colors}
    />
  );
};

export default App;
