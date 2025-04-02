import { useAppSelector } from "@/hooks/useAppSelector";
import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus } from "lucide-react";

export default function AdminStats() {
  const profiles = useAppSelector((state) => state.profiles.profiles);
  const totalProfiles = profiles.length;

  const newThisMonth = Math.min(profiles.length, 2);

  return (
    <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard
        title="Total Profiles"
        value={totalProfiles.toString()}
        description="Total profiles in the database"
        icon={<Users className="h-4 w-4 text-blue-600" />}
        trend={{ value: "+12%", positive: true }}
      />

      <StatsCard
        title="New This Month"
        value={newThisMonth.toString()}
        description="Recently added profiles"
        icon={<UserPlus className="h-4 w-4 text-purple-600" />}
        trend={{ value: "+2", positive: true }}
      />
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
}

function StatsCard({ title, value, description, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
            {icon}
          </div>
          {trend && (
            <span
              className={`text-xs font-medium ${
                trend.positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend.value}
            </span>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
        <p className="text-xs text-muted-foreground mt-4">{description}</p>
      </CardContent>
    </Card>
  );
}
