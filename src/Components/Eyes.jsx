import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle + 90); // Adjusted the angle to properly align the pupil rotation
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='absolute flex gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <p className="absolute inset-0 flex items-center justify-center text-white">
                Play
              </p>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-8'>
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <p className="absolute inset-0 flex items-center justify-center text-white">
                Play
              </p>
              <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-8'>
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;


// import React, { useEffect, useState } from 'react';

// function Eyes() {
//   const [rotate, setRotate] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       let deltaX = mouseX - window.innerWidth / 2;
//       let deltaY = mouseY - window.innerHeight / 2;

//       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       setRotate(angle + 90); // Adjusted the angle to properly align the pupil rotation
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className='eyes w-full h-screen overflow-hidden'>
//       <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
//         <div className='absolute flex gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//           <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
//             <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
//               <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-8'>
//                 <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
//               </div>
//             </div>
//           </div>
//           <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
//             <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
//               <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-8'>
//                 <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//  export default Eyes;
// // import React, { useEffect, useState } from 'react';

// // function Eyes() {
// //   const [rotate, setRotate] = useState(0);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       let mouseX = e.clientX;
// //       let mouseY = e.clientY;

// //       let deltaX = mouseX - window.innerWidth / 2;
// //       let deltaY = mouseY - window.innerHeight / 2;

// //       var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
// //       setRotate(angle + 90); // Adjusted the angle to properly align the pupil rotation
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);

// //     // Cleanup event listener on component unmount
// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //     };
// //   }, []);

// //   return (
// //     <div className='eyes w-full h-screen overflow-hidden'>
// //       <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
// //         <div className='absolute flex gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
// //           <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
// //             <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
// //               <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-8'>
// //                 <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
// //             <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
// //               <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 w-full h-8'>
// //                 <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Eyes;
