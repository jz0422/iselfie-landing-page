import React from "react";

// Define the footer navigation data for better maintainability
const footerNavigation = {
  product: {
    title: "Product",
    links: ["Pricing", "How it works", "Heart health", "COVID-19"],
  },
  company: {
    title: "Company",
    links: ["About us", "Privacy", "Our values", "Invest", "Collaborate"],
  },
  support: {
    title: "Support",
    links: ["FAQ", "Contact us"],
  },
};

export const FooterSection = () => {
  return (
    <footer className="bg-black w-full">
      <div className="relative w-full">
        {/* Background image with gradient overlay */}
        <div className="w-full bg-[url(https://c.animaapp.com/uZnjnLUb/img/woman0003.png)] bg-cover bg-center">
          <div className="h-[326px] mt-auto [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />
        </div>

        {/* Horizontal line */}
        <img
          className="w-full h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/uZnjnLUb/img/line-34.svg"
        />

        {/* Icon container */}
        <img
          className="absolute w-[277px] h-[332px] top-[269px] left-1/2 -translate-x-1/2"
          alt="Icon container"
          src="https://c.animaapp.com/uZnjnLUb/img/icon-container.svg"
        />

        {/* Tagline */}
        <div className="absolute w-[705px] top-[359px] right-[20%] font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-sand text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
          Health.
          <br />
          Seen differently.
        </div>

        {/* Footer navigation */}
        <div className="flex justify-between px-20 absolute bottom-[200px] w-full">
          {/* Logo */}
          <img
            className="w-[32.68px] h-10"
            alt="Logo"
            src="https://c.animaapp.com/uZnjnLUb/img/icon-wrapper@2x.png"
          />

          {/* Navigation columns */}
          <div className="flex gap-[282px]">
            {/* Product column */}
            <div className="flex flex-col w-[163px] items-start gap-4">
              <div className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-taupe text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]">
                {footerNavigation.product.title}
              </div>

              {footerNavigation.product.links.map((link, index) => (
                <a
                  key={`product-${index}`}
                  href="#"
                  className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Company column */}
            <div className="flex flex-col w-[163px] items-start gap-4">
              <div className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-taupe text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]">
                {footerNavigation.company.title}
              </div>

              {footerNavigation.company.links.map((link, index) => (
                <a
                  key={`company-${index}`}
                  href="#"
                  className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Support column */}
            <div className="flex flex-col w-[163px] items-start gap-4">
              <div className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-taupe text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]">
                {footerNavigation.support.title}
              </div>

              {footerNavigation.support.links.map((link, index) => (
                <a
                  key={`support-${index}`}
                  href="#"
                  className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
