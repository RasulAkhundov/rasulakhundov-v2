"use client";
import { useEffect, useState } from 'react';

////PLUGINS
import { gsap } from 'gsap';
import $ from 'jquery';
import Image from 'next/image';

import cursorWorksStyle from '../../styles/cursorWorks.scss';
import homeStyle from '../../styles/home.module.scss';

function Cursor() {

   const [workImage, setWorkImage] = useState('');

   useEffect(() => {
      ///////CURSOR ANIMATION
      gsap.set(`.cursorWorksWrapper`, { xPercent: -50, yPercent: -50 });

      let xTo = gsap.quickTo(`.cursorWorksWrapper`, "x", { duration: 0.9, ease: "power3" }),
         yTo = gsap.quickTo(`.cursorWorksWrapper`, "y", { duration: 0.9, ease: "power3" });

      window.addEventListener("mousemove", e => {
         xTo(e.clientX);
         yTo(e.clientY);
      });

      $(`.${homeStyle.singleWorksWrapper}`).on('mouseenter', (e) => {
         setWorkImage(e.currentTarget.dataset.workImage);
      });
   });

   return (
      <div className="cursorWorksWrapper">
         <div className={`workImage ${workImage && workImage}`}></div>
      </div>
   )
}

export default Cursor;