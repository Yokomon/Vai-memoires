import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import "./CardStyle.scss";
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <Header />
      <SearchBar />

      <div className="grid">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default App;
