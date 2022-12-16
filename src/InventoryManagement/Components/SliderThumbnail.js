import React from 'react'
import './SliderThumbnail.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
      // let timeout
      //   let mouseOver = false
      //   function clearNextTimeout() {
      //     clearTimeout(timeout)
      //   }
      //   function nextTimeout() {
      //     clearTimeout(timeout)
      //     if (mouseOver) return
      //     timeout = setTimeout(() => {
      //       slider.next()
      //     }, 2000)
      //   }
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active")
      }
  
      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }
  
      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
        // slider.container.addEventListener("mouseover", () => {
        //   mouseOver = true
        //   clearNextTimeout()
        // })
        // slider.container.addEventListener("mouseout", () => {
        //   mouseOver = false
        //   nextTimeout()
        // })
        // nextTimeout()
      })
      // slider.on("dragStarted", clearNextTimeout)
      //   slider.on("animationEnded", nextTimeout)
      //   slider.on("updated", nextTimeout)
    }
  }

function SliderThumbnail() {
    // const [opacities, setOpacities] = React.useState([])
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
      },[
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 10000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
      const [thumbnailRef] = useKeenSlider(
        {
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
          loop: true,
        },
        [ThumbnailPlugin(instanceRef)]
      )
    
      return (
        
        <div className='slider_cont '>
          <div ref={sliderRef} className="keen-slider-cont ">
            <div className="keen-slider__slide number-slide1">1</div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div>
          </div>
    
          <div ref={thumbnailRef} className="thumbnail thumbnail-cont">
            <div className="keen-slider__slide number-slide1">1</div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            <div className="keen-slider__slide number-slide4">4</div>
            <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div>
          </div>
        </div>
      )
}

export default SliderThumbnail