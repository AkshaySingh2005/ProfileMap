import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, User, MapPin, Image, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addProfile } from "@/slices/profileSlice";
import { useToast } from "@/hooks/use-toast";

export function AddDialog() {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    bio: "",
    description: "",
  });

  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSave = () => {
    if (!formData.name || !formData.location || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Dispatch the addProfile action
    dispatch(
      addProfile({
        id: Date.now().toString(),
        name: formData.name,
        image: formData.image || "https://via.placeholder.com/150", // Default image if none provided
        location: formData.location,
        bio: formData.bio,
        description: formData.description,
      })
    );

    // Show success toast
    toast({
      title: "Success",
      description: "Profile added successfully!",
      duration: 3000,
    });

    // Reset form data
    setFormData({
      name: "",
      image: "",
      location: "",
      bio: "",
      description: "",
    });

    // Close the dialog
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-9">
          <PlusCircle className="mr-1 h-4 w-4" />
          Add New Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Profile</DialogTitle>
          <DialogDescription>
            Add a new profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Name Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <div className="relative col-span-3">
              <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="Enter full name"
                className="pl-8"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Avatar URL Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Avatar URL
            </Label>
            <div className="relative col-span-3">
              <Image className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="image"
                placeholder="Enter avatar image URL"
                className="pl-8"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Address Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Address
            </Label>
            <div className="relative col-span-3">
              <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                placeholder="Enter address or location"
                className="pl-8"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Description Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              Bio
            </Label>
            <div className="relative col-span-3">
              <FileText className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="bio"
                placeholder="Write a short bio"
                className="pl-8"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <div className="relative col-span-3">
              <FileText className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="description"
                placeholder="Write your Description"
                className="pl-8"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
