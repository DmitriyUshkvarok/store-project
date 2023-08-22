"use client"
import { BsArrowUpCircle } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Btn } from "./BtnUpDown.styled";

const BtnUpDown = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickTop = () => {
    scroll.scrollToTop({
      duration: 250,
      smooth: 'easeInOutQuad',
    });
  }

 return ( showButton && <Btn onClick={handleClickTop} type="button"><BsArrowUpCircle size={24}/></Btn>)

  
}

export default BtnUpDown