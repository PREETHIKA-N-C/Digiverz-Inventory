import React from "react";
import LightBoxSlider from "../../InventoryManagement/Components/LightBoxSlider";
import {
  FiCodesandbox,
  FiCalendar,
  FiBookmark,
  FiFileText,
} from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  Light,
  Dark,
  ThemeState,
} from "../../InventoryManagement/Redux/ThemeSlice";
import Style from "./VizProductComponent.module.css";
import VizProductImage from "./VizProductImage";
const VizProductComponent = ({ meta, data }) => {
  console.log(data);
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();

  const IconColor = theme === "Light" ? "#000000" : "#A6A5A5";
  return (
    <div className={Style.container}>
      {Object.keys(meta).length > 0 ? (
        <>
          <div
            className={
              theme === "Light" ? Style.section1_Light : Style.section1_Dark
            }
          >
            <img
              src={meta.logo}
              alt="https://upload.wikimedia.org/wikipedia/commons/0/0c/Clash_app_logo.png"
              className="w-[130px] h-[130px] rounded-[10px] mt-16"
            />
            <p
              className={
                theme === "Light" ? Style.title1_Light : Style.title1_Dark
              }
            >
              {meta.name}
            </p>
            <p
              className={
                theme === "Light" ? Style.title2_Light : Style.title2_Dark
              }
            >
              Kaar Technologies Pvt Ltd
            </p>
            <a
              className={theme === "Light" ? Style.btn_Light : Style.btn_Dark}
              href="https://app.powerbi.com/groups/da769143-4b1a-4812-841b-8244fb32c0e7/list"
              target="_blank"
            >
              Launch App
            </a>

            <div className="h-[70px] w-[100%] flex justify-center space-x-6 mt-12">
              <lord-icon
                src="https://cdn.lordicon.com/bewubbww.json"
                trigger="morph"
                colors={`primary:${IconColor}`}
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
              <div
                className={
                  theme === "Light" ? Style.line_Light : Style.line_Dark
                }
              ></div>
              <div className="text-xs h-[40px] flex flex-col items-center ">
                <p
                  className={
                    theme === "Light" ? Style.title4_Light : Style.title4_Dark
                  }
                >
                  0
                </p>
                <p
                  className={
                    theme === "Light" ? Style.title5_Light : Style.title5_Dark
                  }
                >
                  Customers
                </p>
              </div>
            </div>
            <div className="fixed mt-[490px] ml-[300px] hover:bg-[#ffffff3a] w-8 h-8 p-1 rounded-[4px]">
              <lord-icon
                src="https://cdn.lordicon.com/wxhtpnnk.json"
                trigger="morph"
                colors={`primary:${IconColor}`}
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
            </div>
          </div>

          <div className="flex-[0.7] space-y-2 overflow-y-scroll overscroll-contain scroll-hide rounded-[10px]">
            <div
              className={
                theme === "Light"
                  ? Style.inner_section1_Light
                  : Style.inner_section1_Dark
              }
            >
              <div className="h-[50px] border-b-[1px] border-[#a6a5a586]">
                <p
                  className={
                    theme === "Light" ? Style.heading_Light : Style.heading_Dark
                  }
                >
                  Screenshots
                </p>
              </div>
              <div className="flex p-6 space-x-6 overflow-x-scroll scroll-hide">
                <VizProductImage images={data}></VizProductImage>
              </div>
            </div>

            <div
              className={
                theme === "Light"
                  ? Style.inner_section2_Light
                  : Style.inner_section2_Dark
              }
            >
              <div className="h-[50px] border-b-[1px] border-[#a6a5a586]">
                <p
                  className={
                    theme === "Light" ? Style.heading_Light : Style.heading_Dark
                  }
                >
                  Application Information
                </p>
              </div>
              <div className="grid grid-cols-3 gap-9 pt-10 pb-10 pl-6">
                <div className="flex w-[170px] h-[70px] ">
                  <div className=" w-[40px] h-[100%] p-1">
                    <FiCodesandbox
                      color={IconColor}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                  <div className="flex flex-col h-[100%] w-[130px]">
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title1_variant2_Light
                          : Style.info_title1_variant2_Dark
                      }
                    >
                      <p>Published by</p>
                    </div>
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title2_variant2_Light
                          : Style.info_title2_variant2_Dark
                      }
                    >
                      <p>Kaar Technologies Pvt Ltd</p>
                    </div>
                  </div>
                </div>

                <div className="flex w-[170px] h-[70px] ">
                  <div className=" w-[40px] h-[100%]  p-1">
                    <FiCalendar
                      color={IconColor}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                  <div className="flex flex-col h-[100%] w-[130px]">
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title1_variant1_Light
                          : Style.info_title1_variant1_Dark
                      }
                    >
                      <p>Release Date</p>
                    </div>
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title2_variant1_Light
                          : Style.info_title2_variant1_Dark
                      }
                    >
                      <p>1/12/2022</p>
                    </div>
                  </div>
                </div>

                <div className="flex w-[170px] h-[70px] ">
                  <div className=" w-[40px] h-[100%]  p-1">
                    <FiBookmark
                      color={IconColor}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                  <div className="flex flex-col h-[100%] w-[130px]">
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title1_variant1_Light
                          : Style.info_title1_variant1_Dark
                      }
                    >
                      <p>Category</p>
                    </div>
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title2_variant1_Light
                          : Style.info_title2_variant1_Dark
                      }
                    >
                      <p>Data Science</p>
                    </div>
                  </div>
                </div>

                <div className="flex w-[170px] h-[70px] ">
                  <div className=" w-[40px] h-[100%]  p-1">
                    <FiFileText
                      color={IconColor}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                  <div className="flex flex-col h-[100%] w-[130px]">
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title1_variant3_Light
                          : Style.info_title1_variant3_Dark
                      }
                    >
                      <p>Additional Terms</p>
                    </div>
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title2_variant3_Light
                          : Style.info_title2_variant3_Dark
                      }
                    >
                      {/* <p>Kaar Privacy policy</p>
                      <p>Kaar licence terms</p>
                      <p>Kaar terms and condition</p> */}
                    </div>
                  </div>
                </div>

                <div className="flex w-[170px] h-[70px] ">
                  <div className=" w-[40px] h-[100%]  p-1">
                    <FiCodesandbox
                      color={IconColor}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </div>
                  <div className="flex flex-col h-[100%] w-[130px]">
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title1_variant2_Light
                          : Style.info_title1_variant2_Dark
                      }
                    >
                      <p>Publisher Info</p>
                    </div>
                    <div
                      className={
                        theme === "Light"
                          ? Style.info_title2_variant2_Light
                          : Style.info_title2_variant2_Dark
                      }
                    >
                      <p>Contact Information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                theme === "Light"
                  ? Style.inner_section3_Light
                  : Style.inner_section3_Dark
              }
            >
              <div className="h-[50px] border-b-[1px] border-[#a6a5a586]">
                <p
                  className={
                    theme === "Light" ? Style.heading_Light : Style.heading_Dark
                  }
                >
                  Description
                </p>
              </div>
              <div
                className={
                  theme === "Light"
                    ? Style.paragraph_cont_Light
                    : Style.paragraph_cont_Dark
                }
              >
                <p>{meta.viewdesc}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VizProductComponent;
