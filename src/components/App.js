import React from "react";
import unsplash from "../api/unsplash";
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import SlideShow from "./SlideShow";
import ModalComponent from "./ModalComponent";
import "./CardStyle.scss";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SlideShow images={this.state.images} />
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
