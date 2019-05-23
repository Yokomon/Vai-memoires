import React from "react";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      clicks: 0
    };
  }
  render() {
    const handleLikeDislike = () => {
      this.setState(prevState => {
        return Object.assign({}, prevState, {
          isLiked: !prevState.isLiked,
          clicks: !prevState.isLiked
            ? prevState.clicks + 1
            : prevState.clicks - 1
        });
      });
    };
    return (
      <div className="ui card">
        <div className="content">
          <div className="right floated meta">14h</div>
          <img
            className="ui avatar image"
            src="https://res.cloudinary.com/yokomon/image/upload/v1558436774/boy.png"
            alt={" "}
          />
          Elliot
        </div>
        <div className="image">
          <img
            alt={""}
            src="https://res.cloudinary.com/yokomon/image/upload/v1558436774/boy.png"
          />
        </div>
        <div className="content">
          This is my story and i love what i do, this is better than Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ut vel provident sapiente
          natus nemo, dolorum omnis incidunt quod quasi, id earum ullam
          reiciendis ducimus esse, officiis ea consectetur nisi minima!
        </div>
        <div className="content">
          <span className="right floated">
            <div
              className={this.state.isLiked ? "heart" : "heart outline icon"}
              onClick={handleLikeDislike}
            >
              <i
                className={`heart ${
                  this.state.isLiked ? "icon red" : "outline icon"
                } `}
              />
              {this.state.clicks} likes
            </div>
          </span>
          <i className="comment icon" />3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon" />

            <input type="text" placeholder="Add Comment..." />
          </div>
          <button
            style={{
              marginTop: "5px",
              color: "white",
              backgroundColor: "blue",
              border: "0.3px solid blue",
              borderRadius: "3px"
            }}
          >
            Add story
          </button>
        </div>
      </div>
    );
  }
}

export default UserCard;
