import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MapPinCheck, Loader } from "lucide-react";

interface DetailsDialogProps {
  profile: {
    id: string;
    name: string;
    image: string;
    location: string;
    bio: string;
    description: string;
  };
}

const geocodeCache = new Map<string, [number, number]>();

const DetailsDialog = ({ profile }: DetailsDialogProps) => {
  const { name, image, location, bio, description } = profile;

  const [position, setPosition] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (geocodeCache.has(location)) {
        setPosition(geocodeCache.get(location) || null);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://geocode.maps.co/search?q=${encodeURIComponent(
            location
          )}&api_key=67ed7fd911038119194227ohn20078d`
        ); //^^ I have not put the API key in .env file so that you can see the implementation.
        //^^ otherwise i would have put in .env file and then put that into .gitignore file and the api key is free
        const data = await response.json();
        if (data.length > 0) {
          const coords: [number, number] = [
            parseFloat(data[0].lat),
            parseFloat(data[0].lon),
          ];
          geocodeCache.set(location, coords);
          setPosition(coords);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [location]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex-1">
          Details
          <MapPinCheck />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Profile Details</DialogTitle>
        <DialogDescription className="sr-only">
          View detailed information about the profile and its location on the
          map.
        </DialogDescription>

        <div className="flex h-full">
          <div className="w-1/2 bg-white p-6 overflow-y-auto">
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden bg-muted mb-4">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold mb-2">{name}</h2>

              <p className="text-sm text-muted-foreground mb-4">{bio}</p>

              <div className="text-sm text-muted-foreground mb-4">
                <strong>Location:</strong> {location}
              </div>

              <div className="text-sm text-muted-foreground">
                <strong>Description:</strong>
                <p className="mt-2">{description}</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-gray-100 flex items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <Loader className="h-8 w-8 animate-spin text-gray-500" />
                <p className="text-sm text-gray-500 mt-2">Loading map...</p>
              </div>
            ) : position ? (
              <MapContainer
                center={position}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                  <Popup>{location}</Popup>
                </Marker>
              </MapContainer>
            ) : (
              <p className="text-center text-gray-500">Unable to load map.</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
