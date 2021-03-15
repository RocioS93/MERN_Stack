import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Tab 1">Tab 1 content is showing here.</div>
        <div label="Tab 2">Tab 2 content is showing here.</div>
        <div label="Tab 3">Tab 3 content is showing here.</div>
      </Tabs>
    </div>
  );
}

export default App;
