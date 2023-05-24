"use client";
import { useEffect } from 'react';

////PLUGINS
import { gsap } from 'gsap';
import $ from 'jquery';

import cursorStyle from '../../styles/cursor.scss';

function Cursor() {

   useEffect(() => {
      ///////CURSOR ANIMATION
      gsap.set(`.cursorWrapper`, { xPercent: -50, yPercent: -50 });

      let xTo = gsap.quickTo(`.cursorWrapper`, "x", { duration: 0.6, ease: "power3" }),
         yTo = gsap.quickTo(`.cursorWrapper`, "y", { duration: 0.6, ease: "power3" });

      window.addEventListener("mousemove", e => {
         xTo(e.clientX);
         yTo(e.clientY);
      });


      /////////CURSOR BUTTON HOVER ANIMATION
      $('.button_hover').on('mouseenter', (e) => {
         $(`.cursorWrapper`).removeClass('works_hover__anim');
         $(`.cursorWrapper`).removeClass('button_hover__default');
         $(`.cursorWrapper`).addClass('button_hover__anim');
         $('#cursorText').text('');
      });

      $('.button_hover').on('mouseleave', () => {
         $(`.cursorWrapper`).removeClass('works_hover__anim');
         $(`.cursorWrapper`).removeClass('button_hover__anim');
         $(`.cursorWrapper`).addClass('button_hover__default');
         $('#cursorText').text('');
      });

      /////////CURSOR WORKS HOVER ANIMATION
      $('.works_hover').on('mouseenter', (e) => {
         $(`.cursorWrapper`).removeClass('button_hover__default');
         $(`.cursorWrapper`).removeClass('button_hover__anim');
         $(`.cursorWrapper`).addClass('works_hover__anim');
         $('#cursorText').text('Visit site');
         $('.cursorWorksWrapper').css('width', '500px');
      });

      $('.works_hover').on('mouseleave', (e) => {
         $(`.cursorWrapper`).removeClass('button_hover__anim');
         $(`.cursorWrapper`).removeClass('works_hover__anim');
         $(`.cursorWrapper`).addClass('button_hover__default');
         $('#cursorText').text('');
         $('.cursorWorksWrapper').css('width', '0');
      });


      if (window.innerWidth >= 1200) {
         ////////CURSOR BUTTON MAGNETIC ANIMATION
         $('.magnetic__button').on('mouseenter', (e) => {
            gsap.to('.magnetic__button', { duration: 0.7 });
            gsap.to($(e.currentTarget).find('button'), { duration: 0.7 });
         });

         $('.magnetic__button').on('mouseleave', (e) => {
            gsap.to('.magnetic__button', { duration: 0.5 });
            gsap.to($(e.currentTarget).find('button'), { duration: 0.5, x: 0, y: 0 });
         })

         $('.magnetic__button').on('mousemove', (e) => {
            parallaxIt(e, 80);
         });

      }
   });

   function parallaxIt(e, movement) {
      var $this = $(e.target);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to($(e.currentTarget).children()[0], {
         duration: 0.3,
         x: (relX - $this.width() / 2) / $this.width() * movement,
         y: (relY - $this.height() / 2) / $this.height() * movement,
         ease: "linear"
      });
   }

   return (
      <div className="cursorWrapper button_hover__default">
         <span className={cursorStyle.cursorText} id='cursorText'></span>
      </div>
   )
}

export default Cursor;