import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import { MapPinned } from "lucide-react";

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

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
