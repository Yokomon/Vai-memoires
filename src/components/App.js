import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <Header />
      <SearchBar />
      <UserCard />
    </div>
  );
};

export default App;
