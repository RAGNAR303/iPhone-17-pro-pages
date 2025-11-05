import { ArrowDownIcon } from "@phosphor-icons/react";
import iphoneHero from "../../public/assets/hero.jpg";

import backgroundVideo from "../../public/video/iPhone17ProVideo.mp4";
function Hero() {
  return (
    <section className="relative overflow-hidden  h-[300px] md:h-screen ">
      {/* <div className="absolute top-18 bottom-0 left-0 right-0 z-10 ">
            <img
          className="object-cover opacity-90 w-full  md:w-full "
          src={iphoneHero}
          alt="iphone"
          loading="lazy"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
          </div> */}
      <video
        poster={iphoneHero}
        autoPlay
        muted
        loop
        className="w-full h-screen absolute -mt-50 md:mt-20  md:object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80 "></div>
      <div>
        <ArrowDownIcon
          size={32}
          weight="bold"
          className="size-6 bottom-8 absolute left-1/2 z-10 animate-bounce"
          data-aos="zoom-in"
          data-aos-duration="2000"
        />
      </div>
    </section>
  );
}

export default Hero;
