"use client";
import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScrollProvider } from '../utils/SmoothScroll.context';
import { SmoothScrollContext } from '../utils/SmoothScroll.context'
///STYLES
import homeStyle from '../styles/home.module.scss';

///IMAGES
import Image from 'next/image';
import ArrowRightDown from '../public/arrow/right-down.png';

////COMPONENTS
import Cursor from '@/components/Cursor/Cursor';
import Navbar from '@/components/Navbar/Navbar';
import Laoding from '@/components/Loading/Loading';
import $ from 'jquery';
import Lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);

function Home() {

  const { scroll } = useContext(SmoothScrollContext);
  const globe = useRef(null);
  const globeR = useRef(null);

  useEffect(() => {
    function pageLoading() {
      setTimeout(() => {
        $('#pageLoadingText').text('Hello')
      }, 200);
      setTimeout(() => {
        $('#pageLoadingText').text('Guten tag')
      }, 400);
      setTimeout(() => {
        $('#pageLoadingText').text('स्वागत हे')
      }, 600);
      setTimeout(() => {
        $('#pageLoadingText').text('Ciao')
      }, 800);
      setTimeout(() => {
        $('#pageLoadingText').text('Olá')
      }, 1000);
      setTimeout(() => {
        $('#pageLoadingText').text('おい')
      }, 1200);
      setTimeout(() => {
        $('#pageLoadingText').text('Hallå')
      }, 1400);
      setTimeout(() => {
        $('#pageLoadingText').text('Hallo')
      }, 1600);
      setTimeout(() => {
        $('#pageLoadingText').text('Bonjour')
      }, 1800);
      setTimeout(() => {
        $('#pageLoadingText').css('transform', 'translate(-375%, -300%) scale(100)')
      }, 3000);
      setTimeout(() => {
        $('#loadingWrapper').css('display', 'none');
        $('#navbarWrapper').css('opacity', '1');
        $('#headerImgWrapper').css('opacity', '1');
        $('#headerMarqueeWrapper').css('transform', 'translate(0) rotate(0deg)');
        $('#headerLocatedArea').css('left', '0');
        $('#headerRightElement').css('opacity', '1');
      }, 4200);
    }
    pageLoading();

    ///////HEADER GLOBE ANIM
    Lottie.loadAnimation({
      container: globe.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/videos/globe.json')
    });
    Lottie.loadAnimation({
      container: globeR.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/videos/globe.json')
    });

  }, []);

  useEffect(() => {
    //////BG NAME LETTERS MOVING
    gsap.fromTo(`.${homeStyle.nameWrapInner}`, {
      xPercent: 0,
      duration: 15,
      ease: "linear"
   }, {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear"
   });
  })

  return (
    <main >
      {/* HEADER START */}
      <Navbar />
      {/* HEADER END */}

      {/* CURSOR START */}
      <Cursor />
      {/* CURSOR END */}

      {/* LOADING START */}
      <Laoding />
      {/* LOADING END */}

      <section className={homeStyle.homeSection} id='home_section' data-scroll-container>

        <SmoothScrollProvider options={{
          smooth: true,
          lerp: 0.075,
          // direction: "vertical",
          smartphone: {
            smooth: true,
            direction: "vertical",
            touchMultiplier: 1,
          },
          tablet: {
            smooth: true,
            direction: "vertical",
            touchMultiplier: 1,
          }
        }}>
          {/* HEADER START */}
          <div className={homeStyle.headerWrapper} data-scroll-section>

            {/* LOCATED AREA START */}
            <div className={homeStyle.locatedArea} id='headerLocatedArea'>
              <div className={homeStyle.locatedAreaText}>
                <h2>LOCATED<br /> IN THE<br /> AZERBAIJAN</h2>
              </div>

              <div className={homeStyle.digitalBall}>
                <div className="locatedAreaGlobe" ref={globe}></div>
              </div>
            </div>
            <div className={homeStyle.locatedAreaResponsive}>
              <div className="locatedAreaGlobe" ref={globeR}></div>
            </div>
            {/* LOCATED AREA END */}

            {/* BACKGROUND IMAGE START */}
            <div className={homeStyle.backgroundImgWrapper} id='headerImgWrapper'>
              <div className={homeStyle.backgroundImg} data-scroll data-scroll-speed="-2"></div>
            </div>
            {/* BACKGROUND IMAGE END */}

            {/* RIGHT NAME START */}
            <div className={homeStyle.rightElement} id='headerRightElement'>
              <div className='image_wrapper' data-scroll data-scroll-speed="1">
                <Image
                  src={ArrowRightDown}
                  width={20}
                  height={20}
                  alt='arrow bottom'
                />
              </div>

              <div className={homeStyle.rightElementText}>
                <span>FRONTEND</span>
                <span>WEB DEVELOPER</span>
              </div>

            </div>
            {/* RIGHT NAME END */}

            {/* BIG NAME START */}
            <div className={homeStyle.bigNameWrapper}>
              <div className={homeStyle.nameWrapper} id='headerMarqueeWrapper'>
                <div className={homeStyle.nameWrapInner} data-moving-name-header>
                  <h1>
                    Rasul Akhundov
                    <span>—</span>
                  </h1>
                  <h1>
                    Rasul Akhundov
                    <span>—</span>
                  </h1>
                </div>
                <div className={homeStyle.nameWrapInner} data-moving-name-header>
                  <h1>
                    Rasul Akhundov
                    <span>—</span>
                  </h1>
                  <h1>
                    Rasul Akhundov
                    <span>—</span>
                  </h1>
                </div>
              </div>
            </div>
            {/* BIG NAME END */}
          </div>
          {/* HEADER END */}

          <div className={homeStyle.aboutWrapper} data-scroll-section>
            <h2>TEST TEST</h2>
          </div>

        </SmoothScrollProvider>
      </section>
    </main >
  )
}

export default Home;