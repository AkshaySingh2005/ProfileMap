// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, User } from "lucide-react";
import DetailsDialog from "../map/details_dialog";

interface Profile {
  id: string;
  name: string;
  location: string;
  bio: string;
  description: string;
  image: string;
}

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="w-full max-w-xs mx-auto space-y-1">
      <Card className="h-full flex flex-col">
        <CardContent className="p-4 flex-1 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="relative h-24 w-24 rounded-full overflow-hidden bg-muted mb-4">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="object-cover h-full w-full"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
              )}
            </div>

            <div className="text-center w-full">
              <h3 className="font-medium text-lg">{profile.name}</h3>

              <div className="flex items-start justify-center text-sm text-muted-foreground mt-2">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="leading-tight">{profile.location}</span>
              </div>
            </div>
          </div>

          <p className="text-sm mt-3 text-muted-foreground text-center">
            {profile.bio}
          </p>
        </CardContent>

        <CardFooter className="px-4 pb-4 pt-2 flex justify-between gap-2">
          <DetailsDialog profile={profile} />
        </CardFooter>
      </Card>
    </div>
  );
}
