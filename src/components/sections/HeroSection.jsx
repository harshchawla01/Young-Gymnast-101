import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/YG pics/gymnastics-hero-kids-action.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-ygm-light-gray to-white section-padding overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to{" "}
              <span className="text-gradient">Young Gymnast 101!</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-ygm-orange mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Flip into Fun Right in Your Community!
            </motion.h2>

            <motion.p
              className="text-body mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Young Gymnast 101 brings gymnastics to India's gated communities,
              delighting{" "}
              <span className="font-semibold text-ygm-blue">500+ kids</span>{" "}
              across{" "}
              <span className="font-semibold text-ygm-blue">
                multiple cities
              </span>
              . Professional coaches lead fun, safe classes on inflatable mats,
              helping kids soar with confidence and strength. Invite the team
              for a{" "}
              <span className="font-semibold text-ygm-orange">
                FREE workshop
              </span>{" "}
              in your community today!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4 animate-bounce-slow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Invite Us for a Free Workshop! 🎯
              </motion.button>

              <motion.button
                className="btn-outline text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More 📚
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-ygm-blue">
                  500+
                </div>
                <div className="text-sm text-gray-600">Happy Kids</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-500">
                  90%
                </div>
                <div className="text-sm text-gray-600">Girls ✨</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-ygm-orange">
                  50+
                </div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-ygm-green">
                  15+
                </div>
                <div className="text-sm text-gray-600">Years Exp.</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero Image */}
              <img
                src={heroImage}
                alt="Young gymnasts practicing in community setting with professional coaches"
                className="w-full h-full object-cover aspect-[4/3]"
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-ygm-orange text-white px-3 py-1 rounded-full text-sm font-semibold"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌟 Fun & Safe
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-ygm-blue text-white px-3 py-1 rounded-full text-sm font-semibold"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                🏆 Professional Coaches
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-ygm-orange rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-ygm-green rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
