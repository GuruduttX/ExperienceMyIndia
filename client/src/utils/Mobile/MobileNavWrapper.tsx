"use client";

import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import MobileMenuSheet from "./MobileMenuSheet";
import SearchSheet from "./SearchSheet";
import ExperienceSheet from "./ExperienceSheet";

export default function MobileNavWrapper() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openExperience, setOpenExperience] = useState(false)

    return (
        <>
            <MobileNavbar onMenuClick={() => setMenuOpen(true)} onSearchClick={() => setOpenSearch(true)} onExperienceClick={() => setOpenExperience(true)} />

            <MobileMenuSheet
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

            <SearchSheet
                isOpen={openSearch}
                onClose={() => setOpenSearch(false)}
            />

            <ExperienceSheet
                isOpen={openExperience}
                onClose={() => setOpenExperience(false)}
            />

        </>
    );
}