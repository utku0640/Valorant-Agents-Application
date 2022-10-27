import "./App.css";
import ChampList from "./components/ChampList";
import { useGlobalContext } from "./context";
import React from "react";
import Header from "./components/Header";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div style={{ color: "red", marginLeft: "100px" }}>
        <h1>LOADING...</h1>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <ChampList />
    </div>
  );
}

export default App;
