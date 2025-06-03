import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = () => {

  return (
    <section className="bg-[#442a11] relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {/* Background layers */}
        <div className="absolute w-full h-full top-0 left-0 bg-[url(https://c.animaapp.com/uZnjnLUb/img/image002-1.png)] bg-cover bg-center">
          <div className="relative h-full bg-[url(https://c.animaapp.com/uZnjnLUb/img/image002-2.png)] bg-cover bg-center">
            <img
              className="absolute h-full right-0 object-cover"
              alt="Eye close-up"
              src="https://c.animaapp.com/uZnjnLUb/img/mask.png"
            />

            {/* CTA section */}
            <div className="flex flex-col w-full max-w-[583px] items-start gap-12 absolute bottom-[370px] left-1/2">
              <div className="flex flex-col items-start gap-12 w-full">
                <p className="font-desktop-body font-[number:var(--desktop-body-font-weight)] text-white text-[length:var(--desktop-body-font-size)] tracking-[var(--desktop-body-letter-spacing)] leading-[var(--desktop-body-line-height)] [font-style:var(--desktop-body-font-style)]">
                  Health conditions leave subtle signatures on your eyes and
                  face. iSelfie™ decodes these clues to unveil the dynamic story
                  of your everyday health.
                </p>
              </div>

              <div className="flex items-center gap-6">
<Button className="h-20 px-12 py-0 bg-purple rounded-[40px] backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:bg-purple/90 transition-colors duration-200">
  Get your insights now
</Button>

<Button
  variant="outline"
  className="h-20 px-12 py-0 rounded-[40px] border border-solid border-[#a7907c80] bg-transparent backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)] hover:bg-white/10 transition-colors duration-200"
>
  Why iSelfie™
</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute w-[131px] h-[130px] top-[472px] left-[542px] rounded-[65.5px/65px] border-[3px] border-dashed border-[#91893a]" />
        <div className="absolute w-[39px] h-[39px] top-[512px] left-[588px] rounded-[19.5px] border-[3px] border-dashed border-[#91893a]" />

        {/* Main headings */}
        <div className="absolute top-[427px] left-1/2 opacity-90 font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-[#eed6b5] text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] whitespace-nowrap [font-style:var(--desktop-h2-font-style)]">
          Your eyes
        </div>

        <div className="absolute top-[499px] left-1/2 opacity-70 font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-[#eed6b5] text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
          tell a story.
          <br />
          We unlock it.
        </div>

        {/* Space for the fixed header */}
        <div className="h-24"></div>
      </div>
    </section>
  );
};
