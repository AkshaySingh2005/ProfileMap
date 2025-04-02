import ProfileCard from "./profileCard";
import { useAppSelector } from "@/hooks/useAppSelector";

const Hero = () => {
  const profiles = useAppSelector((state) => state.profiles.profiles);

  return (
    <div className="container mx-auto p-4">
      <div className="text-2xl font-bold pl-3 mb-6">Profile Explorer</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
