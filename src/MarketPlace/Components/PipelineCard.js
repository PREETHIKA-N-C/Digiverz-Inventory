import React from "react";
import Style from "./PipelineCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Light,
  Dark,
  Toggle,
  ThemeState,
} from "../../InventoryManagement/Redux/ThemeSlice";
function PipelineCard({name,desc,img,logo}) {
    const navigate = useNavigate();
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  return (
    <Link to={`Pipeline/${desc}`}>
    <>
    <div   onClick={() => {
        //   navigate("/Pipeline");
        }}>
      <div
        className={
          theme === "Light" ? Style.product_cont_Light : Style.product_cont
        }
      >
        <div className={Style.product}>
          <img className={Style.product_logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0rLW8twJ6MJP64XFfRz2olNZIF3WUI-oYXUW6psTJQ&s" />
          <div
            className={
              theme === "Light"
                ? Style.product_details_Light
                : Style.product_details
            }
          >
            <div className={Style.text_1}>{name}</div>
            <div className={Style.text_2}>{desc}</div>
            <div className="flex">
              <svg
                style={
                  theme === "Light" ? { color: "black" } : { color: "white" }
                }
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  fill="black"
                ></path>{" "}
              </svg>
              <svg
                style={
                  theme === "Light" ? { color: "black" } : { color: "white" }
                }
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  fill="black"
                ></path>{" "}
              </svg>
              <svg
                style={
                  theme === "Light" ? { color: "black" } : { color: "white" }
                }
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  fill="black"
                ></path>{" "}
              </svg>
              <svg
                style={
                  theme === "Light" ? { color: "black" } : { color: "white" }
                }
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  fill="black"
                ></path>{" "}
              </svg>
              <svg
                style={
                  theme === "Light" ? { color: "black" } : { color: "white" }
                }
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                  fill="black"
                ></path>{" "}
              </svg>
              <button className={Style.get_btn}>GET</button>
            </div>
          </div>
        </div>
        <img className={Style.product_img} src={img} />
      </div>
      </div>
    </>
    </Link>
  );
}

export default PipelineCard;
