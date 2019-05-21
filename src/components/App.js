import React from "react";
import axios from "axios";
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import "./CardStyle.scss";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID"
      }
    });
  }
  render() {
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
  }
}

export default App;
