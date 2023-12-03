// <section className="paddingXShorter paddingYShorter2 w-full flex justify-center gap-4 ">
//   <div className="w-[30%] flex flex-col justify-start gap-8">
//     {/* layer pertama */}
//     <div className="px-4 flex justify-between gap-4 items-center">
//       <span className="flex justify-between gap-2 rounded-lg border p-2 items-center shadow hover:translate-y-[2px] cursor-pointer">
//         <Icon icon="mi:filter" width={25} color="#36454" />
//         <p className="font-light text-sm">Filter</p>
//       </span>

//       <p className="font-light text-sm text-[#4169E1] cursor-pointer hover:underline">
//         Reset
//       </p>
//     </div>

//     {/* layer ke2 */}
//     <div className="flex flex-col justify-start px-4 gap-2">
//       <h3 className="text-sm">Property Type</h3>
//       <SelectInput />
//     </div>

//     {/* layer ke3 */}
//     <div className="flex flex-col justify-start px-4 gap-2">
//       <h3 className="text-sm">Convences</h3>
//       <div className="grid grid-cols-2  gap-2">
//         <Convenciences />
//       </div>
//     </div>
//   </div>
//   <div className="w-[70%] flex flex-col gap-6">
//     <div className="px-4 flex justify-between gap-4 items-center">
//       <h3 className="font-monokai">12 Result for you</h3>
//       <span className="flex justify-between gap-2 rounded-lg border p-2 items-center shadow hover:translate-y-[2px] cursor-pointer">
//         <p className="font-light text-sm cursor-pointer hover:underline">
//           Reset
//         </p>
//         <Icon icon="mingcute:down-line" />
//       </span>
//     </div>
//     <div>
//       <img src={map} className="rounded-3xl" />
//     </div>
//     <CardProduct />
//   </div>
// </section>

// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import img from "../assets/pn.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <section className="bg-[#ffffff] w-full paddingXShorter py-3">
//         <div className=" flex justify-between">
//           <span className="flex items-center cursor-pointer">
//             <Icon icon="jam:airbnb" width={40} color="#FF5A5F" />
//             {/* <Link to={`/`}> */}
//             <p className="text-[#FF5A5F] text-xl font-semibold">Homely</p>
//             {/* </Link> */}
//           </span>
//           {/* input search */}
//           <div className="w-[30%] flex justify-between">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="input your location"
//                 className="w-full bg-[#ffffff] rounded-full border px-2 h-full text-[#000000] placeholder-text-sm placeholder-gray-600 pl-4"
//               />
//               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-1 py-1 bg-[#FF5A5F] rounded-full">
//                 <Icon icon="pepicons-pencil:loop" width={20} color="#ffffff" />
//               </button>
//             </div>
//           </div>

//           <div className=" flex items-center justify-between gap-4">
//             <Icon icon="pepicons-pencil:loop" width={25} color="#000000" />
//             <div className="flex items-center gap-2 rounded-full border p-2 shadow hover:translate-y-[2px] cursor-pointer">
//               <Icon
//                 icon="system-uicons:menu-hamburger"
//                 width={25}
//                 color="#000000"
//                 text="#4A154B"
//                 className="cursor-pointer"
//               />
//               <img
//                 src={img}
//                 alt="Doctor"
//                 class="w-8 h-8 rounded-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <div class="border-b pt-2"></div>
//     </>
//   );
// };

// export default Navbar;
