"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null); // For FAQ toggle

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index); // Toggle FAQ answer visibility
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden p-8"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 transition duration-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 transition duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 transition duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 transition duration-300"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Our Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Luxury Street, Colombo 01, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+94 11 234 5678</p>
                    <p className="text-gray-600">+94 76 123 4567 (Mobile)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@holistay.com</p>
                    <p className="text-gray-600">reservations@holistay.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD54bF873M1u-qCLRVNkkyy3ELRUmDMxn0&q=6.9157525020652875, 79.87747317809244`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Holi Stay, Colombo 08"
          ></iframe>
        </div>
          </motion.div>
        </div>

        {/* FAQs Section - Improved */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="bg-white rounded-xl shadow-lg overflow-hidden p-8 mt-12"
>
  <div className="flex items-center mb-6">
    <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h2 className="text-2xl font-bold text-secondary">Frequently Asked Questions</h2>
  </div>
  
  <div className="space-y-4">
    {[
      { 
        question: 'What services do you offer?', 
        answer: 'We specialize in luxury travel experiences including hotel bookings, vacation packages, and personalized itineraries. Our services cover everything from transportation to exclusive local experiences.',
        icon: '🏨'
      },
      { 
        question: 'How can I book a service?', 
        answer: 'You can book directly through our website, via our mobile app, or by contacting our 24/7 customer service team at +94 76 123 4567.',
        icon: '📅'
      },
      { 
        question: 'What is your cancellation policy?', 
        answer: 'Cancellations made 48+ hours before check-in receive full refunds. Within 48 hours, we offer 50% refund or rescheduling. No-shows are non-refundable.',
        icon: '🔄'
      },
      { 
        question: 'Do you offer group discounts?', 
        answer: 'Yes! Groups of 5+ rooms receive 10% off, and 10+ rooms get 15% off. Contact our group sales team for custom packages.',
        icon: '👥'
      },
      { 
        question: 'What payment methods do you accept?', 
        answer: 'We accept all major credit cards, bank transfers, and mobile payment solutions. Secure payment processing ensures your financial safety.',
        icon: '💳'
      },
    ].map((faq, index) => (
      <div 
        key={index} 
        className={`border rounded-lg overflow-hidden transition-all duration-200 ${activeFAQ === index ? 'border-primary shadow-md' : 'border-gray-200'}`}
      >
        <motion.button
          onClick={() => toggleFAQ(index)}
          className="w-full text-left flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <span className="text-xl mr-3">{faq.icon}</span>
            <span className="font-semibold text-gray-800">{faq.question}</span>
          </div>
          <svg 
            className={`w-5 h-5 text-primary transform transition-transform duration-200 ${activeFAQ === index ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
        
        {activeFAQ === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 pb-4"
          >
            <div className="pl-9 text-gray-600 border-t pt-3 border-gray-100">
              <p>{faq.answer}</p>
              {index === 2 && ( // Additional info for cancellation policy
                <button className="mt-2 text-sm text-primary hover:underline">
                  View full policy details
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    ))}
  </div>
</motion.div>

{/* Office Hours Section - Improved */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="bg-white rounded-xl shadow-lg overflow-hidden p-8 mt-12"
>
  <div className="flex items-center mb-6">
    <svg className="w-6 h-6 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h2 className="text-2xl font-bold text-secondary">Our Office Hours</h2>
  </div>
  
  <div className="space-y-3">
    {[
      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', status: 'open' },
      { day: 'Saturday, Sunday', hours: '10:00 AM - 4:00 PM', status: 'open' },
      { day: 'Public Holidays', hours: 'Varies - Check with us', status: 'limited' },
    ].map((item, index) => {
      // Get current day and time
      const now = new Date();
      const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
      const currentHour = now.getHours();
      const isToday = 
        (item.day.includes(currentDay) || 
        (item.day === 'Public Holidays' && /* holiday logic */ false))
      
      const isOpenNow = isToday && 
        (item.status === 'open' || item.status === 'limited') &&
        (currentHour >= (item.day === 'Saturday' ? 10 : 9) && 
         currentHour < (item.day === 'Saturday' ? 16 : 18));
      
      return (
        <div 
          key={index} 
          className={`flex justify-between items-center p-3 rounded-lg transition-colors duration-150 ${
            isToday ? 'bg-primary/10 border-l-4 border-primary' : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center">
            <span className={`w-2 h-2 rounded-full mr-3 ${
              item.status === 'open' ? 'bg-green-500' : 
              item.status === 'closed' ? 'bg-red-500' : 'bg-yellow-500'
            }`}></span>
            <span className="font-medium text-gray-800">{item.day}</span>
          </div>
          <div className="flex items-center">
            <span className={`text-gray-600 mr-2 ${
              isOpenNow ? 'text-green-600 font-medium' : ''
            }`}>
              {item.hours}
            </span>
            {isOpenNow && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Open Now
              </span>
            )}
          </div>
        </div>
      );
    })}
  </div>
  
  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
    <div className="flex">
      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p className="text-sm text-blue-800">
          <strong>24/7 Support:</strong> While our office has specific hours, our customer support team is available round the clock at +94 76 123 4567 for urgent matters.
        </p>
      </div>
    </div>
  </div>
</motion.div>

      </div>

      {/* Success Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Message Sent!</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
