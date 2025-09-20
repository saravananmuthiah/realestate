"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Coimbatore",
    rating: 5,
    project: "Modern Villa in Coimbatore",
    image: "https://placehold.co/400x300?text=Rajesh+Kumar+400x300",
    review: "SK Promoters exceeded our expectations in every way. The attention to detail, quality of construction, and timely delivery were outstanding. Our new home is everything we dreamed of and more. The team was professional, responsive, and truly cared about our satisfaction.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Udumalaipettai",
    rating: 5,
    project: "Cozy Bungalow",
    image: "https://placehold.co/400x300?text=Priya+Sharma+400x300",
    review: "Choosing SK Promoters was the best decision we made. From the initial consultation to the final handover, every step was handled with utmost care and professionalism. The quality of work is exceptional, and the post-construction support has been fantastic.",
    date: "January 2024"
  },
  {
    id: 3,
    name: "Arun Patel",
    location: "Coimbatore",
    rating: 5,
    project: "Luxury Apartment",
    image: "https://placehold.co/400x300?text=Arun+Patel+400x300",
    review: "The team at SK Promoters is incredibly talented and dedicated. They transformed our vision into reality with their innovative designs and superior craftsmanship. The entire process was smooth, and we're absolutely delighted with our new home.",
    date: "February 2024"
  },
  {
    id: 4,
    name: "Meera Iyer",
    location: "Coimbatore",
    rating: 5,
    project: "Modern Villa",
    image: "https://placehold.co/400x300?text=Meera+Iyer+400x300",
    review: "What sets SK Promoters apart is their commitment to quality and customer satisfaction. Every detail was carefully considered, and the result is a beautiful home that we love coming back to. Highly recommended!",
    date: "December 2023"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from satisfied homeowners who chose SK Promoters for their dream homes
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        📍 {testimonial.location}
                      </p>
                      <p className="text-xs text-blue-600 font-medium">
                        {testimonial.project}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Happy Customers
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to create your dream home? Let&apos;s start building memories that will last a lifetime.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
