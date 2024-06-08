import { easeIn, motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div
        className="w-full px-[4.5vw] border-b-[1px]
       border-zinc-700 pb-10"
      >
        <h1 className="text-[4vw] tracking-tighter "> Featured projects</h1>
      </div>

      <div className="cards   w-full flex gap-[4vw] pt-[6vw] px-[4.5vw] ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card relative w-1/2 h-[70vh]"
        >
          <h1
            className="absolute  flex overflow-hidden left-full -translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none  
            tracking-tighter text-[6vw] font-bold"
          >
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden "
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
          ></img>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="card relative w-1/2 h-[70vh] "
        >
          <h1 className="absolute  flex overflow-hidden right-full translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[7vw] font-bold">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden border-[1px]"
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt="img"
          ></img>
        </motion.div>
      </div>

      <div className="cards   w-full flex gap-[4vw] pt-[6vw] px-[4.5vw] ">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="card relative w-1/2 h-[70vh]"
        >
          <h1
            className="absolute flex overflow-hidden left-full -translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none  
            tracking-tighter text-[6vw] font-bold"
          >
            {"TRAWA".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden "
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
          ></img>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="card relative w-1/2 h-[70vh] "
        >
          <h1 className="absolute flex overflow-hidden right-full translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
            {"PREMIUM BLEND".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[3]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden "
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt="img"
          ></img>
        </motion.div>
      </div>

      <div className="grid place-items-center pt-[10vw]">
        <button className="  group flex   gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-800 rounded-full text-white  hover:bg-black ">
          VIEW ALL CASE STUDIES
          <div className=" group-hover:scale-150 w-[0.8vw] h-[0.8vw] rounded-full bg-white"></div>
        </button>
      </div>
    </div>
  );
}

export default Featured;


// import { motion } from 'framer-motion';
// import React, { useState } from 'react';

// function Featured() {
//   const [hoveredImage, setHoveredImage] = useState(null);

//   return (
//     <div className='w-full py-20'>
//       <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-10'>
//         <h1 className='text-5xl font-neue-montreal tracking-tight'>Featured Projects</h1>
//       </div>
//       <div className='px-20'>
//         <div className='cards w-full flex gap-10 mt-5'>
          
//           <div
//             className='cardcontainer relative w-1/2 h-[60vh]'
//             onMouseEnter={() => setHoveredImage("FYDE")}
//             onMouseLeave={() => setHoveredImage(null)}
//           >
//             <motion.img
//               className='w-full h-full rounded-xl overflow-hidden bg-cover'
//               src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'
//               alt='Project 1'
//               whileHover={{ scale: 1.05 }}
//               style={{ scale: hoveredImage === "FYDE" ? 1.05 : 1 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             />
//           </div>
          
//           <div
//             className='cardcontainer relative w-1/2 h-[60vh]'
//             onMouseEnter={() => setHoveredImage("VISE")}
//             onMouseLeave={() => setHoveredImage(null)}
//           >
//             <motion.img
//               className='w-full h-full rounded-xl overflow-hidden bg-cover'
//               src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'
//               alt='Project 2'
//               whileHover={{ scale: 1.05 }}
//               style={{ scale: hoveredImage === "VISE" ? 1.05 : 1 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Featured;
