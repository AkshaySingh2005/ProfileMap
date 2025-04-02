import { MapPinned } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <MapPinned className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ProfileMap , All rights reserved .
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <NavLink
            to="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Terms
          </NavLink>
          <NavLink
            to="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Privacy
          </NavLink>
          <NavLink
            to="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
