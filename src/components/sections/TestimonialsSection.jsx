import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "My kid loves these classes! So fun and right in our community!",
      author: "Parent from Mumbai Community",
      rating: 5,
      highlight: "Convenient & Fun",
    },
    {
      quote:
        "Super convenient and exciting! The coaches make gymnastics a blast.",
      author: "Happy Mom from Delhi",
      rating: 5,
      highlight: "Professional Coaches",
    },
    {
      quote:
        "Amazing to see my daughter's confidence grow with each class. The inflatable mats make it so safe!",
      author: "Parent from Bangalore",
      rating: 5,
      highlight: "Safe & Confidence Building",
    },
    {
      quote:
        "Best thing we've done for our community! Kids are so excited every week.",
      author: "RWA Member from Pune",
      rating: 5,
      highlight: "Community Favorite",
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-ygm-light-gray">
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
            What Young Gymnasts Say! 💬
          </motion.h2>

          <motion.p
            className="text-body max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from happy parents and kids across India's gated communities
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-ygm-orange border-opacity-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Quote Marks */}
            <div className="absolute top-4 left-4 text-6xl text-ygm-orange opacity-20">
              "
            </div>
            <div className="absolute bottom-4 right-4 text-6xl text-ygm-orange opacity-20 rotate-180">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <motion.span
                        key={i}
                        className="text-2xl text-ygm-orange"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author */}
                <div className="text-ygm-blue font-semibold text-lg mb-2">
                  {testimonials[currentTestimonial].author}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-ygm-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentTestimonial].highlight}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-ygm-orange scale-125"
                      : "bg-gray-300 hover:bg-ygm-orange hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-ygm-blue">
            <div className="text-3xl mb-3">🎯</div>
            <div className="font-semibold text-ygm-blue mb-2">
              500+ Happy Kids
            </div>
            <div className="text-sm text-gray-600">Across 10 Communities</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-ygm-orange">
            <div className="text-3xl mb-3">⭐</div>
            <div className="font-semibold text-ygm-orange mb-2">
              5-Star Reviews
            </div>
            <div className="text-sm text-gray-600">Consistently Rated</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-ygm-green">
            <div className="text-3xl mb-3">🏆</div>
            <div className="font-semibold text-ygm-green mb-2">
              Award Winning
            </div>
            <div className="text-sm text-gray-600">Community Program</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-ygm-blue mb-4">
            Join the Happy Community! 🌟
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Be the next success story! Invite Young Gymnast 101 for a free
            workshop and watch your kids discover the joy of gymnastics.
          </p>

          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Community's Journey! 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
