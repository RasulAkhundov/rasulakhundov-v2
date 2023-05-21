"use client";
import { useEffect } from 'react';

////PLUGINS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

////STYLES
import NavbarStyle from '../../styles/navbar.module.scss';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {

   useEffect(() => {
      /////NAVBAR MARQUEE
      gsap.fromTo(`.${NavbarStyle.marqueeInner}`, {
         xPercent: 0,
         duration: 8.5,
         ease: "linear"
      }, {
         xPercent: -100,
         repeat: -1,
         duration: 8.5,
         ease: "linear"
      });
   }, [])

   return (
      <div className={NavbarStyle.navbar} id='navbarWrapper'>
         <div className={NavbarStyle.navbarInner}>

            {/* LOGO START */}
            <a href="/" className={`${NavbarStyle.logoA} button_hover`}>
               <svg className={`${NavbarStyle.logoSvg} magnetic_button`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501.92 617.64" fill='#fff'>
                  <path d="m496.99,564.92l-168.55-218.02c85.41-26.66,113.41-74.05,113.41-74.05,58.15-103.82-10.87-195.43-10.87-195.43C376.7,5.24,263.59.13,263.59.13c0,0-208.61-.28-230.77,0C10.65.41,2.98,21.16,2.98,21.16c-8.24,19.33,6.25,36.38,6.25,36.38l186.44,236.3s-124.71-2.02-162.62,0C-4.86,295.86.44,331.44.44,331.44c0,0-.99,247.26,0,255.02s9.35,32.52,37.35,31.12,34.03-30.69,34.03-30.69v-223.57h180.64s160.54,211.08,186.81,239.94c26.28,28.86,52.99,5.17,52.99,5.17,18.52-16.8,4.74-43.51,4.74-43.51ZM110.16,69.1h114.59c98.65,0,141.72,40.92,141.72,40.92,18.74,20.19,25.73,42.14,27.14,61.69,2.91,40.29-18.42,78.27-53.44,98.39-30.41,17.48-59.42,18.26-59.42,18.26L110.16,69.1Z" />
               </svg>
            </a>
            {/* LOGO END */}

            {/* AVALIABLE START */}
            <div className={`${NavbarStyle.avaliableHire} button_hover`}>
               <div className={NavbarStyle.marqueeScroller}>
                  <div className={NavbarStyle.marqueeInner}>
                     <h2>
                        AVALIABLE FOR HIRE
                        <div className={NavbarStyle.marqueeDot}></div>
                     </h2>
                     <h2>
                        AVALIABLE FOR HIRE
                        <div className={NavbarStyle.marqueeDot}></div>
                     </h2>
                  </div>
                  <div className={NavbarStyle.marqueeInner}>
                     <h2>
                        AVALIABLE FOR HIRE
                        <div className={NavbarStyle.marqueeDot}></div>
                     </h2>
                     <h2>
                        AVALIABLE FOR HIRE
                        <div className={NavbarStyle.marqueeDot}></div>
                     </h2>
                  </div>
               </div>
            </div>
            {/* AVALIABLE END */}

            {/* CONTACT BUTTON START */}
            <a href="mailto:rasuldev@mail.ru" className={`${NavbarStyle.contactButton} button_hover navbar_contact_magnetic__button`}>
               <button type='button'>CONTACT</button>
            </a>
            {/* CONTACT BUTTON END */}
         </div>
      </div>
   )
}

export default Navbar;