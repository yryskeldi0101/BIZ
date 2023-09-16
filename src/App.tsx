import React from "react";
import VolunteerPage from "./containers/VolunteerPage";
import { Header } from "./components/header/Header";
// import LandingPage from "./containers/LandingPage";

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <Header />
      <VolunteerPage />
    </div>
  );
}

export default App;
