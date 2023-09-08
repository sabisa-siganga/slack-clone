import "./App.css";
import Header from "./components/header/header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from "../src/pages/landingPage/landingpage";

// Recreating the Slack webpage (clone) using React functional components and sass.

function App() {
  return (
    <>
      <Header />
      <main>
        {/* setting routes */}
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
