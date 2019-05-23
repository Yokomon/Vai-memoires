import React from "react";

// modal for Registration
const ModalComponent = props => {
  return (
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
            <h5 className="mt-5 font-weight-bold">Pay to an agent</h5>
            <form action="/pay" method="POST" className="mt-3">
              <div className="form-group">
                <label for="" class="my-0">
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
                <label for="" class="my-0">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  class="form-control my-0"
                  placeholder="+234 7036836753"
                  minlength="11"
                  pattern="[+]{0,1}[0-9\s]+"
                  maxlength="16"
                  required
                />
              </div>
              <input
                value="Pay with Paystack"
                type="submit"
                name="phone"
                className="btn btn-custom px-5 mt-4"
              />
            </form>
            <hr />
            <button id="buttonCheckout" className="btn btn-custom px-5 mt-4">
              Pay with Stripe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
