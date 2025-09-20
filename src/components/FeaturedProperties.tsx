"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function FeaturedProperties() {
  const t = useTranslations('featuredProperties');

  const properties = [
    {
      id: 1,
      key: "modernVilla",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      key: "luxuryApartment",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      key: "cozyBungalow",
      image: "/images/project3.jpg"
    }
  ];

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
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => {
            const propertyData = t.raw(`properties.${property.key}`);
            return (
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
                      alt={propertyData.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          propertyData.status === 'Ready to Move'
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                        } text-white`}
                      >
                        {propertyData.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {propertyData.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          📍 {propertyData.location}
                        </p>
                        <p className="text-lg font-semibold text-blue-600">
                          {propertyData.priceRange}
                        </p>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">{t('plotSize')}</span>
                        <p className="font-semibold">{propertyData.plotSize}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">{t('builtArea')}</span>
                        <p className="font-semibold">{propertyData.builtArea}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">{t('bedrooms')}</span>
                        <p className="font-semibold">{propertyData.bedrooms}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">{t('location')}</span>
                        <p className="font-semibold">{propertyData.location.split(',')[0]}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">{t('highlights')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {propertyData.highlights.map((highlight: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        {t('viewDetails')}
                      </Button>
                      <Button variant="outline" className="flex-1">
                        {t('contactUs')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg">
              {t('viewAllProperties')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
