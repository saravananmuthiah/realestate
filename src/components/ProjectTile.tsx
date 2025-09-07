import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectTileProps {
  title: string;
  location: string;
  plotSize: string;
  builtArea: string;
  bedrooms: string | number;
  amenities: string[];
  description: string;
  imageUrl: string;
  onViewPhotos: () => void;
  onKnowMore: () => void;
}

export default function ProjectTile({
  title,
  location,
  plotSize,
  builtArea,
  bedrooms,
  amenities,
  description,
  imageUrl,
  onViewPhotos,
  onKnowMore,
}: ProjectTileProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* Image Section */}
        <div className="relative h-full min-h-[300px] md:min-h-[400px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300" />
          <Button
            onClick={onViewPhotos}
            className="absolute bottom-4 left-4 bg-white text-black hover:bg-gray-100 rounded-md px-4 py-2"
          >
            View Photos
          </Button>
        </div>

        {/* Details Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{location}</p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-sm border-b border-gray-200 pb-4">
              <div className="text-center">
                <p className="font-semibold text-gray-900">Plot Size</p>
                <p className="text-gray-600">{plotSize}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Built Area</p>
                <p className="text-gray-600">{builtArea}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Bedrooms</p>
                <p className="text-gray-600">{bedrooms}</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Know More Link */}
          <div className="text-right mt-4">
            <button
              onClick={onKnowMore}
              className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
            >
              Know More →
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
