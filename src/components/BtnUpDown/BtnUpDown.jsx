"use client"
import { BsArrowUpCircle } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { usePathname } from 'next/navigation';
import { Btn } from "./BtnUpDown.styled";

const BtnUpDown = () => {
  const [showButton, setShowButton] = useState(false);
  const pathname = usePathname();
  

  const isAdminPanel = pathname.includes("/don-pedro")

  

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

 return (
  !isAdminPanel && showButton && <Btn onClick={handleClickTop} type="button"><BsArrowUpCircle size={24}/>
   </Btn>)

  
}

export default BtnUpDown