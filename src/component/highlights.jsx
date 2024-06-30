import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./videocarousel";


const HighLights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
    })
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25
    })
  }, [])
  return (
    <section id='highlights' className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id='title' className="section-heading font-poppins">Get the highlights.</h1>
          <div className="flex flex-wrap items-center gap-1">
            <p className="link font-poppins">Watch the film</p>
            <img src={watchImg} alt='watch' className="ml-2 link"></img>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <p className="link font-poppins">Watch the event</p>
            <img src={rightImg} alt='right' className="ml-2 link"></img>
          </div>

        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default HighLights;
