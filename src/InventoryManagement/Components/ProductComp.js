import React , { useState }  from 'react'
import LightBoxSlider from './LightBoxSlider';
import { FiCodesandbox,FiCalendar,FiBookmark,FiFileText } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { Light, Dark , ThemeState } from '../Redux/ThemeSlice'
import Style from './ProductComp.module.css'
function ProductComp({bgColor,borderColor,textColor,iconColor,iconColor2,contactColor,buttonColor}) {
     const theme = useSelector(ThemeState)
     const dispatch = useDispatch()
  return (
   <div className='flex pl-[90px] pt-[70px] pr-[20px] pb-[20px] space-x-2  h-[615px] overflow-hidden' >
        
        <div className={`flex flex-[0.3] border-[1px] border-[${borderColor}] rounded-[10px] bg-[${bgColor}] flex-col items-center`}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Clash_app_logo.png' className='w-[130px] h-[130px] rounded-[10px] mt-16'/>
        <p className={`text-${textColor} text-[30px] font-bold mt-8`}>Expense Claim App</p>
        <p className={`text-${contactColor} text-base mt-2`}>Kaar Technologies Pvt Ltd</p>
        <a className={`w-[150px] h-[35px] bg-${buttonColor} rounded-[5px] mt-10 text-center pt-1`} href="http://172.17.19.26:3000/" target="_blank" >Launch App</a>
        <p className={`text-${textColor} text-xs mt-2`}>Free demo offered</p>
        <div className='h-[70px] w-[100%] flex justify-center space-x-6 mt-12'>
        <lord-icon
    src="https://cdn.lordicon.com/bewubbww.json"
    trigger="morph"
    colors={`primary:${iconColor2}`} style={{width:"40px",height:"40px"}}></lord-icon>
    <div className={`h-[50px] border-l-[2px] border-[${iconColor2}]`}></div>
    <div className='text-xs h-[40px] flex flex-col items-center '>
        <p className={`text-lg text-${textColor}`}>0</p>
        <p className={`text-[${iconColor2}]`}>Customers</p>
    </div>
        </div>
        <div className='fixed mt-[490px] ml-[300px] hover:bg-[#ffffff3a] w-8 h-8 p-1 rounded-[4px]'>
        <lord-icon src="https://cdn.lordicon.com/wxhtpnnk.json" trigger="morph" colors={`primary:${iconColor2}`} style={{width:"25px",height:"25px"}}></lord-icon>
        </div>
        </div>


        <div className='flex-[0.7] space-y-2 overflow-y-scroll overscroll-contain scroll-hide rounded-[10px]'>
           
           

           <div className={`h-[350px] border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}>
              <div className='h-[50px] border-b-[1px] border-[#a6a5a586]'><p className={`text-lg font-semibold text-${textColor} pl-6 pt-[12px]`}>Screenshots</p></div>
            <div className='flex p-6 space-x-6 overflow-x-scroll scroll-hide'>
            <LightBoxSlider/>
            </div>
           </div>



           <div className={`pb-10 border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}>
           <div className='h-[50px] border-b-[1px] border-[#a6a5a586]'><p className={`text-lg font-semibold text-${textColor} pl-6 pt-[12px]`}>Application Information</p></div>
           <div className='grid grid-cols-3 gap-9 pt-10 pb-10 pl-6'>


                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%] p-1'>
                       <FiCodesandbox color={iconColor} style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className={`flex-[0.5]  text-sm p-1 text-${textColor}`}>
                        <p>Published by</p>
                       </div>
                       <div className={`flex-[0.5]  text-xs p-1 text-${contactColor}`}>
                       <p>Kaar Technologies Pvt Ltd</p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiCalendar color={iconColor} style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className={`flex-[0.5]  text-sm p-1  text-${textColor}`}>
                        <p>Release Date</p>
                       </div>
                       <div className={`flex-[0.5]  text-xs p-1  text-${textColor}`}>
                       <p>1/12/2022</p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiBookmark color={iconColor} style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className={`flex-[0.5]  text-sm p-1  text-${textColor}`}>
                        <p>Category</p>
                       </div>
                       <div className={`flex-[0.5]  text-xs p-1  text-${textColor}`}>
                       <p>Data Science</p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiFileText color={iconColor} style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className={`flex-[0.5] text-sm p-1  text-${textColor}`}>
                        <p>Additional Terms</p>
                       </div>
                       <div className={`flex-[0.5] flex-col text-xs p-1 text-${contactColor} space-y-2`}>
                       {/* <p>Kaar Privacy policy</p>
                       <p>Kaar licence terms</p>
                       <p>Kaar terms and condition</p> */}
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%]  p-1'>
                       <FiCodesandbox color={iconColor} style={{width:'25px',height:'25px'}} />
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px]'>
                       <div className={`flex-[0.5]  text-sm p-1  text-${textColor}`}>
                        <p>Publisher Info</p>
                       </div>
                       <div className={`flex-[0.5]  text-xs p-1  text-${contactColor}`}>
                       <p>Contact Information</p>
                       </div>
                  </div>
                </div>

                </div>
           </div>




           <div className={`border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}>
           <div className='h-[50px] border-b-[1px] border-[#a6a5a586]'><p className={`text-lg font-semibold text-${textColor} pl-6 pt-[12px]`}>Description</p></div>
           <div className={`p-6 text-${textColor} text-sm`}>
           <p>
           This application simplifies the process of expense claims in an organization by automating the process of expense claim which automatically extracts all the data from the invoice once the invoice image is uploaded and displays it where the user can view and edit the contents of the invoice. The key features of this OCR application is that it has 3 levels of hierarchy namely employee/vendor, managers and head. The approval of claims goes from L1 manager to head after approval of each level. This has unique dashboard view for every hierarchy and a separate dashboard for admin where users can be added or removed based on requirements. This application currently supports two languages (English and Arabic) and can be viewed in both according to the preference of user and also supports both light and dark theme.  
           </p>
           </div>
           </div>


        </div>  
    </div>
  )
}

export default ProductComp