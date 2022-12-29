import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  Light,
  Dark,
  Toggle,
  ThemeState,
} from "../../InventoryManagement/Redux/ThemeSlice";
import { useSelector, useDispatch } from "react-redux";

export const SliderBoot = ({ data }) => {
  const theme = useSelector(ThemeState);
  return (
    <Carousel>
      {data.urls.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <br />
            <img
              className="d-block"
              style={{
                height: "500px",
                width: "960px",
                objectFit: "contain",
                margin: "5% 18.5%",
                // borderRadius: 30,
              }}
              src={item.link}
              alt="First slide"
            />
            <br />
            <br />
            <br />

            <Carousel.Caption>
              <h5>{item.title}</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
