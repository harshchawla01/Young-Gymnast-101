import React from "react";
import { motion } from "framer-motion";

const WhyGymnasticsSection = () => {
  const benefits = [
    {
      icon: "💪",
      title: "Strong & Flexible",
      description: "Boosts muscles and agility for all sports.",
      color: "text-ygm-blue",
    },
    {
      icon: "🧠",
      title: "Confident & Focused",
      description: "Mastering moves grows self-esteem and focus.",
      color: "text-ygm-orange",
    },
    {
      icon: "❤️",
      title: "Lifelong Fitness",
      description: "Strength and flexibility support long-term health.",
      color: "text-ygm-green",
    },
    {
      icon: "🏘️",
      title: "Right in Your Community",
      description: "Convenient classes make fun easy!",
      color: "text-ygm-blue",
    },
  ];

  return (
    <section id="why-gymnastics" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="heading-lg text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Gymnastics? The Mother of All Sports! 🏆
            </motion.h2>

            <motion.p
              className="text-body mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Gymnastics builds a strong foundation for kids across all areas of
              development. Here's why it's considered the foundation for all
              other sports:
            </motion.p>

            {/* Benefits List */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start space-x-4 p-4 bg-ygm-light-gray rounded-lg border-l-4 border-ygm-green hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-3xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <h3
                      className={`font-semibold text-lg ${benefit.color} mb-1`}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-lg font-semibold text-ygm-orange mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              🌟{" "}
              <span className="text-pink-500">
                Empowering Girls to Reach New Heights!
              </span>{" "}
              90% of our students are strong, confident girls who are proving
              that gymnastics builds not just physical strength, but unshakeable
              self-belief! 💪✨
            </motion.p>

            <motion.p
              className="text-lg font-semibold text-ygm-blue mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              Invite Young Gymnast 101 for a free workshop to see kids shine! ✨
            </motion.p>

            <motion.button
              className="btn-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Workshop! 🌟
            </motion.button>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Main Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-ygm-orange to-ygm-blue aspect-[4/3] flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🤸‍♀️🏆</div>
                  <div className="text-xl font-semibold mb-2">
                    Community Gymnastics Class
                  </div>
                  <div className="text-sm opacity-90">
                    Soft-focus background
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border-2 border-ygm-green"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-ygm-green">100%</div>
                <div className="text-xs text-gray-600">Fun Guaranteed!</div>
              </div>
            </motion.div>

            {/* <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-2 border-ygm-orange z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-ygm-orange">Safe</div>
                <div className="text-xs text-gray-600">Inflatable Mats</div>
              </div>
            </motion.div> */}

            {/* Success Stories Mini Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 p-4 rounded-lg text-center border-2 border-ygm-blue border-opacity-20">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-ygm-blue">
                  Improved Coordination
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg text-center border-2 border-ygm-orange border-opacity-20">
                <div className="text-2xl mb-2">😊</div>
                <div className="text-sm font-semibold text-ygm-orange">
                  Boosted Confidence
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg text-center border-2 border-ygm-green border-opacity-20">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm font-semibold text-ygm-green">
                  Social Skills
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg text-center border-2 border-ygm-blue border-opacity-20">
                <div className="text-2xl mb-2">🏃‍♀️</div>
                <div className="text-sm font-semibold text-ygm-blue">
                  Better Athletics
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyGymnasticsSection;
