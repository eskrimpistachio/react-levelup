import "./App.css";
import Main from "./components/Main.js";
import Navibar from "./components/Navibar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLeaderboard from "./components/MainLeaderboard";
import MainSubmit from "./components/MainSubmit";
import History from "./components/History";
import { Helmet } from "react-helmet";

const TITLE = "Trash Submitter";

const App = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Router>
        <div className="App">
          <Navibar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/main-leaderboard" element={<MainLeaderboard />} />
            <Route path="/main-submit" element={<MainSubmit />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
