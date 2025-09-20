import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Use actual gymnastics images from YG pics folder
import gallery1 from "../../assets/YG pics/kids-gymnastics-gallery-1.jpg";
import gallery2 from "../../assets/YG pics/kids-gymnastics-gallery-2.jpg";
import gallery3 from "../../assets/YG pics/kids-gymnastics-gallery-3.jpg";
import gallery4 from "../../assets/YG pics/kids-gymnastics-gallery-4.jpg";
import gallery5 from "../../assets/YG pics/kids-gymnastics-gallery-5.jpg";
import gallery6 from "../../assets/YG pics/kids-gymnastics-gallery-6.jpg";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: "Young gymnasts learning basic movements with professional coaches",
      caption: "Building confidence through fun gymnastics",
    },
    {
      src: gallery2,
      alt: "Children enjoying gymnastics in a community setting",
      caption: "Community-based gymnastics classes",
    },
    {
      src: gallery3,
      alt: "Safe gymnastics training with inflatable mats",
      caption: "Safety-first approach with professional equipment",
    },
    {
      src: gallery4,
      alt: "Kids developing strength and flexibility through gymnastics",
      caption: "Developing strength and flexibility naturally",
    },
    {
      src: gallery5,
      alt: "Young gymnasts practicing various gymnastics skills",
      caption: "Professional coaching in action",
    },
    {
      src: gallery6,
      alt: "Happy kids enjoying gymnastics in community space",
      caption: "Creating joy through movement",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.h3
          className="heading-lg text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          See Our Young Gymnasts in Action! 📸
        </motion.h3>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                  <p className="text-white text-center font-medium">
                    {galleryImages[selectedImage].caption}
                  </p>
                </div>
                <button
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Your community could be next! These happy faces could be from your
            neighborhood.
          </p>
          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Success Stories 📱
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;
