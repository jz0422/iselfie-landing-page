import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const Header = () => {
  const [language, setLanguage] = useState("EN");
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);

  // Navigation menu items
  const navItems = [
    { label: "Why iSelfie™", href: "#" },
    { label: "Pricing plans", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "AR" : "EN");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="flex w-full px-20 items-center justify-between py-6">
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
                    className="h-16 px-4 rounded-[40px] backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:text-[#956ad9] hover:bg-transparent transition-colors duration-300"
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
              className="h-16 px-12 rounded-[40px] border border-solid border-[#a7907c80] bg-transparent backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:border-[#f2e2d4] hover:bg-white/5 hover:text-white transition-colors duration-300"
            >
              Login
            </Button>

            <Button className="h-16 px-12 bg-[#a7907c4c] rounded-[40px] backdrop-blur-[20px] font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:bg-[#a7907c] transition-colors duration-300"
            >
              Try it now
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Button
                    variant="ghost"
                    className="h-16 px-4 rounded-[40px] backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:text-[#956ad9] hover:bg-transparent transition-colors duration-300"
                    onClick={toggleLanguage}
                  >
                    {language}
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
