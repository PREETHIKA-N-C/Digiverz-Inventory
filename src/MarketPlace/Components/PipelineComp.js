import React, { useState } from "react";
import LightBoxSlider from "./LightBoxSlider";
import { CiShare1 } from "react-icons/ci";
import Style from "./PipelineComp.module.css";
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
import data from "../DummyData/Dummy";
import { useNavigate, useParams } from "react-router-dom";

function PipelineComp({
  bgColor,
  borderColor,
  textColor,
  iconColor,
  iconColor2,
  contactColor,
  buttonColor,
}) {
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();

  const IconColor = theme === "Light" ? "#000000" : "#A6A5A5";

  const prams = useParams();
  // console.log(prams.id);
  const details = data.filter((data, index) => {
    return data.name === prams.id;
  });

  function onDownload() {}
  return (
    <div className={Style.container}>
      <div
        className={
          theme === "Light" ? Style.section1_Light : Style.section1_Dark
        }
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Clash_app_logo.png"
          className="w-[130px] h-[130px] rounded-[10px] mt-16"
        />
        <p
          className={theme === "Light" ? Style.title1_Light : Style.title1_Dark}
        >
          {prams.id}
        </p>
        <p
          className={theme === "Light" ? Style.title2_Light : Style.title2_Dark}
        >
          Kaar Technologies Pvt Ltd
        </p>
        <a
          class="mt-8 text-center relative px-5 py-3  font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          onClick={(e) => {
            e.preventDefault();
            onDownload();
          }}
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Download
          </span>
        </a>
        <p
          className={
            theme === "Light" ? Style.title2_Lights : Style.title2_Darks
          }
        >
          CSV file for a this {prams.id} data source here
        </p>
        <div className="mt-[460px] w-[330px] fixed flex justify-end">
              <a
                href="https://www.who.int/health-topics/vaccines-and-immunization"
                className="w-[25px] h-[25px] "
              >
                <CiShare1 className=" w-[25px] h-[25px]" color="black" />
              </a>
            </div>
        {/* <div className="fixed mt-[490px] ml-[300px] hover:bg-[#ffffff3a] w-8 h-8 p-1 rounded-[4px]">
          <lord-icon
            src="https://cdn.lordicon.com/wxhtpnnk.json"
            trigger="morph"
            colors={`primary:${IconColor}`}
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </div> */}
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
             Data View
            </p>
          </div>
          <div className="flex p-6 space-x-6 overflow-x-scroll scroll-hide">
            {/* <LightBoxSlider /> */}
            Table data view
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
                  <p>Data Engineering pipelines</p>
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
            <p>
            This application based on the Data engineering Pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex pl-[90px] pt-[70px] pr-[20px] pb-[20px] space-x-2  h-[615px] overflow-hidden">
    //   <div
    //     className={`flex flex-[0.3] border-[1px] border-[${borderColor}] rounded-[10px] bg-[${bgColor}] flex-col items-center`}
    //   >
    //     <img
    //       src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Clash_app_logo.png"
    //       className="w-[130px] h-[130px] rounded-[10px] mt-16"
    //     />
    //     <p className={`text-${textColor} text-[30px] font-bold mt-8`}>
    //       {prams.id}
    //     </p>
    //     <p className={`text-${contactColor} text-base mt-2`}>
    //       Kaar Technologies Pvt Ltd
    //     </p>
    //     <a
    //       class="mt-8 text-center relative px-5 py-3  font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
    //       onClick={(e) => {
    //         e.preventDefault();
    //         onDownload();
    //       }}
    //     >
    //       <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    //       <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    //       <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    //       <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    //       <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    //       <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
    //         Download
    //       </span>
    //     </a>
    //     <p className={`text-${contactColor} text-xs mt-4`}>
    //       CSV file for a this {prams.id} data source here
    //     </p>
    //     <div className="mt-[460px] w-[330px] fixed flex justify-end">
    //           <a
    //             href="https://www.who.int/health-topics/vaccines-and-immunization"
    //             className="w-[25px] h-[25px] "
    //           >
    //             <CiShare1 className=" w-[25px] h-[25px]" color="black" />
    //           </a>
    //         </div>
    //     {/* <div className="mt-[460px] w-[330px] fixed flex justify-end">
    //           <a
    //             href="https://www.who.int/health-topics/vaccines-and-immunization"
    //             className="w-[25px] h-[25px] "
    //           >
    //             <CiShare1 className=" w-[25px] h-[25px]" color="black" />
    //           </a>
    //         </div>
    //     <div className="fixed mt-[490px] ml-[300px] hover:bg-[#ffffff3a] w-8 h-8 p-1 rounded-[4px]">
    //       <lord-icon
    //         src="https://cdn.lordicon.com/wxhtpnnk.json"
    //         trigger="morph"
    //         colors={`primary:${iconColor2}`}
    //         style={{ width: "25px", height: "25px" }}
    //       ></lord-icon>
    //     </div> */}
    //   </div>

    //   <div className="flex-[0.7] space-y-2 overflow-y-scroll overscroll-contain scroll-hide rounded-[10px]">
    //     <div
    //       className={`h-[350px] border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}
    //     >
    //       <div className="h-[50px] border-b-[1px] border-[#a6a5a586]">
    //         <p
    //           className={`text-lg font-semibold text-${textColor} pl-6 pt-[12px]`}
    //         >
    //           Data View
    //         </p>
    //       </div>
    //       <div className="flex p-6 space-x-6 overflow-x-scroll scroll-hide">
    //         {/* <LightBoxSlider/> */}
    //         Table show
    //       </div>
    //     </div>

    //     <div
    //       className={`pb-10 border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}
    //     >
    //       <div className="h-[50px] border-b-[1px] border-[#a6a5a586]">
    //         <p
    //           className={`text-lg font-semibold text-${textColor} pl-6 pt-[12px]`}
    //         >
    //           Application Information
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-3 gap-9 pt-10 pb-10 pl-6">
    //         <div className="flex w-[170px] h-[70px] ">
    //           <div className=" w-[40px] h-[100%] p-1">
    //             <FiCodesandbox
    //               color={iconColor}
    //               style={{ width: "25px", height: "25px" }}
    //             />
    //           </div>
    //           <div className="flex flex-col h-[100%] w-[130px]">
    //             <div className={`flex-[0.5]  text-sm p-1 text-${textColor}`}>
    //               <p>Published by</p>
    //             </div>
    //             <div className={`flex-[0.5]  text-xs p-1 text-${contactColor}`}>
    //               <p>Kaar Technologies Pvt Ltd</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex w-[170px] h-[70px] ">
    //           <div className=" w-[40px] h-[100%]  p-1">
    //             <FiCalendar
    //               color={iconColor}
    //               style={{ width: "25px", height: "25px" }}
    //             />
    //           </div>
    //           <div className="flex flex-col h-[100%] w-[130px]">
    //             <div className={`flex-[0.5]  text-sm p-1  text-${textColor}`}>
    //               <p>Release Date</p>
    //             </div>
    //             <div className={`flex-[0.5]  text-xs p-1  text-${textColor}`}>
    //               <p>1/12/2022</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex w-[170px] h-[70px] ">
    //           <div className=" w-[40px] h-[100%]  p-1">
    //             <FiBookmark
    //               color={iconColor}
    //               style={{ width: "25px", height: "25px" }}
    //             />
    //           </div>
    //           <div className="flex flex-col h-[100%] w-[130px]">
    //             <div className={`flex-[0.5]  text-sm p-1  text-${textColor}`}>
    //               <p>Category</p>
    //             </div>
    //             <div className={`flex-[0.5]  text-xs p-1  text-${textColor}`}>
    //               <p>Data Engineering Pipelines</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex w-[170px] h-[70px] ">
    //           <div className=" w-[40px] h-[100%]  p-1">
    //             <FiFileText
    //               color={iconColor}
    //               style={{ width: "25px", height: "25px" }}
    //             />
    //           </div>
    //           <div className="flex flex-col h-[100%] w-[130px]">
    //             <div className={`flex-[0.5] text-sm p-1  text-${textColor}`}>
    //               <p>Additional Terms</p>
    //             </div>
    //             <div
    //               className={`flex-[0.5] flex-col text-xs p-1 text-${contactColor} space-y-2`}
    //             >
    //               {/* <p>Kaar Privacy policy</p>
    //                         <p>Kaar licence terms</p>
    //                         <p>Kaar terms and condition</p> */}
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex w-[170px] h-[70px] ">
    //           <div className=" w-[40px] h-[100%]  p-1">
    //             <FiCodesandbox
    //               color={iconColor}
    //               style={{ width: "25px", height: "25px" }}
    //             />
    //           </div>
    //           <div className="flex flex-col h-[100%] w-[130px]">
    //             <div className={`flex-[0.5]  text-sm p-1  text-${textColor}`}>
    //               <p>Publisher Info</p>
    //             </div>
    //             <div
    //               className={`flex-[0.5]  text-xs p-1  text-${contactColor}`}
    //             >
    //               <p>Contact Information</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div
    //       className={`border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}
    //     >
    //       <div className="h-[50px] border-b-[1px] border-[#a6a5a586]">
    //         <p
    //           className={`text-lg font-semibold text-${textColor} pl-6 pt-[12px]`}
    //         >
    //           Description
    //         </p>
    //       </div>
    //       <div className={`p-6 text-${textColor} text-sm`}>
    //         <p>This MarketPlace is based on the Data engineering pipelines.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PipelineComp;
