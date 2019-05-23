// Component for the CTA
import React from "react";
import "./ModalComponent";

class Cta extends React.Component {
  render() {
    return (
      <div>
        <button
          data-toggle="ModalComponent"
          className="btn btn-custom"
          data-target="#registerModal"
        >
          Click here
        </button>
      </div>
    );
  }
}

export default Cta;
