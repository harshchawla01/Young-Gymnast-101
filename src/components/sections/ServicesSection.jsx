import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: "Tiny Tumblers",
      ageGroup: "Ages 3-5",
      description: "Fun games and basic moves spark coordination and confidence.",
      icon: "🧸",
      borderColor: "border-ygm-blue",
      bgColor: "bg-blue-50",
      textColor: "text-ygm-blue"
    },
    {
      title: "Mini Movers",
      ageGroup: "Ages 5-7", 
      description: "Playful flips and balances build strength and agility.",
      icon: "⚡",
      borderColor: "border-ygm-green",
      bgColor: "bg-green-50",
      textColor: "text-ygm-green"
    },
    {
      title: "Super Stars",
      ageGroup: "Ages 7+",
      description: "Dynamic cartwheels and skills boost fitness and focus.",
      icon: "⭐",
      borderColor: "border-ygm-orange", 
      bgColor: "bg-orange-50",
      textColor: "text-ygm-orange"
    }
  ];

  return (
    <section id="services" className="section-padding bg-ygm-light-gray">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="heading-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fun Gymnastics for Every Kid
          </motion.h2>
          
          <motion.p 
            className="text-body max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Young Gymnast 101's program brings flips, rolls, and cartwheels to your gated community! 
            Professional coaches use safe, inflatable mats for playful, skill-building classes tailored 
            to three age groups, right in your neighborhood. Invite the team for a{' '}
            <span className="font-semibold text-ygm-orange">free workshop</span> to get started!
          </motion.p>

          {/* Community Image Placeholder */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-ygm-blue to-ygm-green rounded-2xl aspect-[16/9] flex items-center justify-center text-white shadow-xl">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏘️🤸‍♀️</div>
                <div className="text-xl font-semibold">Kids Enjoying Gymnastics</div>
                <div className="text-sm opacity-90 mt-2">in a Community Space</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`card ${service.bgColor} ${service.borderColor} border-l-8`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <motion.div 
                className="text-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-6xl block mb-2">{service.icon}</span>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${service.textColor} bg-white`}>
                  {service.ageGroup}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className={`text-2xl font-bold ${service.textColor} mb-4 text-center`}>
                {service.title}
              </h3>
              
              <p className="text-gray-700 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className={`w-2 h-2 rounded-full ${service.textColor.replace('text-', 'bg-')}`}></div>
                <div className={`w-2 h-2 rounded-full ${service.textColor.replace('text-', 'bg-')} opacity-60`}></div>
                <div className={`w-2 h-2 rounded-full ${service.textColor.replace('text-', 'bg-')} opacity-30`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary text-xl px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Invite Us Today! 🎯
          </motion.button>
          
          <p className="text-sm text-gray-600 mt-4">
            Free workshop • No commitment • See the magic happen!
          </p>
        </motion.div>

        {/* Age Group Benefits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-ygm-blue">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="font-semibold text-ygm-blue mb-2">Cognitive Development</h4>
            <p className="text-sm text-gray-600">Following instructions, memory, and concentration</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-ygm-green">
            <div className="text-3xl mb-3">💪</div>
            <h4 className="font-semibold text-ygm-green mb-2">Physical Strength</h4>
            <p className="text-sm text-gray-600">Building muscle, flexibility, and coordination</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-ygm-orange">
            <div className="text-3xl mb-3">😊</div>
            <h4 className="font-semibold text-ygm-orange mb-2">Social Skills</h4>
            <p className="text-sm text-gray-600">Teamwork, confidence, and making friends</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
