import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const Header = () => {
  // Navigation menu items
  const navItems = [
    { label: "Why iSelfie™", href: "#" },
    { label: "Pricing plans", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="flex w-full px-20 items-center justify-between py-4">
        <div className="flex gap-56 items-center">
          <div className="flex items-center">
            <img
              className="relative w-[32.68px] h-10"
              alt="Logo container"
              src="https://c.animaapp.com/uZnjnLUb/img/logo-container@2x.png"
            />

            <div className="inline-flex items-end gap-[3px] ml-1">
              <img
                className="w-[71.53px] h-[21.43px]"
                alt="Selfie"
                src="https://c.animaapp.com/uZnjnLUb/img/selfie@2x.png"
              />
              <img
                className="w-[11px] h-[5.7px]"
                alt="Tm"
                src="https://c.animaapp.com/uZnjnLUb/img/tm@2x.png"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <NavigationMenu className="mr-8">
            <NavigationMenuList className="flex gap-12">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Button
                    variant="ghost"
                    className="h-16 px-4 rounded-[40px] backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:bg-white/10 transition-colors duration-200"
                  >
                    {item.label}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="h-16 px-12 rounded-[40px] border border-solid border-[#a7907c80] bg-transparent backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:bg-white/10 transition-colors duration-200"
            >
              Login
            </Button>

            <Button className="h-16 px-12 bg-[#a7907c4c] rounded-[40px] backdrop-blur-[20px] font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:bg-[#a7907c6c] transition-colors duration-200">
              Try it now
            </Button>

            <Button
              variant="ghost"
              className="h-16 px-4 rounded-[40px] backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] underline [font-style:var(--desktop-label-font-style)] hover:bg-white/10 transition-colors duration-200"
            >
              EN
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
