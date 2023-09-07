import "./App.css";
import Header from "./components/header/header";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from "../src/pages/landingPage/landingpage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
