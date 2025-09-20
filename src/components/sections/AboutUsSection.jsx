import React from "react";
import { motion } from "framer-motion";
import coachImage from "../../assets/YG pics/kids-gymnastics-gallery-6.jpg";

const AboutUsSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-ygm-green">
              {/* Professional Coaches Image */}
              <img
                src={coachImage}
                alt="Professional coaches teaching gymnastics to young children in community setting"
                className="w-full h-full object-cover aspect-[4/3]"
              />

              {/* Experience Badge */}
              <motion.div
                className="absolute top-4 right-4 bg-ygm-orange text-white px-4 py-2 rounded-full font-bold shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                15+ Years ⭐
              </motion.div>
            </div>

            {/* Decorative Star */}
            <motion.div
              className="absolute -top-2 -left-2 text-3xl"
              animate={{ rotate: [0, 15, 0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⭐
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              About Young Gymnast 101
            </motion.h2>

            <motion.p
              className="text-body mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Young Gymnast 101, led by a team of{" "}
              <span className="font-semibold text-ygm-blue">
                professional coaches with 15+ years of expertise
              </span>
              , brings gymnastics to{" "}
              <span className="font-semibold text-ygm-orange">
                gated communities across India
              </span>
              , serving over{" "}
              <span className="font-semibold text-ygm-green">
                500 happy kids
              </span>
              , with{" "}
              <span className="font-semibold text-pink-500">
                90% of our students being empowered young girls
              </span>{" "}
              who are building strength and confidence! ✨
            </motion.p>

            <motion.p
              className="text-body mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Using safe, inflatable mats, the team creates fun classes right in
              your neighborhood. Partnering with RWAs, Young Gymnast 101 builds{" "}
              <span className="font-semibold text-ygm-blue">
                strength, confidence, and smiles
              </span>
              .
            </motion.p>

            <motion.p
              className="text-body mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Invite us for a{" "}
              <span className="font-bold text-ygm-orange">free workshop</span>{" "}
              to spark joy in your community! ⭐
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 p-3 bg-ygm-light-gray rounded-lg border-l-4 border-ygm-blue">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="font-semibold text-ygm-blue">
                    Professional Team
                  </div>
                  <div className="text-sm text-gray-600">
                    15+ years experience
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-ygm-light-gray rounded-lg border-l-4 border-ygm-orange">
                <span className="text-2xl">🛡️</span>
                <div>
                  <div className="font-semibold text-ygm-orange">
                    Safe Equipment
                  </div>
                  <div className="text-sm text-gray-600">Inflatable mats</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-ygm-light-gray rounded-lg border-l-4 border-ygm-green">
                <span className="text-2xl">🏘️</span>
                <div>
                  <div className="font-semibold text-ygm-green">
                    Community Focus
                  </div>
                  <div className="text-sm text-gray-600">
                    Right in your neighborhood
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-ygm-light-gray rounded-lg border-l-4 border-ygm-blue">
                <span className="text-2xl">🤝</span>
                <div>
                  <div className="font-semibold text-ygm-blue">
                    RWA Partnership
                  </div>
                  <div className="text-sm text-gray-600">
                    Collaborative approach
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.button
              className="btn-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Community Workshop! 🌟
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
