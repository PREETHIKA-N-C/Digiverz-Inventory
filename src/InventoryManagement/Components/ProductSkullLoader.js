import React from 'react'

function ProductSkullLoader({bgColor,borderColor,loadAnimation}) {

  return (
    <div className='flex pl-[90px] pt-[70px] pr-[20px] pb-[20px] space-x-2  h-[615px] overflow-hidden' >
        
        <div className={`flex flex-[0.3] border-[1px] border-[${borderColor}] rounded-[10px] bg-[${bgColor}] flex-col items-center`}>
        <div className={`w-[130px] h-[130px] rounded-[10px] mt-16 ${loadAnimation}`}> </div>
        <p className={`text-white text-[30px] font-bold mt-8 rounded-[10px] w-[220px] h-[50px] ${loadAnimation}`}></p>
        <p className={`text-blue-300 text-base mt-2 rounded-[10px] w-[80px] h-[20px] ${loadAnimation}`}></p>
        <div className={`w-[150px] h-[35px] ${loadAnimation} rounded-[5px] mt-10`}></div>
        <p className={`text-white text-xs mt-2 ${loadAnimation} rounded-[5px] w-[110px] h-[15px] `}></p>
        <div className='h-[70px] w-[100%] flex justify-center space-x-6 mt-12'>
        {/* <lord-icon
    src="https://cdn.lordicon.com/bewubbww.json"
    trigger="morph"
    colors="primary:#A6A5A5" style={{width:"40px",height:"40px"}}></lord-icon> */}
    <div className={`w-[50px] h-[50px] ${loadAnimation} rounded-[5px]`}></div>
    <div className='h-[50px] border-l-[2px] border-[#A6A5A5]'></div>
    <div className={`text-xs h-[50px] w-[50px] ${loadAnimation} rounded-[5px] flex flex-col items-center text-[#A6A5A5]`}>
    </div>
        </div>
        <div className='fixed mt-[515px] ml-[315px] hover:bg-[#ffffff3a] w-8 h-8 p-1 rounded-[4px]'>
        <div className={`w-[30px] h-[30px] ${loadAnimation} rounded-[5px]`}></div>
        </div>
        </div>


        <div className='flex-[0.7] space-y-2 overflow-y-scroll overscroll-contain scroll-hide rounded-[10px]'>
           
           

        <div className={`h-[350px] border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}>
              <div className='h-[50px] border-b-[1px] border-[#a6a5a586] pl-6 pt-[12px]'><p className={`text-lg font-semibold text-white  h-[25px] w-[120px] ${loadAnimation} rounded-[5px]`}></p></div>
            <div className='flex p-6 space-x-6 overflow-x-scroll scroll-hide'>
            <div className={`w-[450px] h-[250px] rounded-[5px] hover:border-[2px] hover:border-[#ffffff3a] hover:opacity-25 ${loadAnimation}`}> </div>
            <div className={`w-[450px] h-[250px] rounded-[5px] hover:border-[2px] hover:border-[#ffffff3a] hover:opacity-25 ${loadAnimation}`}> </div>
            {/* <LightBoxSlider/> */}
            </div>
           </div>



           <div className={`pb-10 border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}>
           <div className='h-[50px] border-b-[1px] border-[#a6a5a586]  pl-6 pt-[12px]'><p className={`text-lg font-semibold text-white h-[25px] w-[200px] ${loadAnimation} rounded-[5px]`}></p></div>
           <div className='grid grid-cols-3 gap-9 pt-10 pb-10 pl-6'>


                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%] p-1'>
                       <div className={`w-[30px] h-[30px] ${loadAnimation} rounded-[5px]`}></div>
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px] p-1 space-y-3'>
                       <div className={`flex-[0.3]  text-sm p-2 text-white ${loadAnimation} rounded-[5px]`}>
                        <p></p>
                       </div>
                       <div className={`flex-[0.3]  text-xs p-1 ${loadAnimation} rounded-[5px] text-blue-300`}>
                       <p></p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%] p-1'>
                       <div className={`1w-[30px] h-[30px] ${loadAnimation} rounded-[5px]`}></div>
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px] p-1 space-y-3'>
                       <div className={`flex-[0.3]  text-sm p-2 text-white ${loadAnimation} rounded-[5px]`}>
                        <p></p>
                       </div>
                       <div className={`flex-[0.3]  text-xs p-1 ${loadAnimation} rounded-[5px] text-blue-300`}>
                       <p></p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%] p-1'>
                       <div className={`w-[30px] h-[30px] ${loadAnimation} rounded-[5px]`}></div>
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px] p-1 space-y-3'>
                       <div className={`flex-[0.3]  text-sm p-2 text-white ${loadAnimation} rounded-[5px]`}>
                        <p></p>
                       </div>
                       <div className={`flex-[0.3]  text-xs p-1 ${loadAnimation} rounded-[5px] text-blue-300`}>
                       <p></p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%] p-1'>
                       <div className={`w-[30px] h-[30px] ${loadAnimation} rounded-[5px]`}></div>
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px] p-1 space-y-3'>
                       <div className={`flex-[0.3]  text-sm p-2 text-white ${loadAnimation} rounded-[5px]`}>
                        <p></p>
                       </div>
                       <div className={`flex-[0.3]  text-xs p-1 ${loadAnimation} rounded-[5px] text-blue-300`}>
                       <p></p>
                       </div>
                  </div>
                </div>

                <div className='flex w-[170px] h-[70px] '>
                  <div className=' w-[40px] h-[100%] p-1'>
                       <div className={`w-[30px] h-[30px] ${loadAnimation} rounded-[5px]`}></div>
                  </div>
                  <div className='flex flex-col h-[100%] w-[130px] p-1 space-y-3'>
                       <div className={`flex-[0.3]  text-sm p-2 text-white ${loadAnimation} rounded-[5px]`}>
                        <p></p>
                       </div>
                       <div className={`flex-[0.3]  text-xs p-1 ${loadAnimation} rounded-[5px] text-blue-300`}>
                       <p></p>
                       </div>
                  </div>
                </div>

                </div>
           </div>




           <div className={`border-[1px] border-[${borderColor}] bg-[${bgColor}] rounded-[10px]`}>
           <div className='h-[50px] border-b-[1px] border-[#a6a5a586]'><p className='text-lg font-semibold text-white pl-6 pt-[12px]'>Description</p></div>
           <div className='p-6 text-white text-sm '>
           <p className={`${loadAnimation} rounded-[5px] w-[100%] h-[200px]`}>
          
           </p>
           </div>
           </div>


        </div>  
    </div>
  )
}

export default ProductSkullLoader
