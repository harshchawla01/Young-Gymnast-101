import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  community: z.string().min(2, "Please enter your community name"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  ageGroup: z.string().min(1, "Please select an age group"),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate form submission (replace with actual backend call later)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form Data:", data);
      toast.success("🎉 Workshop request sent! We'll contact you soon!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ageGroups = [
    { value: "tiny-tumblers", label: "Tiny Tumblers (Ages 3-5)" },
    { value: "mini-movers", label: "Mini Movers (Ages 5-7)" },
    { value: "super-stars", label: "Super Stars (Ages 7+)" },
    { value: "mixed", label: "Mixed Age Groups" },
  ];

  return (
    <section id="contact" className="section-padding bg-ygm-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Bring Gymnastics to Your Community! 🏘️
            </motion.h2>

            <motion.p
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Young Gymnast 101 offers free workshops in India's gated
              communities. Contact the team to start fun, skill-building classes
              for kids right in your neighborhood!
            </motion.p>

            {/* Contact Details */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ygm-orange rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <div className="font-semibold">Service Areas</div>
                  <div className="text-blue-100">Indian Gated Communities</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ygm-green rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <div className="font-semibold">Workshop Duration</div>
                  <div className="text-blue-100">1 hour FREE demo session</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-ygm-orange rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <div className="font-semibold">Group Size</div>
                  <div className="text-blue-100">
                    Flexible for community needs
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🆓</div>
                <div className="font-semibold">Free Workshop</div>
              </div>

              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="font-semibold">Safe Equipment</div>
              </div>

              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-semibold">Expert Coaches</div>
              </div>

              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">😊</div>
                <div className="font-semibold">Fun Guaranteed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-ygm-blue mb-6 text-center">
              Request Your Free Workshop! 🌟
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="form-label">Your Name *</label>
                <input
                  {...register("name")}
                  type="text"
                  className="form-input text-black"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="form-label">Email Address *</label>
                <input
                  {...register("email")}
                  type="email"
                  className="form-input text-black"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="form-label">Phone Number *</label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="form-input text-black"
                  placeholder="+91 9876543210"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Community */}
              <div>
                <label className="form-label">Community/Society Name *</label>
                <input
                  {...register("community")}
                  type="text"
                  className="form-input text-black"
                  placeholder="e.g., Gachibowli Heights, Kondapur Villas"
                />
                {errors.community && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.community.message}
                  </p>
                )}
              </div>

              {/* Age Group */}
              <div>
                <label className="form-label">Interested Age Group *</label>
                <select
                  {...register("ageGroup")}
                  className="form-input text-black"
                >
                  <option value="">Select age group</option>
                  {ageGroups.map((group) => (
                    <option key={group.value} value={group.value}>
                      {group.label}
                    </option>
                  ))}
                </select>
                {errors.ageGroup && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ageGroup.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="form-label">Message *</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="form-input resize-none text-black"
                  placeholder="Tell us about your community, number of kids interested, preferred timing, etc."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary text-lg py-4 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Request...</span>
                  </div>
                ) : (
                  "Invite Us for a Free Workshop! 🎯"
                )}
              </motion.button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              📞 We'll contact you within 24 hours to schedule your free
              workshop!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
