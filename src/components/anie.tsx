"use client"
import appScreen from "../assets/images/abp.png";
import Image from 'next/image';

import {motion , useScroll, useTransform} from 'framer-motion';
import { useEffect, useRef } from "react";
export const Anie = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]

  });

const rotateX = useTransform(scrollYProgress, [0, 1], [15,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [.3,1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        
        <div className='max-w-xl mx-auto'>
        <p className="text-xl text-white/70 text-center mt-5 "> </p>
        </div>
        <div className="flex justify-center">
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",

        }}
        >
        <Image src={appScreen}  ref={appImage} alt="app screen" className="mt-20 rounded-3xl shadow-xl border border-white/10 w-[400px] sm:w-[400px]"  />
        </motion.div>
        </div>

      </div>

    </div>
  )
};
