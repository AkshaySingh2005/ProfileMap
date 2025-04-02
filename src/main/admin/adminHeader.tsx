import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { MapPinned, ChevronDown, LogOut, Settings, User } from "lucide-react";
import ModeToggle from "@/components/header/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <NavLink to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <MapPinned className="h-6 w-6 text-[#4387f6]" />
            </motion.div>
            <span className="font-bold text-[26px] flex items-center">
              Profile<span className="text-[#4387f6]">Map</span>
            </span>
          </NavLink>
        </motion.div>
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink
              to="/"
              className={`${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink
              to="/admin"
              className={`${
                pathname === "/admin" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Admin
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 gap-1">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline-block"></span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  <LogOut className="mr-2 h-4 w-4 " />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
