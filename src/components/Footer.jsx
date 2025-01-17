import { useLocation } from 'react-router-dom'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Footer = ({ locationProps }) => {
  gsap.registerPlugin(ScrollTrigger)
  const footerLineRef = useRef(null)
  const contactRef = useRef(null)
  const gotProjectRef = useRef(null)
  const connectRef = useRef(null)
  const footerLine = footerLineRef.current
  const contact = contactRef.current
  const gotProject = gotProjectRef.current
  const connect = connectRef.current
  const location = useLocation()
  const [currentLocation, useCurrentLocation] = useState('')


  useEffect(() => {
    useCurrentLocation(locationProps)
    console.log("footer use effect");
    gsap.fromTo(footerLine, {
      width: 0,
    }, {
      width: "100%",
      duration: 1.5,
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(gotProject, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1,
      ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(contact, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.2,
      // ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })
    gsap.fromTo(connect, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      // ease: "Bounce.easeOut",
      scrollTrigger: {
        trigger: footerLine
      }


    })

  }, [currentLocation, location])
  return (
    <footer
      className="tracking-[0.5px] pt-24 pb-24 px-6 sm:px-16 bg-darkShade text-lightShade dark:bg-lightShade dark:text-darkShade"
    >
      <div ref={footerLineRef} className='bg-opaque dark:bg-darkShade h-[1px] w-full'>
      </div>
      <div className='mt-14 overflow-visible'>
        <h3 ref={gotProjectRef} className='text-xl overflow-visible ml-16 text-right '>
          Got an interesting project you’d
          like to discuss?
        </h3>
        <section className='md:flex md:justify-between'>
          <div ref={contactRef}>
            <p className='text-opaque mt-12 md:mt-24 mb-3'>
              Contact.
            </p>
            <a className='font-medium' href="mailto:Ralph.flourish@yahoo.com">Ralph.flourish@yahoo.com</a>
          </div>
          <div ref={connectRef}>
            <p className='text-opaque mt-24 mb-3'>
              Connect with me.
            </p>
            <div className='flex font-medium gap-4'>
              <a href="">Notion</a>
              <a href="">Dribbble</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>
        </section>

      </div>

    </footer>

  )
}

export default Footer
