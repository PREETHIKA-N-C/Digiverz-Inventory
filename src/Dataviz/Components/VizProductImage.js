import React, { useState } from "react";
import Lightbox from "react-spring-lightbox";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const VizProductImage = ({ images }) => {
  console.log(images);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const gotoPrevious = () => {
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
  };
  const gotoNext = () => {
    currentImageIndex + 1 < images.urls.length &&
      setCurrentIndex(currentImageIndex + 1);
  };
  const lightboxClick = (e) => {
    setLightBoxOpen(true);
    setCurrentIndex(e);
  };
  return (
    <>
      {images ? (
        <>
          {images.urls.map((data, idx) => {
            console.log(data);
            return (
              <img
                className="w-[450px] h-[250px] rounded-[5px] hover:border-[2px] hover:border-[#ffffff3a] hover:opacity-25"
                src={data.src}
                alt={data.alt}
                onClick={() => lightboxClick(idx)}
              />
            );
          })}

          <Lightbox
            isOpen={lightBoxOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images.urls}
            currentIndex={currentImageIndex}
            className="bg-[#000000c9]"
            renderHeader={() => (
              <div className="w-[100%] h-[60px] p-5 flex justify-end ">
                <FiX
                  color="#ffffff"
                  onClick={() => setLightBoxOpen(false)}
                  className="w-[25px] h-[25px] cursor-pointer rounded-md hover:bg-[#ffffff3a]"
                />
              </div>
            )}
            renderNextButton={() => (
              <div
                className="mr-10 cursor-pointer rounded-[5px] hover:bg-[#ffffff3a] z-[999]"
                onClick={gotoNext}
              >
                <FiChevronRight
                  color="#ffffff"
                  className="w-[35px] h-[35px] "
                />
              </div>
            )}
            renderPrevButton={() => (
              <div
                className="ml-10 cursor-pointer rounded-[5px] hover:bg-[#ffffff3a] z-[999]"
                onClick={gotoPrevious}
              >
                <FiChevronLeft color="#ffffff" className="w-[35px] h-[35px] " />
              </div>
            )}
          />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default VizProductImage;
