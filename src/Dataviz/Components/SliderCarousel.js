import React from "react";
import { Carousel } from "react-responsive-carousel";
// import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import {
  Light,
  Dark,
  Toggle,
  ThemeState,
} from "../../InventoryManagement/Redux/ThemeSlice";
import { useSelector, useDispatch } from "react-redux";

export const SliderCarousel = ({ data }) => {
  const theme = useSelector(ThemeState);
  return (
    <Carousel
      verticalSwipe="standard"
      useKeyboardArrows={true}
      emulateTouch={true}
      showArrows={true}
      showThumbs={false}
      renderArrowPrev={(d) => {
        console.log(d);
      }}
    >
      {data.urls.map((item) => {
        return (
          <div>
            {/* <h1 style={{ paddingTop: "50px" }}>{item.title}</h1> */}
            <img
              style={{
                height: "600px",
                width: "1000px",
                objectFit: "contain",
                margin: "5% 13.5%",
                // borderRadius: 30,
              }}
              src={item.link}
              alt="First slide"
            />
            <br />
            <br />
            <br />
            <h5
              className="legend"
              style={{ left: "51%", fontSize: "20px", marginTop: "12px" }}
            >
              {item.title}
            </h5>
          </div>
        );
      })}
    </Carousel>
  );
};
