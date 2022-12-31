import React from "react";
import "./VizForm.scss";
const VizForm = () => {
  let step = 1;

  function handleSubmit(event) {
    const indicator = document.querySelectorAll(".indicator");
    let stepClass = `.step-${step}`;
    console.log(stepClass);
    let stepElm = document.querySelector(stepClass);
    console.log(stepElm);
    stepElm.classList.remove("visible__no-animation");
    stepElm.classList.add("slide-out");
    console.log(indicator);
    indicator[step - 1].classList.remove("active");
    setTimeout(() => {
      step += 1;
      if (step > 3) {
        step = 1;
      }
      console.log(step);
      indicator[step - 1].classList.add("active");
      stepClass = `.step-${step}`;
      stepElm = document.querySelector(stepClass);
      stepElm.classList.remove("slide-out");
      stepElm.classList.add("slide-in");
    }, 100);
  }

  return (
    <div class="container">
      <div class="header">
        <span class="indicator active"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>

        <div class="content">
          <div class="content__box visible__no-animation step-1">
            <div class="title">
              <h5>Step 1</h5>
            </div>
            <div class="description">Enter your name and email address</div>
            <div class="body">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">
                    Name
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">
                    Email
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    id="button-1"
                    class="submit-button btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="content__box step-2">
            <div class="title">
              <h5>Step 2</h5>
            </div>
            <div class="description">
              PROSPER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </div>
            <div class="body">
              deropo
              <div>
                <button
                  type="submit"
                  id="button-2"
                  class="submit-button btn btn-primary"
                  onClick={handleSubmit}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div class="content__box step-3">
            <div class="title">
              <h5>Step 3</h5>
            </div>
            <div class="description">THE FINAL STEP OMG</div>
            <div class="body">
              OMG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              <div>
                <button
                  type="submit"
                  id="button-3"
                  onClick={handleSubmit}
                  class="submit-button btn btn-primary"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VizForm;
