"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Exclusivity",
    description: "We create unique, one-of-a-kind properties that stand apart from the ordinary.",
  },
  {
    title: "Comfort",
    description: "Every detail is designed to provide unparalleled comfort and luxury living.",
  },
  {
    title: "Integrity",
    description: "We build trust through transparent communication and honest business practices.",
  },
];

const team = [
  {
    name: "Saravanan",
    role: "Founder & CEO",
    image: "/images/team1.jpg",
  },
  {
    name: "Chellappan",
    role: "Managing Director",
    image: "/images/team2.jpg",
  },
  {
    name: "Dhimaan Shah",
    role: "Executive Director & Co-CEO",
    image: "/images/team3.jpg",
  },
  {
    name: "Sneha Gupta",
    role: "Interior Designer",
    image: "/images/team4.jpg",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/project1.jpg"
            alt="Luxury Home"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300/20 rounded-full blur-lg"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About SK Promoters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Crafting luxury living experiences since 2015. We specialize in creating distinctive homes that showcase exceptional style, thoughtful personalization, and unparalleled service in Coimbatore and surrounding areas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <div className="inline-flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-blue-200">Homes Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-16 relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                When SK Promoters was founded in 2015, we were committed to building an enduring
                legacy in the luxury real estate segment. Our goal was simple: we wanted to provide
                homeowners with luxury villas that showcased high-end living in India like never
                before.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                It seemed a mammoth task to manifest, but one we were determined to
                achieve. Ten years and numerous homes later, we are proud to say that SK Promoters has
                come a long way as a leader in the luxury home segment.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-600"
              >
                <p className="text-gray-700 italic">
                  &ldquo;Our defining principles—exclusivity, comfort and integrity—exemplify the deep
                  commitment we have towards offering our customers only the best.&rdquo;
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/project2.jpg"
                  alt="SK Promoters Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-6 left-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-2">Excellence in Every Detail</h3>
                  <p className="text-sm opacity-90">Crafting timeless luxury since 2015</p>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Today we have become acknowledged connoisseurs of crafting unique lifestyle experiences through
              singularly distinctive homes in rarely explored locations. It is a matter of
              great satisfaction to know that our valued customers enjoy our homes in Coimbatore,
              Udumalaipettai, and surrounding areas.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold">
                We&apos;re just getting started...
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-white text-2xl">🎯</span>
                  </motion.div>
                  <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>To leave an indelible mark with every home we craft</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>To build trust based on an unshakable foundation</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>To exceed the standards we set for ourselves</span>
                    </motion.div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-600 mt-4 italic"
                  >
                    We endeavour to create properties that are unforgettable, unique and timeless.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                    className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-white text-2xl">👁️</span>
                  </motion.div>
                  <CardTitle className="text-2xl text-purple-600">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-gray-600 text-center text-lg"
                  >
                    To leave behind a legacy of exceptional style, thoughtful personalisation and
                    service that goes the extra mile.
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                    className="mt-6 flex justify-center"
                  >
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                    className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-white text-2xl">💎</span>
                  </motion.div>
                  <CardTitle className="text-2xl text-green-600">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-gray-600">
                    {values.map((value, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="flex items-start p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
                      >
                        <span className="font-semibold text-green-600 mr-3 mt-1">•</span>
                        <div>
                          <span className="font-semibold text-gray-900">{value.title}:</span>
                          <span className="ml-1">{value.description}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Our experienced team of professionals is dedicated to bringing your vision to life.
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="text-center overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-64 overflow-hidden"
                  >
                    <Image
                      src={`/images/project${(index % 6) + 1}.jpg`}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="absolute bottom-4 left-4 right-4 text-white"
                    >
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </motion.div>
                  </motion.div>

                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                      >
                        Connect
                      </motion.div>
                    </motion.div>
                  </CardContent>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg"
                  >
                    {index + 1}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals who share our passion for creating exceptional living spaces.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                View Career Opportunities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
