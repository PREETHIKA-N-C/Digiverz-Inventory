import React, { useEffect, useState } from "react";
import "./VizForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import styles from "./VizForm.module.css";
import $ from "jquery";
const VizForm = () => {
  const nav = useNavigate();
  let step = 1;
  const [formData, setFormData] = useState({
    title: "",
    logo: "",
    group: "",
    desc: "",
    files: "",
  });
  function handleSubmit(event) {
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");

    const indicator = document.querySelectorAll(".indicator");
    let stepClass = `.step-${step}`;
    console.log(stepClass);
    let stepElm = document.querySelector(stepClass);
    console.log(stepElm);
    stepElm.classList.remove("visible__no-animation");
    stepElm.classList.add("slide-out");
    indicator[step - 1].classList.remove("active");
    setTimeout(() => {
      step += 1;
      if (step > 2) {
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
  const handleForm = (e) => {
    e.preventDefault();
    // setFormData({ ...formData, files: e.target[0].files });
    console.log(e.target[0].files);
    console.log(JSON.stringify(formData));
    let form = new FormData();

    form.append("title", formData.title);
    form.append("logo", formData.logo);

    form.append("group", formData.group);

    form.append("desc", formData.desc);

    for (const key of Object.keys(formData.files)) {
      form.append("files", formData.files[key]);
    }
    console.log(Object.fromEntries(form));
    // http://localhost:8000/viz/admin/upload
    // "Content-Type": "multipart/form-data",

    axios
      .post("http://localhost:8000/viz/admin/upload", form)
      .then((response) => {
        console.log(response);
        nav("/VizHome");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1></h1>
      <div className="top"></div>
      <div class="container">
        <div class="header">
          <span class="indicator active"></span>
          {/* <span class="indicator"></span> */}
          <span class="indicator"></span>

          <div class="content">
            <div class="content__box visible__no-animation step-1">
              <div class="title">
                <h5>Content Information</h5>
              </div>
              <div class="description"></div>
              <div class="body">
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">
                      Title :
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter dashboard title"
                      aria-label="Name"
                      value={formData.title}
                      onChange={(e) => {
                        setFormData({ ...formData, title: e.target.value });
                      }}
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">
                      Logo url :
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter logo url"
                      aria-label="email"
                      value={formData.logo}
                      onChange={(e) => {
                        setFormData({ ...formData, logo: e.target.value });
                      }}
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">
                      Group Name :
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter group name"
                      aria-label="email"
                      value={formData.group}
                      onChange={(e) => {
                        setFormData({ ...formData, group: e.target.value });
                      }}
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">
                      View Description :
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter description"
                      aria-label="email"
                      value={formData.desc}
                      onChange={(e) => {
                        setFormData({ ...formData, desc: e.target.value });
                      }}
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      id="button-1"
                      class="button btn btn-primary"
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
                <h5>Content Files</h5>
              </div>
              <div class="description"></div>
              <div class="body">
                <form encType="multipart/form-data" onSubmit={handleForm}>
                  <div class="container2">
                    <label
                      for="et_pb_contact_brand_file_request_0"
                      class="et_pb_contact_form_label"
                    >
                      Enter
                    </label>

                    <input
                      type="file"
                      multiple
                      onChange={(e) => {
                        setFormData({ ...formData, files: e.target.files });
                      }}
                      id="et_pb_contact_brand_file_request_0"
                      class="file-upload"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      id="button-3"
                      onClick={handleSubmit}
                      className="submit-button btn btn-primary"
                    >
                      Done
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VizForm;
