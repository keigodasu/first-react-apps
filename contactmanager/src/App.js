import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="hoge"></Header>
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
