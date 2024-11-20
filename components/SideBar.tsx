"use client";
import { HomeIcon, Layers2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";
import { buttonVariants } from "./ui/button";

const routes = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Workflows",
    icon: Layers2Icon,
    href: "/workflows",
  },
  {
    label: "credentials",
    icon: HomeIcon,
    href: "/credentials",
  },
  // {
  //   label: "Home",
  //   icon: HomeIcon,
  //   href: "",
  // },
];

function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">TODO Credits</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            <span>{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
