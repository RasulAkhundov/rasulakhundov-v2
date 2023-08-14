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
import ArrowLeftDown from '../public/arrow/left-down.png';
import Globe from '../public/header/globe.png';
import FooterLogoWhite from '../public/logo/logo-w.png';
import ArrowRightBig from '../public/arrow/right-big.png';

////COMPONENTS
import Cursor from '@/components/Cursor/Cursor';
import CursorWorks from '@/components/CursorWorks/CursorWorks';
import Navbar from '@/components/Navbar/Navbar';
import Laoding from '@/components/Loading/Loading';
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

function Home() {

  const { scroll } = useContext(SmoothScrollContext);

  useEffect(() => {
    function pageLoading() {
      setTimeout(() => {
        $('#pageLoadingText').text('Salam')
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
      }, 2000);
      setTimeout(() => {
        $('#loadingWrapper').css('display', 'none');
        $('#navbarWrapper').css('opacity', '1');
        $('#headerImgWrapper').css('opacity', '1');
        $('#headerMarqueeWrapper').css('transform', 'translate(0) rotate(0deg)');
        $('#headerLocatedArea').css('left', '0');
        $('#headerRightElement').css('opacity', '1');
      }, 3200);
    }
    pageLoading();

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

    // gsap.to('#movingArrow1', {
    //   left: '100%',
    //   scrollTrigger: {
    //     trigger: '#servicesWrapper',
    //     // scroller: '',
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top top",
    //     onUpdate: self => console.log(self.direction)
    //   }
    // })
  })

  return (
    <main >
      {/* HEADER START */}
      <Navbar />
      {/* HEADER END */}

      {/* CURSOR START */}
      <Cursor />
      {/* CURSOR END */}

      {/* CURSOR WORKS START */}
      <CursorWorks />
      {/* CURSOR WORKS END */}

      {/* LOADING START */}
      <Laoding />
      {/* LOADING END */}

      <section className={homeStyle.homeSection} id='home_section' data-scroll-container>

        <SmoothScrollProvider options={{
          smooth: true,
          lerp: 0.075,
          direction: "vertical",
          smartphone: {
            smooth: true,
            direction: "vertical",
            touchMultiplier: 1,
            multiplier: 2
          },
          tablet: {
            smooth: true,
            direction: "vertical",
            touchMultiplier: 1,
            multiplier: 2
          }
        }}>
          {/* HEADER START */}
          <div className={homeStyle.headerWrapper} data-scroll-section>

            {/* LOCATED AREA START */}
            <div className={homeStyle.locatedArea} id='headerLocatedArea' onClick={() => window.open('https://www.google.com/maps/place/Bak%C4%B1/@40.3946939,49.7723878,12z/data=!3m1!4b1!4m6!3m5!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924!16zL20vMDFnZjU', '_blank')}>
              <div className={homeStyle.locatedAreaText}>
                <h2>Located<br /> in the<br /> Azerbaijan</h2>
              </div>

              <div className={homeStyle.digitalBall}>
                <Image
                  src={Globe}
                  width={30}
                  height={30}
                  alt='globe'
                />
              </div>
            </div>
            <div className={homeStyle.locatedAreaResponsive} onClick={() => window.open('https://www.google.com/maps/place/Bak%C4%B1/@40.3946939,49.7723878,12z/data=!3m1!4b1!4m6!3m5!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924!16zL20vMDFnZjU', '_blank')}>
              <Image
                src={Globe}
                width={30}
                height={30}
                alt='globe'
              />
            </div>
            {/* LOCATED AREA END */}

            {/* BACKGROUND IMAGE START */}
            <div className={homeStyle.backgroundImgWrapper} id='headerImgWrapper'>
              <div className={homeStyle.backgroundImg} data-scroll data-scroll-speed="-2" data-scroll-offset="0%, -30%"></div>
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
                <span>Frontend</span>
                <span>Web Developer</span>
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

          {/* ABOUT START */}
          <div className={homeStyle.aboutWrapper} data-scroll-section>
            <div className={homeStyle.aboutWrapperInner}>
              <div className={homeStyle.firstTextWrapper}>
                <h2>I am a front-end developer. I enjoy creating beautiful and user-friendly web experiences. With several years of experience in the industry, I have worked on a wide range of projects, including responsive web design, interactive web applications, and performance optimization.</h2>
              </div>
              <div className={homeStyle.secondTextWrapper}>
                <span>My goal is to leverage my skills and knowledge to contribute to innovative projects and help businesses achieve their digital goals.</span>
              </div>

              <a href="https://docs.google.com/uc?export=download&id=1tZuFjV8QnMQ3nnlw3ZlVgo4C5D9Ux_rR" className={`${homeStyle.downloadCv} button_hover magnetic__button`} data-scroll data-scroll-speed="1">
                <button type='sumbit'>Download CV</button>
              </a>
            </div>
          </div>
          {/* ABOUT END */}

          {/* SECVICES WRAPPER START */}
          <div className={homeStyle.servicesWrapper} id='#servicesWrapper' data-scroll-section>
            <div className={homeStyle.wrap}>
              <h2>User Experience</h2>
              <div className={homeStyle.movingArrowWrap} id='movingArrow1' data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal" data-scroll-position="left">
                <Image
                  src={ArrowRightBig}
                  width={100}
                  height={100}
                  alt='Arrow Right'
                />
              </div>
            </div>
            <div className={homeStyle.wrap}>
              <h2>Responsive Design</h2>
              <div className={homeStyle.movingArrowWrap} id='movingArrow2' data-scroll data-scroll-speed="-6.5" data-scroll-direction="horizontal" data-scroll-position="left">
                <Image
                  src={ArrowRightBig}
                  width={100}
                  height={100}
                  alt='Arrow Right'
                />
              </div>
            </div>
            <div className={homeStyle.wrap}>
              <h2>Optimization</h2>
              <div className={homeStyle.movingArrowWrap} id='movingArrow3' data-scroll data-scroll-speed="-5" data-scroll-direction="horizontal" data-scroll-position="left">
                <Image
                  src={ArrowRightBig}
                  width={100}
                  height={100}
                  alt='Arrow Right'
                />
              </div>
            </div>
          </div>
          {/* SERVICES WRAPPER END */}

          {/* WORKS WRAPPER START */}
          <div className={homeStyle.worksWrapper} data-scroll-section>
            <div className={homeStyle.worksWrapperInner}>

              <div className={homeStyle.worksWrapperTitle}>
                <div className={homeStyle.worksWrapperTitleInner}>
                  <span>projects</span>
                </div>
              </div>

              <div className={homeStyle.allWorksWrapper}>
                <a href="https://onveiv.com/" className='works_hover' target='_blank'>
                  <div className={homeStyle.singleWorksWrapper} data-work-image="onveivWorkImg">
                    <div className={homeStyle.singleWorksWrapperInner}>
                      <h2>Onveiv</h2>
                      <span>2023</span>
                    </div>
                  </div>
                </a>
                <a href="https://iac.monkigo.com/" className='works_hover' target='_blank'>
                  <div className={homeStyle.singleWorksWrapper} data-work-image="monkigoWorkImg">
                    <div className={homeStyle.singleWorksWrapperInner}>
                      <h2>IAC2023</h2>
                      <span>2023</span>
                    </div>
                  </div>
                </a>
                <a href="https://techvio-ar.netlify.app/" className='works_hover' target='_blank'>
                  <div className={homeStyle.singleWorksWrapper} data-work-image="techvioWorkImg">
                    <div className={homeStyle.singleWorksWrapperInner}>
                      <h2>Techvio</h2>
                      <span>2022</span>
                    </div>
                  </div>
                </a>
                <a href="https://nft-ar.netlify.app/" className='works_hover' target='_blank'>
                  <div className={homeStyle.singleWorksWrapper} data-work-image="nftWorkImg">
                    <div className={homeStyle.singleWorksWrapperInner}>
                      <h2>NFT</h2>
                      <span>2022</span>
                    </div>
                  </div>
                </a>
                <a href="https://petshop-ar.netlify.app/" className='works_hover' target='_blank'>
                  <div className={homeStyle.singleWorksWrapper} data-work-image="petshopWorkImg">
                    <div className={homeStyle.singleWorksWrapperInner}>
                      <h2>Petshop</h2>
                      <span>2022</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* WORKS WRAPPER END */}

          {/* SCROLLER WRAPPER START */}
          <div className={homeStyle.scroller} data-scroll-section>
            <div className={homeStyle.singleScroller} data-scroll data-scroll-speed="3" data-scroll-direction="horizontal">
              <div className={homeStyle.scrollerItem}>
                <h2>NodeJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Css3</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Json</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Ajax</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Html5</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>JavaScript</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>ReactJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Bootstrap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Jquery</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NextJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Axios</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Gsap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NodeJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Css3</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Json</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Ajax</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Html5</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>JavaScript</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>ReactJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Bootstrap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Jquery</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NextJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Axios</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Gsap</h2>
              </div>
            </div>
            <div className={homeStyle.singleScroller} data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal">
              <div className={homeStyle.scrollerItem}>
                <h2>NodeJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Css3</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Json</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Ajax</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Html5</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>JavaScript</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>ReactJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Bootstrap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Jquery</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NextJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Axios</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Gsap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NodeJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Css3</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Json</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Ajax</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Html5</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>JavaScript</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>ReactJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Bootstrap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Jquery</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NextJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Axios</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Gsap</h2>
              </div>
            </div>
            <div className={homeStyle.singleScroller} data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
              <div className={homeStyle.scrollerItem}>
                <h2>NodeJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Css3</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Json</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Ajax</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Html5</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>JavaScript</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>ReactJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Bootstrap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Jquery</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NextJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Axios</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Gsap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NodeJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Css3</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Json</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Ajax</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Html5</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>JavaScript</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>ReactJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Bootstrap</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Jquery</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>NextJS</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Axios</h2>
              </div>
              <div className={homeStyle.scrollerItem}>
                <h2>Gsap</h2>
              </div>
            </div>
          </div>
          {/* SCROLL WRAPPER END */}

          {/* FOOTER START */}
          <div className={homeStyle.footerWrapper} data-scroll-section>
            <footer data-scroll data-scroll-speed="-4" data-scroll-position="bottom">
              <div className={homeStyle.footerInner}>
                <div className={homeStyle.innerTop}>
                  <h2>Let’s work</h2>
                  <h2>together</h2>
                  <Image
                    src={ArrowLeftDown}
                    width={20}
                    height={20}
                    alt='arrow left down'
                  />
                </div>

                <div className={homeStyle.emailPhone}>
                  <a href="mailto:rasul.dev@mail.ru" className='button_hover'>rasul.dev@mail.ru</a>
                  <a href="tel:+994 (55) 507 44 98" className='button_hover'>+994 55 507 44 98</a>
                </div>

                <div className={homeStyle.innerBottom}>
                  <Image
                    src={FooterLogoWhite}
                    width={40}
                    height={50}
                    alt='Logo White'
                  />

                  <div className={homeStyle.footerSocials}>
                    <span>socials</span>

                    <div className={homeStyle.socialsWrapper}>
                      <a href="https://www.instagram.com/akhundovpk/" target='_blank' className='button_hover'>Instagram</a>
                      <a href="https://github.com/RasulAkhundov" target='_blank' className='button_hover'>Github</a>
                      <a href="https://www.linkedin.com/in/rasulakhundov/" target='_blank' className='button_hover'>Linkedin</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* FOOTER END */}

        </SmoothScrollProvider>
      </section>
    </main >
  )
}

export default Home;