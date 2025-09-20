"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg mb-6 text-blue-100 max-w-2xl">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    {t('bookConsultation')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{t('consultationTitle')}</DialogTitle>
                    <DialogDescription>
                      {t('consultationDescription')}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">
                        {t('name')}
                      </label>
                      <Input id="name" placeholder={t('namePlaceholder')} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="email" className="text-right">
                        {t('email')}
                      </label>
                      <Input id="email" type="email" placeholder={t('emailPlaceholder')} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="phone" className="text-right">
                        {t('phone')}
                      </label>
                      <Input id="phone" placeholder={t('phonePlaceholder')} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="message" className="text-right">
                        {t('message')}
                      </label>
                      <Textarea id="message" placeholder={t('messagePlaceholder')} className="col-span-3" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                      {t('sendMessage')}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                {t('viewProjects')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Image src="https://placehold.co/400x300?text=Modern+Villa+400x300" alt={t('modernVilla')} width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">{t('modernVilla')}</h3>
              <p className="text-xs text-blue-100">{t('locationCoimbatore')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-6">
              <Image src="https://placehold.co/400x300?text=Luxury+Apartment+400x300" alt={t('luxuryApartment')} width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">{t('luxuryApartment')}</h3>
              <p className="text-xs text-blue-100">{t('locationCoimbatore')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Image src="https://placehold.co/400x300?text=Cozy+Bungalow+400x300" alt={t('cozyBungalow')} width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">{t('cozyBungalow')}</h3>
              <p className="text-xs text-blue-100">{t('locationUdumalaipettai')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-6">
              <Image src="https://placehold.co/400x300?text=Contemporary+House+400x300" alt={t('contemporaryHouse')} width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">{t('contemporaryHouse')}</h3>
              <p className="text-xs text-blue-100">{t('locationCoimbatore')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
