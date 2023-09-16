
import React from "react";
import LandingPage from "./containers/LandingPage";
import Messenger from "./components/messenger/Messenger";

import AppRoute from "./routes/AppRoute";


function App() {
  return (
    <div>

      <LandingPage />
      <Messenger />

      <AppRoute />
    
    </div>
  );
}

export default App;
