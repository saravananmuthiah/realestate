"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    number: "10+",
    label: "Years of Excellence",
    description: "Building dreams since 2015",
    icon: "🏆",
    color: "from-blue-600 to-blue-700"
  },
  {
    number: "200+",
    label: "Happy Families",
    description: "Satisfied homeowners across Tamil Nadu",
    icon: "👨‍👩‍👧‍👦",
    color: "from-purple-600 to-purple-700"
  },
  {
    number: "50+",
    label: "Projects Completed",
    description: "Successfully delivered properties",
    icon: "🏗️",
    color: "from-green-600 to-green-700"
  },
  {
    number: "25+",
    label: "Expert Team Members",
    description: "Skilled professionals dedicated to quality",
    icon: "👥",
    color: "from-orange-600 to-orange-700"
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description: "Our commitment to excellence",
    icon: "⭐",
    color: "from-yellow-600 to-yellow-700"
  },
  {
    number: "2",
    label: "Prime Locations",
    description: "Coimbatore & Udumalaipettai coverage",
    icon: "📍",
    color: "from-red-600 to-red-700"
  }
];

const milestones = [
  {
    year: "2015",
    title: "Foundation",
    description: "SK Promoters established with a vision to revolutionize luxury living in Tamil Nadu"
  },
  {
    year: "2018",
    title: "First Major Project",
    description: "Successfully completed our first luxury villa project in Coimbatore"
  },
  {
    year: "2020",
    title: "Expansion",
    description: "Extended our services to Udumalaipettai, doubling our market reach"
  },
  {
    year: "2022",
    title: "Innovation",
    description: "Introduced smart home features and sustainable construction practices"
  },
  {
    year: "2024",
    title: "Excellence Award",
    description: "Recognized for outstanding contribution to real estate development"
  }
];

export default function StatsAchievements() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our Achievements & Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A decade of excellence in creating dream homes and building lasting relationships
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-white mx-auto mt-6"
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Card className="text-center border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: "spring" }}
                    className="text-4xl mb-4"
                  >
                    {achievement.icon}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                  >
                    {achievement.number}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-lg font-semibold mb-2"
                  >
                    {achievement.label}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-sm text-blue-100"
                  >
                    {achievement.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{milestone.year}</span>
                </div>
                <h4 className="font-semibold mb-2">{milestone.title}</h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Success Story</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied families who have made SK Promoters their trusted partner for creating dream homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
