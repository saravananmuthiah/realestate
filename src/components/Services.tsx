"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const services = [
  {
    icon: "🏗️",
    titleKey: "customHomeConstruction",
    descriptionKey: "customHomeDescription",
    features: [
      "architecturalDesignConsultation",
      "customFloorPlans",
      "premiumMaterialSelection",
      "qualityConstructionManagement"
    ],
    popular: true
  },
  {
    icon: "🏘️",
    titleKey: "villaDevelopment",
    descriptionKey: "villaDescription",
    features: [
      "luxuryVillaDesigns",
      "swimmingPoolConstruction",
      "landscapingServices",
      "smartHomeIntegration"
    ],
    popular: true
  },
  {
    icon: "🏢",
    titleKey: "architecturalDesign",
    descriptionKey: "architecturalDescription",
    features: [
      "innovativeDesignSolutions",
      "sustainableArchitecture",
      "3dVisualization",
      "buildingPermits"
    ],
    popular: false
  },
  {
    icon: "🔄",
    titleKey: "projectManagement",
    descriptionKey: "projectDescription",
    features: [
      "timelineManagement",
      "budgetControl",
      "qualityAssurance",
      "regularUpdates"
    ],
    popular: false
  },
  {
    icon: "🎨",
    titleKey: "interiorDesign",
    descriptionKey: "interiorDescription",
    features: [
      "spacePlanning",
      "materialSelection",
      "colorSchemes",
      "furnitureLayout"
    ],
    popular: true
  },
  {
    icon: "🛠️",
    titleKey: "consultationServices",
    descriptionKey: "consultationDescription",
    features: [
      "propertyAnalysis",
      "investmentGuidance",
      "marketInsights",
      "legalSupport"
    ],
    popular: false
  }
];

export default function Services() {
  const t = useTranslations('services');
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  {t('popular')}
                </div>
              )}

              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: "spring" }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('whatsIncluded')}</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 + idx * 0.1 }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex-shrink-0"></span>
                          {t(feature)}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Learn More
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">{t('ourProcess.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: t('ourProcess.consultation.title'), desc: t('ourProcess.consultation.description') },
              { step: "02", title: t('ourProcess.design.title'), desc: t('ourProcess.design.description') },
              { step: "03", title: t('ourProcess.construction.title'), desc: t('ourProcess.construction.description') },
              { step: "04", title: t('ourProcess.handover.title'), desc: t('ourProcess.handover.description') }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {process.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('readyToStart.title')}</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('readyToStart.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                {t('readyToStart.scheduleConsultation')}
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold">
                {t('readyToStart.viewPortfolio')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
