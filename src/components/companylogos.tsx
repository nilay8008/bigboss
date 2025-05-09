import Image from 'next/image'
import acmeLogo from "../assets/images/kc.png";
import quantumLogo from "../assets/images/sc11.png";
import echoLogo from "../assets/images/bd1.png";
import celestialLogo from "../assets/images/sc33.png";
import pulseLogo from "../assets/images/m22.png";
import apexLogo from "../assets/images/sc44.png";

export default function LogoCarousel() {

  const logos = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%) rounded-xl]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className='rounded-3xl border w-[200px] sm:w-[200px]' />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className='rounded-3xl border w-[200px] sm:w-[200px]' />
          </li>
        ))}
      </ul>
    </div>
  )
}