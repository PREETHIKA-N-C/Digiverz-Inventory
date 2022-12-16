import React , { useState } from 'react'
import Lightbox from 'react-spring-lightbox';
import { FiX,FiChevronLeft,FiChevronRight } from "react-icons/fi";
import sc1 from '../Assets/sc1.png'
import sc2 from '../Assets/sc2.png'
import sc3 from '../Assets/sc3.png'
import sc4 from '../Assets/sc4.png'
import sc5 from '../Assets/sc5.png'
import sc6 from '../Assets/sc6.png'
import sc7 from '../Assets/sc7.png'
import sc8 from '../Assets/sc8.png'
function LightBoxSlider() {
    const images= [
        {
            src: sc1,
            loading: 'lazy',
            alt: 'Windows 10 Dark Mode Setting',
        },
        {
            src: sc2,
            loading: 'lazy',
            alt: 'Windows 10 Dark Mode Setting',
        },
        {
            src: sc3,
            loading: 'lazy',
            alt: 'macOS Mojave Dark Mode Setting',
        },
        {
            src: sc4,
            loading: 'lazy',
            alt: 'Android 9.0 Dark Mode Setting',
        },
        {
            src: sc5,
            loading: 'lazy',
            alt: 'Android 9.0 Dark Mode Setting',
        },
        {
            src: sc6,
            loading: 'lazy',
            alt: 'Android 9.0 Dark Mode Setting',
        },
        {
            src: sc7,
            loading: 'lazy',
            alt: 'Android 9.0 Dark Mode Setting',
        },
        {
            src: sc8,
            loading: 'lazy',
            alt: 'Android 9.0 Dark Mode Setting',
        },
    ];
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [lightBoxOpen,setLightBoxOpen] = useState(false)
    const gotoPrevious = () =>{
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
    }
    const gotoNext = () =>{
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);
    }
    const lightboxClick = (e)=>{
        setLightBoxOpen(true)
        setCurrentIndex(e);
    }
  return (
    <>
      {images.map((data,idx)=>(
                <img className='w-[450px] h-[250px] rounded-[5px] hover:border-[2px] hover:border-[#ffffff3a] hover:opacity-25' src={data.src} alt={data.alt} onClick={()=>lightboxClick(idx)}/>
                ))}
                <Lightbox
            isOpen={lightBoxOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            className='bg-[#000000c9]' 
            renderHeader={()=>(
                <div className='w-[100%] h-[60px] p-5 flex justify-end '><FiX color='#ffffff' onClick={()=>(setLightBoxOpen(false))} className='w-[25px] h-[25px] cursor-pointer rounded-md hover:bg-[#ffffff3a]' /></div>
            )}   
            renderNextButton={()=>(
                <div className='mr-10 cursor-pointer rounded-[5px] hover:bg-[#ffffff3a] z-[999]' onClick={gotoNext}>
                    <FiChevronRight color='#ffffff' className='w-[35px] h-[35px] ' />
                </div>
            )}
            renderPrevButton={()=>(
                <div className='ml-10 cursor-pointer rounded-[5px] hover:bg-[#ffffff3a] z-[999]' onClick={gotoPrevious}>
                    <FiChevronLeft color='#ffffff' className='w-[35px] h-[35px] ' />
                </div>
            )}
            />
    </>
  )
}

export default LightBoxSlider
