"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredProperties = [
  {
    id: 1,
    title: "Modern Villa in Coimbatore",
    location: "Coimbatore, Tamil Nadu",
    priceRange: "₹50L - ₹80L",
    plotSize: "2400 sq ft",
    builtArea: "3200 sq ft",
    bedrooms: 4,
    image: "/images/project1.jpg",
    highlights: ["Swimming Pool", "Smart Home Features", "Garden"],
    status: "Ready to Move"
  },
  {
    id: 2,
    title: "Luxury Apartment Complex",
    location: "Coimbatore, Tamil Nadu",
    priceRange: "₹1Cr - ₹2Cr",
    plotSize: "N/A",
    builtArea: "2500 sq ft",
    bedrooms: 3,
    image: "/images/project2.jpg",
    highlights: ["Modern Amenities", "24x7 Security", "Parking"],
    status: "Under Construction"
  },
  {
    id: 3,
    title: "Cozy Bungalow in Udumalaipettai",
    location: "Udumalaipettai, Tamil Nadu",
    priceRange: "₹35L - ₹55L",
    plotSize: "1800 sq ft",
    builtArea: "2200 sq ft",
    bedrooms: 3,
    image: "/images/project3.jpg",
    highlights: ["Peaceful Location", "Garden", "Modular Kitchen"],
    status: "Ready to Move"
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most exclusive and sought-after properties in prime locations
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        property.status === 'Ready to Move'
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-blue-600 hover:bg-blue-700'
                      } text-white`}
                    >
                      {property.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {property.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        📍 {property.location}
                      </p>
                      <p className="text-lg font-semibold text-blue-600">
                        {property.priceRange}
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Plot Size:</span>
                      <p className="font-semibold">{property.plotSize}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Built Area:</span>
                      <p className="font-semibold">{property.builtArea}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Bedrooms:</span>
                      <p className="font-semibold">{property.bedrooms}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-semibold">{property.location.split(',')[0]}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg">
              View All Properties
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
