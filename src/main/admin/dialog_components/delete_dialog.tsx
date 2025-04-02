import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { deleteProfile } from "@/slices/profileSlice";
import { useToast } from "@/hooks/use-toast";

interface DeleteDialogProps {
  profileToDelete: string | null;
  setProfileToDelete: (id: string | null) => void;
}

const DeleteDialog = ({
  profileToDelete,
  setProfileToDelete,
}: DeleteDialogProps) => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleDeleteProfile = () => {
    if (profileToDelete) {
      // Dispatch the delete action
      dispatch(deleteProfile(profileToDelete));

      // Show success toast
      toast({
        title: "Profile Deleted",
        description: "The profile has been successfully deleted.",
        duration: 3000, // Toast will disappear after 3 seconds
      });

      // Reset the profileToDelete state
      setProfileToDelete(null);
    } else {
      // Show error toast if no profile is selected
      toast({
        title: "Error",
        description: "No profile selected for deletion.",
        variant: "destructive",
        duration: 3000, // Toast will disappear after 3 seconds
      });
    }
  };

  return (
    <AlertDialog
      open={!!profileToDelete}
      onOpenChange={(open) => !open && setProfileToDelete(null)}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            profile and all associated data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteProfile}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;