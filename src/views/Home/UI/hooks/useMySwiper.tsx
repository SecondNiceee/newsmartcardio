import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import { SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper';

const useMySwiper = () => {
    const swiperRef = useRef<SwiperRef>(null)
    const zoomRef = useRef(null)

    const [zoomSlider, setZoomSlider] = useState<boolean>(false)
    const [activeSlide, setActiveSlide] = useState<number>(0)


    const changeSlide = useCallback( (index:number) => {
        swiperRef.current?.swiper.slideTo(index)
    }, [])

    const handleSlideChange = useCallback( (swiper : SwiperInstance) => {
        setActiveSlide(swiper.realIndex)  
      } , [setActiveSlide] )

    const renderFunction = useCallback((src:string, index:number) => {
        return (
            <SwiperSlide key={index} className='mx-auto flex justify-center cursor-pointer'>
                <Image className='sm:w-[80%] w-[100%] smartcardio-slider-clamp object-cover rounded-md' alt='#' src={src} width={1900} height={1300}  />
            </SwiperSlide>
        )
    }, [])
    const renderZoomSwiper = useCallback( (src:string, index:number) => {
        return (
            <SwiperSlide key={index} className='mx-auto flex justify-center'>
                <Image className='w-fit h-[100vh] object-contain' alt='#' src={src} width={1900} height={1300}  />
            </SwiperSlide>
        )
    }, [] ) 
    const closeZoom = useCallback( () => {
        setZoomSlider(false)
    }, [] )
    return {swiperRef, zoomRef, zoomSlider, activeSlide, renderFunction, renderZoomSwiper, closeZoom, handleSlideChange, setZoomSlider, changeSlide}

}

export default useMySwiper;