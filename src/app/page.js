"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import thumbnail from "../../public/images/thumbnail.png";
import { FiWifi, FiPhone, FiMapPin, FiInfo, FiSettings } from "react-icons/fi";
import { MdPool, MdFreeBreakfast } from "react-icons/md";

export default function Home() {
  const facilities = [
    {
      name: "Free Wi-Fi",
      icon: <FiWifi size={30} className="text-primary mb-2" />,
    },
    {
      name: "Pool",
      icon: <MdPool size={30} className="text-primary mb-2" />,
    },
    {
      name: "Breakfast",
      icon: <MdFreeBreakfast size={30} className="text-primary mb-2" />,
    },
    {
      name: "Contact Us",
      icon: <FiPhone size={30} className="text-primary mb-2" />,
    },
    {
      name: "About Us",
      icon: <FiInfo size={30} className="text-primary mb-2" />,
    },
    {
      name: "Services",
      icon: <FiSettings size={30} className="text-primary mb-2" />,
    },
    {
      name: "Location",
      icon: <FiMapPin size={30} className="text-primary mb-2" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src={thumbnail}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Text  Overlay in the center of the image */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center flex-col gap-5">

        {/* Big heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-2xl md:text-4xl font-semibold text-center"
          >
            Discover comfort and relaxation at Holi Stay
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 mt-12 w-full max-w-xl" >
            <input type="text" placeholder="Search for a room"
              className="w-full p-2 rounded-full bg-white/50 text-black outline-none
               hover:bg-white/70 focus:bg-white focus:ring-2 focus:ring-primary focus:ring-offset-2
               transition-all duration-300" />

            <button className="bg-primary text-white px-5 py-2 rounded-full cursor-pointer hover:bg-primary/70 hover:scale-107 hover:shadow-xl transition-all duration-300">
              Explore
            </button>

          </motion.div>

          {/* Small heading */}
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-md mt-12 text-center" >
            Book your stay with us and enjoy a comfortable and relaxing experience.
          </motion.h2>
        </div>
      </div>

      {/* Facilities Section */}
      <motion.div
        className="p-6 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x:0,
            y: 0,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
              staggerChildren: 0.4,
            },
          },
        }}
      >
        {/* mapped facilities */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center 
              text-center cursor-pointer" >
              <motion.div whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }} className="mb-2" >
                {facility.icon}
              </motion.div>
              <p className="text-sm font-medium text-gray-800">{facility.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>    
  );
}
