"use client"
import CursorImage from '../assets/images/t1.png'
import ArrowIcon from '../assets/icons/arrow-w.svg'
import MessageImage from '../assets/images/s11.png'
import Image from 'next/image';
import {motion} from 'framer-motion'
import { AnimatedGradientTextDemo } from './animatedtext';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
    <div className="container relative">
      <div className="flex items-center justify-center -mt-10">
        <AnimatedGradientTextDemo/>
      </div>
      <div className="flex justify-center mt-8 ">
      <div className="inline-flex relative">
      <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex'>The Big <br/> Boss</h1>
      <motion.div className='absolute right-[478px] top-[108px] hidden sm:inline'
      drag
      dragSnapToOrigin

      >
      <Image src={CursorImage} alt="cursor" height={400} width={400} className='max-w-none' draggable="false"/>
      </motion.div>
      <motion.div className='absolute left-[498px] top-[56px] hidden sm:inline'
      drag
      dragSnapToOrigin
      >
      <Image src={MessageImage} alt="cursor"  height={400} width={400} className='max-w-none' draggable="false"/>
      </motion.div>
      </div>
      </div>
      <div className="flex justify-center">
      <p className='text-xl text-center mt-8 max-w-md'>The BigBoss is your go-to salon for bold cuts, flawless styles, and boss-level confidence. Walk in ordinary, walk out legendary.</p>
      </div>
      <div className="flex justify-center mt-8">
      <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Book An Appointment</button>
      </div>


    </div>
    

    </div>
  )
};
