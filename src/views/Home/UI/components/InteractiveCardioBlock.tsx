"use client"
import React, { useRef } from 'react';
import InteractiveLottie from './InteractiveLottie';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

const InteractiveCardioBlock = () => {
    const interactiveRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const onMouseEnter = () => {
        interactiveRef.current?.classList.remove("show")
        textRef.current?.classList.add("show")
    }
    const onMouseLeave = () => {
        interactiveRef.current?.classList.add("show")
        textRef.current?.classList.remove("show")
    }
    const onButtonClick = () => {
        alert("Тут перевод куда - то")
    }
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='interactive__cardio'>
            <InteractiveLottie ref={interactiveRef} />
            <div className="cardio-block"/>
            <div ref={textRef}  className="cardio-tblock">
                <p className='tblock__text'>Полностью беспроводной карманный прибор для мониторинга вашего здоровья</p>
                <OrderButton className='intersection__order-button black-border' onClick={onButtonClick}>
                    <p className='button-text black'>Подробнее об устройстве</p>
                </OrderButton>
            </div>
        </div>
    );
};

export default InteractiveCardioBlock;