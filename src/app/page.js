"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import thumbnail from "../../public/images/thumbnail.png";
import skyline1 from "../../public/images/Skyline-Suite1.jpg";
import skyline2 from "../../public/images/skyline-suite2.jpg";
import skyline3 from "../../public/images/skyline-suite3.jpg";
import cozyCabin1 from "../../public/images/Cozy-cabin1.png";
import cozyCabin2 from "../../public/images/cozy-cabin2.jpg";
import cozyCabin3 from "../../public/images/cozy-cabin3.jpeg";
import cozyCabin4 from "../../public/images/cozy-cabin4.jpg";
import gardenView1 from "../../public/images/garden-view1.jpg";
import gardenView2 from "../../public/images/garden-view2.jpg";
import gardenView3 from "../../public/images/garden-view3.png";
import sunset1 from "../../public/images/sunset-suit1.jpg";
import sunset2 from "../../public/images/sunset-suit2.jpg";

import { FiWifi, FiX } from "react-icons/fi";
import { MdPool, MdFreeBreakfast, MdDinnerDining, MdNaturePeople, MdEco, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaParking, FaConciergeBell, FaHandsHelping, FaTag } from "react-icons/fa"
import { useState } from "react";


export default function Home() {

  const [activeTab, setActiveTab] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  

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
      name: "Dinner",
      icon: <MdDinnerDining size={30} className="text-primary mb-2" />,
    },
    {
      name: "24/7 Service",
      icon: <FaConciergeBell size={30} className="text-primary mb-2" />,
    },
    {
      name: "Car Parking",
      icon: <FaParking size={30} className="text-primary mb-2" />,
    },
    {
      name: "Nature View",
      icon: <MdNaturePeople size={30} className="text-primary mb-2" />,
    },
  ];
  

  const roomType = [
    {
      name: "Luxury Cozy Cabin",
      img: cozyCabin1,
      type: "cozy",
      bed: "Compact King Bed with Forest View Balcony",
      availability: 2,
      price: "50,500 LKR",
      description: "A luxurious escape nestled in the forest, featuring a balcony with breathtaking views."
    },
    {
      name: "Serene Cozy Cabin",
      img: cozyCabin2,
      type: "cozy",
      bed: "Queen Bed with Indoor Fireplace",
      availability: 2,
      price: "48,900 LKR",
      description: "Enjoy peaceful moments by the fire in this cozy cabin ideal for romantic getaways."
    },
    {
      name: "Panoromic Cozy Cabin",
      img: cozyCabin3,
      type: "cozy",
      bed: "King Bed with Skylight Roof",
      availability: 3,
      price: "30,000 LKR",
      description: "Fall asleep under the stars with skylight views from the comfort of your king bed."
    },
    {
      name: "Elegant Cozy Cabin",
      img: cozyCabin4,
      type: "cozy",
      bed: "Luxury Queen Bed with Garden Patio",
      availability: 5,
      price: "29,000 LKR",
      description: "Step into elegance with a private garden patio perfect for relaxation and morning coffee."
    },
    {
      name: "Luxury Garden View",
      img: gardenView1,
      type: "garden",
      bed: "Spacious King Bed with Private Garden Access",
      availability: 3,
      price: "35,000 LKR",
      description: "Wake up to lush green scenery and unwind in your own private garden area."
    },
    {
      name: "Serene Garden View",
      img: gardenView2,
      type: "garden",
      bed: "Deluxe Double Bed with Nature View",
      availability: 4,
      price: "31,000 LKR",
      description: "Surround yourself with nature in this serene garden-view room built for comfort."
    },
    {
      name: "Panoromic Garden View",
      img: gardenView3,
      type: "garden",
      bed: "Panoramic Queen Bed Facing Greenery",
      availability: 3,
      price: "33,500 LKR",
      description: "Immerse in panoramic garden views with modern decor and a peaceful atmosphere."
    },
    {
      name: "Luxury Skyline Suite",
      img: skyline1,
      type: "skyline",
      bed: "King Bed with Rooftop City View",
      availability: 2,
      price: "45,000 LKR",
      description: "An upscale suite with dazzling rooftop views of the city skyline by day and night."
    },
    {
      name: "Serene Skyline Suite",
      img: skyline2,
      type: "skyline",
      bed: "Queen Bed with Private Terrace",
      availability: 2,
      price: "42,000 LKR",
      description: "Unwind on your private terrace while taking in the serene skyline ambiance."
    },
    {
      name: "Panoromic Skyline Suite",
      img: skyline3,
      type: "skyline",
      bed: "Skyview Double Bed with Modern Decor",
      availability: 3,
      price: "36,500 LKR",
      description: "Stylish and spacious, offering wide skyline views and contemporary elegance."
    },
    {
      name: "Serene Sunset",
      img: sunset1,
      type: "sunset",
      bed: "Double Bed with Sunset-Facing Balcony",
      availability: 2,
      price: "48,000 LKR",
      description: "Perfect for sunset lovers, this room features an open balcony with golden hour views."
    },
    {
      name: "Panoromic Sunset",
      img: sunset2,
      type: "sunset",
      bed: "Premium King Bed with Sea View",
      availability: 2,
      price: "59,500 LKR",
      description: "Indulge in panoramic sea views and soothing sunsets from your luxurious suite."
    }
  ];
  
  

  const filteredRooms = activeTab === "all" ? roomType : roomType.filter(room => room.type === activeTab);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Skyline Suite", value: "skyline" },
    { label: "Sunset Villa", value: "sunset" },
    { label: "Garden View", value: "garden" },
    { label: "Cozy Cabin", value: "cozy" },
  ];
  
  const features = [
    { title: "Eco-friendly stay", bg: "bg-primary/20", icon: <MdEco size={28} className="text-secondary/40" /> },
    { title: "Personalized services", bg: "bg-primary/30", icon: <FaHandsHelping size={28} className="text-secondary/50" /> },
    { title: "Best price guarantee", bg: "bg-primary/40", icon: <FaTag size={28} className="text-secondary/65" /> },
    { title: "Prime location", bg: "bg-primary/50", icon: <MdLocationOn size={28} className="text-secondary/80" /> },
  ];
  

  return (
    <div className="overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] sm:h-[70vh] min-h-[400px]">
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
            className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4"
          >
            Discover comfort and relaxation at Holi Stay
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 mt-12 w-full max-w-xl p-3" >
            <input type="text" placeholder="Search for a room"
              className="w-full p-2 rounded-full bg-white/50 text-black outline-none hover:bg-white/70 focus:bg-white 
              focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 text-sm md:text-base" />

            <button className="bg-primary text-white px-5 py-2 rounded-full cursor-pointer hover:bg-primary/70 hover:scale-107 hover:shadow-xl transition-all duration-300">
              Explore
            </button>

          </motion.div>

          {/* Small heading */}
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-sm sm:text-base mt-8 text-center px-2" >
            Book your stay with us and enjoy a comfortable and relaxing experience.
          </motion.h2>
        </div>
      </div>

      {/* Facilities Section */}
      <motion.div
        
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
        className="mx-5 mt-12 p-3 w-full bg-secondary"
      >
        {/* mapped facilities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">

          {facilities.map((facility, index) => (
            <motion.div
              key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center 
              text-center cursor-pointer" >
              <motion.div whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }} className="mb-2" >
                {facility.icon}
              </motion.div>
              <p className="text-sm font-medium text-gray-800">{facility.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Room Type Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut"
            }
          }
        }}
        className="mx-5 mt-12 p-3 w-full"
      >


        <div className="mx-5 mt-12 p-3 w-full">
          <div className="my-6">
            <h1 className="text-3xl sm:text-4xl font-bold"><strong className="text-primary">Discover</strong> HoliStay</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab.value
                    ? "bg-primary text-white scale-105 shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-primary/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Rooms */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]"
          >
            {filteredRooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className="relative group bg-secondary/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(room)}
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={room.img}
                    alt={room.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:blur-sm"
                  />
              
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-4 text-center">
                    <p className="text-sm mb-2">{room.bed}</p>
                    <p className="text-sm mb-2">Available: {room.availability} rooms</p>
                    <p className="text-lg font-bold">{room.price} / night</p>
                  </div>
                </div>
              
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{room.name}</h2>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Room Details Modal */}
        <AnimatePresence>
          {isModalOpen && selectedRoom && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors"
                >
                  <FiX size={24} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Image Gallery */}
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={selectedRoom.img}
                      alt={selectedRoom.name}
                      fill
                      className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                    />
                  </div>

                  {/* Room Details */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedRoom.name}</h2>
                    <p className="text-primary text-xl font-semibold mb-4">{selectedRoom.price} / night</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {selectedRoom.bed}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {selectedRoom.availability} rooms available
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">{selectedRoom.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-3">Facilities</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {facilities.slice(0, 6).map((facility, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="text-primary">{facility.icon}</div>
                            <span className="text-gray-700">{facility.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <a href="/booking"><button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                        Book Now
                      </button></a>
                      <a href="/contact"><button className="flex-1 border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary/10 transition-colors font-medium">
                        Contact Us
                      </button></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.section>

      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2
            }
          }
        }}
        className="max-w-4xl mx-auto py-12"
      >

      {/* why choose us section */}
      <motion.h2 variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-4xl font-bold mb-8 text-center text-primary" >
          Why Choose HoliStay?
      </motion.h2>

          <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="m-4 lg:w-full"
              whileHover={{ scaleX: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={`${feature.bg} p-6 rounded-full shadow-md flex items-center gap-4`}>
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.section>

    </div>    
  );
}
