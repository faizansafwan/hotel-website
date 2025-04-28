"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import thumbnail from "../../../public/images/service-thumnail.jpg";
import tour from "../../../public/images/yacht-tour.jpg";
import vip from "../../../public/images/vip-expereince.jpg";
import spa from "../../../public/images/spa-treat.png";
import cook from "../../../public/images/cook-with-chef.jpg";
import { FaCoffee, FaParking, FaShieldAlt, FaSwimmingPool, FaWifi } from "react-icons/fa";

export default function Services() {

    const services = [
        { 
          name: "High-Speed WiFi", 
          icon: <FaWifi size={40} className="text-primary" />, 
          desc: "Stay connected with complimentary high-speed internet throughout the property." 
        },
        { 
          name: "Infinity Pool", 
          icon: <FaSwimmingPool size={40} className="text-primary" />,
          desc: "Enjoy our stunning infinity pool with panoramic views of the surroundings." 
        },
        { 
          name: "Restaurant", 
          icon: <FaCoffee size={40} className="text-primary" />,
          desc: "Savor exquisite cuisine prepared by our professional chefs using local ingredients." 
        },
        { 
          name: "Parking", 
          icon: <FaParking size={40} className="text-primary" />, 
          desc: "Enjoy hassle-free parking with our secure and spacious parking facilities." 
        },
        { 
          name: "24/7 Security", 
          icon: <FaShieldAlt size={40} className="text-primary" />, 
          desc: "Feel safe with our round-the-clock security service and modern surveillance systems." 
        },
      ];

  const additionalServices = [
    { name: "Airport Shuttle", icon: "🚐", desc: "Convenient airport transfers to ensure a smooth start and end to your journey." },
    { name: "Personalized Photoshoot", icon: "📸", desc: "Capture your stay with a professional photographer in stunning settings." },
    { name: "Gym", icon: "🏋️‍♂️", desc: "Stay on top of your fitness routine during your stay! Never miss a workout with our 24/7 gym." },
    { name: "VIP Experiences", icon: "👑", desc: "Access to exclusive events and venues through our concierge service." }
  ];

  const specialExperiences = [
    { name: "Private Yacht Tour", icon: tour, desc: "Explore the pristine coastline on a private yacht with a personal guide." },
    { name: "Cooking Class with Chef", icon: cook, desc: "Learn to prepare local cuisine with our executive chef using fresh ingredients." },
    { name: "Spa Retreat Package", icon: spa, desc: "Indulge in a full day of relaxation with our premium spa treatments and amenities." },
    { name: "VIP Experiences", icon: vip, desc: "Access to exclusive events and venues through our concierge service." }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={thumbnail}
          alt="Services Thumbnail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Services</h1>
          <p className="absolute bottom-20 text-white text-xl">From Comfort to Luxury, Every Moment is Perfected for You</p>
        </div>
      </div>

      {/* Our Services */}
      <motion.div
        className="my-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp} >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold border-l-6 border-primary/60 pl-4 py-2 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-8">Elevating Your Stay with Unmatched Comfort & Convenience</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {services.map((amenity, index) => (
                  <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-white p-4 flex flex-col justify-center items-center rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-500 overflow-hidden"
                  >
                  <div className="text-2xl mb-2">{amenity.icon}</div>
                  <p className="text-lg font-semibold">{amenity.name}</p>
                  <p className="text-md text-gray-600 mt-2 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
                      {amenity.desc}
                  </p>
                  </motion.div>
              ))}
          </div>
        </div>
      </motion.div>

      {/* Additional Services */}
<motion.div
    className="bg-primary/5 py-10 px-4 my-16 shadow-inner"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp} >

    <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Additional Services</h2>
            <div className="relative w-1/3 h-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
        </div>
        <p className="text-lg text-gray-600 text-center mb-12">Enhance Your Experience with Personalized Touches</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="backdrop-blur-md bg-secondary/50 border border-white/20 p-6 rounded-lg shadow-md
                    flex flex-col items-center justify-center text-center hover:shadow-lg transition" >
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                </motion.div>
            ))}
        </div>
    </div>
</motion.div>

{/* Special Experiences */}
<motion.div
    className="py-16 px-4 my-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp} >
    <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Special Experiences</h2>
            <div className="relative w-1/3 h-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
        </div>
        <p className="text-lg text-gray-600 text-center mb-12">Create Memories That Last a Lifetime</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3">
            {specialExperiences.map((experience, index) => (
                <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col" >
                <div className="relative w-full h-48">
                    <Image
                    src={experience.icon}
                    alt={experience.name}
                    fill
                    className="object-cover group-hover:opacity-50 transition-all duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-gradient-to-r group-hover:from-primary/30 group-hover:to-secondary/20 transition-all duration-500">
                    <h3 className="text-white text-xl font-semibold text-center px-2">{experience.name}</h3>
                    </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-start text-center">
                    <p className="text-sm text-gray-600">{experience.desc}</p>
                </div>
                </motion.div>
            ))}
        </div>
    </div>
</motion.div>

      {/* Testimonials */}
      <motion.div
        className="bg-gray-100 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The perfect getaway! Impeccable service and stunning views.",
                author: "Sarah M.",
                rating: "★★★★★"
              },
              {
                quote: "Our family vacation was magical thanks to the wonderful staff.",
                author: "The Johnson Family",
                rating: "★★★★★"
              },
              {
                quote: "Business trips are actually enjoyable when staying here.",
                author: "Michael T.",
                rating: "★★★★☆"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-yellow-400 text-xl mb-4">{testimonial.rating}</div>
                <p className="italic mb-6">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-700">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}