"use client";

import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import MobileMenuSheet from "./MobileMenuSheet";
import SearchSheet from "./SearchSheet";
import ExperienceSheet from "./ExperienceSheet";
import ActivitiesSheet from "./ActivitiesSheet";

export default function MobileNavWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);

  // Lock the body scroll when any of the sheets are open
  useEffect(() => {
    if (menuOpen || openSearch || openExperience || openActivities) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scrolling is re-enabled if the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, openSearch, openExperience, openActivities]);

  return (
    <>
      <MobileNavbar
        onMenuClick={() => setMenuOpen(true)}
        onSearchClick={() => setOpenSearch(true)}
        onExperienceClick={() => setOpenExperience(true)}
        onActivitiesClick={() => setOpenActivities(true)}
      />

      <MobileMenuSheet isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <SearchSheet isOpen={openSearch} onClose={() => setOpenSearch(false)} />

      <ExperienceSheet
        isOpen={openExperience}
        onClose={() => setOpenExperience(false)}
      />

      <ActivitiesSheet
        isOpen={openActivities}
        onClose={() => setOpenActivities(false)}
      />
    </>
  );
}
