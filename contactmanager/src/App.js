import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="hoge"></Header>
        <AddContact />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
