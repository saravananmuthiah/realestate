"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectTile from "@/components/ProjectTile";
import projectsData from "@/lib/data/projects.json";

interface Project {
  id: number;
  title: string;
  location: string;
  priceRange: string;
  plotSize: string;
  builtArea: string;
  bedrooms: number;
  amenities: string[];
  description: string;
  image: string;
  highlights: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPhotos = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleKnowMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of beautifully crafted homes. Each project reflects our commitment to quality and innovation.
          </p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <ProjectTile
                  title={project.title}
                  location={project.location}
                  plotSize={project.plotSize}
                  builtArea={project.builtArea}
                  bedrooms={project.bedrooms}
                  amenities={project.amenities}
                  description={project.description}
                  imageUrl={project.image}
                  onViewPhotos={() => handleViewPhotos(project)}
                  onKnowMore={() => handleKnowMore(project)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>
              {selectedProject?.location} - {selectedProject?.priceRange}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="aspect-video bg-gray-200 relative rounded-lg overflow-hidden">
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.amenities?.map((amenity, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold">Plot Size</p>
                <p>{selectedProject?.plotSize}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Built Area</p>
                <p>{selectedProject?.builtArea}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Bedrooms</p>
                <p>{selectedProject?.bedrooms}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {selectedProject?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
