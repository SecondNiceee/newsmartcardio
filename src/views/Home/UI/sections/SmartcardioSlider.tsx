import React from "react";
import { smartardioSliderImage } from "../../config/smarcardioSliderImages";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";

import "swiper/css";
import ZoomSlider from "@/shared/UI/ZoomSlider/ZoomSlider";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import Slider from "../components/Slider";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import useDefaultSwiper from "../../../../shared/hooks/useDefaultSwiper";
import useZoomSwiper from "../../../../shared/hooks/useZoomSwiper";

const SmartcardioSlider = () => {
  
  const {activeSlide, handleSlideChange, renderFunction, swiperRef} = useDefaultSwiper({})

  const {closeZoom , renderZoomSwiper, zoomRef, zoomSlider, setZoomSlider} = useZoomSwiper()

  const buttonHandler = () => {};

//   .how-it-works__logo:first-of-type{

//     left: 5%;
//     top: 10%;

// }
// .how-it-works__logo:last-of-type{
//     right: 5%;
//     bottom: 10%;
// }
  return (
    <section className="smartcardio-slider relative">

      <Image className="w-[15%] md:block hidden absolute right-[5%] top-[10%] opacity-50 blur-[30px]" src={"/images/logo.jpg"} alt='#' width={1200} height={1006} />
      <Image className="left-[5%] md:block hidden bottom-[10%] absolute w-[15%] opacity-50 blur-[30px]" src={"/images/logo.jpg"} alt='#' width={1200} height={1006} />

      <div className="container">
        <Reveal
          character={CHARACTER.LEFT}
          className="smartcardio-slider__header"
        >
          Прибор СмартКардио®
        </Reveal>

        <Reveal
          character={CHARACTER.RIGHT}
          className="smartcardio-slider__main"
        >
          <div className="my-slider-wrapper">
            <Slider
              id={3}
              arrowType="circle"
              smallSliderStyles={{
                className: "w-[50%] object-contain ",
                slidesPerView: 8,
                spaceBetween: 10,
              }}
              renderMap={smartardioSliderImage}
              render={renderFunction}
              ref={swiperRef}
              handleSlideChange={handleSlideChange}
              setZoomSlider={setZoomSlider}
            />
          </div>
        </Reveal>

          <Reveal character={CHARACTER.LEFT}>
            <p className="smartcardio-slider__p">
                Разработан и произведен в <span>России</span>
            </p>
          </Reveal>

        <Reveal className="w-[100%] flex justify-center" character={CHARACTER.RIGHT}>
          <OrderButton
            className="smartcardio-slider__button"
            onClick={buttonHandler}
          >
            <p>Закать</p>
          </OrderButton>
        </Reveal>
      </div>


      <CSSTransition nodeRef={zoomRef} classNames={"zoom"}   timeout={{enter : 50, exit : 400}} in = {zoomSlider} unmountOnExit mountOnEnter>

          <ZoomSlider
              ref={zoomRef}
              initialSlide={activeSlide}
              closeZoom={closeZoom}
              slides={smartardioSliderImage}
              mainSwiperRef={swiperRef}
              render={renderZoomSwiper}
            />

      </CSSTransition>

      {/* <CssTransition wrapperRef={zoomRef} state={zoomSlider}>


      </CssTransition> */}


    </section>
  );
};

export default SmartcardioSlider;
