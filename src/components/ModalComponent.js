import React from "react";
import { Modal, Button } from "react-bootstrap";
// modal for Registration
class ModalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }
  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >
          Show Modal
        </Button>
        <Modal
          bsSize="large"
          className={"modal"}
          show={showModal}
          onHide={() => {
            this.setState({
              showModal: false
            });
          }}
        >
          <Modal.Body>
            <div
              className="modal fade"
              id="registerModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="mt-5 font-weight-bold">Val Memoires</h5>
                    <form action="/" method="POST" className="mt-3">
                      <div className="form-group">
                        <label for="" className="my-0">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          className="form-control my-0"
                          placeholder="johndoe@example.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label for="" className="my-0">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          name="phoneNo"
                          className="form-control my-0"
                          placeholder="+234 7036836753"
                          minlength="11"
                          pattern="[+]{0,1}[0-9\s]+"
                          maxlength="16"
                          required
                        />
                      </div>
                      <input
                        type="submit"
                        name="phone"
                        className="btn btn-custom px-5 mt-4"
                      />
                    </form>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.setState({ showModal: false });
              }}
            >
              Add Story
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
