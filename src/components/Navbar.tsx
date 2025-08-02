'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Our Courses"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Colors</HoveredLink>
            <HoveredLink href="/courses">
              Basic Color Theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced Color Mixing
            </HoveredLink>
            <HoveredLink href="/courses">Color Theory in Practice</HoveredLink>
            <HoveredLink href="/courses">
              Color Production
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar