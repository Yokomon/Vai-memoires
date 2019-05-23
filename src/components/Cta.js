// Component for the CTA
import React from "react";
import "./ModalComponent";

class Cta extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }
  render() {
    return (
      <div>
        <button
          data-toggle="ModalComponent"
          className="btn btn-custom"
          data-target="#registerModal"
          onClick={() => {}}
        />
      </div>
    );
  }
}

export default Cta;
