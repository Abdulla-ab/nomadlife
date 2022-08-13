import React from 'react'

function CityBanner() {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto text-center px-10">
        <p className="text-[#055E70] font-semibold text-base sm:text-lg mb-6 lg:text-3xl">
        Explore the Perl of the Indian Ocean
        </p>

        {/* Cities */}
        <div className="grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                    <img
                     alt="galle"
                     className="h-30 w-30 lg:h-auto lg:w-auto"
                     src="../galle.png"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Galle
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Digital Nomad Life<br></br>Planning with Accomadation
                  </p>
               </div> */}
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                  <img
                     alt="arugambay"
                     className="h-30 w-30"
                     src="../arugambay.png"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Arugambay
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Strong Community for us
                  </p>
               </div> */}
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                  <img
                     alt="mirissa"
                     className="h-30 w-30"
                     src="../mirissa.png"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Mirissa
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Co-Working Spaces
                  </p>
               </div> */}
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                  <img
                     alt="colombo"
                     className="h-30 w-30"
                     src="../colombo.png"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Colombo
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Job/ Volunteer Projects
                  </p>
               </div> */}
            </div>
         </div>

         <div className="grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2">
            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                  <img
                     alt="elle"
                     className="h-30 w-30 lg:h-auto lg:w-auto"
                     src="../elle.png"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Elle
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Digital Nomad Life<br></br>Planning with Accomadation
                  </p>
               </div> */}
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                  <img
                     alt="jaffna"
                     className="h-30 w-30"
                     src="../jaffna.png"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Jaffna
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Strong Community for us
                  </p>
               </div> */}
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                  <img
                     alt="sigiriya"
                     className="h-30 w-30"
                     src="../sigiriya.png"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Sigiriya
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Co-Working Spaces
                  </p>
               </div> */}
            </div>

            <div className="flex flex-col place-items-center row-span-1 my-4 mx-4">
               <div className="relative">
                  <img
                     alt="trinco"
                     className="h-30 w-30"
                     src="../trinco.png"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                        <p className="text-sm py-1 sm:text-base lg:text-3xl font-bold drop-shadow-6xl shadow-black">
                            Trinco
                        </p>
                    </div>
               </div>
               {/* <div className="">
                  <p className="text-sm py-3 sm:text-base lg:text-lg">
                     Job/ Volunteer Projects
                  </p>
               </div> */}
            </div>
         </div>

         {/* explore more button */}
         <div className="flex flex-col place-items-center row-span-1 lg:my-10">
            {/* Explore more Button */}
            <div className="">
               <a
                  onClick={() => router.push("/business/signup")}
                  className="button"
               >
                  Explore more
               </a>
            </div>
         </div>
      
    </div>
  )
}

export default CityBanner
