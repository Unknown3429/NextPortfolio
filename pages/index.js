import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import { motion } from "framer-motion";
import { fadeIn } from "../variants"


const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* text  */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h1">Tranforming Idias <br /> Into{''}
          <span className="text-accent">Digital Reality</span>
        </motion.h1>
        {/* subtittle  */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis veritatis ut sed architecto quam suscipit quia delectus dolor error deserunt eligendi minus, repudiandae temporibus veniam inventore blanditiis! Laudantium, rerum.</motion.p>
        {/* btn  */}
        <div className="flex justify-center xl:hidden relative z-10">
          <ProjectBtn />
        </div>

        <motion.div className="hidden xl:flex xl:z-10"
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <ProjectBtn />
        </motion.div>
      </div>
    </div>
    {/* image  */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* {bgimage} */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge  translate-x-0">
      </div>
      <ParticlesContainer />
      {/* avtarimg  */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full max-w-[720px] max-h-[710px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar />
      </motion.div>
    </div>
  </div>;
};

export default Home;
