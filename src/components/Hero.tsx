"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Hero() {
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
              Your Dream Home Awaits in Coimbatore
            </h1>
            <p className="text-lg mb-6 text-blue-100 max-w-2xl">
              Discover premium residential properties crafted with excellence. From modern villas to contemporary homes,
              we build quality living spaces that blend luxury, comfort, and sustainability in Coimbatore and Udumalaipettai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Book Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book Your Property Consultation</DialogTitle>
                    <DialogDescription>
                      Connect with our real estate experts to find your perfect home in Coimbatore and Udumalaipettai. We&apos;ll help you discover properties that match your lifestyle and budget.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="email" className="text-right">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="phone" className="text-right">
                        Phone
                      </label>
                      <Input id="phone" placeholder="Your phone number" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="message" className="text-right">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell us about your property requirements, preferred locations, and budget range" className="col-span-3" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" onClick={() => setIsModalOpen(false)} className="bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                View Projects
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
              <Image src="/images/project1.jpg" alt="Modern Villa" width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">Modern Villa</h3>
              <p className="text-xs text-blue-100">Coimbatore</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-6">
              <Image src="/images/project2.jpg" alt="Luxury Apartment" width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">Luxury Apartment</h3>
              <p className="text-xs text-blue-100">Coimbatore</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Image src="/images/project3.jpg" alt="Cozy Bungalow" width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">Cozy Bungalow</h3>
              <p className="text-xs text-blue-100">Udumalaipettai</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-6">
              <Image src="/images/project4.jpg" alt="Contemporary House" width={400} height={96} className="w-full h-24 object-cover rounded" unoptimized />
              <h3 className="mt-2 font-semibold text-sm">Contemporary House</h3>
              <p className="text-xs text-blue-100">Coimbatore</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
