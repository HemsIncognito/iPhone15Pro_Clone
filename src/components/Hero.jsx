import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { EasePack } from "gsap/all"
import { useState } from "react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect } from "react"

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
      duration: 1,
      transition: EasePack,
    } )

    gsap.to('#cta', {opacity:1, delay: 1.5, duration:1, y: -50})
  }, [])

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  })

  return <>
      <section className="w-full nav-height bg-black relative sm:my-20">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">iPhone 15 Pro</p>
          <div className="md:w-10/12 w-9/12">
            <video className="pointer-events-none" autoPlay muted playsInline key={videoSrc}>
              <source src={videoSrc} type="video/mp4"/>
            </video>
          </div>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 my-20">
          <a href="#highlights" className="btn">Buy</a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </section>
    </>
}

export default Hero
