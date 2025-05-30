import acmeLogo from "../assets/images/kc.png";
import quantumLogo from "../assets/images/sc11.png";
import echoLogo from "../assets/images/bd111.png";
import celestialLogo from "../assets/images/sc33.png";
import pulseLogo from "../assets/images/m22.png";
import apexLogo from "../assets/images/sc44.png";
import Image from 'next/image';
import LogoCarousel from "./companylogos";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return(
    <div className="bg-black text-white py-[72px] sm:py-24" >
      <div className="container">
        <h2 className="text-lg text-center text-white/70 mb-16"><p>
  I’m Anil Bhatii, the face behind the flair,<br />
  The BigBoss Salon—my style, my care.<br />
  Where every cut tells a story bold,<br />
  And every client leaves like gold.
</p>
</h2>
        <LogoCarousel/>
        
        
      </div>

    </div>
  )
};
