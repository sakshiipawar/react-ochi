import React from 'react'

function Footer() {
  return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20 font-["Founders Grotesk X-Condensed"]'>
        <div className='w-1/2  h-full flex flex-col justify-between '>
        <div className='heading'>
        <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-5'>Eye</h1>
        <h1  className='text-[8vw] font-semibold uppercase leading-none -mb-5'>Openeing</h1>
        </div>
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z" fill="currentColor"></path>
						<path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor"></path>
						<path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor"></path>
						<path d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z" fill="currentColor"></path>
						<path d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z" fill="currentColor"></path>
					</svg>
        </div>
        <div className='w-1/2'>
        <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-5'>Presentation</h1>
        <br />
        <div className="links flex justify-between ">
          <div className=" left ">
            <div className="dets">
              <h1>S:</h1>
              <br />
              <a className="block" href="#">
                <u>Instagram</u>
              </a>
              <a className="block" href="#">
                <u> Behance</u>
              </a>
              <a className="block" href="#">
                <u>Facebook</u>
              </a>
              <a className="block" href="#">
                <u>Linkedin</u>
              </a>
            </div>
            <br />
            <br />
            <div className="dets">
              <h1>L:</h1>
              <br />
              <a className="block" href="#">
                <u>202-1965 W 4th Ave</u>
                <br />
                <u>Vancouver, Canada</u>
              </a>
              <a className="block pt-2" href="#">
                <u> 30 Chukarina St</u> <br />
                <u> Lviv, Ukraine</u>
              </a>
            </div>
            <br />
            <div className="dets">
              <h1>E:</h1>
              <br />
              <a className="block" href="#">
                <u>hello@ochi.design</u>
              </a>
            </div>
          </div>
          <div className="right pt-[20vh]">
            <div>
              <h1>M:</h1>
              <a className="block" href="#">
                <u>Home</u>
              </a>
              <a className="block" href="#">
                <u>Services</u>
              </a>
              <a className="block" href="#">
                <u>Our work</u>
              </a>
              <a className="block" href="#">
                <u>About us</u>
              </a>
              <a className="block" href="#">
                <u>Insights</u>
              </a>
              <a className="block" href="#">
                <u>Contact us</u>
              </a></div></div></div>
        </div>
    </div>
  )
}

export default Footer

// import React from 'react';

// function Footer() {
//   return (
//     <div className='flex gap-5 w-full h-screen bg-zinc-900 p-10'>
//       <div className='w-1/2 h-full flex flex-col justify-between font-neue-montreal'>
//         <div className='heading'>
//           <h1 className='text-[7vw] font-semibold uppercase leading-4px -mb-10'>Eye-</h1>
//           <h1 className='text-[7vw] font-semibold uppercase leading-4px -mb-10'>Opening</h1>
//         </div>
//         <div className='w-full flex justify-start items-center'>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="w-10 h-10 mr-2" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram Logo" className="w-10 h-10 mr-2" />
//           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAATlBMVEVHqej///9Cp+g4pOfz+f0soebi8Pv3+/7A3vZKq+hZsOqm0vNyuuzn8vuMxe/Y6vm02fSbzPFmteus1fOTyfCAwe4VnOXG4vfR5/js9vzLK0AdAAAEqElEQVR4nO3ca7OqIBQGYFuICngDNev//9GjVvt0MYMysJn3+XT2zJmd7yaWC6GiCAAAAAAAAAAAAAAAAAAAAAAAAAAAYINoFPoi1kCMMzEizn88ENvLsj8kxaDqtZnN8yODxnhXxenuIo0TTfzu/xAX8gfSECuPu3uxInb9n1jUVMZzGIqcX5CZw0OUUdFdftdQFYRKdw1b/kVrY13P3NIQlelsloESNAaJZF4PPyW+B4ZVO+WUhkg/izLIIhKmU8n0Q3M/i76MdcOLapeqw9RClt2u11ly/mclPA8M78da5JCGL43LjTT3PGOIivF1Y+s0rIttw7Ses/xdm+3YkKxss6gxC2NSfDnCf0xdCpOySkO1dZahrHGe99pfGJ79vXptUdMoTxau/+Y9xvd7WRe7g8cegF/d/Srx8k3OLAcmMVJPv7nwWQTY9RSIzYu3GhnLGXPpdeLSZxGg26srl+8M7Pmtf1aqvBY0dven7vOlTs1++p+yNI6N0of4fcdY6OczluR8f/lM43k5c1XNLn/OQ0lP3hz2tWxiV+zXDKMfZ8Gxz/lsHIe7//BHKb0vMyl/XGQNcTIzuwju7Od/0fluZgasmL2WuDePo0OldZaD75XM5HHSXCQdv8vjEKZxX76ugOTzt06a5ad1o3uY2vdS5mRa0Dx1zEojxflJn0MBCBSG5IvrSqu6zY2RETFjXZprf73yDW5zWy+qrNFaWYdpwmQZxsbpVmhHhQrDZu81n9FBpszYClLpcGe30wYIQ7IZWhdaP02I+z/JZFeVtN/n843Au2LfT5mmMKfFWVGX3apVoMiDdDNuKxRbW2vNPpIFaQBYu3ohG6lAzcz695hdgCezJ1+ZNEUXZveP2bf19nw+xrzxjc6sDrUt+4WhSXWYKTPg1psUtpIgt8wJRWuHOQQ8yzBta64oVZ73ZW+Qcnse/kIRpJf5CxOpNfuAQ7Dpf06j12sEUq97MnNpqFutpiXhz/6QVCsNTtDpf0kTSb3GzEnDPP67xjhjnJNRHy+f6+ADQ2Wv2rJVdfLx4AQfF7dtpEW+DzLNILHS8jkOXJYnc8cU3xHi4d8DEos7G7a8nzCbx9Z4DBgHWi4/YO3n3WagLaYZrPk0i/eDv8+R42GSB35P/bxAVntozwV7jDGPtx9kOQTZLV/ATPVuGUi2d+yfka7e6myOefg+5gEx0faJczsQlxvMMmLMlE2duSw903ajWaLpI0vcaR2tt5tlHJzGobtJw2yU2yHuVNRcPkngG3GZuRS02P+RP1vERe1Um48htvwtjAexjOOSs5Kby3I6UCaMdtx5ijO/J5cXCGITIiFNXjbODzWLdjsfNjWtbsuybLWq+zeamPFQaugI/8mPHvlV7aaq2DDdXe6NNxK1uZlPIm/eaZKP6tWnU4Kg4c3mGueo5dYWYhdDSW5dKnLSbfobAIYKbSxv+8dazn/oYUuIc1MX8VJ7mcaFkr/yLQbE91JnVXG8j5TGxyKpmi7a/0iSk/F7JGReqjrrD9XJoc8a3RnB+WYaFwc0JhouXAg5fjuGOP/40+gs9HUAAAAAAAAAAAAAAAAAAAAAAAAAAMBK/gEjNzO/l3C1EwAAAABJRU5ErkJggg==" alt="Twitter Logo" className="w-10 h-10 mr-2" />
//         </div>
//       </div>
//       <div className='w-1/2'>
//         <h1 className='text-[6vw] font-semibold uppercase leading-4px -mb-10'>Presentations</h1>
        
//       </div>
//     </div>
//   );
// }

// export default Footer;

