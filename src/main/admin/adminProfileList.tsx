import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  Trash,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import DeleteDialog from "@/main/admin/dialog_components/delete_dialog";
import { UpdateDialog } from "./dialog_components/update_dialog";

export default function AdminProfileList() {
  const profiles = useAppSelector((state) => state.profiles.profiles);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [profileToDelete, setProfileToDelete] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const pageCount = Math.ceil(filteredProfiles.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredProfiles.length);
  const currentData = filteredProfiles.slice(startIndex, endIndex);

  useEffect(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = profiles.filter((profile) => {
      if (searchCriteria === "name") {
        return profile.name.toLowerCase().includes(lowerSearchTerm);
      } else if (searchCriteria === "location") {
        return profile.location.toLowerCase().includes(lowerSearchTerm);
      } else if (searchCriteria === "bio") {
        return profile.bio.toLowerCase().includes(lowerSearchTerm);
      }
      return false;
    });
    setFilteredProfiles(filtered);
    setCurrentPage(1);
  }, [searchTerm, searchCriteria, profiles]);

  const goToPage = (page: number) => {
    const safePage = Math.max(1, Math.min(page, pageCount));
    setCurrentPage(safePage);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={`Search profiles by ${searchCriteria}...`}
            className="pl-8 pr-10 h-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Search Criteria Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Search by:</span>
          <Select
            value={searchCriteria}
            onValueChange={(value) => setSearchCriteria(value)}
          >
            <SelectTrigger className="h-9 w-[150px]">
              <SelectValue>{searchCriteria}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="bio">Bio</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Bio</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.length > 0 ? (
            currentData.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
                    {profile.image ? (
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="object-cover h-full w-full"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center">
                        <Eye className="h-5 w-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>{profile.name}</TableCell>
                <TableCell>{profile.location || "No location"}</TableCell>
                <TableCell className="truncate max-w-[200px]">
                  {profile.bio || "No bio available"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex items-center gap-1"
                    >
                      <NavLink to={`/profile/${profile.id}`}>
                        <Eye className="h-4 w-4" />
                        View
                      </NavLink>
                    </Button>
                    <UpdateDialog profile={profile} />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => setProfileToDelete(profile.id)}
                    >
                      <Trash className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No profiles found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableCaption>
          Showing {startIndex + 1}-{endIndex} of {filteredProfiles.length}{" "}
          profiles
        </TableCaption>
      </Table>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {pageCount}
          </p>
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => setPageSize(parseInt(value))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue>{pageSize}</SelectValue>
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 15, 20].map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => goToPage(pageCount)}
            disabled={currentPage === pageCount}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <DeleteDialog
        profileToDelete={profileToDelete}
        setProfileToDelete={setProfileToDelete}
      />
    </div>
  );
}
