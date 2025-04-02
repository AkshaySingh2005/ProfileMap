import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Settings, LayoutDashboard } from "lucide-react";

import AdminStats from "./adminStats";
import AdminProfileList from "./adminProfileList";
import { AddDialog } from "./dialog_components/add_dialog";

export default function Dashboard() {
  return (
    <div className="container px-4 py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Manage your profiles and application settings.
          </p>
        </div>
        <AddDialog />
      </div>

      <div className="mb-8">
        <Suspense
          fallback={
            <div className="h-[120px] bg-muted/20 animate-pulse rounded-lg"></div>
          }
        >
          <AdminStats />
        </Suspense>
      </div>

      <Tabs defaultValue="profiles" className="space-y-6">
        <TabsList className="bg-background border">
          <TabsTrigger
            value="profiles"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Users className="h-4 w-4 mr-2" />
            Profiles
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </TabsTrigger>
          <TabsTrigger
            value="dashboard"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Dashboard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profiles" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Manage Profiles</CardTitle>
              <CardDescription>
                Add, edit, or remove profiles from the system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ProfileListSkeleton />}>
                <AdminProfileList />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Application Settings</CardTitle>
              <CardDescription>
                Configure your application settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium mb-4">Map Configuration</h3>
                <p className="text-muted-foreground mb-4">
                  Configure your Mapbox API settings for the interactive map
                  functionality.
                </p>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="mapbox-token"
                      className="text-sm font-medium"
                    >
                      Mapbox Access Token
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="mapbox-token"
                        type="password"
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example"
                        defaultValue="••••••••••••••••••••••••••••••"
                      />
                      <Button variant="outline" size="sm" className="h-9">
                        Update
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your Mapbox access token is used to display interactive
                      maps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-medium mb-4">Profile Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Configure default settings for new profiles.
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">
                        Default Location
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Set a default location for new profiles
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="flex h-9 w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="New York, USA"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">
                        Required Fields
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Make location data required for all profiles
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-6 w-11 cursor-pointer rounded-full bg-primary p-1">
                        <div className="h-4 w-4 rounded-full bg-white transition-transform translate-x-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                View statistics and analytics about your profiles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/10">
                <p className="text-muted-foreground">
                  Analytics dashboard coming soon
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProfileListSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-10 bg-muted/20 animate-pulse rounded-md mb-6"></div>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex items-center gap-4 border-b pb-4">
            <div className="h-12 w-12 rounded-full bg-muted/40 animate-pulse"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 w-1/4 bg-muted/40 animate-pulse rounded"></div>
              <div className="h-3 w-1/3 bg-muted/30 animate-pulse rounded"></div>
            </div>
            <div className="h-8 w-20 bg-muted/30 animate-pulse rounded"></div>
          </div>
        ))}
    </div>
  );
}
